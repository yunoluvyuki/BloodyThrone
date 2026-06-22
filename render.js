// ═══════════════════════════════════════════════════════
// RENDER FUNCTIONS
// ═══════════════════════════════════════════════════════
let currentSpecFilter='all';
function renderStats(){
  const g=document.getElementById('stat-grid');
  const defs=currentSpecFilter==='all'?STAT_DEFS:STAT_DEFS.filter(d=>d.cat===currentSpecFilter);
  g.innerHTML=defs.map(d=>{
    // ATK and HP show their effective value (base × mastery bonus), matching combat.
    let val=S.stats[d.key]??0;
    if(d.key==='atk' && typeof masteryAtkMult==='function') val*=masteryAtkMult();
    if(d.key==='hp'  && typeof masteryHpMult==='function')  val*=masteryHpMult();
    return `
    <div class="stat-cell">
      <div class="stat-name"><span class="stat-icon ${d.icon}"></span>${d.label}</div>
      <div class="stat-val">:${formatStat(d.key,val)}</div>
    </div>`;
  }).join('');
}
const FUND_DEFS={
  all:[
    {key:'atkmult',label:'ATK Multiplier',val:()=>'x'+(typeof masteryAtkMult==='function'?masteryAtkMult():1).toFixed(2),cat:'stats'},
    {key:'hpmult', label:'HP Multiplier', val:()=>'x'+(typeof masteryHpMult==='function'?masteryHpMult():1).toFixed(2),cat:'stats'},
  ]
};
let currentFundFilter='all';
function renderFundamentals(){
  const defs=currentFundFilter==='all'?FUND_DEFS.all:FUND_DEFS.all.filter(d=>d.cat===currentFundFilter);
  document.getElementById('fund-values').innerHTML=
    defs.map(d=>`<div class="fund-row"><span class="fund-key">${d.label}</span><span class="fund-val">${d.val()}</span></div>`).join('');
}

let currentShopFilter='all';
function renderShop(){
  const g = document.getElementById('shop-grid');
  if(!g) return;
  const items = currentShopFilter==='all' ? SHOP_ITEMS : SHOP_ITEMS.filter(i => i.cat===currentShopFilter);
  g.innerHTML = items.map(item => {
    const owned = S.shopOwned[item.id] || 0;
    const cost = shopScaledCost(item);
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
      <button class="btn-buy${canAfford ? ' affordable' : ''}" onclick="buyShopItem('${item.id}')" ${canAfford ? '' : 'disabled'}>${maxed ? 'OWNED' : 'BUY'}</button>
    </div>`;
  }).join('');
}

function renderBattle(){
  const g=document.getElementById('battle-grid');
  const visible=CREATURES.filter(c=>isUnlocked(c.id)&&!isMaxed(c));
  const defeated=CREATURES.filter(c=>isMaxed(c)).length;
  let html='';
  html+=visible.map(c=>{
    const color='#888';
    const vic=getVictories(c.id);
    const maxed=isMaxed(c);
    const isCurrent=S.currentCreature===c.id;
    const cap=effVicReq(c);
    const pct=Math.min(100,vic/cap*100);
    const spawnRarityMultDisplay=RARITY_MULTS[maxed?'common':getSpawnRarity(c.id)]||1;
    const decayMult=1/(1+masteryDecay()*vic);
    const rewardStr=Object.entries(c.rewards).map(([k,v])=>{const rv=v*spawnRarityMultDisplay*decayMult;const sign=rv>=0?'+':'';return `<span class="reward-item ${['old','bronze','silver'].includes(k)?'res':''}">${RESOURCE_LABELS[k]||k.toUpperCase()} ${sign}${fmt(rv)}</span>`;}).join('');
    let btnHtml='';
    if(maxed)btnHtml=`<button class="btn-challenge btn-maxed">MAXED</button>`;
    else if(isCurrent)btnHtml=`<button class="btn-challenge btn-current" disabled style="cursor:default;">FIGHTING</button>`;
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
            const base=d.key==='hp'?c.hp:d.key==='atk'?c.atk:d.key==='arm'?c.arm:{mnd:0.7,mxd:1.0,spd:0,rgn:0,ddc:0,crc:0,crd:1,mth:0,acc:1,ctr:0}[d.key];
            const val=(c[d.key]??base)*(['atk','hp'].includes(d.key)?spawnRarityMultDisplay:1);
            return `<div class="stat-cell">
              <div class="stat-name"><span class="stat-icon ${d.icon}"></span>${d.label}</div>
              <div class="stat-val">:${formatStat(d.key,val)}</div>
            </div>`;
          }).join('')}</div>
        </div>
      </div>
      <div class="card-rewards">
      <div class="rewards-header"><span>${rewardStr}</span><span class="vic">Victories | <span style="color:${vic>=cap?'var(--green)':'#fff'};font-weight:bold;">${Math.min(vic,cap)}</span>/<span style="font-weight:bold;">${cap}</span></span></div>
      <div class="victories-bar"><div class="victories-fill" style="width:${pct}%;background:${maxed?'#2a5a2a':color}"></div></div>
      </div>
      <div class="card-btn">${btnHtml}</div>
    </div>`;
  }).join('');
  g.innerHTML=html;
}


// ═══════════════════════════════════════════════════════
// CODEX
// ═══════════════════════════════════════════════════════
function renderCodex(){
  const total = CREATURES.length;
  // A creature is "discovered" if it has EVER granted the codex bonus (persists
  // across reincarnate) OR has wins this run.
  const ever = id => (S.codexUnlocked && S.codexUnlocked[id]) || getVictories(id) > 0;
  const unlocked = CREATURES.filter(c => ever(c.id)).length;
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

  const unlockList = CREATURES.filter(c => ever(c.id));
  const lockCount = Math.max(0, total - unlockList.length);

  grid.innerHTML = header + [
    ...unlockList.map(c => {
      const vic = getVictories(c.id);
      const rarity = getSpawnRarity(c.id);
      const rc = RARITY_COLORS[rarity] || '#888';
      // Art: prefer the creature's own image, then its SVG, then name text.
      const art = c.img
        ? `<img src="${c.img}" style="width:100%;height:100%;object-fit:cover;">`
        : (SVGs[c.id] || `<div style="font-size:9px;color:var(--text3);text-align:center;padding:4px;">${c.name}</div>`);
      return `<div class="codex-card unlocked" title="${c.name}" style="border-color:${rc}44;">
        ${art}
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
  // Per-coin passive auto-gen rate (WELLSPRING) shown below each coin.
  ['old','bronze','silver','gold','plat'].forEach(coin=>{
    const el=document.getElementById('rate-'+coin);
    if(!el) return;
    const rate=(typeof masteryAutoRate==='function') ? masteryAutoRate(coin) : 0;
    el.textContent = rate>0 ? '+'+fmt(rate)+'/s' : '';
  });
}

function updateBloodUI(){
  document.getElementById('blood-pending').textContent='+'+fmt(S.bloodPending);
  const bloodPendVal=document.getElementById('blood-pend-val');
  if(bloodPendVal)bloodPendVal.textContent='+'+fmt(S.bloodPending);
  document.getElementById('blood-life-val').textContent=fmt(S.bloodBankedLifetime||0);
  const bloodCountEl=document.getElementById('blood-count');
  if(bloodCountEl)bloodCountEl.textContent=fmt(S.blood||0);
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