import { useState, useEffect } from "react";

/* ─────────────────────────────────────────
   Building SVG Illustration
───────────────────────────────────────── */
const BuildingIllustration = () => (
  <svg viewBox="0 0 460 400" fill="none" xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full">
    <defs>
      <linearGradient id="b1f" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#2563eb" /><stop offset="100%" stopColor="#1d4ed8" />
      </linearGradient>
      <linearGradient id="b1s" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#1e40af" /><stop offset="100%" stopColor="#1e3a8a" />
      </linearGradient>
      <linearGradient id="b2f" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#3b82f6" /><stop offset="100%" stopColor="#2563eb" />
      </linearGradient>
      <linearGradient id="b3f" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1d4ed8" /><stop offset="100%" stopColor="#1e3a8a" />
      </linearGradient>
      <linearGradient id="wg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.95" />
        <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.75" />
      </linearGradient>
      <linearGradient id="tL" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.35" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.18" />
      </linearGradient>
    </defs>

    {/* Dot grid */}
    {Array.from({ length: 11 }, (_, c) =>
      Array.from({ length: 10 }, (_, r) => (
        <circle key={`${c}-${r}`} cx={c * 44 + 8} cy={r * 40 + 8} r="1.8" fill="#bfdbfe" opacity="0.45" />
      ))
    )}

    <ellipse cx="230" cy="358" rx="175" ry="16" fill="#bfdbfe" opacity="0.4" />

    {/* Back-left building */}
    <g transform="translate(52,105)">
      <polygon points="0,220 68,220 68,18 0,18" fill="url(#b3f)" />
      <polygon points="68,220 122,193 122,0 68,18" fill="url(#b1s)" />
      <polygon points="0,18 68,0 122,0 54,-16" fill="url(#tL)" />
      {[30,58,86,114,142,168,194].map((y, i) => (
        <g key={i}>
          <rect x="8"  y={y} width="13" height="17" rx="1" fill="url(#wg)" opacity="0.80" />
          <rect x="27" y={y} width="13" height="17" rx="1" fill="url(#wg)" opacity="0.73" />
          <rect x="46" y={y} width="13" height="17" rx="1" fill="url(#wg)" opacity="0.66" />
          <rect x="74" y={y+4} width="11" height="14" rx="1" fill="url(#wg)" opacity="0.53" />
          <rect x="91" y={y+4} width="11" height="14" rx="1" fill="url(#wg)" opacity="0.45" />
        </g>
      ))}
    </g>

    {/* Center tall building */}
    <g transform="translate(162,22)">
      <polygon points="0,305 88,305 88,0 0,0" fill="url(#b1f)" />
      <polygon points="88,305 152,272 152,0 88,0" fill="url(#b1s)" />
      <polygon points="0,0 88,-14 152,0 64,14" fill="url(#tL)" />
      {[14,42,70,98,126,154,182,210,238,268].map((y, i) => (
        <g key={i}>
          <rect x="8"   y={y} width="15" height="19" rx="1.5" fill="url(#wg)" opacity="0.92" />
          <rect x="30"  y={y} width="15" height="19" rx="1.5" fill="url(#wg)" opacity="0.85" />
          <rect x="52"  y={y} width="15" height="19" rx="1.5" fill="url(#wg)" opacity="0.78" />
          <rect x="94"  y={y+4} width="13" height="17" rx="1" fill="url(#wg)" opacity="0.63" />
          <rect x="114" y={y+4} width="13" height="17" rx="1" fill="url(#wg)" opacity="0.55" />
          <rect x="134" y={y+4} width="13" height="17" rx="1" fill="url(#wg)" opacity="0.48" />
        </g>
      ))}
    </g>

    {/* Right building */}
    <g transform="translate(318,130)">
      <polygon points="0,215 72,215 72,0 0,0" fill="url(#b2f)" />
      <polygon points="72,215 120,190 120,0 72,0" fill="url(#b1s)" />
      <polygon points="0,0 72,-10 120,0 48,10" fill="url(#tL)" />
      {[14,44,74,104,134,164,190].map((y, i) => (
        <g key={i}>
          <rect x="8"  y={y} width="13" height="17" rx="1" fill="url(#wg)" opacity="0.86" />
          <rect x="27" y={y} width="13" height="17" rx="1" fill="url(#wg)" opacity="0.78" />
          <rect x="46" y={y} width="13" height="17" rx="1" fill="url(#wg)" opacity="0.71" />
          <rect x="78" y={y+3} width="11" height="15" rx="1" fill="url(#wg)" opacity="0.58" />
          <rect x="95" y={y+3} width="11" height="15" rx="1" fill="url(#wg)" opacity="0.50" />
        </g>
      ))}
    </g>

    {/* Brand label */}
    <rect x="196" y="4" width="96" height="30" rx="6" fill="#1e40af" />
    <text x="244" y="14" textAnchor="middle" fill="#93c5fd" fontSize="8" fontWeight="700" fontFamily="system-ui">GUNATIT</text>
    <text x="244" y="25" textAnchor="middle" fill="#bfdbfe" fontSize="7.5" fontFamily="system-ui">ENTERPRISE</text>
    <line x1="244" y1="-8"  x2="244" y2="4" stroke="#60a5fa" strokeWidth="1.5" />
    <circle cx="244" cy="-10" r="3.5" fill="#60a5fa" />

    {/* Dashed connectors */}
    <line x1="340" y1="60" x2="390" y2="80" stroke="#60a5fa" strokeWidth="1" strokeDasharray="4 3" opacity="0.55" />
    <line x1="162" y1="60" x2="110" y2="85" stroke="#60a5fa" strokeWidth="1" strokeDasharray="4 3" opacity="0.55" />

    {/* Accent squares */}
    <rect x="400" y="110" width="16" height="16" rx="2" fill="#1d4ed8" opacity="0.50" />
    <rect x="422" y="133" width="9"  height="9"  rx="1" fill="#3b82f6" opacity="0.40" />
    <rect x="26"  y="148" width="11" height="11" rx="1" fill="#2563eb" opacity="0.40" />
    <rect x="10"  y="170" width="7"  height="7"  rx="1" fill="#60a5fa" opacity="0.36" />
  </svg>
);

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const SERVICES = [
  { icon: "🏗️", label: "Civil Construction" },
  { icon: "🏢", label: "Commercial" },
  { icon: "🏠", label: "Residential" },
  { icon: "🔨", label: "Renovation" },
  { icon: "⚙️", label: "RCC Structure" },
];



