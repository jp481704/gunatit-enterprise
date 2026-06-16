const navLinks = [
  { label: "Home",       id: "home" },
  { label: "About",      id: "about" },
  { label: "Services",   id: "services" },
  { label: "Gallery",    id: "gallery" },
  { label: "Contact Us", id: "contact" },
];
import Logo from "../../assets/logo.png";

const services = [
  "Residential Construction & Renovation",
  "Structural & Civil Construction",
  "Interior & Finishing Work",
  "Electrical & Utility Services",
  "Commercial Projects",
];


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white">
      {/* ── Main grid ── */}
      <div className="px-6 md:px-14 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand column */}
        <div className="flex flex-col gap-4">
 {/* Logo */}
          <div className="flex items-center gap-2 w-[60px] lg:w-[80px] bg-white rounded rounded-full" >
            <img src={Logo}   alt="Logo" />
          </div>       
          <div className="flex gap-3 mt-1">
            {/* Social icons (SVG inline, no extra deps) */}
            {[
              {
                label: "LinkedIn",
                path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
              },
              {
                label: "Twitter",
                path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
              },
              {
                label: "Instagram",
                path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z",
              },
            ].map(({ label, path }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-blue-600
                flex items-center justify-center transition-colors duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 text-blue-200"
                >
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            {navLinks.map(({ label, id }) => (
              <li key={label}>
                <a
                  href={`#${id}`}
                  className="text-blue-200 text-sm hover:text-white transition-colors duration-200"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
            Services
          </h3>
          <ul className="flex flex-col gap-3">
            {services.map((s) => (
              <li key={s}>
                <a
                  href="#"
                  className="text-blue-200 text-sm hover:text-white transition-colors duration-200"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
            Contact
          </h3>
          <ul className="flex flex-col gap-4 text-blue-200 text-sm">
            {[
              {
                icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                text: "gunatit974@gmail.com",
              },
              {
                icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
                text: "+91 82911 01080",
              },
              {
                icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                text: "Mumbai, Maharashtra, India",
              },
            ].map(({ icon, text }) => (
              <li key={text} className="flex items-start gap-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 mt-0.5 shrink-0 text-blue-400"
                >
                  <path d={icon} />
                </svg>
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10 px-6 md:px-14 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-blue-300 text-xs">
        <p>© {year} Gunatit Enterprise. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-white transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
