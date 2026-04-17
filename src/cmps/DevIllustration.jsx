import "../styles/DevIllustration.css";

export default function DevIllustration() {
  return (
    <div className="dev-illustration" aria-hidden="true">
      <svg
        viewBox="0 0 400 340"
        xmlns="http://www.w3.org/2000/svg"
        className="dev-svg"
      >
        {/* ── Desk ─────────────────────────────── */}
        <rect x="40" y="240" width="320" height="14" rx="4" fill="#1e293b" />
        <rect x="80" y="254" width="12" height="60" rx="3" fill="#1e293b" />
        <rect x="308" y="254" width="12" height="60" rx="3" fill="#1e293b" />

        {/* ── Monitor stand ────────────────────── */}
        <rect x="190" y="210" width="20" height="32" rx="2" fill="#334155" />
        <rect x="165" y="238" width="70" height="6" rx="3" fill="#334155" />

        {/* ── Monitor ──────────────────────────── */}
        <rect x="100" y="80" width="200" height="134" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="2" />
        {/* screen face */}
        <rect x="110" y="90" width="180" height="114" rx="4" fill="#0d1117" />

        {/* ── Code on screen ───────────────────── */}
        {/* line 1 */}
        <rect x="120" y="100" width="60" height="5" rx="2" fill="#10b981" />
        <rect x="186" y="100" width="40" height="5" rx="2" fill="#60a5fa" />
        {/* line 2 */}
        <rect x="128" y="112" width="30" height="5" rx="2" fill="#f472b6" />
        <rect x="164" y="112" width="50" height="5" rx="2" fill="#94a3b8" />
        {/* line 3 */}
        <rect x="128" y="124" width="70" height="5" rx="2" fill="#94a3b8" />
        {/* line 4 */}
        <rect x="128" y="136" width="45" height="5" rx="2" fill="#fbbf24" />
        <rect x="179" y="136" width="30" height="5" rx="2" fill="#10b981" />
        {/* line 5 */}
        <rect x="128" y="148" width="55" height="5" rx="2" fill="#94a3b8" />
        {/* line 6 */}
        <rect x="128" y="160" width="35" height="5" rx="2" fill="#f472b6" />
        <rect x="169" y="160" width="25" height="5" rx="2" fill="#fbbf24" />
        {/* line 7 */}
        <rect x="120" y="172" width="40" height="5" rx="2" fill="#10b981" />

        {/* ── Blinking cursor ──────────────────── */}
        <rect x="230" y="172" width="2" height="10" rx="1" fill="#10b981" className="cursor-blink" />

        {/* ── Scrolling new code line (animated) ─ */}
        <rect x="128" y="184" width="0" height="5" rx="2" fill="#60a5fa" className="type-line" />

        {/* ── Chair ────────────────────────────── */}
        <rect x="155" y="268" width="90" height="8" rx="4" fill="#1e3a5f" />
        <rect x="192" y="276" width="16" height="28" rx="3" fill="#1e3a5f" />
        <rect x="175" y="296" width="50" height="8" rx="4" fill="#1e3a5f" />
        {/* chair back */}
        <rect x="160" y="230" width="80" height="42" rx="6" fill="#1e3a5f" />

        {/* ── Person body ──────────────────────── */}
        {/* torso */}
        <rect x="172" y="185" width="56" height="52" rx="8" fill="#f97316" />
        {/* head */}
        <ellipse cx="200" cy="172" rx="20" ry="18" fill="#fbbf24" />
        {/* hair */}
        <path d="M180 162 Q200 148 220 162 Q218 155 200 152 Q182 155 180 162Z" fill="#1e293b" />
        {/* eyes */}
        <ellipse cx="193" cy="170" rx="2.5" ry="3" fill="#1e293b" />
        <ellipse cx="207" cy="170" rx="2.5" ry="3" fill="#1e293b" />
        {/* slight smile */}
        <path d="M194 178 Q200 183 206 178" stroke="#92400e" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* ── Arms ─────────────────────────────── */}
        {/* left arm - animated */}
        <g className="arm-left">
          <rect x="148" y="192" width="26" height="10" rx="5" fill="#f97316" />
          <rect x="136" y="198" width="20" height="9" rx="4" fill="#fbbf24" />
        </g>
        {/* right arm - animated (offset phase) */}
        <g className="arm-right">
          <rect x="226" y="192" width="26" height="10" rx="5" fill="#f97316" />
          <rect x="244" y="198" width="20" height="9" rx="4" fill="#fbbf24" />
        </g>

        {/* ── Keyboard ─────────────────────────── */}
        <rect x="130" y="212" width="140" height="24" rx="4" fill="#1e293b" />
        {/* key rows */}
        {[0,1,2,3,4,5,6,7,8,9,10,11].map(k => (
          <rect key={k} x={135 + k * 11} y="216" width="8" height="6" rx="1" fill="#334155" />
        ))}
        {[0,1,2,3,4,5,6,7,8,9,10].map(k => (
          <rect key={k} x={138 + k * 11} y="225" width="8" height="6" rx="1" fill="#334155" />
        ))}

        {/* ── Floating icons ───────────────────── */}
        {/* React icon */}
        <g className="float-1" transform="translate(50, 60)">
          <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#61dafb" strokeWidth="1.5" />
          <text x="0" y="5" textAnchor="middle" fontSize="14" fill="#61dafb" fontWeight="bold">⚛</text>
        </g>
        {/* JS icon */}
        <g className="float-2" transform="translate(340, 55)">
          <rect x="-18" y="-18" width="36" height="36" rx="6" fill="#f7df1e" />
          <text x="0" y="6" textAnchor="middle" fontSize="13" fill="#000" fontWeight="bold">JS</text>
        </g>
        {/* code tag icon */}
        <g className="float-3" transform="translate(350, 155)">
          <rect x="-20" y="-16" width="40" height="32" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
          <text x="0" y="5" textAnchor="middle" fontSize="11" fill="#10b981" fontWeight="bold">&lt;/&gt;</text>
        </g>
        {/* Node icon */}
        <g className="float-4" transform="translate(45, 160)">
          <circle cx="0" cy="0" r="18" fill="#0f172a" stroke="#68d391" strokeWidth="1.5" />
          <text x="0" y="5" textAnchor="middle" fontSize="9" fill="#68d391" fontWeight="bold">Node</text>
        </g>

        {/* ── Plant (decorative, no animation) ─── */}
        <rect x="342" y="220" width="12" height="22" rx="3" fill="#78350f" />
        <ellipse cx="348" cy="216" rx="14" ry="18" fill="#166534" />
        <ellipse cx="340" cy="222" rx="9" ry="12" fill="#15803d" />
        <ellipse cx="356" cy="222" rx="9" ry="12" fill="#15803d" />

        {/* ── Coffee mug ───────────────────────── */}
        <rect x="56" y="226" width="22" height="16" rx="3" fill="#334155" />
        <path d="M78 231 Q86 231 86 237 Q86 243 78 243" stroke="#334155" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* steam */}
        <path d="M62 222 Q64 217 62 212" stroke="#94a3b8" strokeWidth="1.5" fill="none" strokeLinecap="round" className="steam" />
        <path d="M67 222 Q69 216 67 211" stroke="#94a3b8" strokeWidth="1.5" fill="none" strokeLinecap="round" className="steam steam-2" />
        <path d="M72 222 Q74 217 72 212" stroke="#94a3b8" strokeWidth="1.5" fill="none" strokeLinecap="round" className="steam steam-3" />
      </svg>
    </div>
  );
}
