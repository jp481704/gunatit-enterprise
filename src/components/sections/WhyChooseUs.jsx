import { CheckCircle2, XCircle } from "lucide-react";

const data = [
  { feature: "Experience",      ours: "25+ Years (Since 1999)",      others: "Limited Experience" },
  { feature: "Services",        ours: "All-in-One Civil + Interior",  others: "Separate Vendors Needed" },
  { feature: "Pricing",         ours: "Transparent & Honest",         others: "Hidden Costs" },
  { feature: "Delivery",        ours: "On-Time Completion",           others: "Frequent Delays" },
  { feature: "Quality",         ours: "High-Grade Materials",         others: "Inconsistent Quality" },
  { feature: "Expertise",       ours: "Reputed Company Portfolio",    others: "Limited Exposure" },
  { feature: "Local Knowledge", ours: "Strong Mumbai Expertise",      others: "Generic Approach" },
];

export default function WhyChooseUs() {
  return (
    <section
      className="bg-white py-20 px-6"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');`}</style>

      {/* ── max-w-7xl wrapper ── */}
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-[1.5px] border-[#4167BE] bg-[#EEF2FF] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4167BE] flex-shrink-0" />
            <span className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-[#4167BE]">
              Why Choose Us
            </span>
          </div>
          <h2
            className="font-extrabold text-[#0f1f5c] leading-[1.15] mb-4"
            style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}
          >
            Why Choose{" "}
            <span className="text-[#4167BE]">Gunatit Enterprise</span>
          </h2>
          <p className="text-[14px] text-slate-500 leading-[1.75] max-w-xl mx-auto">
            We don't just build spaces — we build trust through decades of transparency, expertise, and local knowledge.
          </p>
        </div>

        {/* ── Comparison Table ── */}
        <div className="w-full rounded-[22px] overflow-hidden border-[1.5px] border-[#e0e7ff]">

          {/* ── Table header ── */}
          {/* Desktop: 3 cols | Tablet & Mobile: 2 cols (feature col hidden) */}
          <div className="grid grid-cols-2 md:grid-cols-[1.4fr_2fr_2fr]">

            {/* Feature col header — hidden below md */}
            <div className="hidden md:flex bg-[#f0f4ff] px-7 py-6 items-end">
              <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-slate-400">Feature</span>
            </div>

            {/* Gunatit header */}
            <div className="bg-[#4167BE] px-6 py-5 flex flex-col items-center justify-center text-center relative">
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 bg-white text-[#4167BE] text-[9px] font-bold tracking-[0.1em] uppercase px-3 py-1 border-[1.5px] border-[#4167BE] border-t-0 whitespace-nowrap"
                style={{ borderRadius: "0 0 9px 9px" }}
              >
                ✦ Best Choice
              </div>
              <span className="text-[9.5px] font-bold tracking-[0.14em] uppercase text-white/60 mb-1">
                Our Standard
              </span>
              <span className="text-[clamp(15px,2vw,18px)] font-extrabold text-white">
                Gunatit Enterprise
              </span>
            </div>

            {/* Others header */}
            <div className="bg-[#f8f9ff] px-6 py-5 flex flex-col items-center justify-center text-center">
              <span className="text-[9.5px] font-bold tracking-[0.14em] uppercase text-slate-400 mb-1">
                The Industry
              </span>
              <span className="text-[clamp(15px,2vw,18px)] font-bold text-slate-400">
                Others
              </span>
            </div>
          </div>

          {/* ── Data rows ── */}
          {data.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-2 md:grid-cols-[1.4fr_2fr_2fr] border-t border-[#e8eef8] group"
            >
              {/* Feature label — hidden below md */}
              <div className="hidden md:flex bg-[#f0f4ff] group-hover:bg-[#e8eeff] transition-colors px-7 py-5 items-center border-r border-[#e0e7ff]">
                <span className="text-[13.5px] font-semibold text-[#0f1f5c]">
                  {item.feature}
                </span>
              </div>

              {/* Our value */}
              <div
                className="px-5 md:px-7 py-5 flex items-center justify-center gap-3 border-r border-white/10 group-hover:brightness-95 transition-all"
                style={{ background: "rgba(65,103,190,0.82)" }}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.2)" }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </div>
                <span className="text-[clamp(11.5px,1.3vw,13.5px)] font-semibold text-white text-center leading-snug">
                  {item.ours}
                </span>
              </div>

              {/* Others value */}
              <div className="bg-white group-hover:bg-[#f0f4ff] transition-colors px-5 md:px-7 py-5 flex items-center justify-center gap-3">
                <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-3.5 h-3.5 text-slate-400" strokeWidth={2.5} />
                </div>
                <span className="text-[clamp(11.5px,1.3vw,13.5px)] font-medium text-slate-400 text-center leading-snug">
                  {item.others}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center mt-7 text-[13px] text-slate-400 italic">
          * Proudly serving the Mumbai Metropolitan Region for over two decades.
        </p>

      </div>
    </section>
  );
}