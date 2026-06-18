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
  { id:'gain_blood',  cat:'ECONOMY', type:'gain',  coin:'blood',  per:0.05, label:'BLOOD HARVEST',     desc:'+5% Blood Coin gained per level.',    base:{blood:50}, scale:1.15, maxLevel:1000, noRamp:true, color:'#c0392b' },
  { id:'gain_old',    cat:'ECONOMY', type:'gain',  coin:'old',    per:0.05, label:'OLD AVARICE',       desc:'+5% Old Coin gained per level.',      base:{blood:10}, scale:1.5, maxLevel:100, color:'#aaaaaa' },
  { id:'gain_bronze', cat:'ECONOMY', type:'gain',  coin:'bronze', per:0.05, label:'BRONZE AVARICE',    desc:'+5% Bronze Coin gained per level.',   base:{blood:15}, scale:1.5, maxLevel:100, color:'#cd7f32' },
  { id:'gain_silver', cat:'ECONOMY', type:'gain',  coin:'silver', per:0.05, label:'SILVER AVARICE',    desc:'+5% Silver Coin gained per level.',   base:{blood:20}, scale:1.5, maxLevel:100, color:'#aaaacc' },
  { id:'gain_gold',   cat:'ECONOMY', type:'gain',  coin:'gold',   per:0.05, label:'GOLD AVARICE',      desc:'+5% Gold Coin gained per level.',     base:{blood:30}, scale:1.5, maxLevel:100, color:'#f0b429' },
  { id:'gain_plat',   cat:'ECONOMY', type:'gain',  coin:'plat',   per:0.05, label:'PLATINUM AVARICE',  desc:'+5% Platinum Coin gained per level.', base:{blood:40}, scale:1.5, maxLevel:100, color:'#a8d8ea' },

  // ── ECONOMY: upgrade cost reductions ───────────────────
  { id:'cost_old',    cat:'ECONOMY', type:'cost', coin:'old',    per:0.01, floor:0.01, label:'OLD THRIFT',      desc:'-1% Old Coin upgrade cost per level (min 1%).',      base:{blood:10}, scale:1.6, maxLevel:99, color:'#aaaaaa' },
  { id:'cost_bronze', cat:'ECONOMY', type:'cost', coin:'bronze', per:0.01, floor:0.01, label:'BRONZE THRIFT',   desc:'-1% Bronze Coin upgrade cost per level (min 1%).',   base:{blood:12}, scale:1.6, maxLevel:99, color:'#cd7f32' },
  { id:'cost_silver', cat:'ECONOMY', type:'cost', coin:'silver', per:0.01, floor:0.01, label:'SILVER THRIFT',   desc:'-1% Silver Coin upgrade cost per level (min 1%).',   base:{blood:15}, scale:1.6, maxLevel:99, color:'#aaaacc' },
  { id:'cost_gold',   cat:'ECONOMY', type:'cost', coin:'gold',   per:0.01, floor:0.01, label:'GOLD THRIFT',     desc:'-1% Gold Coin upgrade cost per level (min 1%).',     base:{blood:18}, scale:1.6, maxLevel:99, color:'#f0b429' },
  { id:'cost_plat',   cat:'ECONOMY', type:'cost', coin:'plat',   per:0.01, floor:0.01, label:'PLATINUM THRIFT', desc:'-1% Platinum Coin upgrade cost per level (min 1%).', base:{blood:20}, scale:1.6, maxLevel:99, color:'#a8d8ea' },

  // ── COMBAT ─────────────────────────────────────────────
  { id:'stat_atk', cat:'COMBAT', type:'statpct', per:0.02, label:'WRATH',     desc:'+2% ATK per level.',     base:{blood:15}, scale:1.5, maxLevel:100, color:'#e74c3c' },
  { id:'stat_hp',  cat:'COMBAT', type:'statpct', per:0.02, label:'VITALITY',  desc:'+2% Max HP per level.',  base:{blood:15}, scale:1.5, maxLevel:100, color:'#27ae60' },

  // ── UTILITY ────────────────────────────────────────────
  { id:'time_death', cat:'UTILITY', type:'timeflat', per:0.1, base10:10, floorSec:1, noRamp:true, label:'SWIFT REVIVAL', desc:'-0.1s defeat recovery time per level (min 1s).', base:{blood:10000}, scale:1.8, maxLevel:90, color:'#9b59b6' },
  { id:'time_flee',  cat:'UTILITY', type:'timeflat', per:0.04, base10:5, floorSec:1, noRamp:true, label:'LIGHT FEET',    desc:'-0.04s flee recovery time per level (min 1s).',   base:{blood:10000}, scale:1.8, maxLevel:100, color:'#9b59b6' },
  { id:'decay',      cat:'UTILITY', type:'decay',   per:0.005, floor:0.05, noRamp:true, label:'ENDURING SPOILS', desc:'Softens reward decay by 0.005 per level.',    base:{blood:100000}, scale:3, maxLevel:50, color:'#2980b9' },
  { id:'victory',    cat:'UTILITY', type:'viccap',  per:1,                label:'CONQUEST',        desc:'+1 max win allowed per enemy, per level.',     base:{blood:100},scale:3.0, maxLevel:3, costs:[{blood:100},{blood:100000000},{blood:100000000000}], color:'#f0b429' },

  // ── AUTOMATION: passive coin generation ────────────────
  { id:'auto_old',        cat:'AUTOMATION', type:'auto',     coin:'old',    per:0.0001, label:'OLD WELLSPRING',     desc:'Generate 0.01% of Old earned this run per sec, per level.',      base:{blood:10000},     scale:10, maxLevel:10, color:'#aaaaaa' },
  { id:'automult_old',    cat:'AUTOMATION', type:'automult', coin:'old',    per:0.5,   label:'OLD SURGE',          desc:'×1.5 Old Coin auto-gen per level.',        base:{blood:50000},     scale:10, maxLevel:10, color:'#aaaaaa' },
  { id:'auto_bronze',     cat:'AUTOMATION', type:'auto',     coin:'bronze', per:0.0001, label:'BRONZE WELLSPRING',  desc:'Generate 0.01% of Bronze earned this run per sec, per level.', base:{blood:100000},    scale:10, maxLevel:10, color:'#cd7f32' },
  { id:'automult_bronze', cat:'AUTOMATION', type:'automult', coin:'bronze', per:0.5,   label:'BRONZE SURGE',       desc:'×1.5 Bronze Coin auto-gen per level.',     base:{blood:500000},    scale:10, maxLevel:10, color:'#cd7f32' },
  { id:'auto_silver',     cat:'AUTOMATION', type:'auto',     coin:'silver', per:0.0001, label:'SILVER WELLSPRING',  desc:'Generate 0.01% of Silver earned this run per sec, per level.', base:{blood:1000000},   scale:10, maxLevel:10, color:'#aaaacc' },
  { id:'automult_silver', cat:'AUTOMATION', type:'automult', coin:'silver', per:0.5,   label:'SILVER SURGE',       desc:'×1.5 Silver Coin auto-gen per level.',     base:{blood:5000000},   scale:10, maxLevel:10, color:'#aaaacc' },
  { id:'auto_gold',       cat:'AUTOMATION', type:'auto',     coin:'gold',   per:0.0001, label:'GOLD WELLSPRING',    desc:'Generate 0.01% of Gold earned this run per sec, per level.',    base:{blood:10000000},  scale:10, maxLevel:10, color:'#f0b429' },
  { id:'automult_gold',   cat:'AUTOMATION', type:'automult', coin:'gold',   per:0.5,   label:'GOLD SURGE',         desc:'×1.5 Gold Coin auto-gen per level.',       base:{blood:50000000},  scale:10, maxLevel:10, color:'#f0b429' },
  { id:'auto_plat',       cat:'AUTOMATION', type:'auto',     coin:'plat',   per:0.0001, label:'PLATINUM WELLSPRING',desc:'Generate 0.01% of Platinum earned this run per sec, per level.',base:{blood:100000000},scale:10, maxLevel:10, color:'#a8d8ea' },
  { id:'automult_plat',   cat:'AUTOMATION', type:'automult', coin:'plat',   per:0.5,   label:'PLATINUM SURGE',     desc:'×1.5 Platinum Coin auto-gen per level.',   base:{blood:500000000}, scale:10, maxLevel:10, color:'#a8d8ea' },
];

