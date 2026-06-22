// ═══════════════════════════════════════════════════════
// PROTOCOLS / TOGGLES
// ═══════════════════════════════════════════════════════
  function setupToggles(){
    const ac = document.getElementById('toggle-ac');
    const ar = document.getElementById('toggle-ar');
    const an = document.getElementById('toggle-an');

  function updateAC(){
    ac.classList.toggle('on', S.protocols.autoChallenge);
    document.getElementById('ac-details').textContent =
      S.protocols.autoChallenge ? 'AUTO FIGHT ON' : 'DISABLED';
  }

  function updateAR(){
    ar.classList.toggle('on', S.protocols.autoRetry);
    document.getElementById('ar-details').textContent =
      S.protocols.autoRetry ? 'AUTO RETRY ON' : 'DISABLED';
  }

  function updateAN(){
    an.classList.toggle('on', S.protocols.autoNext);
    document.getElementById('an-details').textContent =
      S.protocols.autoNext ? 'AUTO NEXT ON' : 'DISABLED';
  }

  // Auto Challenge — auto refight same monster, stop when maxed
    ac.addEventListener('click', () => {
      S.protocols.autoChallenge = !S.protocols.autoChallenge;
      updateAC();
  // Start battle if toggled on and no battle running
    if(S.protocols.autoChallenge && !B.active && S.currentCreature){
      startBattle(S.currentCreature);
    }
  });

  // Auto Retry — refight same monster after losing
    ar.addEventListener('click', () => {
      S.protocols.autoRetry = !S.protocols.autoRetry;
    updateAR();
  });

  // Auto Next — after a monster is maxed, auto-challenge the next available one
    an.addEventListener('click', () => {
      S.protocols.autoNext = !S.protocols.autoNext;
    updateAN();
  // Kick off immediately if idle and there's a fightable creature
    if(S.protocols.autoNext && !B.active && !B.dying){
      const next = CREATURES.find(x => isUnlocked(x.id) && !isMaxed(x));
      if(next) startBattle(next.id);
    }
  });

  updateAC();
  updateAR();
  updateAN();
}

// ═══════════════════════════════════════════════════════
// TAB SWITCHING & NOTIFICATIONS
// ═══════════════════════════════════════════════════════

function switchTab(name){
  document.body.classList.toggle('battle-active', name === 'battle'); // dashboard shows on Battle only
  document.querySelectorAll('.nav-tab').forEach(t=>{
    t.classList.toggle('active', t.dataset.tab === name);
  });
  document.querySelectorAll('.tab-pane').forEach(p=>{
    p.classList.toggle('active', p.id === 'tab-' + name);
  });
  if(name === 'battle') renderBattle();
  if(name === 'inventory') renderInventory();
  if(name === 'shop'){ renderShop(); document.getElementById('shop-dot').style.display = 'none'; }
  if(name === 'archive'){
    updateBloodUI();
    renderCodex();
    document.getElementById('archive-dot').style.display = 'none';
  }
}

