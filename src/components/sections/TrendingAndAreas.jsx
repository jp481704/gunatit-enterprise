import { useState } from "react";

const trends = [
  {
    icon: "💧",
    title: "Advanced Waterproofing Solutions",
    desc: "Long-Term Protection",
    detail: "Cutting-edge waterproofing systems that seal structures against moisture for decades.",
  },
  {
    icon: "🏠",
    title: "Smart Interior & Space Optimization",
    desc: "Modern Design",
    detail: "Intelligent layouts that maximize every square foot with functional, beautiful interiors.",
  },
  {
    icon: "🏗️",
    title: "Durable RCC Structures",
    desc: "High-Rise Buildings",
    detail: "Reinforced concrete construction engineered for strength, safety, and longevity.",
  },
  {
    icon: "⚡",
    title: "Energy-Efficient Electrical Installations",
    desc: "Smart Utilities",
    detail: "Modern wiring systems and lighting setups that reduce energy consumption significantly.",
  },
  {
    icon: "🏢",
    title: "Modern Commercial Infrastructure",
    desc: "Development",
    detail: "Future-ready commercial spaces designed to meet growing business and institutional needs.",
  },
];

const areas = [
  {
    city: "Mumbai",
    badge: "Primary Location",
    icon: "📍",
    desc: "Our headquarters and main operational hub — serving all neighbourhoods across the city.",
    primary: true,
  },
  {
    city: "Pune",
    badge: "Service Area",
    icon: "🗺️",
    desc: "Expanding our trusted construction expertise to Pune's fast-growing residential and commercial sectors.",
    primary: false,
  },
  {
    city: "Goa",
    badge: "Dervan",
    icon: "🌴",
    desc: "Bringing quality civil and interior construction to the coastal communities of Dervan, Goa.",
    primary: false,
  },
];

const orange = "#f97316";
const cream = "#fff7ed";
const dark = "#1a2332";
const orangeDark = "#ea6c00";
const orangeLight = "rgba(249,115,22,0.10)";

