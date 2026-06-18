// ═══════════════════════════════════════════════════════
// CREATURE UNLOCKS & RARITY
// ═══════════════════════════════════════════════════════
// ── BATTLE QUEUE ─────────────────────────────────────
function initBattleQueue(){
  // Build from scratch if missing or empty
  if(!S.battleUnlocked||S.battleUnlocked.length===0){
    const allIds=CREATURES.map(c=>c.id);
    const withVic=allIds.filter(id=>(S.victories[id]||0)>0);
    const remaining=allIds.filter(id=>!withVic.includes(id));
    S.battleUnlocked=[...withVic];
    S.battleQueue=[...remaining];
    // Ensure at least 4 unlocked
    while(S.battleUnlocked.length<4&&S.battleQueue.length>0){
      S.battleUnlocked.push(S.battleQueue.shift());
    }
  }else{
    // Ensure queue is clean (remove any IDs already unlocked)
    S.battleQueue=(S.battleQueue||[]).filter(id=>!S.battleUnlocked.includes(id));
  }
  ensureFightable();
}

// Guarantee at least one UNLOCKED creature is not yet maxed. If every unlocked
// creature is maxed (e.g. vicReq lowered, or all beaten), pull from the queue
// until a fightable one is unlocked — prevents an empty battle grid dead-end.
function ensureFightable(){
  const hasFightable=()=>S.battleUnlocked.some(id=>{const c=getCreature(id);return c&&!isMaxed(c);});
  while(!hasFightable() && S.battleQueue && S.battleQueue.length>0){
    S.battleUnlocked.push(S.battleQueue.shift());
  }
}
function unlockNextCreature(){
  if(!S.battleQueue||S.battleQueue.length===0)return;
  const window=Math.min(2,S.battleQueue.length);
  const pick=Math.floor(Math.random()*window);
  const id=S.battleQueue.splice(pick,1)[0];
  S.battleUnlocked.push(id);
  const c=getCreature(id);
  if(c){
    addLog(`<span style="color:var(--green)">◆ A new enemy has stepped forward: <b>${c.name}</b>.</span>`);
    toast(`New foe: ${c.name}`,3000);
  }
  renderBattle();
}
function isUnlocked(id){return S.battleUnlocked&&S.battleUnlocked.includes(id);}

function getRarityChances(){
  const ups=S.masteryUpgrades||{};
  const unc=0+(ups.unc_rate||0)*1;
  const rare=0+(ups.rare_rate||0)*0.5;
  const epic=0+(ups.epic_rate||0)*0.2;
  const leg=0+(ups.leg_rate||0)*0.05;
  return{uncommon:Math.min(unc,50),rare:Math.min(rare,25),epic:Math.min(epic,10),legendary:Math.min(leg,5)};
}
function rollRarity(){
  const ch=getRarityChances();
  const r=Math.random()*100;
  if(r<ch.legendary)return'legendary';
  if(r<ch.legendary+ch.epic)return'epic';
  if(r<ch.legendary+ch.epic+ch.rare)return'rare';
  if(r<ch.legendary+ch.epic+ch.rare+ch.uncommon)return'uncommon';
  return'common';
}
function getSpawnRarity(id){
  if(!S.spawnRarity)S.spawnRarity={};
  if(!S.spawnRarity[id])S.spawnRarity[id]=rollRarity();
  return S.spawnRarity[id];
}

// ═══════════════════════════════════════════════════════
// battle
// ═══════════════════════════════════════════════════════

// Turn time = SPD directly (in ms). Lower SPD = faster turns.
// 1ms safety floor so a turn can never be 0ms (which would freeze the game).
function playerTurnTime(){
  return Math.max(1, S.stats.spd);
}
function enemyTurnTime(c){
  // Enemies with no spd set default to 3000ms (3s), not 0.
  return Math.max(1, (c && c.spd != null) ? c.spd : 3000);
}

