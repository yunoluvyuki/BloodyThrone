// ═══════════════════════════════════════════════════════
// MASTERY UPGRADES  (added 2026-06-16)
// ═══════════════════════════════════════════════════════
// A second mastery system alongside RARITY_UPGRADES.
// Each upgrade raises a level stored in S.masteryUpgrades[id].
// The EFFECTS are read by helper getters below and consumed
// across the codebase (battle.js, shop.js, milestone.js, init.js, utils.js).
//
// ALL mastery upgrades are paid in BLOOD COIN (spent from S.bloodPending,
// the same pool Reincarnate uses). Blood Coin is NOT in S.resources.
//
// To tune balance later: edit `per`, `floor`, `base`, `scale`, `maxLevel`.
//   per      = effect added (or removed) per level
//   floor    = lowest the multiplier can reach (cost/time reductions only)
//   base     = Blood Coin cost at level 0  (cost grows base * scale^level)
//   scale    = cost growth per level
//   maxLevel = level cap
// ───────────────────────────────────────────────────────

const COIN_LABELS = { old:'OLD', bronze:'BRONZE', silver:'SILVER', gold:'GOLD', plat:'PLATINUM', blood:'BLOOD' };

const MASTERY_UPGRADES = [
  // ── ECONOMY: coin gain boosts ──────────────────────────
  { id:'gain_blood',  cat:'ECONOMY', type:'gain',  coin:'blood',  per:0.05, label:'BLOOD HARVEST',     desc:'+5% Blood Coin gained per level.',    base:{blood:50}, scale:1.6, maxLevel:20, color:'#c0392b' },
  { id:'gain_old',    cat:'ECONOMY', type:'gain',  coin:'old',    per:0.05, label:'OLD AVARICE',       desc:'+5% Old Coin gained per level.',      base:{blood:10}, scale:1.5, maxLevel:20, color:'#aaaaaa' },
  { id:'gain_bronze', cat:'ECONOMY', type:'gain',  coin:'bronze', per:0.05, label:'BRONZE AVARICE',    desc:'+5% Bronze Coin gained per level.',   base:{blood:15}, scale:1.5, maxLevel:20, color:'#cd7f32' },
  { id:'gain_silver', cat:'ECONOMY', type:'gain',  coin:'silver', per:0.05, label:'SILVER AVARICE',    desc:'+5% Silver Coin gained per level.',   base:{blood:20}, scale:1.5, maxLevel:20, color:'#aaaacc' },
  { id:'gain_gold',   cat:'ECONOMY', type:'gain',  coin:'gold',   per:0.05, label:'GOLD AVARICE',      desc:'+5% Gold Coin gained per level.',     base:{blood:30}, scale:1.5, maxLevel:20, color:'#f0b429' },
  { id:'gain_plat',   cat:'ECONOMY', type:'gain',  coin:'plat',   per:0.05, label:'PLATINUM AVARICE',  desc:'+5% Platinum Coin gained per level.', base:{blood:40}, scale:1.5, maxLevel:20, color:'#a8d8ea' },

  // ── ECONOMY: upgrade cost reductions ───────────────────
  { id:'cost_old',    cat:'ECONOMY', type:'cost', coin:'old',    per:0.03, floor:0.25, label:'OLD THRIFT',      desc:'-3% Old Coin upgrade cost per level (min 25%).',      base:{blood:10}, scale:1.6, maxLevel:20, color:'#aaaaaa' },
  { id:'cost_bronze', cat:'ECONOMY', type:'cost', coin:'bronze', per:0.03, floor:0.25, label:'BRONZE THRIFT',   desc:'-3% Bronze Coin upgrade cost per level (min 25%).',   base:{blood:12}, scale:1.6, maxLevel:20, color:'#cd7f32' },
  { id:'cost_silver', cat:'ECONOMY', type:'cost', coin:'silver', per:0.03, floor:0.25, label:'SILVER THRIFT',   desc:'-3% Silver Coin upgrade cost per level (min 25%).',   base:{blood:15}, scale:1.6, maxLevel:20, color:'#aaaacc' },
  { id:'cost_gold',   cat:'ECONOMY', type:'cost', coin:'gold',   per:0.03, floor:0.25, label:'GOLD THRIFT',     desc:'-3% Gold Coin upgrade cost per level (min 25%).',     base:{blood:18}, scale:1.6, maxLevel:20, color:'#f0b429' },
  { id:'cost_plat',   cat:'ECONOMY', type:'cost', coin:'plat',   per:0.03, floor:0.25, label:'PLATINUM THRIFT', desc:'-3% Platinum Coin upgrade cost per level (min 25%).', base:{blood:20}, scale:1.6, maxLevel:20, color:'#a8d8ea' },

  // ── COMBAT ─────────────────────────────────────────────
  { id:'stat_atk', cat:'COMBAT', type:'statpct', per:0.02, label:'WRATH',     desc:'+2% ATK per level.',     base:{blood:15}, scale:1.5, maxLevel:25, color:'#e74c3c' },
  { id:'stat_hp',  cat:'COMBAT', type:'statpct', per:0.02, label:'VITALITY',  desc:'+2% Max HP per level.',  base:{blood:15}, scale:1.5, maxLevel:25, color:'#27ae60' },

  // ── UTILITY ────────────────────────────────────────────
  { id:'time_death', cat:'UTILITY', type:'timecut', per:0.05, floor:0.25, label:'SWIFT REVIVAL', desc:'-5% defeat recovery time per level (min 25%).', base:{blood:20}, scale:1.6, maxLevel:15, color:'#9b59b6' },
  { id:'time_flee',  cat:'UTILITY', type:'timecut', per:0.05, floor:0.25, label:'LIGHT FEET',    desc:'-5% flee recovery time per level (min 25%).',   base:{blood:15}, scale:1.6, maxLevel:15, color:'#9b59b6' },
  { id:'decay',      cat:'UTILITY', type:'decay',   per:0.02, floor:0.05, label:'ENDURING SPOILS', desc:'Softens reward decay by 0.02 per level.',     base:{blood:30}, scale:1.8, maxLevel:12, color:'#2980b9' },
  { id:'victory',    cat:'UTILITY', type:'victory', per:1,                label:'CONQUEST',        desc:'+1 victory counted per win.',                  base:{blood:100},scale:3.0, maxLevel:4,  color:'#f0b429' },

  // ── AUTOMATION: passive coin generation ────────────────
  { id:'auto_old',        cat:'AUTOMATION', type:'auto',     coin:'old',    per:1,     label:'OLD WELLSPRING',     desc:'Generate +1 Old Coin/sec per level.',      base:{blood:25},  scale:1.7, maxLevel:25, color:'#aaaaaa' },
  { id:'automult_old',    cat:'AUTOMATION', type:'automult', coin:'old',    per:0.5,   label:'OLD SURGE',          desc:'×1.5 Old Coin auto-gen per level.',        base:{blood:60},  scale:1.8, maxLevel:15, color:'#aaaaaa' },
  { id:'auto_bronze',     cat:'AUTOMATION', type:'auto',     coin:'bronze', per:0.1,   label:'BRONZE WELLSPRING',  desc:'Generate +0.1 Bronze Coin/sec per level.', base:{blood:40},  scale:1.7, maxLevel:25, color:'#cd7f32' },
  { id:'automult_bronze', cat:'AUTOMATION', type:'automult', coin:'bronze', per:0.5,   label:'BRONZE SURGE',       desc:'×1.5 Bronze Coin auto-gen per level.',     base:{blood:80},  scale:1.8, maxLevel:15, color:'#cd7f32' },
  { id:'auto_silver',     cat:'AUTOMATION', type:'auto',     coin:'silver', per:0.02,  label:'SILVER WELLSPRING',  desc:'Generate +0.02 Silver Coin/sec per level.',base:{blood:60},  scale:1.7, maxLevel:25, color:'#aaaacc' },
  { id:'automult_silver', cat:'AUTOMATION', type:'automult', coin:'silver', per:0.5,   label:'SILVER SURGE',       desc:'×1.5 Silver Coin auto-gen per level.',     base:{blood:100}, scale:1.8, maxLevel:15, color:'#aaaacc' },
  { id:'auto_gold',       cat:'AUTOMATION', type:'auto',     coin:'gold',   per:0.005, label:'GOLD WELLSPRING',    desc:'Generate +0.005 Gold Coin/sec per level.', base:{blood:90},  scale:1.7, maxLevel:25, color:'#f0b429' },
  { id:'automult_gold',   cat:'AUTOMATION', type:'automult', coin:'gold',   per:0.5,   label:'GOLD SURGE',         desc:'×1.5 Gold Coin auto-gen per level.',       base:{blood:140}, scale:1.8, maxLevel:15, color:'#f0b429' },
  { id:'auto_plat',       cat:'AUTOMATION', type:'auto',     coin:'plat',   per:0.001, label:'PLATINUM WELLSPRING',desc:'Generate +0.001 Platinum Coin/sec per level.',base:{blood:130},scale:1.7, maxLevel:25, color:'#a8d8ea' },
  { id:'automult_plat',   cat:'AUTOMATION', type:'automult', coin:'plat',   per:0.5,   label:'PLATINUM SURGE',     desc:'×1.5 Platinum Coin auto-gen per level.',   base:{blood:200}, scale:1.8, maxLevel:15, color:'#a8d8ea' },
];

