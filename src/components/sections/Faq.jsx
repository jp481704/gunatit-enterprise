import { useState } from "react";

const faqs = [
  {
    q: "Why should I choose Gunatit Enterprise as a civil contractor in Mumbai?",
    a: "We have 25+ years of experience, a skilled team, and a strong track record of delivering quality projects on time. Our transparent pricing and all-in-one service approach make us a reliable civil contractor in Mumbai.",
    icon: "🏆",
    tag: "About Us",
  },
  {
    q: "Do you handle complete construction from start to finish?",
    a: "Yes, we provide end-to-end services including planning, civil work, interiors, electrical, and final finishing. You don't need to coordinate with multiple vendors.",
    icon: "🔄",
    tag: "Services",
  },
  {
    q: "What types of projects do you usually work on?",
    a: "We handle residential homes, commercial spaces, offices, hospitals, schools, and renovation projects across Mumbai, Pune, and Goa.",
    icon: "🏗️",
    tag: "Projects",
  },
  {
    q: "Do you provide renovation services for old homes?",
    a: "Yes, we specialize in complete home renovation including structural changes, waterproofing, interiors, and modern upgrades.",
    icon: "🏠",
    tag: "Renovation",
  },
  {
    q: "How do you ensure quality in construction work?",
    a: "We use high-quality materials, experienced professionals, and follow proper site supervision and safety standards at every stage of the project.",
    icon: "🏅",
    tag: "Quality",
  },
  {
    q: "Do you offer waterproofing solutions for leakage issues?",
    a: "Yes, we provide effective and long-lasting waterproofing solutions for terraces, bathrooms, walls, and basements.",
    icon: "💧",
    tag: "Services",
  },
  {
    q: "Can you help with design and interior planning as well?",
    a: "Absolutely, our team provides interior design, space planning, modular kitchen setup, and complete finishing work along with civil construction.",
    icon: "🎨",
    tag: "Interior",
  },
  {
    q: "How is the project cost calculated?",
    a: "The cost depends on project size, materials, design requirements, and scope of work. We provide a clear and detailed quotation before starting the project.",
    icon: "💰",
    tag: "Pricing",
  },
  {
    q: "Do you complete projects on time?",
    a: "Yes, we follow a structured process and timeline to ensure timely delivery without compromising on quality.",
    icon: "📅",
    tag: "Delivery",
  },
  {
    q: "Are your workers skilled and experienced?",
    a: "Yes, our team consists of trained and experienced professionals who have worked on multiple residential and commercial projects.",
    icon: "👷",
    tag: "Team",
  },
  {
    q: "Which areas do you serve?",
    a: "We mainly serve Mumbai and also take projects in Pune and Goa (Dervan).",
    icon: "📍",
    tag: "Locations",
  },
  {
    q: "How can I get started or request a quote?",
    a: "You can call us directly or fill out the contact form on our website. Our team will get in touch with you quickly to understand your requirements and provide a quote.",
    icon: "📞",
    tag: "Contact",
  },
];

