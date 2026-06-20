# Bloody Throne : Idle RPG — Game Design Document (Living Doc)

> Browser idle/RPG game. No server, no dependencies. Pure HTML/CSS/JS.
> Save: `localStorage` (key: `bloody_throne_save`)

> **This file is the project memory.** Update it after every change so future
> sessions don't need to re-read the whole codebase. Keep it accurate over complete.

---

## File Map

| File | Contents |
|------|----------|
| `index.html` | All markup: topbar, nav tabs (Battle/Inventory/Shop/Prestige/Settings), battle area, prestige sub-tabs, bottom panels |
| `style.css` | All styles |
| `data.js` | `CREATURES` (~195 entries, `vicReq:2`), `SHOP_ITEMS` (15 stat upgrades), `SVGs`, `RESOURCE_LABELS`. A few creatures have an `img:` path (PNG art); rest use `SVGs[id]`. |
| `constants.js` | Shared literals/factories: `RESOURCE_KEYS`, `EQUIP_SLOT_KEYS`, `EMPTY_EQUIPMENT()`, `freshBattleState()`. Loaded right after data.js. |
| `state.js` | `DEFAULT_STATE`, `S` (game state), `B` (battle state), `STAT_DEFS` (15 stats), RARITY constants, `RARITY_UPGRADES` (now empty `[]` — replaced by RARITY mastery upgrades) |
| `utils.js` | fmt, fmtStat, fmtTime, toast, getCreature, getVictories, maxHP, formatStat, `effVicReq`, `isMaxed` |
| `battle.js` | Battle loop, startBattle, stopBattle (flee), onWin, onLose, `rollAttackDamage` (shared roller, per-hit crit, multi-hit capped at 2), firePlayerTurn/fireEnemyTurn/fireEnemyCounterAttack, regenTick, restTick, battle queue, `ensureFightable`, rarity roll/spawn, reward earning (feeds lifetime+session) |
| `render.js` | Core renders: renderStats (shows **effective** ATK/HP w/ mastery mult), renderFundamentals, renderShop, renderBattle, renderCodex, updateResources (incl. per-coin auto-gen rate lines), updateBloodUI, renderAll |
| `render-mcoin.js` | M.Coin synthesizer UI: `MCOIN_DEFS`, fmtEta, renderMCoinSynth |
| `shop.js` | buyShopItem, shopScaledCost, buyMasteryUpgrade (mastery cost = `cost × scale^level`, no ramp; honors `costs[]` array) |
| `mastery.js` | **Self-contained mastery system**: `MASTERY_UPGRADES` data + effect getters + currency helpers + `renderMastery` (the `.mtree` tree UI). Absorbs the old render-mastery.js. Standalone-guarded fallbacks (`try{X}catch` install only if a global is missing — live game always wins). |
| `mastery.css` | Styles for the `.mtree`/`.mnode` mastery tree UI |
| `milestone.js` | milestoneTick — M.Coin production chain → passive Blood Coin (pending). `mScale`, `mCoinTotal`, `getMilestoneCount`, `bloodGainMult` |
| `hit-effect.js` | `DTHit` — screen shake / flash / floating damage numbers |
| `equipment.js` | Equipment system (slots, tiers, drops, salvage, inventory UI) |
| `save.js` | saveGame, loadGame |
| `init.js` | Game loop, tab switching, settings, reincarnate, speed buttons, shop/archive notification dots |

**Script load order** (index.html): hit-effect → data → constants → state → utils → render → render-mcoin → battle → shop → save → milestone → mastery → equipment → init.
**Note:** `render-mastery.js` is **no longer loaded** — `mastery.js` now contains `renderMastery`.

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

**Reincarnate** (any time, no minimum): banks all pending → `S.blood`, resets pending to 0, also adds to `S.bloodLifetime` / `S.bloodBankedLifetime`, then resets run progress (stats, victories, resources, shop, queue, `sessionEarned`, `mCoins`, `mAccum`). Persists: `S.blood`, `S.bloodLifetime`, `S.bloodBankedLifetime`, `S.reincarnations`, `S.lifetimeEarned.old`, `S.codexUnlocked`, `S.codexBonusApplied`, `S.mOldBest`. **No reincarnation reward bonus** (rewardMult fixed at 1; `S.reincarnations` is just a counter).

