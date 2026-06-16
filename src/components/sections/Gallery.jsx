import { useState } from "react";

import g1  from "../../assets/gallrey-1.jpeg";
import g2  from "../../assets/gallrey-2.jpeg";
import g3  from "../../assets/gallrey-3.jpeg";
import g4  from "../../assets/gallrey-4.jpeg";
import g5  from "../../assets/gallrey-5.jpeg";
import g6  from "../../assets/gallrey-6.jpeg";


const items = [
  { id: 1,  src: g1,  title: "Construction Site Overview",   category: "Structural",  span: "col-span-2" },
  { id: 2,  src: g2,  title: "Modern Building Facade",       category: "Commercial",  span: "col-span-1" },
  { id: 3,  src: g3,  title: "High-Rise Construction",       category: "Commercial",  span: "col-span-1" },
  { id: 4,  src: g4,  title: "Foundation & Base Work",       category: "Structural",  span: "col-span-1" },
  { id: 5,  src: g5,  title: "Exterior Finishing",           category: "Residential", span: "col-span-1" },
  { id: 6,  src: g6,  title: "Luxury Interior Design",       category: "Interior",    span: "col-span-2" },

];



export default function Gallery() {
  const [active, setActive]   = useState("All");
  const [lightbox, setLightbox] = useState(null); // item or null

  const filtered = active === "All" ? items : items.filter(i => i.category === active);

  return (
    <section
      id="gallery"
      className="bg-slate-50 py-20 px-6 md:px-14"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div data-aos="fade-up" className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full
            border border-[#4167BE] bg-[#EEF2FF] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4167BE]" />
            <span className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-[#4167BE]">
              Our Work
            </span>
          </div>
          <h2 className="font-extrabold text-[#0f1f5c] leading-tight mb-4"
            style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)" }}>
            Project <span className="text-[#4167BE]">Gallery</span>
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xl mx-auto">
            A glimpse into our completed projects — from residential renovations
            to large-scale commercial constructions across Mumbai.
          </p>
        </div>

    

        {/* ── Grid ── */}
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[220px]"
        >
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightbox(item)}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group
                ${filtered.length > 3 && item.span === "col-span-2"
                  ? "sm:col-span-2"
                  : "col-span-1"
                }`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                flex flex-col justify-end p-5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-300 mb-1">
                  {item.category}
                </span>
                <p className="text-white font-semibold text-sm">{item.title}</p>
                <div className="flex items-center gap-1.5 mt-2 text-white/70 text-xs">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    className="w-3.5 h-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
                  </svg>
                  Click to expand
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm
            flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="w-full max-h-[80vh] object-cover"
            />

            {/* Caption bar */}
            <div className="bg-[#0f1f5c] px-6 py-4 flex items-center justify-between">
              <div>
                <span className="text-blue-300 text-xs font-bold uppercase tracking-widest">
                  {lightbox.category}
                </span>
                <p className="text-white font-semibold mt-0.5">{lightbox.title}</p>
              </div>

              {/* Prev / Next */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const cur = filtered.findIndex(i => i.id === lightbox.id);
                    setLightbox(filtered[(cur - 1 + filtered.length) % filtered.length]);
                  }}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20
                    flex items-center justify-center text-white border-none cursor-pointer
                    transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    const cur = filtered.findIndex(i => i.id === lightbox.id);
                    setLightbox(filtered[(cur + 1) % filtered.length]);
                  }}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20
                    flex items-center justify-center text-white border-none cursor-pointer
                    transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Close */}
                <button
                  onClick={() => setLightbox(null)}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-red-500/80
                    flex items-center justify-center text-white border-none cursor-pointer
                    transition-colors ml-2"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
