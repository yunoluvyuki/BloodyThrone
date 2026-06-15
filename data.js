// ═══════════════════════════════════════════════════════
// SVG ARTWORK
// ═══════════════════════════════════════════════════════
const SVGs = {
stick_man:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="50" cy="18" r="13" stroke-width="2.5"/>
  <line x1="50" y1="31" x2="50" y2="82" stroke-width="2.5"/>
  <line x1="50" y1="48" x2="24" y2="68" stroke-width="2.5"/>
  <line x1="50" y1="48" x2="76" y2="68" stroke-width="2.5"/>
  <line x1="50" y1="82" x2="30" y2="118" stroke-width="2.5"/>
  <line x1="50" y1="82" x2="70" y2="118" stroke-width="2.5"/>
</svg>`,
smudge:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
  <path d="M18,90 Q8,55 15,30 Q25,8 48,10 Q72,8 82,28 Q95,50 88,78 Q80,108 58,120 Q36,130 22,112 Z" fill="#1a1a1a"/>
  <ellipse cx="64" cy="55" rx="10" ry="6" fill="#555" transform="rotate(-25,64,55)"/>
  <ellipse cx="44" cy="50" rx="6" ry="4" fill="#555" transform="rotate(10,44,50)"/>
</svg>`,
perspective_block:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="50,18 82,36 82,90 50,108 18,90 18,36" fill="#e8e8e8" stroke="#222"/>
  <line x1="50" y1="18" x2="50" y2="72" stroke-width="2"/>
  <line x1="50" y1="72" x2="82" y2="90" stroke-width="2"/>
  <line x1="50" y1="72" x2="18" y2="90" stroke-width="2"/>
  <polygon points="50,18 82,36 50,54 18,36" fill="#ccc"/>
  <polygon points="82,36 82,90 50,108 50,54" fill="#aaa"/>
  <polygon points="18,36 50,54 50,108 18,90" fill="#bbb"/>
</svg>`,
v_wing_bat:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round" stroke-linejoin="round">
  <path d="M50,70 Q30,50 5,35 Q15,60 10,80 Q30,70 50,70Z" fill="#1a1a1a" stroke-width="2"/>
  <path d="M50,70 Q70,50 95,35 Q85,60 90,80 Q70,70 50,70Z" fill="#1a1a1a" stroke-width="2"/>
  <ellipse cx="50" cy="72" rx="8" ry="10" fill="#222" stroke="#222" stroke-width="2"/>
  <circle cx="46" cy="68" r="2" fill="#fff"/>
  <circle cx="54" cy="68" r="2" fill="#fff"/>
  <path d="M45,76 Q50,80 55,76" stroke="#fff" stroke-width="1.5" fill="none"/>
  <line x1="44" y1="82" x2="40" y2="92" stroke="#222" stroke-width="1.5"/>
  <line x1="56" y1="82" x2="60" y2="92" stroke="#222" stroke-width="1.5"/>
</svg>`,
stick_knight:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round" stroke-linejoin="round">
  <path d="M36,28 L36,16 Q36,5 50,5 Q64,5 64,16 L64,28 Q64,36 50,36 Q36,36 36,28Z" stroke-width="2.5"/>
  <path d="M36,20 L30,20 L30,30 L36,30" stroke-width="2"/>
  <path d="M64,20 L70,20 L70,30 L64,30" stroke-width="2"/>
  <line x1="50" y1="36" x2="50" y2="88" stroke-width="2.5"/>
  <line x1="50" y1="55" x2="25" y2="72" stroke-width="2.5"/>
  <line x1="50" y1="55" x2="75" y2="58" stroke-width="2.5"/>
  <line x1="75" y1="58" x2="88" y2="35" stroke-width="2"/>
  <line x1="78" y1="52" x2="84" y2="56" stroke-width="2"/>
  <path d="M22,70 Q18,72 20,78 Q22,84 26,82" stroke-width="2"/>
  <line x1="50" y1="88" x2="35" y2="125" stroke-width="2.5"/>
  <line x1="50" y1="88" x2="65" y2="125" stroke-width="2.5"/>
</svg>`,
danger_noodle:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <path d="M50,10 Q75,10 75,30 Q75,50 50,50 Q25,50 25,70 Q25,90 50,90 Q75,90 75,110 Q75,128 55,130" stroke-width="6" stroke="#1a1a1a"/>
  <path d="M50,10 Q75,10 75,30 Q75,50 50,50 Q25,50 25,70 Q25,90 50,90 Q75,90 75,110 Q75,128 55,130" stroke-width="4" stroke="#444"/>
  <ellipse cx="50" cy="10" rx="8" ry="6" fill="#1a1a1a" stroke-width="2"/>
  <line x1="42" y1="8" x2="38" y2="4" stroke="#222" stroke-width="1.5"/>
  <line x1="58" y1="8" x2="62" y2="4" stroke="#222" stroke-width="1.5"/>
  <circle cx="46" cy="10" r="2" fill="#fff"/>
  <circle cx="54" cy="10" r="2" fill="#fff"/>
</svg>`,
scribble:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <circle cx="50" cy="75" r="35" stroke-width="1.5" stroke-dasharray="3,2"/>
  <path d="M28,60 Q35,40 50,45 Q65,50 68,65 Q72,80 60,88 Q48,96 38,88 Q25,78 28,60Z" stroke-width="2"/>
  <path d="M32,55 Q50,35 68,55 Q82,70 68,88 Q50,102 32,88 Q18,72 32,55Z" stroke-width="1.5" stroke-dasharray="4,3"/>
  <circle cx="50" cy="70" r="4" fill="#222"/>
  <circle cx="44" cy="65" r="2" fill="#555"/>
  <circle cx="56" cy="65" r="2" fill="#555"/>
</svg>`,
broccoli_grove:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <line x1="50" y1="100" x2="50" y2="128" stroke-width="3"/>
  <line x1="28" y1="108" x2="28" y2="128" stroke-width="2.5"/>
  <line x1="72" y1="108" x2="72" y2="128" stroke-width="2.5"/>
  <circle cx="50" cy="60" r="28" fill="#e8e8e8" stroke-width="2"/>
  <circle cx="28" cy="75" r="20" fill="#ddd" stroke-width="2"/>
  <circle cx="72" cy="75" r="20" fill="#ddd" stroke-width="2"/>
  <circle cx="36" cy="50" r="14" fill="#d5d5d5" stroke-width="1.5"/>
  <circle cx="64" cy="50" r="14" fill="#d5d5d5" stroke-width="1.5"/>
  <circle cx="50" cy="40" r="16" fill="#ccc" stroke-width="2"/>
</svg>`,
ghost_line:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <line x1="8" y1="20" x2="92" y2="120" stroke-width="3"/>
  <line x1="15" y1="15" x2="85" y2="115" stroke-width="2" stroke-dasharray="5,4"/>
  <line x1="22" y1="12" x2="78" y2="125" stroke-width="1.5" stroke-dasharray="3,5"/>
  <line x1="5" y1="35" x2="95" y2="105" stroke-width="1" stroke-dasharray="2,6"/>
  <circle cx="50" cy="70" r="12" fill="rgba(200,200,200,0.3)" stroke-width="1.5" stroke-dasharray="3,3"/>
</svg>`,
tangled_spider:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <ellipse cx="50" cy="72" rx="18" ry="14" fill="#1a1a1a"/>
  <ellipse cx="50" cy="58" rx="13" ry="10" fill="#222"/>
  <circle cx="44" cy="55" r="3" fill="#fff"/>
  <circle cx="56" cy="55" r="3" fill="#fff"/>
  <circle cx="44" cy="55" r="1.5" fill="#000"/>
  <circle cx="56" cy="55" r="1.5" fill="#000"/>
  <!-- legs left -->
  <line x1="34" y1="68" x2="10" y2="50" stroke-width="2"/>
  <line x1="32" y1="72" x2="6" y2="70" stroke-width="2"/>
  <line x1="33" y1="78" x2="8" y2="90" stroke-width="2"/>
  <line x1="36" y1="82" x2="14" y2="108" stroke-width="2"/>
  <!-- legs right -->
  <line x1="66" y1="68" x2="90" y2="50" stroke-width="2"/>
  <line x1="68" y1="72" x2="94" y2="70" stroke-width="2"/>
  <line x1="67" y1="78" x2="92" y2="90" stroke-width="2"/>
  <line x1="64" y1="82" x2="86" y2="108" stroke-width="2"/>
</svg>`,
contrast_crusher:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="50,8 62,18 62,32 50,38 38,32 38,18" fill="#111" stroke="#333" stroke-width="1.5"/>
  <rect x="34" y="38" width="32" height="44" fill="#111" stroke="#333" stroke-width="1.5"/>
  <rect x="16" y="40" width="18" height="30" fill="#222" stroke="#333" stroke-width="1.5" rx="2"/>
  <rect x="66" y="40" width="18" height="30" fill="#222" stroke="#333" stroke-width="1.5" rx="2"/>
  <path d="M20,70 L8,100 L16,100 L20,85 L24,100 L32,100Z" fill="#111" stroke="#333" stroke-width="1.5"/>
  <polygon points="70,70 60,100 78,100" fill="#111" stroke="#333" stroke-width="1.5"/>
  <line x1="38" y1="82" x2="34" y2="125" stroke="#222" stroke-width="3"/>
  <line x1="62" y1="82" x2="66" y2="125" stroke="#222" stroke-width="3"/>
  <line x1="30" y1="22" x2="42" y2="26" stroke="#fff" stroke-width="1" opacity="0.4"/>
  <line x1="58" y1="22" x2="70" y2="18" stroke="#fff" stroke-width="1" opacity="0.4"/>
</svg>`,
stick_ribs:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <circle cx="50" cy="16" r="12" stroke-width="2.5"/>
  <line x1="50" y1="28" x2="50" y2="95" stroke-width="2.5"/>
  <path d="M50,38 Q32,42 28,52 Q32,58 50,52" stroke-width="2"/>
  <path d="M50,38 Q68,42 72,52 Q68,58 50,52" stroke-width="2"/>
  <path d="M50,50 Q28,54 24,64 Q28,70 50,64" stroke-width="2"/>
  <path d="M50,50 Q72,54 76,64 Q72,70 50,64" stroke-width="2"/>
  <path d="M50,62 Q30,66 26,76 Q30,82 50,76" stroke-width="2"/>
  <path d="M50,62 Q70,66 74,76 Q70,82 50,76" stroke-width="2"/>
  <line x1="50" y1="95" x2="34" y2="130" stroke-width="2.5"/>
  <line x1="50" y1="95" x2="66" y2="130" stroke-width="2.5"/>
</svg>`,
ink_blot:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
  <path d="M50,20 Q68,15 78,28 Q92,38 88,55 Q96,65 85,75 Q90,90 78,95 Q72,112 58,108 Q50,120 40,110 Q28,114 22,100 Q10,92 15,78 Q5,65 14,55 Q10,38 24,30 Q32,15 50,20Z" fill="#111"/>
  <path d="M60,45 Q72,40 74,52 Q76,62 66,65" fill="none" stroke="#444" stroke-width="1.5"/>
  <path d="M40,48 Q30,44 28,54 Q27,62 36,64" fill="none" stroke="#444" stroke-width="1.5"/>
  <path d="M44,78 Q50,85 56,78" fill="none" stroke="#555" stroke-width="2"/>
  <circle cx="44" cy="60" r="3" fill="#fff" opacity="0.6"/>
  <circle cx="58" cy="60" r="3" fill="#fff" opacity="0.6"/>
</svg>`,
top_heavy_brute:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="50" cy="18" r="12" stroke-width="2.5"/>
  <rect x="28" y="32" width="44" height="35" rx="4" fill="#ddd" stroke-width="2.5"/>
  <rect x="4" y="32" width="24" height="42" rx="5" fill="#ccc" stroke-width="2.5"/>
  <rect x="72" y="32" width="24" height="42" rx="5" fill="#ccc" stroke-width="2.5"/>
  <circle cx="8" cy="80" r="6" fill="#bbb" stroke-width="2"/>
  <circle cx="92" cy="80" r="6" fill="#bbb" stroke-width="2"/>
  <line x1="36" y1="67" x2="33" y2="100" stroke-width="2.5"/>
  <line x1="64" y1="67" x2="67" y2="100" stroke-width="2.5"/>
  <line x1="33" y1="100" x2="25" y2="128" stroke-width="2.5"/>
  <line x1="67" y1="100" x2="75" y2="128" stroke-width="2.5"/>
</svg>`,
rotten_fruit:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <path d="M50,10 Q52,5 58,6 Q62,10 58,14" stroke-width="1.5"/>
  <ellipse cx="50" cy="72" rx="36" ry="42" fill="#e0e0e0" stroke-width="2.5"/>
  <path d="M25,55 Q20,72 28,90 Q38,108 52,108 Q66,108 76,90 Q84,72 79,55" stroke-width="1.5" stroke-dasharray="3,2"/>
  <path d="M35,48 Q30,55 35,65" stroke-width="2" stroke="#888"/>
  <path d="M62,50 Q68,58 64,68" stroke-width="2" stroke="#888"/>
  <circle cx="42" cy="80" r="6" fill="#bbb" stroke-width="1.5"/>
  <circle cx="58" cy="88" r="8" fill="#aaa" stroke-width="1.5"/>
  <circle cx="50" cy="65" r="5" fill="#c8c8c8" stroke-width="1.5"/>
  <path d="M38,95 Q45,102 58,98" stroke-width="2"/>
</svg>`,
shadow_scrawl:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#111" stroke-linecap="round">
  <path d="M20,40 Q10,25 25,15 Q40,5 60,12 Q80,18 85,35 Q92,55 80,70 Q68,85 50,88 Q30,90 18,75 Q8,60 20,40Z" fill="#111"/>
  <path d="M15,50 Q5,35 20,22 Q38,8 62,14 Q85,20 90,42 Q96,65 82,80" stroke="#333" stroke-width="1.5"/>
  <circle cx="40" cy="45" r="4" fill="#fff" opacity="0.7"/>
  <circle cx="58" cy="42" r="4" fill="#fff" opacity="0.7"/>
  <path d="M38,60 Q50,68 62,60" stroke="#444" stroke-width="2"/>
  <line x1="25" y1="88" x2="18" y2="115" stroke="#111" stroke-width="3"/>
  <line x1="38" y1="90" x2="35" y2="118" stroke="#111" stroke-width="3"/>
  <line x1="62" y1="90" x2="65" y2="118" stroke="#111" stroke-width="3"/>
  <line x1="75" y1="88" x2="82" y2="115" stroke="#111" stroke-width="3"/>
</svg>`,
twisted_star:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="50,10 60,40 90,40 67,58 76,88 50,70 24,88 33,58 10,40 40,40" fill="#e0e0e0" stroke-width="2.5"/>
  <polygon points="50,22 57,42 78,42 62,54 68,74 50,62 32,74 38,54 22,42 43,42" fill="#ccc" stroke-width="1.5"/>
  <circle cx="50" cy="48" r="6" fill="#222" stroke-width="0"/>
  <line x1="50" y1="88" x2="42" y2="118" stroke-width="2.5"/>
  <line x1="50" y1="88" x2="58" y2="118" stroke-width="2.5"/>
</svg>`,
wax_golem:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <path d="M38,5 Q50,0 62,5 Q72,10 72,22 Q72,35 62,40 Q50,44 38,40 Q28,35 28,22 Q28,10 38,5Z" fill="#e8e8e8" stroke-width="2"/>
  <path d="M30,42 Q20,55 22,80 Q24,100 18,115" stroke-width="4" stroke="#ddd"/>
  <path d="M70,42 Q80,55 78,80 Q76,100 82,115" stroke-width="4" stroke="#ddd"/>
  <path d="M28,50 Q50,60 72,50 Q78,80 72,100 Q68,115 50,120 Q32,115 28,100 Q22,80 28,50Z" fill="#e0e0e0" stroke-width="2.5"/>
  <path d="M35,62 Q28,70 32,80 Q36,90 40,95" stroke-width="1.5" stroke="#bbb"/>
  <path d="M65,62 Q72,70 68,80 Q64,90 60,95" stroke-width="1.5" stroke="#bbb"/>
  <path d="M40,50 Q38,60 36,75 Q34,88 38,95" stroke-width="2" stroke="#ccc"/>
  <path d="M60,50 Q62,60 64,75 Q66,88 62,95" stroke-width="2" stroke="#ccc"/>
</svg>`,
charcoal_beast:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <path d="M20,60 Q10,40 20,20 Q32,5 50,8 Q68,5 80,20 Q90,40 80,60 Q68,78 50,80 Q32,78 20,60Z" fill="#1a1a1a"/>
  <path d="M18,55 Q6,45 8,30 Q12,16 20,20" stroke-width="2" stroke="#444"/>
  <path d="M82,55 Q94,45 92,30 Q88,16 80,20" stroke-width="2" stroke="#444"/>
  <circle cx="36" cy="35" r="5" fill="#fff" opacity="0.8"/>
  <circle cx="64" cy="35" r="5" fill="#fff" opacity="0.8"/>
  <circle cx="36" cy="35" r="2.5" fill="#111"/>
  <circle cx="64" cy="35" r="2.5" fill="#111"/>
  <path d="M40,55 Q50,62 60,55" stroke="#555" stroke-width="2"/>
  <line x1="28" y1="78" x2="20" y2="115" stroke-width="3"/>
  <line x1="40" y1="82" x2="38" y2="118" stroke-width="3"/>
  <line x1="60" y1="82" x2="62" y2="118" stroke-width="3"/>
  <line x1="72" y1="78" x2="80" y2="115" stroke-width="3"/>
</svg>`,
eraser_wraith:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <rect x="18" y="28" width="64" height="38" rx="4" fill="#f0f0f0" stroke-width="2.5"/>
  <rect x="18" y="28" width="32" height="38" rx="4" fill="#d8d8d8" stroke-width="0"/>
  <line x1="50" y1="28" x2="50" y2="66" stroke="#bbb" stroke-width="1.5"/>
  <path d="M22,45 L38,45" stroke="#aaa" stroke-width="1.5" stroke-dasharray="3,2"/>
  <path d="M22,52 L38,52" stroke="#aaa" stroke-width="1.5" stroke-dasharray="3,2"/>
  <path d="M54,42 L74,42" stroke="#bbb" stroke-width="1.5" stroke-dasharray="3,2"/>
  <path d="M54,52 L74,52" stroke="#bbb" stroke-width="1.5" stroke-dasharray="3,2"/>
  <path d="M25,66 Q18,80 22,100 Q26,118 38,120 Q50,122 62,120 Q74,118 78,100 Q82,80 75,66" fill="#f0f0f0" stroke-width="2"/>
  <circle cx="40" cy="82" r="3" fill="#aaa"/>
  <circle cx="60" cy="82" r="3" fill="#aaa"/>
  <path d="M42,95 Q50,100 58,95" stroke-width="1.5"/>
</svg>`,
void_sketch:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <circle cx="50" cy="22" r="14" stroke-width="2.5" stroke-dasharray="4,2"/>
  <line x1="50" y1="36" x2="50" y2="88" stroke-width="2.5" stroke-dasharray="5,3"/>
  <line x1="50" y1="55" x2="25" y2="72" stroke-width="2.5" stroke-dasharray="4,2"/>
  <line x1="50" y1="55" x2="75" y2="72" stroke-width="2.5" stroke-dasharray="4,2"/>
  <line x1="50" y1="88" x2="32" y2="120" stroke-width="2.5" stroke-dasharray="4,2"/>
  <line x1="50" y1="88" x2="68" y2="120" stroke-width="2.5" stroke-dasharray="4,2"/>
  <circle cx="50" cy="22" r="5" fill="#111" opacity="0.4"/>
  <line x1="42" y1="14" x2="58" y2="30" stroke="#111" stroke-width="2"/>
  <line x1="58" y1="14" x2="42" y2="30" stroke="#111" stroke-width="2"/>
</svg>`,
ink_serpent:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#111" stroke-linecap="round">
  <path d="M50,5 Q80,5 82,25 Q84,45 65,50 Q45,55 42,72 Q38,90 55,95 Q72,100 75,115" stroke-width="8" stroke="#111"/>
  <path d="M50,5 Q80,5 82,25 Q84,45 65,50 Q45,55 42,72 Q38,90 55,95 Q72,100 75,115" stroke-width="5" stroke="#333"/>
  <ellipse cx="50" cy="7" rx="10" ry="7" fill="#111" stroke-width="0"/>
  <line x1="40" y1="4" x2="34" y2="0" stroke="#111" stroke-width="2"/>
  <line x1="60" y1="4" x2="66" y2="0" stroke="#111" stroke-width="2"/>
  <circle cx="44" cy="7" r="2.5" fill="#fff"/>
  <circle cx="56" cy="7" r="2.5" fill="#fff"/>
  <circle cx="44" cy="7" r="1" fill="#000"/>
  <circle cx="56" cy="7" r="1" fill="#000"/>
</svg>`,
paper_tiger:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="50,8 70,20 70,50 50,62 30,50 30,20" fill="#e8e8e8" stroke-width="2"/>
  <polygon points="50,8 70,20 50,32 30,20" fill="#ddd" stroke-width="1.5"/>
  <polygon points="30,20 50,32 50,62 30,50" fill="#ccc" stroke-width="1.5"/>
  <polygon points="70,20 50,32 50,62 70,50" fill="#d8d8d8" stroke-width="1.5"/>
  <line x1="50" y1="8" x2="50" y2="62" stroke-width="1" stroke-dasharray="2,3"/>
  <line x1="30" y1="20" x2="70" y2="50" stroke-width="1" stroke-dasharray="2,3"/>
  <line x1="70" y1="20" x2="30" y2="50" stroke-width="1" stroke-dasharray="2,3"/>
  <polygon points="42,4 50,0 58,4 50,8" fill="#ddd" stroke-width="1.5"/>
  <polygon points="26,16 30,20 22,24" fill="#ddd" stroke-width="1.5"/>
  <polygon points="74,16 70,20 78,24" fill="#ddd" stroke-width="1.5"/>
  <line x1="38" y1="62" x2="30" y2="95" stroke-width="2.5"/>
  <line x1="44" y1="64" x2="40" y2="98" stroke-width="2.5"/>
  <line x1="56" y1="64" x2="60" y2="98" stroke-width="2.5"/>
  <line x1="62" y1="62" x2="70" y2="95" stroke-width="2.5"/>
</svg>`,
abstract_horror:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <path d="M28,80 Q10,60 18,35 Q25,12 45,8 Q65,4 78,22 Q95,42 88,68 Q80,90 60,98 Q38,105 25,92 Z" fill="#e0e0e0" stroke-width="2.5"/>
  <circle cx="38" cy="42" r="6" fill="#111"/>
  <circle cx="62" cy="38" r="8" fill="#111"/>
  <circle cx="75" cy="58" r="4" fill="#111"/>
  <circle cx="30" cy="65" r="5" fill="#111"/>
  <path d="M35,72 Q40,78 48,74 Q56,70 60,76 Q65,82 72,78" stroke-width="2" stroke="#555"/>
  <path d="M45,88 Q50,95 58,90" stroke-width="2"/>
  <line x1="42" y1="98" x2="36" y2="125" stroke-width="2.5"/>
  <line x1="58" y1="98" x2="64" y2="125" stroke-width="2.5"/>
</svg>`,
the_revision:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <circle cx="50" cy="18" r="13" stroke-width="2.5"/>
  <line x1="50" y1="31" x2="50" y2="85" stroke-width="2.5"/>
  <line x1="50" y1="48" x2="24" y2="68" stroke-width="2.5"/>
  <line x1="50" y1="48" x2="76" y2="68" stroke-width="2.5"/>
  <line x1="50" y1="85" x2="30" y2="118" stroke-width="2.5"/>
  <line x1="50" y1="85" x2="70" y2="118" stroke-width="2.5"/>
  <line x1="8" y1="8" x2="92" y2="130" stroke="#c0392b" stroke-width="3" opacity="0.7"/>
  <line x1="92" y1="8" x2="8" y2="130" stroke="#c0392b" stroke-width="3" opacity="0.7"/>
  <rect x="6" y="6" width="88" height="128" stroke="#c0392b" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.5"/>
</svg>`,
masterpiece_draft:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <rect x="8" y="8" width="84" height="124" rx="2" stroke-width="3" fill="#f5f5f0"/>
  <rect x="14" y="14" width="72" height="112" rx="1" stroke-width="1.5" stroke-dasharray="3,2"/>
  <circle cx="50" cy="42" r="12" stroke-width="2"/>
  <line x1="50" y1="54" x2="50" y2="90" stroke-width="2.5"/>
  <line x1="50" y1="65" x2="28" y2="78" stroke-width="2"/>
  <line x1="50" y1="65" x2="72" y2="78" stroke-width="2"/>
  <line x1="50" y1="90" x2="38" y2="118" stroke-width="2.5"/>
  <line x1="50" y1="90" x2="62" y2="118" stroke-width="2.5"/>
  <path d="M22,22 L16,22 L16,28" stroke-width="2"/>
  <path d="M78,22 L84,22 L84,28" stroke-width="2"/>
  <path d="M22,118 L16,118 L16,112" stroke-width="2"/>
  <path d="M78,118 L84,118 L84,112" stroke-width="2"/>
  <circle cx="50" cy="38" r="3" fill="#222"/>
  <circle cx="44" cy="44" r="2" fill="#222"/>
  <circle cx="56" cy="44" r="2" fill="#222"/>
</svg>`,
rejected_deity:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <polygon points="50,8 56,20 70,20 60,28 64,42 50,34 36,42 40,28 30,20 44,20" fill="#1a1a1a" stroke-width="2"/>
  <path d="M30,44 Q8,38 6,22 Q10,16 18,20 Q22,38 42,44" fill="#1a1a1a" stroke-width="1.5"/>
  <path d="M70,44 Q92,38 94,22 Q90,16 82,20 Q78,38 58,44" fill="#1a1a1a" stroke-width="1.5"/>
  <rect x="34" y="44" width="32" height="38" rx="3" fill="#222" stroke-width="2.5"/>
  <line x1="34" y1="82" x2="28" y2="118" stroke-width="3"/>
  <line x1="66" y1="82" x2="72" y2="118" stroke-width="3"/>
  <line x1="34" y1="62" x2="20" y2="58" stroke-width="2.5"/>
  <line x1="66" y1="62" x2="80" y2="58" stroke-width="2.5"/>
  <line x1="50" y1="44" x2="50" y2="52" stroke="#fff" stroke-width="1.5" opacity="0.5"/>
  <circle cx="43" cy="56" r="3" fill="#fff" opacity="0.6"/>
  <circle cx="57" cy="56" r="3" fill="#fff" opacity="0.6"/>
</svg>`,
infinite_loop:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <path d="M50,70 m-30,0 a30,30 0 1,0 60,0 a30,30 0 1,0 -60,0" stroke-width="3"/>
  <path d="M50,70 m-18,0 a18,18 0 1,0 36,0 a18,18 0 1,0 -36,0" stroke-width="2.5"/>
  <path d="M50,70 m-8,0 a8,8 0 1,0 16,0 a8,8 0 1,0 -16,0" stroke-width="2" fill="#1a1a1a"/>
  <path d="M50,40 Q60,28 72,30 Q84,32 84,45 Q84,58 72,65" stroke-width="2" stroke-dasharray="3,2"/>
  <path d="M50,40 Q40,28 28,30 Q16,32 16,45 Q16,58 28,65" stroke-width="2" stroke-dasharray="3,2"/>
  <path d="M26,95 L20,112" stroke-width="2.5"/>
  <path d="M74,95 L80,112" stroke-width="2.5"/>
  <path d="M50,100 L50,118" stroke-width="2.5"/>
</svg>`,
the_critique:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#222" stroke-linecap="round">
  <circle cx="50" cy="18" r="13" stroke-width="2.5"/>
  <path d="M38,14 Q50,8 62,14" stroke-width="1.5"/>
  <rect x="30" y="32" width="40" height="30" rx="2" fill="#e8e8e8" stroke-width="2.5"/>
  <line x1="38" y1="42" x2="62" y2="42" stroke-width="1.5"/>
  <line x1="38" y1="49" x2="62" y2="49" stroke-width="1.5"/>
  <line x1="38" y1="56" x2="52" y2="56" stroke-width="1.5"/>
  <line x1="30" y1="62" x2="20" y2="88" stroke-width="2.5"/>
  <line x1="70" y1="62" x2="80" y2="50" stroke-width="2.5"/>
  <line x1="80" y1="50" x2="94" y2="58" stroke-width="2.5"/>
  <line x1="80" y1="50" x2="85" y2="38" stroke-width="2"/>
  <line x1="70" y1="62" x2="68" y2="95" stroke-width="2.5"/>
  <line x1="38" y1="62" x2="30" y2="95" stroke-width="2.5"/>
  <line x1="30" y1="95" x2="22" y2="128" stroke-width="2.5"/>
  <line x1="68" y1="95" x2="76" y2="128" stroke-width="2.5"/>
</svg>`,
final_draft:`<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#111" stroke-linecap="round">
  <polygon points="50,5 58,18 74,15 66,28 78,38 62,38 58,54 50,42 42,54 38,38 22,38 34,28 26,15 42,18" fill="#111" stroke-width="2"/>
  <circle cx="50" cy="32" r="8" fill="#fff" stroke="#111" stroke-width="2"/>
  <circle cx="47" cy="30" r="2" fill="#111"/>
  <circle cx="53" cy="30" r="2" fill="#111"/>
  <rect x="30" y="54" width="40" height="34" rx="3" fill="#1a1a1a" stroke-width="2.5"/>
  <path d="M20,56 Q8,52 6,38 Q10,30 16,34 Q18,50 30,56" fill="#111" stroke-width="1.5"/>
  <path d="M80,56 Q92,52 94,38 Q90,30 84,34 Q82,50 70,56" fill="#111" stroke-width="1.5"/>
  <line x1="30" y1="88" x2="22" y2="118" stroke-width="3.5"/>
  <line x1="70" y1="88" x2="78" y2="118" stroke-width="3.5"/>
  <line x1="30" y1="70" x2="14" y2="64" stroke-width="3"/>
  <line x1="70" y1="70" x2="86" y2="64" stroke-width="3"/>
  <path d="M38,54 Q50,48 62,54" stroke="#fff" stroke-width="1.5" opacity="0.5"/>
</svg>`
};

// ═══════════════════════════════════════════════════════
// GAME DATA
// ═══════════════════════════════════════════════════════
const RESOURCE_LABELS={old:'OLD',bronze:'BRONZE',silver:'SILVER',gold:'GOLD',plat:'PLAT'};
const CREATURES = [
  {id:'hollow_wretch',name:'HOLLOW WRETCH',tag:'Nothing left but need.',atk:2,def:1.0,hp:10,count:null,rewards:{atk:0.12,old:0.15},vicReq:5,new:false,img:'attached_assets/img/1hollow_wretch.png'},
  {id:'plague_hound',name:'PLAGUE HOUND',tag:'Loyal to the rot.',atk:3,def:1.1,hp:550,count:3,rewards:{hp:0.4,old:0.18},vicReq:5,new:false,img:'attached_assets/img/2plague_hound.png'},
  {id:'ashwalker',name:'ASHWALKER',tag:'Stepped out of the fire.',atk:4,def:1.1,hp:600,count:'10%',rewards:{atk:0.13,old:0.2},vicReq:5,new:false,img:'attached_assets/img/3ashwalker.png'},
  {id:'bonepicker',name:'BONEPICKER',tag:'Patience at its worst.',atk:5,def:1.2,hp:650,count:null,rewards:{old:0.22,atk:0.11},vicReq:5,new:false},
  {id:'grave_rat',name:'GRAVE RAT',tag:'It was here first.',atk:6,def:1.2,hp:700,count:2,rewards:{hp:0.45,old:0.2},vicReq:5,new:false},
  {id:'mudborn',name:'MUDBORN',tag:'The swamp made it.',atk:7,def:1.3,hp:750,count:'12%',rewards:{atk:0.14,old:0.24},vicReq:5,new:false},
  {id:'corpse_crawler',name:'CORPSE CRAWLER',tag:'Moving. Somehow.',atk:8,def:1.3,hp:800,count:null,rewards:{old:0.26,hp:0.5},vicReq:5,new:false},
  {id:'rotting_serf',name:'ROTTING SERF',tag:'Still working after death.',atk:9,def:1.4,hp:850,count:4,rewards:{atk:0.15,old:0.28},vicReq:5,new:false},
  {id:'blighted_husk',name:'BLIGHTED HUSK',tag:'The disease won.',atk:10,def:1.4,hp:900,count:'15%',rewards:{hp:0.55,old:0.3},vicReq:5,new:false},
  {id:'soot_fiend',name:'SOOT FIEND',tag:'Left over from something worse.',atk:11,def:1.5,hp:950,count:null,rewards:{atk:0.16,old:0.32},vicReq:5,new:false},
  {id:'wretched_thrall',name:'WRETCHED THRALL',tag:'Serving without knowing why.',atk:13,def:1.6,hp:1000,count:3,rewards:{old:0.34,atk:0.14},vicReq:5,new:false},
  {id:'festering_vagrant',name:'FESTERING VAGRANT',tag:'Homeless and hungry.',atk:14,def:1.6,hp:1050,count:'15%',rewards:{hp:0.6,old:0.35},vicReq:5,new:false},
  {id:'hollow_eye',name:'HOLLOW EYE',tag:'Nothing looks back.',atk:15,def:1.7,hp:1100,count:null,rewards:{atk:0.17,old:0.37},vicReq:5,new:false},
  {id:'dungeon_tick',name:'DUNGEON TICK',tag:'It found you.',atk:17,def:1.7,hp:1150,count:5,rewards:{old:0.4,hp:0.65},vicReq:5,new:false},
  {id:'gravel_ghoul',name:'GRAVEL GHOUL',tag:'Dug itself out.',atk:18,def:1.8,hp:1200,count:'18%',rewards:{atk:0.18,old:0.42},vicReq:5,new:false},
  {id:'bile_spawn',name:'BILE SPAWN',tag:'Born wrong.',atk:19,def:1.8,hp:1250,count:null,rewards:{hp:0.7,old:0.44},vicReq:5,new:false},
  {id:'mossrot',name:'MOSSROT',tag:'Where things go to end.',atk:21,def:1.9,hp:1300,count:2,rewards:{atk:0.19,old:0.46},vicReq:5,new:false},
  {id:'scab_crawler',name:'SCAB CRAWLER',tag:'Every wound is a door.',atk:22,def:1.9,hp:1350,count:'20%',rewards:{old:0.48,atk:0.17},vicReq:5,new:false},
  {id:'charnel_fly',name:'CHARNEL FLY',tag:'Drawn to the smell.',atk:23,def:2.0,hp:1400,count:null,rewards:{hp:0.75,old:0.5},vicReq:5,new:false},
  {id:'skinless_beggar',name:'SKINLESS BEGGAR',tag:'Still asking.',atk:25,def:2.0,hp:1450,count:4,rewards:{atk:0.2,old:0.52},vicReq:5,new:false},
  {id:'weeping_hollow',name:'WEEPING HOLLOW',tag:'The grief outlasted the body.',atk:26,def:2.1,hp:1500,count:'20%',rewards:{old:0.54,hp:0.8},vicReq:5,new:false},
  {id:'maggot_knight',name:'MAGGOT KNIGHT',tag:'Earned its title somehow.',atk:27,def:2.1,hp:1550,count:null,rewards:{atk:0.21,old:0.56},vicReq:5,new:false},
  {id:'cinder_wretch',name:'CINDER WRETCH',tag:'Burned and kept going.',atk:29,def:2.2,hp:1600,count:3,rewards:{hp:0.85,old:0.58},vicReq:5,new:false},
  {id:'sallow_shade',name:'SALLOW SHADE',tag:'A dim thing.',atk:30,def:2.2,hp:1650,count:'22%',rewards:{atk:0.22,old:0.6},vicReq:5,new:false},
  {id:'mud_ghoul',name:'MUD GHOUL',tag:'Dredged from below.',atk:32,def:2.3,hp:1700,count:null,rewards:{old:0.62,hp:0.9},vicReq:5,new:false},
  {id:'bonegnaw',name:'BONEGNAW',tag:'Always chewing.',atk:33,def:2.3,hp:1750,count:5,rewards:{atk:0.23,old:0.64},vicReq:5,new:false},
  {id:'ashen_tramp',name:'ASHEN TRAMP',tag:'Wandered here from the ruins.',atk:34,def:2.4,hp:1800,count:'22%',rewards:{hp:0.95,old:0.66},vicReq:5,new:false},
  {id:'foul_creeper',name:'FOUL CREEPER',tag:'Slow but certain.',atk:36,def:2.4,hp:1850,count:null,rewards:{atk:0.24,old:0.68},vicReq:5,new:false},
  {id:'plague_bearer',name:'PLAGUE BEARER',tag:'A gift nobody wanted.',atk:37,def:2.5,hp:1900,count:2,rewards:{old:0.7,hp:1.0},vicReq:5,new:false},
  {id:'tallow_shade',name:'TALLOW SHADE',tag:'Rendered down to spite.',atk:39,def:2.5,hp:1950,count:'25%',rewards:{atk:0.25,old:0.72},vicReq:5,new:false},
  {id:'rot_worm',name:'ROT WORM',tag:'Patient underground.',atk:40,def:2.6,hp:2000,count:null,rewards:{hp:1.05,old:0.74},vicReq:5,new:false},
  {id:'filth_shambler',name:'FILTH SHAMBLER',tag:'Moving against all reason.',atk:42,def:2.6,hp:2050,count:3,rewards:{atk:0.26,old:0.76},vicReq:5,new:false},
  {id:'corpse_leech',name:'CORPSE LEECH',tag:'Takes what it needs.',atk:43,def:2.7,hp:2100,count:'25%',rewards:{old:0.78,hp:1.1},vicReq:5,new:false},
  {id:'bleached_lurker',name:'BLEACHED LURKER',tag:'Waiting in the white.',atk:45,def:2.7,hp:2150,count:null,rewards:{atk:0.27,old:0.8},vicReq:5,new:false},
  {id:'grave_digger',name:'GRAVE DIGGER',tag:'Finished the job, then stayed.',atk:46,def:2.8,hp:2200,count:4,rewards:{hp:1.15,old:0.82},vicReq:5,new:false},
  {id:'putrid_wisp',name:'PUTRID WISP',tag:'Even the light here decays.',atk:48,def:2.8,hp:2250,count:'28%',rewards:{atk:0.28,old:0.84},vicReq:5,new:false},
  {id:'wailing_husk',name:'WAILING HUSK',tag:'No one answered.',atk:49,def:2.9,hp:2300,count:null,rewards:{old:0.86,hp:1.2},vicReq:5,new:false},
  {id:'dustbone',name:'DUSTBONE',tag:'Older than memory.',atk:51,def:2.9,hp:2350,count:2,rewards:{atk:0.29,old:0.88},vicReq:5,new:false},
  {id:'sludge_spawn',name:'SLUDGE SPAWN',tag:'From the drain.',atk:52,def:3.0,hp:2400,count:'28%',rewards:{hp:1.25,old:0.9},vicReq:5,new:false},
  {id:'tomb_rat',name:'TOMB RAT',tag:'It knows the tunnels.',atk:54,def:3.0,hp:2450,count:null,rewards:{atk:0.3,old:0.92},vicReq:5,new:false},
  {id:'cracked_skull',name:'CRACKED SKULL',tag:'Still thinking.',atk:55,def:3.1,hp:2500,count:5,rewards:{old:0.94,hp:1.3},vicReq:5,new:false},
  {id:'pale_shambler',name:'PALE SHAMBLER',tag:'Color long forgotten.',atk:57,def:3.1,hp:2550,count:'30%',rewards:{atk:0.31,old:0.96},vicReq:5,new:false},
  {id:'rotfen_cur',name:'ROTFEN CUR',tag:'A bad dog.',atk:58,def:3.2,hp:2600,count:null,rewards:{hp:1.35,old:0.98},vicReq:5,new:false},
  {id:'ash_crawler',name:'ASH CRAWLER',tag:'What the fire left behind.',atk:60,def:3.2,hp:2650,count:3,rewards:{atk:0.32,old:1.0},vicReq:5,new:false},
  {id:'bonedust_wretch',name:'BONEDUST WRETCH',tag:'Powdered thin by years.',atk:61,def:3.3,hp:2700,count:'30%',rewards:{old:1.02,hp:1.4},vicReq:5,new:false},
  {id:'famine_shade',name:'FAMINE SHADE',tag:'Wants what you have.',atk:63,def:3.3,hp:2750,count:null,rewards:{atk:0.33,old:1.04},vicReq:5,new:false},
  {id:'cobweb_ghoul',name:'COBWEB GHOUL',tag:"Hasn't moved in ages.",atk:64,def:3.4,hp:2800,count:4,rewards:{hp:1.45,old:1.06},vicReq:5,new:false},
  {id:'soot_crawler',name:'SOOT CRAWLER',tag:'Marks everything it touches.',atk:66,def:3.4,hp:2850,count:'32%',rewards:{atk:0.34,old:1.08},vicReq:5,new:false},
  {id:'charred_beggar',name:'CHARRED BEGGAR',tag:'Survived the wrong things.',atk:67,def:3.5,hp:2900,count:null,rewards:{old:1.1,hp:1.5},vicReq:5,new:false},
  {id:'hollow_pup',name:'HOLLOW PUP',tag:'Lost before it began.',atk:69,def:3.5,hp:2950,count:2,rewards:{atk:0.35,old:1.12},vicReq:5,new:false},
  {id:'mire_fiend',name:'MIRE FIEND',tag:'Deep in the wet.',atk:70,def:3.6,hp:3000,count:'32%',rewards:{hp:1.55,old:1.14},vicReq:5,new:false},
  {id:'ditch_ghoul',name:'DITCH GHOUL',tag:'Roadside nuisance.',atk:72,def:3.6,hp:3050,count:null,rewards:{atk:0.36,old:1.16},vicReq:5,new:false},
  {id:'scorch_wretch',name:'SCORCH WRETCH',tag:'Too close to the heat.',atk:73,def:3.7,hp:3100,count:5,rewards:{old:1.18,hp:1.6},vicReq:5,new:false},
  {id:'festering_hound',name:'FESTERING HOUND',tag:'It still tries to wag its tail.',atk:75,def:3.7,hp:3150,count:'35%',rewards:{atk:0.37,old:1.2},vicReq:5,new:false},
  {id:'gutter_shade',name:'GUTTER SHADE',tag:'Lives in the runoff.',atk:76,def:3.8,hp:3200,count:null,rewards:{hp:1.65,old:1.22},vicReq:5,new:false},
  {id:'bog_lurker',name:'BOG LURKER',tag:'Patient as the water.',atk:78,def:3.8,hp:3250,count:3,rewards:{atk:0.38,old:1.24},vicReq:5,new:false},
  {id:'cinder_rat',name:'CINDER RAT',tag:'Small and furious.',atk:79,def:3.9,hp:3300,count:'35%',rewards:{old:1.26,hp:1.7},vicReq:5,new:false},
  {id:'dried_husk',name:'DRIED HUSK',tag:'Just the shape of something.',atk:81,def:3.9,hp:3350,count:null,rewards:{atk:0.39,old:1.28},vicReq:5,new:false},
  {id:'brackish_spawn',name:'BRACKISH SPAWN',tag:'Salt and rot.',atk:82,def:4.0,hp:3400,count:2,rewards:{hp:1.75,old:1.3},vicReq:5,new:false},
  {id:'sunken_wretch',name:'SUNKEN WRETCH',tag:'Came up from below.',atk:84,def:4.0,hp:3450,count:'38%',rewards:{atk:0.4,old:1.32},vicReq:5,new:false},
  {id:'tallow_ghoul',name:'TALLOW GHOUL',tag:'Greasy with time.',atk:85,def:4.1,hp:3500,count:null,rewards:{old:1.34,hp:1.8},vicReq:5,new:false},
  {id:'blister_fiend',name:'BLISTER FIEND',tag:'Pressure made it awful.',atk:87,def:4.1,hp:3550,count:4,rewards:{atk:0.41,old:1.36},vicReq:5,new:false},
  {id:'gravel_rat',name:'GRAVEL RAT',tag:'Sharp teeth, no brain.',atk:88,def:4.2,hp:3600,count:'38%',rewards:{hp:1.85,old:1.38},vicReq:5,new:false},
  {id:'mudwater_shade',name:'MUDWATER SHADE',tag:'Visibility zero.',atk:90,def:4.2,hp:3650,count:null,rewards:{atk:0.42,old:1.4},vicReq:5,new:false},
  {id:'pale_crawler',name:'PALE CRAWLER',tag:'Moves like doubt.',atk:91,def:4.3,hp:3700,count:3,rewards:{old:1.42,hp:1.9},vicReq:5,new:false},
  {id:'crumbling_thrall',name:'CRUMBLING THRALL',tag:'Held together by orders.',atk:93,def:4.3,hp:3750,count:'40%',rewards:{atk:0.43,old:1.44},vicReq:5,new:false},
  {id:'fen_ghoul',name:'FEN GHOUL',tag:'The marsh kept it.',atk:94,def:4.4,hp:3800,count:null,rewards:{hp:1.95,old:1.46},vicReq:5,new:false},
  {id:'ashen_cur',name:'ASHEN CUR',tag:'Scorched and mean.',atk:96,def:4.4,hp:3850,count:5,rewards:{atk:0.44,old:1.48},vicReq:5,new:false},
  {id:'charnel_rat',name:'CHARNEL RAT',tag:'Feeds on the fallen.',atk:97,def:4.5,hp:3900,count:'40%',rewards:{old:1.5,hp:2.0},vicReq:5,new:false},
  {id:'bone_fly',name:'BONE FLY',tag:'Loud, wrong, everywhere.',atk:99,def:4.5,hp:3950,count:null,rewards:{atk:0.45,old:1.52},vicReq:5,new:false},
  {id:'sour_shade',name:'SOUR SHADE',tag:'The taste lingers.',atk:100,def:4.6,hp:4000,count:2,rewards:{hp:2.05,old:1.54},vicReq:5,new:false},
  {id:'rot_pup',name:'ROT PUP',tag:'Young and already ruined.',atk:102,def:4.6,hp:4100,count:'42%',rewards:{atk:0.46,old:1.56},vicReq:5,new:false},
  {id:'crypt_tick',name:'CRYPT TICK',tag:'Found in the lining.',atk:103,def:4.7,hp:4200,count:null,rewards:{old:1.58,hp:2.1},vicReq:5,new:false},
  {id:'damp_husk',name:'DAMP HUSK',tag:'The wet got in.',atk:105,def:4.7,hp:4300,count:4,rewards:{atk:0.47,old:1.6},vicReq:5,new:false},
  {id:'scab_fiend',name:'SCAB FIEND',tag:'Its wounds are armor.',atk:106,def:4.8,hp:4400,count:'42%',rewards:{hp:2.15,old:1.62},vicReq:5,new:false},
  {id:'hollow_stray',name:'HOLLOW STRAY',tag:'Looking for something gone.',atk:108,def:4.8,hp:4500,count:null,rewards:{atk:0.48,old:1.64},vicReq:5,new:false},
  {id:'cobweb_wretch',name:'COBWEB WRETCH',tag:'Suspended in old silk.',atk:109,def:4.9,hp:4600,count:3,rewards:{old:1.66,hp:2.2},vicReq:5,new:false},
  {id:'silt_shambler',name:'SILT SHAMBLER',tag:'The riverbed walks.',atk:111,def:4.9,hp:4800,count:'45%',rewards:{atk:0.49,old:1.68},vicReq:5,new:false},
  {id:'dusty_ghoul',name:'DUSTY GHOUL',tag:'Settled over decades.',atk:112,def:5.0,hp:5000,count:null,rewards:{hp:2.25,old:1.7},vicReq:5,new:false},
  {id:'hollow_shambler',name:'HOLLOW SHAMBLER',tag:'Nothing inside but hunger.',atk:114,def:5.0,hp:5200,count:'50%',rewards:{atk:0.5,old:1.72},vicReq:5,new:false},
  {id:'cursed_knight',name:'CURSED KNIGHT',tag:'The oath became a shackle.',atk:120,def:5.5,hp:5500,count:null,rewards:{atk:0.9,old:2.0,arm:0.05},vicReq:5,new:false},
  {id:'plague_archer',name:'PLAGUE ARCHER',tag:'Every arrow carries a diagnosis.',atk:130,def:5.8,hp:5800,count:3,rewards:{old:2.2,bronze:0.5},vicReq:5,new:false},
  {id:'blighted_halberdier',name:'BLIGHTED HALBERDIER',tag:'Reach and ruin combined.',atk:140,def:6.1,hp:6100,count:'12%',rewards:{atk:1.0,old:2.4,arm:0.06},vicReq:5,new:false},
  {id:'hollow_sergeant',name:'HOLLOW SERGEANT',tag:'Giving orders it cannot follow.',atk:150,def:6.4,hp:6400,count:null,rewards:{old:2.6,bronze:0.8},vicReq:5,new:false},
  {id:'rot_shaman',name:'ROT SHAMAN',tag:'Blessed by the wrong gods.',atk:160,def:6.7,hp:6700,count:2,rewards:{atk:1.1,old:2.8,arm:0.07},vicReq:5,new:false},
  {id:'ashbound_soldier',name:'ASHBOUND SOLDIER',tag:'Drafted after death.',atk:170,def:7.0,hp:7000,count:'15%',rewards:{old:3.0,bronze:1.0},vicReq:5,new:false},
  {id:'bonecage_warrior',name:'BONECAGE WARRIOR',tag:'Wears its ribs outside.',atk:180,def:7.3,hp:7300,count:null,rewards:{atk:1.2,old:3.2,arm:0.08},vicReq:5,new:false},
  {id:'gravewarden',name:'GRAVEWARDEN',tag:'Protecting the wrong side.',atk:190,def:7.6,hp:7600,count:4,rewards:{old:3.4,bronze:1.2},vicReq:5,new:false},
  {id:'fetid_executioner',name:'FETID EXECUTIONER',tag:'Justice went rancid.',atk:200,def:7.9,hp:7900,count:'18%',rewards:{atk:1.3,old:3.6,arm:0.09},vicReq:5,new:false},
  {id:'rusted_templar',name:'RUSTED TEMPLAR',tag:'Faith corroded the armor.',atk:210,def:8.2,hp:8200,count:null,rewards:{old:3.8,bronze:1.4},vicReq:5,new:false},
  {id:'ironblight_monk',name:'IRONBLIGHT MONK',tag:'Discipline turned inward, then rotten.',atk:221,def:8.5,hp:8500,count:3,rewards:{atk:1.4,old:4.0,arm:0.1},vicReq:5,new:false},
  {id:'crypt_sentinel',name:'CRYPT SENTINEL',tag:'Never told the war ended.',atk:231,def:8.8,hp:8800,count:'20%',rewards:{old:4.2,bronze:1.6},vicReq:5,new:false},
  {id:'void_hound',name:'VOID HOUND',tag:'Trained to hunt the living.',atk:241,def:9.1,hp:9100,count:null,rewards:{atk:1.5,old:4.4,arm:0.11},vicReq:5,new:false},
  {id:'soulless_pikeman',name:'SOULLESS PIKEMAN',tag:'The point is the only thing left.',atk:251,def:9.4,hp:9400,count:5,rewards:{old:4.6,bronze:1.8},vicReq:5,new:false},
  {id:'charnel_blade',name:'CHARNEL BLADE',tag:'The sword came first; the corpse second.',atk:261,def:9.7,hp:9700,count:'22%',rewards:{atk:1.6,old:4.8,arm:0.12},vicReq:5,new:false},
  {id:'flayed_scout',name:'FLAYED SCOUT',tag:'Reconnaissance at any cost.',atk:271,def:10.0,hp:10000,count:null,rewards:{old:5.0,bronze:2.0},vicReq:5,new:false},
  {id:'worm_priest',name:'WORM PRIEST',tag:'The congregation answers.',atk:282,def:10.4,hp:10300,count:2,rewards:{atk:1.7,old:5.2,arm:0.13},vicReq:5,new:false},
  {id:'ashgrave_guardian',name:'ASHGRAVE GUARDIAN',tag:'Nothing to guard. Still guarding.',atk:292,def:10.7,hp:10600,count:'25%',rewards:{old:5.4,bronze:2.2},vicReq:5,new:false},
  {id:'mournful_specter',name:'MOURNFUL SPECTER',tag:'The grief is the danger.',atk:302,def:11.0,hp:10900,count:null,rewards:{atk:1.8,old:5.6,arm:0.14},vicReq:5,new:false},
  {id:'marrow_stalker',name:'MARROW STALKER',tag:'It wants what is inside.',atk:312,def:11.3,hp:11200,count:4,rewards:{old:5.8,bronze:2.4},vicReq:5,new:false},
  {id:'duskblade_revenant',name:'DUSKBLADE REVENANT',tag:'Returned with interest.',atk:322,def:11.6,hp:11500,count:'28%',rewards:{atk:1.9,old:6.0,arm:0.15},vicReq:5,new:false},
  {id:'smoldering_footman',name:'SMOLDERING FOOTMAN',tag:'On fire. Still reporting.',atk:333,def:12.0,hp:11800,count:null,rewards:{old:6.2,bronze:2.6},vicReq:5,new:false},
  {id:'blight_ranger',name:'BLIGHT RANGER',tag:'Tracking the living.',atk:343,def:12.3,hp:12100,count:3,rewards:{atk:2.0,old:6.4,arm:0.16},vicReq:5,new:false},
  {id:'accursed_legionnaire',name:'ACCURSED LEGIONNAIRE',tag:'The legion marched on without orders.',atk:353,def:12.6,hp:12400,count:'30%',rewards:{old:6.6,bronze:2.8},vicReq:5,new:false},
  {id:'dead_eye_marksman',name:'DEAD EYE MARKSMAN',tag:'The eye was the last thing to go.',atk:363,def:12.9,hp:12700,count:null,rewards:{atk:2.1,old:6.8,arm:0.17},vicReq:5,new:false},
  {id:'tomb_warden',name:'TOMB WARDEN',tag:'The tomb is wherever it stands.',atk:373,def:13.2,hp:13000,count:5,rewards:{old:7.0,bronze:3.0},vicReq:5,new:false},
  {id:'sable_crow',name:'SABLE CROW',tag:'Circles everything it intends to ruin.',atk:383,def:13.5,hp:13300,count:'32%',rewards:{atk:2.2,old:7.2,arm:0.18},vicReq:5,new:false},
  {id:'ironrot_berserker',name:'IRONROT BERSERKER',tag:'Anger was the last thing preserved.',atk:394,def:13.9,hp:13600,count:null,rewards:{old:7.4,bronze:3.2},vicReq:5,new:false},
  {id:'plague_monk',name:'PLAGUE MONK',tag:'Spreading the doctrine.',atk:404,def:14.2,hp:13900,count:2,rewards:{atk:2.3,old:7.6,arm:0.19},vicReq:5,new:false},
  {id:'blighted_squire',name:'BLIGHTED SQUIRE',tag:'The knighthood never came.',atk:414,def:14.5,hp:14200,count:'35%',rewards:{old:7.8,bronze:3.4},vicReq:5,new:false},
  {id:'hollow_cavalier',name:'HOLLOW CAVALIER',tag:'The horse is gone. It still rides.',atk:424,def:14.8,hp:14500,count:null,rewards:{atk:2.4,old:8.0,arm:0.2},vicReq:5,new:false},
  {id:'gravebound_duelist',name:'GRAVEBOUND DUELIST',tag:'An honor bound to the wrong world.',atk:434,def:15.1,hp:14700,count:4,rewards:{old:8.2,bronze:3.6},vicReq:5,new:false},
  {id:'withered_inquisitor',name:'WITHERED INQUISITOR',tag:'The questions never stopped.',atk:445,def:15.5,hp:15000,count:'38%',rewards:{atk:2.5,old:8.4,arm:0.21},vicReq:5,new:false},
  {id:'shroud_knight',name:'SHROUD KNIGHT',tag:'The burial cloth became the armor.',atk:455,def:15.8,hp:15200,count:null,rewards:{old:8.6,bronze:3.8},vicReq:5,new:false},
  {id:'bone_arbalist',name:'BONE ARBALIST',tag:'The bolts are personal.',atk:465,def:16.1,hp:15500,count:3,rewards:{atk:2.6,old:8.8,arm:0.22},vicReq:5,new:false},
  {id:'ash_zealot',name:'ASH ZEALOT',tag:'Burned for the cause. Returned for more.',atk:475,def:16.4,hp:15700,count:'40%',rewards:{old:9.0,bronze:4.0},vicReq:5,new:false},
  {id:'saltblood_soldier',name:'SALTBLOOD SOLDIER',tag:'Preserved in spite.',atk:485,def:16.7,hp:16000,count:null,rewards:{atk:2.7,old:9.2,arm:0.23},vicReq:5,new:false},
  {id:'dread_footman',name:'DREAD FOOTMAN',tag:'The lowest rank. The worst fate.',atk:496,def:17.1,hp:16300,count:5,rewards:{old:9.4,bronze:4.2},vicReq:5,new:false},
  {id:'ruinborn_warden',name:'RUINBORN WARDEN',tag:'Made from the rubble. Guards the rubble.',atk:506,def:17.4,hp:16600,count:'42%',rewards:{atk:2.8,old:9.6,arm:0.24},vicReq:5,new:false},
  {id:'forsaken_outrider',name:'FORSAKEN OUTRIDER',tag:'Left behind on purpose.',atk:516,def:17.7,hp:16900,count:null,rewards:{old:9.8,bronze:4.4},vicReq:5,new:false},
  {id:'bonegrinder',name:'BONEGRINDER',tag:'The name is the method.',atk:800,def:35,hp:22000,count:null,rewards:{atk:5.0,arm:1.2,old:100},vicReq:5,new:false},
  {id:'voidborn_witch',name:'VOIDBORN WITCH',tag:'She came from nothing and brought it with her.',atk:850,def:36.5,hp:24000,count:'15%',rewards:{old:120,bronze:20,crc:0.08},vicReq:5,new:false},
  {id:'weeping_shade',name:'WEEPING SHADE',tag:'The sorrow is the weapon.',atk:900,def:38,hp:26000,count:2,rewards:{atk:5.5,old:140,arm:1.5},vicReq:5,new:false},
  {id:'soul_eater',name:'SOUL EATER',tag:'Efficient. Thorough. Hungry.',atk:950,def:39.5,hp:28000,count:null,rewards:{old:160,bronze:30,silver:5},vicReq:5,new:false},
  {id:'dread_colossus',name:'DREAD COLOSSUS',tag:'Too large to comprehend. Too real to ignore.',atk:1000,def:41,hp:30000,count:'18%',rewards:{atk:6.0,arm:2.0,old:180},vicReq:5,new:false},
  {id:'flesh_sculptor',name:'FLESH SCULPTOR',tag:'It has opinions about your shape.',atk:1050,def:42.5,hp:32000,count:null,rewards:{old:200,bronze:40,silver:7},vicReq:5,new:false},
  {id:'blighted_hydra',name:'BLIGHTED HYDRA',tag:'Cut one head. Grieve twice.',atk:1100,def:44,hp:34000,count:3,rewards:{atk:6.5,arm:2.5,old:220},vicReq:5,new:false},
  {id:'pale_stalker',name:'PALE STALKER',tag:'Moving only when unseen.',atk:1150,def:45.5,hp:36000,count:'20%',rewards:{old:240,bronze:50,crc:0.1},vicReq:5,new:false},
  {id:'abyssal_hound',name:'ABYSSAL HOUND',tag:'Trained in the dark for the dark.',atk:1200,def:47,hp:38000,count:null,rewards:{atk:7.0,arm:3.0,old:260},vicReq:5,new:false},
  {id:'marrow_golem',name:'MARROW GOLEM',tag:'Built from what the battlefield left over.',atk:1250,def:48.5,hp:40000,count:4,rewards:{old:280,bronze:60,silver:10},vicReq:5,new:false},
  {id:'gravemind_thrall',name:'GRAVEMIND THRALL',tag:'The grave is the mind now.',atk:1300,def:50,hp:42000,count:'22%',rewards:{atk:7.5,arm:3.5,old:300},vicReq:5,new:false},
  {id:'soulrend_fiend',name:'SOULREND FIEND',tag:'It tears at something you cannot defend.',atk:1355,def:51.5,hp:44000,count:null,rewards:{old:320,bronze:70,silver:12},vicReq:5,new:false},
  {id:'crypt_behemoth',name:'CRYPT BEHEMOTH',tag:'The crypt was built around it.',atk:1410,def:53,hp:46000,count:2,rewards:{atk:8.0,arm:4.0,old:340},vicReq:5,new:false},
  {id:'ashen_revenant',name:'ASHEN REVENANT',tag:'Burned. Returned. Angry.',atk:1465,def:54.5,hp:48000,count:'25%',rewards:{old:360,bronze:80,silver:14},vicReq:5,new:false},
  {id:'hollow_titan',name:'HOLLOW TITAN',tag:'Enormous. Nothing inside.',atk:1520,def:56,hp:50000,count:null,rewards:{atk:8.5,arm:4.5,old:380},vicReq:5,new:false},
  {id:'plague_chimera',name:'PLAGUE CHIMERA',tag:'The worst of several things.',atk:1575,def:57.5,hp:52000,count:3,rewards:{old:400,bronze:90,silver:16},vicReq:5,new:false},
  {id:'bone_leviathan',name:'BONE LEVIATHAN',tag:'It surfaces when hope fades.',atk:1630,def:59,hp:54000,count:'28%',rewards:{atk:9.0,arm:5.0,old:420},vicReq:5,new:false},
  {id:'wretched_oracle',name:'WRETCHED ORACLE',tag:'It knows. It does not care.',atk:1685,def:60.5,hp:56000,count:null,rewards:{old:440,bronze:100,silver:18},vicReq:5,new:false},
  {id:'dusk_warden',name:'DUSK WARDEN',tag:'Protecting the threshold between worlds.',atk:1740,def:62,hp:58000,count:4,rewards:{atk:9.5,arm:5.5,old:460},vicReq:5,new:false},
  {id:'voidtouched_wraith',name:'VOIDTOUCHED WRAITH',tag:'The void left fingerprints.',atk:1795,def:63.5,hp:60000,count:'30%',rewards:{old:480,bronze:110,silver:20},vicReq:5,new:false},
  {id:'ironblight_giant',name:'IRONBLIGHT GIANT',tag:'Rust and contempt made flesh.',atk:1850,def:65,hp:62000,count:null,rewards:{atk:10.0,arm:6.0,old:500},vicReq:5,new:false},
  {id:'charnel_hydra',name:'CHARNEL HYDRA',tag:'Each head remembers a different death.',atk:1905,def:66.5,hp:64000,count:2,rewards:{old:520,bronze:120,silver:22},vicReq:5,new:false},
  {id:'nightmare_shade',name:'NIGHTMARE SHADE',tag:'It is what you fear it to be.',atk:1960,def:68,hp:66000,count:'32%',rewards:{atk:10.5,arm:6.5,old:540},vicReq:5,new:false},
  {id:'graveworm_matron',name:'GRAVEWORM MATRON',tag:'Mother of what the ground produces.',atk:2015,def:69.5,hp:68000,count:null,rewards:{old:560,bronze:130,silver:24},vicReq:5,new:false},
  {id:'soul_harvester',name:'SOUL HARVESTER',tag:'Working the final field.',atk:2070,def:71,hp:70000,count:3,rewards:{atk:11.0,arm:7.0,old:580},vicReq:5,new:false},
  {id:'blighted_cyclops',name:'BLIGHTED CYCLOPS',tag:'One eye. Sees everything.',atk:2125,def:72.5,hp:72000,count:'35%',rewards:{old:600,bronze:140,silver:26},vicReq:5,new:false},
  {id:'desecrated_giant',name:'DESECRATED GIANT',tag:'The sacred made obscene.',atk:2180,def:74,hp:74000,count:null,rewards:{atk:11.5,arm:7.5,old:620},vicReq:5,new:false},
  {id:'moonblood_specter',name:'MOONBLOOD SPECTER',tag:'Lunar light brought it here.',atk:2235,def:75.5,hp:76000,count:4,rewards:{old:640,bronze:150,silver:28},vicReq:5,new:false},
  {id:'gravesinger',name:'GRAVESINGER',tag:'The song is the sentence.',atk:2290,def:77,hp:78000,count:'38%',rewards:{atk:12.0,arm:8.0,old:660},vicReq:5,new:false},
  {id:'blight_behemoth',name:'BLIGHT BEHEMOTH',tag:'Slow. Absolute.',atk:2345,def:78.5,hp:80000,count:null,rewards:{old:680,bronze:160,silver:30},vicReq:5,new:false},
  {id:'lich_sovereign',name:'LICH SOVEREIGN',tag:'Death is a promotion.',atk:2800,def:95,hp:80000,count:null,rewards:{atk:20,arm:8,old:1000,bronze:300},vicReq:5,new:false},
  {id:'ashen_seraph',name:'ASHEN SERAPH',tag:'Holy war, concluded badly.',atk:3000,def:100,hp:88000,count:'20%',rewards:{old:1200,bronze:380,silver:40},vicReq:5,new:false},
  {id:'dread_overlord',name:'DREAD OVERLORD',tag:'Command without a kingdom left.',atk:3200,def:105,hp:96000,count:4,rewards:{atk:22,arm:10,old:1400,bronze:450},vicReq:5,new:false},
  {id:'plague_archon',name:'PLAGUE ARCHON',tag:'The authority of disease.',atk:3400,def:110,hp:104000,count:null,rewards:{old:1600,bronze:520,silver:55,mxd:0.5},vicReq:5,new:false},
  {id:'voidborn_tyrant',name:'VOIDBORN TYRANT',tag:'Rulership learned from nothing.',atk:3600,def:115,hp:112000,count:'25%',rewards:{atk:25,arm:12,old:1800,bronze:600},vicReq:5,new:false},
  {id:'hollow_god_husk',name:'HOLLOW GOD-HUSK',tag:'Something divine was here.',atk:3800,def:120,hp:120000,count:null,rewards:{old:2000,bronze:680,silver:70,mxd:0.7},vicReq:5,new:false},
  {id:'soulweaver_ancient',name:'SOULWEAVER ANCIENT',tag:'It has been weaving since before you.',atk:4000,def:128,hp:128000,count:3,rewards:{atk:28,arm:14,old:2200,bronze:760},vicReq:5,new:false},
  {id:'desecrated_archangel',name:'DESECRATED ARCHANGEL',tag:'The fall was not an accident.',atk:4200,def:135,hp:136000,count:'30%',rewards:{old:2400,bronze:840,silver:85,crc:0.2},vicReq:5,new:false},
  {id:'bonelord_eternal',name:'BONELORD ETERNAL',tag:'Has not stopped since it began.',atk:4400,def:142,hp:144000,count:null,rewards:{atk:32,arm:16,old:2600,bronze:920},vicReq:5,new:false},
  {id:'maelstrom_wraith',name:'MAELSTROM WRAITH',tag:'The storm learned to hate.',atk:4600,def:149,hp:152000,count:5,rewards:{old:2800,bronze:1000,silver:100,mxd:0.9},vicReq:5,new:false},
  {id:'abyssal_monarch',name:'ABYSSAL MONARCH',tag:'Crowned in the deepest dark.',atk:4800,def:157,hp:160000,count:'35%',rewards:{atk:36,arm:18,old:3000,bronze:1100},vicReq:5,new:false},
  {id:'gravemind_elder',name:'GRAVEMIND ELDER',tag:'The oldest thought in the graveyard.',atk:5000,def:164,hp:168000,count:null,rewards:{old:3200,bronze:1200,silver:120,crc:0.3},vicReq:5,new:false},
  {id:'bloodbound_colossus',name:'BLOODBOUND COLOSSUS',tag:'Held together by a pact and old blood.',atk:5200,def:171,hp:176000,count:2,rewards:{atk:40,arm:20,old:3400,bronze:1300},vicReq:5,new:false},
  {id:'cursed_demigod',name:'CURSED DEMIGOD',tag:'Half divine, fully damned.',atk:5400,def:178,hp:184000,count:'40%',rewards:{old:3600,bronze:1400,silver:140,mxd:1.2},vicReq:5,new:false},
  {id:'pale_dominion',name:'PALE DOMINION',tag:'Sovereignty over nothing living.',atk:5600,def:185,hp:192000,count:null,rewards:{atk:44,arm:22,old:3800,bronze:1500},vicReq:5,new:false},
  {id:'hollow_primarch',name:'HOLLOW PRIMARCH',tag:'The first of a lineage of ruin.',atk:5800,def:192,hp:200000,count:4,rewards:{old:4000,bronze:1600,silver:160,crc:0.4},vicReq:5,new:false},
  {id:'forsaken_titan',name:'FORSAKEN TITAN',tag:'Abandoned by the age that made it.',atk:6000,def:200,hp:210000,count:'45%',rewards:{atk:48,arm:24,old:4200,bronze:1700},vicReq:5,new:false},
  {id:'sorrow_sovereign',name:'SORROW SOVEREIGN',tag:'Rules only what it has destroyed.',atk:6200,def:207,hp:220000,count:null,rewards:{old:4400,bronze:1800,silver:180,mxd:1.5},vicReq:5,new:false},
  {id:'shattered_deity',name:'SHATTERED DEITY',tag:'The pieces are still dangerous.',atk:6500,def:215,hp:230000,count:3,rewards:{atk:52,arm:26,old:4700,bronze:1900},vicReq:5,new:false},
  {id:'ironblight_colossus',name:'IRONBLIGHT COLOSSUS',tag:'Corroded past the point of stopping.',atk:6800,def:222,hp:240000,count:'50%',rewards:{old:5000,bronze:2000,silver:200,crc:0.5,mxd:1.8},vicReq:5,new:false},
  {id:'the_devourer',name:'THE DEVOURER',tag:'It has always been eating.',atk:8000,def:230,hp:260000,count:null,rewards:{atk:80,arm:30,old:8000,bronze:3000,silver:250},vicReq:5,new:false},
  {id:'nameless_king',name:'NAMELESS KING',tag:'The name was the last thing surrendered.',atk:9333,def:258,hp:300000,count:'30%',rewards:{old:12000,bronze:4500,silver:350,mxd:2.0,crc:0.6},vicReq:5,new:false},
  {id:'he_who_unravels',name:'HE WHO UNRAVELS',tag:'Everything comes apart near him.',atk:10667,def:285,hp:340000,count:4,rewards:{atk:110,arm:40,old:18000,bronze:6500},vicReq:5,new:false},
  {id:'throne_of_ash',name:'THRONE OF ASH',tag:'Power without a king. Worse.',atk:12000,def:313,hp:380000,count:null,rewards:{old:25000,bronze:9000,silver:500,mxd:2.5,crc:0.7},vicReq:5,new:false},
  {id:'the_pale_hunger',name:'THE PALE HUNGER',tag:'It was not born. It grew.',atk:13333,def:340,hp:400000,count:'40%',rewards:{atk:140,arm:50,old:35000,bronze:12000,silver:600},vicReq:5,new:false},
  {id:'godrot',name:'GODROT',tag:'Even gods decompose.',atk:14667,def:368,hp:430000,count:null,rewards:{old:48000,bronze:16000,silver:750,mxd:3.0,crc:0.8},vicReq:5,new:false},
  {id:'the_unfinished',name:'THE UNFINISHED',tag:'Incomplete. Unstoppable.',atk:16000,def:395,hp:460000,count:5,rewards:{atk:170,arm:60,old:65000,bronze:22000,silver:900},vicReq:5,new:false},
  {id:'womb_of_plague',name:'WOMB OF PLAGUE',tag:'The source, not the symptom.',atk:17333,def:423,hp:490000,count:null,rewards:{old:85000,bronze:30000,silver:1100,mxd:3.5,crc:0.9},vicReq:5,new:false},
  {id:'bleeding_throne',name:'BLEEDING THRONE',tag:'Sovereignty at a cost.',atk:18667,def:450,hp:500000,count:'50%',rewards:{atk:200,arm:75,old:110000,bronze:40000,silver:1300,mxd:4.0},vicReq:5,new:false},
  {id:'the_hollow_crown',name:'THE HOLLOW CROWN',tag:'All that remains of what ruled.',atk:20000,def:480,hp:550000,count:null,rewards:{atk:250,arm:100,old:150000,bronze:60000,silver:2000,mxd:5.0,crc:1.0,asp:10},vicReq:5,new:false},
];
// ═══════════════════════════════════════════════════════
// SHOP FUNCTION
// ═══════════════════════════════════════════════════════
const SHOP_ITEMS = [
  {id:'test_hp',  name:'[TEST] HP +1%',  desc:'Test upgrade hp',  effect:'HP +1%',  cost:{old:0}, statBonus:{hp:0.01},  isPct:true},
  {id:'test_atk', name:'test atk',       desc:'test upgrade atk', effect:'atk +1%', cost:{old:0}, statBonus:{atk:0.01}, isPct:true},
  {id:'test_mnd', name:'test mnd',       desc:'test upgrade mnd', effect:'mnd +1%', cost:{old:0}, statBonus:{mnd:0.01}},
  {id:'test_mxd', name:'test mxd',       desc:'test upgrade mxd', effect:'mxd +1%', cost:{old:0}, statBonus:{mxd:0.01}},
  {id:'test_spd', name:'test spd',       desc:'test upgrade spd', effect:'spd +100',cost:{old:0}, statBonus:{spd:100}},
  {id:'test_rgn', name:'test rgn',       desc:'test upgrade rgn', effect:'rgn +1%', cost:{old:0}, statBonus:{rgn:0.01}, isPct:true},
  {id:'test_ddc', name:'test ddc',       desc:'test upgrade ddc', effect:'ddc +1%', cost:{old:0}, statBonus:{ddc:0.01}},
  {id:'test_crc', name:'test crc',       desc:'test upgrade crc', effect:'crc +1%', cost:{old:0}, statBonus:{crc:0.01}},
  {id:'test_crd', name:'test crd',       desc:'test upgrade crd', effect:'crd +0.1',cost:{old:0}, statBonus:{crd:0.1}},
  {id:'test_arm', name:'test arm',       desc:'test upgrade arm', effect:'arm +1%', cost:{old:0}, statBonus:{arm:0.01}, isPct:true},
  {id:'test_mth', name:'test mth',       desc:'test upgrade mth', effect:'mth +1%', cost:{old:0}, statBonus:{mth:0.01}},
  {id:'test_acc', name:'test acc',       desc:'test upgrade acc', effect:'acc +1%', cost:{old:0}, statBonus:{acc:0.01}},
  {id:'test_blk', name:'test blk',       desc:'test upgrade blk', effect:'blk +1%', cost:{old:0}, statBonus:{blk:0.01}},
  {id:'test_bld', name:'test bld',       desc:'test upgrade bld', effect:'bld +1%', cost:{old:0}, statBonus:{bld:0.01}, isPct:true},
  {id:'test_ctr', name:'test ctr',       desc:'test upgrade ctr', effect:'ctr +1%', cost:{old:0}, statBonus:{ctr:0.01}},
];