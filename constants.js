// ═══════════════════════════════════════════════════════
// SHARED CONSTANTS & FACTORIES
// ═══════════════════════════════════════════════════════
// Single source of truth for literals that were previously duplicated across
// state.js, init.js, equipment.js and save.js. Loaded right after data.js so
// everything below it (state.js onward) can use these factories at load time.

// Spendable / earnable coin resource keys, in synthesis order.
const RESOURCE_KEYS = ['old', 'bronze', 'silver', 'gold', 'plat'];

// Equipment slot keys (kept in sync with EQUIP_SLOTS in equipment.js).
const EQUIP_SLOT_KEYS = ['weapon', 'helmet', 'armor', 'gloves', 'boots', 'ring'];

// Fresh "nothing equipped" map — used by equipment init, save load, reincarnate.
function EMPTY_EQUIPMENT() {
  const e = {};
  for (const k of EQUIP_SLOT_KEYS) e[k] = null;
  return e;
}

// Fresh battle-state object — used by state.js init, hard reset, reincarnate.
function freshBattleState() {
  return {
    active: false, creature: null, playerHP: 0, enemyHP: 0,
    deathTimer: 0, dying: false, fleeTimer: 0,
    lastTick: 0, turnCount: 0,
    playerTimer: 3000, enemyTimer: 3000,
    rarity: 'common',
  };
}
