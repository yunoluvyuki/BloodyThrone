// ═══════════════════════════════════════════════════════
// SHOP & MASTERY UPGRADES
// ═══════════════════════════════════════════════════════
function buyShopItem(id){
  const item = SHOP_ITEMS.find(x => x.id === id);
  if(!item) return;
  const owned = S.shopOwned[item.id] || 0;
  if(item.maxOwned && owned >= item.maxOwned){ toast('Already owned!'); return; }
  const cost = effCost(item.cost);
  if(!canAffordCost(cost)){ toast('Not enough resources!'); return; }
  spendCost(cost);
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

function buyMasteryUpgrade(id){
  const up=RARITY_UPGRADES.find(u=>u.id===id)||MASTERY_UPGRADES.find(u=>u.id===id);
  if(!up)return;
  if(!S.masteryUpgrades)S.masteryUpgrades={};
  const level=S.masteryUpgrades[id]||0;
  if(level>=up.maxLevel)return;
  const rawCost={};
  Object.entries(up.base).forEach(([res,amt])=>{ rawCost[res]=Math.floor(amt*Math.pow(up.scale,level)); });
  const cost=effCost(rawCost);
  if(!canAffordCost(cost)){toast('Not enough Blood Coin.',2000);return;}
  spendCost(cost);
  S.masteryUpgrades[id]=level+1;
  renderMastery();
  renderStats();
  toast(`${up.label} → Lv ${S.masteryUpgrades[id]}`,2000);
}