// ═══════════════════════════════════════════════════════
// EQUIPMENT SYSTEM
// ═══════════════════════════════════════════════════════

// ── SLOTS ─────────────────────────────────────────────
const EQUIP_SLOTS = [
  { key: 'weapon',    label: 'WEAPON',    icon: '⚔' },
  { key: 'helmet',    label: 'HELMET',    icon: '🪖' },
  { key: 'armor',     label: 'ARMOR',     icon: '🛡' },
  { key: 'gloves',    label: 'GLOVES',    icon: '🧤' },
  { key: 'boots',     label: 'BOOTS',     icon: '👢' },
  { key: 'ring',      label: 'RING',      icon: '💍' },
];

// ── TIERS ─────────────────────────────────────────────
// Tier 1 = weakest drop, Tier 5 = strongest drop
const EQUIP_TIERS = {
  1: { label: 'TIER I',   color: '#888888', mult: 1.0,  dropChance: 0.25 },
  2: { label: 'TIER II',  color: '#27ae60', mult: 2.0,  dropChance: 0.15 },
  3: { label: 'TIER III', color: '#2980b9', mult: 4.0,  dropChance: 0.08 },
  4: { label: 'TIER IV',  color: '#9b59b6', mult: 8.0,  dropChance: 0.03 },
  5: { label: 'TIER V',   color: '#f0b429', mult: 16.0, dropChance: 0.01 },
};

// ── SLOT STAT POOLS ───────────────────────────────────
// Each slot has a fixed primary stat and optional secondary stat
// Values are BASE amounts scaled by tier mult + random variance
const SLOT_STAT_POOL = {
  weapon: [
    { stat: 'atk', base: 2.0 },
    { stat: 'crc', base: 0.03 },
    { stat: 'mxd', base: 0.05 },
  ],
  helmet: [
    { stat: 'hp',  base: 8.0 },
    { stat: 'mnd', base: 0.03 },
    { stat: 'ddc', base: 0.02 },
  ],
  armor: [
    { stat: 'arm', base: 1.5 },
    { stat: 'hp',  base: 5.0 },
  ],
  gloves: [
    { stat: 'atk', base: 1.0 },
    { stat: 'mth', base: 0.03 },
    { stat: 'crd', base: 0.08 },
  ],
  boots: [
    { stat: 'spd', base: 80  },
    { stat: 'ddc', base: 0.02 },
    { stat: 'rgn', base: 0.5  },
  ],
  ring: [
    { stat: 'crc', base: 0.02 },
    { stat: 'ctr', base: 0.02 },
    { stat: 'acc', base: 0.03 },
  ],
};

// ── SALVAGE YIELDS ────────────────────────────────────
// How many Old Coins you get back per tier when salvaging
const SALVAGE_YIELD = { 1: 5, 2: 25, 3: 100, 4: 400, 5: 2000 };

// ── ITEM ID COUNTER ───────────────────────────────────
// Generates unique IDs for each item instance
function nextItemId() {
  S.equipNextId = (S.equipNextId || 0) + 1;
  return S.equipNextId;
}

// ── ROLL AN ITEM ──────────────────────────────────────
// slot: key from EQUIP_SLOTS, tier: 1-5
// Returns an item object
function rollEquipItem(slot, tier) {
  const pool = SLOT_STAT_POOL[slot];
  const tierDef = EQUIP_TIERS[tier];

  // Pick primary stat (always index 0 for the slot)
  const primary = pool[0];
  // Pick random secondary (index 1 or 2)
  const secondary = pool[Math.floor(1 + Math.random() * (pool.length - 1))];

  function rollStat(entry) {
    // Random value between 80%–120% of base * tier mult
    const variance = 0.8 + Math.random() * 0.4;
    return entry.base * tierDef.mult * variance;
  }

  const stats = {};
  stats[primary.stat] = (stats[primary.stat] || 0) + rollStat(primary);
  // Secondary is different from primary
  if (secondary.stat !== primary.stat) {
    stats[secondary.stat] = (stats[secondary.stat] || 0) + rollStat(secondary);
  }

  const slotDef = EQUIP_SLOTS.find(s => s.key === slot);
  return {
    id:    nextItemId(),
    slot,
    tier,
    name:  `${tierDef.label} ${slotDef.label}`,
    stats,
    color: tierDef.color,
  };
}