`S.bloodRef` snapshots blood banked at reincarnate and drives a **diminishing-gain throttle** (`bloodGainMult`): once this run's pending passes the reference, gain halves at each doubling cap (ref×1→50%, ×2→25%, …). First run (ref 0) = full rate.

Topbar shows spendable `S.blood` next to the "BLOOD COIN" button (opens Prestige/Treasury).

---

## Player Stats (15) — `STAT_DEFS` in `state.js`

hp, atk, mnd (min dmg %), mxd (max dmg %), **spd (turn time in ms)**, rgn (HP/sec), ddc (dodge %), crc (crit %), crd (crit mult ×), arm (flat reduction), mth (multi-hit %), acc (hit %), blk (block %), bld (flat block reduction), ctr (counter %).

Defaults: `hp:10, atk:2, mnd:0.7, mxd:1.2, spd:3000, crd:0.0(?), arm:0, rest:0`.

**SPD = turn time in milliseconds. Lower = faster.** Default 3000 (3s). Floor `Math.max(1, spd)`. SPD shop upgrade subtracts (−10ms/buy). Creature spd rewards subtract over time (scaled by reward multipliers). Enemy with `spd:0` falls back to 3000ms.

---

## Combat

Player attack: miss if `random()>acc`; **crit rolled per-hit** in `rollAttackDamage`; `base = max(mnd, atk*mxd - enemy.arm)`; dmg `× crd` on crit. Effective player ATK/HP in combat = base × `masteryAtkMult()` / `masteryHpMult()` (WRATH / VITALITY). **Multi-hit capped at 2 hits.**

Enemy attack: dodge if `random()<ddc`; `rawDmg = max(1, enemy.atk/(1+arm*0.15))`; block subtracts `bld`; counter chance `ctr`.

Hit effects (`hit-effect.js` / `DTHit`): screen shake, flash, floating damage numbers fire after HP changes.

**Regen (`regenTick`, per-second, scales with game speed):** player heals `S.stats.rgn`/sec, enemy heals `creature.rgn`/sec (capped at its max HP). Only during active battle.

**Recovery:** defeat = 10s (full heal after), flee = 5s (keeps current HP, no heal). Recovery timer scales with game speed. Auto-retry re-challenges the same creature after defeat (uses `B.lastCreatureId`).

**Passive heal (`restTick`):** +10% max HP/sec whenever idle (not in battle / recovery / flee). Scales with game speed. (REST button removed — now automatic.)

**Game speed:** 1x/2x/4x buttons next to FLEE. Multiplies loop `dt` and battle timer decrement via `S.gameSpeed`. FPS counter removed.

---

## Battle Queue / Spawning

`initBattleQueue` unlocks starting creatures; ends by calling **`ensureFightable()`** which guarantees at least one unlocked, non-maxed creature exists (pulls from queue if all unlocked are maxed — prevents an empty battle grid). Also called after each win-unlock. On win, `unlockNextCreature` picks randomly from the next **2** queued creatures.

**Victory cap:** each creature has `vicReq:2` (in data.js). Effective cap = `effVicReq(c)` = `creature.vicReq + masteryVicReqBonus()`. `isMaxed(c)` = victories ≥ effVicReq. CONQUEST mastery raises the cap (+1/level, max 3). Victories reset on reincarnate.

**Rarity spawn chances** (`getRarityChances` in battle.js): all 0% base, raised only by the **RARITY mastery upgrades** (`masteryRarityChance`). **No caps** — reach 70/40/20/10% (uncommon/rare/epic/legendary) at max level. `RARITY_MULTS = {common:1, uncommon:1.5, rare:3, epic:5, legendary:7}` — applied to both monster stat display and reward amounts.

---

## Reward Decay

`reward = base / (1 + decay * n)`, `n` = wins on that creature. Decay base **0.7**, softened by ENDURING SPOILS mastery (−0.005/level, max 50 → 0.45 at max, floor 0.05). `masteryDecay()` in mastery.js — used by both battle.js (actual) and render.js (card display). Also multiplied by spawn `RARITY_MULTS`.

---

## Shop (`SHOP_ITEMS` in data.js, logic in shop.js)

