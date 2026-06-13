import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home",       id: "home" },
  { label: "About",      id: "about" },
  { label: "Services",   id: "services" },
  { label: "Contact Us", id: "contact" },
];

// Section IDs in DOM order — drives IntersectionObserver active tracking
const ALL_SECTION_IDS = [
  "home",
  "about",
  "services",
  "why-us",
  "how-we-work",
  "problem-solution",
  "trending",
  "testimonials",
  "faq",
  "contact",
];

/* ───────────────── Logo ───────────────── */
const Logo = () => (
  <div
    onClick={() => scrollToSection("home")}
    className="flex items-center gap-2 bg-white rounded-full px-3 py-1.5 cursor-pointer select-none shadow-md"
  >
    <div
      className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-800 to-blue-500
      flex items-center justify-center text-white font-black text-sm shrink-0"
    >
      GE
    </div>
    <div className="leading-tight pr-1">
      <p className="text-blue-900 font-black text-xs tracking-wide">GUNATIT</p>
      <p className="text-blue-500 font-semibold text-[9px] tracking-widest">
        ENTERPRISE
      </p>
    </div>
  </div>
);

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const navHeight = 72;
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  /* ── Scroll detection ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Active section via IntersectionObserver ── */
  useEffect(() => {
    const observers = [];
    const visibilityMap = {};

    ALL_SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          visibilityMap[id] = entry.isIntersecting;
          // Pick the first (topmost) visible section
          const current = ALL_SECTION_IDS.find((sid) => visibilityMap[sid]);
          if (current) setActive(current);
        },
        { threshold: 0.25 }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  return (
    <>
      {/* ═════════════ NAVBAR ═════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        px-6 md:px-14 py-4
        ${
          scrolled
            ? "bg-blue-900/85 backdrop-blur-xl shadow-xl border-b border-white/10"
            : "bg-gradient-to-r from-blue-700 via-blue-600 to-white/90 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* ═════════ Desktop Nav ═════════ */}
          <div
            className="hidden md:flex items-center gap-1
            rounded-full px-2 py-2
            bg-white/70 backdrop-blur-xl
            border border-blue-200 shadow-md"
          >
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold
                transition-all duration-200 whitespace-nowrap
                cursor-pointer border-none
                ${
                  active === id
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-blue-900 hover:bg-blue-100"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* ═════════ Let's Talk ═════════ */}
          <button
            onClick={() => handleNavClick("contact")}
            className="hidden md:inline-block font-bold text-sm pb-0.5
            border-b-2 border-blue-700
            hover:border-blue-900
            text-blue-900 transition-all duration-200
            bg-transparent border-t-0 border-l-0 border-r-0 cursor-pointer"
          >
            Let&apos;s Talk!
          </button>

          {/* ═════════ Mobile Hamburger ═════════ */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-center
            w-9 h-9 gap-1.5 focus:outline-none
            bg-transparent border-none cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 bg-white rounded-full transition-all duration-300
              ${menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`}
            />
            <span
              className={`block h-0.5 bg-white rounded-full transition-all duration-300
              ${menuOpen ? "opacity-0 w-0" : "w-5"}`}
            />
            <span
              className={`block h-0.5 bg-white rounded-full transition-all duration-300
              ${menuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`}
            />
          </button>
        </div>
      </nav>

      {/* ═════════════ MOBILE MENU ═════════════ */}
      <div
        className={`fixed top-0 left-0 right-0 z-40
        transition-all duration-300 ease-in-out
        bg-blue-900/95 backdrop-blur-md
        ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-2 pt-24 pb-10 px-6">
          {navLinks.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={`w-full text-center px-6 py-3 rounded-xl
              text-base font-medium transition-colors duration-200
              border-none cursor-pointer
              ${
                active === id
                  ? "bg-white/20 text-white"
                  : "bg-transparent text-white/75 hover:bg-white/10 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}

          {/* Mobile CTA */}
          <button
            onClick={() => handleNavClick("contact")}
            className="mt-4 w-full text-center py-3 rounded-xl
            font-bold text-sm text-white
            border border-white/40 hover:bg-white/10
            transition-colors bg-transparent cursor-pointer"
          >
            Let&apos;s Talk!
          </button>
        </div>
      </div>

      {/* ═════════════ OVERLAY ═════════════ */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