function startBattle(creatureId){
  const c = getCreature(creatureId);
  if(!c) return;
  if(B.dying){ toast('Still recovering from defeat!', 2000); return; }
  S.currentCreature = creatureId;
  B.rarity = getSpawnRarity(creatureId);
  const rarityMult = RARITY_MULTS[B.rarity] || 1;
  B.creature = {...c, atk:c.atk*rarityMult, hp:c.hp*rarityMult};
  B.active = true;
  B.dying = false;
  B.enemyHP = B.creature.hp;
  B.lastTick = Date.now();
  B.playerTimer = playerTurnTime();
  B.enemyTimer = enemyTurnTime(B.creature);
  updateBattleUI();
  const rc = RARITY_COLORS[B.rarity];
  const rl = RARITY_LABELS[B.rarity];
  addLog(`<span style="color:${B.rarity==='common'?'#ffffff':rc}">⚔ ${c.name} appears [${rl}]${B.rarity!=='common'?' ×'+RARITY_MULTS[B.rarity]:''}</span>`);
  renderBattle();
  document.getElementById('ac-details').textContent = c.name;
}
function updateBattleUI(){
  const c = B.creature;
  const ptimerBar = document.getElementById('ptimer-bar');
  const etimerBar = document.getElementById('etimer-bar');
  const ptimerText = document.getElementById('ptimer-text');
  const etimerText = document.getElementById('etimer-text');

  if(!c || B.dying){
    const ppct = Math.max(0, B.playerHP / maxHP() * 100);
    document.getElementById('battle-creature-name').textContent = 'SELECT A CREATURE';
    document.getElementById('battle-creature-name').style.color = 'var(--white)';
    document.getElementById('battle-creature-tag').textContent = '';
    document.getElementById('enemy-hp-bar').style.width = '0%';
    document.getElementById('enemy-hp-text').textContent = '—';
    document.getElementById('player-hp-bar').style.width = ppct + '%';
    document.getElementById('player-hp-text').textContent = `${Math.max(0, B.playerHP).toFixed(2)} / ${maxHP().toFixed(2)}`;
    document.getElementById('battle-art').innerHTML = '';

    if(ptimerBar){ ptimerBar.style.width = '0%'; ptimerText.textContent = '—'; }
    if(etimerBar){ etimerBar.style.width = '0%'; etimerText.textContent = '—'; }
    return;
  }

  const rc = RARITY_COLORS[B.rarity || 'common'];
  const rl = RARITY_LABELS[B.rarity || 'common'];
  document.getElementById('battle-creature-name').textContent = c.name;
  document.getElementById('battle-creature-name').style.color = rc || 'var(--white)';
  document.getElementById('battle-creature-tag').textContent = '';
  document.getElementById('battle-art').innerHTML = c.img ? `<img src="${c.img}" style="width:100%;height:100%;object-fit:cover;">` : (SVGs[c.id] || '');
  document.getElementById('player-art').innerHTML = '<div style="font-size:22px;opacity:0.4;">★</div>';

  const epct = Math.max(0, B.enemyHP / c.hp * 100);
  const ppct = Math.max(0, B.playerHP / maxHP() * 100);
  document.getElementById('enemy-hp-bar').style.width = epct + '%';
  document.getElementById('enemy-hp-text').textContent = `${B.enemyHP.toFixed(2)} / ${c.hp}`;
  document.getElementById('player-hp-bar').style.width = ppct + '%';
  document.getElementById('player-hp-text').textContent = `${Math.max(0, B.playerHP).toFixed(2)} / ${maxHP().toFixed(2)}`;

  // Timer bars
  if(B.active && !B.dying){
    const pInterval = playerTurnTime();
    const eInterval = enemyTurnTime(c);
    const pFill = Math.max(0, Math.min(100, (1 - B.playerTimer / pInterval) * 100));
    const eFill = Math.max(0, Math.min(100, (1 - B.enemyTimer / eInterval) * 100));
    if(ptimerBar){ ptimerBar.style.width = pFill + '%'; ptimerText.textContent = (Math.max(0, B.playerTimer) / 1000).toFixed(2) + 's'; }
    if(etimerBar){ etimerBar.style.width = eFill + '%'; etimerText.textContent = (Math.max(0, B.enemyTimer) / 1000).toFixed(2) + 's'; }
  }



}