// ── LOOKUP HELPERS ────────────────────────────────────
function masteryDef(id){ return MASTERY_UPGRADES.find(u => u.id === id); }
function mLvl(id){ return (S.masteryUpgrades && S.masteryUpgrades[id]) || 0; }

// ── CURRENCY HELPERS (handle Blood Coin vs normal resources) ──
function currencyBalance(key){
  return key === 'blood' ? (S.bloodPending || 0) : (S.resources[key] || 0);
}
function canAffordCost(cost){
  return Object.entries(cost).every(([k, v]) => currencyBalance(k) >= v);
}
function spendCost(cost){
  Object.entries(cost).forEach(([k, v]) => {
    if(k === 'blood') S.bloodPending = (S.bloodPending || 0) - v;
    else S.resources[k] = (S.resources[k] || 0) - v;
  });
}

// ── EFFECT GETTERS ────────────────────────────────────
// Coin gain multiplier (1 + boost). coin: old|bronze|silver|gold|plat|blood
function masteryGainMult(coin){
  const def = MASTERY_UPGRADES.find(u => u.type === 'gain' && u.coin === coin);
  return def ? 1 + mLvl(def.id) * def.per : 1;
}
// Upgrade cost multiplier (<=1). coin: old|bronze|silver|gold|plat
function masteryCostMult(coin){
  const def = MASTERY_UPGRADES.find(u => u.type === 'cost' && u.coin === coin);
  return def ? Math.max(def.floor, 1 - mLvl(def.id) * def.per) : 1;
}
// Apply cost reduction to a whole cost object → new object (rounded)
function effCost(costObj){
  const out = {};
  Object.entries(costObj).forEach(([res, amt]) => {
    out[res] = Math.max(0, Math.floor(amt * masteryCostMult(res)));
  });
  return out;
}
function masteryAtkMult(){ const d = masteryDef('stat_atk'); return 1 + mLvl('stat_atk') * d.per; }
function masteryHpMult(){  const d = masteryDef('stat_hp');  return 1 + mLvl('stat_hp')  * d.per; }
function masteryDeathTimeMult(){ const d = masteryDef('time_death'); return Math.max(d.floor, 1 - mLvl('time_death') * d.per); }
function masteryFleeTimeMult(){  const d = masteryDef('time_flee');  return Math.max(d.floor, 1 - mLvl('time_flee')  * d.per); }
// Reward decay coefficient (base 0.5, lower = gentler)
function masteryDecayCoef(){ const d = masteryDef('decay'); return Math.max(d.floor, 0.5 - mLvl('decay') * d.per); }
function masteryBonusVictories(){ const d = masteryDef('victory'); return mLvl('victory') * d.per; }

