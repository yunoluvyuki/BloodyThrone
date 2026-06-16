// ═══════════════════════════════════════════════════════
// RENDER FUNCTIONS
// ═══════════════════════════════════════════════════════
let currentSpecFilter='all';
function renderStats(){
  const g=document.getElementById('stat-grid');
  const defs=currentSpecFilter==='all'?STAT_DEFS:STAT_DEFS.filter(d=>d.cat===currentSpecFilter);
  g.innerHTML=defs.map(d=>`
    <div class="stat-cell">
      <div class="stat-name"><span class="stat-icon ${d.icon}"></span>${d.label}</div>
      <div class="stat-val">:${formatStat(d.key,S.stats[d.key]??0)}</div>
    </div>`).join('');
}
const FUND_DEFS={
  all:[
    {key:'blood',label:'BLOOD COIN',val:()=>fmt(S.bloodLifetime),cat:'economy'},
  ]
};
let currentFundFilter='all';
function renderFundamentals(){
  const defs=currentFundFilter==='all'?FUND_DEFS.all:FUND_DEFS.all.filter(d=>d.cat===currentFundFilter);
  document.getElementById('fund-values').innerHTML=
    defs.map(d=>`<div class="fund-row"><span class="fund-key">${d.label}</span><span class="fund-val">${d.val()}</span></div>`).join('');
}

function renderShop(){
  const g = document.getElementById('shop-grid');
  if(!g) return;
  g.innerHTML = SHOP_ITEMS.map(item => {
    const owned = S.shopOwned[item.id] || 0;
    const cost = effCost(item.cost);
    const costStr = Object.entries(cost).map(([k,v]) => `${fmt(v)} ${k.toUpperCase()}`).join(' + ');
    const maxed = item.maxOwned && owned >= item.maxOwned;
    const canAfford = !maxed && Object.entries(cost).every(([k,v]) => (S.resources[k] || 0) >= v);
    const iconHtml = Object.keys(item.statBonus).map(k => {
      const def = STAT_DEFS.find(d => d.key === k);
      return def ? `<span class="stat-icon ${def.icon}" title="${def.label}"></span>` : '';
    }).join('');
    return `<div class="shop-card">
      <div class="shop-name">${item.name}</div>
      <div class="shop-desc">${item.desc}</div>
      <div class="shop-effect">${iconHtml} ${item.effect}</div>
      <div class="shop-cost">Cost: ${costStr}</div>
      <div class="shop-own">Owned: ${owned}${item.maxOwned ? '/' + item.maxOwned : ''}</div>
      <button class="btn-buy" onclick="buyShopItem('${item.id}')" ${canAfford ? '' : 'disabled'}>${maxed ? 'OWNED' : 'BUY'}</button>
    </div>`;
  }).join('');
}