15 stat upgrades, each `maxOwned:100`. Cost scales per purchase via `shopScaledCost`:
- Base resource (`old`) × 10^owned.
- Extra coin surcharges, each starts at 100 on its threshold buy and ×10 after: **bronze #6, silver #20, gold #50, plat #70** (`SHOP_COIN_TIERS`).

`isPct` upgrades add `currentStat × pct` (note: percent of a 0 stat does nothing). SPD upgrade is flat −10ms.

BUY button: green when affordable, grey/disabled otherwise. Shop nav tab shows a notification dot when any item is affordable (`updateShopDot`).

**Battle card UI notes:** the FIGHTING button (current creature) is **disabled** (no accidental cancel — use FLEE). The rewards header reserves space for 2 lines (`min-height`) so long reward text wraps cleanly without overlapping the Victories label. Each topbar coin shows a `+X/s` auto-gen rate line below it (`.res-rate`).

---

## Mastery (`MASTERY_UPGRADES` + `renderMastery` in mastery.js)

Self-contained tree UI (`.mtree`/`.mnode`, styled by `mastery.css`). Category tabs: **COMBAT / ECONOMY / AUTOMATION / UTILITY / RARITY** (`MASTERY_CATS`). All upgrades paid in **Blood Coin** (from `S.blood`). Levels stored in `S.masteryUpgrades[id]`.

