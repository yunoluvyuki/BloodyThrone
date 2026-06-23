// ═══════════════════════════════════════════════════════
// EQUIPMENT SYSTEM
// ═══════════════════════════════════════════════════════

// ── SLOTS ─────────────────────────────────────────────
// Only two equipment types: weapon (gives ATK) and armor (gives HP).
const EQUIP_SLOTS = [
  { key: 'weapon', label: 'WEAPON', icon: '⚔', stat: 'atk' },
  { key: 'armor',  label: 'ARMOR',  icon: '🛡', stat: 'hp'  },
];
const SLOT_PRIMARY = { weapon: 'atk', armor: 'hp' };

// ── TIERS ─────────────────────────────────────────────
// Tier N drops from monsters of CREATURES-rank (21..180):
//   T1: 21-40, T2: 41-60, ... T8: 161-180  (rank 1-20 drops nothing).
// `range` = [min,max] of the primary stat value (atk for weapon, hp for armor).
const EQUIP_TIERS = {
  1: { label: 'T1', range: [1, 3]  },
  2: { label: 'T2', range: [2, 5]  },
  3: { label: 'T3', range: [3, 6]  },
  4: { label: 'T4', range: [4, 7]  },
  5: { label: 'T5', range: [5, 8]  },
  6: { label: 'T6', range: [6, 9]  },
  7: { label: 'T7', range: [7, 10] },
  8: { label: 'T8', range: [8, 12] },
};

// ── RARITY ────────────────────────────────────────────
// Determined by WHERE the rolled stat lands inside the tier's range, as a %:
//   pct = (value - min) / (max - min) * 100
//   0-20 common · 21-40 uncommon · 41-60 rare · 61-80 epic · 81-100 legendary
const EQUIP_RARITY = [
  { key: 'common',    label: 'COMMON',    color: '#9aa0a6', max: 20  },
  { key: 'uncommon',  label: 'UNCOMMON',  color: '#27ae60', max: 40  },
  { key: 'rare',      label: 'RARE',      color: '#2980b9', max: 60  },
  { key: 'epic',      label: 'EPIC',      color: '#9b59b6', max: 80  },
  { key: 'legendary', label: 'LEGENDARY', color: '#f0b429', max: 100 },
];
function rarityFromPct(pct) {
  for (const r of EQUIP_RARITY) { if (pct <= r.max) return r; }
  return EQUIP_RARITY[EQUIP_RARITY.length - 1];
}

// ── SALVAGE YIELDS (Old Coins per tier) ───────────────
const SALVAGE_YIELD = { 1: 5, 2: 25, 3: 100, 4: 500, 5: 2500, 6: 12000, 7: 60000, 8: 300000 };

// ── ITEM ID COUNTER ───────────────────────────────────
function nextItemId() {
  S.equipNextId = (S.equipNextId || 0) + 1;
  return S.equipNextId;
}

// ── RANK → TIER ───────────────────────────────────────
// Rank = 1-based index of the creature in CREATURES.
function creatureRank(id) {
  const i = (typeof CREATURES !== 'undefined') ? CREATURES.findIndex(c => c.id === id) : -1;
  return i < 0 ? -1 : i + 1;
}
function tierForRank(rank) {
  if (rank < 21 || rank > 180) return 0; // outside the dropping band
  return Math.floor((rank - 21) / 20) + 1; // 1..8
}

// ── ROLL AN ITEM ──────────────────────────────────────
function rollEquipItem(slot, tier) {
  const t = EQUIP_TIERS[tier];
  if (!t) return null;
  const [min, max] = t.range;
  const stat = SLOT_PRIMARY[slot] || 'atk';
  const value = min + Math.random() * (max - min);
  const pct = max > min ? ((value - min) / (max - min)) * 100 : 100;
  const r = rarityFromPct(pct);
  const slotDef = EQUIP_SLOTS.find(s => s.key === slot);
  return {
    id: nextItemId(),
    slot,
    tier,
    stats: { [stat]: value },
    rarity: r.key,
    rarityLabel: r.label,
    rarityPct: pct,
    name: `${r.label} ${t.label} ${slotDef ? slotDef.label : slot.toUpperCase()}`,
    color: r.color,
  };
}

