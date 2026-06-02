import { useEffect, useRef, useState, useCallback } from "react";

const DURATION = 5000;
const testimonials = [
  { icon: "🏠", service: "Residential Renovation",       location: "Marine Lines", initial: "MR", text: "Gunatit Enterprise did an amazing job renovating our home. The team was very supportive throughout the process and guided us at every step. The final result came out even better than we expected." },
  { icon: "🍳", service: "Bathroom & Kitchen Remodeling", location: "Kandivali",   initial: "KR", text: "We got our kitchen and bathroom renovated by Gunatit Enterprise, and the experience was really smooth. The designs are modern and practical, and the work was completed on time." },
  { icon: "🏗️", service: "RCC & Structural Work",         location: "Borivali",    initial: "BR", text: "We hired them for RCC and structural work, and the quality was very solid. Everything was done properly with attention to safety and durability. Hard to find this level of expertise anywhere else." },
  { icon: "🏢", service: "Commercial Project Execution",  location: "Juhu",        initial: "JC", text: "Our commercial project was handled very professionally. Communication was clear from start to finish. They delivered on time without compromising on quality." },
  { icon: "🎨", service: "Interior & Finishing Work",     location: "Mira Road",   initial: "MM", text: "We got interior and finishing work done, including POP and painting. The finishing quality was neat, and the team paid attention to small details. Overall a very good experience." },
  { icon: "💧", service: "Waterproofing & Maintenance",   location: "Andheri",     initial: "AW", text: "We had leakage issues for a long time, and Gunatit Enterprise provided a proper waterproofing solution. It's been months now and there are no problems at all." },
  { icon: "🌴", service: "End-to-End Construction",       location: "Goa",         initial: "GC", text: "We wanted everything managed by one team, and Gunatit Enterprise handled civil work, interiors, and electrical perfectly. It made the whole process completely stress-free." },
];
const TOTAL = testimonials.length;