function renderBattle(){
  const g=document.getElementById('battle-grid');
  const visible=CREATURES.filter(c=>isUnlocked(c.id)&&!isMaxed(c));
  const defeated=CREATURES.filter(c=>isMaxed(c)).length;
  const hidden=CREATURES.length-visible.length-defeated;
  let html=`<div style="grid-column:1/-1;display:flex;align-items:center;gap:8px;margin-bottom:10px;">
    ${defeated>0?`<div style="font-size:8px;color:var(--text3);">${defeated} defeated</div>`:''}
    ${hidden>0?`<div style="font-size:14px;color:#ffffff;font-weight:bold;">${hidden} in the dark…</div>`:''}
  </div>`;
  html+=visible.map(c=>{
    const color='#888';
    const vic=getVictories(c.id);
    const maxed=isMaxed(c);
    const isCurrent=S.currentCreature===c.id;
    const pct=Math.min(100,vic/c.vicReq*100);
    const spawnRarityMultDisplay=RARITY_MULTS[maxed?'common':getSpawnRarity(c.id)]||1;
    const decayMult=1/(1+masteryDecayCoef()*vic);
    const rewardStr=Object.entries(c.rewards).map(([k,v])=>`<span class="reward-item ${['old','bronze','silver'].includes(k)?'res':''}">${RESOURCE_LABELS[k]||k.toUpperCase()} +${(v*spawnRarityMultDisplay*decayMult).toFixed(2).replace(/\.00$/,'')}</span>`).join('');
    let btnHtml='';
    if(maxed)btnHtml=`<button class="btn-challenge btn-maxed">MAXED</button>`;
    else if(isCurrent)btnHtml=`<button class="btn-challenge btn-current" onclick="stopBattle()">FIGHTING</button>`;
    else btnHtml=B.dying?`<button class="btn-challenge" disabled style="opacity:0.4;cursor:not-allowed;">RECOVERING</button>`:`<button class="btn-challenge" onclick="startBattle('${c.id}')">CHALLENGE</button>`;
    const spawnRarity=maxed?null:getSpawnRarity(c.id);
    const spawnRarityColor=spawnRarity?(RARITY_COLORS[spawnRarity]||'#888'):null;
    const borderColor=spawnRarity?spawnRarityColor:maxed?'#333':`${color}44`;
    const rarityGlow=spawnRarity&&spawnRarity!=='common'?`box-shadow:0 0 8px ${spawnRarityColor}55;`:'';
    const spawnBg=spawnRarity?(RARITY_BG[spawnRarity]||'transparent'):'transparent';
    const spawnBadge=spawnRarity?`<span style="display:inline-block;font-size:9px;font-weight:bold;letter-spacing:1px;padding:2px 6px;background:${spawnRarityColor};color:#fff;margin-bottom:4px;">${RARITY_LABELS[spawnRarity]}</span>`:'';
    return `<div class="creature-card" id="card-${c.id}" style="border-color:${borderColor};${rarityGlow}background:${spawnBg}">
      <div class="card-top">
        <div class="card-art" style="position:relative;">${c.new?'<span class="new-badge">NEW</span>':''}${c.img?`<img src="${c.img}" style="width:100%;height:100%;object-fit:cover;position:absolute;top:0;left:0;">`:SVGs[c.id]||`<div class="placeholder-icon" style="--c-color:${color}">✦</div>`}</div>
        <div class="card-info">
          ${spawnBadge}
          <div class="card-name" style="color:${spawnRarityColor||'#ffffff'};text-shadow:-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000;">${c.name}</div>
          <div class="stat-grid">${STAT_DEFS.map(d=>{
            const base=d.key==='hp'?c.hp:d.key==='atk'?c.atk:d.key==='arm'?c.arm:{mnd:0.7,mxd:1.0,spd:0,rgn:0,ddc:0,crc:0,crd:1,mth:0,acc:1,blk:0,bld:0,ctr:0}[d.key];
            const val=(c[d.key]??base)*(['atk','hp'].includes(d.key)?spawnRarityMultDisplay:1);
            return `<div class="stat-cell">
              <div class="stat-name"><span class="stat-icon ${d.icon}"></span>${d.label}</div>
              <div class="stat-val">:${formatStat(d.key,val)}</div>
            </div>`;
          }).join('')}</div>
        </div>
      </div>
      <div class="card-rewards">
      <div class="rewards-header"><span>${rewardStr}</span><span class="vic">Victories | <span style="color:${vic>=c.vicReq?'var(--green)':'#fff'};font-weight:bold;">${Math.min(vic,c.vicReq)}</span>/<span style="font-weight:bold;">${c.vicReq}</span></span></div>
      <div class="victories-bar"><div class="victories-fill" style="width:${pct}%;background:${maxed?'#2a5a2a':color}"></div></div>
      </div>
      <div class="card-btn">${btnHtml}</div>
    </div>`;
  }).join('');
  g.innerHTML=html;
}

