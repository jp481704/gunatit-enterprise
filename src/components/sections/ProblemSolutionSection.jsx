import { useState, useEffect, useRef } from "react";

const problems = [
  { icon: "⏳", title: "Delays",           desc: "Missed deadlines cascade into cost overruns, disputes, and lost trust with clients." },
  { icon: "🪚", title: "Poor Workmanship", desc: "Substandard work leads to structural issues, expensive rework, and long-term damage." },
  { icon: "💸", title: "Budget Overruns",  desc: "Hidden costs and mismanagement drain budgets far beyond initial estimates." },
];

const solutions = [
  { icon: "📋", title: "Proper Planning",           desc: "Every project begins with a thorough blueprint, timeline, and resource allocation." },
  { icon: "👷", title: "Skilled Supervision",       desc: "Experienced site managers oversee every phase with precision and accountability." },
  { icon: "🤝", title: "Transparent Communication", desc: "Regular updates, clear pricing, and honest timelines — no surprises, ever." },
];

export default function ProblemSolutionSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="problem-solution"
      ref={ref}
      className="bg-white py-16 md:py-24 px-4 md:px-8 overflow-hidden font-['Poppins',sans-serif]"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        @keyframes fadeUp    { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeRight { from{opacity:0;transform:translateX(-28px)} to{opacity:1;transform:translateX(0)} }
        @keyframes fadeLeft  { from{opacity:0;transform:translateX(28px)}  to{opacity:1;transform:translateX(0)} }
        @keyframes shimmer   { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes pulse-ring { 0%,100%{box-shadow:0 0 0 0 rgba(65,103,190,.4)} 50%{box-shadow:0 0 0 10px rgba(65,103,190,0)} }

        .ps-rv  { opacity:0 } .ps-rv.in  { animation: fadeUp    .7s cubic-bezier(.22,1,.36,1) both }
        .ps-rvr { opacity:0 } .ps-rvr.in { animation: fadeRight .7s cubic-bezier(.22,1,.36,1) both }
        .ps-rvl { opacity:0 } .ps-rvl.in { animation: fadeLeft  .7s cubic-bezier(.22,1,.36,1) both }

        .ps-d1.in { animation-delay:.05s }
        .ps-d2.in { animation-delay:.12s }
        .ps-d3.in { animation-delay:.19s }
        .ps-d7.in { animation-delay:.48s }

        .ps-shimmer {
          background: linear-gradient(90deg,#2d4fa3,#4167BE,#7b97d8,#4167BE);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        .ps-badge-dot { animation: pulse-ring 2.2s ease-in-out infinite; }

        .problem-card  {
          position: relative; overflow: hidden;
          transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
        }
        .solution-card {
          position: relative; overflow: hidden;
          transition: transform .25s ease, border-color .25s ease, box-shadow .25s ease;
        }

        .problem-card::before, .solution-card::before {
          content:''; position:absolute; left:0; top:0; bottom:0;
          width:4px; border-radius:16px 0 0 16px; transition:background .2s;
        }
        .problem-card::before  { background:#fca5a5; }
        .solution-card::before { background:#dce5f7; }

        .problem-card:hover  { transform:translateX(4px); border-color:#fca5a5 !important; box-shadow:0 8px 28px rgba(220,38,38,.08); }
        .solution-card:hover { transform:translateX(4px); border-color:#4167BE !important; box-shadow:0 8px 28px rgba(65,103,190,.10); }
        .problem-card:hover::before  { background:#dc2626; }
        .solution-card:hover::before { background:#4167BE; }
      `}</style>

      <div className="max-w-7xl mx-auto">

        {/* ── HEADER ── */}
        <div className={`ps-rv ps-d1 ${inView ? "in" : ""} text-center mb-12 md:mb-14`}>

          {/* Badge */}
          <div className="flex justify-center mb-5">
            <div className="inline-flex items-center gap-2 bg-[#eff3fb] border border-[#dce5f7]
              text-[#4167BE] rounded-full px-5 py-2 text-[11.5px] font-bold
              tracking-[0.1em] uppercase">
              <span className="ps-badge-dot w-2 h-2 rounded-full bg-[#4167BE] flex-shrink-0" />
              Industry Insight
            </div>
          </div>

          <h2 className="font-extrabold text-[#0f1f5c] leading-tight mb-4
            text-3xl sm:text-4xl md:text-5xl">
            Why Most Construction Projects{" "}
            <span className="ps-shimmer">Fail</span>
          </h2>

          <p className="text-slate-500 text-sm sm:text-base leading-7 max-w-[500px] mx-auto font-normal">
            And exactly how{" "}
            <strong className="text-[#0f172a] font-semibold">Gunatit Enterprise</strong>{" "}
            ensures yours doesn't.
          </p>
        </div>

        {/* ── TWO COLUMNS ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* LEFT — Problems */}
          <div className={`ps-rvr ps-d2 ${inView ? "in" : ""}`}>

            {/* Column header */}
            <div className="flex items-center mb-5">
              <div className="inline-flex items-center gap-2 px-5 py-2
                bg-red-50 text-red-600 border border-red-200
                rounded-l-[10px] text-[13px] font-bold whitespace-nowrap">
                <span>❌</span> Common Problems
              </div>
              <div className="flex-1 h-[1.5px] bg-gradient-to-r from-red-200 to-transparent rounded-r-sm" />
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-3.5">
              {problems.map((p, i) => (
                <div key={i}
                  className="problem-card bg-white border border-red-100
                    rounded-2xl p-4 sm:p-5 flex items-start gap-4 cursor-default">
                  <div className="w-11 h-11 rounded-xl bg-red-50 flex items-center
                    justify-center text-xl flex-shrink-0">
                    {p.icon}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-red-600 mb-1">
                      ❌ &nbsp;{p.title}
                    </p>
                    <p className="text-[13px] sm:text-sm text-slate-500 leading-relaxed font-normal">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Solutions */}
          <div className={`ps-rvl ps-d3 ${inView ? "in" : ""}`}>

            {/* Column header */}
            <div className="flex items-center mb-5">
              <div className="inline-flex items-center gap-2 px-5 py-2
                bg-[#eff3fb] text-[#4167BE] border border-[#dce5f7]
                rounded-l-[10px] text-[13px] font-bold whitespace-nowrap">
                <span>✔</span> How We Solve It
              </div>
              <div className="flex-1 h-[1.5px] bg-gradient-to-r from-[#dce5f7] to-transparent rounded-r-sm" />
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-3.5">
              {solutions.map((s, i) => (
                <div key={i}
                  className="solution-card bg-white border border-[#dce5f7]
                    rounded-2xl p-4 sm:p-5 flex items-start gap-4 cursor-default">
                  <div className="w-11 h-11 rounded-xl bg-[#eff3fb] flex items-center
                    justify-center text-xl flex-shrink-0">
                    {s.icon}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-[#2d4fa3] mb-1">
                      ✔ &nbsp;{s.title}
                    </p>
                    <p className="text-[13px] sm:text-sm text-slate-500 leading-relaxed font-normal">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA BANNER ── */}
        <div className={`ps-rv ps-d7 ${inView ? "in" : ""} mt-12 md:mt-14`}>
          <div className="relative overflow-hidden rounded-2xl
            bg-gradient-to-br from-[#2d4fa3] via-[#4167BE] to-[#5b7ed4]
            px-6 py-8 sm:px-10 sm:py-9
            flex flex-col sm:flex-row items-start sm:items-center
            justify-between gap-6">

            {/* Grid texture */}
            <div className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,.04) 1px,transparent 1px),
                                  linear-gradient(90deg,rgba(255,255,255,.04) 1px,transparent 1px)`,
                backgroundSize: "28px 28px",
              }}
            />

            {/* Text */}
            <div className="relative z-10">
              <p className="font-extrabold text-white mb-1.5 text-lg sm:text-xl md:text-2xl leading-snug">
                Ready to Build It Right the First Time?
              </p>
              <p className="text-sm font-normal text-white/70">
                Let's talk about your project — free consultation, no obligations.
              </p>
            </div>

            {/* Button */}
            <a
              href="#contact"
              className="relative z-10 inline-flex items-center gap-2.5 flex-shrink-0
                w-full sm:w-auto justify-center
                bg-white text-[#4167BE] font-bold text-sm
                px-7 py-3.5 rounded-xl
                shadow-[0_6px_20px_rgba(0,0,0,0.14)]
                hover:-translate-y-0.5 hover:scale-[1.04]
                hover:shadow-[0_10px_32px_rgba(0,0,0,0.2)]
                transition-all duration-[250ms]
                cursor-pointer no-underline"
            >
              Get a Free Quote
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}