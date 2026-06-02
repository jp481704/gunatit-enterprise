// Replace imported images with online placeholders in this demo.
// In your real project restore:
// import consultation   from "../../assets/consultation.jpg";   etc.

const IMAGES = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=75&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=600&q=75&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=600&q=75&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=75&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=75&auto=format&fit=crop",
];

const steps = [
  {
    number: "01",
    title: "Consultation & Requirement Analysis",
    desc: "We begin with a detailed discussion to understand your vision, goals, and project requirements — ensuring full alignment from day one.",
    tag: "Client Meeting",
  },
  {
    number: "02",
    title: "Site Inspection & Planning",
    desc: "Our engineers conduct a thorough on-site evaluation, taking precise measurements and preparing detailed construction plans tailored to your land.",
    tag: "Site Survey",
  },
  {
    number: "03",
    title: "Cost Estimation & Approval",
    desc: "We provide a fully transparent, itemised cost estimate with no hidden charges — giving you complete clarity before any work begins.",
    tag: "Budget Clarity",
  },
  {
    number: "04",
    title: "Execution with Skilled Team",
    desc: "Our experienced engineers and technicians execute every phase with precision — from foundation work to final finishes, on schedule.",
    tag: "On-Site Work",
  },
  {
    number: "05",
    title: "Quality Check & Final Handover",
    desc: "A rigorous quality audit is conducted at every stage. Once approved, we hand over your completed project — pristine, on time, and ready to use.",
    tag: "Project Complete",
  },
];

const pills = ["Simple", "Transparent", "Efficient"];