// Passive generation rate (coins/sec) for a coin, base × surge multiplier
function masteryAutoRate(coin){
  const baseDef = MASTERY_UPGRADES.find(u => u.type === 'auto'     && u.coin === coin);
  const multDef = MASTERY_UPGRADES.find(u => u.type === 'automult' && u.coin === coin);
  const baseRate = baseDef ? mLvl(baseDef.id) * baseDef.per : 0;
  const mult = multDef ? 1 + mLvl(multDef.id) * multDef.per : 1;
  return baseRate * mult;
}

// ── AUTO-GEN TICK ─────────────────────────────────────
// Called every frame from gameLoop with dt (seconds).
// Generated coins also feed lifetime/session earned so they drive milestones.
function masteryAutoTick(dt){
  if(!S.resources) return;
  if(!S.lifetimeEarned) S.lifetimeEarned = { old:0 };
  if(!S.sessionEarned)  S.sessionEarned  = { bronze:0, silver:0, gold:0, plat:0 };
  ['old','bronze','silver','gold','plat'].forEach(coin => {
    const gain = masteryAutoRate(coin) * dt;
    if(gain <= 0) return;
    S.resources[coin] = (S.resources[coin] || 0) + gain;
    if(coin === 'old') S.lifetimeEarned.old = (S.lifetimeEarned.old || 0) + gain;
    else S.sessionEarned[coin] = (S.sessionEarned[coin] || 0) + gain;
  });
}

// ── EFFECT DISPLAY STRING (current → next) ────────────
function masteryEffectStr(up, level){
  switch(up.type){
    case 'gain':    return `+${(level*up.per*100).toFixed(0)}%`;
    case 'statpct': return `+${(level*up.per*100).toFixed(0)}%`;
    case 'cost':    return `-${((1 - Math.max(up.floor, 1 - level*up.per))*100).toFixed(0)}%`;
    case 'timecut': return `-${((1 - Math.max(up.floor, 1 - level*up.per))*100).toFixed(0)}%`;
    case 'decay':   return `coef ${Math.max(up.floor, 0.5 - level*up.per).toFixed(2)}`;
    case 'victory': return `+${level*up.per}/win`;
    case 'auto':    return `${fmt(level*up.per)} ${COIN_LABELS[up.coin]}/s`;
    case 'automult':return `×${(1 + level*up.per).toFixed(2)}`;
    default:        return '';
  }
}

// ── MASTERY SECTION UI (appended by renderMastery) ────
const MASTERY_CATS = ['COMBAT','ECONOMY','AUTOMATION','UTILITY'];
const MASTERY_BRANCH_INFO = {
  COMBAT:{title:'COMBAT',sub:'Wrath and survival seals',note:'Direct stat mastery from existing combat upgrades.'},
  ECONOMY:{title:'ECONOMY',sub:'Avarice and thrift ledgers',note:'Coin gain and upgrade-cost mastery paths.'},
  AUTOMATION:{title:'AUTOMATION',sub:'Wellsprings and surge engines',note:'Passive coin generation and multiplier paths.'},
  UTILITY:{title:'UTILITY',sub:'Recovery, decay, conquest',note:'Time recovery and progression utility paths.'}
};
const MASTERY_KEYSTONE_IDS = new Set(['stat_atk','stat_hp','gain_blood','decay','victory','automult_plat']);
const MASTERY_MAJOR_TYPES = new Set(['cost','automult','timecut']);

