# Draft Throne — Game Design Document (Living Doc)

> Browser idle/RPG game. No server, no dependencies.
> Files: `index.html` (markup) + `style.css` (all CSS) + `script.js` (all game logic)
> Save: `localStorage` (key: `rejected_draft_save`)

> **This file is the project memory.** Update it after every change so future
> sessions don't need to re-read the whole codebase. Keep it accurate over complete —
> if something is unsure/TODO, mark it as such rather than guessing.

---

## File Map

| File | Lines (approx) | Contents |
|------|------|----------|
| `index.html` | ~440 | All markup: topbar, tabs (Battle/Inventory/Shop/Prestige/Settings), bottom bar panels |
| `style.css` | ~370 | All styles |
| `script.js` | ~1700 | All game logic: state, battle loop, rendering, save/load |

---

## Tabs (renamed 2026-06-14)

- **BATTLE** tab (was "Gallery"/"World") — `tab-battle`, `#battle-grid`, `renderBattle()`,
  `battleQueue`/`initBattleQueue`, `battleUnlocked`, `battle-dot`.
- **PRESTIGE** tab — internally still `tab-archive`/`archive-dot` in some places, but
  sub-tab CSS classes renamed: `.archive-tabs`→`.prestige-tabs`, `.arch-tab`→`.prestige-tab`,
  `.arch-pane`→`.prestige-pane`. Dot only shows when `quintPending>=100` OR a mastery
  upgrade is affordable (`hasAffordableMasteryUpgrade()`), cleared on tab view
  (`updateArchiveDot()`, called every 3 frames from `gameLoop`).

---

## Currency (renamed 2026-06-13, internal keys renamed again 2026-06-14)

| Internal key | Display name | Notes |
|---|---|---|
| `old` (was `gra`) | **Old Coin** | base resource, produced by `bronze` |
| `bronze` (was `wax`) | **Bronze Coin** | produced by `silver` |
| `silver` (was `cha`) | **Silver Coin** | produced by `gold` |
| `gold` | **Gold Coin** | produced by `plat` |
| `plat` | **Platinum Coin** | top of chain, rate = `victories['contrast_crusher']` |
| `quint` (S.quintPending / quintLifetime) | **Blood Coin** | prestige currency, drives "Reincarnate" |

> Note: item ids like `wax_seal`/`wax_tablet` are flavor names only — NOT related to
> the renamed `wax`→`bronze` currency key. Left untouched intentionally.

**Production chain:** `plat → gold → silver → bronze → old` (each feeds the one below
it at `×0.002` rate, except `bronze→old` at `×0.005`). See `synthTick()` in script.js (~line 1158).

**Gated behind upgrade (2026-06-14):** The passive production chain (`synthTick`) and
the offline OLD/BRONZE catch-up bonus on load are now both `0` / skipped unless
`S.synthUnlocked===true`. This is set by purchasing the one-time shop item
`SYNTHESIS CHAIN` (`synth_chain`, cost 1000 OLD, `maxOwned:1`).

**⚠️ Open issue / next-update item:** Shop costs and creature battle rewards still only
use `old`/`bronze`/`silver`. `gold`/`plat` currently ONLY accumulate via the production
chain (top-fed by `contrast_crusher` victories) — no direct battle drops yet.

---

## Rarity System (added 2026-06-13/14)

- `RARITY_COLORS`, `RARITY_LABELS`, `RARITY_BG`, `RARITY_MULTS`, `RARITY_UPGRADES`.
- `RARITY_MULTS = {common:1, uncommon:1.5, rare:3, epic:6, legendary:15}` (script.js ~721).
- `getRarityChances()` / `rollRarity()` / `getSpawnRarity(id)` — each creature's rarity
  is rolled ONCE and persisted in `S.spawnRarity[id]`.
- On `startBattle()`, enemy `atk`/`hp` are multiplied by `RARITY_MULTS[B.rarity]`.
- Battle rewards (`onWin()`) are multiplied by the same rarity mult AND
  `(1 + S.reincarnations*0.05)`.
- Gallery/Battle cards (`renderBattle`) display ATK/HP/reward numbers scaled by the
  creature's persisted spawn rarity (`spawnRarityMultDisplay`).
