// ═══════════════════════════════════════════════════════════════════════════
// BLOODY THRONE : IDLE RPG — MAIN MASTERY TREE  (consolidated, single-file logic + UI)
// ═══════════════════════════════════════════════════════════════════════════
// This ONE file is the source of truth for the Main Mastery Tree. It contains:
//   1. The real MASTERY_UPGRADES data + all helpers (verbatim from mastery.js)
//   2. Guarded environment fallbacks (S, fmt, toast,
//      buyMasteryUpgrade) so the tree runs STANDALONE — in the live game the
//      real versions (state.js / utils.js / shop.js) always win.
//   3. The gothic tree UI: page/tab data, node layout, connector/link data,
//      prerequisite logic, render, detail panel, tab switching, validation.
//
// DROP-IN: replaces BOTH the old mastery.js and render-mastery.js. shop.js /
// state.js / utils.js stay as-is; this file defers to them.
// Requires the Iconify game-icons web component (one CDN <script>, see mastery.html).
// Pays every upgrade in BLOOD COIN from S.blood (never S.resources.blood).
// ═══════════════════════════════════════════════════════════════════════════


// ═══════════════════════════════════════════════════════════════════════════
//  SECTION 1 — REAL MASTERY DATA + HELPERS  (verbatim source of truth)
// ═══════════════════════════════════════════════════════════════════════════

const COIN_LABELS = { old:'OLD', bronze:'BRONZE', silver:'SILVER', gold:'GOLD', plat:'PLATINUM', blood:'BLOOD' };

const MASTERY_UPGRADES = [

  /// ECONOMY +GAIN

  { id:'gain_blood',  cat:'ECONOMY', type:'gain',  coin:'blood',  per:0.05, label:'BLOOD HARVEST',     
    desc:'+5% Blood Coin gained per level.',
    cost:{blood:10},scale:1.2, maxLevel:1000, color:'#c0392b' },

  { id:'gain_old',    cat:'ECONOMY', type:'gain',  coin:'old',    per:0.05, label:'OLD AVARICE',
    desc:'+5% Old Coin gained per level.',
    cost:{blood:100},scale:1.5, maxLevel:100, color:'#aaaaaa' },

  { id:'gain_bronze', cat:'ECONOMY', type:'gain',  coin:'bronze', per:0.05, label:'BRONZE AVARICE',
    desc:'+5% Bronze Coin gained per level.',
    cost:{blood:1000},scale:1.5, maxLevel:100,  color:'#cd7f32' },
    
  { id:'gain_silver', cat:'ECONOMY', type:'gain',  coin:'silver', per:0.05, label:'SILVER AVARICE',
    desc:'+5% Silver Coin gained per level.',
    cost:{blood:10000},scale:1.5, maxLevel:100, color:'#aaaacc' },

  { id:'gain_gold',   cat:'ECONOMY', type:'gain',  coin:'gold',   per:0.05, label:'GOLD AVARICE',
    desc:'+5% Gold Coin gained per level.',
    cost:{blood:100000},scale:1.5, maxLevel:100,  color:'#f0b429' },

  { id:'gain_plat',   cat:'ECONOMY', type:'gain',  coin:'plat',   per:0.05, label:'PLATINUM AVARICE',
    desc:'+5% Platinum Coin gained per level.',
    cost:{blood:1000000},scale:1.5, maxLevel:100, color:'#a8d8ea' },

  /// ECONOMY -COST

  { id:'cost_old',    cat:'ECONOMY', type:'cost', coin:'old',
     per:0.01, label:'OLD THRIFT',
     desc:'-1% Old Coin upgrade cost per level (min 1%).',
     cost:{blood:100}, scale:1.6, maxLevel:99, color:'#aaaaaa' },

  { id:'cost_bronze', cat:'ECONOMY', type:'cost', coin:'bronze',
    per:0.01, label:'BRONZE THRIFT',
    desc:'-1% Bronze Coin upgrade cost per level (min 1%).',
    cost:{blood:1000}, scale:1.6, maxLevel:99, color:'#cd7f32' },

  { id:'cost_silver', cat:'ECONOMY', type:'cost', coin:'silver',
    per:0.01, label:'SILVER THRIFT',
    desc:'-1% Silver Coin upgrade cost per level (min 1%).',
    cost:{blood:10000}, scale:1.6, maxLevel:99, color:'#aaaacc' },

  { id:'cost_gold',   cat:'ECONOMY', type:'cost', coin:'gold',
    per:0.01, label:'GOLD THRIFT',
    desc:'-1% Gold Coin upgrade cost per level (min 1%).',
    cost:{blood:100000}, scale:1.6, maxLevel:99, color:'#f0b429' },

  { id:'cost_plat',   cat:'ECONOMY', type:'cost', coin:'plat',
    per:0.01, label:'PLATINUM THRIFT',
    desc:'-1% Platinum Coin upgrade cost per level (min 1%).',
    cost:{blood:1000000}, scale:1.6, maxLevel:99, color:'#a8d8ea' },

  /// COMBAT

  { id:'stat_atk', cat:'COMBAT', type:'statpct', per:0.02, label:'WRATH',
    desc:'+2% ATK per level.',
    cost:{blood:20}, scale:1.5, maxLevel:100, color:'#e74c3c' },

  { id:'stat_hp',  cat:'COMBAT', type:'statpct', per:0.02, label:'VITALITY',
    desc:'+2% Max HP per level.',
    cost:{blood:20}, scale:1.5, maxLevel:100, color:'#27ae60' },

  /// UTILITY

  { id:'time_death', cat:'UTILITY', type:'timeflat',
    per:0.1, label:'SWIFT REVIVAL',
    desc:'-0.1s defeat recovery time per level (min 1s).',
    cost:{blood:10000}, scale:1.8, maxLevel:90, color:'#9b59b6' },

  { id:'time_flee',  cat:'UTILITY', type:'timeflat',
    per:0.04, label:'LIGHT FEET',
    desc:'-0.04s flee recovery time per level (min 1s).',
    cost:{blood:10000}, scale:1.8, maxLevel:100, color:'#9b59b6' },

  { id:'decay',      cat:'UTILITY', type:'decay',
    per:0.005, label:'ENDURING SPOILS',
    desc:'Softens reward decay by 0.005 per level.',
    cost:{blood:10000}, scale:3, maxLevel:50, color:'#2980b9' },

  { id:'victory',    cat:'UTILITY', type:'viccap',
    per:1,  label:'CONQUEST',
    desc:'+1 max win allowed per enemy, per level.',
    maxLevel:3, costs:[{blood:100},{blood:100000000},{blood:100000000000}], color:'#f0b429' },

  // ── AUTOMATION: passive coin generation ────────────────
  { id:'auto_old',        cat:'AUTOMATION', type:'auto',     coin:'old',    per:0.0001, label:'OLD WELLSPRING',     desc:'Generate 0.01% of Old earned this run per sec, per level.',      cost:{blood:10000},     scale:10, maxLevel:10, color:'#aaaaaa' },
  { id:'automult_old',    cat:'AUTOMATION', type:'automult', coin:'old',    per:0.5,   label:'OLD SURGE',          desc:'×1.5 Old Coin auto-gen per level.',        cost:{blood:50000},     scale:10, maxLevel:10, color:'#aaaaaa' },
  { id:'auto_bronze',     cat:'AUTOMATION', type:'auto',     coin:'bronze', per:0.0001, label:'BRONZE WELLSPRING',  desc:'Generate 0.01% of Bronze earned this run per sec, per level.', cost:{blood:100000},    scale:10, maxLevel:10, color:'#cd7f32' },
  { id:'automult_bronze', cat:'AUTOMATION', type:'automult', coin:'bronze', per:0.5,   label:'BRONZE SURGE',       desc:'×1.5 Bronze Coin auto-gen per level.',     cost:{blood:500000},    scale:10, maxLevel:10, color:'#cd7f32' },
  { id:'auto_silver',     cat:'AUTOMATION', type:'auto',     coin:'silver', per:0.0001, label:'SILVER WELLSPRING',  desc:'Generate 0.01% of Silver earned this run per sec, per level.', cost:{blood:1000000},   scale:10, maxLevel:10, color:'#aaaacc' },
  { id:'automult_silver', cat:'AUTOMATION', type:'automult', coin:'silver', per:0.5,   label:'SILVER SURGE',       desc:'×1.5 Silver Coin auto-gen per level.',     cost:{blood:5000000},   scale:10, maxLevel:10, color:'#aaaacc' },
  { id:'auto_gold',       cat:'AUTOMATION', type:'auto',     coin:'gold',   per:0.0001, label:'GOLD WELLSPRING',    desc:'Generate 0.01% of Gold earned this run per sec, per level.',    cost:{blood:10000000},  scale:10, maxLevel:10, color:'#f0b429' },
  { id:'automult_gold',   cat:'AUTOMATION', type:'automult', coin:'gold',   per:0.5,   label:'GOLD SURGE',         desc:'×1.5 Gold Coin auto-gen per level.',       cost:{blood:50000000},  scale:10, maxLevel:10, color:'#f0b429' },
  { id:'auto_plat',       cat:'AUTOMATION', type:'auto',     coin:'plat',   per:0.0001, label:'PLATINUM WELLSPRING',desc:'Generate 0.01% of Platinum earned this run per sec, per level.',cost:{blood:100000000},scale:10, maxLevel:10, color:'#a8d8ea' },
  { id:'automult_plat',   cat:'AUTOMATION', type:'automult', coin:'plat',   per:0.5,   label:'PLATINUM SURGE',     desc:'×1.5 Platinum Coin auto-gen per level.',   cost:{blood:500000000}, scale:10, maxLevel:10, color:'#a8d8ea' },

  // ── RARITY: enemy rarity spawn chance (escalating omens) ───────
  // type:'rarity'. masteryRarityChance(r) = mLvl * per  (in %).
  { id:'rar_uncommon',  cat:'RARITY', type:'rarity', rarity:'uncommon',  per:0.7, label:'UNCOMMON OMEN',  desc:'+0.7% Uncommon enemy spawn chance per level.',  cost:{blood:1000},    scale:10, maxLevel:100, color:'#27ae60' },
  { id:'rar_rare',      cat:'RARITY', type:'rarity', rarity:'rare',      per:0.4, label:'RARE OMEN',      desc:'+0.4% Rare enemy spawn chance per level.',      cost:{blood:10000},   scale:10, maxLevel:100, color:'#2980b9' },
  { id:'rar_epic',      cat:'RARITY', type:'rarity', rarity:'epic',      per:0.2, label:'EPIC OMEN',      desc:'+0.2% Epic enemy spawn chance per level.',      cost:{blood:100000},  scale:10, maxLevel:100, color:'#9b59b6' },
  { id:'rar_legendary', cat:'RARITY', type:'rarity', rarity:'legendary', per:0.1, label:'LEGENDARY OMEN', desc:'+0.1% Legendary enemy spawn chance per level.', cost:{blood:1000000}, scale:10, maxLevel:100, color:'#f0b429' },
];