function renderMastery(){
  const el=document.getElementById('mastery-content');
  if(!el)return;
  const ups=S.masteryUpgrades||{};
  const ch=getRarityChances();
  const common=Math.max(0,100-ch.uncommon-ch.rare-ch.epic-ch.legendary);
  let html=`<div style="margin-bottom:10px;padding:8px 12px;background:#1a0e2e;border:1px solid var(--purple2);display:flex;justify-content:space-between;align-items:center;">
    <span style="font-size:14px;letter-spacing:1px;color:var(--purple2);font-weight:bold;">BLOOD COIN AVAILABLE</span>
    <span style="font-size:14px;color:var(--white);font-weight:bold;">${fmt(S.bloodPending||0)}</span>
  </div>
  <div style="margin-bottom:14px;padding:10px;background:var(--bg3);border:1px solid var(--border);">
    <div style="font-size:9px;letter-spacing:2px;color:var(--text3);margin-bottom:8px;">CURRENT SPAWN CHANCES</div>
    <div style="display:flex;gap:14px;flex-wrap:wrap;font-size:10px;">
      <span style="color:#888;">COMMON ${common.toFixed(2)}%</span>
      <span style="color:var(--g-uncommon);">UNCOMMON ${ch.uncommon.toFixed(2)}%</span>
      <span style="color:var(--g-rare);">RARE ${ch.rare.toFixed(2)}%</span>
      <span style="color:var(--g-epic);">EPIC ${ch.epic.toFixed(2)}%</span>
      <span style="color:var(--g-legendary);">LEGENDARY ${ch.legendary.toFixed(2)}%</span>
    </div>
  </div>
  <div style="font-size:9px;color:var(--text3);margin-bottom:10px;">Rarer enemies drop <b style="color:var(--white);">multiplied rewards</b>: ×1.5 / ×3 / ×7 / ×15</div>
  <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">`;
  RARITY_UPGRADES.forEach(up=>{
    const level=ups[up.id]||0;
    const isMaxed=level>=up.maxLevel;
    const cost={};
    Object.entries(up.base).forEach(([res,amt])=>{ cost[res]=Math.floor(amt*Math.pow(up.scale,level)); });
    const effc=effCost(cost);
    const canAfford=!isMaxed&&canAffordCost(effc);
    const rc=RARITY_COLORS[up.rarity];
    const costStr=Object.entries(effc).map(([res,amt])=>`${(COIN_LABELS[res]||res.toUpperCase())} ${fmt(amt)}`).join(' + ');
    html+=`<div style="border:1px solid ${rc}44;padding:10px;background:${rc}0d;">
      <div style="font-size:10px;font-weight:bold;color:${rc};letter-spacing:1px;margin-bottom:3px;">${up.label}</div>
      <div style="font-size:8px;color:var(--text3);margin-bottom:8px;">${up.desc}</div>
      <div style="font-size:9px;color:var(--text2);margin-bottom:6px;">Level <span style="color:var(--white);font-weight:bold;">${level}</span> / ${up.maxLevel}</div>
      ${isMaxed
        ?`<div style="font-size:9px;text-align:center;color:${rc};padding:4px 0;">✦ MAXED</div>`
        :`<div style="font-size:8px;color:${canAfford?'var(--text2)':'var(--text4)'};margin-bottom:6px;">${costStr}</div>
          <button onclick="buyMasteryUpgrade('${up.id}')" style="width:100%;padding:5px;background:${canAfford?rc+'22':'var(--bg3)'};border:1px solid ${canAfford?rc:'var(--border)'};color:${canAfford?rc:'var(--text3)'};cursor:${canAfford?'pointer':'not-allowed'};font-family:inherit;font-size:9px;letter-spacing:1px;text-transform:uppercase;">UPGRADE</button>`
      }
    </div>`;
  });
  html+=masterySectionHTML();
  html+='</div>';
  el.innerHTML=html;
}

// ═══════════════════════════════════════════════════════
// CODEX
// ═══════════════════════════════════════════════════════
function renderCodex(){
  const total = CREATURES.length;
  const unlocked = CREATURES.filter(c => getVictories(c.id) > 0).length;
  const grid = document.getElementById('codex-grid');
  if(!grid) return;
  const bonusCount = S.codexBonusApplied || 0;
  const bonusPct = (Math.pow(1.01, bonusCount) - 1) * 100;

  const header = `
    <div style="grid-column:1/-1;margin-bottom:10px;">
      <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:6px;">
        <div style="font-size:9px;letter-spacing:2px;color:var(--text3);">CODEX</div>
        <div style="font-size:9px;color:var(--text2);">
          <span style="color:var(--white);font-weight:bold;">${unlocked}</span>
          <span style="color:var(--text3);"> / ${total} discovered</span>
        </div>
      </div>
      <div style="padding:8px 10px;background:var(--bg2);border:1px solid var(--border);margin-bottom:10px;">
        <div style="font-size:8px;color:var(--text3);letter-spacing:1px;margin-bottom:3px;">CODEX BONUS</div>
        <div style="font-size:10px;color:var(--green);">
          ATK &amp; HP +${bonusPct.toFixed(2)}%
          <span style="font-size:8px;color:var(--text3);margin-left:6px;">(${bonusCount} unlocks × 1%)</span>
        </div>
      </div>
    </div>`;

  const unlockList = CREATURES.filter(c => getVictories(c.id) > 0);
  const lockCount = Math.max(0, total - unlockList.length);

  grid.innerHTML = header + [
    ...unlockList.map(c => {
      const vic = getVictories(c.id);
      const rarity = getSpawnRarity(c.id);
      const rc = RARITY_COLORS[rarity] || '#888';
      return `<div class="codex-card unlocked" title="${c.name}" style="border-color:${rc}44;">
        ${SVGs[c.id] || `<div style="font-size:9px;color:var(--text3);text-align:center;padding:4px;">${c.name}</div>`}
        <div class="codex-locked-name" style="color:${rc};">${c.name}</div>
        <div class="codex-chance">${vic} win${vic!==1?'s':''}</div>
      </div>`;
    }),
    ...Array.from({length: lockCount}).map(() =>
      `<div class="codex-card locked">
        <div class="codex-q">?</div>
        <div class="codex-locked-name">UNKNOWN</div>
      </div>`)
  ].join('');
}