export default function TrendingAndAreas() {
  const [hoveredTrend, setHoveredTrend] = useState(null);
  const [hoveredArea, setHoveredArea] = useState(null);

  return (
    <section
      style={{ fontFamily: "'DM Sans', sans-serif", background: cream }}
      className="py-20 px-4 md:px-8"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500;600&display=swap');
        .display-font { font-family: 'Playfair Display', serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.55s ease forwards; opacity: 0; }
        .d1{animation-delay:0.05s} .d2{animation-delay:0.12s}
        .d3{animation-delay:0.19s} .d4{animation-delay:0.26s}
        .d5{animation-delay:0.33s} .d6{animation-delay:0.40s}
        .d7{animation-delay:0.47s} .d8{animation-delay:0.54s}
        .d9{animation-delay:0.61s}

        .trend-card {
          background: #ffffff;
          border: 1.5px solid #fed7aa;
          border-left: 4px solid #fdba74;
          transition: all 0.25s ease;
          cursor: default;
        }
        .trend-card:hover {
          border-left-color: ${orange};
          background: ${cream};
          transform: translateX(5px);
          box-shadow: 0 6px 24px rgba(249,115,22,0.12);
        }
        .trend-card.active {
          border-left-color: ${orange};
          background: ${cream};
          box-shadow: 0 6px 24px rgba(249,115,22,0.12);
        }

        .area-card {
          background: #ffffff;
          border: 1.5px solid #fed7aa;
          transition: all 0.3s ease;
          cursor: default;
        }
        .area-card:hover {
          border-color: ${orange};
          box-shadow: 0 8px 32px rgba(249,115,22,0.15);
          transform: translateY(-4px);
        }
        .area-card.primary-card {
          border: 2px solid ${orange};
          background: ${cream};
        }

        .number-badge {
          width: 28px; height: 28px;
          background: ${orangeLight};
          color: ${orange};
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 12px; font-weight: 700;
          flex-shrink: 0;
        }

        .section-pill {
          background: ${orangeLight};
          border: 1px solid #fed7aa;
          color: ${orange};
        }

        .divider-line {
          flex: 1; height: 1px;
          background: linear-gradient(to right, #fed7aa, transparent);
        }

        .checkmark {
          width: 18px; height: 18px; border-radius: 50%;
          background: ${orange}; color: white;
          display: flex; align-items: center; justify-content: center;
          font-size: 10px; font-weight: 800;
          flex-shrink: 0;
        }
      `}</style>

      <div className="max-w-5xl mx-auto">

        {/* ── SECTION 1: TRENDING ── */}
        <div className="fade-up d1 text-center mb-12">
          <span className="section-pill inline-block text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Mumbai Trends
          </span>
          <h2
            className="display-font text-4xl md:text-5xl font-bold leading-tight mb-4"
            style={{ color: dark }}
          >
            Trending Construction{" "}
            <span style={{ color: orange }}>Solutions</span>
            <br className="hidden md:block" /> in Mumbai
          </h2>
          <p className="text-slate-500 text-base font-light max-w-xl mx-auto leading-relaxed">
            Stay ahead with modern construction trends handled by an expert civil contractor in Mumbai.
          </p>
        </div>

        {/* Trends list */}
        <div className="space-y-3 mb-6 fade-up d2">
          {trends.map((t, i) => (
            <div
              key={i}
              className={`trend-card rounded-xl px-5 py-4 fade-up d${i + 2}`}
              onMouseEnter={() => setHoveredTrend(i)}
              onMouseLeave={() => setHoveredTrend(null)}
            >
              <div className="flex items-center gap-4">
                {/* Number */}
                <span className="number-badge">{String(i + 1).padStart(2, "0")}</span>

                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: orangeLight }}
                >
                  {t.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center flex-wrap gap-2">
                    <span
                      className="text-sm md:text-base font-semibold"
                      style={{ color: dark }}
                    >
                      {t.title}
                    </span>
                    <span
                      className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                      style={{ background: orangeLight, color: orange }}
                    >
                      {t.desc}
                    </span>
                  </div>
                  {/* Detail on hover */}
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: hoveredTrend === i ? "48px" : "0px",
                      opacity: hoveredTrend === i ? 1 : 0,
                    }}
                  >
                    <p className="text-slate-500 text-sm font-light mt-1">{t.detail}</p>
                  </div>
                </div>

                {/* Arrow */}
                <svg
                  width="18" height="18" viewBox="0 0 24 24" fill="none"
                  stroke={hoveredTrend === i ? orange : "#d1d5db"}
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="flex-shrink-0 transition-colors duration-200"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div
          className="flex items-start gap-3 px-5 py-4 rounded-xl mb-20 fade-up d7"
          style={{ background: "#fff", border: `1.5px dashed #fed7aa` }}
        >
          <span className="text-orange-400 text-lg mt-0.5">💡</span>
          <p className="text-sm text-slate-600 font-light leading-relaxed">
            We continuously adopt new techniques to deliver{" "}
            <span className="font-semibold text-slate-700">future-ready construction solutions</span>{" "}
            across Mumbai and beyond.
          </p>
        </div>

        {/* ── DIVIDER ── */}
        <div className="flex items-center gap-4 mb-16 fade-up d7">
          <div className="divider-line" />
          <div
            className="px-5 py-2 rounded-full text-sm font-semibold text-white flex-shrink-0"
            style={{ background: orange }}
          >
            📍 Service Areas
          </div>
          <div
            className="divider-line"
            style={{ background: "linear-gradient(to left, #fed7aa, transparent)" }}
          />
        </div>

        {/* ── SECTION 2: SERVICE AREAS ── */}
        <div className="fade-up d7 text-center mb-10">
          <h2
            className="display-font text-4xl md:text-5xl font-bold leading-tight mb-3"
            style={{ color: dark }}
          >
            Where We{" "}
            <span style={{ color: orange }}>Serve</span>
          </h2>
          <p className="text-slate-500 text-base font-light max-w-md mx-auto">
            We proudly serve as a reliable civil contractor in Mumbai and nearby regions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14 fade-up d8">
          {areas.map((a, i) => (
            <div
              key={i}
              className={`area-card rounded-2xl p-6 fade-up d${i + 7} ${a.primary ? "primary-card" : ""}`}
              onMouseEnter={() => setHoveredArea(i)}
              onMouseLeave={() => setHoveredArea(null)}
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{
                    background: a.primary ? orange : orangeLight,
                    color: a.primary ? "#fff" : orange,
                  }}
                >
                  {a.badge}
                </span>
                <span className="text-2xl">{a.icon}</span>
              </div>

              {/* City name */}
              <h3
                className="display-font text-3xl font-bold mb-2"
                style={{ color: hoveredArea === i || a.primary ? orange : dark }}
              >
                {a.city}
              </h3>

              {/* Desc */}
              <p className="text-slate-500 text-sm font-light leading-relaxed">
                {a.desc}
              </p>

              {/* Bottom line */}
              <div
                className="mt-5 h-0.5 rounded-full transition-all duration-300"
                style={{
                  background: hoveredArea === i || a.primary ? orange : "#fed7aa",
                  width: hoveredArea === i || a.primary ? "100%" : "40%",
                }}
              />
            </div>
          ))}
        </div>

       

      </div>
    </section>
  );
}