function stopBattle(fled = false){
  B.active = false;
  S.currentCreature = null;
  B.creature = null;
  if(fled){
    B.dying = true;
    B.deathStart = Date.now();
    B.fleeRecovery = true;
    document.getElementById('death-overlay-title').textContent = 'FLED';
    document.getElementById('death-overlay-sub').textContent = 'RECOVERING...';
    document.getElementById('death-overlay').style.display = 'block';
  } else {
    renderBattle();
    updateBattleUI();
  }
  document.getElementById('ac-details').textContent = S.protocols.autoChallenge ? 'ENABLED' : 'DISABLED';
}

function battleTick(){
  if(B.dying){
  const duration = B.fleeRecovery ? 5 * masteryFleeTimeMult() : 10 * masteryDeathTimeMult();
  const elapsed = ((Date.now() - B.deathStart) / 1000) * (S.gameSpeed || 1);
  const remaining = Math.max(0, duration - elapsed);
  document.getElementById('death-timer').textContent = Math.ceil(remaining);
  if(remaining <= 0){
    document.getElementById('death-overlay').style.display = 'none';
    const wasFlee = B.fleeRecovery;
    B.dying = false;
    B.fleeRecovery = false;
    if(!wasFlee) B.playerHP = maxHP();   // full heal only on actual defeat
    renderBattle();
    if(!wasFlee && S.protocols.autoRetry && B.lastCreatureId){
      startBattle(B.lastCreatureId);
    } else {
      B.active = false;
      S.currentCreature = null;
    }
  }
  return;
}
  if(!B.active || !B.creature) return;
  const now = Date.now();
  const dt = Math.min(now - B.lastTick, 500) * (S.gameSpeed || 1);
  B.lastTick = now;
  B.playerTimer -= dt;
  B.enemyTimer -= dt;
  if(B.playerTimer <= 0){
    firePlayerTurn();
    if(!B.active) return;
    B.playerTimer = playerTurnTime();
  }
  if(!B.active) return;
  if(B.enemyTimer <= 0){
    fireEnemyTurn();
    if(!B.active) return;
    B.enemyTimer = enemyTurnTime(B.creature);
  }
}

function regenTick(dt){
  if(!B.active || B.dying) return;
  // Player regen
  if((S.stats.rgn ?? 0) > 0){
    B.playerHP = Math.min(maxHP(), B.playerHP + S.stats.rgn * (dt || 0));
  }
  // Enemy regen
  if(B.creature && (B.creature.rgn ?? 0) > 0 && B.enemyHP > 0){
    B.enemyHP = Math.min(B.creature.hp, B.enemyHP + B.creature.rgn * (dt || 0));
  }
}

// ── REST ──────────────────────────────────────────────
// Heals 10% of max HP per second until full or interrupted.
// Passive heal: +10% max HP per second while idle
// (not in battle, not in defeat/flee recovery). Scales with game speed via dt.
function restTick(dt){
  if(B.active || B.dying) return;        // skip during battle, recovery, or flee
  const mhp = maxHP();
  if(B.playerHP >= mhp) return;          // already full
  B.playerHP = Math.min(mhp, B.playerHP + mhp * 0.10 * (dt || 0));
}


