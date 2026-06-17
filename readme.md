# Draft Throne — Game Design Document (Living Doc)

> Browser idle/RPG game. No server, no dependencies. Pure HTML/CSS/JS.
> Save: `localStorage` (key: `draft_throne_save`)

> **This file is the project memory.** Update it after every change so future
> sessions don't need to re-read the whole codebase. Keep it accurate over complete.

---

## File Map

| File | Contents |
|------|----------|
| `index.html` | All markup: topbar, nav tabs (Battle/Inventory/Shop/Prestige/Settings), battle area, prestige sub-tabs, bottom panels |
| `style.css` | All styles |
| `data.js` | `CREATURES` (180 entries), `SHOP_ITEMS` (15 stat upgrades), SVGs, `RESOURCE_LABELS` |
| `state.js` | `DEFAULT_STATE`, `S` (game state), `B` (battle state), `STAT_DEFS` (15 stats), RARITY constants, `RARITY_UPGRADES` |
| `utils.js` | fmt, fmtStat, fmtTime, toast, getCreature, getVictories, maxHP, formatStat |
| `battle.js` | Battle loop, startBattle, stopBattle (flee), onWin, onLose, firePlayerTurn, fireEnemyTurn, regenTick, restTick, battle queue, rarity roll/spawn |
| `render.js` | renderStats, renderBattle, renderShop, renderMastery (new tabbed UI), renderCodex, updateResources |
| `shop.js` | buyShopItem, shopScaledCost, buyMasteryUpgrade |
| `mastery.js` | MASTERY_UPGRADES data + effect getters, currency helpers (blood vs resources), decay coef |
| `milestone.js` | milestoneTick — passive Blood Coin (pending) generation |
| `equipment.js` | Equipment system (slots, tiers, drops, salvage, inventory UI) |
| `save.js` | saveGame, loadGame |
| `init.js` | Game loop, tab switching, settings, reincarnate, speed buttons, shop/archive notification dots |

---

## Currency

| Key | Display | Notes |
|---|---|---|
| `old` | Old Coin | base battle reward |
| `bronze` | Bronze Coin | battle reward / synth chain |
| `silver` | Silver Coin | synth chain |
| `gold` | Gold Coin | synth chain |
| `plat` | Platinum Coin | top of synth chain |
| `blood` | Blood Coin | prestige currency — see Prestige below |

---

## Blood Coin (prestige currency)

Two separate balances:
- **`S.bloodPending`** — accumulates passively via the milestone system. **Cannot be spent.**
- **`S.blood`** — spendable balance. Mastery upgrades spend from here.

**Reincarnate** (any time, no minimum): banks all pending → `S.blood`, resets pending to 0, also adds to `S.bloodLifetime`, then resets run progress (stats, victories, resources, shop, queue, sessionEarned, mCoins). Persists: `S.blood`, `S.bloodLifetime`, `S.reincarnations`, `S.lifetimeEarned.old`. Reincarnation bonus: `1 + reincarnations * 0.05` on battle rewards.

Topbar shows spendable `S.blood` next to the "BLOOD COIN" button (opens Prestige/Treasury).

---

## Player Stats (15) — `STAT_DEFS` in `state.js`

hp, atk, mnd (min dmg %), mxd (max dmg %), **spd (turn time in ms)**, rgn (HP/sec), ddc (dodge %), crc (crit %), crd (crit mult ×), arm (flat reduction), mth (multi-hit %), acc (hit %), blk (block %), bld (flat block reduction), ctr (counter %).

Defaults: `hp:10, atk:2, mnd:0.7, mxd:1.2, spd:3000, crd:0.0(?), arm:0, rest:0`.

**SPD = turn time in milliseconds. Lower = faster.** Default 3000 (3s). Floor `Math.max(1, spd)`. SPD shop upgrade subtracts (−10ms/buy). Creature spd rewards subtract over time (scaled by reward multipliers). Enemy with `spd:0` falls back to 3000ms.

---

## Combat

Player attack: miss if `random()>acc`; crit if `random()<crc`; `base = max(mnd, atk*mxd - enemy.arm)`; dmg `× crd` on crit.

Enemy attack: dodge if `random()<ddc`; `rawDmg = max(1, enemy.atk/(1+arm*0.15))`; block subtracts `bld`; counter chance `ctr`.

**Regen (`regenTick`, per-second, scales with game speed):** player heals `S.stats.rgn`/sec, enemy heals `creature.rgn`/sec (capped at its max HP). Only during active battle.

**Recovery:** defeat = 10s (full heal after), flee = 5s (keeps current HP, no heal). Recovery timer scales with game speed. Auto-retry re-challenges the same creature after defeat (uses `B.lastCreatureId`).

