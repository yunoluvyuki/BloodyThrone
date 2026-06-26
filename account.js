/* ───────────────────────────────────────────────────────────────────────────
   BLOODY THRONE : IDLE RPG — show the logged-in player's avatar + name in the
   YOU box. Reads the web session via /api/me.php (same origin, httpOnly cookie).
   No-op when not logged in (e.g. opened directly, or the EXE's own auth) — the
   default ★ art and "YOU" name stay. One new file; touches no game logic.
   ─────────────────────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var STAR = '<div style="font-size:22px;opacity:0.4;">★</div>';
  var avatarHTML = '';   // '' until a logged-in avatar is known → falls back to ★

  // battle.js calls this every render to fill #player-art (so the avatar
  // survives battle re-renders instead of being reset to the star).
  window.playerArtHTML = function () { return avatarHTML || STAR; };

  function applyArt() {
    var art = document.getElementById('player-art');
    if (art) art.innerHTML = window.playerArtHTML();
  }

  fetch('/api/me.php', { credentials: 'same-origin', headers: { Accept: 'application/json' } })
    .then(function (r) { return r.json(); })
    .then(function (d) {
      var u = d && d.ok && d.user;
      if (!u) return;
      if (u.picture) {
        // referrerpolicy=no-referrer so Google-hosted photos load (they block
        // hot-linking when a referrer is sent).
        avatarHTML = '<img src="' + u.picture + '" referrerpolicy="no-referrer" alt="" ' +
                     'style="width:100%;height:100%;object-fit:cover;border-radius:4px;">';
        applyArt();
      }
      var nameEl = document.getElementById('player-name');
      if (nameEl && u.player_name) nameEl.textContent = u.player_name;
    })
    .catch(function () { /* offline / not logged in → keep defaults */ });
})();