// Shared per-turn damage roller. Rolls 1–2 hits (multi-hit), each one
// independently crit / blocked / armor-reduced, in the EXACT Math.random()
// order the old inline loops used (base → crit → block → multi-hit continue).
//   atkValue : attacker's effective ATK (already mastery-boosted for the player)
//   atkr     : attacker stat source (S.stats or creature) — reads mnd/mxd/crc/crd/mth
//   defr     : defender stat source — reads blk/bld/arm
// Returns { totalDmg, hits, isCrit }.
function rollAttackDamage(atkValue, atkr, defr){
  const mnd = atkValue * (atkr.mnd ?? 0.7);
  const mxd = atkValue * (atkr.mxd ?? 1.0);
  let totalDmg = 0, hits = 0, isCrit = false;
  do {
    let rolled = mnd + Math.random() * (mxd - mnd);
    if(Math.random() < (atkr.crc ?? 0)){ rolled *= (atkr.crd ?? 1); isCrit = true; }
    if(Math.random() < (defr.blk ?? 0)) rolled = Math.max(0, rolled - (defr.bld ?? 0));
    rolled = Math.max(0, rolled - (defr.arm ?? 0));
    totalDmg += rolled;
    hits++;
  } while(Math.random() < (atkr.mth ?? 0) && hits < 2);
  return { totalDmg, hits, isCrit };
}

function firePlayerTurn(){
  const c = B.creature;
  const st = S.stats;

  // Hit Check
  const ddc = c.ddc ?? 0;
  const acc = st.acc ?? 0;
  const isMiss = acc >= ddc ? false : Math.random() < (ddc - acc);

  if(isMiss){
    addLog(`<span class="log-info">You swing at <b>${c.name}</b> — MISS!</span>`);
  } else {

    // Damage Calc — player ATK is boosted by mastery before rolling
    const atkEff = st.atk * masteryAtkMult();
    const { totalDmg, hits, isCrit } = rollAttackDamage(atkEff, st, c);

    // Apply Damage
    B.enemyHP = Math.max(0, B.enemyHP - totalDmg);
    DTHit.enemy(totalDmg, isCrit);
    // Log
    const hitStr = hits > 1 ? ` <span style="color:var(--cyan)">(${hits} hits!)</span>` : '';
    if(isCrit){
      addLog(`<span class="log-crit">✦ CRIT — <b>${totalDmg.toFixed(2)}</b> to ${c.name}!${hitStr}</span>`);
    } else {
      addLog(`<span class="log-pdmg">You deal <b>${totalDmg.toFixed(2)}</b> to <b>${c.name}</b>.${hitStr}</span>`);
    }

    if(B.enemyHP <= 0){ onWin(); return; }

    // Counter Check — only if enemy still alive
    if(Math.random() < (c.ctr ?? 0)){
      addLog(`<span class="log-warn"><b>${c.name}</b> counters!</span>`);
      fireEnemyCounterAttack();
      if(!B.active) return;
    }
  }

  // Win Check
  if(B.enemyHP <= 0) onWin();
}

function fireEnemyTurn(){
  const c = B.creature;
  const st = S.stats;

  // Hit Check (enemy acc vs player ddc)
  const ddc = st.ddc ?? 0;
  const acc = c.acc ?? 0;
  const isMiss = acc >= ddc ? false : Math.random() < (ddc - acc);

  if(isMiss){
    addLog(`<span class="log-info"><b>${c.name}</b> swings at you — MISS!</span>`);
  } else {

    // Damage Calc — shared roller (attacker=creature, defender=player)
    const { totalDmg, hits, isCrit } = rollAttackDamage(c.atk, c, st);

    // Apply Damage
    B.playerHP = Math.max(0, B.playerHP - totalDmg);
    DTHit.player(totalDmg, isCrit);

    // Counter Check (player counters enemy hit)
    if(Math.random() < (st.ctr ?? 0)){
      const cMnd = st.atk * (st.mnd ?? 0.7);
      const cMxd = st.atk * (st.mxd ?? 1.0);
      let counterDmg = cMnd + Math.random() * (cMxd - cMnd);
      counterDmg = Math.max(0, counterDmg - (c.arm ?? 0));
      B.enemyHP = Math.max(0, B.enemyHP - counterDmg);
      DTHit.enemy(counterDmg, true);
      addLog(`<span class="log-crit">↩ COUNTER — <b>${counterDmg.toFixed(2)}</b> to ${c.name}!</span>`);
      if(B.enemyHP <= 0){ onWin(); return; }
    }

    // Log
    const hitStr = hits > 1 ? ` <span style="color:var(--cyan)">(${hits} hits!)</span>` : '';
    if(isCrit){
      addLog(`<span class="log-crit">✦ ${c.name} CRITS — <b>${totalDmg.toFixed(2)}</b> to you!${hitStr}</span>`);
    } else {
      addLog(`<span class="log-die"><b>${c.name}</b> hits you for <b>${totalDmg.toFixed(2)}</b>.${hitStr}</span>`);
    }
  }

  // Lose Check
  if(B.playerHP <= 0) onLose();
}

