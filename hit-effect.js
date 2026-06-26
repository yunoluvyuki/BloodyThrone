/* ═══════════════════════════════════════════════════════
   BLOODY THRONE : IDLE RPG — HIT EFFECT (drop-in for the original game)
   Self-contained: injects its own CSS, exposes window.DTHit.
   No dependencies. Include once, then call DTHit.enemy()/player().

   Why fixed-positioned overlays? updateBattleUI() rewrites the
   innerHTML of #battle-art / #player-art every tick, which would
   wipe any child we append. So flashes + numbers are appended to
   <body> as position:fixed elements anchored to the box's screen
   rect, and the shake is applied to the box ELEMENT itself
   (its own animation survives innerHTML changes).
   ═══════════════════════════════════════════════════════ */
(function () {
  // ── inject stylesheet once ──────────────────────────────
  if (!document.getElementById('dtfx-style')) {
    var css = document.createElement('style');
    css.id = 'dtfx-style';
    css.textContent =
      '@keyframes dtfx-shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-4px)}40%{transform:translateX(4px)}60%{transform:translateX(-3px)}80%{transform:translateX(2px)}}' +
      '@keyframes dtfx-flash{0%{opacity:.5}100%{opacity:0}}' +
      '@keyframes dtfx-float{0%{opacity:0;transform:translate(-50%,6px) scale(.8)}15%{opacity:1}100%{opacity:0;transform:translate(-50%,-38px) scale(1)}}' +
      '.dtfx-overlay{position:fixed;pointer-events:none;z-index:9000;animation:dtfx-flash .4s ease forwards;}' +
      '.dtfx-num{position:fixed;pointer-events:none;z-index:9001;font-family:"Courier New",monospace;font-weight:bold;' +
      'letter-spacing:1px;-webkit-text-stroke:3px #000;paint-order:stroke fill;' +
      'text-shadow:-2px -2px 0 #000,2px -2px 0 #000,-2px 2px 0 #000,2px 2px 0 #000,0 0 8px rgba(0,0,0,.9);' +
      'animation:dtfx-float .9s ease forwards;white-space:nowrap;}';
    document.head.appendChild(css);
  }

  function rectOf(el) {
    return el.getBoundingClientRect();
  }

  function spawn(boxId, dmg, crit) {
    var box = document.getElementById(boxId);
    if (!box) return;
    var r = rectOf(box);
    if (r.width === 0 && r.height === 0) return; // box not visible

    // 1. shake the box element itself (restart even on rapid hits)
    box.style.animation = 'none';
    // force reflow so the animation re-triggers
    void box.offsetWidth;
    box.style.animation = 'dtfx-shake .36s ease';

    // 2. red flash overlay anchored to the box rect
    var flash = document.createElement('div');
    flash.className = 'dtfx-overlay';
    flash.style.left = r.left + 'px';
    flash.style.top = r.top + 'px';
    flash.style.width = r.width + 'px';
    flash.style.height = r.height + 'px';
    flash.style.background = crit ? '#e74c3c' : '#c0392b';
    document.body.appendChild(flash);
    setTimeout(function () { flash.remove(); }, 420);

    // 3. floating damage number
    var num = document.createElement('div');
    num.className = 'dtfx-num';
    num.style.left = (r.left + r.width / 2) + 'px';
    num.style.top = (r.top + r.height * 0.42) + 'px';
    num.style.color = crit ? '#e74c3c' : '#f0f0f0';
    num.style.fontSize = (crit ? 60 : 42) + 'px';
    var n = (typeof dmg === 'number') ? dmg.toFixed(0) : dmg;
    num.textContent = (crit ? '✦' : '') + n;
    document.body.appendChild(num);
    setTimeout(function () { num.remove(); }, 920);
  }

  window.DTHit = {
    // damage dealt TO the enemy → react on the enemy portrait
    enemy: function (dmg, crit) { spawn('battle-art', dmg, !!crit); },
    // damage dealt TO the player → react on the player portrait
    player: function (dmg, crit) { spawn('player-art', dmg, !!crit); },
  };
})();