**Passive heal (`restTick`):** +10% max HP/sec whenever idle (not in battle / recovery / flee). Scales with game speed. (REST button removed — now automatic.)

**Game speed:** 1x/2x/4x buttons next to FLEE. Multiplies loop `dt` and battle timer decrement via `S.gameSpeed`. FPS counter removed.

---

## Battle Queue / Spawning

`initBattleQueue` unlocks starting creatures. On win, `unlockNextCreature` picks randomly from the next **2** queued creatures (window = `Math.min(2, queue.length)`).

**Rarity spawn chances** (`getRarityChances` in battle.js): all start at 0% base, raised only by RARITY_UPGRADES. Caps: uncommon 50, rare 25, epic 10, legendary 5. Upgrade maxLevels set so caps are reachable (unc/rare/epic 50, legendary 100). `RARITY_MULTS = {common:1, uncommon:1.5, rare:3, epic:6, legendary:15}`.

---

## Reward Decay

`reward = base / (1 + coef * n)`, `n` = wins on that creature. Coef base **0.5** (was 0.3), softened by ENDURING SPOILS mastery (−0.02/level, floor 0.05). `masteryDecayCoef()` in mastery.js — used by both battle.js (actual) and render.js (card display).

---

## Shop (`SHOP_ITEMS` in data.js, logic in shop.js)

15 stat upgrades, each `maxOwned:100`. Cost scales per purchase via `shopScaledCost`:
- Base resource (`old`) × 10^owned.
- Extra coin surcharges, each starts at 100 on its threshold buy and ×10 after: **bronze #6, silver #20, gold #50, plat #70** (`SHOP_COIN_TIERS`).

`isPct` upgrades add `currentStat × pct` (note: percent of a 0 stat does nothing). SPD upgrade is flat −10ms.

BUY button: green when affordable, grey/disabled otherwise, white text w/ black 2px outline. Shop nav tab shows a notification dot when any item is affordable (`updateShopDot`).

---

## Mastery (`MASTERY_UPGRADES` in mastery.js, UI in render.js `renderMastery`)

New tabbed UI: category tabs (COMBAT/ECONOMY/AUTOMATION/UTILITY) → node grid → right "SELECTED NODE" detail panel (current/next effect, cost, UPGRADE button) → bottom "YOUR BONUSES" summary. All upgrades paid in **Blood Coin** (from `S.blood`).

Currency helpers in mastery.js: `currencyBalance`, `canAffordCost`, `spendCost` (blood → `S.blood`, others → `S.resources`). `buyMasteryUpgrade` (shop.js) uses these.

Cost per level: `base × scale^level` (per-upgrade scale). Effect getters: `masteryGainMult`, `masteryAtkMult`, `masteryHpMult`, `masteryAutoRate`, `masteryDecayCoef`, etc.

(Old radial "manuscript" render code still exists in mastery.js but is unused.)

`RARITY_UPGRADES` (spawn-rate attunements, in state.js) cost old/bronze/silver from `S.resources`, also bought via `buyMasteryUpgrade`.

---

## Milestone System (`milestone.js`)

M.Coins earned by crossing earning thresholds (`1,024 → ×1000 each step`) drive passive Blood Coin into `S.bloodPending`. `milestoneTick` runs ~1/sec from the loop.
- `S.lifetimeEarned = {old}` — persists across reincarnations
- `S.sessionEarned = {bronze,silver,gold,plat}` — resets on reincarnate
- `S.mCoins` — current counts, resets on reincarnate

---

## Equipment (`equipment.js`)

6 slots (weapon/helmet/armor/gloves/boots/ring), 5 tiers. Drops on win (rarity-boosted). Equip/unequip/salvage. Bonuses applied over `S.baseStats` via `recalcEquipStats`. **Note:** boots give `spd` — under the new SPD-as-turn-time system, positive spd makes you slower; revisit if used.

---

## Codex (Inventory tab)

Shows unlocked creatures (≥1 victory) + mystery locked slots. `renderCodex()`.

---

## Known / Open Items

- `crd` default is `0.0` → crits do 0 dmg until CRD upgrades bought. Consider `1.0`.
- RGN/ARM/BLD shop upgrades are `isPct` on stats starting at 0 → currently do nothing.
- Boots equipment `spd` bonus is backwards under new SPD system.
- Shop ×10 + coin-tier costs become astronomically large past ~buy 15 (JS precision limit). High tiers are effectively a ceiling, not reachable.
- Old save files: `S.blood` loads as 0 (must reincarnate once to bank pending).