function fireEnemyCounterAttack(){
  const c = B.creature;
  const st = S.stats;

  // Damage Calc — shared roller (counter always hits; attacker=creature)
  const { totalDmg, hits, isCrit } = rollAttackDamage(c.atk, c, st);

  // Apply Damage
  B.playerHP = Math.max(0, B.playerHP - totalDmg);
  DTHit.player(totalDmg, isCrit);

  const hitStr = hits > 1 ? ` <span style="color:var(--cyan)">(${hits} hits!)</span>` : '';
  if(isCrit){
    addLog(`<span class="log-crit">✦ ${c.name} counter CRITS — <b>${totalDmg.toFixed(2)}</b> to you!${hitStr}</span>`);
  } else {
    addLog(`<span class="log-die"><b>${c.name}</b> counter hits you for <b>${totalDmg.toFixed(2)}</b>.${hitStr}</span>`);
  }

  // Player counter back
  if(Math.random() < (st.ctr ?? 0)){
    const cMnd = st.atk * (st.mnd ?? 0.7);
    const cMxd = st.atk * (st.mxd ?? 1.0);
    let counterDmg = cMnd + Math.random() * (cMxd - cMnd);
    counterDmg = Math.max(0, counterDmg - (c.arm ?? 0));
    B.enemyHP = Math.max(0, B.enemyHP - counterDmg);
    DTHit.enemy(counterDmg, true);
    addLog(`<span class="log-crit">↩ COUNTER — <b>${counterDmg.toFixed(2)}</b> to ${c.name}!</span>`);
    if(B.enemyHP <= 0){ onWin(); return; }
  }

  // Lose Check
  if(B.playerHP <= 0) onLose();
}

