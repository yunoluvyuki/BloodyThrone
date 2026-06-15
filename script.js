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

const SHOP_ITEMS = [
  {id:'test_hp',name:'[TEST] HP +1%',desc:'Test upgrade hp',effect:'HP +1%',cost:{old:0},statBonus:{hp:1}},// +1%
  {id:'test_atk',name:'test atk',desc:'test upgrade atk',effect:'atk +1%',cost:{old:0},statBonus:{atk:1}},// +1%
  {id:'test_mnd',name:'test mnd',desc:'test upgrade mnd',effect:'mnd +1%',cost:{old:0},statBonus:{mnd:1}},// +1%
  {id:'test_mxd',name:'test mxd',desc:'test upgrade mxd',effect:'mxd +1%',cost:{old:0},statBonus:{mxd:1}},// +1%
  {id:'test_spd',name:'test spd',desc:'test upgrade spd',effect:'spd +1%',cost:{old:0},statBonus:{spd:1}},// +1%
  {id:'test_rgn',name:'test rgn',desc:'test upgrade rgn',effect:'rgn +1%',cost:{old:0},statBonus:{rgn:1}},// +1%
  {id:'test_rgn',name:'test rgn',desc:'test upgrade rgn',effect:'rgn +1%',cost:{old:0},statBonus:{rgn:1}},// +1%

];

// ═══════════════════════════════════════════════════════
// GAME STATE
// ═══════════════════════════════════════════════════════
const DEFAULT_STATE = ()=>({
  stats:{hp:50,atk:3,mnd:0.7,mxd:1.2,spd:0,rgn:0,ddc:0,crc:0,crd:1.0,arm:0,mth:0,acc:1.0,blk:0,bld:0,ctr:0},
  resources:{old:0,bronze:0,silver:0,gold:0,plat:0},
  victories:{},
  shopOwned:{},
  currentCreature:null,
  quintPending:0,
  quintLifetime:0,
  reincarnations:0,
  activeTime:0,
  deaths:0,
  lifeOld:0,
  lastSave:Date.now(),
  settings:{lightMode:false,invertImg:false,showProtocols:true,combatLog:true,uiZoom:100,battleNav:'manual',numNotation:'mixed',fontSize:13},
  protocols:{autoChallenge:false,autoRetry:false},
  masteryUpgrades:{},
  sessionRewards:{},
  battleUnlocked:[],
  battleQueue:[],
  spawnRarity:{},
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

// ═══════════════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════════════
function fmt(n){
  if(n===undefined||n===null)return'0';
  if(n>=1e12)return(n/1e12).toFixed(2)+'T';
  if(n>=1e9)return(n/1e9).toFixed(2)+'B';
  if(n>=1e6)return(n/1e6).toFixed(2)+'M';
  if(n>=1e3)return(n/1e3).toFixed(2)+'K';
  if(n%1===0)return n.toFixed(0);
  return n.toFixed(2);
}
function fmtStat(n){if(n==null||isNaN(n))return'0';return n%1===0?n.toFixed(0):n.toFixed(2);}
function fmtTime(s){
  if(s<60)return Math.floor(s)+'s';
  if(s<3600)return Math.floor(s/60)+'m '+Math.floor(s%60)+'s';
  return Math.floor(s/3600)+'h '+Math.floor((s%3600)/60)+'m';
}
function toast(msg,dur=2500){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),dur);
}
function getCreature(id){return CREATURES.find(c=>c.id===id);}
function getVictories(id){return S.victories[id]||0;}
function isMaxed(creature){return getVictories(creature.id)>=creature.vicReq;}
function maxHP(){return S.stats.hp;}