/* ─────────────────────────────────────────
   Hero Component
───────────────────────────────────────── */
export default function Hero() {
  const [show, setShow] = useState(false);

  useEffect(() => { setTimeout(() => setShow(true), 100); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;1,400&family=Syne:wght@700;800&family=Outfit:wght@400;500;600;700&display=swap');

        @keyframes fadeUp    { from { opacity:0; transform:translateY(28px) } to { opacity:1; transform:translateY(0) } }
        @keyframes fadeRight { from { opacity:0; transform:translateX(-22px) } to { opacity:1; transform:translateX(0) } }
        @keyframes fadeLeft  { from { opacity:0; transform:translateX(22px)  } to { opacity:1; transform:translateX(0) } }
        @keyframes float     { 0%,100% { transform:translateY(0) } 50% { transform:translateY(-16px) } }
        @keyframes pulseDot  { 0%,100% { opacity:1; transform:scale(1) } 50% { opacity:.45; transform:scale(.72) } }
        @keyframes shimmer   { 0% { background-position:-200% center } 100% { background-position:200% center } }
        @keyframes statPop   { from { opacity:0; transform:scale(.72) } to { opacity:1; transform:scale(1) } }

        .hero-reveal       { opacity:0 }
        .hero-reveal.active { animation: fadeUp    .65s cubic-bezier(.22,1,.36,1) both }
        .hero-reveal-r.active { animation: fadeRight .65s cubic-bezier(.22,1,.36,1) both }
        .hero-reveal-l.active { animation: fadeLeft  .65s cubic-bezier(.22,1,.36,1) both }
        .delay-1  { animation-delay: .08s }
        .delay-2  { animation-delay: .18s }
        .delay-3  { animation-delay: .28s }
        .delay-4  { animation-delay: .38s }
        .delay-5  { animation-delay: .48s }
        .delay-6  { animation-delay: .60s }

        .float-anim { animation: float 6s ease-in-out infinite }

        .pulse-dot { animation: pulseDot 2s ease-in-out infinite }

        .shimmer-italic {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-style: italic;
          background: linear-gradient(90deg, #bfdbfe 0%, #93c5fd 25%, #fff 50%, #93c5fd 75%, #bfdbfe 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .outline-heading {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          -webkit-text-stroke: 2.5px rgba(255,255,255,.62);
          -webkit-text-fill-color: transparent;
        }

        .stat-pop { animation: statPop .5s cubic-bezier(.34,1.56,.64,1) both }
      `}</style>

      {/* ════════════════════════════════
          HERO — two-column split
      ════════════════════════════════ */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">

        {/* ── LEFT – blue panel ── */}
        <div
          className="relative flex flex-col justify-between overflow-hidden"
          style={{
            backgroundImage: [
              "linear-gradient(145deg,#1e40af 0%,#2563eb 55%,#1d4ed8 100%)",
              "linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px)",
              "linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px)",
            ].join(","),
            backgroundSize: "100% 100%, 30px 30px, 30px 30px",
          }}
        >
          {/* Corner glow blob */}
          <div className="absolute -top-24 -left-14 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: "rgba(255,255,255,.04)" }} />

          {/* ── Content ── */}
          <div className="flex flex-col justify-center flex-1 px-8 md:px-12 pt-32 pb-0">

            {/* Badge */}
            <div
              className={`hero-reveal-r ${show ? "active" : ""} delay-1
                self-start inline-flex items-center gap-2.5 mb-7
                rounded-full px-4 py-2 border border-white/20 backdrop-blur-md`}
              style={{ background: "rgba(255,255,255,.1)" }}
            >
              <span className="pulse-dot w-2 h-2 rounded-full bg-blue-300 shrink-0" />
              <span className="text-blue-200 text-xs font-bold tracking-widest"
                style={{ fontFamily: "'Outfit', sans-serif" }}>
                EST. 1999 &nbsp;·&nbsp; MUMBAI'S #1 CIVIL CONTRACTOR
              </span>
            </div>

            {/* Heading */}
            <div className={`hero-reveal ${show ? "active" : ""} delay-2`}
              style={{ lineHeight: 1.07 }}>
              <div className="text-white font-black"
                style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(40px,5.2vw,66px)" }}>
                We Build
              </div>
              <div className="outline-heading"
                style={{ fontSize: "clamp(40px,5.2vw,66px)" }}>
                Mumbai's
              </div>
              <div className="shimmer-italic"
                style={{ fontSize: "clamp(40px,5.2vw,66px)" }}>
                Future
              </div>
            </div>

            {/* Divider */}
            <div className={`hero-reveal ${show ? "active" : ""} delay-3
              w-12 h-0.5 rounded my-5`}
              style={{ background: "rgba(255,255,255,.35)" }} />

            {/* Description */}
            <p className={`hero-reveal ${show ? "active" : ""} delay-3
              text-blue-200 leading-relaxed mb-8 max-w-md`}
              style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "15.5px", lineHeight: "1.78" }}>
              Gunatit Enterprise has been delivering precision-engineered residential,
              commercial &amp; institutional structures since 1999. RCC works, complete civil
              construction, and interior fit-outs — all under one roof.
            </p>

            {/* CTA Buttons */}
            <div className={`hero-reveal ${show ? "active" : ""} delay-4
              flex flex-wrap gap-3 mb-8`}>
              <button
                className="inline-flex items-center gap-2 bg-white text-blue-900 font-bold
                  rounded-xl px-7 py-3.5 text-sm cursor-pointer border-none
                  transition-all duration-300 hover:-translate-y-1 hover:scale-105
                  active:scale-95"
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  boxShadow: "0 6px 28px rgba(0,0,0,.16)",
                }}
              >
                Get a Free Quote &nbsp;→
              </button>
              <button
                className="inline-flex items-center gap-2 text-white font-semibold
                  rounded-xl px-7 py-3.5 text-sm cursor-pointer
                  border border-white/35 backdrop-blur-md
                  transition-all duration-300 hover:bg-white/15 hover:-translate-y-0.5
                  hover:border-white/60"
                style={{
                  fontFamily: "'Outfit',sans-serif",
                  background: "rgba(255,255,255,.08)",
                }}
              >
                View Projects
              </button>
            </div>

            {/* Service Tags */}
            <div className={`hero-reveal ${show ? "active" : ""} delay-5
              flex flex-wrap gap-2.5 pb-10`}>
              {SERVICES.map(s => (
                <span
                  key={s.label}
                  className="inline-flex items-center gap-1.5 text-blue-100
                    rounded-full px-4 py-2 text-xs font-medium cursor-pointer
                    border border-white/18 transition-all duration-200
                    hover:bg-white/18 hover:border-white/40 hover:-translate-y-0.5"
                  style={{
                    fontFamily: "'Outfit',sans-serif",
                    background: "rgba(255,255,255,.09)",
                    fontSize: "13px",
                  }}
                >
                  <span className="text-sm">{s.icon}</span>
                  {s.label}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* ── RIGHT – light panel ── */}
        <div
          className="relative hidden md:flex flex-col justify-between overflow-hidden"
          style={{
            background: "#f0f5ff",
            backgroundImage: "radial-gradient(circle, #c7d7f8 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        >
          {/* Radial glow */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              top: "50%", left: "50%",
              transform: "translate(-50%,-52%)",
              width: "70%", height: "68%",
              background: "radial-gradient(ellipse at center, rgba(147,197,253,.22) 0%, transparent 70%)",
            }}
          />

          {/* Illustration */}
          <div className={`hero-reveal-l ${show ? "active" : ""} delay-6
            flex-1 flex items-center justify-center p-8 pt-28`}>
            <div className="float-anim w-full max-w-lg">
              <BuildingIllustration />
            </div>
          </div>

          {/* ── Right Stats Bar ── */}
          {/* <div
            className="grid grid-cols-2 border-t border-blue-100 backdrop-blur-md"
            style={{ background: "rgba(255,255,255,.75)" }}
          >
            {STATS.slice(2).map((s, i) => (
              <div
                key={s.label}
                className={`stat-pop flex flex-col items-center gap-1 py-5 px-3
                  cursor-default transition-transform duration-200 hover:-translate-y-1
                  ${i === 0 ? "border-r border-blue-100" : ""}`}
                style={{ animationDelay: `${1.05 + i * .1}s` }}
              >
                <span className="text-blue-700 font-black leading-none"
                  style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(26px,3vw,38px)" }}>
                  {s.value}
                </span>
                <span className="text-blue-400 font-semibold uppercase tracking-widest"
                  style={{ fontFamily: "'Outfit',sans-serif", fontSize: "11px" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div> */}
        </div>

      </div>
    </>
  );
}