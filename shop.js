// ═══════════════════════════════════════════════════════
// SHOP & MASTERY UPGRADES
// ═══════════════════════════════════════════════════════
// Cost scaling per purchase (owned = how many already bought):
//   OLD    = base.old × 10^owned   (buy#1=1, #2=10, ...)
//   Extra coin tiers each start at 100 on their threshold buy and ×10 after:
//     BRONZE  buy #6  (owned>=5)
//     SILVER  buy #20 (owned>=19)
//     GOLD    buy #50 (owned>=49)
//     PLAT    buy #70 (owned>=69)
const SHOP_COIN_TIERS = [
  { coin:'bronze', startOwned:5  },
  { coin:'silver', startOwned:19 },
  { coin:'gold',   startOwned:49 },
  { coin:'plat',   startOwned:69 },
];
function shopScaledCost(item){
  const owned = S.shopOwned[item.id] || 0;
  const scaled = {};
  // Old (and any other base resources) scale ×10 per purchase
  Object.entries(item.cost).forEach(([k,v]) => { scaled[k] = v * Math.pow(10, owned); });
  // Extra coin surcharges from their threshold onward
  SHOP_COIN_TIERS.forEach(t => {
    if(owned >= t.startOwned){
      scaled[t.coin] = (scaled[t.coin] || 0) + 100 * Math.pow(10, owned - t.startOwned);
    }
  });
  return effCost(scaled);
}

function buyShopItem(id){
  const item = SHOP_ITEMS.find(x => x.id === id);
  if(!item) return;
  const owned = S.shopOwned[item.id] || 0;
  if(item.maxOwned && owned >= item.maxOwned){ toast('Already owned!'); return; }
  const cost = shopScaledCost(item);
  const canAfford = Object.entries(cost).every(([k,v]) => (S.resources[k] || 0) >= v);
  if(!canAfford){ toast('Not enough resources!'); return; }
  Object.entries(cost).forEach(([k,v]) => { S.resources[k] -= v; });
  Object.entries(item.statBonus).forEach(([k,v]) => {
    const val = item.isPct ? S.stats[k] * v : v; 
    S.stats[k] = (S.stats[k] || 0) + val;
  });
  if(item.unlock) S[item.unlock] = true;
  S.shopOwned[item.id] = (S.shopOwned[item.id] || 0) + 1;
  toast(`Purchased: ${item.name}!`);
  renderShop();
  renderStats();
}

// Mastery cost = cost × scale^level  (no extra ramp).

function buyMasteryUpgrade(id){
  const up=RARITY_UPGRADES.find(u=>u.id===id)||MASTERY_UPGRADES.find(u=>u.id===id);
  if(!up)return;
  if(!S.masteryUpgrades)S.masteryUpgrades={};
  const level=S.masteryUpgrades[id]||0;
  if(level>=up.maxLevel)return;
  let cost;
  if(up.costs && up.costs[level]){
    cost=effCost(up.costs[level]);   // explicit per-level cost (e.g. CONQUEST)
  }else{
    const rawCost={};
    Object.entries(up.cost).forEach(([res,amt])=>{ rawCost[res]=Math.floor(amt*Math.pow(up.scale,level)); });
    cost=effCost(rawCost);
  }
  // Use mastery.js currency helpers (they handle Blood Coin from S.bloodPending)
  if(!canAffordCost(cost)){toast('Not enough resources.',2000);return;}
  spendCost(cost);
  S.masteryUpgrades[id]=level+1;
  renderMastery();
  renderStats();
  toast(`${up.label} → Lv ${S.masteryUpgrades[id]}`,2000);
}