// ── LOOKUP HELPERS ────────────────────────────────────
function masteryDef(id){ return MASTERY_UPGRADES.find(u => u.id === id); }
function mLvl(id){ return (S.masteryUpgrades && S.masteryUpgrades[id]) || 0; }

// ── CURRENCY HELPERS (handle Blood Coin vs normal resources) ──
// Spendable Blood Coin lives in S.blood. S.bloodPending accumulates passively
// and is only converted into S.blood when the player reincarnates.
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
// SWIFT REVIVAL now reduces defeat recovery by a flat 0.1s/level, floored at 1s.
// battle.js uses `10 * masteryDeathTimeMult()`, so we return (reducedSeconds / 10).
function masteryDeathTimeMult(){
  const d = masteryDef('time_death');
  const base = d.base10 || 10;
  const secs = Math.max(d.floorSec || 1, base - mLvl('time_death') * d.per);
  return secs / base;
}
// LIGHT FEET now reduces flee recovery by a flat 0.04s/level, floored at 1s.
// battle.js uses `5 * masteryFleeTimeMult()`, so we return (reducedSeconds / 5).
function masteryFleeTimeMult(){
  const d = masteryDef('time_flee');
  const base = d.base10 || 5;
  const secs = Math.max(d.floorSec || 1, base - mLvl('time_flee') * d.per);
  return secs / base;
}
// Reward decay coefficient (base 0.5, lower = gentler)
function masteryDecayCoef(){ const d = masteryDef('decay'); return Math.max(d.floor, 0.5 - mLvl('decay') * d.per); }
// CONQUEST now raises the per-enemy win cap instead of counting wins faster.
// Wins always count +1; this returns extra cap (added to creature.vicReq via effVicReq).
function masteryBonusVictories(){ return 0; }
function masteryVicReqBonus(){ const d = masteryDef('victory'); return mLvl('victory') * d.per; }

