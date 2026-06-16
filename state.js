// ═══════════════════════════════════════════════════════
// GAME STATE
// ═══════════════════════════════════════════════════════
const DEFAULT_STATE = ()=>({
  stats:{hp:50,atk:3,mnd:0.7,mxd:1.2,spd:0,rgn:0,ddc:0,crc:0,crd:1.0,arm:0,mth:0,acc:1.0,blk:0,bld:0,ctr:0},
  resources:{old:0,bronze:0,silver:0,gold:0,plat:0},
  victories:{},
  shopOwned:{},
  currentCreature:null,
  bloodPending:0,
  bloodLifetime:0,
  reincarnations:0,
  activeTime:0,
  deaths:0,
  lastSave:Date.now(),
  settings:{lightMode:false,combatLog:true,uiZoom:120,battleNav:'manual',numNotation:'mixed',fontSize:16},
  protocols:{autoChallenge:false,autoRetry:false},
  masteryUpgrades:{},
  battleUnlocked:[],
  battleQueue:[],
  spawnRarity:{},
  // Milestone system
  lifetimeEarned:{old:0},           // persists across reincarnations (only old)
  sessionEarned:{bronze:0,silver:0,gold:0,plat:0}, // resets on reincarnate
  mCoins:{old:0,bronze:0,silver:0,gold:0,plat:0},  // current M.Coin counts, resets on reincarnate
  codexBonusApplied: 0,  // how many codex bonuses have been applied

});
let S = DEFAULT_STATE();

// ═══════════════════════════════════════════════════════
// BATTLE STATE
// ═══════════════════════════════════════════════════════
let B = {
  active:false,creature:null,playerHP:0,enemyHP:0,
  deathTimer:0,dying:false,fleeTimer:0,
  lastTick:0,turnCount:0,
  playerTimer:3000,enemyTimer:3000,
  rarity:'common',
};


const STAT_DEFS=[
  {key:'hp',label:'HP\u00A0',icon:'si-hp',cat:'defense',fmt:'n'},
  {key:'atk',label:'ATK',icon:'si-atk',cat:'offense',fmt:'n'},
  {key:'mnd',label:'MND',icon:'si-mnd',cat:'offense',fmt:'pct'},
  {key:'mxd',label:'MXD',icon:'si-mxd',cat:'offense',fmt:'pct'},
  {key:'spd',label:'SPD',icon:'si-spd',cat:'utility',fmt:'n'},
  {key:'rgn',label:'RGN',icon:'si-rgn',cat:'defense',fmt:'n'},
  {key:'ddc',label:'DDC',icon:'si-ddc',cat:'chance',fmt:'pct'},
  {key:'crc',label:'CRC',icon:'si-crc',cat:'chance',fmt:'pct'},
  {key:'crd',label:'CRD',icon:'si-crd',cat:'offense',fmt:'x'},
  {key:'arm',label:'ARM',icon:'si-arm',cat:'defense',fmt:'n'},
  {key:'mth',label:'MTH',icon:'si-mth',cat:'offense',fmt:'pct'},
  {key:'acc',label:'ACC',icon:'si-acc',cat:'chance',fmt:'pct'},
  {key:'blk',label:'BLK',icon:'si-blk',cat:'defense',fmt:'pct'},
  {key:'bld',label:'BLD',icon:'si-bld',cat:'defense',fmt:'n'},
  {key:'ctr',label:'CTR',icon:'si-ctr',cat:'chance',fmt:'pct'},
  ];
  // hp = healt points
  // atk = attack
  // mnd = minimal damage
  // mxd = maximal damage
  // spd = speed (time between actions)
  // rgn = regeneration (hp per second)
  // ddc = dodge chance
  // crc = critical hit chance
  // crd = critical hit damage multiplier
  // arm = armor damage reduction flat
  // mth = multi attack chance
  // acc = accuracy (chance to hit)
  // blk = block chance
  // bld = block damage reduction flat
  // ctr = counter chance

// ── RARITY SYSTEM ─────────────────────────────────────
const RARITY_COLORS={common:'#888',uncommon:'#27ae60',rare:'#2980b9',epic:'#9b59b6',legendary:'#f0b429'};
const RARITY_LABELS={common:'COMMON',uncommon:'UNCOMMON',rare:'RARE',epic:'EPIC',legendary:'LEGENDARY'};
const RARITY_MULTS={common:1,uncommon:1.5,rare:3,epic:6,legendary:15};
const RARITY_BG={common:'rgba(80,80,80,0.15)',uncommon:'rgba(39,174,96,0.4)',rare:'rgba(41,128,185,0.18)',epic:'rgba(155,89,182,0.2)',legendary:'rgba(240,180,41,0.15)'};
const RARITY_UPGRADES=[
  {id:'unc_rate',rarity:'uncommon',label:'UNCOMMON ATTUNEMENT',desc:'+1% uncommon spawn chance per level.',base:{old:500},scale:1.8,maxLevel:19,perLevel:1},
  {id:'rare_rate',rarity:'rare',label:'RARE ATTUNEMENT',desc:'+0.5% rare spawn chance per level.',base:{old:5000,bronze:50},scale:2,maxLevel:20,perLevel:0.5},
  {id:'epic_rate',rarity:'epic',label:'EPIC ATTUNEMENT',desc:'+0.2% epic spawn chance per level.',base:{old:30000,bronze:500},scale:2,maxLevel:20,perLevel:0.2},
  {id:'leg_rate',rarity:'legendary',label:'LEGENDARY ATTUNEMENT',desc:'+0.05% legendary spawn chance per level.',base:{old:200000,bronze:5000,silver:5},scale:2,maxLevel:20,perLevel:0.05},
];
