
const trends = [
  {
    icon: "🪵",
    title: "Premium Floor Tile Installation",
    tag: "Seamless Finish",
    detail:
      "Expert floor tile laying with precise levelling, grouting, and polishing for a flawless, long-lasting surface.",
  },
  {
    icon: "🚿",
    title: "Bathroom & Kitchen Tile Fitting",
    tag: "Waterproof Precision",
    detail:
      "Waterproof tile installation for bathrooms and kitchens using premium adhesives and anti-skid finishes.",
  },
  {
    icon: "🖼️",
    title: "Designer Wall Tile Installation",
    tag: "Modern Interiors",
    detail:
      "Stylish wall tile fitting for living rooms, offices, and retail spaces — perfectly aligned and finished.",
  },
  {
    icon: "💎",
    title: "Marble, Granite & Vitrified Flooring",
    tag: "Luxury Appeal",
    detail:
      "High-end marble, granite, and vitrified tile installation delivering premium aesthetics and durability.",
  },
  {
    icon: "🏢",
    title: "Commercial Tile & Flooring Solutions",
    tag: "Built for Heavy Use",
    detail:
      "Heavy-duty flooring for offices, showrooms, warehouses, and commercial spaces built to withstand high traffic.",
  },
];

const areas = [
  {
    city: "Mumbai-Thane",
    badge: "Primary Location",
    icon: "📍",
    desc: "Our headquarters and main operational hub — serving all neighbourhoods across the city.",
    primary: true,
  },
  {
    city: "Pune",
    badge: "Service Area",
    icon: "🗺️",
    desc: "Expanding our trusted construction expertise to Pune's fast-growing residential and commercial sectors.",
    primary: false,
  },
  {
    city: "Goa",
    badge: "Dervan",
    icon: "🌴",
    desc: "Bringing quality civil and interior construction to the coastal communities of Dervan, Goa.",
    primary: false,
  },
];

export default function TrendingAndAreas() {

  return (
    <section id="trending" className="bg-white py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-14">
          <div className="flex justify-center mb-5">
            <span className="px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-[#4167be] text-xs font-bold uppercase tracking-widest">
              Tile Services
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Modern Tile Installation
            <br />
            <span className="text-[#4167be]">Services in Mumbai</span>
          </h2>

          <p className="mt-5 text-slate-500 max-w-2xl mx-auto leading-7">
            Enhance your residential and commercial spaces with precision tile
            installation, premium flooring solutions, and expert craftsmanship
            built to last.
          </p>
        </div>

        {/* Trend Grid */}
        <div data-aos="fade-up" data-aos-delay="100" className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {trends.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white border border-blue-100 rounded-2xl p-5"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-xs font-bold text-[#4167be]">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-xl">
                {item.icon}
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
              </div>

              <span className="hidden sm:block text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 text-[#4167be]">
                {item.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Note Box */}
        <div data-aos="fade-up" data-aos-delay="150" className="mt-8 bg-blue-50 border border-dashed border-blue-200 rounded-2xl p-6 flex gap-4">
          <span className="text-xl">💡</span>

          <p className="text-slate-600 leading-7">
            We use advanced installation techniques and premium materials to
            deliver{" "}
            <span className="font-semibold text-[#4167be]">
              elegant, durable, and low-maintenance flooring solutions
            </span>{" "}
            across Mumbai.
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-20">
          <div className="flex-1 h-px bg-gradient-to-r from-blue-200 to-transparent" />

          <div className="px-6 py-2 rounded-full bg-[#4167be] text-white text-sm font-semibold">
            📍 Service Areas
          </div>

          <div className="flex-1 h-px bg-gradient-to-l from-blue-200 to-transparent" />
        </div>

        {/* Areas Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Where We <span className="text-[#4167be]">Serve</span>
          </h2>

          <p className="mt-4 text-slate-500 max-w-xl mx-auto leading-7">
            We proudly serve as a reliable civil contractor in Mumbai and nearby
            regions.
          </p>
        </div>

        {/* Area Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <div
              key={index}
              className={`rounded-3xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                area.primary
                  ? "border-blue-600 bg-gradient-to-br from-blue-50 to-white shadow-lg"
                  : "border-blue-100 bg-white hover:border-blue-600"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-bold px-4 py-1 rounded-full ${
                    area.primary
                      ? "bg-[#4167be] text-white"
                      : "bg-blue-50 text-[#4167be] border border-blue-100"
                  }`}
                >
                  {area.badge}
                </span>

                <span className="text-3xl">{area.icon}</span>
              </div>

              <h3 className="text-3xl font-extrabold text-slate-900 mt-5 mb-3">
                {area.city}
              </h3>

              <p className="text-slate-500 leading-7">
                {area.desc}
              </p>

              <div
                className={`h-1 rounded-full mt-6 ${
                  area.primary ? "bg-blue-600 w-full" : "bg-blue-200 w-2/5"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}