// ═══════════════════════════════════════════════════════
// MASTERY UPGRADES  (added 2026-06-16)
// ═══════════════════════════════════════════════════════
// A second mastery system alongside RARITY_UPGRADES.
// Each upgrade raises a level stored in S.masteryUpgrades[id].
// The EFFECTS are read by helper getters below and consumed
// across the codebase (battle.js, shop.js, milestone.js, init.js, utils.js).
//
// To tune balance later: edit `per`, `floor`, `base`, `scale`, `maxLevel`.
//   per      = effect added (or removed) per level
//   floor    = lowest the multiplier can reach (cost/time reductions only)
//   base     = cost at level 0  (cost grows base * scale^level)
//   scale    = cost growth per level
//   maxLevel = level cap
// ───────────────────────────────────────────────────────

const COIN_LABELS = { old:'OLD', bronze:'BRONZE', silver:'SILVER', gold:'GOLD', plat:'PLATINUM', blood:'BLOOD' };

const MASTERY_UPGRADES = [
  // ── ECONOMY: coin gain boosts ──────────────────────────
  { id:'gain_blood',  cat:'ECONOMY', type:'gain',  coin:'blood',  per:0.05, label:'BLOOD HARVEST',     desc:'+5% Blood Coin gained per level.',    base:{old:50000},            scale:1.6, maxLevel:20, color:'#c0392b' },
  { id:'gain_old',    cat:'ECONOMY', type:'gain',  coin:'old',    per:0.05, label:'OLD AVARICE',       desc:'+5% Old Coin gained per level.',      base:{old:1000},             scale:1.5, maxLevel:20, color:'#aaaaaa' },
  { id:'gain_bronze', cat:'ECONOMY', type:'gain',  coin:'bronze', per:0.05, label:'BRONZE AVARICE',    desc:'+5% Bronze Coin gained per level.',   base:{old:5000,bronze:50},   scale:1.5, maxLevel:20, color:'#cd7f32' },
  { id:'gain_silver', cat:'ECONOMY', type:'gain',  coin:'silver', per:0.05, label:'SILVER AVARICE',    desc:'+5% Silver Coin gained per level.',   base:{bronze:500,silver:5},  scale:1.5, maxLevel:20, color:'#aaaacc' },
  { id:'gain_gold',   cat:'ECONOMY', type:'gain',  coin:'gold',   per:0.05, label:'GOLD AVARICE',      desc:'+5% Gold Coin gained per level.',     base:{silver:200,gold:2},    scale:1.5, maxLevel:20, color:'#f0b429' },
  { id:'gain_plat',   cat:'ECONOMY', type:'gain',  coin:'plat',   per:0.05, label:'PLATINUM AVARICE',  desc:'+5% Platinum Coin gained per level.', base:{gold:100,plat:1},      scale:1.5, maxLevel:20, color:'#a8d8ea' },

  // ── ECONOMY: upgrade cost reductions ───────────────────
  { id:'cost_old',    cat:'ECONOMY', type:'cost', coin:'old',    per:0.03, floor:0.25, label:'OLD THRIFT',      desc:'-3% Old Coin upgrade cost per level (min 25%).',      base:{old:2000},   scale:1.6, maxLevel:20, color:'#aaaaaa' },
  { id:'cost_bronze', cat:'ECONOMY', type:'cost', coin:'bronze', per:0.03, floor:0.25, label:'BRONZE THRIFT',   desc:'-3% Bronze Coin upgrade cost per level (min 25%).',   base:{bronze:100}, scale:1.6, maxLevel:20, color:'#cd7f32' },
  { id:'cost_silver', cat:'ECONOMY', type:'cost', coin:'silver', per:0.03, floor:0.25, label:'SILVER THRIFT',   desc:'-3% Silver Coin upgrade cost per level (min 25%).',   base:{silver:10},  scale:1.6, maxLevel:20, color:'#aaaacc' },
  { id:'cost_gold',   cat:'ECONOMY', type:'cost', coin:'gold',   per:0.03, floor:0.25, label:'GOLD THRIFT',     desc:'-3% Gold Coin upgrade cost per level (min 25%).',     base:{gold:5},     scale:1.6, maxLevel:20, color:'#f0b429' },
  { id:'cost_plat',   cat:'ECONOMY', type:'cost', coin:'plat',   per:0.03, floor:0.25, label:'PLATINUM THRIFT', desc:'-3% Platinum Coin upgrade cost per level (min 25%).', base:{plat:2},     scale:1.6, maxLevel:20, color:'#a8d8ea' },

  // ── COMBAT ─────────────────────────────────────────────
  { id:'stat_atk', cat:'COMBAT', type:'statpct', per:0.02, label:'WRATH',     desc:'+2% ATK per level.',     base:{old:3000}, scale:1.5, maxLevel:25, color:'#e74c3c' },
  { id:'stat_hp',  cat:'COMBAT', type:'statpct', per:0.02, label:'VITALITY',  desc:'+2% Max HP per level.',  base:{old:3000}, scale:1.5, maxLevel:25, color:'#27ae60' },

  // ── UTILITY ────────────────────────────────────────────
  { id:'time_death', cat:'UTILITY', type:'timecut', per:0.05, floor:0.25, label:'SWIFT REVIVAL', desc:'-5% defeat recovery time per level (min 25%).', base:{old:4000}, scale:1.6, maxLevel:15, color:'#9b59b6' },
  { id:'time_flee',  cat:'UTILITY', type:'timecut', per:0.05, floor:0.25, label:'LIGHT FEET',    desc:'-5% flee recovery time per level (min 25%).',   base:{old:2000}, scale:1.6, maxLevel:15, color:'#9b59b6' },
  { id:'decay',      cat:'UTILITY', type:'decay',   per:0.02, floor:0.05, label:'ENDURING SPOILS', desc:'Softens reward decay by 0.02 per level.',     base:{old:8000}, scale:1.8, maxLevel:12, color:'#2980b9' },
  { id:'victory',    cat:'UTILITY', type:'victory', per:1,                label:'CONQUEST',        desc:'+1 victory counted per win.',                  base:{old:20000},scale:3.0, maxLevel:4,  color:'#f0b429' },

  // ── AUTOMATION: passive coin generation ────────────────
  { id:'auto_old',        cat:'AUTOMATION', type:'auto',     coin:'old',    per:1,     label:'OLD WELLSPRING',     desc:'Generate +1 Old Coin/sec per level.',      base:{old:5000},             scale:1.7, maxLevel:25, color:'#aaaaaa' },
  { id:'automult_old',    cat:'AUTOMATION', type:'automult', coin:'old',    per:0.5,   label:'OLD SURGE',          desc:'×1.5 Old Coin auto-gen per level.',        base:{old:20000},            scale:1.8, maxLevel:15, color:'#aaaaaa' },
  { id:'auto_bronze',     cat:'AUTOMATION', type:'auto',     coin:'bronze', per:0.1,   label:'BRONZE WELLSPRING',  desc:'Generate +0.1 Bronze Coin/sec per level.', base:{old:50000,bronze:200}, scale:1.7, maxLevel:25, color:'#cd7f32' },
  { id:'automult_bronze', cat:'AUTOMATION', type:'automult', coin:'bronze', per:0.5,   label:'BRONZE SURGE',       desc:'×1.5 Bronze Coin auto-gen per level.',     base:{bronze:1000},          scale:1.8, maxLevel:15, color:'#cd7f32' },
  { id:'auto_silver',     cat:'AUTOMATION', type:'auto',     coin:'silver', per:0.02,  label:'SILVER WELLSPRING',  desc:'Generate +0.02 Silver Coin/sec per level.',base:{bronze:5000,silver:20},scale:1.7, maxLevel:25, color:'#aaaacc' },
  { id:'automult_silver', cat:'AUTOMATION', type:'automult', coin:'silver', per:0.5,   label:'SILVER SURGE',       desc:'×1.5 Silver Coin auto-gen per level.',     base:{silver:100},           scale:1.8, maxLevel:15, color:'#aaaacc' },
  { id:'auto_gold',       cat:'AUTOMATION', type:'auto',     coin:'gold',   per:0.005, label:'GOLD WELLSPRING',    desc:'Generate +0.005 Gold Coin/sec per level.', base:{silver:2000,gold:10},  scale:1.7, maxLevel:25, color:'#f0b429' },
  { id:'automult_gold',   cat:'AUTOMATION', type:'automult', coin:'gold',   per:0.5,   label:'GOLD SURGE',         desc:'×1.5 Gold Coin auto-gen per level.',       base:{gold:50},              scale:1.8, maxLevel:15, color:'#f0b429' },
  { id:'auto_plat',       cat:'AUTOMATION', type:'auto',     coin:'plat',   per:0.001, label:'PLATINUM WELLSPRING',desc:'Generate +0.001 Platinum Coin/sec per level.',base:{gold:1000,plat:5},  scale:1.7, maxLevel:25, color:'#a8d8ea' },
  { id:'automult_plat',   cat:'AUTOMATION', type:'automult', coin:'plat',   per:0.5,   label:'PLATINUM SURGE',     desc:'×1.5 Platinum Coin auto-gen per level.',   base:{plat:20},              scale:1.8, maxLevel:15, color:'#a8d8ea' },
];