// ── LOOKUP HELPERS ────────────────────────────────────
function masteryDef(id){ return MASTERY_UPGRADES.find(u => u.id === id); }
function mLvl(id){ return (S.masteryUpgrades && S.masteryUpgrades[id]) || 0; }

// ── CURRENCY HELPERS (Blood Coin from S.blood vs S.resources) ──
function currencyBalance(key){
  return key === 'blood' ? (S.blood || 0) : (S.resources[key] || 0);
}
function canAffordCost(cost){
  return Object.entries(cost).every(([k, v]) => currencyBalance(k) >= v);
}
function spendCost(cost){
  Object.entries(cost).forEach(([k, v]) => {
    if(k === 'blood') S.blood = (S.blood || 0) - v;
    else S.resources[k] = (S.resources[k] || 0) - v;
  });
}

// ── EFFECT GETTERS (consumed across battle.js/shop.js/milestone.js/init.js) ──
function masteryGainMult(coin){
  const def = MASTERY_UPGRADES.find(u => u.type === 'gain' && u.coin === coin);
  return def ? 1 + mLvl(def.id) * def.per : 1;
}
function masteryCostMult(coin){
  const def = MASTERY_UPGRADES.find(u => u.type === 'cost' && u.coin === coin);
  return def ? Math.max(def.floor ?? 0.01, 1 - mLvl(def.id) * def.per) : 1;
}
function effCost(costObj){
  const out = {};
  Object.entries(costObj).forEach(([res, amt]) => {
    out[res] = Math.max(0, Math.floor(amt * masteryCostMult(res)));
  });
  return out;
}
function masteryAtkMult(){ const d = masteryDef('stat_atk'); return 1 + mLvl('stat_atk') * d.per; }
function masteryHpMult(){  const d = masteryDef('stat_hp');  return 1 + mLvl('stat_hp')  * d.per; }
function masteryDeathTimeMult(){
  const d = masteryDef('time_death');
  const base = d.base10 || 10;
  const secs = Math.max(d.floorSec || 1, base - mLvl('time_death') * d.per);
  return secs / base;
}
function masteryFleeTimeMult(){
  const d = masteryDef('time_flee');
  const base = d.base10 || 5;
  const secs = Math.max(d.floorSec || 1, base - mLvl('time_flee') * d.per);
  return secs / base;
}
function masteryDecay(){ const d = masteryDef('decay'); return Math.max(d.floor ?? 0.05, 0.7 - mLvl('decay') * d.per); }
function masteryBonusVictories(){ return 0; }
// Rarity spawn chance (%). r = 'uncommon'|'rare'|'epic'|'legendary'.
// effect = level * per. battle.js consumes a rarity chance for spawns; see the
// RARITY fix report for the live-key bridge note.
function masteryRarityChance(r){
  const def = MASTERY_UPGRADES.find(u => u.type === 'rarity' && u.rarity === r);
  return def ? mLvl(def.id) * def.per : 0;
}
function masteryVicReqBonus(){ const d = masteryDef('victory'); return mLvl('victory') * d.per; }
// NOTE (live-game bridge): WELLSPRING uses THIS RUN's earned coins as its basis
// for every coin, including 'old' (S.sessionEarned.old). lifetimeEarned.old is
// separate and still drives the M.Old milestone. Kept from the game's mastery.js
// so the established economy is unchanged.
function masteryAutoSessionCount(coin){
  return (S.sessionEarned && S.sessionEarned[coin]) || 0;
}
function masteryAutoRate(coin){
  const baseDef = MASTERY_UPGRADES.find(u => u.type === 'auto'     && u.coin === coin);
  const multDef = MASTERY_UPGRADES.find(u => u.type === 'automult' && u.coin === coin);
  const fraction = baseDef ? mLvl(baseDef.id) * baseDef.per : 0;
  const baseRate = fraction * masteryAutoSessionCount(coin);
  const mult = multDef ? 1 + mLvl(multDef.id) * multDef.per : 1;
  return baseRate * mult;
}
function masteryAutoTick(dt){
  if(!S.resources) return;
  if(!S.lifetimeEarned) S.lifetimeEarned = { old:0 };
  if(!S.sessionEarned)  S.sessionEarned  = { old:0, bronze:0, silver:0, gold:0, plat:0 };
  ['old','bronze','silver','gold','plat'].forEach(coin => {
    const gain = masteryAutoRate(coin) * dt;
    if(gain <= 0) return;
    S.resources[coin] = (S.resources[coin] || 0) + gain;
    S.sessionEarned[coin] = (S.sessionEarned[coin] || 0) + gain;       // session (WELLSPRING basis)
    if(coin === 'old') S.lifetimeEarned.old = (S.lifetimeEarned.old || 0) + gain; // lifetime (drives M.Old milestone)
  });
}

