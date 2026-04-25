import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    stars: 5,
    service: "Residential Renovation",
    location: "Marine Lines",
    text: "Gunatit Enterprise did an amazing job renovating our home. The team was very supportive throughout the process and guided us at every step. The final result came out even better than we expected. Definitely one of the most reliable civil contractor in Mumbai we've worked with.",
    icon: "🏠",
    initial: "MR",
  },
  {
    stars: 5,
    service: "Bathroom & Kitchen Remodeling",
    location: "Kandivali",
    text: "We got our kitchen and bathroom renovated by Gunatit Enterprise, and the experience was really smooth. The designs are modern and practical, and the work was completed on time. If you're searching for a good civil contractor in Mumbai, you can trust them.",
    icon: "🍳",
    initial: "KR",
  },
  {
    stars: 5,
    service: "RCC & Structural Work",
    location: "Borivali",
    text: "We hired them for RCC and structural work, and the quality was very solid. Everything was done properly with attention to safety and durability. It's hard to find a civil contractor in Mumbai with this level of expertise.",
    icon: "🏗️",
    initial: "BR",
  },
  {
    stars: 5,
    service: "Commercial Project Execution",
    location: "Juhu",
    text: "Our commercial project was handled very professionally. The team was well-organized, and communication was clear from start to finish. They delivered on time without compromising on quality. Highly recommend them as a civil contractor in Mumbai.",
    icon: "🏢",
    initial: "JC",
  },
  {
    stars: 5,
    service: "Interior & Finishing Work",
    location: "Mira Road",
    text: "We got interior and finishing work done, including POP and painting. The finishing quality was neat, and the team paid attention to small details. Overall, a very good experience with this civil contractor in Mumbai.",
    icon: "🎨",
    initial: "MM",
  },
  {
    stars: 5,
    service: "Waterproofing & Maintenance",
    location: "Andheri",
    text: "We had leakage issues for a long time, and Gunatit Enterprise provided a proper waterproofing solution. It's been months now, and there are no problems. They are a dependable civil contractor in Mumbai.",
    icon: "💧",
    initial: "AW",
  },
  {
    stars: 5,
    service: "End-to-End Construction",
    location: "Goa",
    text: "We wanted everything to be managed by one team, and Gunatit Enterprise handled civil work, interiors, and electrical perfectly. It made the whole process stress-free for us. A genuine and professional civil contractor in Mumbai.",
    icon: "🌴",
    initial: "GC",
  },
];

const orange = "#f97316";
const cream = "#fff7ed";
const dark = "#1a2332";
const orangeLight = "rgba(249,115,22,0.10)";