function masteryNodeVisualType(up){
  if(MASTERY_KEYSTONE_IDS.has(up.id))return 'keystone';
  if(MASTERY_MAJOR_TYPES.has(up.type))return 'major';
  return 'minor';
}
function masteryTreeCost(up, level){
  return effCost(Object.fromEntries(Object.entries(up.base).map(([r,a]) => [r, Math.floor(a * Math.pow(up.scale, level))])));
}
function masteryCostText(cost){
  return Object.entries(cost).map(([r,a]) => `${COIN_LABELS[r]||r.toUpperCase()} ${fmt(a)}`).join(' + ');
}
function masterySlug(str){
  return String(str).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
}
function masteryEscape(str){
  return String(str).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}
function masteryRankDots(up, level){
  let html='';
  for(let i=0;i<up.maxLevel;i++){
    const state=i<level?'filled':(i===level?'next':'empty');
    html+=`<span class="mg-mastery-rank ${state}"></span>`;
  }
  return html;
}
function masteryUpgradeNodeHTML(up, level){
  const visualType=masteryNodeVisualType(up);
  const isMaxed=level>=up.maxLevel;
  const cost=masteryTreeCost(up,level);
  const canAfford=!isMaxed&&canAffordCost(cost);
  const nowStr=masteryEffectStr(up,level);
  const nextStr=isMaxed?'':masteryEffectStr(up,level+1);
  const coin=up.coin?`<span class="mg-mastery-tag">${masteryEscape(COIN_LABELS[up.coin]||up.coin.toUpperCase())}</span>`:'';
  const status=isMaxed?'maxed':(canAfford?'available':'locked');
  return `<article class="mg-mastery-node mg-mastery-node-${visualType} ${status}" style="--node-color:${up.color};">
    <div class="mg-mastery-node-line"></div>
    <div class="mg-mastery-node-seal"><span></span></div>
    <div class="mg-mastery-node-body">
      <div class="mg-mastery-node-top">
        <div>
          <div class="mg-mastery-node-kind">${visualType==='keystone'?'Keystone-style':visualType==='major'?'Major':'Minor'} node</div>
          <h4>${masteryEscape(up.label)}</h4>
        </div>
        ${coin}
      </div>
      <p>${masteryEscape(up.desc)}</p>
      <div class="mg-mastery-node-meta">
        <span>Level <b>${level}</b> / ${up.maxLevel}</span>
        <span>${masteryEscape(up.type)}</span>
      </div>
      <div class="mg-mastery-effect">
        <span>Now <b>${masteryEscape(nowStr)}</b></span>
        ${nextStr?`<span>Next <b>${masteryEscape(nextStr)}</b></span>`:''}
      </div>
      <div class="mg-mastery-ranks" aria-label="${masteryEscape(up.label)} rank progress">${masteryRankDots(up,level)}</div>
      ${isMaxed
        ? `<div class="mg-mastery-maxed">MAXED</div>`
        : `<div class="mg-mastery-cost ${canAfford?'can-afford':'cannot-afford'}">${masteryEscape(masteryCostText(cost))}</div>
           <button class="mg-mastery-btn ${canAfford?'can-buy':'cannot-buy'}" onclick="buyMasteryUpgrade('${up.id}')" aria-disabled="${canAfford?'false':'true'}">${canAfford?'Upgrade':'Need Blood Coin'}</button>`
      }
    </div>
  </article>`;
}
function masteryBranchHTML(cat, ups){
  const info=MASTERY_BRANCH_INFO[cat]||{title:cat,sub:'Mastery branch',note:''};
  const items=MASTERY_UPGRADES.filter(u=>u.cat===cat);
  const owned=items.reduce((sum,u)=>sum+(ups[u.id]||0),0);
  const total=items.reduce((sum,u)=>sum+u.maxLevel,0);
  return `<section class="mg-mastery-branch mg-mastery-${masterySlug(cat)}">
    <header class="mg-mastery-branch-head">
      <div>
        <div class="mg-mastery-branch-kicker">${items.length} upgrade chains</div>
        <h3>${masteryEscape(info.title)}</h3>
        <p>${masteryEscape(info.sub)}</p>
      </div>
      <div class="mg-mastery-branch-count">${owned}<span>/${total}</span></div>
    </header>
    <div class="mg-mastery-branch-note">${masteryEscape(info.note)}</div>
    <div class="mg-mastery-chain-list">
      ${items.map(up=>masteryUpgradeNodeHTML(up,ups[up.id]||0)).join('')}
    </div>
  </section>`;
}
function mainGameMasteryTreeHTML(){
  const ups=S.masteryUpgrades||{};
  const totalRanks=MASTERY_UPGRADES.reduce((sum,u)=>sum+u.maxLevel,0);
  const ownedRanks=MASTERY_UPGRADES.reduce((sum,u)=>sum+(ups[u.id]||0),0);
  const maxedCount=MASTERY_UPGRADES.filter(u=>(ups[u.id]||0)>=u.maxLevel).length;
  return `<section class="mg-mastery-shell">
    <header class="mg-mastery-hero">
      <div>
        <div class="mg-mastery-eyebrow">Main Game Mastery</div>
        <h2>Blood Mastery Tree</h2>
        <p>Existing mastery upgrades arranged as a dark manuscript tree. Effects, costs, max levels, and save data are unchanged.</p>
      </div>
      <div class="mg-mastery-summary">
        <div><span>Blood Coin</span><b>${fmt(S.bloodPending||0)}</b></div>
        <div><span>Ranks</span><b>${ownedRanks}/${totalRanks}</b></div>
        <div><span>Maxed</span><b>${maxedCount}/${MASTERY_UPGRADES.length}</b></div>
      </div>
    </header>
    <div class="mg-mastery-map">
      <div class="mg-mastery-core">
        <div class="mg-mastery-core-seal"></div>
        <div>
          <span>Root</span>
          <strong>Blood Mastery Core</strong>
          <em>Visual anchor only</em>
        </div>
      </div>
      <div class="mg-mastery-branches">
        ${MASTERY_CATS.map(cat=>masteryBranchHTML(cat,ups)).join('')}
      </div>
    </div>
  </section>`;
}
function masterySectionHTML(){
  return mainGameMasteryTreeHTML();
  const ups = S.masteryUpgrades || {};
  let html = '';
  MASTERY_CATS.forEach(cat => {
    const items = MASTERY_UPGRADES.filter(u => u.cat === cat);
    if(!items.length) return;
    html += `<div style="grid-column:1/-1;font-size:14px;letter-spacing:2px;color:var(--text3);margin:14px 0 4px;">${cat}</div>`;
    items.forEach(up => {
      const level = ups[up.id] || 0;
      const isMaxed = level >= up.maxLevel;
      const cost = effCost(Object.fromEntries(Object.entries(up.base).map(([r,a]) => [r, Math.floor(a * Math.pow(up.scale, level))])));
      const canAfford = !isMaxed && canAffordCost(cost);
      const costStr = Object.entries(cost).map(([r,a]) => `${COIN_LABELS[r]||r.toUpperCase()} ${fmt(a)}`).join(' + ');
      const nowStr = masteryEffectStr(up, level);
      const nextStr = isMaxed ? '' : masteryEffectStr(up, level + 1);
      html += `<div style="border:1px solid ${up.color}44;padding:10px;background:${up.color}0d;">
        <div style="font-size:14px;font-weight:bold;color:${up.color};letter-spacing:1px;margin-bottom:3px;">${up.label}</div>
        <div style="font-size:14px;color:var(--text3);margin-bottom:8px;">${up.desc}</div>
        <div style="font-size:14px;color:var(--text2);margin-bottom:4px;">Level <span style="color:var(--white);font-weight:bold;">${level}</span> / ${up.maxLevel}</div>
        <div style="font-size:14px;color:var(--text2);margin-bottom:6px;">Now <span style="color:${up.color};font-weight:bold;">${nowStr}</span>${nextStr ? ` → <span style="color:var(--white);">${nextStr}</span>` : ''}</div>
        ${isMaxed
          ? `<div style="font-size:14px;text-align:center;color:${up.color};padding:4px 0;">✦ MAXED</div>`
          : `<div style="font-size:14px;color:${canAfford?'var(--text2)':'var(--text4)'};margin-bottom:6px;">${costStr}</div>
             <button onclick="buyMasteryUpgrade('${up.id}')" style="width:100%;padding:5px;background:${canAfford?up.color+'22':'var(--bg3)'};border:1px solid ${canAfford?up.color:'var(--border)'};color:${canAfford?up.color:'var(--text3)'};cursor:${canAfford?'pointer':'not-allowed'};font-family:inherit;font-size:14px;letter-spacing:1px;text-transform:uppercase;">UPGRADE</button>`
        }
      </div>`;
    });
  });
  return html;
}