// ── EFFECT DISPLAY STRING ─────────────────────────────
function masteryEffectStr(up, level){
  switch(up.type){
    case 'gain':    return `+${(level*up.per*100).toFixed(0)}%`;
    case 'statpct': return `+${(level*up.per*100).toFixed(0)}%`;
    case 'cost':    return `-${((1 - Math.max(up.floor ?? 0.01, 1 - level*up.per))*100).toFixed(0)}%`;
    case 'timecut': return `-${((1 - Math.max(up.floor ?? 0.01, 1 - level*up.per))*100).toFixed(0)}%`;
    case 'timeflat':return `${Math.max(up.floorSec||1, (up.base10||10) - level*up.per).toFixed(1)}s revive`;
    case 'decay':   return `decay ${Math.max(up.floor ?? 0.05, 0.7 - level*up.per).toFixed(2)}`;
    case 'victory': return `+${level*up.per}/win`;
    case 'viccap':  return `+${level*up.per} max wins/enemy`;
    case 'auto':    return `${(level*up.per*100).toFixed(2)}% of run ${COIN_LABELS[up.coin]}/s`;
    case 'automult':return `×${(1 + level*up.per).toFixed(2)}`;
    case 'rarity':  return `+${(level*up.per).toFixed(1)}% spawn`;
    default:        return '';
  }
}

const MASTERY_CATS = ['COMBAT','ECONOMY','AUTOMATION','UTILITY','RARITY'];


// ═══════════════════════════════════════════════════════════════════════════
//  SECTION 2 — ENVIRONMENT FALLBACKS (standalone only; live game wins)
// ═══════════════════════════════════════════════════════════════════════════
// Each is provided ONLY if the host game hasn't already defined it. The try/{}
// probes a bare identifier: if it exists (live game's state.js/utils.js/shop.js),
// we skip; if it throws (standalone), we install a fallback on window.

// S — game state. Standalone gets a sample save so every node STATE is visible.
try { S; } catch (_) {
  window.S = {
    blood: 5e12,
    resources: { old:0, bronze:0, silver:0, gold:0, plat:0 },
    lifetimeEarned: { old: 4.2e6 },
    sessionEarned: { bronze: 5e5, silver: 8e4, gold: 1.2e4, plat: 200 },
    masteryUpgrades: {
      stat_atk: 18, stat_hp: 100,
      gain_blood: 40, gain_old: 12, gain_gold: 6, cost_old: 20,
      auto_silver: 4, automult_silver: 2,
      time_death: 9, victory: 3,
      rar_uncommon: 30, rar_rare: 8,
    },
  };
}
// RARITY_UPGRADES — buyMasteryUpgrade searches it first in the live game.
try { RARITY_UPGRADES; } catch (_) { window.RARITY_UPGRADES = []; }
// fmt — number formatter.
try { fmt; } catch (_) {
  window.fmt = function (n){
    if(n===undefined||n===null) return '0';
    if(n>=1e12) return (n/1e12).toFixed(2)+'T';
    if(n>=1e9)  return (n/1e9).toFixed(2)+'B';
    if(n>=1e6)  return (n/1e6).toFixed(2)+'M';
    if(n>=1e3)  return (n/1e3).toFixed(2)+'K';
    return n%1===0 ? n.toFixed(0) : n.toFixed(2);
  };
}
// toast — transient message (creates its own element if none exists).
try { toast; } catch (_) {
  window.toast = function (msg){
    let t = document.getElementById('mtree-toast');
    if(!t){ t = document.createElement('div'); t.id = 'mtree-toast'; document.body.appendChild(t); }
    t.textContent = msg; t.classList.add('show');
    clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove('show'), 2000);
  };
}
// renderStats — live game repaints the stat panel after a purchase; no-op here.
try { renderStats; } catch (_) { window.renderStats = function(){}; }

