// ═══════════════════════════════════════════════════════
// MASTERY TAB UI  (tabbed node grid + detail + bonuses)
// Split out of render.js. Renders S.masteryUpgrades via MASTERY_UPGRADES
// (mastery.js) using the currency/effect helpers defined there.
// ═══════════════════════════════════════════════════════
let masteryActiveCat = 'COMBAT';
let masterySelectedId = null;

// Steeper cost ramp: base × scale^level × MASTERY_RAMP^(level²).
// Upgrades with noRamp:true skip the steep ramp (plain base × scale^level).
// Upgrades with an explicit costs[] array use that per-level cost directly.
// MASTERY_RAMP is defined in shop.js (loaded alongside this file).
function masteryLevelCost(up, level){
  if(up.costs && up.costs[level]) return effCost(up.costs[level]);
  const rampMult = up.noRamp ? 1 : Math.pow(MASTERY_RAMP, level * level);
  return effCost(Object.fromEntries(Object.entries(up.base).map(([r,a]) => [r, Math.floor(a * Math.pow(up.scale, level) * rampMult)])));
}
function masteryCostStr(cost){
  return Object.entries(cost).map(([r,a]) => `${fmt(a)} ${COIN_LABELS[r]||r.toUpperCase()}`).join(' + ');
}
function selectMasteryNode(id){ masterySelectedId = id; renderMastery(); }
function setMasteryCat(cat){ masteryActiveCat = cat; const first = MASTERY_UPGRADES.find(u=>u.cat===cat); masterySelectedId = first ? first.id : null; renderMastery(); }

function renderMastery(){
  const el=document.getElementById('mastery-content');
  if(!el)return;
  const ups=S.masteryUpgrades||{};

  // Default selection
  if(!masterySelectedId){
    const first = MASTERY_UPGRADES.find(u=>u.cat===masteryActiveCat);
    masterySelectedId = first ? first.id : null;
  }

  // Category tabs
  const tabsHtml = MASTERY_CATS.map(cat=>{
    const active = cat===masteryActiveCat;
    return `<button class="mast-tab${active?' active':''}" onclick="setMasteryCat('${cat}')">${cat}</button>`;
  }).join('');

  // Node grid for active category
  const nodes = MASTERY_UPGRADES.filter(u=>u.cat===masteryActiveCat);
  const nodesHtml = nodes.map(up=>{
    const level=ups[up.id]||0;
    const isMaxed=level>=up.maxLevel;
    const cost=masteryLevelCost(up, level);
    const afford=!isMaxed && canAffordCost(cost);
    const sel = up.id===masterySelectedId;
    const state = isMaxed?'maxed':(afford?'afford':'locked');
    return `<button class="mast-node ${state}${sel?' selected':''}" style="--nc:${up.color};" onclick="selectMasteryNode('${up.id}')">
      <span class="mast-node-name">${up.label}</span>
      <span class="mast-node-lvl">${level}/${up.maxLevel}</span>
    </button>`;
  }).join('');

  // Detail panel for selected node
  let detailHtml = `<div class="mast-detail-empty">Select a node</div>`;
  const up = MASTERY_UPGRADES.find(u=>u.id===masterySelectedId);
  if(up){
    const level=ups[up.id]||0;
    const isMaxed=level>=up.maxLevel;
    const cost=masteryLevelCost(up, level);
    const afford=!isMaxed && canAffordCost(cost);
    const nowStr=masteryEffectStr(up, level);
    const nextStr=isMaxed?'':masteryEffectStr(up, level+1);
    detailHtml=`
      <div class="mast-d-title" style="color:${up.color};">${up.label}</div>
      <div class="mast-d-cat">${up.cat}</div>
      <div class="mast-d-desc">${up.desc}</div>
      <div class="mast-d-sep"></div>
      <div class="mast-d-label">CURRENT LEVEL</div>
      <div class="mast-d-row">${level} / ${up.maxLevel}<span class="mast-d-eff" style="color:${up.color};">${nowStr}</span></div>
      ${isMaxed ? `<div class="mast-d-maxed">✦ MAXED</div>` : `
        <div class="mast-d-label next">NEXT LEVEL</div>
        <div class="mast-d-row">${level+1} / ${up.maxLevel}<span class="mast-d-eff next-eff">${nextStr}</span></div>
        <div class="mast-d-sep"></div>
        <div class="mast-d-label">COST</div>
        <div class="mast-d-cost ${afford?'ok':'no'}">${masteryCostStr(cost)}</div>
        <button class="mast-d-btn ${afford?'can':'cant'}" onclick="buyMasteryUpgrade('${up.id}')" ${afford?'':'disabled'}>UPGRADE</button>
      `}
    `;
  }

  const bonusesHtml = masteryBonusSummaryHTML();

  el.innerHTML=`
    <div class="mast-wrap">
      <div class="mast-main">
        <div class="mast-tabs">${tabsHtml}</div>
        <div class="mast-grid">${nodesHtml}</div>
      </div>
      <div class="mast-side">
        <div class="mast-side-title">SELECTED NODE</div>
        <div class="mast-detail">${detailHtml}</div>
      </div>
    </div>
    <div class="mast-bonuses">
      <div class="mast-bonuses-title">YOUR BONUSES</div>
      ${bonusesHtml}
    </div>`;
}

// Build the "Your Bonuses" summary from current mastery levels
function masteryBonusSummaryHTML(){
  const rows=[];
  const atkLvl=mLvl('stat_atk'), hpLvl=mLvl('stat_hp');
  if(atkLvl>0) rows.push(['ATK', `+${(atkLvl*masteryDef('stat_atk').per*100).toFixed(0)}%`, '#e74c3c']);
  if(hpLvl>0)  rows.push(['Max HP', `+${(hpLvl*masteryDef('stat_hp').per*100).toFixed(0)}%`, '#27ae60']);
  ['old','bronze','silver','gold','plat','blood'].forEach(coin=>{
    const m=masteryGainMult(coin);
    if(m>1) rows.push([`${COIN_LABELS[coin]} gain`, `+${((m-1)*100).toFixed(0)}%`, '#f0b429']);
  });
  if(rows.length===0) return `<div class="mast-bonus-empty">No bonuses yet — upgrade some nodes!</div>`;
  return rows.map(([label,val,col])=>`<div class="mast-bonus-row"><span>${label}</span><b style="color:${col};">${val}</b></div>`).join('');
}