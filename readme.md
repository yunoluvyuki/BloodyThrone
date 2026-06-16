# Draft Throne — Game Design Document (Living Doc)

> Browser idle/RPG game. No server, no dependencies. Pure HTML/CSS/JS.
> Save: `localStorage` (key: `draft_throne_save`)
> Run locally: `python3 -m http.server 5000` then open the served page (see `_replit`).

> **This file is the project memory.** Update it after every change so future
> sessions don't need to re-read the whole codebase. Keep it accurate over complete —
> if something is unsure/TODO, mark it as such rather than guessing.

---

## File Map

| File | Contents |
|------|----------|
| `index.html` | All markup: topbar, nav tabs (Battle/Inventory/Shop/Prestige/Settings), battle area, prestige sub-tabs, bottom-bar panels |
| `style.css` | All styles |
| `data.js` | `SVGs`, `RESOURCE_LABELS`, `CREATURES` (195 entries), `SHOP_ITEMS` (15 stat upgrades) |
| `state.js` | `DEFAULT_STATE`, `S` (game state), `B` (battle state), `STAT_DEFS` (15 stats), RARITY constants, `RARITY_UPGRADES` |
| `utils.js` | `fmt`, `fmtStat`, `fmtTime`, `toast`, `getCreature`, `getVictories`, `isMaxed`, `maxHP`, `formatStat` |
| `battle.js` | Battle queue/unlocks, rarity rolls, `startBattle`, `stopBattle`, `battleTick`, `onWin`, `onLose`, `firePlayerTurn`, `fireEnemyTurn`, `fireEnemyCounterAttack`, `regenTick`, `updateBattleUI`, `addLog` |
| `render.js` | `renderStats`, `renderFundamentals`, `renderShop`, `renderBattle`, `renderMastery`, `renderCodex`, `renderMCoinSynth`, `updateResources`, `updateBloodUI`, `renderAll` |
| `shop.js` | `buyShopItem`, `buyMasteryUpgrade` (handles BOTH `RARITY_UPGRADES` and `MASTERY_UPGRADES`) |
| `equipment.js` | **Equipment system** — slots/tiers/rolls, drops, equip/unequip/salvage, `recalcEquipStats`, `renderInventory` |
| `mastery.js` | **Mastery upgrades** — `MASTERY_UPGRADES` + effect getters, passive auto-gen (`masteryAutoTick`), `masterySectionHTML` |
| `milestone.js` | `milestoneTick`, `getMilestoneCount`, `getNextMilestone`, `checkBloodMilestone` — Blood Coin generation |
| `save.js` | `saveGame`, `loadGame` (includes `quint*`→`blood*` migration + equipment load) |
| `init.js` | Game loop, tab switching, settings, toggles, reincarnate, hard reset, font-size override (`FS_RULES`) |
| `_replit` / `_gitattributes` | Replit run config (static http.server :5000) / git text normalization |

**Script load order** (`index.html`): data → state → utils → render → battle → shop → save → milestone → mastery → equipment → init. (All functions are hoisted, so cross-file calls are fine.)

---

## Tabs

- **BATTLE** — `tab-battle`, `#battle-grid`, `renderBattle()`. 4-column creature grid + battle area (player/enemy boxes, HP + turn-timer bars, FLEE button). Cards show all 15 enemy stats.
- **INVENTORY** — `tab-inventory`, `#inventory-grid`, `renderInventory()`. **Equipment** (equipped slots panel + bag). *(NOTE: Codex used to live here — it has moved to the Prestige tab.)*
- **SHOP** — `tab-shop`, `#shop-grid`, `renderShop()`, `buyShopItem()`. 15 flat/percent stat upgrades.
- **PRESTIGE** — `tab-archive`. Three sub-tabs:
  - **CODEX** (`arch-codex`, `#codex-grid`, `renderCodex()`)
  - **TREASURY** (`arch-treasury`) — M.Coin synthesizer + Blood Coin/Reincarnate panel
  - **MASTERY** (`arch-masterpiece`, `#mastery-content`, `renderMastery()`) — renders `RARITY_UPGRADES` first, then `masterySectionHTML()` appends the `MASTERY_UPGRADES`
- **SETTINGS** — `tab-settings`. Light mode, fullscreen, zoom, font-size slider, combat-log toggle, notation/notification UI (mostly cosmetic), records, save, hard reset, credits.

Bottom bar (always visible): **current stat** (`#stat-grid`, spec filters), **fundamentals** (`#fund-values`, fund filters — only `BLOOD COIN` is currently defined), **combat log** (`#battle-log`), **protocol** (Auto-Challenge / Auto-Retry toggles).

---

## Currency