// Mastery cost = cost × scale^level (no extra ramp).

// buyMasteryUpgrade — the real spend/+1 logic. Mirrors shop.js EXACTLY so the
// standalone behaves identically; in the live game shop.js's version is used.
try { buyMasteryUpgrade; } catch (_) {
  window.buyMasteryUpgrade = function (id){
    const up = (RARITY_UPGRADES.find(u=>u.id===id)) || MASTERY_UPGRADES.find(u=>u.id===id);
    if(!up) return;
    if(!S.masteryUpgrades) S.masteryUpgrades = {};
    const level = S.masteryUpgrades[id] || 0;
    if(level >= up.maxLevel) return;
    const rawCost = {};
    Object.entries(up.cost).forEach(([res, amt]) => { rawCost[res] = Math.floor(amt * Math.pow(up.scale, level)); });
    const cost = effCost(rawCost);
    if(!canAffordCost(cost)){ toast('Not enough resources.'); return; }
    spendCost(cost);
    S.masteryUpgrades[id] = level + 1;
    renderMastery();
    renderStats();
    toast(`${up.label} → Lv ${S.masteryUpgrades[id]}`);
    if(typeof window.onMasteryChange === 'function') window.onMasteryChange();
  };
}


// ═══════════════════════════════════════════════════════════════════════════
//  SECTION 3 — MASTERY TREE UI (tabs, layout, prerequisites, render, detail)
// ═══════════════════════════════════════════════════════════════════════════

let masteryActiveCat = 'COMBAT';
let masterySelectedId = null;
let masterySelectedLinkId = null; // editor: currently selected connector

// Branch glow: COMBAT red · ECONOMY gold · UTILITY blue/cyan · AUTOMATION violet.
const MASTERY_BRANCH_HEX = {
  COMBAT: '#e0392b', ECONOMY: '#e8a417', UTILITY: '#29b6d8', AUTOMATION: '#a85cd6', RARITY: '#2980b9',
};

// PAGE / TREE LAYOUT — positions are PERCENT of the stage (responsive).
// `parent` is BOTH the visual connector AND the prerequisite: a node requires
// its parent at level ≥ 1, EXCEPT parent === 'root' (the decorative, non-
// clickable category anchor with no masteryId) which never gates. Every other
// node maps 1:1 to a real MASTERY_UPGRADES id — no fake clickable nodes.
const MASTERY_TREE_LAYOUT = {
  COMBAT: {
    aspect: 2.4,
    root: { icon: 'crossed-swords', x: 50, y: 20, structural: true },
    nodes: [
      { id: 'stat_atk', icon: 'broadsword',    x: 34, y: 66, parent: 'root' },
      { id: 'stat_hp',  icon: 'health-normal', x: 66, y: 66, parent: 'root' },
    ],
  },
  ECONOMY: {
    aspect: 1.75,
    root: { icon: 'scales', x: 50, y: 9, structural: true },
    nodes: [
      { id: 'gain_blood',  icon: 'blood',     x: 50, y: 29, parent: 'root' },
      { id: 'gain_old',    icon: 'coins',     x: 16, y: 55, parent: 'gain_blood' },
      { id: 'gain_bronze', icon: 'cash',      x: 33, y: 55, parent: 'gain_blood' },
      { id: 'gain_silver', icon: 'two-coins', x: 50, y: 55, parent: 'gain_blood' },
      { id: 'gain_gold',   icon: 'gold-bar',  x: 67, y: 55, parent: 'gain_blood' },
      { id: 'gain_plat',   icon: 'crystal-growth', x: 84, y: 55, parent: 'gain_blood' },
      { id: 'cost_old',    icon: 'pay-money',     x: 16, y: 84, parent: 'gain_old' },
      { id: 'cost_bronze', icon: 'receive-money', x: 33, y: 84, parent: 'gain_bronze' },
      { id: 'cost_silver', icon: 'locked-chest',  x: 50, y: 84, parent: 'gain_silver' },
      { id: 'cost_gold',   icon: 'token',         x: 67, y: 84, parent: 'gain_gold' },
      { id: 'cost_plat',   icon: 'cut-diamond',   x: 84, y: 84, parent: 'gain_plat' },
    ],
  },
  UTILITY: {
    aspect: 2.4,
    root: { icon: 'compass', x: 50, y: 18, structural: true },
    nodes: [
      { id: 'time_death', icon: 'heart-plus',   x: 22, y: 66, parent: 'root' },
      { id: 'time_flee',  icon: 'boot-stomp',   x: 41, y: 66, parent: 'root' },
      { id: 'decay',      icon: 'locked-chest', x: 59, y: 66, parent: 'root' },
      { id: 'victory',    icon: 'laurel-crown', x: 78, y: 66, parent: 'root' },
    ],
  },
  AUTOMATION: {
    aspect: 1.75,
    root: { icon: 'gears', x: 50, y: 10, structural: true },
    nodes: [
      { id: 'auto_old',    icon: 'cog',         x: 16, y: 44, parent: 'root' },
      { id: 'auto_bronze', icon: 'cog',         x: 33, y: 44, parent: 'root' },
      { id: 'auto_silver', icon: 'gear-hammer', x: 50, y: 44, parent: 'root' },
      { id: 'auto_gold',   icon: 'cog',         x: 67, y: 44, parent: 'root' },
      { id: 'auto_plat',   icon: 'cog',         x: 84, y: 44, parent: 'root' },
      { id: 'automult_old',    icon: 'lightning-arc', x: 16, y: 78, parent: 'auto_old' },
      { id: 'automult_bronze', icon: 'lightning-arc', x: 33, y: 78, parent: 'auto_bronze' },
      { id: 'automult_silver', icon: 'lightning-arc', x: 50, y: 78, parent: 'auto_silver' },
      { id: 'automult_gold',   icon: 'lightning-arc', x: 67, y: 78, parent: 'auto_gold' },
      { id: 'automult_plat',   icon: 'lightning-arc', x: 84, y: 78, parent: 'auto_plat' },
    ],
  },
  RARITY: {
    aspect: 1.75,
    root: { icon: 'dice-twenty-faces-twenty', x: 50, y: 10, structural: true },
    // Tier ladder of escalating omens: each requires the previous. Uses the
    // given x positions as a descending staircase so the chain reads as escalation.
    nodes: [
      { id: 'rar_uncommon',  icon: 'dripping-knife',  x: 16, y: 30, parent: 'root' },
      { id: 'rar_rare',      icon: 'emerald',         x: 39, y: 48, parent: 'rar_uncommon' },
      { id: 'rar_epic',      icon: 'crowned-skull',   x: 61, y: 66, parent: 'rar_rare' },
      { id: 'rar_legendary', icon: 'sun-radiations',  x: 84, y: 84, parent: 'rar_epic' },
    ],
  },
};

