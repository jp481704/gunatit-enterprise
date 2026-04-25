import aboutUs from "../../assets/about-us.png";


const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "4.9/5", label: "Customer Satisfaction Score" },
  { value: "100%", label: "Project Success Rate" },
];

export default function AboutSection() {
  return (
    <section className="bg-[#f5f5f3] px-6 md:px-14 pt-16 pb-16">
    
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10">
    
        {/* Heading + CTA */}
        <div >
                  {/* Badge */}
      <span className="inline-block bg-[#FDEEE8] text-[#C04010] text-[16px] font-semibold px-4 py-1.5 rounded-full mb-7">
        About Us
      </span>
          <p className="text-gray-500 text-base leading-relaxed max-w-3xl mb-4">
            Gunatit Enterprise is a trusted civil contractor in Mumbai known for
            delivering high-quality construction and renovation services across
            Mumbai, Pune, and Goa (Dervan).
          </p>
          <p className="text-gray-500 text-base leading-relaxed max-w-3xl mb-4">
            With over two decades of industry experience, we provide complete
            civil and interior solutions tailored to residential, commercial,
            and institutional needs. Our team of skilled engineers, designers,
            and technicians ensures every project is executed with precision and
            transparency.
          </p>
          {/* Body text */}
          <p className="text-gray-500 text-base leading-relaxed max-w-3xl mb-4">
            Gunatit Enterprise delivers complete civil and interior solutions
            across{" "}
            <span className="text-gray-700 font-medium">
              Mumbai, Pune, and Goa (Dervan)
            </span>{" "}
            — serving residential, commercial, and institutional projects with
            skilled engineers, designers, and technicians. From foundation work
            to final finishing, we stand for excellence, safety, and timely
            delivery.
          </p>
          <a
              href="/about"
              className="inline-flex items-center gap-3 border-[1.5px] border-gray-800 text-gray-900 font-semibold text-sm px-6 py-3.5 rounded hover:bg-gray-100 transition-colors whitespace-nowrap self-start md:self-center"
            >
              Get to Know Us <span>→</span>
            </a>
          <div />
         
        </div>
         <div className="flex justify-center">
            
            <img src={aboutUs} alt = "about us" className="w-[60%] rounded-[20px]" />
          </div>
      </div>
      {/* Stats */}
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {stats.map(({ value, label }) => (
    <div 
      key={label} 
      className="bg-[#fdeee8] p-10 rounded-2xl flex flex-col items-center text-center transition-transform hover:scale-[1.02] duration-300"
    >
      <span className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-3">
        {value}
      </span>
      <span className="h-[1px] w-10 bg-gray-900/10 mb-3" />
      <span className="text-sm font-medium text-gray-700 italic">
        {label}
      </span>
    </div>
  ))}
</div>
    </section>
  );
}
