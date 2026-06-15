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
    {key:'reincarnate',label:'REINCARNATIONS',val:()=>S.reincarnations+'x',cat:'core'},
    {key:'decay',label:'DECAY FACTOR',val:()=>'1x',cat:'core'},
    {key:'death_rec',label:'DEATH RECOVERY',val:()=>'10s',cat:'stats'},
    {key:'flee_pen',label:'FLEE PENALTY',val:()=>'5s',cat:'stats'},
    {key:'feat_base',label:'FEAT MEDAL BASE',val:()=>'1.01x',cat:'rarity'},
    {key:'feat_mult',label:'FEAT MULT',val:()=>'1.02x',cat:'rarity'},
    {key:'quint',label:'BLOOD COIN',val:()=>fmt(S.quintLifetime),cat:'economy'},
  ]
};
function calcCodexMult(){
  const unlocked=CREATURES.filter(c=>getVictories(c.id)>0).length;
  return 1+(unlocked*0.01);
}
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
    const costStr = Object.entries(item.cost).map(([k,v]) => `${fmt(v)} ${k.toUpperCase()}`).join(' + ');
    const maxed = item.maxOwned && owned >= item.maxOwned;
    const canAfford = !maxed && Object.entries(item.cost).every(([k,v]) => (S.resources[k] || 0) >= v);
    return `<div class="shop-card">
      <div class="shop-name">${item.name}</div>
      <div class="shop-desc">${item.desc}</div>
      <div class="shop-effect">${item.effect}</div>
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
    <div style="flex:1;height:1px;background:var(--text3);opacity:0.2;"></div>
    ${hidden>0?`<div style="font-size:8px;color:var(--text3);font-style:italic;opacity:0.6;">${hidden} in the dark…</div>`:''}
  </div>`;
  html+=visible.map(c=>{
    const color='#888';
    const vic=getVictories(c.id);
    const maxed=isMaxed(c);
    const isCurrent=S.currentCreature===c.id;
    const pct=Math.min(100,vic/c.vicReq*100);
    const spawnRarityMultDisplay=RARITY_MULTS[maxed?'common':getSpawnRarity(c.id)]||1;
    const decayMult=1/(1+0.3*vic);
    const rewardStr=Object.entries(c.rewards).map(([k,v])=>`<span class="reward-item ${['old','bronze','silver'].includes(k)?'res':''}">${RESOURCE_LABELS[k]||k.toUpperCase()} +${(v*spawnRarityMultDisplay*decayMult).toFixed(2).replace(/\.00$/,'')}</span>`).join('');
    const countStr='';
    let btnHtml='';
    if(maxed)btnHtml=`<button class="btn-challenge btn-maxed">MAXED</button>`;
    else if(isCurrent)btnHtml=`<button class="btn-challenge btn-current" onclick="stopBattle()">FIGHTING</button>`;
    else btnHtml=`<button class="btn-challenge" onclick="startBattle('${c.id}')">CHALLENGE</button>`;
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
          ${countStr}
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
  let html=`<div style="margin-bottom:14px;padding:10px;background:var(--bg3);border:1px solid var(--border);">
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
    const canAfford=!isMaxed&&Object.entries(cost).every(([res,amt])=>(S.resources[res]||0)>=amt);
    const rc=RARITY_COLORS[up.rarity];
    const costStr=Object.entries(cost).map(([res,amt])=>`${res.toUpperCase()} ${fmt(amt)}`).join(' + ');
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
  html+='</div>';
  el.innerHTML=html;
}

// ═══════════════════════════════════════════════════════
// CODEX
// ═══════════════════════════════════════════════════════
const CODEX_TYPES=['ALL','SCRAP'];
function renderCodex(){
  const filtersEl=document.getElementById('codex-filters');
  const total=CREATURES.length;
  const unlocked=CREATURES.filter(c=>getVictories(c.id)>0).length;
  filtersEl.innerHTML=`<button class="codex-filter active">${'ALL'} ${unlocked}/${total}</button>
  <button class="codex-filter">SCRAP ${unlocked}/${total}</button>`;
  const grid=document.getElementById('codex-grid');
  // Show unlocked + some locked (total 219 conceptually, show first 30)
  const unlockList=CREATURES.filter(c=>getVictories(c.id)>0);
  const lockFiller=Array.from({length:Math.max(0,20-unlockList.length)},(_,i)=>({locked:true,idx:i}));
  grid.innerHTML=[
    ...unlockList.map(c=>`<div class="codex-card unlocked">${SVGs[c.id]||''}</div>`),
    ...lockFiller.map((_,i)=>`<div class="codex-card locked"><div class="codex-q">?</div><div class="codex-chance">CHANCE: 100%</div><div class="codex-locked-name">??? ???</div></div>`)
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

function updateQuintUI(){
  document.getElementById('quint-pending').textContent='+'+fmt(S.quintPending);
  document.getElementById('quint-pend-val').textContent='+'+fmt(S.quintPending);
  document.getElementById('quint-life-val').textContent=fmt(S.quintLifetime);
  document.getElementById('quint-count').textContent=fmt(S.quintPending);
  const ready=S.quintPending>=100;
  const rb=document.getElementById('reincarnate-btn');
  rb.className=ready?'ready':'';
  document.getElementById('reincarnate-req').textContent=ready?'READY TO REINCARNATE!':'REQUIRES 100 PENDING BLOOD COIN';
}

// ═══════════════════════════════════════════════════════
// MAIN RENDER
// ═══════════════════════════════════════════════════════
function renderAll(){
  renderStats();
  renderFundamentals();
  renderBattle();
  renderShop();       
  updateQuintUI();
  renderCodex();
  updateBattleUI();
  updateResources();
}