// ── DROP ROLL ─────────────────────────────────────────
// Called from onWin(creatureId). Tier is fixed by the creature's rank; the
// CHANCE to drop comes entirely from the SCAVENGER mastery upgrade.
function rollEquipDrop(creatureId) {
  const tier = tierForRank(creatureRank(creatureId));
  if (!tier) return null;
  const chance = (typeof masteryEquipDropChance === 'function') ? masteryEquipDropChance() : 0;
  if (chance <= 0 || Math.random() >= chance) return null;
  const slot = Math.random() < 0.5 ? 'weapon' : 'armor';
  return rollEquipItem(slot, tier);
}

// ── EQUIP ─────────────────────────────────────────────
function equipItem(itemId) {
  if (!S.equipment) initEquipState();
  const idx = S.equipment.inventory.findIndex(i => i.id === itemId);
  if (idx === -1) return;
  const item = S.equipment.inventory[idx];

  const current = S.equipment.equipped[item.slot];
  if (current) S.equipment.inventory.push(current);

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
  toast(`Salvaged ${item.name} → +${fmt(yield_)} OLD`, 2000);
}

// ── RECALC EQUIP STATS ────────────────────────────────
// S.stats is ALWAYS derived: S.stats = baseStats (all permanent upgrades) + equipment bonuses.
// baseStats is the source of truth for shop upgrades, creature stat rewards and codex bonuses.
function recalcEquipStats() {
  if (!S.baseStats) S.baseStats = { ...S.stats };
  const base = S.baseStats;
  const bonuses = {};
  if (S.equipment && S.equipment.equipped) {
    Object.values(S.equipment.equipped).forEach(item => {
      if (!item || !item.stats) return;
      Object.entries(item.stats).forEach(([k, v]) => {
        bonuses[k] = (bonuses[k] || 0) + v;
      });
    });
  }
  Object.keys(base).forEach(k => {
    S.stats[k] = (base[k] || 0) + (bonuses[k] || 0);
  });
}

// ── INIT EQUIP STATE ──────────────────────────────────
function initEquipState() {
  if (!S.equipment) {
    S.equipment = { equipped: EMPTY_EQUIPMENT(), inventory: [] };
  }
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

  const statPills = (item) => Object.entries(item.stats).map(([k, v]) => {
    const def = STAT_DEFS.find(d => d.key === k);
    return `<span class="equip-stat-pill">${def ? def.label : k.toUpperCase()} +${formatStat(k, v)}</span>`;
  }).join('');

  // ── Equipped slots ──
  const slotsHtml = EQUIP_SLOTS.map(slot => {
    const item = equipped[slot.key];
    if (item) {
      return `<div class="equip-slot filled" style="border-color:${item.color}44;background:${item.color}11;">
        <div class="equip-slot-label" style="color:var(--text3);">${slot.icon} ${slot.label}</div>
        <div class="equip-item-name" style="color:${item.color};">${item.name}</div>
        <div class="equip-stat-pills">${statPills(item)}</div>
        <button class="equip-btn equip-btn-unequip" onclick="unequipSlot('${slot.key}')">UNEQUIP</button>
      </div>`;
    }
    return `<div class="equip-slot empty">
      <div class="equip-slot-label">${slot.icon} ${slot.label}</div>
      <div class="equip-empty-label">— EMPTY —</div>
    </div>`;
  }).join('');

  // ── Inventory bag ──
  const bagHtml = inventory.length === 0
    ? `<div class="equip-bag-empty">No items in bag. Win battles (with SCAVENGER mastery) to find equipment!</div>`
    : inventory.map(item => {
        const slotDef = EQUIP_SLOTS.find(s => s.key === item.slot);
        const currentEquipped = equipped[item.slot];
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
          <div class="equip-stat-pills">${statPills(item)}</div>
          <div class="equip-bag-actions">
            <button class="equip-btn equip-btn-equip" onclick="equipItem(${item.id})">EQUIP</button>
            <button class="equip-btn equip-btn-salvage" onclick="salvageItem(${item.id})">SALVAGE (+${fmt(SALVAGE_YIELD[item.tier])} OLD)</button>
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