// Passive generation rate (coins/sec) for a coin.
// WELLSPRING now generates (per × level) as a FRACTION of how much of that coin
// has been earned this run (session count). old uses lifetimeEarned, others use sessionEarned.
// SURGE multiplier still applies on top.
function masteryAutoSessionCount(coin){
  if(coin === 'old') return (S.lifetimeEarned && S.lifetimeEarned.old) || 0;
  return (S.sessionEarned && S.sessionEarned[coin]) || 0;
}
function masteryAutoRate(coin){
  const baseDef = MASTERY_UPGRADES.find(u => u.type === 'auto'     && u.coin === coin);
  const multDef = MASTERY_UPGRADES.find(u => u.type === 'automult' && u.coin === coin);
  const fraction = baseDef ? mLvl(baseDef.id) * baseDef.per : 0; // 0.0001 × level
  const baseRate = fraction * masteryAutoSessionCount(coin);
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
    case 'timeflat':return `${Math.max(up.floorSec||1, (up.base10||10) - level*up.per).toFixed(1)}s revive`;
    case 'decay':   return `coef ${Math.max(up.floor, 0.5 - level*up.per).toFixed(2)}`;
    case 'victory': return `+${level*up.per}/win`;
    case 'viccap':  return `+${level*up.per} max wins/enemy`;
    case 'auto':    return `${(level*up.per*100).toFixed(2)}% of run ${COIN_LABELS[up.coin]}/s`;
    case 'automult':return `×${(1 + level*up.per).toFixed(2)}`;
    default:        return '';
  }
}

// ── MASTERY SECTION UI (appended by renderMastery) ────
const MASTERY_CATS = ['COMBAT','ECONOMY','AUTOMATION','UTILITY'];

// NOTE: The legacy radial / "manuscript" mastery tree UI (~430 lines) that
// used to live below this point was unused dead code — the live mastery UI is
// renderMastery() in render-mastery.js. It was removed during the cleanup.
// MASTERY_CATS above is the only symbol from that section still referenced.