| Internal key | Display name | Source |
|---|---|---|
| `old` | **Old Coin** | battle rewards + mastery auto-gen |
| `bronze` | **Bronze Coin** | mastery auto-gen (AUTOMATION) |
| `silver` | **Silver Coin** | mastery auto-gen |
| `gold` | **Gold Coin** | mastery auto-gen |
| `plat` | **Platinum Coin** | mastery auto-gen |
| `bloodPending` / `bloodLifetime` | **Blood Coin** | prestige currency, from milestone system |

- **Renamed:** the old `quint*` keys are now `blood*`. `loadGame()` migrates `quintPending`→`bloodPending` and `quintLifetime`→`bloodLifetime`.
- **REMOVED:** the old synthesis chain (`synthTick`, `S.synthUnlocked`, shop item `synth_chain`) no longer exists. Coin progression now comes from the **Mastery AUTOMATION** upgrades (`auto_*` + `automult_*`), not synthesis.
- Battle creatures only reward `old` (resource) plus `atk`/`hp` (stat boosts). `bronze/silver/gold/plat` come from mastery auto-gen.

---

## Equipment System (`equipment.js`)

Found from battle wins. Stored in `S.equipment = { equipped:{...}, inventory:[...] }`.

- **Slots** (`EQUIP_SLOTS`): weapon, helmet, armor, gloves, boots, ring.
- **Tiers** (`EQUIP_TIERS` 1–5): mult `1 / 2 / 4 / 8 / 16`, drop chances `0.25 / 0.15 / 0.08 / 0.03 / 0.01`, colored TIER I–V.
- **Stat pools** (`SLOT_STAT_POOL`): each slot has a fixed primary stat (index 0) + a random secondary. Rolled value = `base × tierMult × (0.8–1.2 variance)`.
- **Drops** (`rollEquipDrop(rarityKey)`): called in `onWin()`; creature rarity adds a tier-chance boost (`common 0 … legendary 0.35`). Rolls tiers high→low, first hit wins, then random slot.
- **Salvage** (`SALVAGE_YIELD` = `5 / 25 / 100 / 400 / 2000` Old Coin by tier).
- **Stat application** (`recalcEquipStats`): wipes to `S.baseStats`, re-adds all equipped item stats → writes `S.stats`. `initEquipState()` snapshots `S.baseStats = {...S.stats}` the first time equipment is touched.
- `renderInventory()` builds the equipped panel + bag (with equip/salvage buttons and an upgrade/downgrade hint vs the currently equipped item).

⚠️ **Known interaction bug (see Open Items):** `recalcEquipStats()` rebuilds `S.stats` from the one-time `S.baseStats` snapshot, so stat gains earned *after* that snapshot (shop purchases, codex bonuses, atk/hp battle rewards) get wiped the next time anything is equipped/unequipped.

---

## Mastery Upgrades (`mastery.js`, added 2026-06-16)

Second upgrade system alongside `RARITY_UPGRADES`. Levels stored in `S.masteryUpgrades[id]`. Both are bought via `buyMasteryUpgrade()` in `shop.js`. Costs run through `effCost()` (mastery cost reductions). Categories: **COMBAT, ECONOMY, AUTOMATION, UTILITY**.

| Type | id(s) | Effect |
|---|---|---|
| `gain` | `gain_old/bronze/silver/gold/plat/blood` | +5%/lvl coin gained → `masteryGainMult(coin)` |
| `cost` | `cost_old/bronze/silver/gold/plat` | -3%/lvl upgrade cost (floor 25%) → `masteryCostMult` / `effCost` |
| `statpct` | `stat_atk`, `stat_hp` | +2%/lvl → `masteryAtkMult()`, `masteryHpMult()` |
| `timecut` | `time_death`, `time_flee` | -5%/lvl recovery time (floor 25%) |
| `decay` | `decay` | softens reward decay coef (base 0.3, floor 0.05) → `masteryDecayCoef()` |
| `victory` | `victory` | +1 victory counted per win → `masteryBonusVictories()` |
| `auto` | `auto_old/bronze/silver/gold/plat` | passive coins/sec |
| `automult` | `automult_*` | ×1.5/lvl on matching auto-gen |

- `masteryAutoTick(dt)` runs every frame, generates coins, and **feeds `lifetimeEarned`/`sessionEarned`** so auto-gen also drives milestones.
- `masteryHpMult()` is applied in `maxHP()`; `masteryAtkMult()` is applied to player attack in `firePlayerTurn()`.
- Effects consumed across `battle.js`, `shop.js`, `milestone.js`, `init.js`.

---

## Rarity System

- `RARITY_MULTS = {common:1, uncommon:1.5, rare:3, epic:6, legendary:15}`
- `getRarityChances()` (battle.js): base spawn chances boosted by `RARITY_UPGRADES`, **capped** at uncommon 40 / rare 15 / epic 5 / legendary 2. (Defaults 30/20/10/10 → rare/epic/leg already sit at cap.)
- Each creature's rarity is rolled once and persisted in `S.spawnRarity[id]` (persists across reincarnation).
- Rewards multiplied by rarity mult × reincarnation mult × decay mult × `masteryGainMult`.