function hasAffordableMasteryUpgrade(){
  const ups=S.masteryUpgrades||{};
  return RARITY_UPGRADES.some(up=>{
    const level=ups[up.id]||0;
    if(level>=up.maxLevel)return false;
    return Object.entries(up.cost).every(([res,amt])=>(S.resources[res]||0)>=Math.floor(amt*Math.pow(up.scale,level)));
  });
}
function updateArchiveDot(){
  const dot=document.getElementById('archive-dot');
  if(!dot)return;
  const archActive=document.getElementById('tab-archive').classList.contains('active');
  if(archActive){dot.style.display='none';return;}
  const ready=(S.bloodPending>=100)||hasAffordableMasteryUpgrade();
  dot.style.display=ready?'block':'none';
}
function hasAffordableShopItem(){
  return SHOP_ITEMS.some(item=>{
    const owned=S.shopOwned[item.id]||0;
    if(item.maxOwned && owned>=item.maxOwned)return false;
    const cost=shopScaledCost(item);
    return Object.entries(cost).every(([res,amt])=>(S.resources[res]||0)>=amt);
  });
}
function updateShopDot(){
  const dot=document.getElementById('shop-dot');
  if(!dot)return;
  const shopActive=document.getElementById('tab-shop').classList.contains('active');
  if(shopActive){dot.style.display='none';return;}
  dot.style.display=hasAffordableShopItem()?'block':'none';
}
document.querySelectorAll('.nav-tab').forEach(t=>{
  t.addEventListener('click',()=>switchTab(t.dataset.tab));
});
document.querySelectorAll('.prestige-tab').forEach(t=>{
  t.addEventListener('click',()=>{
    document.querySelectorAll('.prestige-tab').forEach(x=>x.classList.toggle('active',x===t));
    document.querySelectorAll('.prestige-pane').forEach(x=>x.classList.toggle('active',x.id==='arch-'+t.dataset.arch));
    if(t.dataset.arch==='treasury')updateBloodUI();
    if(t.dataset.arch==='codex')renderCodex();
    if(t.dataset.arch==='masterpiece')renderMastery();
  });
});

