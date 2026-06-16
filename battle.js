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
}
function unlockNextCreature(){
  if(!S.battleQueue||S.battleQueue.length===0)return;
  const window=Math.min(4,S.battleQueue.length);
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
  const unc=30+(ups.unc_rate||0)*1;
  const rare=20+(ups.rare_rate||0)*0.5;
  const epic=10+(ups.epic_rate||0)*0.2;
  const leg=10+(ups.leg_rate||0)*0.05;
  return{uncommon:Math.min(unc,40),rare:Math.min(rare,15),epic:Math.min(epic,5),legendary:Math.min(leg,2)};
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
  B.playerTimer = Math.max(200, 3000 - S.stats.spd);
  B.enemyTimer = Math.max(200, 3000 - (B.creature.spd ?? 0));
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
    document.getElementById('player-hp-text').textContent = `${Math.max(0, B.playerHP).toFixed(1)} / ${maxHP().toFixed(1)}`;
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
  document.getElementById('enemy-hp-text').textContent = `${B.enemyHP.toFixed(1)} / ${c.hp}`;
  document.getElementById('player-hp-bar').style.width = ppct + '%';
  document.getElementById('player-hp-text').textContent = `${Math.max(0, B.playerHP).toFixed(1)} / ${maxHP().toFixed(1)}`;

  // Timer bars
  if(B.active && !B.dying){
    const pInterval = Math.max(200, 3000 - S.stats.spd);
    const eInterval = Math.max(200, 3000 - (c.spd ?? 0));
    const pFill = Math.max(0, Math.min(100, (1 - B.playerTimer / pInterval) * 100));
    const eFill = Math.max(0, Math.min(100, (1 - B.enemyTimer / eInterval) * 100));
    if(ptimerBar){ ptimerBar.style.width = pFill + '%'; ptimerText.textContent = (Math.max(0, B.playerTimer) / 1000).toFixed(1) + 's'; }
    if(etimerBar){ etimerBar.style.width = eFill + '%'; etimerText.textContent = (Math.max(0, B.enemyTimer) / 1000).toFixed(1) + 's'; }
  }



}

function stopBattle(){
  B.active=false;
  S.currentCreature=null;
  B.creature=null;
  B.creature=null;
  renderBattle();
  updateBattleUI();
  document.getElementById('ac-details').textContent=S.protocols.autoChallenge?'ENABLED':'DISABLED';
}

function battleTick(){
  if(B.dying){
    const elapsed = (Date.now() - B.deathStart) / 1000;
    const remaining = Math.max(0, 10 - elapsed);
    document.getElementById('death-timer').textContent = Math.ceil(remaining);
    if(remaining <= 0){
      document.getElementById('death-overlay').style.display = 'none';
      B.dying = false;
      B.playerHP = maxHP();
      renderBattle();
    if(S.protocols.autoRetry && B.creature){
      startBattle(B.creature.id);
      } else {
        B.active = false;
        S.currentCreature = null;
        }
      }
    return;
  }
  if(!B.active || !B.creature) return;
  const now = Date.now();
  const dt = Math.min(now - B.lastTick, 500);
  B.lastTick = now;
  B.playerTimer -= dt;
  B.enemyTimer -= dt;
  if(B.playerTimer <= 0){
    firePlayerTurn();
    if(!B.active) return;
    B.playerTimer = Math.max(200, 3000 - S.stats.spd);
  }
  if(!B.active) return;
  if(B.enemyTimer <= 0){
    fireEnemyTurn();
    if(!B.active) return;
    B.enemyTimer = Math.max(200, 3000 - (B.creature.spd ?? 0));
  }
}

function regenTick(){
  if(!B.active || B.dying) return;
  if((S.stats.rgn ?? 0) <= 0) return;
  B.playerHP = Math.min(maxHP(), B.playerHP + S.stats.rgn);
}

