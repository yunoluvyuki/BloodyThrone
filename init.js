// ═══════════════════════════════════════════════════════
// PROTOCOLS / TOGGLES
// ═══════════════════════════════════════════════════════
  function setupToggles(){
    const ac = document.getElementById('toggle-ac');
    const ar = document.getElementById('toggle-ar');

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

  updateAC();
  updateAR();
}

// ═══════════════════════════════════════════════════════
// TAB SWITCHING & NOTIFICATIONS
// ═══════════════════════════════════════════════════════

function switchTab(name){
  document.querySelectorAll('.nav-tab').forEach(t=>{
    t.classList.toggle('active', t.dataset.tab === name);
  });
  document.querySelectorAll('.tab-pane').forEach(p=>{
    p.classList.toggle('active', p.id === 'tab-' + name);
  });
  if(name === 'battle') renderBattle();
  if(name === 'shop') renderShop();   
  if(name === 'archive'){
    updateQuintUI();
    renderGlossary();
    document.getElementById('archive-dot').style.display = 'none';
  }
}

function hasAffordableMasteryUpgrade(){
  const ups=S.masteryUpgrades||{};
  return RARITY_UPGRADES.some(up=>{
    const level=ups[up.id]||0;
    if(level>=up.maxLevel)return false;
    return Object.entries(up.base).every(([res,amt])=>(S.resources[res]||0)>=Math.floor(amt*Math.pow(up.scale,level)));
  });
}
function updateArchiveDot(){
  const dot=document.getElementById('archive-dot');
  if(!dot)return;
  const archActive=document.getElementById('tab-archive').classList.contains('active');
  if(archActive){dot.style.display='none';return;}
  const ready=(S.quintPending>=100)||hasAffordableMasteryUpgrade();
  dot.style.display=ready?'block':'none';
}
document.querySelectorAll('.nav-tab').forEach(t=>{
  t.addEventListener('click',()=>switchTab(t.dataset.tab));
});
document.querySelectorAll('.prestige-tab').forEach(t=>{
  t.addEventListener('click',()=>{
    document.querySelectorAll('.prestige-tab').forEach(x=>x.classList.toggle('active',x===t));
    document.querySelectorAll('.prestige-pane').forEach(x=>x.classList.toggle('active',x.id==='arch-'+t.dataset.arch));
    if(t.dataset.arch==='treasury')updateQuintUI();
    if(t.dataset.arch==='glossary')renderGlossary();
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
  document.getElementById('btn-invert-img').addEventListener('click',()=>{
    S.settings.invertImg=!S.settings.invertImg;
    const f=S.settings.invertImg?'invert(1)':'';
    document.querySelectorAll('.card-art svg,.card-art img,#battle-art svg,#portrait-box svg,.gloss-card.unlocked svg').forEach(s=>s.style.filter=f);
    document.getElementById('btn-invert-img').textContent=S.settings.invertImg?'RESTORE IMAGES':'SWITCH TO INVERTED IMAGES';
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
    ['body',13],['#topbar .title',16],['.nav-tab',12],['.res-val',18],
    ['.res-rate',13],['.res-icon',12],['#topbar .fps',12],
    ['#add-btn',16],['#quint-count',13],['.btm-panel-hdr',11],
    ['#specs-header .label',9],['.filter-tab',10],['.sort-btn',11],
    ['.sort-label',11],['.stat-name',16],['.stat-val',17],
    ['.card-info .stat-grid .stat-name',11],['.card-info .stat-grid .stat-val',11],
    ['#fund-header .label',11],['.fund-row',10],['#protocols-header .title',11],
    ['.protocol-title',10],['.protocol-sub',10],['.toggle-label',10],
    ['.protocol-val',8],['#battle-intro',11],['.card-name',16],
    ['.card-stats',16],['.new-badge',12],
    ['.rewards-header',12],['.reward-item',8],['.btn-challenge',9],
    ['.btn-maxed',9],['#battle-creature-name',16],['#battle-creature-tag',10],
    ['.hp-label',9],['#battle-log',9],['.battle-btn',9],['#battle-status',10],
    ['.timer-label',8],['.timer-text',8],['#victory-panel h3',10],
    ['.victory-stat',10],['#death-overlay h2',16],['#death-overlay .timer',24],
    ['.prestige-tab',10],
    ['.treasury-panel-title',8],['.quint-pending',24],
    ['.quint-sub',8],['.quint-row',9],['#reincarnate-btn',9],['.reincarnate-req',8],
    ['.settings-row-label',10],['.settings-check-label',10],
    ['.settings-check-sublabel',8],['.zoom-val',10],['.zoom-btn',11],
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
  document.getElementById('chk-protocols').addEventListener('change',function(){
    document.getElementById('right-sidebar').style.display=this.checked?'flex':'none';
  });
  document.getElementById('chk-combat-log').addEventListener('change',function(){S.settings.combatLog=this.checked;});
  document.getElementById('chk-hide-scroll').addEventListener('change',function(){
    document.body.style.overflow=this.checked?'hidden':'';
    document.getElementById('content-area').style.setProperty('--scrollbar-width',this.checked?'0':'5px');
    document.querySelectorAll('#content-area,#left-sidebar').forEach(el=>{el.style.scrollbarWidth=this.checked?'none':'auto';});
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
      localStorage.removeItem('rejected_draft_save');
      S = DEFAULT_STATE();
      B = {
        active:false, creature:null, playerHP:0, enemyHP:0,
        deathTimer:0, dying:false, fleeTimer:0, lastTick:0,
        playerTimer:3000, enemyTimer:3000, rarity:'common'
      };
      B.playerHP = maxHP();
      initBattleQueue();
      renderAll();
      toast('Game has been reset.', 3000);
    }
  });
  document.getElementById('btn-credits').addEventListener('click',()=>{
    toast('Draft Throne — fan recreation. Original by the Draft Throne team. Art is pain.',5000);
  });

  // Battle controls
  document.getElementById('btn-flee').addEventListener('click',()=>{
    if(B.active){addLog(`<span class="log-die">✗ You fled from ${B.creature?B.creature.name:'battle'}.`);stopBattle();}
    else toast('No active battle to flee from.');
  });

  // Add / Quintessence shortcut
  document.getElementById('add-btn').addEventListener('click',()=>{
    switchTab('archive');
    document.querySelectorAll('.prestige-tab').forEach(x=>x.classList.toggle('active',x.dataset.arch==='treasury'));
    document.querySelectorAll('.prestige-pane').forEach(x=>x.classList.toggle('active',x.id==='arch-treasury'));
    updateQuintUI();
  });

  // Reincarnate
  document.getElementById('reincarnate-btn').addEventListener('click',()=>{
    if(S.quintPending<100){toast('Need 100 pending Blood Coin to reincarnate!');return;}
    if(!confirm('REINCARNATE: Your progress resets, but you keep a permanent bonus. Continue?'))return;
    S.quintLifetime+=S.quintPending;
    S.reincarnations++;
    const bonus=(1+S.reincarnations*0.05).toFixed(2);
    toast(`Reincarnated! Permanent bonus: ${bonus}x — you feel sharper.`,5000);
    const base=DEFAULT_STATE();
    S.stats=base.stats;
    S.victories={};
    S.resources={old:0,bronze:0,silver:0,gold:0,plat:0};
    S.currentCreature=null;
    S.quintPending=0;
    S.sessionRewards={};
    S.battleUnlocked=[];
    S.battleQueue=[];
    B={active:false,creature:null,playerHP:0,enemyHP:0,deathTimer:0,dying:false,fleeTimer:0,lastTick:0};
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

// ═══════════════════════════════════════════════════════
// GAME LOOP
// ═══════════════════════════════════════════════════════
let frameCount=0,fpsTimer=0,lastFrame=performance.now();
function gameLoop(){
  const now = performance.now();
  const dt = (now - lastFrame) / 1000;
  lastFrame = now;
  frameCount++;
  fpsTimer += dt;
  if(fpsTimer >= 1){
    document.getElementById('fps-display').textContent = 'FPS ' + frameCount;
    frameCount = 0;
    fpsTimer = 0;
  }
  battleTick();
  checkQuintMilestone();
  S.activeTime = (S.activeTime || 0) + dt;
  if(frameCount % 3 === 0){
    updateBattleUI();
    updateResources();
    updateArchiveDot();
    document.getElementById('active-time').textContent = fmtTime(S.activeTime);
  }
  if(frameCount % 30 === 0){
    renderStats();
    renderFundamentals();
    const archActive = document.getElementById('tab-archive').classList.contains('active');
    if(archActive){
      if(document.getElementById('arch-treasury').classList.contains('active')) updateQuintUI();
    }
    if(document.getElementById('tab-shop').classList.contains('active')) renderShop(); 
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