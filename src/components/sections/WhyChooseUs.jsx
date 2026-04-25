import { CheckCircle2, XCircle } from "lucide-react"; // Install lucide-react for icons

export default function WhyChooseUs() {
  const data = [
    { feature: "Experience", ours: "25+ Years (Since 1999)", others: "Limited Experience" },
    { feature: "Services", ours: "All-in-One Civil + Interior", others: "Separate Vendors Needed" },
    { feature: "Pricing", ours: "Transparent & Honest", others: "Hidden Costs" },
    { feature: "Delivery", ours: "On-Time Completion", others: "Frequent Delays" },
    { feature: "Quality", ours: "High-Grade Materials", others: "Inconsistent Quality" },
    { feature: "Expertise", ours: "Reputed Company Portfolio", others: "Limited Exposure" },
    { feature: "Local Knowledge", ours: "Strong Mumbai Expertise", others: "Generic Approach" },
  ];

  return (
    <section className="bg-[#fff7ed] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1a2332] tracking-tight">
            Why Choose Gunatit Enterprise
          </h2>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            We don't just build spaces; we build trust through decades of transparency and local expertise.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 items-stretch bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          
          {/* Column 1: Features (Hidden on mobile labels, or stylized) */}
          <div className="hidden md:flex flex-col bg-gray-50/50">
            <div className="p-8 h-24 flex items-end font-bold text-gray-400 uppercase text-xs tracking-widest">
              Feature
            </div>
            {data.map((item, i) => (
              <div key={i} className="p-6 h-20 flex items-center border-t border-gray-100 font-semibold text-[#1a2332]">
                {item.feature}
              </div>
            ))}
          </div>

          {/* Column 2: Gunatit Enterprise (The "Winner" Column) */}
          <div className="relative flex flex-col bg-white ring-4 ring-orange-500 ring-inset shadow-xl z-10">
            <div className="p-8 h-24 flex flex-col justify-center bg-orange-500 text-white text-center">
              <span className="text-sm font-bold uppercase tracking-widest opacity-80">Our Standard</span>
              <span className="text-xl font-bold">Gunatit Enterprise</span>
            </div>
            {data.map((item, i) => (
              <div key={i} className="p-6 h-20 flex flex-col md:flex-row items-center justify-center gap-3 border-t border-orange-100 bg-orange-50/30 text-center">
                <span className="md:hidden text-xs font-bold text-orange-400 uppercase">{item.feature}</span>
                <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0" />
                <span className="font-bold text-orange-900">{item.ours}</span>
              </div>
            ))}
          </div>

          {/* Column 3: Others */}
          <div className="flex flex-col bg-gray-50/30">
            <div className="p-8 h-24 flex flex-col justify-center text-center">
              <span className="text-sm font-bold uppercase tracking-widest text-gray-400">The Industry</span>
              <span className="text-xl font-bold text-gray-500">Others</span>
            </div>
            {data.map((item, i) => (
              <div key={i} className="p-6 h-20 flex flex-col md:flex-row items-center justify-center gap-3 border-t border-gray-100 text-center opacity-60">
                 <span className="md:hidden text-xs font-bold text-gray-400 uppercase">{item.feature}</span>
                <XCircle className="w-5 h-5 text-gray-400 shrink-0" />
                <span className="text-gray-600">{item.others}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Local Trust Footer */}
        <p className="text-center mt-10 text-gray-500 font-medium italic">
          * Proudly serving the Mumbai Metropolitan Region for over two decades.
        </p>
      </div>
    </section>
  );
}