export default function HowWeWork() {
  return (
    <section
      className="bg-white py-16 md:py-20 px-4 md:px-6"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        /* ── Vertical timeline line — desktop only ── */
        .hww-timeline { position: relative; display: flex; flex-direction: column; }
        @media (min-width: 768px) {
          .hww-timeline::before {
            content: '';
            position: absolute;
            left: 32px;
            top: 40px;
            bottom: 40px;
            width: 2px;
            background: linear-gradient(to bottom, #4167BE, #c7d4f7, #4167BE);
            border-radius: 2px;
          }
        }

        /* ── Mobile timeline left bar ── */
        @media (max-width: 767px) {
          .hww-timeline::before { display: none; }
        }

        /* ── Card hover effects ── */
        .hww-card {
          position: relative;
          transition: box-shadow 0.22s, border-color 0.22s;
        }
        .hww-card:hover {
          box-shadow: 0 8px 32px rgba(65,103,190,0.13) !important;
          border-color: #4167BE !important;
        }
        .hww-card::before {
          content: ''; position: absolute; left: 0; top: 20%; bottom: 20%;
          width: 3px; background: #4167BE; border-radius: 0 2px 2px 0;
          opacity: 0; transition: opacity 0.2s;
        }
        .hww-card:hover::before { opacity: 1; }

        /* ── Number bubble scale ── */
        .hww-num { transition: transform 0.2s; }
        .hww-step:hover .hww-num { transform: scale(1.1); }

        /* ── Image zoom on hover ── */
        .hww-img { transition: transform 0.45s ease; }
        .hww-step:hover .hww-img { transform: scale(1.06); }

        /* ── Mobile card: image fades in nicely ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hww-step { animation: fadeUp .5s ease both; }
        .hww-step:nth-child(1){ animation-delay:.05s }
        .hww-step:nth-child(2){ animation-delay:.12s }
        .hww-step:nth-child(3){ animation-delay:.19s }
        .hww-step:nth-child(4){ animation-delay:.26s }
        .hww-step:nth-child(5){ animation-delay:.33s }
      `}</style>

      <div className="max-w-7xl mx-auto">

        {/* ══════ HEADER ══════ */}
        <div className="text-center mb-12 md:mb-16">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full
            border border-[#4167BE] bg-[#EEF2FF] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4167BE] flex-shrink-0" />
            <span className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-[#4167BE]">
              How We Work
            </span>
          </div>

          {/* Heading */}
          <h2
            className="font-extrabold text-[#0f1f5c] leading-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.8rem)" }}
          >
            Our <span className="text-[#4167BE]">Process</span>
          </h2>

          {/* Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-4">
            {pills.map((p, i) => (
              <span key={p} className="flex items-center gap-2">
                <span className="px-4 py-1.5 rounded-full bg-[#EEF2FF] border border-[#c7d4f7]
                  text-[12px] font-semibold text-[#4167BE]">
                  {p}
                </span>
                {i < pills.length - 1 && (
                  <span className="w-1 h-1 rounded-full bg-[#c7d4f7]" />
                )}
              </span>
            ))}
          </div>

          <p className="text-[14px] text-slate-500 leading-[1.78] max-w-[540px] mx-auto">
            Our streamlined approach makes us a preferred civil contractor in Mumbai for
            hassle-free construction. Here's how we bring your project to life, step by step.
          </p>
        </div>

        {/* ══════ TIMELINE ══════ */}
        <div className="hww-timeline gap-4 md:gap-0">
          {steps.map((step, i) => (
            <div
              key={i}
              className="hww-step py-2 md:py-4"
            >
              {/*
                ── LAYOUT BREAKDOWN ──
                Mobile  : stacked card (no number on side)
                Tablet+ : number bubble left + card right
              */}

              {/* ── DESKTOP LAYOUT (md+) ── */}
              <div className="hidden md:grid items-center gap-5"
                style={{ gridTemplateColumns: "66px 1fr" }}>

                {/* Number bubble */}
                <div className="flex flex-col items-center z-10 relative">
                  <div
                    className="hww-num w-[66px] h-[66px] rounded-full bg-[#4167BE]
                      flex items-center justify-center font-extrabold text-white
                      text-[22px] flex-shrink-0"
                    style={{ border: "4px solid #fff", boxShadow: "0 0 0 2px #4167BE" }}
                  >
                    {i + 1}
                  </div>
                </div>

                {/* Card — text left, image right */}
                <div
                  className="hww-card bg-white border border-[#e0e7ff] rounded-[20px]
                    overflow-hidden grid"
                  style={{ gridTemplateColumns: "1fr 240px" }}
                >
                  <CardText step={step} />
                  <CardImage src={IMAGES[i]} alt={step.title} />
                </div>
              </div>

              {/* ── MOBILE LAYOUT (< md) ── */}
              <div className="md:hidden hww-card bg-white border border-[#e0e7ff]
                rounded-2xl overflow-hidden">

                {/* Top bar: step number badge + tag */}
                <div className="flex items-center justify-between px-5 pt-5 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="hww-num w-9 h-9 rounded-full bg-[#4167BE]
                        flex items-center justify-center font-extrabold text-white text-[14px]"
                      style={{ border: "3px solid #fff", boxShadow: "0 0 0 1.5px #4167BE" }}
                    >
                      {i + 1}
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.16em]
                      uppercase text-[#4167BE]">
                      Step {step.number}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full
                    bg-[#EEF2FF] text-[10px] font-semibold text-[#4167BE]">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                      stroke="#4167BE" strokeWidth="2.5" strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    {step.tag}
                  </span>
                </div>

                {/* Image — full width, shorter on mobile */}
                <div className="relative overflow-hidden h-[180px] mx-4 rounded-xl mb-4">
                  <img
                    src={IMAGES[i]}
                    alt={step.title}
                    className="hww-img absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[#4167BE]/15 rounded-xl" />
                </div>

                {/* Text */}
                <div className="px-5 pb-5 flex flex-col gap-2">
                  <h3 className="font-bold text-[#0f1f5c] leading-snug text-[15px]">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-slate-500 leading-[1.7]">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom progress indicator */}
                <div className="mx-5 mb-5 flex items-center gap-1.5">
                  {steps.map((_, j) => (
                    <div
                      key={j}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        j <= i
                          ? "bg-[#4167BE]"
                          : "bg-[#dce5f7]"
                      }`}
                      style={{ flex: j === i ? 2 : 1 }}
                    />
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ── Shared sub-components (desktop card parts) ── */
function CardText({ step }) {
  return (
    <div className="p-7 flex flex-col justify-center gap-2.5">
      <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#4167BE]">
        Step {step.number}
      </span>
      <h3
        className="font-bold text-[#0f1f5c] leading-snug"
        style={{ fontSize: "clamp(1rem, 1.8vw, 1.22rem)" }}
      >
        {step.title}
      </h3>
      <p className="text-[13px] text-slate-500 leading-[1.7]">{step.desc}</p>
      <span className="inline-flex items-center gap-1.5 mt-1 px-3 py-1.5 rounded-full
        bg-[#EEF2FF] text-[11px] font-semibold text-[#4167BE] w-fit">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
          stroke="#4167BE" strokeWidth="2.5" strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        {step.tag}
      </span>
    </div>
  );
}

function CardImage({ src, alt }) {
  return (
    <div className="relative overflow-hidden" style={{ minHeight: 160 }}>
      <img
        src={src}
        alt={alt}
        className="hww-img absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#4167BE]/[0.18]" />
    </div>
  );
}