import { useEffect, useRef, useState } from "react";

const orange = "#f97316";
const cream = "#fff7ed";

const logos = [
  {
    name: "BuildCraft",
    svg: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="14" width="10" height="11" rx="2" fill={orange} opacity="0.85"/>
        <rect x="15" y="8" width="10" height="17" rx="2" fill={orange}/>
        <rect x="7" y="3" width="14" height="3" rx="1.5" fill="#1a2332"/>
        <rect x="11" y="6" width="6" height="8" rx="1" fill="#1a2332" opacity="0.15"/>
      </svg>
    ),
  },
  {
    name: "StructurePro",
    svg: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke={orange} strokeWidth="2"/>
        <circle cx="14" cy="14" r="4" fill={orange}/>
        <line x1="4" y1="14" x2="24" y2="14" stroke={orange} strokeWidth="1.5"/>
        <line x1="14" y1="4" x2="14" y2="24" stroke={orange} strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    name: "CivilPlus",
    svg: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke={orange} strokeWidth="2"/>
        <ellipse cx="14" cy="14" rx="5" ry="10" stroke={orange} strokeWidth="1.5"/>
        <line x1="4" y1="14" x2="24" y2="14" stroke={orange} strokeWidth="1.5"/>
        <line x1="5" y1="9" x2="23" y2="9" stroke={orange} strokeWidth="1"/>
        <line x1="5" y1="19" x2="23" y2="19" stroke={orange} strokeWidth="1"/>
      </svg>
    ),
  },
  {
    name: "MasonWork",
    svg: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="6" fill={orange}/>
        <circle cx="10" cy="13" r="2" fill="white"/>
        <circle cx="18" cy="13" r="2" fill="white"/>
        <path d="M10 18c1.5 1 6.5 1 8 0" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: "ArchiBase",
    svg: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="8" fill={orange}/>
        <path d="M14 8 L19 13 L14 11 L9 13 Z" fill="white"/>
        <path d="M14 13 L19 18 L14 16 L9 18 Z" fill="white" opacity="0.6"/>
      </svg>
    ),
  },
  {
    name: "RoofLine",
    svg: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 16L14 5l10 11H4z" fill={orange} opacity="0.9"/>
        <rect x="9" y="16" width="10" height="8" rx="1" fill={orange}/>
        <rect x="12" y="19" width="4" height="5" rx="1" fill="white" opacity="0.7"/>
      </svg>
    ),
  },
  {
    name: "SteelForm",
    svg: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="6" width="20" height="4" rx="2" fill={orange}/>
        <rect x="4" y="12" width="20" height="4" rx="2" fill={orange} opacity="0.7"/>
        <rect x="4" y="18" width="20" height="4" rx="2" fill={orange} opacity="0.45"/>
        <rect x="6" y="6" width="3" height="16" rx="1.5" fill="#1a2332" opacity="0.15"/>
        <rect x="19" y="6" width="3" height="16" rx="1.5" fill="#1a2332" opacity="0.15"/>
      </svg>
    ),
  },
  {
    name: "Concreto",
    svg: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C9 4 5 8 5 13c0 3 1.5 5.5 4 7l-1 3h12l-1-3c2.5-1.5 4-4 4-7 0-5-4-9-9-9z" fill={orange}/>
        <circle cx="10.5" cy="12.5" r="1.5" fill="white"/>
        <circle cx="17.5" cy="12.5" r="1.5" fill="white"/>
        <path d="M11 17c1 1.5 5 1.5 6 0" stroke="white" strokeWidth="1" fill="none" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function LogoStrip() {
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [fadeIn, setFadeIn] = useState(true);
  const timerRef = useRef(null);
  const total = logos.length;

  const advance = () => {
    setFadeIn(false);
    setIsAnimating(true);
    setTimeout(() => {
      setMobileIndex((prev) => (prev + 1) % total);
      setFadeIn(true);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    timerRef.current = setInterval(advance, 2500);
    return () => clearInterval(timerRef.current);
  }, []);

  // Duplicate logos for infinite marquee on desktop
  const marqueeLogos = [...logos, ...logos];

  return (
    <div
      style={{ background: cream, fontFamily: "'DM Sans', sans-serif" }}
      className="border-y border-orange-100 py-10 overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap');

        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes logoFadeIn {
          from { opacity: 0; transform: scale(0.95) translateY(6px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .logo-fade { animation: logoFadeIn 0.35s ease forwards; }

        .logo-chip {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 22px;
          border-radius: 999px;
          border: 1.5px solid #fed7aa;
          background: white;
          white-space: nowrap;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        .logo-chip:hover {
          border-color: ${orange};
          box-shadow: 0 4px 16px rgba(249,115,22,0.14);
          transform: translateY(-2px);
        }

        .mobile-dot {
          width: 6px; height: 6px; border-radius: 50%;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .mobile-dot.active {
          background: ${orange};
          width: 20px;
          border-radius: 4px;
        }
        .mobile-dot.inactive { background: #fed7aa; }
      `}</style>

      {/* Label */}
      <p
        className="text-center text-xs tracking-widest uppercase font-semibold mb-7"
        style={{ color: orange, opacity: 0.7 }}
      >
        Trusted by Leading Companies
      </p>

      {/* ── DESKTOP: Infinite marquee showing ~4 at a time ── */}
      <div className="hidden md:block relative">
        {/* Fade edges */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
          style={{ background: `linear-gradient(to right, ${cream}, transparent)` }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
          style={{ background: `linear-gradient(to left, ${cream}, transparent)` }}
        />

        <div className="marquee-track">
          {marqueeLogos.map(({ svg, name }, i) => (
            <div key={i} className="logo-chip mx-3">
              {svg}
              <span
                className="font-bold text-xl tracking-tight"
                style={{ color: "#1a2332" }}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── MOBILE: Single logo auto-slider ── */}
      <div className="md:hidden flex flex-col items-center gap-5">
        <div
          className="logo-chip px-8 py-4"
          style={{
            opacity: fadeIn ? 1 : 0,
            transform: fadeIn ? "scale(1)" : "scale(0.95)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          <div style={{ transform: "scale(1.3)" }}>{logos[mobileIndex].svg}</div>
          <span
            className="font-bold text-2xl tracking-tight"
            style={{ color: "#1a2332" }}
          >
            {logos[mobileIndex].name}
          </span>
        </div>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {logos.map((_, i) => (
            <div
              key={i}
              className={`mobile-dot ${i === mobileIndex ? "active" : "inactive"}`}
              onClick={() => {
                clearInterval(timerRef.current);
                setMobileIndex(i);
                timerRef.current = setInterval(advance, 2500);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}