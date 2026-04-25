import heroBg from '../../assets/hero.jpg'
import Navbar from '../common/Navbar'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Hero background image */}
      <img
        src={heroBg}
        alt="hero background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/46 z-[1]" />

      {/* Navbar on top */}
      <Navbar />

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center text-center px-6 pt-14 pb-24">

        {/* Badge */}
        <span className="inline-flex items-center gap-2 bg-white/10 border border-white/25 backdrop-blur-sm rounded-full px-5 py-2 text-white/90 text-xs font-semibold tracking-wider mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-white/90 shrink-0" />
         Gunatit Enterprise
        </span>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] tracking-tight max-w-3xl mb-5">
          Leading Civil Contractor in Mumbai Since 1999
        </h1>

        {/* Subtext */}
        <p className="text-white/70 text-base leading-relaxed max-w-4xl mb-10">
         Looking for a reliable civil contractor in Mumbai who delivers quality, precision, and on-time results? Gunatit Enterprise is your trusted partner for residential, commercial, and institutional construction projects.
         <br/>
         As a top-rated civil contractor in Mumbai, we specialize in complete civil construction, renovation, RCC structure work, and interior execution all under one roof.
        </p>

        {/* CTA Button */}
        <button className="inline-flex items-center gap-2.5 bg-white/95 hover:bg-white text-gray-900 font-bold text-sm px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 duration-150">
         👉 Get a Free Quote Today
       
        </button>

      </div>
    </section>
  )
}