// ── DROP ROLL ─────────────────────────────────────────
// Called from onWin(). creature rarity boosts tier chances.
function rollEquipDrop(creatureRarityKey) {
  const rarityBoost = { common: 0, uncommon: 0.05, rare: 0.10, epic: 0.20, legendary: 0.35 };
  const boost = rarityBoost[creatureRarityKey] || 0;

  // Roll each tier from highest to lowest — first hit wins
  const tierOrder = [5, 4, 3, 2, 1];
  for (const tier of tierOrder) {
    const chance = EQUIP_TIERS[tier].dropChance + (tier === 1 ? boost : boost * 0.5);
    if (Math.random() < chance) {
      // Roll a random slot
      const slot = EQUIP_SLOTS[Math.floor(Math.random() * EQUIP_SLOTS.length)].key;
      return rollEquipItem(slot, tier);
    }
  }
  return null; // no drop
}

// ── EQUIP ─────────────────────────────────────────────
function equipItem(itemId) {
  if (!S.equipment) initEquipState();
  const idx = S.equipment.inventory.findIndex(i => i.id === itemId);
  if (idx === -1) return;
  const item = S.equipment.inventory[idx];

  // Unequip whatever is currently in that slot → back to inventory
  const current = S.equipment.equipped[item.slot];
  if (current) {
    S.equipment.inventory.push(current);
  }

  // Equip the new item and remove from inventory
  S.equipment.equipped[item.slot] = item;
  S.equipment.inventory.splice(idx, 1);

  recalcEquipStats();
  renderInventory();
  renderStats();
  toast(`Equipped: ${item.name}`, 2000);
}

// ── UNEQUIP ───────────────────────────────────────────
function unequipSlot(slotKey) {
  if (!S.equipment) initEquipState();
  const item = S.equipment.equipped[slotKey];
  if (!item) return;
  S.equipment.inventory.push(item);
  S.equipment.equipped[slotKey] = null;
  recalcEquipStats();
  renderInventory();
  renderStats();
  toast(`Unequipped: ${item.name}`, 2000);
}

// ── SALVAGE ───────────────────────────────────────────
function salvageItem(itemId) {
  if (!S.equipment) initEquipState();
  const idx = S.equipment.inventory.findIndex(i => i.id === itemId);
  if (idx === -1) return;
  const item = S.equipment.inventory[idx];
  const yield_ = SALVAGE_YIELD[item.tier] || 5;
  S.resources.old = (S.resources.old || 0) + yield_;
  S.lifetimeEarned = S.lifetimeEarned || { old: 0 };
  S.lifetimeEarned.old += yield_;
  S.equipment.inventory.splice(idx, 1);
  renderInventory();
  updateResources();
  toast(`Salvaged ${item.name} → +${yield_} OLD`, 2000);
}

// ── RECALC EQUIP STATS ────────────────────────────────
// Wipes previous equipment bonuses and reapplies from scratch
function recalcEquipStats() {
  if (!S.equipment) return;

  // Remove old bonuses
  const base = S.baseStats || DEFAULT_STATE().stats;
  const bonuses = {};
  Object.values(S.equipment.equipped).forEach(item => {
    if (!item) return;
    Object.entries(item.stats).forEach(([k, v]) => {
      bonuses[k] = (bonuses[k] || 0) + v;
    });
  });

  // Apply on top of baseStats
  Object.keys(base).forEach(k => {
    S.stats[k] = (S.baseStats[k] || base[k]) + (bonuses[k] || 0);
  });
}

// ── INIT EQUIP STATE ──────────────────────────────────
function initEquipState() {
  if (!S.equipment) {
    S.equipment = {
      equipped:  EMPTY_EQUIPMENT(),
      inventory: [],
    };
  }
  // baseStats: stats without equipment, used as the source of truth
  if (!S.baseStats) {
    S.baseStats = { ...S.stats };
  }
}