const orange = "#f97316";
const cream = "#fff7ed";
const dark = "#1a2332";
const orangeLight = "rgba(249,115,22,0.10)";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [filter, setFilter] = useState("All");

  const tags = ["All", ...Array.from(new Set(faqs.map((f) => f.tag)))];

  const filtered =
    filter === "All" ? faqs : faqs.filter((f) => f.tag === filter);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      style={{ fontFamily: "'DM Sans', sans-serif", background: cream }}
      className="py-20 px-4 md:px-8"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500;600&display=swap');
        .display-font { font-family: 'Playfair Display', serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.6s ease forwards; opacity: 0; }
        .d1{animation-delay:0.05s} .d2{animation-delay:0.15s} .d3{animation-delay:0.25s}

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .answer-reveal { animation: slideDown 0.3s ease forwards; }

        .faq-item {
          background: #ffffff;
          border: 1.5px solid #fed7aa;
          border-radius: 16px;
          transition: all 0.25s ease;
          overflow: hidden;
        }
        .faq-item:hover {
          border-color: ${orange};
          box-shadow: 0 4px 20px rgba(249,115,22,0.10);
        }
        .faq-item.open {
          border-color: ${orange};
          box-shadow: 0 8px 32px rgba(249,115,22,0.14);
        }

        .faq-number {
          font-family: 'Playfair Display', serif;
          font-size: 13px;
          font-weight: 700;
          color: ${orange};
          min-width: 28px;
        }

        .plus-btn {
          width: 32px; height: 32px;
          border-radius: 50%;
          border: 1.5px solid #fed7aa;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: all 0.25s ease;
          background: white;
          color: ${orange};
        }
        .plus-btn.open-btn {
          background: ${orange};
          border-color: ${orange};
          color: white;
          transform: rotate(45deg);
        }

        .tag-btn {
          border: 1.5px solid #fed7aa;
          background: white;
          color: #9a6b3d;
          font-size: 12px;
          font-weight: 500;
          padding: 5px 14px;
          border-radius: 999px;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .tag-btn:hover, .tag-btn.active {
          background: ${orange};
          border-color: ${orange};
          color: white;
        }

        .section-pill {
          background: ${orangeLight};
          border: 1px solid #fed7aa;
          color: ${orange};
        }

        .divider-line {
          flex: 1; height: 1px;
          background: linear-gradient(to right, #fed7aa, transparent);
        }

        .stat-card {
          background: white;
          border: 1.5px solid #fed7aa;
          border-radius: 16px;
          text-align: center;
          padding: 20px 16px;
        }
      `}</style>

      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 fade-up d1">
          <span className="section-pill inline-block text-xs tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2
            className="display-font text-4xl md:text-5xl font-bold leading-tight mb-4"
            style={{ color: dark }}
          >
            Frequently Asked{" "}
            <span style={{ color: orange }}>Questions</span>
          </h2>
          <p className="text-slate-500 text-base font-light max-w-lg mx-auto leading-relaxed">
            Everything you need to know about working with Gunatit Enterprise — Mumbai's trusted civil contractor.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 justify-center mb-10 fade-up d2">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`tag-btn ${filter === tag ? "active" : ""}`}
              onClick={() => { setFilter(tag); setOpenIndex(null); }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 fade-up d3">
          {filtered.map((faq, i) => {
            const isOpen = openIndex === i;
            const num = String(faqs.indexOf(faq) + 1).padStart(2, "0");

            return (
              <div
                key={i}
                className={`faq-item ${isOpen ? "open" : ""}`}
              >
                {/* Question Row */}
                <button
                  className="w-full text-left px-5 py-4 flex items-start gap-3 group"
                  onClick={() => toggle(i)}
                >
                  {/* Number */}
                  <span className="faq-number mt-0.5">Q{num}</span>

                  {/* Icon */}
                  <span
                    className="text-lg flex-shrink-0 mt-0.5 w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: isOpen ? orangeLight : "#f9fafb", fontSize: "15px" }}
                  >
                    {faq.icon}
                  </span>

                  {/* Question text */}
                  <span
                    className="flex-1 text-sm md:text-base font-semibold leading-snug transition-colors duration-200"
                    style={{ color: isOpen ? orange : dark }}
                  >
                    {faq.q}
                  </span>

                  {/* Tag pill — desktop */}
                  <span
                    className="hidden md:inline-block text-xs px-2.5 py-0.5 rounded-full font-medium flex-shrink-0 mt-1"
                    style={{ background: orangeLight, color: orange }}
                  >
                    {faq.tag}
                  </span>

                  {/* Plus/Minus */}
                  <span className={`plus-btn ${isOpen ? "open-btn" : ""}`}>
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div className="answer-reveal px-5 pb-5">
                    <div
                      className="h-px mb-4"
                      style={{ background: "linear-gradient(to right, #fed7aa, transparent)" }}
                    />
                    <div className="flex items-start gap-3">
                      <div
                        className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5"
                        style={{ background: orange }}
                      >
                        A
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed font-light">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
          {[
            { val: "12+", label: "Common Questions" },
            { val: "25+", label: "Years Experience" },
            { val: "500+", label: "Happy Clients" },
            { val: "3", label: "Cities Served" },
          ].map((s, i) => (
            <div key={i} className="stat-card">
              <div
                className="display-font text-3xl font-bold mb-1"
                style={{ color: orange }}
              >
                {s.val}
              </div>
              <div className="text-xs text-slate-500 font-light tracking-wide">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div
          className="mt-8 rounded-2xl p-7 md:p-9 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: dark }}
        >
          <div>
            <div className="display-font text-2xl md:text-3xl font-bold text-white mb-1">
              Still Have Questions?
            </div>
            <p className="text-gray-400 text-sm font-light">
              Our team is ready to help — reach out and we'll get back to you quickly.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <button
              className="px-7 py-3 rounded-full text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              style={{ background: orange }}
            >
              📞 Call Us Now
            </button>
            <button className="px-7 py-3 rounded-full text-sm font-semibold border border-white/20 text-white/70 hover:border-white/50 hover:text-white transition-all duration-200">
              Get a Quote →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}