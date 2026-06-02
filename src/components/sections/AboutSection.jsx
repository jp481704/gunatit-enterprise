
import { useEffect } from "react";

const stats = [
  { value: "20+", label: "Years of Experience", icon: "🏗️" },
  { value: "500+", label: "Projects Completed", icon: "✅" },
  { value: "4.9/5", label: "Client Satisfaction", icon: "⭐" },
  { value: "100%", label: "Success Rate", icon: "🎯" },
];

export default function AboutSection() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => document.head.removeChild(link);
  }, []);

  return (
    <section className="bg-slate-50 px-6 md:px-16 lg:px-24 py-24 overflow-hidden font-['DM_Sans']">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Content Split */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8 relative z-10">
            
            {/* Top Label */}
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-[#4167BE]/30 text-[#4167BE] bg-[#EEF2FF] font-bold font-['Sora'] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#4167BE] animate-pulse" />
                About Us
              </span>
    
            </div>

            {/* Paragraphs */}
            <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
              <p>
                Gunatit Enterprise is a trusted civil contractor in Mumbai known for delivering high-quality construction and renovation services across Mumbai, Pune, and Goa (Dervan).
              </p>
              <p>
                With over two decades of industry experience, we provide complete civil and interior solutions tailored to residential, commercial, and institutional needs. Our team of skilled engineers, designers, and technicians ensures every project is executed with precision and transparency.
              </p>
               <p>
                Gunatit Enterprise delivers complete civil and interior solutions across Mumbai, Pune, and Goa (Dervan) — serving residential, commercial, and institutional projects with skilled engineers, designers, and technicians. From foundation work to final finishing, we stand for excellence, safety, and timely delivery.
              </p>
            </div>

            {/* Core Competencies List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 pb-4">
              {["Foundation & Structural Work", "Complete Interior Solutions", "Commercial Renovations", "Timely & Safe Delivery"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-800 font-medium">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#EEF2FF] flex items-center justify-center text-[#4167BE]">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div>
              <a
                href="/about"
                className="inline-flex items-center gap-3 bg-[#4167BE] text-white font-semibold text-sm px-8 py-4 rounded-xl transition-all duration-300 hover:bg-[#32529c] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#4167BE]/20 font-['Sora']"
              >
                Get to Know Us
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Image Section with Floating Stats */}
          <div className="w-full lg:w-1/2 relative flex justify-center mt-16 lg:mt-0 py-10">
            
            {/* Decorative Background Elements */}
            <div className="absolute top-14 -left-4 w-full h-[90%] border-2 border-[#4167BE]/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#EEF2FF] rounded-full blur-3xl -z-10" />

            {/* Main Image Container */}
            <div className="relative z-10 w-full max-w-[320px] sm:max-w-md mx-auto mt-12 lg:mt-0 py-8 px-2 sm:px-0">
  
  {/* Decorative Background Offset */}
  <div className="absolute inset-0 translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6 rounded-[2rem] border-2 border-[#4167BE]/20 -z-10" />
  <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#4167BE]/10 rounded-full blur-3xl -z-10" />

  {/* Main Image Container */}
  <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5] w-full border-4 border-white">
    <img
      src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop"
      alt="Gunatit Enterprise Construction"
      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
    />
    {/* Subtle gradient overlay so badge shadows pop against the image */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/10 pointer-events-none" />
  </div>
  
  {/* --- Floating Badges (Modern Glassmorphism) --- */}
  
  {/* 1. Top Left Badge (20+ Years) */}
  <div className="absolute -left-2 sm:-left-12 top-12 bg-white/95 backdrop-blur-sm p-3 sm:p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-3 sm:gap-4 animate-[bounce_4s_infinite_alternate] z-20 border border-white min-w-[160px] sm:min-w-[190px]">
    <div className="text-lg sm:text-xl bg-[#EEF2FF] w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center rounded-xl shadow-inner">
      {stats[0].icon}
    </div>
    <div>
      <p className="text-slate-900 font-bold font-['Sora'] text-lg sm:text-xl leading-none mb-1">{stats[0].value}</p>
      <p className="text-slate-500 text-[9px] sm:text-[11px] font-bold uppercase tracking-widest">{stats[0].label}</p>
    </div>
  </div>

  {/* 2. Middle Right Badge (500+ Projects) */}
  <div className="absolute -right-2 sm:-right-14 top-[35%] bg-white/95 backdrop-blur-sm p-3 sm:p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-3 sm:gap-4 animate-[bounce_5s_infinite_alternate_reverse] z-20 border border-white min-w-[160px] sm:min-w-[190px]">
    <div className="text-lg sm:text-xl bg-[#EEF2FF] w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center rounded-xl shadow-inner">
      {stats[1].icon}
    </div>
    <div>
      <p className="text-slate-900 font-bold font-['Sora'] text-lg sm:text-xl leading-none mb-1">{stats[1].value}</p>
      <p className="text-slate-500 text-[9px] sm:text-[11px] font-bold uppercase tracking-widest">{stats[1].label}</p>
    </div>
  </div>

  {/* 3. Bottom Left Badge (4.9/5 Satisfaction) */}
  <div className="absolute -left-2 sm:-left-12 bottom-[25%] bg-white/95 backdrop-blur-sm p-3 sm:p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-3 sm:gap-4 animate-[bounce_4.5s_infinite_alternate] z-20 border border-white min-w-[160px] sm:min-w-[190px]">
    <div className="text-lg sm:text-xl bg-[#EEF2FF] w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center rounded-xl shadow-inner">
      {stats[2].icon}
    </div>
    <div>
      <p className="text-slate-900 font-bold font-['Sora'] text-lg sm:text-xl leading-none mb-1">{stats[2].value}</p>
      <p className="text-slate-500 text-[9px] sm:text-[11px] font-bold uppercase tracking-widest">{stats[2].label}</p>
    </div>
  </div>

  {/* 4. Bottom Right Badge (100% Success) */}
  <div className="absolute -right-2 sm:-right-10 -bottom-4 bg-white/95 backdrop-blur-sm p-3 sm:p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center gap-3 sm:gap-4 animate-[bounce_3.5s_infinite_alternate_reverse] z-20 border border-white min-w-[160px] sm:min-w-[190px]">
    <div className="text-lg sm:text-xl bg-[#EEF2FF] w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center rounded-xl shadow-inner">
      {stats[3].icon}
    </div>
    <div>
      <p className="text-slate-900 font-bold font-['Sora'] text-lg sm:text-xl leading-none mb-1">{stats[3].value}</p>
      <p className="text-slate-500 text-[9px] sm:text-[11px] font-bold uppercase tracking-widest">{stats[3].label}</p>
    </div>
  </div>

</div>
          </div>
        </div>
      </div>
    </section>
  );
}

