import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../assets/logo.png"

const navLinks = [
  { label: 'Home',       to: '/' },
  { label: 'About',      to: '/about' },
  { label: 'Projects',   to: '/projects' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 px-6 md:px-14 py-4
      ${scrolled
        ? 'bg-white border-b border-gray-200 shadow-sm'
        : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between">

        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div className="grid grid-cols-2 gap-[3px] w-6 h-6">
            <span className={`rounded-[2px] ${scrolled ? 'bg-[#E84D1C]' : 'bg-white'}`} />
            <span className={`rounded-[2px] ${scrolled ? 'bg-[#E84D1C]' : 'bg-white'}`} />
            <span className={`rounded-[2px] ${scrolled ? 'bg-[#E84D1C]' : 'bg-white'}`} />
            <span className={`rounded-[2px] ${scrolled ? 'bg-[#E84D1C]' : 'bg-white'}`} />
          </div>
          <img
            src={logo}
            alt="logo"
            className={`w-20 ${scrolled ? '' : 'bg-white'}`}
          />
        </div>

        {/* Desktop nav */}
        <div className={`hidden md:flex items-center gap-0.5 rounded-full px-1.5 py-1.5
          ${scrolled
            ? 'bg-transparent gap-10'
            : 'bg-white/12 backdrop-blur-md border border-white/20'
          }`}
        >
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-5 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  scrolled
                    ? isActive ? 'text-gray-900 font-semibold' : 'text-gray-500 hover:text-gray-900'
                    : isActive ? 'bg-white/20 text-white' : 'text-white/80 hover:bg-white/15 hover:text-white'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Let's Talk */}
        <a
          href="#contact"
          className={`hidden md:inline-block font-bold text-sm pb-0.5 border-b-2 transition-colors
            ${scrolled
              ? 'text-gray-900 border-gray-900 hover:border-gray-500'
              : 'text-white border-white/70 hover:border-white'
            }`}
        >
          Let's Talk!
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-full border backdrop-blur-sm
            ${scrolled ? 'bg-gray-100 border-gray-300' : 'bg-white/10 border-white/20'}`}
          aria-label="Toggle menu"
        >
          <span className={`block w-4 h-0.5 transition-all duration-300 origin-center ${scrolled ? 'bg-gray-800' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-4 h-0.5 transition-all duration-300 ${scrolled ? 'bg-gray-800' : 'bg-white'} ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-4 h-0.5 transition-all duration-300 origin-center ${scrolled ? 'bg-gray-800' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full right-4 left-4 z-50">
          <div className={`flex flex-col gap-1 border rounded-2xl px-3 py-3 shadow-xl
            ${scrolled ? 'bg-white border-gray-200' : 'bg-black/60 backdrop-blur-xl border-white/20'}`}
          >
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    scrolled
                      ? isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50'
                      : isActive ? 'bg-white/20 text-white' : 'text-white/80 hover:bg-white/15 hover:text-white'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className={`mt-1 px-4 py-2.5 rounded-xl text-sm font-bold text-center transition-colors
                ${scrolled ? 'bg-gray-900 text-white hover:bg-gray-700' : 'bg-white/15 text-white hover:bg-white/25'}`}
            >
              Let's Talk!
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}