// ═══════════════════════════════════════════════════════
// STATS DISPLAY
// ═══════════════════════════════════════════════════════
const STAT_DEFS=[
  {key:'hp',label:'HP',icon:'si-hp',cat:'defense',fmt:'n'},
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

function formatStat(key,val){
  const d=STAT_DEFS.find(x=>x.key===key);
  if(!d)return fmtStat(val);
  if(d.fmt==='pct')return(val*100).toFixed(1)+'%';
  if(d.fmt==='x')return val.toFixed(2)+'x';
  return fmtStat(val);
}
let currentSpecFilter='all';
function renderStats(){
  const g=document.getElementById('stat-grid');
  const defs=currentSpecFilter==='all'?STAT_DEFS:STAT_DEFS.filter(d=>d.cat===currentSpecFilter);
  g.innerHTML=defs.map(d=>`
    <div class="stat-cell">
      <div class="stat-name"><span class="stat-icon ${d.icon}"></span>${d.label}</div>
      <div class="stat-val">${formatStat(d.key,S.stats[d.key]??0)}</div>
    </div>`).join('');
}
const FUND_DEFS={
  all:[
    {key:'reincarnate',label:'REINCARNATIONS',val:()=>S.reincarnations+'x',cat:'core'},
    {key:'glossmult',label:'GLOSSARY MULTIPLIER',val:()=>'x'+calcGlossaryMult().toFixed(2),cat:'economy'},
    {key:'decay',label:'DECAY FACTOR',val:()=>'1x',cat:'core'},
    {key:'death_rec',label:'DEATH RECOVERY',val:()=>'10s',cat:'stats'},
    {key:'flee_pen',label:'FLEE PENALTY',val:()=>'5s',cat:'stats'},
    {key:'feat_base',label:'FEAT MEDAL BASE',val:()=>'1.01x',cat:'rarity'},
    {key:'feat_mult',label:'FEAT MULT',val:()=>'1.02x',cat:'rarity'},
    {key:'quint',label:'BLOOD COIN',val:()=>fmt(S.quintLifetime),cat:'economy'},
  ]
};
function calcGlossaryMult(){
  const unlocked=CREATURES.filter(c=>getVictories(c.id)>0).length;
  return 1+(unlocked*0.01);
}
let currentFundFilter='all';
function renderFundamentals(){
  const defs=currentFundFilter==='all'?FUND_DEFS.all:FUND_DEFS.all.filter(d=>d.cat===currentFundFilter);
  document.getElementById('fund-values').innerHTML=
    defs.map(d=>`<div class="fund-row"><span class="fund-key">${d.label}</span><span class="fund-val">${d.val()}</span></div>`).join('');
}

// ═══════════════════════════════════════════════════════
// CREATURE UNLOCKS & RARITY
// ═══════════════════════════════════════════════════════
// ── BATTLE QUEUE ─────────────────────────────────────
function initBattleQueue(){
  // Build from scratch if missing or empty
  if(!S.battleUnlocked||S.battleUnlocked.length===0){
    const allIds=CREATURES.map(c=>c.id);
    const withVic=allIds.filter(id=>(S.victories[id]||0)>0);
    const remaining=allIds.filter(id=>!withVic.includes(id));
    S.battleUnlocked=[...withVic];
    S.battleQueue=[...remaining];
    // Ensure at least 4 unlocked
    while(S.battleUnlocked.length<4&&S.battleQueue.length>0){
      S.battleUnlocked.push(S.battleQueue.shift());
    }
  }else{
    // Ensure queue is clean (remove any IDs already unlocked)
    S.battleQueue=(S.battleQueue||[]).filter(id=>!S.battleUnlocked.includes(id));
  }
}
function unlockNextCreature(){
  if(!S.battleQueue||S.battleQueue.length===0)return;
  const window=Math.min(4,S.battleQueue.length);
  const pick=Math.floor(Math.random()*window);
  const id=S.battleQueue.splice(pick,1)[0];
  S.battleUnlocked.push(id);
  const c=getCreature(id);
  if(c){
    addLog(`<span style="color:var(--green)">◆ A new enemy has stepped forward: <b>${c.name}</b>.</span>`);
    toast(`New foe: ${c.name}`,3000);
  }
  renderBattle();
}
function isUnlocked(id){return S.battleUnlocked&&S.battleUnlocked.includes(id);}


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
function getRarityChances(){
  const ups=S.masteryUpgrades||{};
  const unc=30+(ups.unc_rate||0)*1;
  const rare=20+(ups.rare_rate||0)*0.5;
  const epic=10+(ups.epic_rate||0)*0.2;
  const leg=10+(ups.leg_rate||0)*0.05;
  return{uncommon:Math.min(unc,40),rare:Math.min(rare,15),epic:Math.min(epic,5),legendary:Math.min(leg,2)};
}
function rollRarity(){
  const ch=getRarityChances();
  const r=Math.random()*100;
  if(r<ch.legendary)return'legendary';
  if(r<ch.legendary+ch.epic)return'epic';
  if(r<ch.legendary+ch.epic+ch.rare)return'rare';
  if(r<ch.legendary+ch.epic+ch.rare+ch.uncommon)return'uncommon';
  return'common';
}
function getSpawnRarity(id){
  if(!S.spawnRarity)S.spawnRarity={};
  if(!S.spawnRarity[id])S.spawnRarity[id]=rollRarity();
  return S.spawnRarity[id];
}

function renderBattle(){
  const g=document.getElementById('battle-grid');
  const visible=CREATURES.filter(c=>isUnlocked(c.id)&&!isMaxed(c));
  const defeated=CREATURES.filter(c=>isMaxed(c)).length;
  const hidden=CREATURES.length-visible.length-defeated;
  let html=`<div style="grid-column:1/-1;display:flex;align-items:center;gap:8px;margin-bottom:10px;">
    ${defeated>0?`<div style="font-size:8px;color:var(--text3);">${defeated} defeated</div>`:''}
    <div style="flex:1;height:1px;background:var(--text3);opacity:0.2;"></div>
    ${hidden>0?`<div style="font-size:8px;color:var(--text3);font-style:italic;opacity:0.6;">${hidden} in the dark…</div>`:''}
  </div>`;
  html+=visible.map(c=>{
    const color='#888';
    const vic=getVictories(c.id);
    const maxed=isMaxed(c);
    const isCurrent=S.currentCreature===c.id;
    const pct=Math.min(100,vic/c.vicReq*100);
    const spawnRarityMultDisplay=RARITY_MULTS[maxed?'common':getSpawnRarity(c.id)]||1;
    const rewardStr=Object.entries(c.rewards).map(([k,v])=>`<span class="reward-item ${['old','bronze','silver'].includes(k)?'res':''}">${RESOURCE_LABELS[k]||k.toUpperCase()} +${(v*spawnRarityMultDisplay).toFixed(2).replace(/\.00$/,'')}</span>`).join('');
    const countStr=c.count!=null?`<span style="margin-left:4px;color:var(--text3);">${c.count}</span>`:'';
    let btnHtml='';
    if(maxed)btnHtml=`<button class="btn-challenge btn-maxed">MAXED</button>`;
    else if(isCurrent)btnHtml=`<button class="btn-challenge btn-current" onclick="stopBattle()">FIGHTING</button>`;
    else btnHtml=`<button class="btn-challenge" onclick="startBattle('${c.id}')">CHALLENGE</button>`;
    const spawnRarity=maxed?null:getSpawnRarity(c.id);
    const spawnRarityColor=spawnRarity?(RARITY_COLORS[spawnRarity]||'#888'):null;
    const borderColor=spawnRarity?spawnRarityColor:maxed?'#333':`${color}44`;
    const rarityGlow=spawnRarity&&spawnRarity!=='common'?`box-shadow:0 0 8px ${spawnRarityColor}55;`:'';
    const spawnBg=spawnRarity?(RARITY_BG[spawnRarity]||'transparent'):'transparent';
    const spawnBadge=spawnRarity?`<span style="position:absolute;top:4px;right:4px;font-size:6px;font-weight:bold;letter-spacing:1px;padding:1px 4px;background:${spawnRarityColor};color:#fff;">${RARITY_LABELS[spawnRarity]}</span>`:'';
    return `<div class="creature-card" id="card-${c.id}" style="border-color:${borderColor};${rarityGlow}background:${spawnBg}">
      <div class="card-top">
        <div class="card-art" style="position:relative;">${spawnBadge}${c.new?'<span class="new-badge">NEW</span>':''}${c.img?`<img src="${c.img}" style="width:100%;height:100%;object-fit:cover;">`:SVGs[c.id]||`<div style="color:${color};font-size:22px;opacity:0.4;">✦</div>`}</div>
        <div class="card-info">
          <div class="card-name">${c.name}</div>
          <div class="card-tagline">${c.tag}</div>
          <div class="card-stats">
            <span class="card-atk">✏ ${fmt(c.atk*spawnRarityMultDisplay)}</span> /
            <span class="card-def">🛡 ${c.def}</span>
            <span class="card-hp">⚡ ${fmt(c.hp*spawnRarityMultDisplay)}</span>
            ${countStr}
          </div>
        </div>
      </div>
      <div class="card-rewards">
        <div class="rewards-header"><span style="color:${maxed?'var(--text3)':''}">REWARDS ×${(calcGlossaryMult()*spawnRarityMultDisplay).toFixed(2)}</span><span class="vic">${c.vicReq} Victories | <span style="color:${vic>0?'var(--green)':'var(--text3)'}">${Math.min(vic,c.vicReq)}</span>/${c.vicReq}</span></div>
        <div class="victories-bar"><div class="victories-fill" style="width:${pct}%;background:${maxed?'#2a5a2a':color}"></div></div>
        <div class="reward-list">${rewardStr}</div>
      </div>
      <div class="card-btn">${btnHtml}</div>
    </div>`;
  }).join('');
  g.innerHTML=html;
}

// ═══════════════════════════════════════════════════════
// battle
// ═══════════════════════════════════════════════════════
function startBattle(creatureId){
  const c = getCreature(creatureId);
  if(!c) return;
  S.currentCreature = creatureId;
  B.rarity = getSpawnRarity(creatureId);
  const rarityMult = RARITY_MULTS[B.rarity] || 1;
  B.creature = {...c, atk:c.atk*rarityMult, hp:c.hp*rarityMult};
  B.active = true;
  B.dying = false;
  B.enemyHP = B.creature.hp;
  B.lastTick = Date.now();
  B.playerTimer = Math.max(200, 3000 - S.stats.spd);
  B.enemyTimer = Math.max(200, 3000 - (B.creature.spd ?? 0));
  updateBattleUI();
  const rc = RARITY_COLORS[B.rarity];
  const rl = RARITY_LABELS[B.rarity];
  addLog(`<span style="color:${rc}">⚔ ${c.name} appears [${rl}]${B.rarity!=='common'?' ×'+RARITY_MULTS[B.rarity]:''}</span>`);
  renderBattle();
  document.getElementById('ac-details').textContent = c.name;
}
function updateBattleUI(){
  const c = B.creature;
  const turnEl = document.getElementById('turn-display');
  const ptimerBar = document.getElementById('ptimer-bar');
  const etimerBar = document.getElementById('etimer-bar');
  const ptimerText = document.getElementById('ptimer-text');
  const etimerText = document.getElementById('etimer-text');

  if(!c){
    const ppct = Math.max(0, B.playerHP / maxHP() * 100);
    document.getElementById('battle-creature-name').textContent = 'SELECT A CREATURE';
    document.getElementById('battle-creature-tag').textContent = 'Go to Battle to challenge a creature.';
    document.getElementById('enemy-hp-bar').style.width = '0%';
    document.getElementById('enemy-hp-text').textContent = '—';
    document.getElementById('player-hp-bar').style.width = ppct + '%';
    document.getElementById('player-hp-text').textContent = `${Math.max(0, B.playerHP).toFixed(1)} / ${maxHP().toFixed(1)}`;
    document.getElementById('battle-art').innerHTML = '';
    document.getElementById('battle-status').textContent = 'No active battle.';
    if(turnEl) turnEl.textContent = '—';
    if(ptimerBar){ ptimerBar.style.width = '0%'; ptimerText.textContent = '—'; }
    if(etimerBar){ etimerBar.style.width = '0%'; etimerText.textContent = '—'; }
    updateBattleStats();
    return;
  }

  const rc = RARITY_COLORS[B.rarity || 'common'];
  const rl = RARITY_LABELS[B.rarity || 'common'];
  document.getElementById('battle-creature-name').textContent = c.name;
  document.getElementById('battle-creature-name').style.color = rc || 'var(--white)';
  document.getElementById('battle-creature-tag').textContent = `[${rl}] ${c.tag}`;
  document.getElementById('battle-art').innerHTML = c.img ? `<img src="${c.img}" style="width:100%;height:100%;object-fit:cover;">` : (SVGs[c.id] || '');
  document.getElementById('player-art').innerHTML = '<div style="font-size:22px;opacity:0.4;">★</div>';

  const epct = Math.max(0, B.enemyHP / c.hp * 100);
  const ppct = Math.max(0, B.playerHP / maxHP() * 100);
  document.getElementById('enemy-hp-bar').style.width = epct + '%';
  document.getElementById('enemy-hp-text').textContent = `${B.enemyHP.toFixed(1)} / ${c.hp}`;
  document.getElementById('player-hp-bar').style.width = ppct + '%';
  document.getElementById('player-hp-text').textContent = `${Math.max(0, B.playerHP).toFixed(1)} / ${maxHP().toFixed(1)}`;

  // Timer bars
  if(B.active && !B.dying){
    const pInterval = Math.max(200, 3000 - S.stats.spd);
    const eInterval = Math.max(200, 3000 - (c.spd ?? 0));
    const pFill = Math.max(0, Math.min(100, (1 - B.playerTimer / pInterval) * 100));
    const eFill = Math.max(0, Math.min(100, (1 - B.enemyTimer / eInterval) * 100));
    if(ptimerBar){ ptimerBar.style.width = pFill + '%'; ptimerText.textContent = (Math.max(0, B.playerTimer) / 1000).toFixed(1) + 's'; }
    if(etimerBar){ etimerBar.style.width = eFill + '%'; etimerText.textContent = (Math.max(0, B.enemyTimer) / 1000).toFixed(1) + 's'; }
  }

  if(turnEl){
    if(B.dying) turnEl.textContent = 'DEFEATED — RECOVERING...';
    else if(B.active) turnEl.textContent = `YOUR TURN: ${(Math.max(200, 3000 - S.stats.spd) / 1000).toFixed(1)}s | ENEMY TURN: ${(Math.max(200, 3000 - (c.spd ?? 0)) / 1000).toFixed(1)}s | KILLS: ${S.victories[c.id] || 0}/${c.vicReq}`;
    else turnEl.textContent = '—';
  }

  document.getElementById('battle-status').textContent = B.active
    ? `Your ATK: ${S.stats.atk.toFixed(1)} | Enemy ATK: ${c.atk.toFixed(1)} | Your turn: ${(Math.max(200, 3000 - S.stats.spd) / 1000).toFixed(1)}s | Enemy turn: ${(Math.max(200, 3000 - (c.spd ?? 0)) / 1000).toFixed(1)}s`
    : 'Battle paused.';

  updateBattleStats();
}

function updateBattleStats(){
  const c = B.creature;
  const st = S.stats;
  const dash = '—';
  const pct = v => (v * 100).toFixed(1) + '%';
  const x2 = v => v.toFixed(2) + '×';
  const n1 = v => v.toFixed(1);

  const pMinDmg = st.atk * (st.mnd ?? 0.7);
  const pMaxDmg = st.atk * (st.mxd ?? 1.0);
  const eMinDmg = c ? c.atk * (c.mnd ?? 0.7) : 0;
  const eMaxDmg = c ? c.atk * (c.mxd ?? 1.0) : 0;

  const offRows = [
    {name:'ATK',              p:fmt(st.atk),                                                        e:c ? fmt(c.atk) : dash},
    {name:'Min Damage',       p:n1(pMinDmg),                                                        e:c ? n1(eMinDmg) : dash},
    {name:'Max Damage',       p:n1(pMaxDmg),                                                        e:c ? n1(eMaxDmg) : dash},
    {name:'Turn Speed',       p:(Math.max(200, 3000 - st.spd) / 1000).toFixed(1)+'s',               e:c ? (Math.max(200, 3000 - (c.spd ?? 0)) / 1000).toFixed(1)+'s' : dash},
    {name:'Accuracy',         p:pct(st.acc ?? 1),                                                   e:c ? pct(c.acc ?? 1) : dash},
    {name:'Crit Chance',      p:pct(st.crc ?? 0),                                                   e:c ? pct(c.crc ?? 0) : dash},
    {name:'Crit Damage',      p:x2(st.crd ?? 1),                                                    e:c ? x2(c.crd ?? 1) : dash},
    {name:'Multi-Hit Chance', p:pct(st.mth ?? 0),                                                   e:c ? pct(c.mth ?? 0) : dash},
  ];

  const defRows = [
    {name:'HP',             p:fmt(st.hp),              e:c ? fmt(c.hp) : dash},
    {name:'HP Regen',       p:n1(st.rgn ?? 0)+'/s',    e:'0/s'},
    {name:'Armor',          p:fmt(st.arm ?? 0),        e:c ? fmt(c.arm ?? 0) : dash},
    {name:'Block Chance',   p:pct(st.blk ?? 0),        e:c ? pct(c.blk ?? 0) : dash},
    {name:'Block Damage',   p:fmt(st.bld ?? 0),        e:c ? fmt(c.bld ?? 0) : dash},
    {name:'Dodge Chance',   p:pct(st.ddc ?? 0),        e:c ? pct(c.ddc ?? 0) : dash},
    {name:'Counter Chance', p:pct(st.ctr ?? 0),        e:c ? pct(c.ctr ?? 0) : dash},
  ];

  const row = (s, dot) => `<div class="bsp-row"><div class="bsp-name"><span class="bsp-dot" style="background:${dot}"></span>${s.name}</div><div class="bsp-you">${s.p}</div><div class="bsp-enemy">${s.e}</div></div>`;
  document.getElementById('bsp-off').innerHTML = offRows.map(s => row(s, '#e74c3c')).join('');
  document.getElementById('bsp-def').innerHTML = defRows.map(s => row(s, '#4ecdc4')).join('');
}

function stopBattle(){
  B.active=false;
  S.currentCreature=null;
  B.creature=null;
  renderBattle();
  updateBattleUI();
  document.getElementById('ac-details').textContent=S.protocols.autoChallenge?'ENABLED':'DISABLED';
}

function battleTick(){
  if(B.dying){
    const elapsed = (Date.now() - B.deathStart) / 1000;
    const remaining = Math.max(0, 10 - elapsed);
    document.getElementById('death-timer').textContent = Math.ceil(remaining);
    if(remaining <= 0){
      document.getElementById('death-overlay').style.display = 'none';
      B.dying = false;
      B.playerHP = maxHP();
      if(S.protocols.autoRetry && B.creature){
        startBattle(B.creature.id);
      } else {
        B.active = false;
        S.currentCreature = null;
      }
    }
    return;
  }
  if(!B.active || !B.creature) return;
  const now = Date.now();
  const dt = Math.min(now - B.lastTick, 500);
  B.lastTick = now;
  B.playerTimer -= dt;
  B.enemyTimer -= dt;
  if(B.playerTimer <= 0){
    firePlayerTurn();
    if(!B.active) return;
    B.playerTimer = Math.max(200, 3000 - S.stats.spd);
  }
  if(!B.active) return;
  if(B.enemyTimer <= 0){
    fireEnemyTurn();
    if(!B.active) return;
    B.enemyTimer = Math.max(200, 3000 - (B.creature.spd ?? 0));
  }
}

function regenTick(){
  if(!B.active || B.dying) return;
  if((S.stats.rgn ?? 0) <= 0) return;
  B.playerHP = Math.min(maxHP(), B.playerHP + S.stats.rgn);
}

function firePlayerTurn(){
  const c = B.creature;
  const st = S.stats;

  // Hit Check
  const ddc = c.ddc ?? 0;
  const acc = st.acc ?? 1;
  const isMiss = acc >= ddc ? false : Math.random() < (ddc - acc);

  if(isMiss){
    addLog(`<span class="log-info">You swing at <b>${c.name}</b> — MISS!</span>`);
  } else {

    // Damage Calc
    const isCrit = Math.random() < (st.crc ?? 0);
    const mnd = st.atk * (st.mnd ?? 0.7);
    const mxd = st.atk * (st.mxd ?? 1.0);
    let totalDmg = 0;
    let hits = 0;

    do {
      let rolled = mnd + Math.random() * (mxd - mnd);
      if(isCrit) rolled *= (st.crd ?? 1);
      const isBlock = Math.random() < (c.blk ?? 0);
      if(isBlock) rolled = Math.max(0, rolled - (c.bld ?? 0));
      rolled = Math.max(0, rolled - (c.arm ?? 0));
      totalDmg += rolled;
      hits++;
    } while(Math.random() < (st.mth ?? 0) && hits < 10);

    // Apply Damage
    B.enemyHP = Math.max(0, B.enemyHP - totalDmg);

    // Log
    const hitStr = hits > 1 ? ` <span style="color:var(--cyan)">(${hits} hits!)</span>` : '';
    if(isCrit){
      addLog(`<span class="log-crit">✦ CRIT — <b>${totalDmg.toFixed(1)}</b> to ${c.name}!${hitStr}</span>`);
    } else {
      addLog(`<span class="log-info">You deal <b>${totalDmg.toFixed(1)}</b> to <b>${c.name}</b>.${hitStr}</span>`);
    }

    if(B.enemyHP <= 0){ onWin(); return; }

    // Counter Check — only if enemy still alive
    if(Math.random() < (c.ctr ?? 0)){
      addLog(`<span class="log-warn"><b>${c.name}</b> counters!</span>`);
      fireEnemyCounterAttack();
      if(!B.active) return;
    }
  }

  // Win Check
  if(B.enemyHP <= 0) onWin();
}

function fireEnemyTurn(){
  const c = B.creature;
  const st = S.stats;

  // Hit Check (enemy acc vs player ddc)
  const ddc = st.ddc ?? 0;
  const acc = c.acc ?? 1;
  const isMiss = acc >= ddc ? false : Math.random() < (ddc - acc);

  if(isMiss){
    addLog(`<span class="log-info"><b>${c.name}</b> swings at you — MISS!</span>`);
  } else {

    // Damage Calc
    const isCrit = Math.random() < (c.crc ?? 0);
    const mnd = c.atk * (c.mnd ?? 0.7);
    const mxd = c.atk * (c.mxd ?? 1.0);
    let totalDmg = 0;
    let hits = 0;

    do {
      let rolled = mnd + Math.random() * (mxd - mnd);
      if(isCrit) rolled *= (c.crd ?? 1);                        // 2. crit multiplier
      const isBlock = Math.random() < (st.blk ?? 0);
      if(isBlock) rolled = Math.max(0, rolled - (st.bld ?? 0)); // 3. player block reduction
      rolled = Math.max(0, rolled - (st.arm ?? 0));             // 4. player armor reduction
      totalDmg += rolled;
      hits++;
    } while(Math.random() < (c.mth ?? 0) && hits < 10);

    // Apply Damage
    B.playerHP = Math.max(0, B.playerHP - totalDmg);

    // Counter Check (player counters enemy hit)
    if(Math.random() < (st.ctr ?? 0)){
      const cMnd = st.atk * (st.mnd ?? 0.7);
      const cMxd = st.atk * (st.mxd ?? 1.0);
      let counterDmg = cMnd + Math.random() * (cMxd - cMnd);
      counterDmg = Math.max(0, counterDmg - (c.arm ?? 0));
      B.enemyHP = Math.max(0, B.enemyHP - counterDmg);
      addLog(`<span class="log-crit">↩ COUNTER — <b>${counterDmg.toFixed(1)}</b> to ${c.name}!</span>`);
      if(B.enemyHP <= 0){ onWin(); return; }
    }

    // Log
    const hitStr = hits > 1 ? ` <span style="color:var(--cyan)">(${hits} hits!)</span>` : '';
    if(isCrit){
      addLog(`<span class="log-crit">✦ ${c.name} CRITS — <b>${totalDmg.toFixed(1)}</b> to you!${hitStr}</span>`);
    } else {
      addLog(`<span class="log-die"><b>${c.name}</b> hits you for <b>${totalDmg.toFixed(1)}</b>.${hitStr}</span>`);
    }
  }

  // Lose Check
  if(B.playerHP <= 0) onLose();
}

function fireEnemyCounterAttack(){
  const c = B.creature;
  const st = S.stats;

  // Damage Calc (no hit check, counter always hits)
  const isCrit = Math.random() < (c.crc ?? 0);
  const mnd = c.atk * (c.mnd ?? 0.7);
  const mxd = c.atk * (c.mxd ?? 1.0);
  let totalDmg = 0;
  let hits = 0;

  do {
    let rolled = mnd + Math.random() * (mxd - mnd);
    if(isCrit) rolled *= (c.crd ?? 1);
    const isBlock = Math.random() < (st.blk ?? 0);
    if(isBlock) rolled = Math.max(0, rolled - (st.bld ?? 0));
    rolled = Math.max(0, rolled - (st.arm ?? 0));
    totalDmg += rolled;
    hits++;
  } while(Math.random() < (c.mth ?? 0) && hits < 10);

  // Apply Damage
  B.playerHP = Math.max(0, B.playerHP - totalDmg);

  const hitStr = hits > 1 ? ` <span style="color:var(--cyan)">(${hits} hits!)</span>` : '';
  if(isCrit){
    addLog(`<span class="log-crit">✦ ${c.name} counter CRITS — <b>${totalDmg.toFixed(1)}</b> to you!${hitStr}</span>`);
  } else {
    addLog(`<span class="log-die"><b>${c.name}</b> counter hits you for <b>${totalDmg.toFixed(1)}</b>.${hitStr}</span>`);
  }

  // Player counter back
  if(Math.random() < (st.ctr ?? 0)){
    const cMnd = st.atk * (st.mnd ?? 0.7);
    const cMxd = st.atk * (st.mxd ?? 1.0);
    let counterDmg = cMnd + Math.random() * (cMxd - cMnd);
    counterDmg = Math.max(0, counterDmg - (c.arm ?? 0));
    B.enemyHP = Math.max(0, B.enemyHP - counterDmg);
    addLog(`<span class="log-crit">↩ COUNTER — <b>${counterDmg.toFixed(1)}</b> to ${c.name}!</span>`);
    if(B.enemyHP <= 0){ onWin(); return; }
  }

  // Lose Check
  if(B.playerHP <= 0) onLose();
}

function onWin(){
  if(!B.active) return;
  B.active = false;

  const c = B.creature;

  // Victory Tracking
  if(!S.victories[c.id]) S.victories[c.id] = 0;
  S.victories[c.id]++;
  const justCompleted = S.victories[c.id] === c.vicReq;
  addLog(`<span class="log-win">✓ Defeated ${c.name}! (${S.victories[c.id]}/${c.vicReq})</span>`);
  if(justCompleted) unlockNextCreature();

  // Reward Multipliers
  const mult = calcGlossaryMult();
  const rewardMult = 1 + (S.reincarnations * 0.05);
  const rarityMult = RARITY_MULTS[B.rarity || 'common'] || 1;
  if(rarityMult > 1) addLog(`<span style="color:${RARITY_COLORS[B.rarity]}">★ ${RARITY_LABELS[B.rarity]} bonus ×${rarityMult} applied!</span>`);

  // Apply Rewards
  const gainStrs = [];
  Object.entries(c.rewards).forEach(([k, v]) => {
    const amount = v * mult * rewardMult * rarityMult;
    if(['old', 'bronze', 'silver'].includes(k)){
      S.resources[k] = (S.resources[k] || 0) + amount;
      if(k === 'old') S.lifeOld = (S.lifeOld || 0) + amount;
    } else if(S.stats[k] !== undefined){
      S.stats[k] += amount;
      if(!S.sessionRewards[k]) S.sessionRewards[k] = 0;
      S.sessionRewards[k] += amount;
    }
    gainStrs.push(`${RESOURCE_LABELS[k] || k.toUpperCase()} +${amount.toFixed(2)}`);
  });
  addLog(`<span class="log-info">↳ Rewards: ${gainStrs.join(', ')}</span>`);

  // Render
  renderStats();
  renderFundamentals();
  renderBattle();

  // Maxed check — always stop
  if(isMaxed(c)){
    addLog(`<span class="log-win">★ ${c.name} fully defeated!</span>`);
    stopBattle();
    return;
  }

  // Not maxed — continue if autoChallenge active
  if(S.protocols.autoChallenge){
    B.active = true;
    B.enemyHP = B.creature.hp;
    B.lastTick = Date.now();
    B.playerTimer = Math.max(200, 3000 - S.stats.spd);         // ✅ reset timers
    B.enemyTimer = Math.max(200, 3000 - (B.creature.spd ?? 0)); // ✅ reset timers
  } else {
    stopBattle();
  }
}

function onLose(){
  B.active=false;
  B.dying=true;
  B.deathStart=Date.now();
  S.deaths=(S.deaths||0)+1;
  document.getElementById('death-overlay').style.display='block';
  addLog(`<span class="log-die">✗ You were defeated by ${B.creature.name}. (Deaths: ${S.deaths})</span>`);
  updateBattleUI();
}

// ═══════════════════════════════════════════════════════
// MASTERY UPGRADES & BATTLE UI HELPERS
// ═══════════════════════════════════════════════════════
function renderMastery(){
  const el=document.getElementById('mastery-content');
  if(!el)return;
  const ups=S.masteryUpgrades||{};
  const ch=getRarityChances();
  const common=Math.max(0,100-ch.uncommon-ch.rare-ch.epic-ch.legendary);
  let html=`<div style="margin-bottom:14px;padding:10px;background:var(--bg3);border:1px solid var(--border);">
    <div style="font-size:9px;letter-spacing:2px;color:var(--text3);margin-bottom:8px;">CURRENT SPAWN CHANCES</div>
    <div style="display:flex;gap:14px;flex-wrap:wrap;font-size:10px;">
      <span style="color:#888;">COMMON ${common.toFixed(2)}%</span>
      <span style="color:var(--g-uncommon);">UNCOMMON ${ch.uncommon.toFixed(2)}%</span>
      <span style="color:var(--g-rare);">RARE ${ch.rare.toFixed(2)}%</span>
      <span style="color:var(--g-epic);">EPIC ${ch.epic.toFixed(2)}%</span>
      <span style="color:var(--g-legendary);">LEGENDARY ${ch.legendary.toFixed(2)}%</span>
    </div>
  </div>
  <div style="font-size:9px;color:var(--text3);margin-bottom:10px;">Rarer enemies drop <b style="color:var(--white);">multiplied rewards</b>: ×1.5 / ×3 / ×7 / ×15</div>
  <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">`;
  RARITY_UPGRADES.forEach(up=>{
    const level=ups[up.id]||0;
    const isMaxed=level>=up.maxLevel;
    const cost={};
    Object.entries(up.base).forEach(([res,amt])=>{ cost[res]=Math.floor(amt*Math.pow(up.scale,level)); });
    const canAfford=!isMaxed&&Object.entries(cost).every(([res,amt])=>(S.resources[res]||0)>=amt);
    const rc=RARITY_COLORS[up.rarity];
    const costStr=Object.entries(cost).map(([res,amt])=>`${res.toUpperCase()} ${fmt(amt)}`).join(' + ');
    html+=`<div style="border:1px solid ${rc}44;padding:10px;background:${rc}0d;">
      <div style="font-size:10px;font-weight:bold;color:${rc};letter-spacing:1px;margin-bottom:3px;">${up.label}</div>
      <div style="font-size:8px;color:var(--text3);margin-bottom:8px;">${up.desc}</div>
      <div style="font-size:9px;color:var(--text2);margin-bottom:6px;">Level <span style="color:var(--white);font-weight:bold;">${level}</span> / ${up.maxLevel}</div>
      ${isMaxed
        ?`<div style="font-size:9px;text-align:center;color:${rc};padding:4px 0;">✦ MAXED</div>`
        :`<div style="font-size:8px;color:${canAfford?'var(--text2)':'var(--text4)'};margin-bottom:6px;">${costStr}</div>
          <button onclick="buyMasteryUpgrade('${up.id}')" style="width:100%;padding:5px;background:${canAfford?rc+'22':'var(--bg3)'};border:1px solid ${canAfford?rc:'var(--border)'};color:${canAfford?rc:'var(--text3)'};cursor:${canAfford?'pointer':'not-allowed'};font-family:inherit;font-size:9px;letter-spacing:1px;text-transform:uppercase;">UPGRADE</button>`
      }
    </div>`;
  });
  html+='</div>';
  el.innerHTML=html;
}
function buyMasteryUpgrade(id){
  const up=RARITY_UPGRADES.find(u=>u.id===id);
  if(!up)return;
  if(!S.masteryUpgrades)S.masteryUpgrades={};
  const level=S.masteryUpgrades[id]||0;
  if(level>=up.maxLevel)return;
  const cost={};
  Object.entries(up.base).forEach(([res,amt])=>{ cost[res]=Math.floor(amt*Math.pow(up.scale,level)); });
  if(!Object.entries(cost).every(([res,amt])=>(S.resources[res]||0)>=amt)){toast('Not enough resources.',2000);return;}
  Object.entries(cost).forEach(([res,amt])=>{ S.resources[res]-=amt; });
  S.masteryUpgrades[id]=level+1;
  renderMastery();
  renderStats();
  toast(`${up.label} → Lv ${S.masteryUpgrades[id]}`,2000);
}

function addLog(html){
  if(!S.settings.combatLog)return;
  const log=document.getElementById('battle-log');
  log.innerHTML=`<div class="log-entry">${html}</div>`+log.innerHTML;
  if(log.children.length>50)log.removeChild(log.lastChild);
}


// ═══════════════════════════════════════════════════════
// BLOOD COIN / REINCARNATE
// ═══════════════════════════════════════════════════════
function checkQuintMilestone(){
  if(S.resources.old>=S.quintPending*100+100){
    S.quintPending+=1;
  }
}
function updateQuintUI(){
  document.getElementById('quint-pending').textContent='+'+fmt(S.quintPending);
  document.getElementById('quint-pend-val').textContent='+'+fmt(S.quintPending);
  document.getElementById('quint-life-val').textContent=fmt(S.quintLifetime);
  document.getElementById('quint-count').textContent=fmt(S.quintPending);
  const ready=S.quintPending>=100;
  const rb=document.getElementById('reincarnate-btn');
  rb.className=ready?'ready':'';
  document.getElementById('reincarnate-req').textContent=ready?'READY TO REINCARNATE!':'REQUIRES 100 PENDING BLOOD COIN';
}

// ═══════════════════════════════════════════════════════
// GLOSSARY
// ═══════════════════════════════════════════════════════
const GLOSS_TYPES=['ALL','SCRAP'];
function renderGlossary(){
  const filtersEl=document.getElementById('gloss-filters');
  const total=CREATURES.length;
  const unlocked=CREATURES.filter(c=>getVictories(c.id)>0).length;
  filtersEl.innerHTML=`<button class="gloss-filter active">${'ALL'} ${unlocked}/${total}</button>
  <button class="gloss-filter">SCRAP ${unlocked}/${total}</button>`;
  const grid=document.getElementById('gloss-grid');
  // Show unlocked + some locked (total 219 conceptually, show first 30)
  const unlockList=CREATURES.filter(c=>getVictories(c.id)>0);
  const lockFiller=Array.from({length:Math.max(0,20-unlockList.length)},(_,i)=>({locked:true,idx:i}));
  grid.innerHTML=[
    ...unlockList.map(c=>`<div class="gloss-card unlocked">${SVGs[c.id]||''}</div>`),
    ...lockFiller.map((_,i)=>`<div class="gloss-card locked"><div class="gloss-q">?</div><div class="gloss-chance">CHANCE: 100%</div><div class="gloss-locked-name">??? ???</div></div>`)
  ].join('');
}


// ═══════════════════════════════════════════════════════
// RESOURCES DISPLAY
// ═══════════════════════════════════════════════════════
function updateResources(){
  document.getElementById('res-old').textContent=fmt(S.resources.old);
  document.getElementById('res-bronze').textContent=fmt(S.resources.bronze);
  document.getElementById('res-silver').textContent=fmt(S.resources.silver);
  document.getElementById('res-gold').textContent=fmt(S.resources.gold);
  document.getElementById('res-plat').textContent=fmt(S.resources.plat);
}

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
    t.classList.toggle('active',t.dataset.tab===name);
  });
  document.querySelectorAll('.tab-pane').forEach(p=>{
    p.classList.toggle('active',p.id==='tab-'+name);
  });
  if(name==='battle')renderBattle();
  if(name==='inventory')renderInventory();
  if(name==='shop')renderShop();
  if(name==='archive'){
    updateQuintUI();renderGlossary();
    document.getElementById('archive-dot').style.display='none';
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
  let zoom=S.settings.uiZoom||100;
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
  const FS_DEFAULT=13,FS_MIN=8,FS_MAX=24,FS_STEP=1;
  const FS_RULES=[
    ['body',13],['#topbar .title',16],['.nav-tab',12],['.res-val',18],
    ['.res-rate',13],['.res-icon',12],['#topbar .fps',12],
    ['#add-btn',16],['#quint-count',13],['.btm-panel-hdr',11],
    ['#specs-header .label',9],['.filter-tab',10],['.sort-btn',11],
    ['.sort-label',11],['.stat-name',9],['.stat-val',17],
    ['#fund-header .label',11],['.fund-row',10],['#protocols-header .title',11],
    ['.protocol-title',10],['.protocol-sub',10],['.toggle-label',10],
    ['.protocol-val',8],['#battle-intro',11],['.card-name',10],
    ['.card-tagline',8],['.card-stats',9],['.new-badge',7],
    ['.rewards-header',8],['.reward-item',8],['.btn-challenge',9],
    ['.btn-maxed',9],['#battle-creature-name',16],['#battle-creature-tag',10],
    ['.hp-label',9],['#battle-log',9],['.battle-btn',9],['#battle-status',10],
    ['.timer-label',8],['.timer-text',8],['#victory-panel h3',10],
    ['.victory-stat',10],['#death-overlay h2',16],['#death-overlay .timer',24],
    ['.bsp-box-title',11],['.bsp-box-sub',8],['.bsp-col-head',8],
    ['.bsp-name',10],['.bsp-you',9],['.bsp-enemy',9],['.prestige-tab',10],
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
// SAVE / LOAD
// ═══════════════════════════════════════════════════════

function saveGame(){
  S.lastSave = Date.now();
  S.savedPlayerHP = B.playerHP;
  localStorage.setItem('rejected_draft_save', JSON.stringify(S));
}

function loadGame(){
  try{
    const raw = localStorage.getItem('rejected_draft_save');
    if(!raw){
      B.playerHP = maxHP(); // ✅ fresh game, start with full HP
      return;
    }
    const loaded = JSON.parse(raw);
    const def = DEFAULT_STATE();
    S = Object.assign(def, loaded);
    S.stats = Object.assign(DEFAULT_STATE().stats, loaded.stats || {});
    S.resources = Object.assign({old:0,bronze:0,silver:0,gold:0,plat:0}, loaded.resources || {});
    S.settings = Object.assign(def.settings, loaded.settings || {});
    S.protocols = Object.assign({autoChallenge:false,autoRetry:false}, loaded.protocols || {});
    S.victories = Object.assign({}, loaded.victories || {});
    S.shopOwned = Object.assign({}, loaded.shopOwned || {});
    S.spawnRarity = Object.assign({}, loaded.spawnRarity || {});
    S.deaths = loaded.deaths || 0;
    S.lifeOld = loaded.lifeOld || 0;
    S.reincarnations = loaded.reincarnations || 0;
    S.quintPending = loaded.quintPending || 0;
    S.quintLifetime = loaded.quintLifetime || 0;
    B.playerHP = (loaded.savedPlayerHP && loaded.savedPlayerHP > 0) ? loaded.savedPlayerHP : maxHP();
  }catch(e){console.error('Load failed', e);}
  initBattleQueue();
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
// MAIN RENDER
// ═══════════════════════════════════════════════════════
function renderAll(){
  renderStats();renderFundamentals();renderBattle();renderShop();
  updateQuintUI();renderGlossary();
  updateBattleUI();updateResources();
}

// ═══════════════════════════════════════════════════════
// GAME LOOP
// ═══════════════════════════════════════════════════════
let frameCount=0,fpsTimer=0,lastFrame=performance.now();
function gameLoop(){
  const now=performance.now();
  const dt=(now-lastFrame)/1000;
  lastFrame=now;
  frameCount++;
  fpsTimer+=dt;
  if(fpsTimer>=1){
    document.getElementById('fps-display').textContent='FPS '+frameCount;
    frameCount=0;fpsTimer=0;
  }
  battleTick();
  checkQuintMilestone();
  S.activeTime=(S.activeTime||0)+dt;
  // Update UI periodically
  if(frameCount%3===0){
    updateBattleUI();
    updateResources();
    updateArchiveDot();
    document.getElementById('active-time').textContent=fmtTime(S.activeTime);
  }
  if(frameCount%30===0){
    renderStats();renderFundamentals();
    const archActive=document.getElementById('tab-archive').classList.contains('active');
    if(archActive){
      if(document.getElementById('arch-treasury').classList.contains('active'))updateQuintUI();
    }
    // renderBattle() removed from periodic loop — it is called on every real
    // state change (startBattle/stopBattle/onWin/unlockNextCreature/tab-switch/load).
    // Keeping it here caused full innerHTML replacement every ~500 ms which
    // destroyed the button under the cursor and reset its :hover state → flicker.
    if(document.getElementById('tab-shop').classList.contains('active'))renderShop();
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
requestAnimationFrame(gameLoop);
setInterval(regenTick, 1000);