import { useState, useEffect, useRef } from "react";

const faqs = [
  { q: "Why should I choose Gunatit Enterprise for tile fitting services in Mumbai?", a: "We combine 20+ years of construction experience, skilled tile installers, premium materials, and precision workmanship to deliver durable, perfectly aligned flooring for residential and commercial properties. Our focus on quality, timely completion, and customer satisfaction makes us a trusted tile fitting contractor in Mumbai.", icon: "🏆", tag: "About Us" },
  { q: "What types of tiles do you install?", a: "We install a wide range of tiles, including ceramic tiles, vitrified tiles, porcelain tiles, marble tiles, granite tiles, mosaic tiles, anti-skid tiles, designer wall tiles, and large-format tiles for homes, offices, retail spaces, and commercial projects.", icon: "🪟", tag: "Tiles" },
  { q: "Do you provide both residential and commercial tile installation?", a: "Yes. We offer professional tile fitting and flooring installation for apartments, villas, offices, restaurants, hotels, retail stores, hospitals, schools, warehouses, and commercial buildings across Mumbai.", icon: "🏢", tag: "Services" },
  { q: "Do you remove old flooring before installing new tiles?", a: "Yes. Our team can safely remove existing flooring, prepare the surface, level the floor if required, and install new tiles to ensure a strong, long-lasting finish.", icon: "🏗️", tag: "Services" },
  { q: "Do you provide waterproofing before tile installation?", a: "Absolutely. We recommend and provide professional waterproofing solutions for bathrooms, kitchens, balconies, terraces, and wet areas before tile installation to prevent future leakage and moisture damage.", icon: "💧", tag: "Waterproofing" },
  { q: "How long does tile installation take?", a: "The project duration depends on the area size, tile type, surface condition, and installation complexity. Most residential tile fitting projects are completed within a few days, while larger commercial projects may require additional time.", icon: "📅", tag: "Timeline" },
  { q: "Can you install marble, granite, and wooden flooring?", a: "Yes. Our flooring experts specialize in marble flooring, granite flooring, vitrified flooring, wooden flooring, stone flooring, and designer floor installations, ensuring precision and premium finishing.", icon: "💎", tag: "Flooring" },
  { q: "How much does tile fitting cost in Mumbai?", a: "Tile installation costs vary based on the tile material, project size, design pattern, surface preparation, and labour requirements. Contact us for a free site visit and a detailed, transparent quotation.", icon: "💰", tag: "Pricing" },
  { q: "Do you provide tile repair and replacement services?", a: "Yes. We repair cracked, loose, chipped, or damaged tiles and also provide complete tile replacement services for homes, offices, and commercial properties without compromising the surrounding flooring.", icon: "🔧", tag: "Repairs" },
  { q: "Which areas do you serve for tile fitting and flooring installation?", a: "We proudly serve Mumbai, Navi Mumbai, Thane, Mira Road, Borivali, Andheri, Bandra, Powai, Pune, and Goa, delivering professional tile installation services for residential and commercial projects.", icon: "📍", tag: "Locations" },
  { q: "Do you help customers choose the right tiles?", a: "Yes. Our experts help you select the most suitable tile size, material, finish, colour, texture, and layout pattern based on your interior design, budget, and functional requirements.", icon: "🎨", tag: "Guidance" },
  { q: "How can I book a tile fitting service with Gunatit Enterprise?", a: "Simply contact our team by phone, WhatsApp, or the enquiry form on our website. We'll arrange a free consultation, site inspection, material guidance, and detailed quotation before starting your project.", icon: "📞", tag: "Contact" },
];

const miniStats = [
  { val: "12+",  label: "Questions Answered"  },
  { val: "20+",  label: "Years Experience"    },
  { val: "500+", label: "Happy Clients"       },
  { val: "10+",  label: "Areas Served"        },
];