---

## Reward Decay

`reward = base / (1 + masteryDecayCoef() * n)` where `n` = prior win count for that creature.
`masteryDecayCoef()` starts at **0.3** and is reduced by the `decay` mastery (floor 0.05).
Applied in `onWin()`; preview shown on cards in `renderBattle()`. Resets on reincarnation (victories wiped).

---

## Codex (Prestige sub-tab)

- `renderCodex()` in `render.js`, `#codex-grid`. Shows discovered creatures (≥1 win) + locked "UNKNOWN" slots.
- **Codex bonus:** the first win on each creature grants **+1% ATK and +1% HP** (applied directly in `onWin()`, counted in `S.codexBonusApplied`). Header shows compounded `(1.01^count − 1)` bonus.

---

## Player Stats (15 total) — `STAT_DEFS` in `state.js`

| Key | Label | fmt | Default | Combat use |
|-----|-------|-----|---------|------------|
| hp | HP | n | 50 | health pool (`maxHP = hp × masteryHpMult`) |
| atk | ATK | n | 3 | attack base (`atk × masteryAtkMult`) |
| mnd | MND | % | 0.7 | min-damage fraction of atk |
| mxd | MXD | % | 1.2 | max-damage fraction of atk |
| spd | SPD | n | 0 | **wired** — action interval = `max(200, 3000 − spd)` ms |
| rgn | RGN | n | 0 | heal/tick (`regenTick`) |
| ddc | DDC | % | 0 | dodge (vs attacker acc) |
| crc | CRC | % | 0 | crit chance |
| crd | CRD | x | 1.0 | crit damage multiplier |
| arm | ARM | n | 0 | flat damage reduction |
| mth | MTH | % | 0 | **wired** — multi-attack chance (loop, max 10 hits) |
| acc | ACC | % | **0** | accuracy (vs target ddc) |
| blk | BLK | % | 0 | **wired** — block chance |
| bld | BLD | n | 0 | flat reduction when blocking |
| ctr | CTR | % | 0 | **wired** — counter chance |

Notes:
- `acc` default is **0** in `DEFAULT_STATE` (earlier doc said 1.0). Creature cards default acc to 1 for display only.
- Enemy defense uses `arm` (renamed from `def`).
- All of `spd / mth / blk / ctr` are now wired (earlier doc said spd "not yet wired").

---

## Damage Formulas (current — `battle.js`)

Damage is rolled between a min and max derived from ATK, not a single value.

### Player attack (`firePlayerTurn`)
```
miss?  acc >= enemy.ddc ? never : random() < (enemy.ddc - acc)
crit?  random() < crc
atkEff = atk * masteryAtkMult()
mnd = atkEff * mnd ;  mxd = atkEff * mxd
loop (multi-attack while random() < mth, max 10):
   rolled = mnd + random()*(mxd - mnd)
   if crit: rolled *= crd
   if random() < enemy.blk: rolled -= enemy.bld
   rolled = max(0, rolled - enemy.arm)
enemy can then COUNTER (random() < enemy.ctr → fireEnemyCounterAttack)
```

### Enemy attack (`fireEnemyTurn`) — mirror of the above
```
miss?  enemy.acc >= ddc ? never : random() < (ddc - enemy.acc)
crit?  random() < enemy.crc
loop (while random() < enemy.mth, max 10):
   rolled = enemy.mnd..enemy.mxd window of enemy.atk
   if crit: rolled *= enemy.crd
   if random() < blk: rolled -= bld
   rolled = max(0, rolled - arm)
player COUNTER (random() < ctr) → counterDmg = atk*mnd..atk*mxd window, minus enemy.arm
```
`regenTick()` heals `rgn` per tick while a battle is active.

---

## Battle System

- `initBattleQueue()` — builds `battleUnlocked` / `battleQueue`, ensures ≥4 unlocked.
- `unlockNextCreature()` — on a creature being fully maxed, reveals a new one (random within a window of 4).
- `startBattle(id)` — blocked during `B.dying`; sets up creature scaled by rarity mult, timers from spd.
- `onWin()` — counts victories (+`masteryBonusVictories`), applies decayed/rarity rewards, codex bonus on first win, rolls an equipment drop, continues if Auto-Challenge else stops.
- `onLose()` — `B.dying=true`, 10s death overlay; recovery scaled by `masteryDeathTimeMult()`.
- `stopBattle(fled)` — flee = 5s recovery scaled by `masteryFleeTimeMult()`.
- `battleTick()` — drives turn timers, death/flee recovery, Auto-Retry.
- Protocols: **Auto-Challenge** (refight same foe until maxed) and **Auto-Retry** (refight after a loss).