function onWin(){
  if(!B.active) return;
  B.active = false;

  const c = B.creature;

  // Victory Tracking
  if(!S.victories[c.id]) S.victories[c.id] = 0;
  const prevVic = S.victories[c.id];
  S.victories[c.id] += 1 + masteryBonusVictories();
  const cap = effVicReq(c);
  const justCompleted = prevVic < cap && S.victories[c.id] >= cap;
  addLog(`<span class="log-win">✓ Defeated ${c.name}! (${Math.min(S.victories[c.id], cap)}/${cap})</span>`);
  if(justCompleted){ unlockNextCreature(); ensureFightable(); }

  // Reward Multipliers
  const rewardMult = 1; // reincarnation no longer grants a reward bonus
  const rarityMult = RARITY_MULTS[B.rarity || 'common'] || 1;
  const n = prevVic;
  const decayMult = 1 / (1 + masteryDecay() * n);
  if(rarityMult > 1) addLog(`<span style="color:${RARITY_COLORS[B.rarity]}">★ ${RARITY_LABELS[B.rarity]} bonus ×${rarityMult} applied!</span>`);

  // Apply Rewards
  const gainStrs = [];
  Object.entries(c.rewards).forEach(([k, v]) => {
    const amount = v * rewardMult * rarityMult * decayMult * masteryGainMult(k);
    if(['old', 'bronze', 'silver'].includes(k)){
      S.resources[k] = (S.resources[k] || 0) + amount;
      if(k === 'old'){
        if(!S.lifetimeEarned) S.lifetimeEarned = {old:0};
        S.lifetimeEarned.old = (S.lifetimeEarned.old || 0) + amount;   // drives M.Old milestone (lifetime)
        if(!S.sessionEarned) S.sessionEarned = {old:0,bronze:0,silver:0,gold:0,plat:0};
        S.sessionEarned.old = (S.sessionEarned.old || 0) + amount;     // WELLSPRING basis (session)
      } else if(['bronze','silver','gold','plat'].includes(k)){
        if(!S.sessionEarned) S.sessionEarned = {old:0,bronze:0,silver:0,gold:0,plat:0};
        S.sessionEarned[k] = (S.sessionEarned[k] || 0) + amount;
      }
      // Codex bonus: first-ever victory on a creature = +1% ATK and HP.
      // Tracked in S.codexUnlocked (persists across reincarnate) so each
      // creature grants the bonus only ONCE, ever — re-killing after a
      // reincarnate does not re-grant it.
      if(!S.codexUnlocked) S.codexUnlocked = {};
      if(!S.codexUnlocked[c.id]){
      S.codexUnlocked[c.id] = true;
      const atkBonus = S.stats.atk * 0.01;
      const hpBonus  = S.stats.hp  * 0.01;
      S.stats.atk += atkBonus;
      S.stats.hp  += hpBonus;
      S.codexBonusApplied = (S.codexBonusApplied || 0) + 1;
      addLog(`<span style="color:var(--green)">📖 CODEX UNLOCK — ATK +1% / HP +1% (${S.codexBonusApplied} total)</span>`);
      toast(`Codex unlock! ATK & HP +1%`, 3000);
      }
    } else if(S.stats[k] !== undefined){
      S.stats[k] += amount;
    }
    gainStrs.push(`${RESOURCE_LABELS[k] || k.toUpperCase()} ${amount >= 0 ? '+' : ''}${amount.toFixed(2)}`);
  });
  addLog(`<span class="log-reward">↳ Rewards: ${gainStrs.join(', ')}</span>`);

  // Render
  renderStats();
  renderFundamentals();
  renderBattle();

  // Maxed check — always stop
  if(isMaxed(c)){
    addLog(`<span class="log-win">★ ${c.name} fully defeated!</span>`);
    stopBattle();
    return;
  }

  // Not maxed — continue if autoChallenge active
  if(S.protocols.autoChallenge){
    B.active = true;
    B.enemyHP = B.creature.hp;
    B.lastTick = Date.now();
    B.playerTimer = playerTurnTime();         
    B.enemyTimer = enemyTurnTime(B.creature); 
  } else {
    stopBattle();
  }
}

function onLose(){
  B.active=false;
  B.dying=true;
  B.deathStart=Date.now();
  S.deaths=(S.deaths||0)+1;
  const defeatedName=B.creature?B.creature.name:'unknown';
  B.lastCreatureId = B.creature ? B.creature.id : null;
  S.currentCreature=null;
  B.creature=null;
  document.getElementById('death-overlay-title').textContent = 'DEFEATED';
  document.getElementById('death-overlay-sub').textContent = 'RECOVERING...';
  document.getElementById('death-overlay').style.display='block';
  addLog(`<span class="log-die">✗ You were defeated by ${defeatedName}. (Deaths: ${S.deaths})</span>`);
  updateBattleUI();
  renderBattle();
}

function addLog(html){
  if(!S.settings.combatLog)return;
  const log=document.getElementById('battle-log');
  log.innerHTML=`<div class="log-entry">${html}</div>`+log.innerHTML;
  if(log.children.length>50)log.removeChild(log.lastChild);
}