Currency helpers (mastery.js): `currencyBalance`, `canAffordCost`, `spendCost` (blood → `S.blood`, others → `S.resources`). `buyMasteryUpgrade` lives in **shop.js** (loads first, so it's the live one); mastery.js has a standalone-guarded fallback.

**Cost per level = `cost × scale^level`** (per-upgrade `cost:` object + `scale`). **No ramp** — the old `MASTERY_RAMP^(level²)` surcharge was removed entirely. The cost field is named **`cost:`** (renamed from `base:`). Upgrades may instead define an explicit **`costs:[...]`** per-level array (e.g. CONQUEST) which both the charge (shop.js) and display (`masteryLevelCost`) honor. (`noRamp:true` flags remain in data but are now inert.)

**Upgrade catalog:**
- ECONOMY: BLOOD HARVEST (+5% blood/lvl, max 1000), AVARICE ×5 coins (+5% gain/lvl), THRIFT ×5 coins (−1% upgrade cost/lvl, max 99)
- COMBAT: WRATH (+2% ATK/lvl), VITALITY (+2% HP/lvl) — applied in combat **and** shown in the stat panel
- UTILITY: SWIFT REVIVAL (−0.1s defeat recovery/lvl, floor 1s), LIGHT FEET (−0.04s flee/lvl), ENDURING SPOILS (decay −0.005/lvl), CONQUEST (+1 win cap/enemy/lvl, max 3, costs `[100, 100M, 100B]`)
- AUTOMATION: WELLSPRING ×5 (auto-gen 0.01%/lvl of that coin earned **this run**), SURGE ×5 (×1.5 auto-gen/lvl)
- RARITY: UNCOMMON/RARE/EPIC/LEGENDARY OMEN (+0.7/0.4/0.2/0.1% spawn chance per lvl, max 100, cost 1K/10K/100K/1M ×10/lvl). Read by `masteryRarityChance` → `getRarityChances`.

Effect getters: `masteryGainMult`, `masteryAtkMult`, `masteryHpMult`, `masteryDecay`, `masteryDeathTimeMult`, `masteryFleeTimeMult`, `masteryVicReqBonus`, `masteryAutoRate`, `masteryRarityChance`.

**WELLSPRING auto-gen** (`masteryAutoTick`, `masteryAutoRate`): rate = (0.0001 × auto-lvl) × **session-earned** of that coin × SURGE mult. Feeds both `S.resources` and `sessionEarned`; old also feeds `lifetimeEarned.old`. Per-coin rate shown under each coin in the topbar (`.res-rate`).

`RARITY_UPGRADES` (state.js) is now an **empty array** — the old coin-paid attunements were replaced by the blood-paid RARITY mastery upgrades above.

---

## Milestone System (`milestone.js`)

A 5-tier production chain that feeds passive Blood Coin into `S.bloodPending`. `milestoneTick` runs ~1/sec from the loop.

**Two stores per tier:**
- `S.mCoins[coin]` — **milestone level**, from crossing earning thresholds (`getMilestoneCount`, thresholds `1,024 → ×1000 each step`). Acts as the base count **and** a doubling scale.
- `S.mAccum[coin]` — **accumulated** amount produced by the tier above. Grows over time, resets on reincarnate.

**Scale:** `mScale(level) = 2^(level-1)` (level 0 → 0; 1→×1, 2→×2, 3→×4, 4→×8…).

**Per tick (top-down Plat→Gold→Silver→Bronze→Old):** each tier's TOTAL (`mCoins + mAccum`) produces `TOTAL × mScale(ownLevel)` into the `mAccum` of the tier below.

**Blood/sec** = `totalOld × mScale(M.Old level) × masteryGainMult('blood') × bloodGainMult()`, where `totalOld = mCoins.old + mAccum.old`. Because TOTAL includes the milestone base, **M.Old keeps producing blood right after reincarnate** (accumulated is 0 but the milestone base isn't).

**Coin sourcing:**
- M.Old level = `max(getMilestoneCount(sessionEarned.old), mOldBest)`. Uses **session** Old (resets each run), but floored by **`S.mOldBest`** = highest level ever reached (persists across reincarnate). So M.Old never drops below your best.
- M.Bronze/Silver/Gold/Plat levels = `getMilestoneCount(sessionEarned[coin])` — session, reset on reincarnate.

`mCoinTotal(coin)` = `mCoins + mAccum` (used by the M.Coin synth UI). `bloodGainMult()` = the diminishing-gain throttle (see Blood Coin section).

**State fields:** `lifetimeEarned:{old}` (persists; only used as a secondary Old feed), `sessionEarned:{old,bronze,silver,gold,plat}` (resets), `mCoins` (resets), `mAccum` (resets), `mOldBest` (persists).

**M.Coin synth UI** (`render-mcoin.js`): TOTAL EARNED = session earned; milestone bar tracks the **milestone level** (not the accumulated total, so it doesn't read "MAX" once accumulated passes thresholds); COUNT = `mCoinTotal`; RATE = same blood formula as the tick.

---

## Equipment (`equipment.js`)

6 slots (weapon/helmet/armor/gloves/boots/ring), 5 tiers. Drops on win (rarity-boosted). Equip/unequip/salvage. Bonuses applied over `S.baseStats` via `recalcEquipStats`. **Note:** boots give `spd` — under the new SPD-as-turn-time system, positive spd makes you slower; revisit if used.

---

## Codex (Inventory tab)

`renderCodex()`. A creature counts as discovered if it's in **`S.codexUnlocked`** (persists across reincarnate) or has wins this run. Cards are **art-only** (creature `img` → `SVGs[id]` → name fallback; name shown via hover `title`); name/win lines removed. Locked slots show "?".

**Codex bonus:** first-ever kill of a creature grants +1% ATK / +1% HP (once per creature, ever — tracked via `codexUnlocked`, not repeatable across reincarnate). `S.codexBonusApplied` counts total bonuses (persists). Old saves seed `codexUnlocked` from any creature with victories > 0.

---

## Known / Open Items

- `crd` default is `0.0` → crits do 0 dmg until CRD upgrades bought. Consider `1.0`.
- RGN/ARM/BLD shop upgrades are `isPct` on stats starting at 0 → currently do nothing.
- Boots equipment `spd` bonus is backwards under new SPD system.
- Shop ×10 + coin-tier costs become astronomically large past ~buy 15 (JS precision limit).
- Old save files: `S.blood` loads as 0 (must reincarnate once to bank pending); `sessionEarned.old` starts at 0 (WELLSPRING/M.Old session rebuilds this run).
- **Milestone chain compounds hard** — doubling `mScale` across 5 tiers can explode to astronomical numbers fast. Gentler knob if needed: `mScale = 1.5^(level-1)`.
- **Rarity chances can exceed 100%** at full investment (70+40+20+10=140%); since `rollRarity` checks legendary→…→common, commons nearly vanish and top tiers get their full slice first. Intended? If not, keep totals < 100%.
- `noRamp:true` flags remain in mastery data but are inert (ramp removed).