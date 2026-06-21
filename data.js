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
  {id:'hollow_wretch',name:'HOLLOW WRETCH',
    hp:5,atk:2,mnd:0.7,mxd:1.2,spd:3000,rgn:0,ddc:0,crc:0,crd:0,arm:0,mth:0,acc:0,ctr:0,
    rewards:{atk:3,old:2},
    vicReq:2,
    img:'attached_assets/img/creature/1hollow_wretch.png'},
  {id:'plague_hound',name:'PLAGUE HOUND',
    hp:10,atk:3,mnd:0.7,mxd:1.2,spd:3000,rgn:0,ddc:0,crc:0,crd:0,arm:0,mth:0,acc:0,ctr:0,
    rewards:{hp:8,old:5},
    vicReq:2,
    img:'attached_assets/img/creature/2plague_hound.png'},
  {id:'ashwalker',name:'ASHWALKER',
    hp:15,atk:4,mnd:0.7,mxd:1.2,spd:3000,rgn:0,ddc:0,crc:0,crd:0,arm:0,mth:0,acc:0,ctr:0,
    rewards:{arm:0.5,old:10},
    vicReq:2,
    img:'attached_assets/img/creature/3ashwalker.png'},
  {id:'bonepicker',name:'BONEPICKER',
    hp:25,atk:4,mnd:0.7,mxd:1.2,spd:2500,rgn:0,ddc:0,crc:0,crd:0,arm:0,mth:0,acc:0,ctr:0,
    rewards:{atk:3,hp:8,old:20},
    vicReq:2},
    ///
  {id:'grave_rat',name:'GRAVE RAT',
    hp:20,atk:5,mnd:0.7,mxd:1.2,spd:1500,rgn:0,ddc:0,crc:0,crd:0,arm:0,mth:0,acc:0,ctr:0,
    rewards:{spd:-20,atk:2,old:10},
    vicReq:2},
  {id:'mudborn',name:'MUDBORN',
    hp:50,atk:10,mnd:0.7,mxd:1.2,spd:4000,rgn:0,ddc:0,crc:0,crd:0,arm:2,mth:0,acc:0,ctr:0,
    rewards:{atk:4,hp:12,old:12},
    vicReq:2},
  {id:'corpse_crawler',name:'CORPSE CRAWLER',
    hp:80,atk:7,mnd:0.7,mxd:1.2,spd:3000,rgn:1,ddc:0,crc:0,crd:0,arm:5,mth:0,acc:0,ctr:0,
    rewards:{arm:1,old:20},
    vicReq:2},
  {id:'rotting_serf',name:'ROTTING SERF',
    hp:60,atk:10,mnd:0.7,mxd:1.2,spd:2000,rgn:1,ddc:0,crc:0,crd:0,arm:0,mth:0,acc:0,ctr:0,
    rewards:{rgn:0.8,old:15},
    vicReq:2},
    ///
  {id:'blighted_husk',name:'BLIGHTED HUSK',
    hp:100,atk:10,mnd:0.7,mxd:1.2,spd:1500,rgn:1,ddc:0,crc:0,crd:0,arm:2,mth:0,acc:0,ctr:0,
    rewards:{hp:7,atk:4,old:25},
    vicReq:2},
  {id:'soot_fiend',name:'SOOT FIEND',
    hp:80,atk:18,mnd:0.7,mxd:1.2,spd:2500,rgn:0,ddc:0,crc:0,crd:0,arm:5,mth:0,acc:0,ctr:0,
    rewards:{atk:7,old:50},
    vicReq:2},
  {id:'wretched_thrall',name:'WRETCHED THRALL',
    hp:120,atk:22,mnd:0.7,mxd:1.2,spd:3000,rgn:0,ddc:0,crc:0,crd:0,arm:5,mth:0,acc:0,ctr:0,
    rewards:{hp:15,old:70},
    vicReq:2},
  {id:'festering_vagrant',name:'FESTERING VAGRANT',
    hp:200,atk:30,mnd:1,mxd:1.4,spd:5000,rgn:0,ddc:0,crc:0,crd:0,arm:0,mth:0,acc:0,ctr:0,
    rewards:{hp:20,atk:5,old:100},
    vicReq:2},
    ///
  {id:'hollow_eye',name:'HOLLOW EYE',
    hp:280,atk:22,mnd:1,mxd:1.4,spd:3000,rgn:0,ddc:0,crc:0,crd:0,arm:5,mth:0,acc:0,ctr:0,
    rewards:{atk:8,hp:30,old:200,bronze:10},
    vicReq:2},
  {id:'dungeon_tick',name:'DUNGEON TICK',
    hp:222,atk:22,mnd:1,mxd:1.4,spd:2222,rgn:0,ddc:0,crc:0,crd:0,arm:2.2,mth:0,acc:0,ctr:0,
    rewards:{atk:2,hp:22,arm:2,old:222,bronze:22},
    vicReq:2},
  {id:'gravel_ghoul',name:'GRAVEL GHOUL',
    hp:300,atk:25,mnd:1,mxd:1.4,spd:2500,rgn:0,ddc:0,crc:0,crd:0,arm:0,mth:0,acc:0,ctr:0,
    rewards:{atk:5,hp:20,old:400,bronze:40},
    vicReq:2},
  {id:'bile_spawn',name:'BILE SPAWN',
    hp:333,atk:33,mnd:1,mxd:1.4,spd:3333,rgn:0,ddc:0,crc:0,crd:0,arm:3.3,mth:0,acc:0,ctr:0,
    rewards:{atk:3,hp:33,arm:3,old:333,bronze:33},
    vicReq:2},
    ///
  {id:'mossrot',name:'MOSSROT',
    hp:500,atk:40,mnd:1,mxd:1.4,spd:2000,rgn:3,ddc:0.2,crc:0,crd:0,arm:10,mth:0,acc:0.2,ctr:0,
    rewards:{atk:10,old:500,bronze:50},
    vicReq:2},
  {id:'scab_crawler',name:'SCAB CRAWLER',
    hp:700,atk:60,mnd:1,mxd:1.4,spd:3000,rgn:0,ddc:0,crc:0,crd:0,arm:20,mth:0,acc:0,ctr:0,
    rewards:{hp:50,old:500,bronze:50},
    vicReq:2},
  {id:'charnel_fly',name:'CHARNEL FLY',
    hp:1000,atk:35,mnd:1,mxd:1.4,spd:1800,rgn:10,ddc:0,crc:0,crd:0,arm:10,mth:0,acc:0,ctr:0,
    rewards:{rgn:2,old:1000,bronze:100},
    vicReq:2},
  {id:'skinless_beggar',name:'SKINLESS BEGGAR',
    hp:1500,atk:150,mnd:1,mxd:1,spd:9000,rgn:0,ddc:0,crc:0,crd:0,arm:0,mth:0.2,acc:0,ctr:0,
    rewards:{atk:20,old:2000,bronze:200},
    vicReq:2},
    ///
  {id:'weeping_hollow',name:'WEEPING HOLLOW',
    hp:2200,atk:60,mnd:1,mxd:1.6,spd:2700,rgn:0,ddc:0,crc:0,crd:0,arm:50,mth:0,acc:0,ctr:0,
    rewards:{hp:30,atk:5,old:2500,bronze:500},
    vicReq:2},
  {id:'maggot_knight',name:'MAGGOT KNIGHT',
    hp:3000,atk:40,mnd:1,mxd:1,spd:1000,rgn:0,ddc:0,crc:0.2,crd:2,arm:0,mth:0,acc:0,ctr:0,
    rewards:{atk:30,old:3000,bronze:700},
    vicReq:2},
  {id:'cinder_wretch',name:'CINDER WRETCH',
    hp:6000,atk:60,mnd:1,mxd:1.6,spd:6000,rgn:60,ddc:0,crc:0,crd:0,arm:0,mth:0,acc:0,ctr:0.6,
    rewards:{hp:66,old:6666,bronze:666},
    vicReq:2},
  {id:'sallow_shade',name:'SALLOW SHADE',
    hp:4000,atk:100,mnd:1,mxd:1.6,spd:4000,rgn:0,ddc:0.3,crc:0,crd:0,arm:0,mth:0,acc:0,ctr:0,
    rewards:{atk:50,old:5000,bronze:1000},
    vicReq:2},
    ///
  {id:'mud_ghoul',name:'MUD GHOUL',
    hp:1700,atk:32,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:2.3,mth:0,acc:0,ctr:0,
    rewards:{old:0.62,hp:0.9},
    vicReq:2},
  {id:'bonegnaw',name:'BONEGNAW',
    hp:1750,atk:33,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:2.3,mth:0,acc:0,ctr:0,
    rewards:{atk:0.23,old:0.64},
    vicReq:2},
  {id:'ashen_tramp',name:'ASHEN TRAMP',
    hp:1800,atk:34,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:2.4,mth:0,acc:0,ctr:0,
    rewards:{hp:0.95,old:0.66},
    vicReq:2},
  {id:'foul_creeper',name:'FOUL CREEPER',
    hp:1850,atk:36,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:2.4,mth:0,acc:0,ctr:0,
    rewards:{atk:0.24,old:0.68},
    vicReq:2},
  {id:'plague_bearer',name:'PLAGUE BEARER',
    hp:1900,atk:37,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:2.5,mth:0,acc:0,ctr:0,
    rewards:{old:0.7,hp:1.0},
    vicReq:2},
  {id:'tallow_shade',name:'TALLOW SHADE',
    hp:1950,atk:39,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:2.5,mth:0,acc:0,ctr:0,
    rewards:{atk:0.25,old:0.72},
    vicReq:2},
  {id:'rot_worm',name:'ROT WORM',
    hp:2000,atk:40,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:2.6,mth:0,acc:0,ctr:0,
    rewards:{hp:1.05,old:0.74},
    vicReq:2},
  {id:'filth_shambler',name:'FILTH SHAMBLER',
    hp:2050,atk:42,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:2.6,mth:0,acc:0,ctr:0,
    rewards:{atk:0.26,old:0.76},
    vicReq:2},
  {id:'corpse_leech',name:'CORPSE LEECH',
    hp:2100,atk:43,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:2.7,mth:0,acc:0,ctr:0,
    rewards:{old:0.78,hp:1.1},
    vicReq:2},
  {id:'bleached_lurker',name:'BLEACHED LURKER',
    hp:2150,atk:45,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:2.7,mth:0,acc:0,ctr:0,
    rewards:{atk:0.27,old:0.8},
    vicReq:2},
  {id:'grave_digger',name:'GRAVE DIGGER',
    hp:2200,atk:46,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:2.8,mth:0,acc:0,ctr:0,
    rewards:{hp:1.15,old:0.82},
    vicReq:2},
  {id:'putrid_wisp',name:'PUTRID WISP',
    hp:2250,atk:48,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:2.8,mth:0,acc:0,ctr:0,
    rewards:{atk:0.28,old:0.84},
    vicReq:2},
  {id:'wailing_husk',name:'WAILING HUSK',
    hp:2300,atk:49,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:2.9,mth:0,acc:0,ctr:0,
    rewards:{old:0.86,hp:1.2},
    vicReq:2},
  {id:'dustbone',name:'DUSTBONE',
    hp:2350,atk:51,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:2.9,mth:0,acc:0,ctr:0,
    rewards:{atk:0.29,old:0.88},
    vicReq:2},
  {id:'sludge_spawn',name:'SLUDGE SPAWN',
    hp:2400,atk:52,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:3.0,mth:0,acc:0,ctr:0,
    rewards:{hp:1.25,old:0.9},
    vicReq:2},
  {id:'tomb_rat',name:'TOMB RAT',
    hp:2450,atk:54,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:3.0,mth:0,acc:0,ctr:0,
    rewards:{atk:0.3,old:0.92},
    vicReq:2},
  {id:'cracked_skull',name:'CRACKED SKULL',
    hp:2500,atk:55,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:3.1,mth:0,acc:0,ctr:0,
    rewards:{old:0.94,hp:1.3},
    vicReq:2},
  {id:'pale_shambler',name:'PALE SHAMBLER',
    hp:2550,atk:57,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:3.1,mth:0,acc:0,ctr:0,
    rewards:{atk:0.31,old:0.96},
    vicReq:2},
  {id:'rotfen_cur',name:'ROTFEN CUR',
    hp:2600,atk:58,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:3.2,mth:0,acc:0,ctr:0,
    rewards:{hp:1.35,old:0.98},
    vicReq:2},
  {id:'ash_crawler',name:'ASH CRAWLER',
    hp:2650,atk:60,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:3.2,mth:0,acc:0,ctr:0,
    rewards:{atk:0.32,old:1.0},
    vicReq:2},
  {id:'bonedust_wretch',name:'BONEDUST WRETCH',
    hp:2700,atk:61,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:3.3,mth:0,acc:0,ctr:0,
    rewards:{old:1.02,hp:1.4},
    vicReq:2},
  {id:'famine_shade',name:'FAMINE SHADE',
    hp:2750,atk:63,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:3.3,mth:0,acc:0,ctr:0,
    rewards:{atk:0.33,old:1.04},
    vicReq:2},
  {id:'cobweb_ghoul',name:'COBWEB GHOUL',
    hp:2800,atk:64,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:3.4,mth:0,acc:0,ctr:0,
    rewards:{hp:1.45,old:1.06},
    vicReq:2},
  {id:'soot_crawler',name:'SOOT CRAWLER',
    hp:2850,atk:66,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:3.4,mth:0,acc:0,ctr:0,
    rewards:{atk:0.34,old:1.08},
    vicReq:2},
  {id:'charred_beggar',name:'CHARRED BEGGAR',
    hp:2900,atk:67,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:3.5,mth:0,acc:0,ctr:0,
    rewards:{old:1.1,hp:1.5},
    vicReq:2},
  {id:'hollow_pup',name:'HOLLOW PUP',
    hp:2950,atk:69,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:3.5,mth:0,acc:0,ctr:0,
    rewards:{atk:0.35,old:1.12},
    vicReq:2},
  {id:'mire_fiend',name:'MIRE FIEND',
    hp:3000,atk:70,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:3.6,mth:0,acc:0,ctr:0,
    rewards:{hp:1.55,old:1.14},
    vicReq:2},
  {id:'ditch_ghoul',name:'DITCH GHOUL',
    hp:3050,atk:72,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:3.6,mth:0,acc:0,ctr:0,
    rewards:{atk:0.36,old:1.16},
    vicReq:2},
  {id:'scorch_wretch',name:'SCORCH WRETCH',
    hp:3100,atk:73,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:3.7,mth:0,acc:0,ctr:0,
    rewards:{old:1.18,hp:1.6},
    vicReq:2},
  {id:'festering_hound',name:'FESTERING HOUND',
    hp:3150,atk:75,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:3.7,mth:0,acc:0,ctr:0,
    rewards:{atk:0.37,old:1.2},
    vicReq:2},
  {id:'gutter_shade',name:'GUTTER SHADE',
    hp:3200,atk:76,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:3.8,mth:0,acc:0,ctr:0,
    rewards:{hp:1.65,old:1.22},
    vicReq:2},
  {id:'bog_lurker',name:'BOG LURKER',
    hp:3250,atk:78,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:3.8,mth:0,acc:0,ctr:0,
    rewards:{atk:0.38,old:1.24},
    vicReq:2},
  {id:'cinder_rat',name:'CINDER RAT',
    hp:3300,atk:79,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:3.9,mth:0,acc:0,ctr:0,
    rewards:{old:1.26,hp:1.7},
    vicReq:2},
  {id:'dried_husk',name:'DRIED HUSK',
    hp:3350,atk:81,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:3.9,mth:0,acc:0,ctr:0,
    rewards:{atk:0.39,old:1.28},
    vicReq:2},
  {id:'brackish_spawn',name:'BRACKISH SPAWN',
    hp:3400,atk:82,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:4.0,mth:0,acc:0,ctr:0,
    rewards:{hp:1.75,old:1.3},
    vicReq:2},
  {id:'sunken_wretch',name:'SUNKEN WRETCH',
    hp:3450,atk:84,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:4.0,mth:0,acc:0,ctr:0,
    rewards:{atk:0.4,old:1.32},
    vicReq:2},
  {id:'tallow_ghoul',name:'TALLOW GHOUL',
    hp:3500,atk:85,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:4.1,mth:0,acc:0,ctr:0,
    rewards:{old:1.34,hp:1.8},
    vicReq:2},
  {id:'blister_fiend',name:'BLISTER FIEND',
    hp:3550,atk:87,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:4.1,mth:0,acc:0,ctr:0,
    rewards:{atk:0.41,old:1.36},
    vicReq:2},
  {id:'gravel_rat',name:'GRAVEL RAT',
    hp:3600,atk:88,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:4.2,mth:0,acc:0,ctr:0,
    rewards:{hp:1.85,old:1.38},
    vicReq:2},
  {id:'mudwater_shade',name:'MUDWATER SHADE',
    hp:3650,atk:90,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:4.2,mth:0,acc:0,ctr:0,
    rewards:{atk:0.42,old:1.4},
    vicReq:2},
  {id:'pale_crawler',name:'PALE CRAWLER',
    hp:3700,atk:91,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:4.3,mth:0,acc:0,ctr:0,
    rewards:{old:1.42,hp:1.9},
    vicReq:2},
  {id:'crumbling_thrall',name:'CRUMBLING THRALL',
    hp:3750,atk:93,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:4.3,mth:0,acc:0,ctr:0,
    rewards:{atk:0.43,old:1.44},
    vicReq:2},
  {id:'fen_ghoul',name:'FEN GHOUL',
    hp:3800,atk:94,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:4.4,mth:0,acc:0,ctr:0,
    rewards:{hp:1.95,old:1.46},
    vicReq:2},
  {id:'ashen_cur',name:'ASHEN CUR',
    hp:3850,atk:96,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:4.4,mth:0,acc:0,ctr:0,
    rewards:{atk:0.44,old:1.48},
    vicReq:2},
  {id:'charnel_rat',name:'CHARNEL RAT',
    hp:3900,atk:97,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:4.5,mth:0,acc:0,ctr:0,
    rewards:{old:1.5,hp:2.0},
    vicReq:2},
  {id:'bone_fly',name:'BONE FLY',
    hp:3950,atk:99,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:4.5,mth:0,acc:0,ctr:0,
    rewards:{atk:0.45,old:1.52},
    vicReq:2},
  {id:'sour_shade',name:'SOUR SHADE',
    hp:4000,atk:100,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:4.6,mth:0,acc:0,ctr:0,
    rewards:{hp:2.05,old:1.54},
    vicReq:2},
  {id:'rot_pup',name:'ROT PUP',
    hp:4100,atk:102,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:4.6,mth:0,acc:0,ctr:0,
    rewards:{atk:0.46,old:1.56},
    vicReq:2},
  {id:'crypt_tick',name:'CRYPT TICK',
    hp:4200,atk:103,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:4.7,mth:0,acc:0,ctr:0,
    rewards:{old:1.58,hp:2.1},
    vicReq:2},
  {id:'damp_husk',name:'DAMP HUSK',
    hp:4300,atk:105,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:4.7,mth:0,acc:0,ctr:0,
    rewards:{atk:0.47,old:1.6},
    vicReq:2},
  {id:'scab_fiend',name:'SCAB FIEND',
    hp:4400,atk:106,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:4.8,mth:0,acc:0,ctr:0,
    rewards:{hp:2.15,old:1.62},
    vicReq:2},
  {id:'hollow_stray',name:'HOLLOW STRAY',
    hp:4500,atk:108,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:4.8,mth:0,acc:0,ctr:0,
    rewards:{atk:0.48,old:1.64},
    vicReq:2},
  {id:'cobweb_wretch',name:'COBWEB WRETCH',
    hp:4600,atk:109,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:4.9,mth:0,acc:0,ctr:0,
    rewards:{old:1.66,hp:2.2},
    vicReq:2},
  {id:'silt_shambler',name:'SILT SHAMBLER',
    hp:4800,atk:111,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:4.9,mth:0,acc:0,ctr:0,
    rewards:{atk:0.49,old:1.68},
    vicReq:2},
  {id:'dusty_ghoul',name:'DUSTY GHOUL',
    hp:5000,atk:112,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:5.0,mth:0,acc:0,ctr:0,
    rewards:{hp:2.25,old:1.7},
    vicReq:2},
  {id:'hollow_shambler',name:'HOLLOW SHAMBLER',
    hp:5200,atk:114,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:5.0,mth:0,acc:0,ctr:0,
    rewards:{atk:0.5,old:1.72},
    vicReq:2},
  {id:'cursed_knight',name:'CURSED KNIGHT',
    hp:5500,atk:120,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:5.5,mth:0,acc:0,ctr:0,
    rewards:{atk:0.9,old:2.0,arm:0.05},
    vicReq:2},
  {id:'plague_archer',name:'PLAGUE ARCHER',
    hp:5800,atk:130,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:5.8,mth:0,acc:0,ctr:0,
    rewards:{old:2.2,bronze:0.5},
    vicReq:2},
  {id:'blighted_halberdier',name:'BLIGHTED HALBERDIER',
    hp:6100,atk:140,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:6.1,mth:0,acc:0,ctr:0,
    rewards:{atk:1.0,old:2.4,arm:0.06},
    vicReq:2},
  {id:'hollow_sergeant',name:'HOLLOW SERGEANT',
    hp:6400,atk:150,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:6.4,mth:0,acc:0,ctr:0,
    rewards:{old:2.6,bronze:0.8},
    vicReq:2},
  {id:'rot_shaman',name:'ROT SHAMAN',
    hp:6700,atk:160,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:6.7,mth:0,acc:0,ctr:0,
    rewards:{atk:1.1,old:2.8,arm:0.07},
    vicReq:2},
  {id:'ashbound_soldier',name:'ASHBOUND SOLDIER',
    hp:7000,atk:170,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:7.0,mth:0,acc:0,ctr:0,
    rewards:{old:3.0,bronze:1.0},
    vicReq:2},
  {id:'bonecage_warrior',name:'BONECAGE WARRIOR',
    hp:7300,atk:180,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:7.3,mth:0,acc:0,ctr:0,
    rewards:{atk:1.2,old:3.2,arm:0.08},
    vicReq:2},
  {id:'gravewarden',name:'GRAVEWARDEN',
    hp:7600,atk:190,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:7.6,mth:0,acc:0,ctr:0,
    rewards:{old:3.4,bronze:1.2},
    vicReq:2},
  {id:'fetid_executioner',name:'FETID EXECUTIONER',
    hp:7900,atk:200,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:7.9,mth:0,acc:0,ctr:0,
    rewards:{atk:1.3,old:3.6,arm:0.09},
    vicReq:2},
  {id:'rusted_templar',name:'RUSTED TEMPLAR',
    hp:8200,atk:210,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:8.2,mth:0,acc:0,ctr:0,
    rewards:{old:3.8,bronze:1.4},
    vicReq:2},
  {id:'ironblight_monk',name:'IRONBLIGHT MONK',
    hp:8500,atk:221,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:8.5,mth:0,acc:0,ctr:0,
    rewards:{atk:1.4,old:4.0,arm:0.1},
    vicReq:2},
  {id:'crypt_sentinel',name:'CRYPT SENTINEL',
    hp:8800,atk:231,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:8.8,mth:0,acc:0,ctr:0,
    rewards:{old:4.2,bronze:1.6},
    vicReq:2},
  {id:'void_hound',name:'VOID HOUND',
    hp:9100,atk:241,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:9.1,mth:0,acc:0,ctr:0,
    rewards:{atk:1.5,old:4.4,arm:0.11},
    vicReq:2},
  {id:'soulless_pikeman',name:'SOULLESS PIKEMAN',
    hp:9400,atk:251,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:9.4,mth:0,acc:0,ctr:0,
    rewards:{old:4.6,bronze:1.8},
    vicReq:2},
  {id:'charnel_blade',name:'CHARNEL BLADE',
    hp:9700,atk:261,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:9.7,mth:0,acc:0,ctr:0,
    rewards:{atk:1.6,old:4.8,arm:0.12},
    vicReq:2},
  {id:'flayed_scout',name:'FLAYED SCOUT',
    hp:10000,atk:271,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:10.0,mth:0,acc:0,ctr:0,
    rewards:{old:5.0,bronze:2.0},
    vicReq:2},
  {id:'worm_priest',name:'WORM PRIEST',
    hp:10300,atk:282,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:10.4,mth:0,acc:0,ctr:0,
    rewards:{atk:1.7,old:5.2,arm:0.13},
    vicReq:2},
  {id:'ashgrave_guardian',name:'ASHGRAVE GUARDIAN',
    hp:10600,atk:292,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:10.7,mth:0,acc:0,ctr:0,
    rewards:{old:5.4,bronze:2.2},
    vicReq:2},
  {id:'mournful_specter',name:'MOURNFUL SPECTER',
    hp:10900,atk:302,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:11.0,mth:0,acc:0,ctr:0,
    rewards:{atk:1.8,old:5.6,arm:0.14},
    vicReq:2},
  {id:'marrow_stalker',name:'MARROW STALKER',
    hp:11200,atk:312,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:11.3,mth:0,acc:0,ctr:0,
    rewards:{old:5.8,bronze:2.4},
    vicReq:2},
  {id:'duskblade_revenant',name:'DUSKBLADE REVENANT',
    hp:11500,atk:322,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:11.6,mth:0,acc:0,ctr:0,
    rewards:{atk:1.9,old:6.0,arm:0.15},
    vicReq:2},
  {id:'smoldering_footman',name:'SMOLDERING FOOTMAN',
    hp:11800,atk:333,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:12.0,mth:0,acc:0,ctr:0,
    rewards:{old:6.2,bronze:2.6},
    vicReq:2},
  {id:'blight_ranger',name:'BLIGHT RANGER',
    hp:12100,atk:343,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:12.3,mth:0,acc:0,ctr:0,
    rewards:{atk:2.0,old:6.4,arm:0.16},
    vicReq:2},
  {id:'accursed_legionnaire',name:'ACCURSED LEGIONNAIRE',
    hp:12400,atk:353,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:12.6,mth:0,acc:0,ctr:0,
    rewards:{old:6.6,bronze:2.8},
    vicReq:2},
  {id:'dead_eye_marksman',name:'DEAD EYE MARKSMAN',
    hp:12700,atk:363,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:12.9,mth:0,acc:0,ctr:0,
    rewards:{atk:2.1,old:6.8,arm:0.17},
    vicReq:2},
  {id:'tomb_warden',name:'TOMB WARDEN',
    hp:13000,atk:373,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:13.2,mth:0,acc:0,ctr:0,
    rewards:{old:7.0,bronze:3.0},
    vicReq:2},
  {id:'sable_crow',name:'SABLE CROW',
    hp:13300,atk:383,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:13.5,mth:0,acc:0,ctr:0,
    rewards:{atk:2.2,old:7.2,arm:0.18},
    vicReq:2},
  {id:'ironrot_berserker',name:'IRONROT BERSERKER',
    hp:13600,atk:394,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:13.9,mth:0,acc:0,ctr:0,
    rewards:{old:7.4,bronze:3.2},
    vicReq:2},
  {id:'plague_monk',name:'PLAGUE MONK',
    hp:13900,atk:404,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:14.2,mth:0,acc:0,ctr:0,
    rewards:{atk:2.3,old:7.6,arm:0.19},
    vicReq:2},
  {id:'blighted_squire',name:'BLIGHTED SQUIRE',
    hp:14200,atk:414,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:14.5,mth:0,acc:0,ctr:0,
    rewards:{old:7.8,bronze:3.4},
    vicReq:2},
  {id:'hollow_cavalier',name:'HOLLOW CAVALIER',
    hp:14500,atk:424,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:14.8,mth:0,acc:0,ctr:0,
    rewards:{atk:2.4,old:8.0,arm:0.2},
    vicReq:2},
  {id:'gravebound_duelist',name:'GRAVEBOUND DUELIST',
    hp:14700,atk:434,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:15.1,mth:0,acc:0,ctr:0,
    rewards:{old:8.2,bronze:3.6},
    vicReq:2},
  {id:'withered_inquisitor',name:'WITHERED INQUISITOR',
    hp:15000,atk:445,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:15.5,mth:0,acc:0,ctr:0,
    rewards:{atk:2.5,old:8.4,arm:0.21},
    vicReq:2},
  {id:'shroud_knight',name:'SHROUD KNIGHT',
    hp:15200,atk:455,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:15.8,mth:0,acc:0,ctr:0,
    rewards:{old:8.6,bronze:3.8},
    vicReq:2},
  {id:'bone_arbalist',name:'BONE ARBALIST',
    hp:15500,atk:465,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:16.1,mth:0,acc:0,ctr:0,
    rewards:{atk:2.6,old:8.8,arm:0.22},
    vicReq:2},
  {id:'ash_zealot',name:'ASH ZEALOT',
    hp:15700,atk:475,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:16.4,mth:0,acc:0,ctr:0,
    rewards:{old:9.0,bronze:4.0},
    vicReq:2},
  {id:'saltblood_soldier',name:'SALTBLOOD SOLDIER',
    hp:16000,atk:485,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:16.7,mth:0,acc:0,ctr:0,
    rewards:{atk:2.7,old:9.2,arm:0.23},
    vicReq:2},
  {id:'dread_footman',name:'DREAD FOOTMAN',
    hp:16300,atk:496,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:17.1,mth:0,acc:0,ctr:0,
    rewards:{old:9.4,bronze:4.2},
    vicReq:2},
  {id:'ruinborn_warden',name:'RUINBORN WARDEN',
    hp:16600,atk:506,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:17.4,mth:0,acc:0,ctr:0,
    rewards:{atk:2.8,old:9.6,arm:0.24},
    vicReq:2},
  {id:'forsaken_outrider',name:'FORSAKEN OUTRIDER',
    hp:16900,atk:516,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:17.7,mth:0,acc:0,ctr:0,
    rewards:{old:9.8,bronze:4.4},
    vicReq:2},
  {id:'bonegrinder',name:'BONEGRINDER',
    hp:22000,atk:800,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:35,mth:0,acc:0,ctr:0,
    rewards:{atk:5.0,arm:1.2,old:100},
    vicReq:2},
  {id:'voidborn_witch',name:'VOIDBORN WITCH',
    hp:24000,atk:850,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:36.5,mth:0,acc:0,ctr:0,
    rewards:{old:120,bronze:20,crc:0.08},
    vicReq:2},
  {id:'weeping_shade',name:'WEEPING SHADE',
    hp:26000,atk:900,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:38,mth:0,acc:0,ctr:0,
    rewards:{atk:5.5,old:140,arm:1.5},
    vicReq:2},
  {id:'soul_eater',name:'SOUL EATER',
    hp:28000,atk:950,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:39.5,mth:0,acc:0,ctr:0,
    rewards:{old:160,bronze:30,silver:5},
    vicReq:2},
  {id:'dread_colossus',name:'DREAD COLOSSUS',
    hp:30000,atk:1000,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:41,mth:0,acc:0,ctr:0,
    rewards:{atk:6.0,arm:2.0,old:180},
    vicReq:2},
  {id:'flesh_sculptor',name:'FLESH SCULPTOR',
    hp:32000,atk:1050,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:42.5,mth:0,acc:0,ctr:0,
    rewards:{old:200,bronze:40,silver:7},
    vicReq:2},
  {id:'blighted_hydra',name:'BLIGHTED HYDRA',
    hp:34000,atk:1100,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:44,mth:0,acc:0,ctr:0,
    rewards:{atk:6.5,arm:2.5,old:220},
    vicReq:2},
  {id:'pale_stalker',name:'PALE STALKER',
    hp:36000,atk:1150,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:45.5,mth:0,acc:0,ctr:0,
    rewards:{old:240,bronze:50,crc:0.1},
    vicReq:2},
  {id:'abyssal_hound',name:'ABYSSAL HOUND',
    hp:38000,atk:1200,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:47,mth:0,acc:0,ctr:0,
    rewards:{atk:7.0,arm:3.0,old:260},
    vicReq:2},
  {id:'marrow_golem',name:'MARROW GOLEM',
    hp:40000,atk:1250,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:48.5,mth:0,acc:0,ctr:0,
    rewards:{old:280,bronze:60,silver:10},
    vicReq:2},
  {id:'gravemind_thrall',name:'GRAVEMIND THRALL',
    hp:42000,atk:1300,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:50,mth:0,acc:0,ctr:0,
    rewards:{atk:7.5,arm:3.5,old:300},
    vicReq:2},
  {id:'soulrend_fiend',name:'SOULREND FIEND',
    hp:44000,atk:1355,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:51.5,mth:0,acc:0,ctr:0,
    rewards:{old:320,bronze:70,silver:12},
    vicReq:2},
  {id:'crypt_behemoth',name:'CRYPT BEHEMOTH',
    hp:46000,atk:1410,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:53,mth:0,acc:0,ctr:0,
    rewards:{atk:8.0,arm:4.0,old:340},
    vicReq:2},
  {id:'ashen_revenant',name:'ASHEN REVENANT',
    hp:48000,atk:1465,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:54.5,mth:0,acc:0,ctr:0,
    rewards:{old:360,bronze:80,silver:14},
    vicReq:2},
  {id:'hollow_titan',name:'HOLLOW TITAN',
    hp:50000,atk:1520,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:56,mth:0,acc:0,ctr:0,
    rewards:{atk:8.5,arm:4.5,old:380},
    vicReq:2},
  {id:'plague_chimera',name:'PLAGUE CHIMERA',
    hp:52000,atk:1575,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:57.5,mth:0,acc:0,ctr:0,
    rewards:{old:400,bronze:90,silver:16},
    vicReq:2},
  {id:'bone_leviathan',name:'BONE LEVIATHAN',
    hp:54000,atk:1630,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:59,mth:0,acc:0,ctr:0,
    rewards:{atk:9.0,arm:5.0,old:420},
    vicReq:2},
  {id:'wretched_oracle',name:'WRETCHED ORACLE',
    hp:56000,atk:1685,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:60.5,mth:0,acc:0,ctr:0,
    rewards:{old:440,bronze:100,silver:18},
    vicReq:2},
  {id:'dusk_warden',name:'DUSK WARDEN',
    hp:58000,atk:1740,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:62,mth:0,acc:0,ctr:0,
    rewards:{atk:9.5,arm:5.5,old:460},
    vicReq:2},
  {id:'voidtouched_wraith',name:'VOIDTOUCHED WRAITH',
    hp:60000,atk:1795,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:63.5,mth:0,acc:0,ctr:0,
    rewards:{old:480,bronze:110,silver:20},
    vicReq:2},
  {id:'ironblight_giant',name:'IRONBLIGHT GIANT',
    hp:62000,atk:1850,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:65,mth:0,acc:0,ctr:0,
    rewards:{atk:10.0,arm:6.0,old:500},
    vicReq:2},
  {id:'charnel_hydra',name:'CHARNEL HYDRA',
    hp:64000,atk:1905,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:66.5,mth:0,acc:0,ctr:0,
    rewards:{old:520,bronze:120,silver:22},
    vicReq:2},
  {id:'nightmare_shade',name:'NIGHTMARE SHADE',
    hp:66000,atk:1960,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:68,mth:0,acc:0,ctr:0,
    rewards:{atk:10.5,arm:6.5,old:540},
    vicReq:2},
  {id:'graveworm_matron',name:'GRAVEWORM MATRON',
    hp:68000,atk:2015,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:69.5,mth:0,acc:0,ctr:0,
    rewards:{old:560,bronze:130,silver:24},
    vicReq:2},
  {id:'soul_harvester',name:'SOUL HARVESTER',
    hp:70000,atk:2070,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:71,mth:0,acc:0,ctr:0,
    rewards:{atk:11.0,arm:7.0,old:580},
    vicReq:2},
  {id:'blighted_cyclops',name:'BLIGHTED CYCLOPS',
    hp:72000,atk:2125,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:72.5,mth:0,acc:0,ctr:0,
    rewards:{old:600,bronze:140,silver:26},
    vicReq:2},
  {id:'desecrated_giant',name:'DESECRATED GIANT',
    hp:74000,atk:2180,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:74,mth:0,acc:0,ctr:0,
    rewards:{atk:11.5,arm:7.5,old:620},
    vicReq:2},
  {id:'moonblood_specter',name:'MOONBLOOD SPECTER',
    hp:76000,atk:2235,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:75.5,mth:0,acc:0,ctr:0,
    rewards:{old:640,bronze:150,silver:28},
    vicReq:2},
  {id:'gravesinger',name:'GRAVESINGER',
    hp:78000,atk:2290,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:77,mth:0,acc:0,ctr:0,
    rewards:{atk:12.0,arm:8.0,old:660},
    vicReq:2},
  {id:'blight_behemoth',name:'BLIGHT BEHEMOTH',
    hp:80000,atk:2345,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:78.5,mth:0,acc:0,ctr:0,
    rewards:{old:680,bronze:160,silver:30},
    vicReq:2},
  {id:'lich_sovereign',name:'LICH SOVEREIGN',
    hp:80000,atk:2800,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:95,mth:0,acc:0,ctr:0,
    rewards:{atk:20,arm:8,old:1000,bronze:300},
    vicReq:2},
  {id:'ashen_seraph',name:'ASHEN SERAPH',
    hp:88000,atk:3000,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:100,mth:0,acc:0,ctr:0,
    rewards:{old:1200,bronze:380,silver:40},
    vicReq:2},
  {id:'dread_overlord',name:'DREAD OVERLORD',
    hp:96000,atk:3200,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:105,mth:0,acc:0,ctr:0,
    rewards:{atk:22,arm:10,old:1400,bronze:450},
    vicReq:2},
  {id:'plague_archon',name:'PLAGUE ARCHON',
    hp:104000,atk:3400,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:110,mth:0,acc:0,ctr:0,
    rewards:{old:1600,bronze:520,silver:55,mxd:0.5},
    vicReq:2},
  {id:'voidborn_tyrant',name:'VOIDBORN TYRANT',
    hp:112000,atk:3600,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:115,mth:0,acc:0,ctr:0,
    rewards:{atk:25,arm:12,old:1800,bronze:600},
    vicReq:2},
  {id:'hollow_god_husk',name:'HOLLOW GOD-HUSK',
    hp:120000,atk:3800,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:120,mth:0,acc:0,ctr:0,
    rewards:{old:2000,bronze:680,silver:70,mxd:0.7},
    vicReq:2},
  {id:'soulweaver_ancient',name:'SOULWEAVER ANCIENT',
    hp:128000,atk:4000,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:128,mth:0,acc:0,ctr:0,
    rewards:{atk:28,arm:14,old:2200,bronze:760},
    vicReq:2},
  {id:'desecrated_archangel',name:'DESECRATED ARCHANGEL',
    hp:136000,atk:4200,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:135,mth:0,acc:0,ctr:0,
    rewards:{old:2400,bronze:840,silver:85,crc:0.2},
    vicReq:2},
  {id:'bonelord_eternal',name:'BONELORD ETERNAL',
    hp:144000,atk:4400,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:142,mth:0,acc:0,ctr:0,
    rewards:{atk:32,arm:16,old:2600,bronze:920},
    vicReq:2},
  {id:'maelstrom_wraith',name:'MAELSTROM WRAITH',
    hp:152000,atk:4600,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:149,mth:0,acc:0,ctr:0,
    rewards:{old:2800,bronze:1000,silver:100,mxd:0.9},
    vicReq:2},
  {id:'abyssal_monarch',name:'ABYSSAL MONARCH',
    hp:160000,atk:4800,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:157,mth:0,acc:0,ctr:0,
    rewards:{atk:36,arm:18,old:3000,bronze:1100},
    vicReq:2},
  {id:'gravemind_elder',name:'GRAVEMIND ELDER',
    hp:168000,atk:5000,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:164,mth:0,acc:0,ctr:0,
    rewards:{old:3200,bronze:1200,silver:120,crc:0.3},
    vicReq:2},
  {id:'bloodbound_colossus',name:'BLOODBOUND COLOSSUS',
    hp:176000,atk:5200,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:171,mth:0,acc:0,ctr:0,
    rewards:{atk:40,arm:20,old:3400,bronze:1300},
    vicReq:2},
  {id:'cursed_demigod',name:'CURSED DEMIGOD',
    hp:184000,atk:5400,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:178,mth:0,acc:0,ctr:0,
    rewards:{old:3600,bronze:1400,silver:140,mxd:1.2},
    vicReq:2},
  {id:'pale_dominion',name:'PALE DOMINION',
    hp:192000,atk:5600,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:185,mth:0,acc:0,ctr:0,
    rewards:{atk:44,arm:22,old:3800,bronze:1500},
    vicReq:2},
  {id:'hollow_primarch',name:'HOLLOW PRIMARCH',
    hp:200000,atk:5800,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:192,mth:0,acc:0,ctr:0,
    rewards:{old:4000,bronze:1600,silver:160,crc:0.4},
    vicReq:2},
  {id:'forsaken_titan',name:'FORSAKEN TITAN',
    hp:210000,atk:6000,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:200,mth:0,acc:0,ctr:0,
    rewards:{atk:48,arm:24,old:4200,bronze:1700},
    vicReq:2},
  {id:'sorrow_sovereign',name:'SORROW SOVEREIGN',
    hp:220000,atk:6200,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:207,mth:0,acc:0,ctr:0,
    rewards:{old:4400,bronze:1800,silver:180,mxd:1.5},
    vicReq:2},
  {id:'shattered_deity',name:'SHATTERED DEITY',
    hp:230000,atk:6500,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:215,mth:0,acc:0,ctr:0,
    rewards:{atk:52,arm:26,old:4700,bronze:1900},
    vicReq:2},
  {id:'ironblight_colossus',name:'IRONBLIGHT COLOSSUS',
    hp:240000,atk:6800,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:222,mth:0,acc:0,ctr:0,
    rewards:{old:5000,bronze:2000,silver:200,crc:0.5,mxd:1.8},
    vicReq:2},
  {id:'the_devourer',name:'THE DEVOURER',
    hp:260000,atk:8000,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:230,mth:0,acc:0,ctr:0,
    rewards:{atk:80,arm:30,old:8000,bronze:3000,silver:250},
    vicReq:2},
  {id:'nameless_king',name:'NAMELESS KING',
    hp:300000,atk:9333,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:258,mth:0,acc:0,ctr:0,
    rewards:{old:12000,bronze:4500,silver:350,mxd:2.0,crc:0.6},
    vicReq:2},
  {id:'he_who_unravels',name:'HE WHO UNRAVELS',
    hp:340000,atk:10667,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:285,mth:0,acc:0,ctr:0,
    rewards:{atk:110,arm:40,old:18000,bronze:6500},
    vicReq:2},
  {id:'throne_of_ash',name:'THRONE OF ASH',
    hp:380000,atk:12000,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:313,mth:0,acc:0,ctr:0,
    rewards:{old:25000,bronze:9000,silver:500,mxd:2.5,crc:0.7},
    vicReq:2},
  {id:'the_pale_hunger',name:'THE PALE HUNGER',
    hp:400000,atk:13333,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:340,mth:0,acc:0,ctr:0,
    rewards:{atk:140,arm:50,old:35000,bronze:12000,silver:600},
    vicReq:2},
  {id:'godrot',name:'GODROT',
    hp:430000,atk:14667,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:368,mth:0,acc:0,ctr:0,
    rewards:{old:48000,bronze:16000,silver:750,mxd:3.0,crc:0.8},
    vicReq:2},
  {id:'the_unfinished',name:'THE UNFINISHED',
    hp:460000,atk:16000,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:395,mth:0,acc:0,ctr:0,
    rewards:{atk:170,arm:60,old:65000,bronze:22000,silver:900},
    vicReq:2},
  {id:'womb_of_plague',name:'WOMB OF PLAGUE',
    hp:490000,atk:17333,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:423,mth:0,acc:0,ctr:0,
    rewards:{old:85000,bronze:30000,silver:1100,mxd:3.5,crc:0.9},
    vicReq:2},
  {id:'bleeding_throne',name:'BLEEDING THRONE',
    hp:500000,atk:18667,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:450,mth:0,acc:0,ctr:0,
    rewards:{atk:200,arm:75,old:110000,bronze:40000,silver:1300,mxd:4.0},
    vicReq:2},
  {id:'the_hollow_crown',name:'THE HOLLOW CROWN',
    hp:550000,atk:20000,mnd:0,mxd:0,spd:0,rgn:0,ddc:0,crc:0,crd:0,arm:480,mth:0,acc:0,ctr:0,
    rewards:{atk:250,arm:100,old:150000,bronze:60000,silver:2000,mxd:5.0,crc:1.0,asp:10},
    vicReq:2}
];
// ═══════════════════════════════════════════════════════
// SHOP FUNCTION
// ═══════════════════════════════════════════════════════
const SHOP_ITEMS = [
  {id:'Upgrade_HP',  name:'HP Upgrade',   desc:'Increase Maximum health point',   effect:'HP +5%',    cost:{old:1}, statBonus:{hp:0.05},  isPct:true, maxOwned:100, cat:'defensive'},
  {id:'Upgrade_ATK', name:'ATK Upgrade',  desc:'Increase attack power',           effect:'ATK +5%',   cost:{old:1}, statBonus:{atk:0.05}, isPct:true, maxOwned:100, cat:'offensive'},
  {id:'Upgrade_MND', name:'MND Upgrade',  desc:'Increase minimal damage',         effect:'MND +1%',   cost:{old:20}, statBonus:{mnd:0.01}, maxOwned:100, cat:'offensive'},
  {id:'Upgrade_MXD', name:'MXD Upgrade',  desc:'Increase maximum damage',         effect:'MXD +1%',   cost:{old:20}, statBonus:{mxd:0.01}, maxOwned:100, cat:'offensive'},
  {id:'Upgrade_SPD', name:'SPD Upgrade',  desc:'Reduce turn time (faster)',       effect:'SPD -10ms', cost:{old:10}, statBonus:{spd:-10}, maxOwned:100, cat:'offensive'},
  {id:'Upgrade_RGN', name:'RGN Upgrade',  desc:'Increase health regeneration',    effect:'RGN +1%',   cost:{old:10}, statBonus:{rgn:0.01}, isPct:true, maxOwned:100, cat:'defensive'},
  {id:'Upgrade_DDC', name:'DDC Upgrade',  desc:'Increase dodge chance',           effect:'DDC +1%',   cost:{old:20}, statBonus:{ddc:0.01}, maxOwned:100, cat:'chance'},
  {id:'Upgrade_CRC', name:'CRC Upgrade',  desc:'Increase critical rate',          effect:'CRC +2%',   cost:{old:20}, statBonus:{crc:0.01}, maxOwned:100, cat:'chance'},
  {id:'Upgrade_CRD', name:'CRD Upgrade',  desc:'Increase critical damage',        effect:'CRD +10%',  cost:{old:10}, statBonus:{crd:0.1}, maxOwned:100, cat:'chance'},
  {id:'Upgrade_ARM', name:'ARM Upgrade',  desc:'Increase armor',                  effect:'ARM +1%',   cost:{old:1}, statBonus:{arm:0.01}, isPct:true, maxOwned:100, cat:'defensive'},
  {id:'Upgrade_MTH', name:'MTH Upgrade',  desc:'Increase multi hit chance',       effect:'MTH +1%',   cost:{old:50}, statBonus:{mth:0.01}, maxOwned:100, cat:'chance'},
  {id:'Upgrade_ACC', name:'ACC Upgrade',  desc:'Increase accuracy',               effect:'ACC +1%',   cost:{old:10}, statBonus:{acc:0.01}, maxOwned:100, cat:'chance'},
  {id:'Upgrade_CTR', name:'CTR Upgrade',  desc:'Increase counter rate',           effect:'CTR +1%',   cost:{old:50}, statBonus:{ctr:0.01}, maxOwned:100, cat:'chance'},
];