// ═══════════════════════════════════════════════════════
// RESOURCES DISPLAY
// ═══════════════════════════════════════════════════════
function updateResources(){
  document.getElementById('res-old').textContent=fmt(S.resources.old);
  document.getElementById('res-bronze').textContent=fmt(S.resources.bronze);
  document.getElementById('res-silver').textContent=fmt(S.resources.silver);
  document.getElementById('res-gold').textContent=fmt(S.resources.gold);
  document.getElementById('res-plat').textContent=fmt(S.resources.plat);
}

function updateBloodUI(){
  document.getElementById('blood-pending').textContent='+'+fmt(S.bloodPending);
  document.getElementById('blood-pend-val').textContent='+'+fmt(S.bloodPending);
  document.getElementById('blood-life-val').textContent=fmt(S.bloodLifetime);
  const bloodCountEl=document.getElementById('blood-count');
  if(bloodCountEl)bloodCountEl.textContent=fmt(S.bloodPending);
  const ready=S.bloodPending>=100;
  const rb=document.getElementById('reincarnate-btn');
  rb.className=ready?'ready':'';
  document.getElementById('reincarnate-req').textContent=ready?'READY TO REINCARNATE!':'REQUIRES 100 PENDING BLOOD COIN';
  renderMCoinSynth();
}

// ═══════════════════════════════════════════════════════
// MAIN RENDER
// ═══════════════════════════════════════════════════════
function renderAll(){
  renderStats();
  renderFundamentals();
  renderBattle();
  renderShop();
  updateBloodUI();
  renderCodex();
  updateBattleUI();
  updateResources();
  renderInventory();
}
// ═══════════════════════════════════════════════════════
// M.COIN SYNTHESIZER UI
// ═══════════════════════════════════════════════════════
const MCOIN_DEFS = [
  {
    key: 'old',
    name: 'Old Coin',
    sub: 'Blood Coin Gain',
    color: '#aaaaaa',
    trackKey: 'lifetimeEarned', // persists
    trackField: 'old',
    lifetime: true,
  },
  {
    key: 'bronze',
    name: 'Bronze Coin',
    sub: 'Produces M.Old',
    color: '#cd7f32',
    trackKey: 'sessionEarned',
    trackField: 'bronze',
    lifetime: false,
  },
  {
    key: 'silver',
    name: 'Silver Coin',
    sub: 'Produces M.Bronze',
    color: '#aaaacc',
    trackKey: 'sessionEarned',
    trackField: 'silver',
    lifetime: false,
  },
  {
    key: 'gold',
    name: 'Gold Coin',
    sub: 'Produces M.Silver',
    color: '#f0b429',
    trackKey: 'sessionEarned',
    trackField: 'gold',
    lifetime: false,
  },
  {
    key: 'plat',
    name: 'Platinum Coin',
    sub: 'Produces M.Gold',
    color: '#a8d8ea',
    trackKey: 'sessionEarned',
    trackField: 'plat',
    lifetime: false,
  },
];

function fmtEta(secondsRemaining) {
  if (!isFinite(secondsRemaining) || secondsRemaining <= 0) return '';
  if (secondsRemaining < 60) return Math.ceil(secondsRemaining) + 's';
  if (secondsRemaining < 3600) return Math.floor(secondsRemaining / 60) + 'm ' + Math.floor(secondsRemaining % 60) + 's';
  if (secondsRemaining < 86400) return Math.floor(secondsRemaining / 3600) + 'h ' + Math.floor((secondsRemaining % 3600) / 60) + 'm';
  const d = Math.floor(secondsRemaining / 86400);
  const h = Math.floor((secondsRemaining % 86400) / 3600);
  return d + 'd ' + h + 'h';
}