// ═══════════════════════════════════════════════════════
// SETTINGS LOGIC
// ═══════════════════════════════════════════════════════
function setupSettings(){


  // Interface buttons
  document.getElementById('btn-light-mode').addEventListener('click',()=>{
    S.settings.lightMode=!S.settings.lightMode;
    document.body.style.filter=S.settings.lightMode?'invert(1) hue-rotate(180deg)':'';
    document.getElementById('btn-light-mode').textContent=S.settings.lightMode?'SWITCH TO DARK MODE':'SWITCH TO LIGHT MODE';
  });
  document.getElementById('btn-fullscreen').addEventListener('click',()=>{
    if(!document.fullscreenElement)document.documentElement.requestFullscreen().catch(()=>{});
    else document.exitFullscreen();
    setTimeout(()=>{document.getElementById('btn-fullscreen').textContent=document.fullscreenElement?'↙ EXIT FULLSCREEN':'↗ ENTER FULLSCREEN';},200);
  });

  // Zoom
  let zoom=S.settings.uiZoom||120;
  function applyZoom(z){
    S.settings.uiZoom=z;
    const scale=z/100;
    const wrap=document.getElementById('zoom-wrap');
    wrap.style.width=(100/scale)+'vw';
    wrap.style.height=(100/scale)+'vh';
    wrap.style.transform='scale('+scale+')';
    document.getElementById('zoom-val').textContent=z+'%';
  }
  applyZoom(zoom);
  document.getElementById('zoom-minus').addEventListener('click',()=>{zoom=Math.max(50,zoom-10);applyZoom(zoom);});
  document.getElementById('zoom-plus').addEventListener('click',()=>{zoom=Math.min(200,zoom+10);applyZoom(zoom);});
  document.getElementById('zoom-reset').addEventListener('click',()=>{zoom=100;applyZoom(zoom);});

  // Font Size
  const FS_DEFAULT=16,FS_MIN=8,FS_MAX=24,FS_STEP=1;
  const FS_RULES=[
  ['body',14],['#topbar .title',14],['.nav-tab',14],['.res-val',14],
  ['.res-rate',14],['.res-icon',14],['#topbar .fps',14],
  ['#specs-header .label',14],['.filter-tab',14],['.sort-btn',14],
  ['.sort-label',14],['.stat-name',14],['.stat-val',14],
  ['.card-info .stat-grid .stat-name',14],['.card-info .stat-grid .stat-val',14],
  ['#fund-header .label',14],['.fund-row',14],['#protocols-header .title',14],
  ['.protocol-title',14],['.protocol-sub',14],['.toggle-label',14],
  ['.protocol-val',14],['#battle-intro',14],['.card-name',14],
  ['.new-badge',14],
  ['.rewards-header',14],['.reward-item',14],['.btn-challenge',14],
  ['.btn-maxed',14],['#battle-creature-name',14],['#battle-creature-tag',14],
  ['.hp-label',14],['#battle-log',14],['.battle-btn',14],['#battle-status',14],
  ['.timer-label',14],['.timer-text',14],['#victory-panel h3',14],
  ['.victory-stat',14],['#death-overlay h2',14],['#death-overlay .timer',14],
  ['.prestige-tab',14],
  ['.treasury-panel-title',14],['.blood-pending',14],
  ['.blood-sub',14],['.blood-row',14],['#reincarnate-btn',14],['.reincarnate-req',14],
  ['.settings-row-label',14],['.settings-check-label',14],
  ['.settings-check-sublabel',14],['.zoom-val',14],['.zoom-btn',14],
  ];
  let fs=S.settings.fontSize||FS_DEFAULT;
  const FS_CSS_MAP={};
  for(const sheet of document.styleSheets){
    let rules;
    try{rules=sheet.cssRules;}catch(e){continue;}
    for(const rule of rules){
      if(rule.style&&rule.style.fontSize){
        FS_CSS_MAP[rule.selectorText]=parseFloat(rule.style.fontSize);
      }
    }
  }
  const FS_BASE=FS_RULES.map(([sel,fallback])=>FS_CSS_MAP[sel]??fallback);
  function applyFontSize(size){
    S.settings.fontSize=size;
    const r=size/FS_DEFAULT;
    const css=FS_RULES.map(([sel],i)=>`${sel}{font-size:${(FS_BASE[i]*r).toFixed(1)}px!important;}`).join('');
    document.getElementById('fs-override').textContent=css;
    document.getElementById('fs-val').textContent=size+'px';
  }
  applyFontSize(fs);
  document.getElementById('fs-minus').addEventListener('click',()=>{fs=Math.max(FS_MIN,fs-FS_STEP);applyFontSize(fs);});
  document.getElementById('fs-plus').addEventListener('click',()=>{fs=Math.min(FS_MAX,fs+FS_STEP);applyFontSize(fs);});
  document.getElementById('fs-reset').addEventListener('click',()=>{fs=FS_DEFAULT;applyFontSize(fs);});

  // Checkboxes
  document.getElementById('chk-combat-log').addEventListener('change',function(){S.settings.combatLog=this.checked;});
  document.getElementById('chk-hide-scroll').addEventListener('change',function(){
    document.body.style.overflow=this.checked?'hidden':'';
    document.getElementById('content-area').style.setProperty('--scrollbar-width',this.checked?'0':'5px');
    document.getElementById('content-area').style.scrollbarWidth=this.checked?'none':'auto';
  });
  document.getElementById('chk-highlights').addEventListener('change',function(){
    document.querySelectorAll('.stat-cell,.res-block').forEach(el=>{
      el.style.cursor=this.checked?'help':'';
      if(this.checked){
        el.addEventListener('mouseenter',function(){this.style.borderColor='var(--border2)';});
        el.addEventListener('mouseleave',function(){this.style.borderColor='';});
      }
    });
  });
  document.getElementById('chk-screen-sleep').addEventListener('change',function(){
    if(this.checked&&'wakeLock' in navigator){
      navigator.wakeLock.request('screen').catch(()=>{});
    }
  });

  // Battle nav
  document.querySelectorAll('.nav-style-btn[data-nav]').forEach(b=>{
    b.addEventListener('click',()=>{
      document.querySelectorAll('.nav-style-btn[data-nav]').forEach(x=>x.classList.toggle('active',x===b));
      S.settings.battleNav=b.dataset.nav;
    });
  });

  // Notification style
  document.querySelectorAll('.nav-style-btn[data-notif]').forEach(b=>{
    b.addEventListener('click',()=>{
      document.querySelectorAll('.nav-style-btn[data-notif]').forEach(x=>x.classList.toggle('active',x===b));
    });
  });

  // Records
  document.getElementById('btn-view-stats').addEventListener('click',()=>{
    const el=document.getElementById('stats-profile-display');
    const visible=el.style.display==='block';
    el.style.display=visible?'none':'block';
    if(!visible){
      document.getElementById('stats-detail').innerHTML=
        STAT_DEFS.map(d=>`<div class="stat-profile-item">${d.label}: <span>${formatStat(d.key,S.stats[d.key])}</span></div>`).join('');
    }
    document.getElementById('btn-view-stats').textContent=visible?'VIEW YOUR STATS':'HIDE STATS';
  });
  document.getElementById('btn-switch-slot').addEventListener('click',()=>{
    toast('Save slot switching not available in single-slot build.',3000);
  });
  document.getElementById('btn-save').addEventListener('click',()=>{saveGame();toast('Game saved!');});
  document.getElementById('btn-hard-reset').addEventListener('click',()=>{
    if(confirm('HARD RESET: All progress will be permanently lost. Are you absolutely sure?')){
      localStorage.removeItem('bloody_throne_save');
      S = DEFAULT_STATE();
      B = freshBattleState();
      B.playerHP = maxHP();
      initBattleQueue();
      renderAll();
      toast('Game has been reset.', 3000);
    }
  });
  document.getElementById('btn-credits').addEventListener('click',()=>{
    toast('Bloody Throne : Idle RPG — fan recreation. Art is pain.',5000);
  });

  // Battle controls
  document.getElementById('btn-flee').addEventListener('click',()=>{
  if(B.active){
    addLog(`<span class="log-die">✗ You fled from ${B.creature ? B.creature.name : 'battle'}. (5s recovery)</span>`);
    stopBattle(true);
  } else {
    toast('No active battle to flee from.');
  }
});
  function setGameSpeed(s){
    S.gameSpeed = s;
    document.querySelectorAll('.speed-btn').forEach(b=>{
      b.classList.toggle('active', Number(b.dataset.speed) === s);
    });
  }
  document.querySelectorAll('.speed-btn').forEach(btn=>{
    btn.addEventListener('click',()=>setGameSpeed(Number(btn.dataset.speed)));
  });
  setGameSpeed([4,8,10].includes(S.gameSpeed) ? S.gameSpeed : 4);

  document.getElementById('add-btn').addEventListener('click',()=>{
    switchTab('archive');
    document.querySelectorAll('.prestige-tab').forEach(x=>x.classList.toggle('active',x.dataset.arch==='treasury'));
    document.querySelectorAll('.prestige-pane').forEach(x=>x.classList.toggle('active',x.id==='arch-treasury'));
    updateBloodUI();
  });

  // Reincarnate
  document.getElementById('reincarnate-btn').addEventListener('click',()=>{
    if(!confirm('REINCARNATE: Your progress resets, but you gain your pending Blood Coin. Continue?'))return;
    S.blood=(S.blood||0)+S.bloodPending;
    S.bloodLifetime+=S.bloodPending;
    S.bloodBankedLifetime=(S.bloodBankedLifetime||0)+S.bloodPending;   // running total of banked blood
    S.bloodRef=S.bloodLifetime;   // snapshot lifetime blood; reference for next run's diminishing-gain caps
    S.reincarnations++;
    toast(`Reincarnated! Pending Blood Coin banked.`,5000);
    const base=DEFAULT_STATE();
    S.stats=base.stats;
    S.baseStats={...base.stats};
    S.equipment={equipped:EMPTY_EQUIPMENT(),inventory:[]};
    S.equipNextId=0;
    S.victories={};
    S.shopOwned={};
    S.spawnRarity={};
    S.resources={old:0,bronze:0,silver:0,gold:0,plat:0};
    S.currentCreature=null;
    S.bloodPending=0;
    S.battleUnlocked=[];
    S.battleQueue=[];
    S.sessionEarned={old:0,bronze:0,silver:0,gold:0,plat:0};
    S.mCoins={old:0,bronze:0,silver:0,gold:0,plat:0};
    S.mAccum={old:0,bronze:0,silver:0,gold:0,plat:0};
    B=freshBattleState();
    initBattleQueue();
    renderAll();
  });
}