export default function ClientTestimonials() {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("right");
  const autoRef = useRef(null);
  const total = testimonials.length;

  const goTo = (idx, dir = "right") => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setActive((idx + total) % total);
      setIsAnimating(false);
    }, 300);
  };

  const prev = () => goTo(active - 1, "left");
  const next = () => goTo(active + 1, "right");

  useEffect(() => {
    autoRef.current = setInterval(() => goTo(active + 1, "right"), 5000);
    return () => clearInterval(autoRef.current);
  }, [active]);

  // Visible cards: prev, active, next (3 at a time on desktop)
  const getVisible = () => {
    return [
      (active - 1 + total) % total,
      active,
      (active + 1) % total,
    ];
  };

  const visibleIdx = getVisible();

  return (
    <section
      style={{ fontFamily: "'DM Sans', sans-serif", background: cream }}
      className="py-20 px-4 md:px-8 overflow-hidden"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500;600&display=swap');
        .display-font { font-family: 'Playfair Display', serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px) scale(0.97); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px) scale(0.97); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes slideOutRight {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(40px); }
        }
        @keyframes slideOutLeft {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(-40px); }
        }

        .fade-up { animation: fadeUp 0.6s ease forwards; opacity: 0; }
        .d1{animation-delay:0.05s} .d2{animation-delay:0.15s} .d3{animation-delay:0.25s}

        .tcard {
          background: #ffffff;
          border: 1.5px solid #fed7aa;
          border-radius: 20px;
          transition: all 0.4s cubic-bezier(0.25,0.46,0.45,0.94);
          position: relative;
          overflow: hidden;
        }
        .tcard::before {
          content: '"';
          position: absolute;
          top: -10px; right: 20px;
          font-size: 120px;
          font-family: 'Playfair Display', serif;
          color: rgba(249,115,22,0.07);
          line-height: 1;
          pointer-events: none;
        }
        .tcard.center-card {
          border-color: ${orange};
          box-shadow: 0 20px 60px rgba(249,115,22,0.18);
          transform: scale(1.03);
          z-index: 2;
        }
        .tcard.side-card {
          opacity: 0.65;
          transform: scale(0.96);
          border-color: #fed7aa;
          box-shadow: none;
        }

        .avatar {
          width: 48px; height: 48px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-weight: 700; font-size: 15px;
          color: white;
          background: linear-gradient(135deg, ${orange}, #ea580c);
          flex-shrink: 0;
        }

        .star { color: ${orange}; font-size: 14px; }

        .nav-btn {
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1.5px solid #fed7aa;
          background: white;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          color: ${orange};
        }
        .nav-btn:hover {
          background: ${orange};
          border-color: ${orange};
          color: white;
          box-shadow: 0 4px 16px rgba(249,115,22,0.25);
        }

        .dot {
          height: 8px; border-radius: 4px;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .dot.active { background: ${orange}; width: 28px; }
        .dot.inactive { background: #fed7aa; width: 8px; }
        .dot:hover { background: ${orange}; }

        .section-pill {
          background: ${orangeLight};
          border: 1px solid #fed7aa;
          color: ${orange};
        }
      `}</style>

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14 fade-up d1">
          <span className="section-pill inline-block text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Client Testimonials
          </span>
          <h2
            className="display-font text-4xl md:text-5xl font-bold leading-tight mb-4"
            style={{ color: dark }}
          >
            What Our{" "}
            <span style={{ color: orange }}>Clients</span> Say
          </h2>
          <p className="text-slate-500 text-base font-light max-w-lg mx-auto leading-relaxed">
            Trusted by homeowners and businesses across Mumbai — here's what they experienced.
          </p>

          {/* Stars row */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="star text-xl">⭐</span>
            ))}
            <span className="text-sm text-slate-500 font-light ml-2">5.0 Average Rating · 7 Reviews</span>
          </div>
        </div>

        {/* ── DESKTOP SWIPER (3 cards) ── */}
        <div className="hidden md:grid grid-cols-3 gap-5 mb-10 fade-up d2">
          {visibleIdx.map((idx, pos) => {
            const t = testimonials[idx];
            const isCenter = pos === 1;
            return (
              <div
                key={`${idx}-${active}`}
                className={`tcard p-6 ${isCenter ? "center-card" : "side-card"}`}
                onClick={() => !isCenter && (pos === 0 ? prev() : next())}
                style={{ cursor: isCenter ? "default" : "pointer" }}
              >
                {/* Service tag */}
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: orangeLight, color: orange }}
                  >
                    {t.icon} {t.service}
                  </span>
                  {isCenter && (
                    <span
                      className="text-xs px-2.5 py-1 rounded-full font-medium text-white ml-auto"
                      style={{ background: orange }}
                    >
                      Featured
                    </span>
                  )}
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.stars)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>

                {/* Text */}
                <p className="text-slate-600 text-sm leading-relaxed font-light mb-5 line-clamp-4">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-orange-100">
                  <div className="avatar">{t.initial}</div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: dark }}>
                      Verified Client
                    </div>
                    <div className="text-xs text-slate-400 flex items-center gap-1">
                      <span>📍</span> {t.location}
                    </div>
                  </div>
                  <div className="ml-auto">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={orangeLight} stroke={orange} strokeWidth="1.5">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── MOBILE SWIPER (1 card) ── */}
        <div className="md:hidden mb-10 fade-up d2">
          <div
            className="tcard center-card p-6"
            style={{
              animation: isAnimating
                ? direction === "right"
                  ? "slideOutLeft 0.3s ease forwards"
                  : "slideOutRight 0.3s ease forwards"
                : direction === "right"
                ? "slideInRight 0.35s ease forwards"
                : "slideInLeft 0.35s ease forwards",
            }}
          >
            {(() => {
              const t = testimonials[active];
              return (
                <>
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: orangeLight, color: orange }}
                    >
                      {t.icon} {t.service}
                    </span>
                    <span
                      className="text-xs px-2.5 py-1 rounded-full font-medium text-white ml-auto"
                      style={{ background: orange }}
                    >
                      {t.location}
                    </span>
                  </div>
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(t.stars)].map((_, i) => (
                      <span key={i} className="star">⭐</span>
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed font-light mb-5">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-orange-100">
                    <div className="avatar">{t.initial}</div>
                    <div>
                      <div className="text-sm font-semibold" style={{ color: dark }}>Verified Client</div>
                      <div className="text-xs text-slate-400">📍 {t.location}</div>
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-5 fade-up d3">
          <button className="nav-btn" onClick={prev}>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`dot ${i === active ? "active" : "inactive"}`}
                onClick={() => goTo(i, i > active ? "right" : "left")}
              />
            ))}
          </div>

          <button className="nav-btn" onClick={next}>
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Counter */}
        <div className="text-center mt-4 fade-up d3">
          <span className="text-sm text-slate-400 font-light">
            <span style={{ color: orange, fontWeight: 600 }}>{active + 1}</span>
            {" "}/ {total}
          </span>
        </div>
      </div>
    </section>
  );
}