// ── LOOKUP HELPERS ────────────────────────────────────
function masteryDef(id){ return MASTERY_UPGRADES.find(u => u.id === id); }
function mLvl(id){ return (S.masteryUpgrades && S.masteryUpgrades[id]) || 0; }

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
// Reward decay coefficient (base 0.3, lower = gentler)
function masteryDecayCoef(){ const d = masteryDef('decay'); return Math.max(d.floor, 0.3 - mLvl('decay') * d.per); }
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
  const next = level + 1;
  switch(up.type){
    case 'gain':    return `+${(level*up.per*100).toFixed(0)}%`;
    case 'statpct': return `+${(level*up.per*100).toFixed(0)}%`;
    case 'cost':    return `-${((1 - Math.max(up.floor, 1 - level*up.per))*100).toFixed(0)}%`;
    case 'timecut': return `-${((1 - Math.max(up.floor, 1 - level*up.per))*100).toFixed(0)}%`;
    case 'decay':   return `coef ${Math.max(up.floor, 0.3 - level*up.per).toFixed(2)}`;
    case 'victory': return `+${level*up.per}/win`;
    case 'auto':    return `${fmt(level*up.per)} ${COIN_LABELS[up.coin]}/s`;
    case 'automult':return `×${(1 + level*up.per).toFixed(2)}`;
    default:        return '';
  }
}

// ── MASTERY SECTION UI (appended by renderMastery) ────
const MASTERY_CATS = ['COMBAT','ECONOMY','AUTOMATION','UTILITY'];
function masterySectionHTML(){
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
      const canAfford = !isMaxed && Object.entries(cost).every(([r,a]) => (S.resources[r]||0) >= a);
      const costStr = Object.entries(cost).map(([r,a]) => `${r.toUpperCase()} ${fmt(a)}`).join(' + ');
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