// ═══════════════════════════════════════════════════════
// SPEC FILTER TABS
// ═══════════════════════════════════════════════════════
document.querySelectorAll('#spec-filters .filter-tab').forEach(t=>{
  t.addEventListener('click',()=>{
    document.querySelectorAll('#spec-filters .filter-tab').forEach(x=>x.classList.toggle('active',x===t));
    currentSpecFilter=t.dataset.spec;
    renderStats();
  });
});
document.querySelectorAll('#fund-filters .filter-tab').forEach(t=>{
  t.addEventListener('click',()=>{
    document.querySelectorAll('#fund-filters .filter-tab').forEach(x=>x.classList.toggle('active',x===t));
    currentFundFilter=t.dataset.fund;
    renderFundamentals();
  });
});
document.querySelectorAll('#shop-filters .filter-tab').forEach(t=>{
  t.addEventListener('click',()=>{
    document.querySelectorAll('#shop-filters .filter-tab').forEach(x=>x.classList.toggle('active',x===t));
    currentShopFilter=t.dataset.shop;
    renderShop();
  });
});

// ═══════════════════════════════════════════════════════
// GAME LOOP
// ═══════════════════════════════════════════════════════
let frameCount=0,fpsTimer=0,lastFrame=performance.now();
function gameLoop(){
  const now = performance.now();
  const rawDt = (now - lastFrame) / 1000;
  lastFrame = now;
  const dt = rawDt * (S.gameSpeed || 1);
  frameCount++;
  fpsTimer += rawDt;
  if(fpsTimer >= 1){
    frameCount = 0;
    fpsTimer = 0;
  }
  battleTick();
  restTick(dt);
  regenTick(dt);
  masteryAutoTick(dt);
  checkBloodMilestone();
  S.activeTime = (S.activeTime || 0) + dt;
  if(frameCount % 3 === 0){
    updateBattleUI();
    updateResources();
    updateArchiveDot();
    updateShopDot();
    document.getElementById('active-time').textContent = fmtTime(S.activeTime);
  }
  if(frameCount % 30 === 0){
    milestoneTick();
    renderStats();
    renderFundamentals();
    // Topbar BLOOD COIN count is always visible — keep it live on every tab.
    const bc=document.getElementById('blood-count');
    if(bc)bc.textContent=fmt(S.blood||0);
    const archActive = document.getElementById('tab-archive').classList.contains('active');
    if(archActive){
      if(document.getElementById('arch-treasury').classList.contains('active')) updateBloodUI();
    }
    if(document.getElementById('tab-shop').classList.contains('active')){
      const affordKey = SHOP_ITEMS.map(item => {
        const owned = S.shopOwned[item.id] || 0;
        const maxed = item.maxOwned && owned >= item.maxOwned;
        return maxed ? 'M' : Object.entries(shopScaledCost(item)).every(([k,v]) => (S.resources[k]||0) >= v) ? '1' : '0';
      }).join('');
      if(affordKey !== gameLoop._lastShopKey){ gameLoop._lastShopKey = affordKey; renderShop(); }
    }
    saveGame();
  }
  requestAnimationFrame(gameLoop);
}

// ═══════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════
loadGame();
initBattleQueue();
setupToggles();
setupSettings();
renderAll();
// Start autochallenge if was enabled
if(S.protocols.autoChallenge&&!B.active){
  const first=CREATURES.find(c=>isUnlocked(c.id)&&!isMaxed(c));
  if(first)startBattle(first.id);
}

// Kick off the game loop
requestAnimationFrame(gameLoop);