/* ── Stars ── */
const Stars = ({ white }) => (
  <div className="flex gap-0.5">
    {Array(5).fill(0).map((_, i) => (
      <svg key={i} width="13" height="13" viewBox="0 0 24 24"
        className={white ? "fill-white" : "fill-[#4167BE]"}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

/* ── Card ── */
function Card({ t, featured }) {
  return (
    <div className={`
      w-full h-full rounded-3xl p-7 flex flex-col relative overflow-hidden min-h-[400px]
      ${featured
        ? "bg-gradient-to-br from-[#2d4fa3] to-[#4167BE] border border-[#4167BE] shadow-[0_32px_80px_rgba(65,103,190,0.32)]"
        : "bg-white border border-[#dce5f7] shadow-[0_6px_28px_rgba(15,23,42,0.07)]"
      }
    `}>

      {/* Decorative quote */}
      <span className={`
        absolute -top-2 right-3 text-[110px] leading-none pointer-events-none select-none font-serif
        ${featured ? "text-white/[0.07]" : "text-[#4167BE]/[0.05]"}
      `}>&#8220;</span>

      {/* Featured badge */}
      {featured && (
        <span className="absolute top-5 right-5 bg-white/20 text-white text-[10px] font-bold
          tracking-[0.08em] uppercase px-3 py-1 rounded-full border border-white/25">
          ⭐ Featured
        </span>
      )}

      {/* Service tag */}
      <span className={`
        inline-flex items-center gap-1.5 text-[11px] font-semibold px-3.5 py-1.5
        rounded-full mb-4 w-fit border
        ${featured
          ? "bg-white/[0.18] text-white border-white/25"
          : "bg-[#eff3fb] text-[#4167BE] border-[#dce5f7]"
        }
      `}>
        {t.icon} {t.service}
      </span>

      <Stars white={featured} />

      {/* Quote */}
      <p className={`
        text-[13.5px] leading-[1.8] flex-1 mt-3.5 mb-4
        line-clamp-4
        ${featured ? "text-white/85" : "text-slate-500"}
      `}>
        &#8220;{t.text}&#8221;
      </p>

      {/* Author */}
      <div className={`
        flex items-center gap-3 pt-4
        ${featured ? "border-t border-white/20" : "border-t border-[#dce5f7]"}
      `}>
        <div className={`
          w-10 h-10 rounded-full flex items-center justify-center
          font-bold text-[13px] flex-shrink-0
          ${featured ? "bg-white/25 text-white" : "bg-[#4167BE] text-white"}
        `}>
          {t.initial}
        </div>
        <div>
          <p className={`text-[12.5px] font-semibold leading-tight
            ${featured ? "text-white" : "text-[#0f1f5c]"}`}>
            Verified Client
          </p>
          <p className={`text-[11px] mt-0.5
            ${featured ? "text-white/60" : "text-slate-400"}`}>
            📍 {t.location}
          </p>
        </div>
        <div className="ml-auto">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className={featured ? "stroke-white/70" : "stroke-[#4167BE]"}>
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function ClientTestimonials() {
  const [active,  setActive]  = useState(0);
  const [prevIdx, setPrevIdx] = useState(TOTAL - 1);
  const [nextIdx, setNextIdx] = useState(1);
  const [phase,   setPhase]   = useState("idle");
  const [dir,     setDir]     = useState(1);
  const [progPct, setProgPct] = useState(0);
  const [inView,  setInView]  = useState(false);

  const autoRef    = useRef(null);
  const rafRef     = useRef(null);
  const t0Ref      = useRef(null);
  const sectionRef = useRef(null);
  const touchX     = useRef(0);

  /* IntersectionObserver */
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  /* Progress bar RAF */
  const startProgress = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    setProgPct(0);
    t0Ref.current = performance.now();
    const tick = (now) => {
      const pct = Math.min(((now - t0Ref.current) / DURATION) * 100, 100);
      setProgPct(pct);
      if (pct < 100) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  /* Navigate */
  const navigate = useCallback((d) => {
    if (phase !== "idle") return;
    cancelAnimationFrame(rafRef.current);
    clearTimeout(autoRef.current);
    setDir(d);
    setPhase("exit");
  }, [phase]);

  /* Phase machine */
  useEffect(() => {
    if (phase === "exit") {
      const id = setTimeout(() => {
        setActive(a => {
          const newA = (a + dir + TOTAL) % TOTAL;
          setPrevIdx((newA - 1 + TOTAL) % TOTAL);
          setNextIdx((newA + 1) % TOTAL);
          return newA;
        });
        setPhase("enter");
      }, 380);
      return () => clearTimeout(id);
    }
    if (phase === "enter") {
      const id = setTimeout(() => {
        setPhase("idle");
        startProgress();
        autoRef.current = setTimeout(() => navigate(1), DURATION);
      }, 480);
      return () => clearTimeout(id);
    }
    if (phase === "idle") {
      startProgress();
      autoRef.current = setTimeout(() => navigate(1), DURATION);
      return () => { clearTimeout(autoRef.current); cancelAnimationFrame(rafRef.current); };
    }
  }, [phase]);

  const goNext = () => navigate(1);
  const goPrev = () => navigate(-1);
  const goIdx  = (i) => { if (i !== active && phase === "idle") navigate(i > active ? 1 : -1); };

  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 44) dx < 0 ? goNext() : goPrev();
  };

  /* Per-role transition classes */
  const cardClasses = (role) => {
    const base = "transition-all duration-[420ms] ease-[cubic-bezier(.4,0,.2,1)] will-change-transform";
    if (phase === "idle" || phase === "enter") {
      if (role === "center") return `${base} opacity-100 scale-100 translate-x-0`;
      return `${base} opacity-45 scale-[0.88] translate-x-0`;
    }
    if (phase === "exit") {
      if (dir === 1) {
        if (role === "center") return `${base} opacity-0 scale-90 -translate-x-14`;
        if (role === "prev")   return `${base} opacity-0 scale-[0.82] -translate-x-20`;
        if (role === "next")   return `${base} opacity-65 scale-95 -translate-x-7`;
      } else {
        if (role === "center") return `${base} opacity-0 scale-90 translate-x-14`;
        if (role === "prev")   return `${base} opacity-65 scale-95 translate-x-7`;
        if (role === "next")   return `${base} opacity-0 scale-[0.82] translate-x-20`;
      }
    }
    return base;
  };

  return (
    <section
      ref={sectionRef}
      className="bg-white py-24 px-4 md:px-8 overflow-hidden"
      style={{ fontFamily: "'Poppins', system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
        @keyframes fadeUp   { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmer  { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes pulse    { 0%,100%{box-shadow:0 0 0 0 rgba(65,103,190,.38)} 50%{box-shadow:0 0 0 9px rgba(65,103,190,0)} }
        @keyframes statPop  { from{opacity:0;transform:scale(.8) translateY(10px)} to{opacity:1;transform:scale(1) translateY(0)} }

        .ct-rv        { opacity:0 }
        .ct-rv.in     { animation: fadeUp .72s cubic-bezier(.22,1,.36,1) both }
        .ct-d1.in     { animation-delay:.06s }
        .ct-d2.in     { animation-delay:.14s }
        .ct-d3.in     { animation-delay:.22s }
        .ct-d4.in     { animation-delay:.30s }

        .ct-shimmer {
          background: linear-gradient(90deg,#2d4fa3,#4167BE,#8fa8de,#4167BE);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .ct-badge-dot { animation: pulse 2.2s ease-in-out infinite; }

        .ct-stat-pop  { animation: statPop .6s cubic-bezier(.34,1.56,.64,1) both; }
      `}</style>

      <div className="max-w-7xl mx-auto">

        {/* ════ HEADER ════ */}
        <div className={`ct-rv ct-d1 ${inView ? "in" : ""} text-center mb-14`}>

          {/* Badge */}
          <div className="flex justify-center mb-5">
            <div className="inline-flex items-center gap-2 bg-[#eff3fb] border border-[#dce5f7]
              text-[#4167BE] rounded-full px-5 py-2 text-[11px] font-bold tracking-[0.12em] uppercase">
              <span className="ct-badge-dot w-2 h-2 rounded-full bg-[#4167BE] flex-shrink-0" />
              Client Testimonials
            </div>
          </div>

          <h2 className="font-extrabold text-[#0f1f5c] leading-tight mb-4"
            style={{ fontSize: "clamp(30px,3.6vw,50px)" }}>
            What Our{" "}
            <span className="ct-shimmer">Clients Say</span>
          </h2>

          <p className="text-slate-500 font-light max-w-[500px] mx-auto leading-relaxed mb-5"
            style={{ fontSize: "15.5px" }}>
            Trusted by homeowners and businesses across Mumbai — here's what they experienced.
          </p>

          <div className="flex items-center justify-center gap-1">
            {Array(5).fill(0).map((_, i) => (
              <svg key={i} viewBox="0 0 24 24" width="17" height="17" className="fill-[#4167BE]">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
            <span className="text-slate-400 text-[13px] font-light ml-2">
              5.0 Average · {TOTAL} Reviews
            </span>
          </div>
        </div>

        {/* ════ PROGRESS BAR ════ */}
        <div className={`ct-rv ct-d2 ${inView ? "in" : ""} max-w-xl mx-auto mb-10
          h-[3px] bg-[#dce5f7] rounded-full overflow-hidden`}>
          <div
            className="h-full bg-[#4167BE] rounded-full transition-[width] duration-[120ms] linear"
            style={{ width: `${progPct}%` }}
          />
        </div>

        {/* ════ SLIDER ════ */}
        <div
          className={`ct-rv ct-d3 ${inView ? "in" : ""} mb-8`}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="flex items-stretch justify-center gap-5">

            {/* LEFT */}
            <div className={`hidden md:block w-[230px] flex-shrink-0 ${cardClasses("prev")}`}>
              <Card t={testimonials[prevIdx]} featured={false} />
            </div>

            {/* CENTER */}
            <div className={`w-[440px] max-w-full flex-shrink-0 ${cardClasses("center")}`}>
              <Card t={testimonials[active]} featured={true} />
            </div>

            {/* RIGHT */}
            <div className={`hidden md:block w-[230px] flex-shrink-0 ${cardClasses("next")}`}>
              <Card t={testimonials[nextIdx]} featured={false} />
            </div>

          </div>
        </div>

        {/* ════ CONTROLS ════ */}
        <div className={`ct-rv ct-d3 ${inView ? "in" : ""} flex items-center justify-center gap-4 mb-3`}>

          {/* Prev btn — outline */}
          <button
            onClick={goPrev}
            className="w-11 h-11 rounded-full border border-[#dce5f7] bg-white text-[#4167BE]
              flex items-center justify-center cursor-pointer
              hover:bg-[#eff3fb] hover:border-[#4167BE] hover:scale-110
              transition-all duration-200"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goIdx(i)}
                className={`
                  h-2 rounded-full border-none cursor-pointer
                  transition-all duration-300
                  ${i === active
                    ? "w-7 bg-[#4167BE]"
                    : "w-2 bg-[#dce5f7] hover:bg-[#4167BE]"
                  }
                `}
              />
            ))}
          </div>

          {/* Next btn — filled */}
          <button
            onClick={goNext}
            className="w-11 h-11 rounded-full bg-[#4167BE] text-white
              flex items-center justify-center cursor-pointer
              hover:bg-[#2d4fa3] hover:scale-110
              hover:shadow-[0_6px_20px_rgba(65,103,190,0.35)]
              transition-all duration-200"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* Counter */}
        <p className={`ct-rv ct-d3 ${inView ? "in" : ""} text-center text-[13px] font-light text-slate-400 mb-14`}>
          <span className="text-[#4167BE] font-bold">{active + 1}</span> / {TOTAL}
        </p>

        

      </div>
    </section>
  );
}