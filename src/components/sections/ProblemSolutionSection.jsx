import { useState } from "react";

const problems = [
  {
    icon: "⏳",
    title: "Delays",
    desc: "Missed deadlines cascade into cost overruns, disputes, and lost trust.",
  },
  {
    icon: "🪚",
    title: "Poor Workmanship",
    desc: "Substandard work leads to structural issues, rework, and long-term damage.",
  },
  {
    icon: "💸",
    title: "Budget Overruns",
    desc: "Hidden costs and mismanagement drain budgets far beyond initial estimates.",
  },
];

const solutions = [
  {
    icon: "📋",
    title: "Proper Planning",
    desc: "Every project begins with a thorough blueprint, timeline, and resource allocation.",
  },
  {
    icon: "👷",
    title: "Skilled Supervision",
    desc: "Our experienced site managers oversee every phase with precision and accountability.",
  },
  {
    icon: "🤝",
    title: "Transparent Communication",
    desc: "Regular updates, clear pricing, and honest timelines — no surprises, ever.",
  },
];

const accent = "#e5342a";
const accentLight = "rgba(229,52,42,0.08)";
const dark = "#1a2332";

export default function ProblemSolutionSection() {
  const [hoveredProblem, setHoveredProblem] = useState(null);
  const [hoveredSolution, setHoveredSolution] = useState(null);

  return (
    <section
      style={{ fontFamily: "'DM Sans', sans-serif" }}
      className="bg-white py-20 px-4 md:px-8"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500;600&display=swap');
        .display-font { font-family: 'Playfair Display', serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.55s ease forwards; opacity: 0; }
        .d1 { animation-delay: 0.05s; }
        .d2 { animation-delay: 0.12s; }
        .d3 { animation-delay: 0.19s; }
        .d4 { animation-delay: 0.26s; }
        .d5 { animation-delay: 0.33s; }
        .d6 { animation-delay: 0.40s; }
        .d7 { animation-delay: 0.47s; }

        .problem-card {
          border: 1.5px solid #fee2e2;
          border-left: 4px solid #fca5a5;
          background: #fff5f5;
          transition: all 0.25s ease;
        }
        .problem-card:hover {
          border-left-color: ${accent};
          background: #fff1f0;
          transform: translateX(4px);
          box-shadow: 0 4px 20px rgba(229,52,42,0.08);
        }

        .solution-card {
          border: 1.5px solid #dcfce7;
          border-left: 4px solid #86efac;
          background: #f0fdf4;
          transition: all 0.25s ease;
        }
        .solution-card:hover {
          border-left-color: #16a34a;
          background: #dcfce7;
          transform: translateX(4px);
          box-shadow: 0 4px 20px rgba(22,163,74,0.08);
        }

        .vs-pill {
          background: ${dark};
          color: white;
        }
        .divider-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, transparent, #e5e7eb, transparent);
        }
      `}</style>

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 fade-up d1">
          <span
            className="inline-block text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 border"
            style={{ borderColor: accent, color: accent, background: accentLight }}
          >
            Industry Insight
          </span>
          <h2
            className="display-font text-4xl md:text-5xl font-bold leading-tight mb-4"
            style={{ color: dark }}
          >
            Why Most Construction Projects{" "}
            <span style={{ color: accent }}>Fail</span>
          </h2>
          <p className="text-slate-500 text-base font-light max-w-lg mx-auto leading-relaxed">
            And exactly how <strong className="font-semibold text-slate-700">Gunatit Enterprise</strong> ensures yours doesn't.
          </p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">

          {/* LEFT — Problems */}
          <div className="fade-up d2">
            {/* Column header */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold"
                style={{ background: accent }}
              >
                <span>❌</span> Common Problems
              </div>
              <div className="divider-line" />
            </div>

            <div className="space-y-4">
              {problems.map((p, i) => (
                <div
                  key={i}
                  className={`problem-card rounded-xl px-5 py-4 cursor-default fade-up d${i + 2}`}
                  onMouseEnter={() => setHoveredProblem(i)}
                  onMouseLeave={() => setHoveredProblem(null)}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: "#fee2e2" }}
                    >
                      {p.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-base font-semibold"
                          style={{ color: "#c0392b" }}
                        >
                          ❌ {p.title}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 font-light leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Solutions */}
          <div className="fade-up d3">
            {/* Column header */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-semibold"
                style={{ background: "#16a34a" }}
              >
                <span>✔</span> How We Solve It
              </div>
              <div className="divider-line" />
            </div>

            <div className="space-y-4">
              {solutions.map((s, i) => (
                <div
                  key={i}
                  className={`solution-card rounded-xl px-5 py-4 cursor-default fade-up d${i + 4}`}
                  onMouseEnter={() => setHoveredSolution(i)}
                  onMouseLeave={() => setHoveredSolution(null)}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: "#dcfce7" }}
                    >
                      {s.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-base font-semibold"
                          style={{ color: "#15803d" }}
                        >
                          ✔ {s.title}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 font-light leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
}