// ── LINK MODEL ─────────────────────────────────────────
// EVERY Parent → Child connection is its OWN logical link with a unique id and
// an INDEPENDENT state. A fork is NEVER one shared link/state — sibling links
// are separate objects so the left and right paths light independently.
// `parent` may be a string OR an array (multi-parent children). A link whose
// source is a structural root never gates progression.
function nodeParents(n){
  return Array.isArray(n.parent) ? n.parent : (n.parent ? [n.parent] : []);
}
function isStructuralSource(cat, sourceId){
  if(sourceId === 'root') return MASTERY_TREE_LAYOUT[cat].root.structural !== false;
  return false; // a real-masteryId source is never structural
}
// One object per Parent→Child edge (single target each — never a targets[] list).
function buildMasteryLinks(cat){
  const links = [];
  MASTERY_TREE_LAYOUT[cat].nodes.forEach(n => {
    nodeParents(n).forEach(src => {
      links.push({
        id: `${cat}__${src}__${n.id}`,   // unique logical link id
        from: src,
        to: n.id,
        pageId: cat,
        branch: cat,
        rule: isStructuralSource(cat, src) ? 'structural_source' : 'requires_from_unlocked',
        visual: !!n.visualLink,           // decorative links never gate or fully light
      });
    });
  });
  return links;
}
// Back-compat shape (source/target) used by older callers.
function masteryPageLinks(cat){
  return buildMasteryLinks(cat).map(l => ({ source: l.from, target: l.to, id: l.id }));
}

// LINK STATE — computed PURELY from the TARGET child (+ its prerequisites),
// never from "is the parent unlocked". Full active lighting REQUIRES target
// level > 0. This is the core of the per-branch fix.
function getLinkState(link){
  if(link.visual) return 'visual';
  const target = masteryDef(link.to);
  const srcOk = link.from === 'root' || masteryDef(link.from);
  if(!target || !srcOk) return 'invalid';
  if(!areRequirementsMet(link.to, link.pageId)) return 'locked';   // prereqs unmet
  const lvl = getNodeLevel(link.to);
  if(lvl <= 0) return 'available';                                 // unlockable, not lit
  if(lvl >= target.maxLevel) return 'maxed';                       // fully lit + maxed
  return 'active';                                                 // fully lit
}

// ── PROGRESSION ────────────────────────────────────────
function getNodeLevel(id){ return (S.masteryUpgrades && S.masteryUpgrades[id]) || 0; }
// A node's prerequisites = its NON-structural parents (real upgrade sources).
// Multi-parent children require EVERY such parent at level > 0.
function getNodeRequirements(nodeId, cat){
  const n = MASTERY_TREE_LAYOUT[cat].nodes.find(x => x.id === nodeId);
  if(!n) return [];
  return nodeParents(n).filter(src => !isStructuralSource(cat, src) && masteryDef(src));
}
function areRequirementsMet(nodeId, cat){
  return getNodeRequirements(nodeId, cat).every(req => getNodeLevel(req) > 0);
}
function masteryNodeState(nodeId, cat){
  const def = masteryDef(nodeId);
  if(!def) return 'invalid';
  const level = getNodeLevel(nodeId);
  if(level >= def.maxLevel) return 'maxed';
  if(level > 0) return 'unlocked';
  if(areRequirementsMet(nodeId, cat)) return 'available';
  return 'locked';
}

// ── COST DISPLAY (same formula as buyMasteryUpgrade) ────
function masteryLevelCost(up, level){
  if(up.costs && up.costs[level]) return effCost(up.costs[level]);
  return effCost(Object.fromEntries(Object.entries(up.cost).map(([r, a]) =>
    [r, Math.floor(a * Math.pow(up.scale, level))])));
}
function masteryCostStr(cost){
  return Object.entries(cost).map(([r, a]) => `${fmt(a)} ${COIN_LABELS[r] || r.toUpperCase()}`).join(' + ');
}

// ── TAB / SELECT ───────────────────────────────────────
function selectMasteryNode(id){ masterySelectedId = id; masterySelectedLinkId = null; renderMastery(); }
function setMasteryCat(cat){ masteryActiveCat = cat; masterySelectedId = null; masterySelectedLinkId = null; renderMastery(); }
// Editor hook: select a connector by its link id (keeps links individually addressable).
function selectMasteryLink(id){ masterySelectedLinkId = id; renderMastery(); }

// ── GUARDED UPGRADE — the only UI entry point ──────────
// Enforces prerequisites + maxLevel + afford BEFORE delegating to
// buyMasteryUpgrade (which does the +1 and Blood Coin spend). Progression
// cannot be skipped and locked nodes cannot spend.
function tryUpgradeMastery(id){
  const def = masteryDef(id);
  if(!def) return;
  const level = getNodeLevel(id);
  if(level >= def.maxLevel){ toast('Already maxed.'); return; }
  if(!areRequirementsMet(id, masteryActiveCat)){
    const reqs = getNodeRequirements(id, masteryActiveCat).map(r => masteryDef(r).label).join(', ');
    toast(`Requires: ${reqs}`); return;
  }
  if(!canAffordCost(masteryLevelCost(def, level))){ toast('Not enough Blood Coin.'); return; }
  buyMasteryUpgrade(id);
}

function iconColorFor(state, branchHex){
  if(state === 'unlocked' || state === 'maxed') return branchHex;
  if(state === 'available') return '#6a6862';
  return '#4a4844';
}

