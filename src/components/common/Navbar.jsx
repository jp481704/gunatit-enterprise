import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import logo from "../../assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Contact Us", to: "/contact" },
];

/* ───────────────── Logo ───────────────── */
const Logo = () => (
  <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1.5 cursor-pointer select-none shadow-md">
    <div
      className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-800 to-blue-500
      flex items-center justify-center text-white font-black text-sm shrink-0"
    >
      GE
    </div>

    <div className="leading-tight pr-1">
      <p className="text-blue-900 font-black text-xs tracking-wide">
        GUNATIT
      </p>

      <p className="text-blue-500 font-semibold text-[9px] tracking-widest">
        ENTERPRISE
      </p>
    </div>
  </div>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (label) => {
    setActive(label);
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
            {navLinks.map(({ label }) => (
              <button
                key={label}
                onClick={() => handleNavClick(label)}
                className={`px-5 py-2 rounded-full text-sm font-semibold
                transition-all duration-200 whitespace-nowrap
                cursor-pointer border-none
                ${
                  active === label
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-blue-900 hover:bg-blue-100"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* ═════════ Let's Talk ═════════ */}
          <a
            href="#contact"
            className="hidden md:inline-block font-bold text-sm pb-0.5
            border-b-2 border-blue-700
            hover:border-blue-900
            text-blue-900 transition-all duration-200"
          >
            Let&apos;s Talk!
          </a>

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
          {navLinks.map(({ label }) => (
            <button
              key={label}
              onClick={() => handleNavClick(label)}
              className={`w-full text-center px-6 py-3 rounded-xl
              text-base font-medium transition-colors duration-200
              border-none cursor-pointer
              ${
                active === label
                  ? "bg-white/20 text-white"
                  : "bg-transparent text-white/75 hover:bg-white/10 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}

          {/* Mobile CTA */}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 w-full text-center py-3 rounded-xl
            font-bold text-sm text-white
            border border-white/40 hover:bg-white/10
            transition-colors"
          >
            Let&apos;s Talk!
          </a>
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