let _mcoinSynthCache = '';
function renderMCoinSynth() {
  const el = document.getElementById('mcoin-rows');
  if (!el) return;

  if (!S.lifetimeEarned) S.lifetimeEarned = { old: 0 };
  if (!S.sessionEarned) S.sessionEarned = { bronze: 0, silver: 0, gold: 0, plat: 0 };
  if (!S.mCoins) S.mCoins = { old: 0, bronze: 0, silver: 0, gold: 0, plat: 0 };

  // Blood coin rate = effectiveMOld from milestoneTick logic
  const effectiveMOld =
    (S.mCoins.old || 0) +
    (S.mCoins.bronze || 0) +
    (S.mCoins.silver || 0) +
    (S.mCoins.gold || 0) +
    (S.mCoins.plat || 0);
  const bloodRate = effectiveMOld; // per second

  // Update rate display in left panel
  const rateEl = document.getElementById('blood-rate-val');
  if (rateEl) rateEl.textContent = bloodRate > 0 ? fmt(bloodRate) + '/s' : '0/s';

  const newHtml = MCOIN_DEFS.map((def, idx) => {
    const store = def.lifetime ? (S.lifetimeEarned || {}) : (S.sessionEarned || {});
    const total = store[def.trackField] || 0;
    const count = S.mCoins[def.key] || 0;

    // Milestone progress
    const currentThreshold = count < MILESTONE_THRESHOLDS.length ? MILESTONE_THRESHOLDS[count] : null;
    const prevThreshold = count > 0 ? MILESTONE_THRESHOLDS[count - 1] : 0;
    let pct = 0;
    let etaStr = '';
    let nextLabel = '';

    if (currentThreshold !== null) {
      const span = currentThreshold - prevThreshold;
      const progress = total - prevThreshold;
      pct = Math.max(0, Math.min(100, (progress / span) * 100));
      // ETA (rough — based on current Blood Coin rate as proxy; for old, use reward rate)
      const needed = currentThreshold - total;
      nextLabel = fmt(currentThreshold);
      // For now just show distance
      etaStr = needed > 0 ? fmt(needed) + ' more' : '';
    } else {
      pct = 100;
      nextLabel = 'MAX';
    }

    // Producing: what this M.Coin outputs per second
    let producingVal = count;
    let producingSub = count > 0 ? (def.key === 'old' ? '+' + fmt(count) + ' Blood/s' : '+' + fmt(count) + ' ' + (idx > 0 ? MCOIN_DEFS[idx - 1].name : 'Old Coin') + '/s') : '—';
    const producingColor = count > 0 ? def.color : 'var(--text3)';

    // Lock rows where no total earned and index > 0 (not yet reached)
    const isLocked = idx > 0 && total === 0 && count === 0;

    return `<div class="mcoin-row${isLocked ? ' mcoin-locked' : ''}">
      <!-- CONCEPT -->
      <div class="mcoin-col-concept">
        <div class="mcoin-concept-name" style="color:${def.color}">${def.name}</div>
        <div class="mcoin-concept-sub">${def.sub}</div>
      </div>
      <!-- TOTAL -->
      <div class="mcoin-col-total">
        <div class="mcoin-total-val">${fmt(total)}</div>
      </div>
      <!-- MILESTONE BAR -->
      <div class="mcoin-col-milestone">
        <div class="mcoin-milestone-wrap">
          <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:2px;">
            <span class="mcoin-milestone-eta" style="color:${pct >= 100 ? def.color : 'var(--text2)'};">${nextLabel}</span>
            ${etaStr ? `<span style="font-size:7px;color:var(--text3);">${etaStr}</span>` : ''}
          </div>
          <div class="mcoin-milestone-bar-bg">
            <div class="mcoin-milestone-bar-fill" style="width:${pct}%;background:${def.color};"></div>
          </div>
        </div>
      </div>
      <!-- COUNT -->
      <div class="mcoin-col-count">
        <div class="mcoin-count-val" style="color:${count > 0 ? def.color : 'var(--text3)'};">${count}</div>
      </div>
      <!-- PRODUCING -->
      <div class="mcoin-col-producing">
        <div class="mcoin-producing-val" style="color:${producingColor};">${count > 0 ? fmt(producingVal) : '0'}</div>
        <div class="mcoin-producing-sub">${producingSub}</div>
      </div>
    </div>`;
  }).join('');
  if (newHtml !== _mcoinSynthCache) {
    _mcoinSynthCache = newHtml;
    el.innerHTML = newHtml;
  }
}