// ── MAIN RENDER ────────────────────────────────────────
function renderMastery(){
  const el = document.getElementById('mastery-content');
  if(!el) return;

  const cat = masteryActiveCat;
  const layout = MASTERY_TREE_LAYOUT[cat];
  const branchHex = MASTERY_BRANCH_HEX[cat];
  if(!masterySelectedId && layout) masterySelectedId = layout.nodes[0].id;

  // tabs (order follows MASTERY_CATS)
  const tabsHtml = MASTERY_CATS.map(c => {
    const active = c === cat;
    return `<button class="mtree-tab${active ? ' active' : ''}" style="--mbranch:${MASTERY_BRANCH_HEX[c]};"
      onclick="setMasteryCat('${c}')">
      <iconify-icon icon="game-icons:${MASTERY_TREE_LAYOUT[c].root.icon}" style="color:${active ? MASTERY_BRANCH_HEX[c] : '#6f6c66'};"></iconify-icon>
      <span>${c}</span></button>`;
  }).join('');

  // node lookup (+ decorative root)
  const byId = { root: layout.root };
  layout.nodes.forEach(n => { byId[n.id] = n; });

  // CONNECTORS — ONE independent logical link per Parent→Child edge.
  // Each link is its own <g> (visible path + hitbox) with its own state, so a
  // fork's sibling paths light independently. Routes may overlap on the shared
  // parent→junction stem; draw order (locked→available→active→maxed→selected)
  // makes the higher-state path win on the shared section.
  const VBW = 1000, VBH = Math.round(1000 / layout.aspect);
  const X = px => (px / 100) * VBW, Y = py => (py / 100) * VBH;
  const linkModel = buildMasteryLinks(cat);
  // shared junction Y per source (so siblings share a clean bus)
  const bySource = {};
  linkModel.forEach(l => { (bySource[l.from] ||= []).push(l); });
  const busYof = {};
  Object.entries(bySource).forEach(([src, ls]) => {
    const p = byId[src];
    const childYs = ls.map(l => byId[l.to].y);
    busYof[src] = Y(p.y + (Math.min(...childYs) - p.y) * 0.5);
  });
  // per-link route: parent edge → shared stem → its own horizontal → child edge
  const linkD = l => {
    const p = byId[l.from], k = byId[l.to];
    const pX = X(p.x), pY = Y(p.y), kX = X(k.x), kY = Y(k.y), busY = busYof[l.from];
    return `M ${pX} ${pY} L ${pX} ${busY} L ${kX} ${busY} L ${kX} ${kY}`;
  };
  const LINK_ORDER = { invalid: 0, visual: 1, locked: 2, available: 3, active: 4, maxed: 5 };
  const linksSvg = `<svg class="mtree-links" viewBox="0 0 ${VBW} ${VBH}" preserveAspectRatio="none">${
    linkModel
      .map(l => ({ l, state: getLinkState(l), d: linkD(l) }))
      .sort((a, b) => (LINK_ORDER[a.state] || 0) - (LINK_ORDER[b.state] || 0))
      .map(({ l, state, d }) => {
        const sel = l.id === masterySelectedLinkId ? ' pnw-link--selected' : '';
        return `<g class="pnw-link pnw-link--${state}${sel}" data-pnw-link-id="${l.id}" data-from="${l.from}" data-to="${l.to}" data-page-id="${l.pageId}" data-branch="${l.branch}" data-rule="${l.rule}" data-state="${state}">`
          + `<path class="pnw-link-visible" d="${d}" />`
          + `<path class="pnw-link-hitbox" d="${d}" onclick="selectMasteryLink('${l.id}')" />`
          + `</g>`;
      }).join('')
  }</svg>`;

  // root (decorative, non-clickable)
  let nodesHtml = `<div class="mnode mnode-root" style="left:${layout.root.x}%;top:${layout.root.y}%;">
    <span class="mnode-disc"><iconify-icon icon="game-icons:${layout.root.icon}" style="color:${branchHex};"></iconify-icon></span>
  </div>`;

  // real nodes
  layout.nodes.forEach(n => {
    const up = masteryDef(n.id);
    const state = masteryNodeState(n.id, cat);
    const level = getNodeLevel(n.id);
    const sel = n.id === masterySelectedId;
    const badge = level >= up.maxLevel ? 'MAX' : `${level}`;
    nodesHtml += `<button class="mnode state-${state}${sel ? ' selected' : ''}"
      style="left:${n.x}%;top:${n.y}%;" onclick="selectMasteryNode('${n.id}')" title="${up.label}">
      <span class="mnode-disc"><iconify-icon icon="game-icons:${n.icon}" style="color:${iconColorFor(state, branchHex)};"></iconify-icon></span>
      <span class="mnode-lvl">${badge}</span>
    </button>`;
  });

  el.innerHTML = `
    <div class="mtree-wrap">
      <div class="mtree-tabs">${tabsHtml}</div>
      <div class="mtree-main">
        <div class="mtree-tree-area">
          <div class="mtree-stage branch-${cat}" style="--mbranch:${branchHex};">
            ${linksSvg}
            ${nodesHtml}
          </div>
        </div>
        <div class="mtree-detail" style="--mbranch:${branchHex};">${masteryDetailHTML(branchHex, cat)}</div>
      </div>
      <div class="mtree-bottom">
        <div class="mtree-panel mtree-info-panel">${masteryInfoHTML()}</div>
        <div class="mtree-panel mtree-bonus-panel" style="--mbranch:${branchHex};">${masteryBonusesHTML()}</div>
      </div>
    </div>`;

  fitMasteryHeight();   // size the screen to the space below the game header
}

// ── FIT-TO-PAGE — Mastery screen fills the scroll container, never overflows ──
// The game host scales the whole UI (#zoom-wrap has a transform: scale()), so
// getBoundingClientRect() returns VISUAL px while style.height is CSS px — mixing
// them overshoots by the zoom factor and forces the scroll container to scroll.
// We instead size #mastery-content to the scroll container's own inner height
// (clientHeight, already CSS px and zoom-agnostic) minus where the tree starts.
// Result: the whole Mastery UI fits with no mouse-wheel scroll, at any window
// size or zoom; it re-runs only on window resize.
function fitMasteryHeight(){
  const el = document.getElementById('mastery-content');
  if(!el || typeof window === 'undefined') return;
  if(!el.offsetParent) return;                 // hidden (not the active view) → skip

  // nearest scrolling ancestor — the box whose scrollbar we must eliminate
  let sc = el.parentElement;
  while(sc && sc !== document.body){
    const oy = getComputedStyle(sc).overflowY;
    if(oy === 'auto' || oy === 'scroll') break;
    sc = sc.parentElement;
  }

  if(sc && sc !== document.body){
    // zoom factor = visual px per CSS px (1 when no scale is applied)
    const zoom = el.offsetHeight ? (el.getBoundingClientRect().height / el.offsetHeight) : 1;
    // distance from the scroll container's top border to the tree's top, in CSS px
    const offset = (el.getBoundingClientRect().top - sc.getBoundingClientRect().top) / (zoom || 1);
    const avail = sc.clientHeight - offset - 6;   // clientHeight excludes any scrollbar
    el.style.height = Math.max(320, avail) + 'px';
  } else {
    // standalone (no scaling host) — fall back to the viewport
    const top = el.getBoundingClientRect().top + (window.scrollY || 0);
    el.style.height = Math.max(320, window.innerHeight - top - 8) + 'px';
  }
}
if(typeof window !== 'undefined' && !window.__mtreeFitBound){
  window.__mtreeFitBound = true;
  window.addEventListener('resize', fitMasteryHeight);
}

