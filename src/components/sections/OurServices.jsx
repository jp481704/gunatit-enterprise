import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";

import picture1 from "../../assets/picture-1.webp";
import picture2 from "../../assets/picture-2.webp";
import picture3 from "../../assets/picture-3.webp";
import picture4 from "../../assets/picture-4.webp";
import picture5 from "../../assets/picture-5.webp";

const services = [
  {
    number: "01",
    title: "Residential Construction & Renovation",
    items: ["Complete Home Renovation", "Bathroom & Kitchen Remodeling", "Tile Installation & Waterproofing", "Brickwork & Plastering", "Interior Furnishing & Custom Work"],
    image: picture2,
  },
  {
    number: "02",
    title: "Structural & Civil Construction",
    items: ["Residential & Commercial Construction", "Site Preparation & Land Development", "Foundation & Base Work", "RCC Structure Work", "Compound Wall Construction", "Plumbing & Drainage Systems"],
    image: picture3,
  },
  {
    number: "03",
    title: "Interior & Finishing Work",
    items: ["POP & False Ceiling Design", "Interior Designing & Space Planning", "Painting & Decorative Finishes", "Modular Kitchen & Wardrobe Installation", "Office Interior Fit-Out"],
    image: picture4,
  },
  {
    number: "04",
    title: "Electrical & Utility Services",
    items: ["Electrical Wiring & Installation", "Lighting Setup", "Maintenance & Repair"],
    image: picture1,
  },
  {
    number: "05",
    title: "Commercial Projects",
    items: ["Hospitals & Healthcare Buildings", "Schools & Educational Institutions", "Commercial Spaces & Showrooms", "Office Renovation & Fit-Out"],
    image: picture5,
  },
];

function ServiceCard({ service, index, tall = true }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden cursor-pointer ${tall ? "h-[320px]" : "h-[260px]"}`}
      style={{ background: "#0f1f5c" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
        style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
      />

      {/* Default gradient overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-350"
        style={{
          background: "linear-gradient(to top, rgba(6,16,43,0.95) 0%, rgba(6,16,43,0.4) 50%, rgba(6,16,43,0.1) 100%)",
          opacity: hovered ? 0 : 1,
        }}
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex flex-col justify-center px-7 transition-opacity duration-350"
        style={{ background: "rgba(65,103,190,0.93)", opacity: hovered ? 1 : 0 }}
      >
        <p className="text-[10.5px] font-bold tracking-[0.18em] uppercase mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>
          {service.number}
        </p>
        <h3 className="text-[15px] font-bold text-white leading-snug mb-4">{service.title}</h3>
        <div className="w-8 h-[3px] rounded-full mb-4" style={{ background: "rgba(255,255,255,0.5)" }} />
        <ul className="flex flex-col gap-1.5">
          {service.items.map((item, j) => (
            <li key={j} className="flex items-start gap-2 text-[12px] leading-snug" style={{ color: "rgba(255,255,255,0.85)" }}>
              <span className="w-[5px] h-[5px] rounded-full bg-white flex-shrink-0 mt-[5px]" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 pt-5">
        <p className="text-[10px] font-bold tracking-[0.16em] uppercase mb-1" style={{ color: "#7aa4ff" }}>
          {service.number}
        </p>
        <p className="text-[14px] font-semibold text-white leading-snug">{service.title}</p>
      </div>
    </div>
  );
}

export default function OurServices() {
  const swiperRef = useRef(null);

  return (
    <section className="bg-white py-20" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');`}</style>

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-[1.5px] border-[#4167BE] bg-[#EEF2FF] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4167BE] flex-shrink-0" />
            <span className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-[#4167BE]">
              Our Core Services
            </span>
          </div>
          <h2
            className="font-extrabold text-[#0f1f5c] leading-[1.15] mb-4"
            style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}
          >
            We Build <span className="text-[#4167BE]">Everything</span> You Need
          </h2>
          <p className="text-[14px] text-slate-500 leading-[1.75] max-w-xl mx-auto">
            Tailored construction solutions designed to meet your needs and executed with precision, quality, and transparency.
          </p>
        </div>

        {/* ── Desktop: static 3+2 grid ── */}
        <div className="hidden lg:block">
          {/* Top row: 3 cards */}
          <div className="grid grid-cols-3 gap-5 mb-5">
            {services.slice(0, 3).map((s, i) => (
              <ServiceCard key={i} service={s} index={i} tall={true} />
            ))}
          </div>
          {/* Bottom row: 2 wider cards */}
          <div className="grid grid-cols-2 gap-5">
            {services.slice(3).map((s, i) => (
              <ServiceCard key={i + 3} service={s} index={i + 3} tall={false} />
            ))}
          </div>
        </div>

        {/* ── Mobile / Tablet: Swiper ── */}
        <div className="lg:hidden">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={16}
            breakpoints={{
              0:   { slidesPerView: 1 },
              640: { slidesPerView: 2 },
            }}
          >
            {services.map((service, i) => (
              <SwiperSlide key={i}>
                <ServiceCard service={service} index={i} tall={true} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Swiper arrows (mobile only) */}
          <div className="flex justify-center items-center gap-3 mt-8">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-11 h-11 rounded-full flex items-center justify-center border-[1.5px] border-[#4167BE] text-[#4167BE] bg-white hover:bg-[#4167BE] hover:text-white transition-all duration-150"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="w-11 h-11 rounded-full flex items-center justify-center bg-[#4167BE] text-white hover:bg-[#3058aa] transition-all duration-150"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Desktop hint */}
        <div className="hidden lg:flex justify-center items-center gap-4 mt-10">
          <div className="h-[1px] w-16 bg-[#c7d4f7]" />
          <span className="text-[12.5px] font-medium text-slate-400 tracking-wide">Hover cards to explore services</span>
          <div className="h-[1px] w-16 bg-[#c7d4f7]" />
        </div>

      </div>
    </section>
  );
}