// ── RADIAL MAIN GAME MASTERY UI ────────────────────────
const MAIN_MASTERY_WORLD = { w:2400, h:1600, cx:1200, cy:800 };
const MAIN_MASTERY_BRANCH_LAYOUT = {
  COMBAT:{angle:-90, start:-108, end:-72, hub:300, label:{x:1200,y:255}},
  ECONOMY:{angle:0, start:-38, end:52, hub:300, label:{x:1845,y:800}},
  AUTOMATION:{angle:180, start:142, end:218, hub:300, label:{x:555,y:800}},
  UTILITY:{angle:90, start:66, end:114, hub:300, label:{x:1200,y:1345}}
};

function mainMasteryPolar(angle, radius){
  const r=angle*Math.PI/180;
  return {x:MAIN_MASTERY_WORLD.cx+Math.cos(r)*radius,y:MAIN_MASTERY_WORLD.cy+Math.sin(r)*radius};
}
function mainMasteryPath(a,b,bend=0){
  const mx=(a.x+b.x)/2;
  const my=(a.y+b.y)/2;
  const dx=b.x-a.x;
  const dy=b.y-a.y;
  const dist=Math.max(1,Math.hypot(dx,dy));
  const nx=-dy/dist;
  const ny=dx/dist;
  return `M ${a.x.toFixed(1)} ${a.y.toFixed(1)} Q ${(mx+nx*bend).toFixed(1)} ${(my+ny*bend).toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
}
function mainMasteryStatus(up, level, canAfford, isMaxed){
  if(isMaxed)return 'maxed';
  if(canAfford)return 'available';
  if(level>0)return 'locked invested';
  return 'locked';
}
function mainMasteryRadialNodes(){
  const ups=S.masteryUpgrades||{};
  const nodes=[];
  MASTERY_CATS.forEach(cat=>{
    const items=MASTERY_UPGRADES.filter(u=>u.cat===cat);
    const layout=MAIN_MASTERY_BRANCH_LAYOUT[cat];
    const span=items.length>1?layout.end-layout.start:0;
    items.forEach((up,i)=>{
      const angle=items.length>1?layout.start+(span*i/(items.length-1)):layout.angle;
      const ring=cat==='ECONOMY'||cat==='AUTOMATION'
        ? 430+(i%3)*115+Math.floor(i/3)*18
        : 460+(i%2)*115;
      const p=mainMasteryPolar(angle,ring);
      const level=ups[up.id]||0;
      const isMaxed=level>=up.maxLevel;
      const cost=masteryTreeCost(up,level);
      const canAfford=!isMaxed&&canAffordCost(cost);
      nodes.push({
        up,cat,level,isMaxed,cost,canAfford,
        x:Math.round(p.x),y:Math.round(p.y),
        angle,
        visual:masteryNodeVisualType(up),
        status:mainMasteryStatus(up,level,canAfford,isMaxed),
        now:masteryEffectStr(up,level),
        next:isMaxed?'':masteryEffectStr(up,level+1)
      });
    });
  });
  return nodes;
}
function mainMasteryNodeShape(node){
  if(node.visual==='keystone')return `<polygon class="mg-radial-shape" points="0,-38 38,0 0,38 -38,0"></polygon><polygon class="mg-radial-inner" points="0,-22 22,0 0,22 -22,0"></polygon>`;
  if(node.visual==='major')return `<polygon class="mg-radial-shape" points="-28,-18 0,-32 28,-18 28,18 0,32 -28,18"></polygon><circle class="mg-radial-inner" cx="0" cy="0" r="13"></circle>`;
  return `<circle class="mg-radial-shape" cx="0" cy="0" r="18"></circle><circle class="mg-radial-inner" cx="0" cy="0" r="7"></circle>`;
}
function mainMasteryRadialNodeHTML(node){
  const up=node.up;
  const label=masteryEscape(up.label);
  const cost=masteryEscape(masteryCostText(node.cost));
  const next=masteryEscape(node.next||'MAXED');
  const canBuy=node.canAfford&&!node.isMaxed?'1':'0';
  const nodeClass=`mg-radial-node mg-radial-${node.visual} ${node.status}`;
  const labelY=node.y<MAIN_MASTERY_WORLD.cy?-54:64;
  return `<g class="${nodeClass}" tabindex="0" role="button" aria-label="${label}" transform="translate(${node.x} ${node.y})" style="--node-color:${up.color};"
    data-id="${up.id}"
    data-title="${label}"
    data-type="${node.visual}"
    data-cat="${node.cat}"
    data-level="${node.level}"
    data-max="${up.maxLevel}"
    data-cost="${cost}"
    data-now="${masteryEscape(node.now)}"
    data-next="${next}"
    data-desc="${masteryEscape(up.desc)}"
    data-status="${node.isMaxed?'MAXED':node.canAfford?'AVAILABLE':'NEED BLOOD COIN'}"
    data-can-buy="${canBuy}">
    <circle class="mg-radial-glow" cx="0" cy="0" r="${node.visual==='keystone'?74:node.visual==='major'?56:39}"></circle>
    ${mainMasteryNodeShape(node)}
    <text class="mg-radial-node-lv" x="0" y="4">${node.level}/${up.maxLevel}</text>
    <text class="mg-radial-node-label" x="0" y="${labelY}">${label}</text>
  </g>`;
}
function mainMasteryRadialConnectionsHTML(nodes){
  let html='';
  const center={x:MAIN_MASTERY_WORLD.cx,y:MAIN_MASTERY_WORLD.cy};
  MASTERY_CATS.forEach(cat=>{
    const layout=MAIN_MASTERY_BRANCH_LAYOUT[cat];
    const hub=mainMasteryPolar(layout.angle,layout.hub);
    const catNodes=nodes.filter(n=>n.cat===cat).sort((a,b)=>a.angle-b.angle);
    html+=`<path class="mg-radial-connection mg-radial-spine mg-radial-cat-${masterySlug(cat)}" d="${mainMasteryPath(center,hub,0)}"></path>`;
    catNodes.forEach((node,i)=>{
      html+=`<path class="mg-radial-connection mg-radial-cat-${masterySlug(cat)}" d="${mainMasteryPath(hub,node, i%2?22:-22)}"></path>`;
      if(i>0){
        html+=`<path class="mg-radial-connection mg-radial-branch-link mg-radial-cat-${masterySlug(cat)}" d="${mainMasteryPath(catNodes[i-1],node, i%2?34:-34)}"></path>`;
      }
    });
  });
  return html;
}
function mainMasteryRadialLabelsHTML(){
  return MASTERY_CATS.map(cat=>{
    const layout=MAIN_MASTERY_BRANCH_LAYOUT[cat];
    const total=MASTERY_UPGRADES.filter(u=>u.cat===cat).length;
    return `<text class="mg-radial-cat-label mg-radial-cat-${masterySlug(cat)}" x="${layout.label.x}" y="${layout.label.y}">${cat}</text>
      <text class="mg-radial-cat-sub" x="${layout.label.x}" y="${layout.label.y+25}">${total} existing upgrades</text>`;
  }).join('');
}
function mainGameMasteryTreeHTML(){
  const nodes=mainMasteryRadialNodes();
  const ups=S.masteryUpgrades||{};
  const totalRanks=MASTERY_UPGRADES.reduce((sum,u)=>sum+u.maxLevel,0);
  const ownedRanks=MASTERY_UPGRADES.reduce((sum,u)=>sum+(ups[u.id]||0),0);
  const maxedCount=MASTERY_UPGRADES.filter(u=>(ups[u.id]||0)>=u.maxLevel).length;
  return `<section class="mg-radial-shell">
    <header class="mg-radial-header">
      <div>
        <div class="mg-radial-eyebrow">Main Game Mastery</div>
        <h2>Blood Mastery Manuscript</h2>
      </div>
      <div class="mg-radial-summary">
        <div><span>Blood Coin</span><b>${fmt(S.bloodPending||0)}</b></div>
        <div><span>Ranks</span><b>${ownedRanks}/${totalRanks}</b></div>
        <div><span>Maxed</span><b>${maxedCount}/${MASTERY_UPGRADES.length}</b></div>
      </div>
    </header>
    <div class="mg-radial-canvas" id="mg-mastery-viewport" tabindex="0">
      <div class="mg-radial-world" id="mg-mastery-world">
        <svg class="mg-radial-svg" viewBox="0 0 ${MAIN_MASTERY_WORLD.w} ${MAIN_MASTERY_WORLD.h}" aria-label="Main Game Mastery radial tree">
          <g class="mg-radial-ritual">
            <ellipse cx="${MAIN_MASTERY_WORLD.cx}" cy="${MAIN_MASTERY_WORLD.cy}" rx="305" ry="305"></ellipse>
            <ellipse cx="${MAIN_MASTERY_WORLD.cx}" cy="${MAIN_MASTERY_WORLD.cy}" rx="520" ry="520"></ellipse>
            <ellipse cx="${MAIN_MASTERY_WORLD.cx}" cy="${MAIN_MASTERY_WORLD.cy}" rx="710" ry="710"></ellipse>
            <line x1="${MAIN_MASTERY_WORLD.cx}" y1="180" x2="${MAIN_MASTERY_WORLD.cx}" y2="1420"></line>
            <line x1="580" y1="${MAIN_MASTERY_WORLD.cy}" x2="1820" y2="${MAIN_MASTERY_WORLD.cy}"></line>
          </g>
          <g class="mg-radial-connections">${mainMasteryRadialConnectionsHTML(nodes)}</g>
          <g class="mg-radial-labels">${mainMasteryRadialLabelsHTML()}</g>
          <g class="mg-radial-core" transform="translate(${MAIN_MASTERY_WORLD.cx} ${MAIN_MASTERY_WORLD.cy})">
            <circle class="mg-radial-core-glow" cx="0" cy="0" r="105"></circle>
            <polygon class="mg-radial-core-shape" points="0,-70 70,0 0,70 -70,0"></polygon>
            <text x="0" y="-5">BLOOD</text>
            <text x="0" y="20">CORE</text>
          </g>
          <g class="mg-radial-nodes">${nodes.map(mainMasteryRadialNodeHTML).join('')}</g>
        </svg>
      </div>
      <div class="mg-radial-tooltip" id="mg-mastery-tooltip" aria-hidden="true">
        <div class="mg-radial-tooltip-type" id="mg-tooltip-type"></div>
        <h3 id="mg-tooltip-title"></h3>
        <div class="mg-radial-tooltip-grid">
          <span>Branch</span><b id="mg-tooltip-cat"></b>
          <span>Level</span><b id="mg-tooltip-level"></b>
          <span>Cost</span><b id="mg-tooltip-cost"></b>
          <span>Status</span><b id="mg-tooltip-status"></b>
        </div>
        <p id="mg-tooltip-desc"></p>
        <div class="mg-radial-tooltip-effects"><span id="mg-tooltip-now"></span><span id="mg-tooltip-next"></span></div>
      </div>
    </div>
    <nav class="mg-radial-controls" aria-label="Main Game Mastery controls">
      <button type="button" data-mg-action="zoom-out">-</button>
      <output id="mg-mastery-zoom">100%</output>
      <button type="button" data-mg-action="zoom-in">+</button>
      <button type="button" data-mg-action="fit">FIT</button>
      <button type="button" data-mg-action="center">CENTER</button>
    </nav>
  </section>`;
}
function setupMainGameMasteryTree(){
  const viewport=document.getElementById('mg-mastery-viewport');
  const world=document.getElementById('mg-mastery-world');
  if(!viewport||!world)return;
  const tooltip=document.getElementById('mg-mastery-tooltip');
  const zoomOut=document.getElementById('mg-mastery-zoom');
  const state={scale:1,panX:0,panY:0,drag:false,startX:0,startY:0,baseX:0,baseY:0,min:.35,max:2.5};
  const apply=()=>{
    world.style.transform=`translate3d(${state.panX}px,${state.panY}px,0) scale(${state.scale})`;
    if(zoomOut)zoomOut.textContent=`${Math.round(state.scale*100)}%`;
  };
  const fit=()=>{
    const r=viewport.getBoundingClientRect();
    state.scale=Math.max(state.min,Math.min(r.width/MAIN_MASTERY_WORLD.w,r.height/MAIN_MASTERY_WORLD.h)*.94);
    state.panX=(r.width-MAIN_MASTERY_WORLD.w*state.scale)/2;
    state.panY=(r.height-MAIN_MASTERY_WORLD.h*state.scale)/2;
    apply();
  };
  const zoomAt=(factor,cx,cy)=>{
    const r=viewport.getBoundingClientRect();
    const next=Math.max(state.min,Math.min(state.max,state.scale*factor));
    const wx=(cx-r.left-state.panX)/state.scale;
    const wy=(cy-r.top-state.panY)/state.scale;
    state.scale=next;
    state.panX=cx-r.left-wx*next;
    state.panY=cy-r.top-wy*next;
    apply();
  };
  const center=()=>{
    const r=viewport.getBoundingClientRect();
    state.panX=r.width/2-MAIN_MASTERY_WORLD.cx*state.scale;
    state.panY=r.height/2-MAIN_MASTERY_WORLD.cy*state.scale;
    apply();
  };
  const showTip=(node,evt)=>{
    if(!tooltip)return;
    document.getElementById('mg-tooltip-type').textContent=node.dataset.type.toUpperCase();
    document.getElementById('mg-tooltip-title').textContent=node.dataset.title;
    document.getElementById('mg-tooltip-cat').textContent=node.dataset.cat;
    document.getElementById('mg-tooltip-level').textContent=`${node.dataset.level}/${node.dataset.max}`;
    document.getElementById('mg-tooltip-cost').textContent=node.dataset.cost;
    document.getElementById('mg-tooltip-status').textContent=node.dataset.status;
    document.getElementById('mg-tooltip-desc').textContent=node.dataset.desc;
    document.getElementById('mg-tooltip-now').textContent=`Now: ${node.dataset.now}`;
    document.getElementById('mg-tooltip-next').textContent=`Next: ${node.dataset.next}`;
    const x=Math.min(window.innerWidth-330,evt.clientX+18);
    const y=Math.min(window.innerHeight-210,evt.clientY+18);
    tooltip.style.transform=`translate3d(${Math.max(12,x)}px,${Math.max(12,y)}px,0)`;
    tooltip.classList.add('visible');
    tooltip.setAttribute('aria-hidden','false');
  };
  const hideTip=()=>{
    if(!tooltip)return;
    tooltip.classList.remove('visible');
    tooltip.setAttribute('aria-hidden','true');
  };
  viewport.addEventListener('wheel',e=>{e.preventDefault();zoomAt(Math.exp(-e.deltaY*.0012),e.clientX,e.clientY);},{passive:false});
  viewport.addEventListener('pointerdown',e=>{
    if(e.button!==0||e.target.closest('.mg-radial-node'))return;
    state.drag=true;state.startX=e.clientX;state.startY=e.clientY;state.baseX=state.panX;state.baseY=state.panY;
    viewport.classList.add('dragging');viewport.setPointerCapture(e.pointerId);
  });
  viewport.addEventListener('pointermove',e=>{
    if(!state.drag)return;
    state.panX=state.baseX+e.clientX-state.startX;
    state.panY=state.baseY+e.clientY-state.startY;
    apply();
  });
  viewport.addEventListener('pointerup',e=>{state.drag=false;viewport.classList.remove('dragging');try{viewport.releasePointerCapture(e.pointerId);}catch(_){}}); 
  viewport.addEventListener('pointercancel',()=>{state.drag=false;viewport.classList.remove('dragging');});
  document.querySelectorAll('[data-mg-action]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const action=btn.dataset.mgAction;
      const r=viewport.getBoundingClientRect();
      if(action==='zoom-in')zoomAt(1.18,r.left+r.width/2,r.top+r.height/2);
      if(action==='zoom-out')zoomAt(1/1.18,r.left+r.width/2,r.top+r.height/2);
      if(action==='fit')fit();
      if(action==='center')center();
    });
  });
  document.querySelectorAll('.mg-radial-node').forEach(node=>{
    node.addEventListener('mouseenter',e=>showTip(node,e));
    node.addEventListener('mousemove',e=>showTip(node,e));
    node.addEventListener('mouseleave',hideTip);
    node.addEventListener('focus',e=>showTip(node,e));
    node.addEventListener('blur',hideTip);
    node.addEventListener('click',()=>{
      if(node.dataset.canBuy==='1')buyMasteryUpgrade(node.dataset.id);
    });
    node.addEventListener('keydown',e=>{
      if((e.key==='Enter'||e.key===' ')&&node.dataset.canBuy==='1'){e.preventDefault();buyMasteryUpgrade(node.dataset.id);}
    });
  });
  fit();
}