// ── RENDER INVENTORY TAB ──────────────────────────────
function renderInventory() {
  const grid = document.getElementById('inventory-grid');
  if (!grid) return;
  if (!S.equipment) initEquipState();

  const equipped = S.equipment.equipped;
  const inventory = S.equipment.inventory;

  // ── Equipped slots panel ──
  const slotsHtml = EQUIP_SLOTS.map(slot => {
    const item = equipped[slot.key];
    if (item) {
      const statsHtml = Object.entries(item.stats).map(([k, v]) => {
        const def = STAT_DEFS.find(d => d.key === k);
        return `<span class="equip-stat-pill">${def ? def.label : k.toUpperCase()} +${formatStat(k, v)}</span>`;
      }).join('');
      return `<div class="equip-slot filled" style="border-color:${item.color}44;background:${item.color}11;">
        <div class="equip-slot-label" style="color:var(--text3);">${slot.icon} ${slot.label}</div>
        <div class="equip-item-name" style="color:${item.color};">${item.name}</div>
        <div class="equip-stat-pills">${statsHtml}</div>
        <button class="equip-btn equip-btn-unequip" onclick="unequipSlot('${slot.key}')">UNEQUIP</button>
      </div>`;
    } else {
      return `<div class="equip-slot empty">
        <div class="equip-slot-label">${slot.icon} ${slot.label}</div>
        <div class="equip-empty-label">— EMPTY —</div>
      </div>`;
    }
  }).join('');

  // ── Inventory bag ──
  const bagHtml = inventory.length === 0
    ? `<div class="equip-bag-empty">No items in bag. Win battles to find equipment!</div>`
    : inventory.map(item => {
        const statsHtml = Object.entries(item.stats).map(([k, v]) => {
          const def = STAT_DEFS.find(d => d.key === k);
          return `<span class="equip-stat-pill">${def ? def.label : k.toUpperCase()} +${formatStat(k, v)}</span>`;
        }).join('');
        const slotDef = EQUIP_SLOTS.find(s => s.key === item.slot);
        const currentEquipped = equipped[item.slot];
        // Compare primary stat to show upgrade/downgrade hint
        const primaryStat = Object.keys(item.stats)[0];
        const currentVal = currentEquipped ? (currentEquipped.stats[primaryStat] || 0) : 0;
        const newVal = item.stats[primaryStat] || 0;
        const diff = newVal - currentVal;
        const diffStr = currentEquipped
          ? `<span style="color:${diff >= 0 ? 'var(--green)' : '#e74c3c'};">${diff >= 0 ? '▲' : '▼'} vs equipped</span>`
          : `<span style="color:var(--text3);">(slot empty)</span>`;

        return `<div class="equip-bag-item" style="border-color:${item.color}44;">
          <div class="equip-bag-header">
            <span class="equip-item-name" style="color:${item.color};">${slotDef ? slotDef.icon : ''} ${item.name}</span>
            ${diffStr}
          </div>
          <div class="equip-stat-pills">${statsHtml}</div>
          <div class="equip-bag-actions">
            <button class="equip-btn equip-btn-equip" onclick="equipItem(${item.id})">EQUIP</button>
            <button class="equip-btn equip-btn-salvage" onclick="salvageItem(${item.id})">SALVAGE (+${SALVAGE_YIELD[item.tier]} OLD)</button>
          </div>
        </div>`;
      }).join('');

  grid.innerHTML = `
    <div class="equip-layout">
      <div class="equip-slots-panel">
        <div class="equip-panel-title">EQUIPPED</div>
        <div class="equip-slots-grid">${slotsHtml}</div>
      </div>
      <div class="equip-bag-panel">
        <div class="equip-panel-title">BAG <span style="color:var(--text3);font-size:9px;">(${inventory.length} item${inventory.length !== 1 ? 's' : ''})</span></div>
        <div class="equip-bag-list">${bagHtml}</div>
      </div>
    </div>`;
}