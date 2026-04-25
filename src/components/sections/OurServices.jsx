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
    items: [
      "Complete Home Renovation",
      "Bathroom & Kitchen Remodeling",
      "Tile Installation & Waterproofing",
      "Brickwork & Plastering",
      "Interior Furnishing & Custom Work",
    ],
    image: picture2,
  },
  {
    number: "02",
    title: "Structural & Civil Construction",
    items: [
      "Residential & Commercial Construction",
      "Site Preparation & Land Development",
      "Foundation & Base Work",
      "RCC Structure Work",
      "Compound Wall Construction",
      "Plumbing & Drainage Systems",
    ],
    image: picture3,
  },
  {
    number: "03",
    title: "Interior & Finishing Work",
    items: [
      "POP & False Ceiling Design",
      "Interior Designing & Space Planning",
      "Painting & Decorative Finishes",
      "Modular Kitchen & Wardrobe Installation",
      "Office Interior Fit-Out",
    ],
    image: picture4,
  },
  {
    number: "04",
    title: "Electrical & Utility Services",
    items: [
      "Electrical Wiring & Installation",
      "Lighting Setup",
      "Maintenance",
    ],
    image: picture1,
  },
  {
    number: "05",
    title: "Commercial Projects",
    items: [
      "Hospitals",
      "Schools",
      "Commercial Spaces",
      "Office Renovation",
    ],
    image: picture5,
  },
];

export default function OurServices() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const swiperRef = useRef(null);

  return (
    <section className="bg-white py-20">
      {/* Header */}
      <div className="text-center px-6 pb-16">
        <span className="inline-block text-xs tracking-widest uppercase px-5 py-2 rounded-full mb-8 border border-orange-400 text-orange-400 bg-orange-50">
          Our Core Services
        </span>

        <h1 className="font-bold mb-5 text-3xl md:text-5xl text-[#1a2332]">
          We Build Everything You Need
        </h1>

        <p className="text-slate-500 max-w-2xl mx-auto">
          We provide tailored construction solutions, designed to meet your
          needs and executed with precision.
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-7xl mx-auto px-6">
  <Swiper
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  spaceBetween={20}
  slidesPerView={1} // default (mobile)
  breakpoints={{
    640: { slidesPerView: 1 },   // mobile
    768: { slidesPerView: 2 },   // tablet
    1024: { slidesPerView: 3 },  // desktop
  }}

  >
    {services.map((service, i) => (
      <SwiperSlide key={i}>
        <div
          className="relative rounded-xl overflow-hidden cursor-pointer"
          onMouseEnter={() => setHoverIndex(i)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          {/* Image */}
          <img
            src={service.image}
            alt={service.title}
            className={`w-full h-[350px] object-cover transition-all duration-500
            ${hoverIndex === i ? "scale-105" : ""}`}
          />

          {/* BLACK Overlay */}
          <div
            className={`absolute inset-0 bg-black/70 flex flex-col justify-center px-6 text-white transition-all duration-500
            ${hoverIndex === i ? "opacity-100" : "opacity-0"}`}
          >
            <h3 className="text-xl font-bold mb-3">
              {service.title}
            </h3>

            <ul className="text-sm space-y-1">
              {service.items.map((item, j) => (
                <li key={j}>• {item}</li>
              ))}
            </ul>
          </div>

          {/* Bottom Info */}
          <div className="absolute bottom-0 bg-black/60 w-full p-4 text-white">
            <span className="text-xs text-orange-400">
              {service.number}
            </span>
            <h4 className="text-lg font-semibold">
              {service.title}
            </h4>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* 🔥 CENTERED ARROWS BELOW */}
  <div className="flex justify-center items-center gap-4 mt-8">
    <button
      onClick={() => swiperRef.current?.slidePrev()}
      className="bg-[#fff7ed] border border-[orange] text-[orange] shadow-md p-3 rounded-full hover:bg-orange-500 hover:text-white transition"
    >
      <ChevronLeft size={20} />
    </button>

    <button
      onClick={() => swiperRef.current?.slideNext()}
      className="bg-[#fff7ed] border border-[orange] text-[orange]  shadow-md p-3 rounded-full hover:bg-orange-500 hover:text-white transition"
    >
      <ChevronRight size={20} />
    </button>
  </div>
</div>
    </section>
  );
}