/* ── Single FAQ accordion item ── */
function FaqItem({ faq, isOpen, onToggle, num }) {
  return (
    <div className={`
      border rounded-2xl overflow-hidden bg-white
      transition-all duration-300
      ${isOpen
        ? "border-[#4167BE] shadow-[0_8px_32px_rgba(65,103,190,0.13)]"
        : "border-[#dce5f7] hover:border-[#4167BE] hover:shadow-[0_4px_20px_rgba(65,103,190,0.08)]"
      }
    `}>

      {/* Question row */}
      <button
        onClick={onToggle}
        className={`
          w-full text-left border-none flex items-center gap-3.5
          px-5 py-5 cursor-pointer transition-colors duration-200
          ${isOpen ? "bg-[#eff3fb]" : "bg-transparent hover:bg-[#eff3fb]"}
        `}
      >
        {/* Number */}
        <span className="text-[11px] font-bold text-[#4167BE] min-w-[26px] tracking-[0.04em]">
          Q{num}
        </span>

        {/* Icon wrap */}
        <span className={`
          w-10 h-10 rounded-[11px] flex-shrink-0
          flex items-center justify-center text-[18px]
          transition-colors duration-200
          ${isOpen ? "bg-[#dce5f7]" : "bg-slate-100"}
        `}>
          {faq.icon}
        </span>

        {/* Question text */}
        <span className={`
          flex-1 text-[14.5px] font-semibold leading-snug
          transition-colors duration-200
          ${isOpen ? "text-[#2d4fa3]" : "text-[#0f172a]"}
        `}>
          {faq.q}
        </span>

        {/* Tag pill — hidden on mobile */}
        <span className="hidden md:inline-flex text-[11px] font-semibold px-3 py-1
          rounded-full flex-shrink-0 bg-[#dce5f7] text-[#4167BE]">
          {faq.tag}
        </span>

        {/* Chevron */}
        <span className={`
          w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center
          border transition-all duration-[280ms] ease-in-out
          ${isOpen
            ? "bg-[#4167BE] border-[#4167BE] text-white rotate-180"
            : "bg-white border-[#dce5f7] text-[#4167BE]"
          }
        `}>
          <svg width="14" height="14" fill="none" stroke="currentColor"
            strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
          </svg>
        </span>
      </button>

      {/* Answer panel */}
      {isOpen && (
        <div className="animate-[slideOpen_0.3s_ease_both]">
          {/* Divider */}
          <div className="mx-5 mb-4 h-px bg-gradient-to-r from-[#dce5f7] to-transparent" />

          {/* Answer body */}
          <div className="px-5 pb-5 md:pl-20 flex items-start gap-3">
            <div className="w-[26px] h-[26px] rounded-full flex-shrink-0 mt-0.5
              bg-[#4167BE] text-white text-[11px] font-bold
              flex items-center justify-center">
              A
            </div>
            <p className="text-[13.5px] font-normal text-slate-500 leading-[1.75]">
              {faq.a}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [filter,    setFilter]    = useState("All");
  const [inView,    setInView]    = useState(false);
  const ref = useRef(null);

  const tags     = ["All", ...Array.from(new Set(faqs.map(f => f.tag)))];
  const filtered = filter === "All" ? faqs : faqs.filter(f => f.tag === filter);
  const toggle   = i => setOpenIndex(openIndex === i ? null : i);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="faq"
      ref={ref}
      className="bg-white py-24 px-4 md:px-8 overflow-hidden"
      style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

        @keyframes fadeUp    { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeRight { from{opacity:0;transform:translateX(-28px)} to{opacity:1;transform:translateX(0)} }
        @keyframes fadeLeft  { from{opacity:0;transform:translateX(28px)}  to{opacity:1;transform:translateX(0)} }
        @keyframes shimmer   { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes slideOpen { from{opacity:0;transform:translateY(-10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes popIn     { from{opacity:0;transform:scale(.82)} to{opacity:1;transform:scale(1)} }
        @keyframes pulse     { 0%,100%{box-shadow:0 0 0 0 rgba(65,103,190,.4)} 50%{box-shadow:0 0 0 10px rgba(65,103,190,0)} }

        .fq-rv      { opacity:0 }
        .fq-rv.in   { animation: fadeUp    .7s cubic-bezier(.22,1,.36,1) both }
        .fq-rvr     { opacity:0 }
        .fq-rvr.in  { animation: fadeRight .7s cubic-bezier(.22,1,.36,1) both }
        .fq-rvl     { opacity:0 }
        .fq-rvl.in  { animation: fadeLeft  .7s cubic-bezier(.22,1,.36,1) both }
        .fd1.in { animation-delay:.06s }
        .fd2.in { animation-delay:.14s }
        .fd3.in { animation-delay:.22s }
        .fd4.in { animation-delay:.30s }
        .fd5.in { animation-delay:.38s }

        .fq-shimmer {
          background: linear-gradient(90deg,#2d4fa3,#4167BE,#8fa8de,#4167BE);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .badge-pulse { animation: pulse 2.2s ease-in-out infinite; }
        .fq-stat-pop { animation: popIn .55s cubic-bezier(.34,1.56,.64,1) both; }
      `}</style>

      <div className="max-w-7xl mx-auto">

        {/* ════ HEADER ════ */}
        <div className={`fq-rv fd1 ${inView ? "in" : ""} text-center mb-14`}>

          {/* Badge */}
          <div className="flex justify-center mb-5">
            <div className="inline-flex items-center gap-2 bg-[#eff3fb] border border-[#dce5f7]
              text-[#4167BE] rounded-full px-5 py-2 text-[11px] font-bold
              tracking-[0.12em] uppercase">
              <span className="badge-pulse w-[7px] h-[7px] rounded-full bg-[#4167BE] flex-shrink-0" />
              Frequently Asked Questions
            </div>
          </div>

          <h2 className="font-extrabold text-[#0f172a] leading-tight mb-4"
            style={{ fontSize: "clamp(30px,3.6vw,50px)" }}>
            Got Questions?<br/>
            <span className="fq-shimmer">We've Got Answers.</span>
          </h2>

          <p className="text-slate-500 font-normal max-w-[520px] mx-auto leading-[1.75]"
            style={{ fontSize: "15.5px" }}>
            Everything you need to know about tile fitting and flooring services with{" "}
            <strong className="text-[#0f172a] font-semibold">Gunatit Enterprise</strong>{" "}
            — Mumbai's trusted tile installation contractor.
          </p>
        </div>

        {/* ════ FILTER TAGS ════ */}
        <div className={`fq-rv fd2 ${inView ? "in" : ""}
          flex flex-wrap gap-2.5 justify-center mb-11`}>
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => { setFilter(tag); setOpenIndex(null); }}
              className={`
                px-[18px] py-[7px] rounded-full text-xs font-semibold cursor-pointer
                border transition-all duration-200 whitespace-nowrap
                ${filter === tag
                  ? "bg-[#4167BE] border-[#4167BE] text-white"
                  : "bg-white border-[#dce5f7] text-slate-500 hover:border-[#4167BE] hover:text-[#4167BE] hover:bg-[#eff3fb]"
                }
              `}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* ════ TWO-COLUMN ACCORDION ════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-14">

          {/* LEFT — even-indexed items */}
          <div className={`fq-rvr fd3 ${inView ? "in" : ""} flex flex-col gap-3`}>
            {filtered.filter((_, i) => i % 2 === 0).map((faq, idx) => {
              const realIdx = filtered.indexOf(faq);
              const num     = String(faqs.indexOf(faq) + 1).padStart(2, "0");
              return (
                <FaqItem
                  key={idx}
                  faq={faq}
                  isOpen={openIndex === realIdx}
                  onToggle={() => toggle(realIdx)}
                  num={num}
                />
              );
            })}
          </div>

          {/* RIGHT — odd-indexed items */}
          <div className={`fq-rvl fd4 ${inView ? "in" : ""} flex flex-col gap-3`}>
            {filtered.filter((_, i) => i % 2 === 1).map((faq, idx) => {
              const realIdx = filtered.indexOf(faq);
              const num     = String(faqs.indexOf(faq) + 1).padStart(2, "0");
              return (
                <FaqItem
                  key={idx}
                  faq={faq}
                  isOpen={openIndex === realIdx}
                  onToggle={() => toggle(realIdx)}
                  num={num}
                />
              );
            })}
          </div>
        </div>

        {/* ════ STATS ROW ════ */}
        <div className={`fq-rv fd4 ${inView ? "in" : ""}
          grid grid-cols-2 md:grid-cols-4 gap-4 mb-8`}>
          {miniStats.map((s, i) => (
            <div
              key={i}
              className="fq-stat-pop bg-white border border-[#dce5f7] rounded-2xl
                text-center px-4 py-[22px] cursor-default
                transition-all duration-300
                hover:border-[#4167BE] hover:-translate-y-1
                hover:shadow-[0_8px_28px_rgba(65,103,190,0.11)]"
              style={{ animationDelay: `${0.8 + i * 0.1}s` }}
            >
              <div className="font-extrabold text-[#4167BE] leading-none"
                style={{ fontSize: "clamp(26px,3vw,36px)" }}>
                {s.val}
              </div>
              <div className="text-[11.5px] font-medium text-slate-400 mt-1.5
                uppercase tracking-[0.07em]">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* ════ CTA BANNER ════ */}
        <div className={`fq-rv fd5 ${inView ? "in" : ""}`}>
          <div className="relative overflow-hidden rounded-2xl
            bg-gradient-to-br from-[#2d4fa3] via-[#4167BE] to-[#5b7ed4]
            px-8 md:px-14 py-10 flex flex-wrap items-center
            justify-between gap-7">

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
              <p className="font-extrabold text-white mb-1.5"
                style={{ fontSize: "clamp(18px,2.2vw,26px)" }}>
                Still Have Questions?
              </p>
              <p className="text-sm font-normal text-white/70">
                Our team is ready to help — reach out and we'll get back to you in no time.
              </p>
            </div>

            {/* Buttons */}
            <div className="relative z-10 flex flex-wrap gap-3">

              {/* Solid white btn */}
              <a
                href="tel:+91 82911 01080"
                className="inline-flex items-center gap-2 bg-white text-[#4167BE]
                  font-bold text-sm px-7 py-3.5 rounded-xl border-none
                  shadow-[0_6px_20px_rgba(0,0,0,0.14)]
                  hover:-translate-y-0.5 hover:scale-[1.04]
                  hover:shadow-[0_10px_32px_rgba(0,0,0,0.2)]
                  transition-all duration-[250ms] ease-[cubic-bezier(.34,1.56,.64,1)]
                  cursor-pointer no-underline whitespace-nowrap"
              >
                📞 Call Us Now
              </a>

              {/* Ghost btn */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2
                  bg-white/10 text-white font-semibold text-sm
                  px-7 py-3.5 rounded-xl
                  border border-white/30
                  backdrop-blur-md
                  hover:bg-white/20 hover:border-white/60
                  transition-all duration-200
                  cursor-pointer no-underline whitespace-nowrap"
              >
                Get a Quote
                <svg width="15" height="15" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}