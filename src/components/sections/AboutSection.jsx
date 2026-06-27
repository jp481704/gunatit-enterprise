
import { useEffect, useState } from "react";

const stats = [
  { value: "20+", label: "Years of Experience", icon: "🏗️" },
  { value: "500+", label: "Projects Completed", icon: "✅" },
  { value: "4.9/5", label: "Client Satisfaction", icon: "⭐" },
  { value: "100%", label: "Success Rate", icon: "🎯" },
];

export default function AboutSection() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => document.head.removeChild(link);
  }, []);

  return (
    <section id="about" className="bg-slate-50 px-6 md:px-16 lg:px-24 py-24 overflow-hidden font-['DM_Sans']">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Content Split */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
          
          {/* Left Content */}
          <div data-aos="fade-right" className="w-full lg:w-1/2 space-y-8 relative z-10">
            
            {/* Top Label */}
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase px-4 py-2 rounded-full border border-[#4167BE]/30 text-[#4167BE] bg-[#EEF2FF] font-bold font-['Sora'] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#4167BE] animate-pulse" />
                About Us
              </span>
    
            </div>

            {/* Paragraphs */}
          {/* Paragraphs */}
<div className="space-y-2 text-slate-600 text-[15px] leading-relaxed">

  {/* Paragraph 1 */}
  <p>
    At <strong className="text-slate-800">Gunatit Enterprise</strong>, we provide{" "}
    <strong className="text-slate-800">
      professional tile fitting and flooring installation services in Mumbai
    </strong>
    , helping homeowners, builders, architects, and commercial property owners
    create beautiful, durable, and long-lasting spaces. As a trusted civil
    contractor with over{" "}
    <strong className="text-slate-800">
      20+ years of industry experience
    </strong>
    , we deliver precision craftsmanship, premium-quality materials, and
    flawless finishes for every project.
  </p>

  {/* Paragraph 2 */}
  <p>
    Whether you're renovating your home, designing a new office, upgrading a
    retail showroom, or completing a large commercial project, our experienced
    tile installation specialists ensure every tile is perfectly aligned,
    levelled, and securely installed. From{" "}
    <strong className="text-slate-800">
      ceramic tiles, vitrified tiles, porcelain tiles, marble, granite, mosaic,
      wooden flooring, Bathroom & Kitchen Graynite Fitting, Modular Kitchen and anti-skid tiles
    </strong>{" "}
    to custom flooring solutions, we handle projects of every size with
    exceptional attention to detail.
  </p>

  {/* Paragraph 3 */}
  <p>
    Our comprehensive flooring services include{" "}
    <strong className="text-slate-800">
      surface preparation, floor levelling, tile protection, tile cutting,
      grout finishing, polishing, and complete floor installation
    </strong>
    , ensuring strength, durability, and a premium finish that lasts for years.
    Every project is completed using modern tools, proven installation
    techniques, and strict quality standards to deliver outstanding results on
    time and within budget.
  </p>

  {/* Expandable Content */}
  <div
    className={`overflow-hidden transition-all duration-700 ease-in-out ${
      expanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
    }`}
  >
    <div className="space-y-5">
      <p>
        Serving clients across{" "}
        <strong className="text-slate-800">
          Mumbai, Navi Mumbai, Thane, Pune, and Goa (Dervan)
        </strong>
        , Gunatit Enterprise has built a reputation for reliability,
        transparent pricing, and superior workmanship. Our commitment to
        quality, timely project completion, and customer satisfaction has made
        us a preferred choice for residential, commercial, industrial, and
        renovation flooring projects.
      </p>

      <p>
        Whether you need{" "}
        <strong className="text-slate-800">
          professional tile fitting for your home
        </strong>
        ,{" "}
        <strong className="text-slate-800">
          office flooring installation
        </strong>
        ,{" "}
        <strong className="text-slate-800">
          commercial tile work
        </strong>
        , or{" "}
        <strong className="text-slate-800">
          expert floor renovation services
        </strong>
        , Gunatit Enterprise is your trusted partner for precision flooring
        solutions that combine durability, functionality, and elegant design.
      </p>
    </div>
  </div>

  {/* Read More Button */}
  <button
    onClick={() => setExpanded(!expanded)}
    className="inline-flex items-center gap-2 text-[#4167BE] font-semibold text-sm hover:underline transition-all duration-200 cursor-pointer bg-transparent border-none p-0"
    style={{ fontFamily: "'Sora', sans-serif" }}
  >
    {expanded ? "Read Less" : "Read More"}

    <svg
      className={`w-4 h-4 transition-transform duration-300 ${
        expanded ? "rotate-180" : ""
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </button>
</div>

          
          </div>

          {/* Right Image Section with Floating Stats */}
          <div data-aos="fade-left" data-aos-delay="150" className="w-full lg:w-1/2 relative flex justify-center mt-16 lg:mt-0 py-10 lg:self-start">
            
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