---

## Milestone System (`milestone.js`)

Blood Coin generated passively via **M.Coins** earned by crossing thresholds.

**Thresholds:** `1,024 → 1,024,000 → 1,024,000,000 → …` (×1000 each, 5 tiers).

| M.Coin | Tracked by | Resets on reincarnate? |
|---|---|---|
| M.Old | `S.lifetimeEarned.old` | No (lifetime) |
| M.Bronze | `S.sessionEarned.bronze` | Yes |
| M.Silver | `S.sessionEarned.silver` | Yes |
| M.Gold | `S.sessionEarned.gold` | Yes |
| M.Plat | `S.sessionEarned.plat` | Yes |

- All M.Coins sum into `effectiveMOld`; each effective M.Old → +1 Blood Coin/sec (× `masteryGainMult('blood')`).
- `milestoneTick()` runs ~1×/sec (`frameCount % 30`); `checkBloodMilestone()` runs every frame and toasts on new milestones.
- TREASURY sub-tab visualizes this via `renderMCoinSynth()` (`#mcoin-rows`), including the live Blood/sec rate.

State fields: `S.lifetimeEarned = {old}` (persists), `S.sessionEarned = {bronze,silver,gold,plat}` (resets), `S.mCoins = {old,bronze,silver,gold,plat}` (resets).

---

## Prestige — Reincarnate (`init.js`)

- **Cost:** 100 pending Blood Coin (`S.bloodPending`).
- **Resets:** `stats`→default, `baseStats`→default, `equipment` (equipped + inventory), `equipNextId`, `victories`, `resources`, `currentCreature`, `bloodPending`, `battleUnlocked`, `battleQueue`, `sessionEarned`, `mCoins`, `B`.
- **Persists:** `reincarnations`, `bloodLifetime`, `lifetimeEarned.old`, `masteryUpgrades`, `shopOwned`, `spawnRarity`, `codexBonusApplied`, `deaths`.
- **Bonus:** reward mult `1 + reincarnations * 0.05`.

⚠️ **Quirk:** `shopOwned` persists but `stats` reset to default, so previously purchased shop stat bonuses are effectively lost on reincarnate even though the item still shows as owned. (See Open Items.)

---

## Save / Load (`save.js`)

- Single slot, `localStorage` key `draft_throne_save`, autosaved ~1×/sec in `gameLoop`.
- `loadGame()` merges loaded state over `DEFAULT_STATE()`, with explicit handling for resources, settings, protocols, milestone fields, equipment, and the `quint*`→`blood*` migration.

---

## UI / Styling Notes

- Font-size override: `FS_RULES` in `init.js` (all base 14, scaled relative to `FS_DEFAULT=16`).
- Default zoom `120%`, default font size `16px` (`S.settings`).
- Battle grid `repeat(4,1fr)`; stat grid `repeat(2,1fr)`; creature cards show all 15 stats.
- Creature card image: `position:absolute`, `object-fit:cover` over `card-art`. Only some creatures have artwork (`img` field); others fall back to `SVGs[id]` or a placeholder.

---

## NEXT UPDATE — TODO / Open Items

1. **Equipment ⊗ stat-snapshot bug (high):** `recalcEquipStats()` rebuilds `S.stats` from the one-time `S.baseStats` snapshot, wiping shop purchases, codex bonuses, and atk/hp battle rewards earned after the snapshot whenever the player equips/unequips. Either keep `baseStats` in sync on every permanent stat gain, or apply equipment as an additive layer that doesn't overwrite.
2. **Reincarnate vs shopOwned (med):** `shopOwned` persists but stats reset → owned shop upgrades stop contributing. Decide whether to reset `shopOwned` too, or re-apply its bonuses after reset.
3. **Rarity mult display mismatch (cosmetic):** `renderMastery()` prints "×1.5 / ×3 / ×7 / ×15" but `RARITY_MULTS.epic` is **6**, not 7.
4. **Fundamentals filters:** `FUND_DEFS` only defines `BLOOD COIN` (cat `economy`); the CORE/STATS/RITY filter tabs render empty.
5. **Gold/Platinum sources:** only obtainable via mastery auto-gen (no battle drops) — intended?
6. **Milestone rates beyond tier 1:** each crossed threshold still only yields +1 M.Coin; higher tiers could scale.
7. **Creature artwork:** only the first few creatures (`1hollow_wretch`…`3ashwalker`) have `img` art; remaining 190+ fall back to SVG/placeholder.
8. **Notation / notification settings:** the Settings notation selectors and notification table are largely cosmetic and not yet wired to behavior.

---

*Last updated: 2026-06-16 — full code audit; documented equipment + mastery systems, tab reorg (Inventory=Equipment, Codex→Prestige), quint→blood rename, synth-chain removal, rewritten damage formulas, and logged 8 open items.*