// ── DETAIL PANEL (right side — fixed fields per reference) ─────────────
// Fields: node icon, name, branch, mastery id, current level, max level,
// current effect, next effect, cost, status, unlock/upgrade button.
// The button is pinned (rendered outside the scroll area) so it never gets
// pushed out of view when the panel shrinks.
function masteryDetailHTML(branchHex, cat){
  const id = masterySelectedId;
  const up = id && masteryDef(id);
  if(!up) return `<div class="mtree-d-empty">Select a node to inspect it.</div>`;

  const node = MASTERY_TREE_LAYOUT[cat].nodes.find(n => n.id === id);
  const icon = (node && node.icon) || 'help';
  const level = getNodeLevel(id);
  const isMax = level >= up.maxLevel;
  const reqMet = areRequirementsMet(id, cat);
  const cost = masteryLevelCost(up, level);
  const afford = canAffordCost(cost);
  const status = isMax ? 'MAXED' : level > 0 ? 'UNLOCKED' : reqMet ? 'AVAILABLE' : 'LOCKED';
  const nowStr = masteryEffectStr(up, level);
  const nextStr = isMax ? '' : masteryEffectStr(up, level + 1);

  let btn;
  if(isMax){
    btn = `<button class="mtree-d-btn maxed" disabled>✦ MAXED</button>`;
  } else if(!reqMet){
    const reqLabels = getNodeRequirements(id, cat).map(r => masteryDef(r).label).join(', ');
    btn = `<button class="mtree-d-btn cant" disabled>REQUIRE: ${reqLabels}</button>`;
  } else {
    const verb = level > 0 ? 'UPGRADE NODE' : 'UNLOCK NODE';
    btn = `<button class="mtree-d-btn ${afford ? 'can' : 'cant'}" ${afford ? '' : 'disabled'}
      onclick="tryUpgradeMastery('${id}')">${verb}</button>`;
  }

  return `
    <div class="mtree-d-scroll">
      <div class="mtree-d-head">
        <span class="mtree-d-icon"><iconify-icon icon="game-icons:${icon}" style="color:${branchHex};"></iconify-icon></span>
        <div class="mtree-d-headtext">
          <div class="mtree-d-title" style="color:${branchHex};">${up.label}</div>
          <span class="mtree-d-badge">${up.cat} / ${status}</span>
        </div>
      </div>

      <div class="mtree-d-cells">
        <div class="cell"><label>CURRENT LEVEL</label><b>${level}</b></div>
        <div class="cell"><label>MAX LEVEL</label><b>${up.maxLevel}</b></div>
        <div class="cell"><label>BRANCH</label><b>${up.cat}</b></div>
        <div class="cell"><label>MASTERY ID</label><b class="mono">${id}</b></div>
      </div>

      <div class="mtree-d-sub">Main mastery: ${id}</div>

      <div class="mtree-d-box">
        <label>CURRENT EFFECT</label>
        <div class="mtree-d-bullet" style="color:${level > 0 ? branchHex : '#b9b4ab'};">• ${level > 0 ? nowStr : 'No active bonus yet.'}</div>
      </div>
      <div class="mtree-d-box">
        <label>NEXT EFFECT</label>
        <div class="mtree-d-bullet">• ${isMax ? 'Fully mastered.' : nextStr}</div>
      </div>

      <div class="mtree-d-cells">
        <div class="cell"><label>COST</label><b class="${isMax ? '' : (afford ? 'ok' : 'no')}">${isMax ? '—' : masteryCostStr(cost)}</b></div>
        <div class="cell"><label>STATUS</label><b>${status.toLowerCase()}</b></div>
      </div>
    </div>
    ${btn}
  `;
}

// ── BOTTOM PANELS — Mastery-related info only (no Recently Unlocked) ────
function masteryInfoHTML(){
  let total = 0, unlocked = 0;
  MASTERY_UPGRADES.forEach(u => { total++; if(getNodeLevel(u.id) > 0) unlocked++; });
  return `
    <div class="mtree-panel-title">MASTERY INFO</div>
    <p class="mtree-panel-desc">Spend Blood Coin to unlock permanent bonuses. Each node levels independently; prerequisites follow the tree links.</p>
    <div class="mtree-panel-stats">
      <div><label>NODES UNLOCKED</label><b>${unlocked} / ${total}</b></div>
      <div><label>BLOOD COIN</label><b>${fmt(currencyBalance('blood'))}</b></div>
    </div>`;
}

// Aggregate the player's active mastery bonuses from the REAL effect getters.
// Only shows lines that exist in the data (no invented stats).
function masteryAllBonuses(){
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
  const list = [];
  list.push(['Attack', `+${((masteryAtkMult() - 1) * 100).toFixed(0)}%`]);
  list.push(['Max HP', `+${((masteryHpMult() - 1) * 100).toFixed(0)}%`]);
  list.push(['Blood Coin Gain', `+${(mLvl('gain_blood') * masteryDef('gain_blood').per * 100).toFixed(0)}%`]);
  ['old','bronze','silver','gold','plat'].forEach(c => {
    const g = (masteryGainMult(c) - 1) * 100;
    if(g > 0) list.push([`${cap(c)} Coin Gain`, `+${g.toFixed(0)}%`]);
  });
  list.push(['Defeat Recovery', `-${((1 - masteryDeathTimeMult()) * 100).toFixed(0)}%`]);
  list.push(['Flee Recovery', `-${((1 - masteryFleeTimeMult()) * 100).toFixed(0)}%`]);
  ['old','bronze','silver','gold','plat'].forEach(c => {
    const r = masteryAutoRate(c);
    if(r > 0) list.push([`${cap(c)} Coin Auto`, `+${fmt(r)}/s`]);
  });
  const vic = masteryVicReqBonus();
  if(vic > 0) list.push(['Max Wins / Enemy', `+${vic}`]);
  ['uncommon','rare','epic','legendary'].forEach(r => {
    const c = masteryRarityChance(r);
    if(c > 0) list.push([`${cap(r)} Spawn`, `+${c.toFixed(1)}%`]);
  });
  return list;
}
function masteryBonusesHTML(){
  const rows = masteryAllBonuses().map(([k, v]) => `<li><span>${k}</span><b>${v}</b></li>`).join('');
  return `<div class="mtree-panel-title">YOUR BONUSES</div><ul class="mtree-bonus-list">${rows}</ul>`;
}