function firePlayerTurn(){
  const c = B.creature;
  const st = S.stats;

  // Hit Check
  const ddc = c.ddc ?? 0;
  const acc = st.acc ?? 1;
  const isMiss = acc >= ddc ? false : Math.random() < (ddc - acc);

  if(isMiss){
    addLog(`<span class="log-info">You swing at <b>${c.name}</b> — MISS!</span>`);
  } else {

    // Damage Calc
    const isCrit = Math.random() < (st.crc ?? 0);
    const mnd = st.atk * (st.mnd ?? 0.7);
    const mxd = st.atk * (st.mxd ?? 1.0);
    let totalDmg = 0;
    let hits = 0;

    do {
      let rolled = mnd + Math.random() * (mxd - mnd);
      if(isCrit) rolled *= (st.crd ?? 1);
      const isBlock = Math.random() < (c.blk ?? 0);
      if(isBlock) rolled = Math.max(0, rolled - (c.bld ?? 0));
      rolled = Math.max(0, rolled - (c.arm ?? 0));
      totalDmg += rolled;
      hits++;
    } while(Math.random() < (st.mth ?? 0) && hits < 10);

    // Apply Damage
    B.enemyHP = Math.max(0, B.enemyHP - totalDmg);

    // Log
    const hitStr = hits > 1 ? ` <span style="color:var(--cyan)">(${hits} hits!)</span>` : '';
    if(isCrit){
      addLog(`<span class="log-crit">✦ CRIT — <b>${totalDmg.toFixed(1)}</b> to ${c.name}!${hitStr}</span>`);
    } else {
      addLog(`<span class="log-info">You deal <b>${totalDmg.toFixed(1)}</b> to <b>${c.name}</b>.${hitStr}</span>`);
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
  const acc = c.acc ?? 1;
  const isMiss = acc >= ddc ? false : Math.random() < (ddc - acc);

  if(isMiss){
    addLog(`<span class="log-info"><b>${c.name}</b> swings at you — MISS!</span>`);
  } else {

    // Damage Calc
    const isCrit = Math.random() < (c.crc ?? 0);
    const mnd = c.atk * (c.mnd ?? 0.7);
    const mxd = c.atk * (c.mxd ?? 1.0);
    let totalDmg = 0;
    let hits = 0;

    do {
      let rolled = mnd + Math.random() * (mxd - mnd);
      if(isCrit) rolled *= (c.crd ?? 1);                        // 2. crit multiplier
      const isBlock = Math.random() < (st.blk ?? 0);
      if(isBlock) rolled = Math.max(0, rolled - (st.bld ?? 0)); // 3. player block reduction
      rolled = Math.max(0, rolled - (st.arm ?? 0));             // 4. player armor reduction
      totalDmg += rolled;
      hits++;
    } while(Math.random() < (c.mth ?? 0) && hits < 10);

    // Apply Damage
    B.playerHP = Math.max(0, B.playerHP - totalDmg);

    // Counter Check (player counters enemy hit)
    if(Math.random() < (st.ctr ?? 0)){
      const cMnd = st.atk * (st.mnd ?? 0.7);
      const cMxd = st.atk * (st.mxd ?? 1.0);
      let counterDmg = cMnd + Math.random() * (cMxd - cMnd);
      counterDmg = Math.max(0, counterDmg - (c.arm ?? 0));
      B.enemyHP = Math.max(0, B.enemyHP - counterDmg);
      addLog(`<span class="log-crit">↩ COUNTER — <b>${counterDmg.toFixed(1)}</b> to ${c.name}!</span>`);
      if(B.enemyHP <= 0){ onWin(); return; }
    }

    // Log
    const hitStr = hits > 1 ? ` <span style="color:var(--cyan)">(${hits} hits!)</span>` : '';
    if(isCrit){
      addLog(`<span class="log-crit">✦ ${c.name} CRITS — <b>${totalDmg.toFixed(1)}</b> to you!${hitStr}</span>`);
    } else {
      addLog(`<span class="log-die"><b>${c.name}</b> hits you for <b>${totalDmg.toFixed(1)}</b>.${hitStr}</span>`);
    }
  }

  // Lose Check
  if(B.playerHP <= 0) onLose();
}

function fireEnemyCounterAttack(){
  const c = B.creature;
  const st = S.stats;

  // Damage Calc (no hit check, counter always hits)
  const isCrit = Math.random() < (c.crc ?? 0);
  const mnd = c.atk * (c.mnd ?? 0.7);
  const mxd = c.atk * (c.mxd ?? 1.0);
  let totalDmg = 0;
  let hits = 0;

  do {
    let rolled = mnd + Math.random() * (mxd - mnd);
    if(isCrit) rolled *= (c.crd ?? 1);
    const isBlock = Math.random() < (st.blk ?? 0);
    if(isBlock) rolled = Math.max(0, rolled - (st.bld ?? 0));
    rolled = Math.max(0, rolled - (st.arm ?? 0));
    totalDmg += rolled;
    hits++;
  } while(Math.random() < (c.mth ?? 0) && hits < 10);

  // Apply Damage
  B.playerHP = Math.max(0, B.playerHP - totalDmg);

  const hitStr = hits > 1 ? ` <span style="color:var(--cyan)">(${hits} hits!)</span>` : '';
  if(isCrit){
    addLog(`<span class="log-crit">✦ ${c.name} counter CRITS — <b>${totalDmg.toFixed(1)}</b> to you!${hitStr}</span>`);
  } else {
    addLog(`<span class="log-die"><b>${c.name}</b> counter hits you for <b>${totalDmg.toFixed(1)}</b>.${hitStr}</span>`);
  }

  // Player counter back
  if(Math.random() < (st.ctr ?? 0)){
    const cMnd = st.atk * (st.mnd ?? 0.7);
    const cMxd = st.atk * (st.mxd ?? 1.0);
    let counterDmg = cMnd + Math.random() * (cMxd - cMnd);
    counterDmg = Math.max(0, counterDmg - (c.arm ?? 0));
    B.enemyHP = Math.max(0, B.enemyHP - counterDmg);
    addLog(`<span class="log-crit">↩ COUNTER — <b>${counterDmg.toFixed(1)}</b> to ${c.name}!</span>`);
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
  S.victories[c.id]++;
  const justCompleted = S.victories[c.id] === c.vicReq;
  addLog(`<span class="log-win">✓ Defeated ${c.name}! (${S.victories[c.id]}/${c.vicReq})</span>`);
  if(justCompleted) unlockNextCreature();

  // Reward Multipliers
  const rewardMult = 1 + (S.reincarnations * 0.05);
  const rarityMult = RARITY_MULTS[B.rarity || 'common'] || 1;
  const n = S.victories[c.id] - 1;
  const decayMult = 1 / (1 + 0.3 * n);
  if(rarityMult > 1) addLog(`<span style="color:${RARITY_COLORS[B.rarity]}">★ ${RARITY_LABELS[B.rarity]} bonus ×${rarityMult} applied!</span>`);

  // Apply Rewards
  const gainStrs = [];
  Object.entries(c.rewards).forEach(([k, v]) => {
    const amount = v * rewardMult * rarityMult * decayMult;
    if(['old', 'bronze', 'silver'].includes(k)){
      S.resources[k] = (S.resources[k] || 0) + amount;
      if(k === 'old'){
        S.lifeOld = (S.lifeOld || 0) + amount;
        if(!S.lifetimeEarned) S.lifetimeEarned = {old:0};
        S.lifetimeEarned.old = (S.lifetimeEarned.old || 0) + amount;
      } else if(['bronze','silver','gold','plat'].includes(k)){
        if(!S.sessionEarned) S.sessionEarned = {bronze:0,silver:0,gold:0,plat:0};
        S.sessionEarned[k] = (S.sessionEarned[k] || 0) + amount;
      }
    } else if(S.stats[k] !== undefined){
      S.stats[k] += amount;
    }
    gainStrs.push(`${RESOURCE_LABELS[k] || k.toUpperCase()} +${amount.toFixed(2)}`);
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
    B.playerTimer = Math.max(200, 3000 - S.stats.spd);         
    B.enemyTimer = Math.max(200, 3000 - (B.creature.spd ?? 0)); 
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
  S.currentCreature=null;
  B.creature=null;
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

// ═══════════════════════════════════════════════════════
// BLOOD COIN MILESTONE CHECK
// ═══════════════════════════════════════════════════════
function checkQuintMilestone(){
  if(S.resources.old>=S.bloodPending*100+100){
    S.bloodPending+=1;
  }
}