- `RARITY_BG.uncommon` set to `rgba(39,174,96,0.4)` (brighter green card background).
- On victory, a `↳ Rewards: ...` log line lists every resource/stat gained.

**Removed:** the old `tier` system (`TIER_COLORS/LABELS/BG/DESC`, `getTier()`,
`tier:N` field on all ~80 creatures) — "tier is not rarity", fully deleted.

---

## Player Stats (16 total) — `STAT_DEFS` in script.js (~line 624)

| Key | Label | Category | Format | Default | Used in combat? |
|-----|-------|----------|--------|---------|------------------|
| hp  | HP  | defense | number | 50  | yes (HP pool) |
| atk | ATK | offense | number | 3   | yes |
| mnd | MND | defense | %      | 0.7 | yes — **damage floor**, `max(mnd, atk*mxd-def)` |
| mxd | MXD | offense | x      | 1.0 | yes — multiplier on atk |
| spd | SPD | utility | number | 100 | not yet wired into tick (real-time loop uses fixed turn timers) |
| rgn | RGN | defense | number | 0   | yes — heals `rgn*2` HP/turn |
| dog | DOG | chance  | %      | 0   | yes — dodge enemy attack entirely |
| crc | CRC | chance  | %      | 0   | yes — crit chance |
| crd | CRD | offense | x      | 1.0 | yes — crit damage multiplier |
| arm | ARM | defense | number | 0   | yes — reduces enemy dmg via `/(1+arm*0.15)` |
| asp | ASP | offense | number | 1.0 | display only ("Attack Speed") — not in formula. **Renamed from `apn`→`asp` 2026-06-13** (was the root cause of a combat-crash bug, now fixed) |
| frl | FRL | chance  | %      | 0   | **unused**, no combat effect |
| acc | ACC | chance  | %      | 1.0 | yes — miss chance = `random()>acc` |
| blk | BLK | defense | %      | 0   | yes — block chance |
| bld | BLD | defense | number | 0   | yes — flat reduction on blocked hit |
| ctr | CTR | chance  | %      | 0   | yes — counter-attack chance |

- `formatStat()`: `pct` format now shows **1 decimal** (`70.0%`), was 3 decimals.
- Stat panel grid (`.stat-profile-grid`) is now **4 columns** (was 2).

---

## Damage Formulas — `firePlayerTurn()` / `fireEnemyTurn()`

### Player attack
```
miss?  random() > acc        → if true, no damage, no crit roll
crit?  random() < crc
base = max(mnd, atk * mxd - enemy.def)
dmg  = base * (crit ? crd : 1)
enemyHP -= dmg
// regen, independent of hit/miss:
if rgn > 0: playerHP = min(maxHP, playerHP + rgn*2)
```

### Enemy attack
```
dodge?  random() < dog        → if true, 0 damage
rawDmg  = max(1, enemy.atk / (1 + arm*0.15))
block?  random() < blk        → if true, dmg = max(0, rawDmg - bld), else dmg = rawDmg
counter? random() < ctr       → if true, counterDmg = max(0.1, atk*0.5 - enemy.def), applied to enemyHP
playerHP -= dmg
```

**Open issue (unchanged):** Min/Max Damage display rows are cosmetic estimates
(`atk-enemy.def`, `atk*mxd-enemy.def`) and don't reflect the real `mnd` floor.

---

## Achievements — FULLY REMOVED (2026-06-14)

Previously soft-disabled (2026-06-13), now completely deleted: `ACHIEVEMENTS` array,
`checkAchievements()`, `renderAchievements()`, `S.achievements` state field, and all
call sites/UI (arch-tab button, pane, `switchTab`/`loadGame`/init references).
No re-enable path retained.

---

## Tutorial / Community / Wishlist — FULLY REMOVED (2026-06-14)

- Tutorial popup CSS (`#tutorial-*`, `.tut-*`) deleted from style.css (JS already gone
  in prior commit `a234843`); leftover `localStorage.removeItem('rd_tutorial_done')` removed.
- Settings tab "Community & Feedback" and "Wishlist on Steam" sections removed from
  `index.html` (`settings-layout2` row), plus `.community-text`/`.wishlist-text` CSS.