// ── VALIDATION — coverage + link integrity ─────────────
function validateMasteryBinding(){
  const issues = [];
  const placed = {};
  const ids = new Set(MASTERY_UPGRADES.map(u => u.id));

  Object.entries(MASTERY_TREE_LAYOUT).forEach(([cat, page]) => {
    if(!MASTERY_BRANCH_HEX[cat]) issues.push(`page ${cat}: missing branch color`);
    if(!page.nodes.length) issues.push(`page ${cat}: no nodes`);
    const pageIds = new Set(page.nodes.map(n => n.id));
    page.nodes.forEach(n => {
      if(!n.id) issues.push(`page ${cat}: clickable node with empty masteryId`);
      else if(!ids.has(n.id)) issues.push(`page ${cat}: node "${n.id}" not in MASTERY_UPGRADES`);
      else (placed[n.id] ||= []).push(cat);
      nodeParents(n).forEach(src => {
        const linkOk = src === 'root' || pageIds.has(src);
        if(!linkOk) issues.push(`page ${cat}: node "${n.id}" links to missing parent "${src}"`);
      });
    });

    // ── PER-LINK integrity (section 12) ──────────────────────────────
    const seenLinkIds = new Set();
    const links = buildMasteryLinks(cat);
    links.forEach(l => {
      if(l.targets) issues.push(`link ${l.id}: must have a single target, not a targets[] list`);
      if(seenLinkIds.has(l.id)) issues.push(`duplicate logical link id "${l.id}"`);
      seenLinkIds.add(l.id);
      if(!l.from) issues.push(`link ${l.id}: missing source`);
      if(!l.to || !ids.has(l.to)) issues.push(`link ${l.id}: missing/invalid target`);
      if(l.from !== 'root' && !ids.has(l.from)) issues.push(`link ${l.id}: source "${l.from}" not a real node`);
      // runtime state invariants — the bug we are guarding against:
      const st = getLinkState(l);
      if(st === 'active' && getNodeLevel(l.to) <= 0)
        issues.push(`Link ${l.id} is active, but target ${l.to} has level 0.`);
      if((st === 'active' || st === 'maxed') && !areRequirementsMet(l.to, cat))
        issues.push(`Link ${l.id} is ${st}, but target ${l.to} prerequisites are not met.`);
      if(l.visual && getNodeRequirements(l.to, cat).includes(l.from))
        issues.push(`Visual-only link ${l.id} must not act as a prerequisite.`);
    });
    // no two sibling links may share one state object (they are distinct objs)
    const bySrc = {};
    links.forEach(l => { (bySrc[l.from] ||= []).push(l); });
    Object.values(bySrc).forEach(sibs => {
      for(let i = 1; i < sibs.length; i++) if(sibs[i] === sibs[0])
        issues.push(`sibling links under "${sibs[0].from}" share one object`);
    });
  });
  MASTERY_UPGRADES.forEach(u => {
    const where = placed[u.id] || [];
    if(where.length === 0) issues.push(`upgrade "${u.id}" not placed on any page`);
    else if(where.length > 1) issues.push(`upgrade "${u.id}" on multiple pages: ${where.join(', ')}`);
  });

  const ok = issues.length === 0;
  if(typeof console !== 'undefined'){
    console[ok ? 'log' : 'warn'](`[mastery-binding] ${ok ? 'OK — all ' + MASTERY_UPGRADES.length + ' upgrades bound; every Parent→Child link has an independent target-driven state' : issues.length + ' issue(s)'}`);
    issues.forEach(i => console.warn('  • ' + i));
  }
  return { ok, issues };
}
if(typeof window !== 'undefined'){
  setTimeout(() => { try { validateMasteryBinding(); } catch (_) {} }, 0);
}


// ═══════════════════════════════════════════════════════════════════════════
//  SECTION 4 — HIDE BOTTOM PANEL WHILE VIEWING MASTERY
// ═══════════════════════════════════════════════════════════════════════════
// While PRESTIGE → MASTERY is the active view, hide #bottom-bar (current stat /
// fundamentals / combat log / protocol). It is restored the moment you leave.
// This only toggles a body class read from the live tab state — the panel is
// never removed, redesigned, or altered, and no other tab is affected. The
// matching rules live in mastery.css: body.mastery-view #bottom-bar{display:none}
// and a scoped height bridge so the tree fills the freed space.
function syncMasteryBottomBar(){
  const archive     = document.getElementById('tab-archive');
  const masterpiece = document.getElementById('arch-masterpiece');
  const onMastery = !!(archive && archive.classList.contains('active') &&
                       masterpiece && masterpiece.classList.contains('active'));
  document.body.classList.toggle('mastery-view', onMastery);
  // Toggling .mastery-view hides #bottom-bar and grows the scroll container, so
  // the tree's available height is only correct AFTER this class change. Re-fit
  // here: the synchronous call already measures the final (reflowed) container
  // because fitMasteryHeight reads layout; the rAF is a belt-and-braces retry.
  if(onMastery){
    fitMasteryHeight();
    if(typeof requestAnimationFrame === 'function') requestAnimationFrame(fitMasteryHeight);
  }
}
if(typeof window !== 'undefined'){
  window.addEventListener('DOMContentLoaded', () => {
    // Re-evaluate after the game's own click handlers have updated .active
    // classes (deferred to the next tick, so registration order is irrelevant).
    document.querySelectorAll('.nav-tab, .prestige-tab').forEach(t => {
      t.addEventListener('click', () => setTimeout(syncMasteryBottomBar, 0));
    });
    syncMasteryBottomBar();
  });
}