---

## Prestige — "Reincarnate" (renamed from "Redraw World", 2026-06-13)

- Cost: 100 pending Blood Coin (`S.quintPending`)
- Button: `#reincarnate-btn`, requirement text `.reincarnate-req`
- Resets stats/resources/victories/shop, increments `S.reincarnations`
- Reward multiplier: `1 + S.reincarnations*0.05` (applied to battle rewards AND offline
  catch-up rate)
- Milestone: each resource (`old`/`bronze`/`silver`/`gold`/`plat`) tracks toward 1618 →
  +1 pending Blood Coin (`RESOURCE_LABELS` entries all have `milestone:1618`)

---

## Creature Images (added 2026-06-14)

- `CREATURES[]` entries may have an optional `img` field (path relative to `index.html`,
  e.g. `attached_assets/img/1hollow_wretch.jpg`).
- If `c.img` is set, both the gallery card (`.card-art`) and the battle screen
  (`#battle-art`) render `<img>` instead of the `SVGs[c.id]` SVG/fallback icon.
- Currently only `hollow_wretch` has an image (`attached_assets/img/1hollow_wretch.jpg`).
- To add more: drop the file in `G:\draft\attached_assets\img\` and add `img:'attached_assets/img/<file>'`
  to the matching creature object (script.js ~line 350+).

---

## Font Size Override System — `FS_RULES`/`applyFontSize()` (script.js ~1437)

- Global font-size slider (`#fs-minus`/`#fs-plus`/`#fs-reset`) scales a fixed list of
  selectors via an injected `#fs-override` `<style>` tag with `!important` rules.
- **2026-06-14 fix:** base sizes per selector are now read directly from the actual
  CSS stylesheet rules (`document.styleSheets` → `FS_CSS_MAP`), not from
  `getComputedStyle` on (possibly-missing/already-overridden) DOM elements. This means:
  - Manual edits to a selector's `font-size` in `style.css` are picked up correctly on reload.
  - The slider still scales everything proportionally from `FS_DEFAULT=13`.
  - No more compounding/locking from repeated overrides.

---

## UI Polish (2026-06-13/14)

- `.card-name` color: removed inline `style="color:..."` override in `renderBattle()` —
  now controlled purely by CSS (`color:#ff0000` in style.css).
- Removed unused `.res-unknown` "?" topbar block.
- Resource bar text sizes bumped ~20% (`.res-val` 15→18px, `.res-rate` 11→13px, `.res-icon` 10→12px).
- `#battle-intro`/`#battle-grid` (was `#gallery-intro`/`#gallery-grid`) — CSS selectors
  renamed to match `index.html` ids.

---

## Recent Commit History (context)

```
eec9897 add images
5dacc28 misc
e955138 text
8bce49b font size
d09f802 misc
6a85e96 remove achievement
c412811 change currency
562b688 divided script and css (single index.html → index.html+style.css+script.js)
a234843 remove tutorial
3440a89 fix css
d4c3700 change how mxd is displayed
fe5eb65 shop test
24446d2 / 0582040 / 0f705eb fix dmg formula / mxd
```

> **Not yet committed as of 2026-06-14:** currency key rename (`gra`/`wax`/`cha`→
> `old`/`bronze`/`silver`), gallery→battle rename, synth-chain gating, archive→prestige
> CSS rename, achievements/tutorial/community/wishlist removal, creature image support,
> font-size override fix, `.card-name` color fix.

---

## NEXT UPDATE — TODO / Open Items

1. **Gold/Platinum integration**: decide whether these drop from battle rewards
   (would require touching ~80 entries in `CREATURES`) or stay purely passive-chain.
2. **`frl` stat**: defined but has zero gameplay effect — decide purpose or remove.
3. **Min/Max Damage display**: cosmetic mismatch with real `mnd` floor formula.
4. **Shop costs**: still old/bronze/silver only — consider gold/plat tiers for shop items
   if Gold/Platinum become meaningful currencies.
5. **Creature images**: only `hollow_wretch` has artwork; rest still use SVG/fallback icon.

---

*Last updated: 2026-06-14*
