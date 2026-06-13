import { useState } from "react";

const contactInfo = [
  {
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    label: "Email",
    value: "hello@gunatit.com",
  },
  {
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    label: "Phone",
    value: "+91 98765 43210",
  },
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    label: "Location",
    value: "Ahmedabad, Gujarat, India",
  },
];

const EMPTY = { firstName: "", lastName: "", email: "", message: "" };

export default function ContactUs() {
  const [form, setForm] = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(EMPTY);
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 py-20 px-6 md:px-14"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-14">
          <span className="inline-block text-blue-300 text-xs font-semibold uppercase tracking-widest mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            Let&apos;s Build Something{" "}
            <span className="text-blue-300">Great Together</span>
          </h2>
          <p className="text-blue-200 text-sm mt-3 max-w-xl mx-auto">
            Have a project in mind? Fill out the form and we&apos;ll get back to
            you within 24 hours.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* ── Left: contact info ── */}
          <div data-aos="fade-right" className="flex flex-col gap-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-2">
                Contact Information
              </h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Reach out directly or drop us a message through the form. We
                love hearing from businesses that are ready to grow.
              </p>
            </div>

            <ul className="flex flex-col gap-6">
              {contactInfo.map(({ icon, label, value }) => (
                <li key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-700/50 border border-blue-600/40 flex items-center justify-center shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 text-blue-300"
                    >
                      <path d={icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-blue-400 text-xs font-semibold uppercase tracking-widest">
                      {label}
                    </p>
                    <p className="text-white text-sm font-medium mt-0.5">
                      {value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Decorative card */}
            <div className="rounded-2xl bg-blue-700/30 border border-blue-600/30 p-6">
              <p className="text-blue-100 text-sm italic leading-relaxed">
                &ldquo;We respond to every inquiry within 24 hours — your
                success is our top priority.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-black text-xs">
                  GE
                </div>
                <span className="text-blue-200 text-xs font-semibold">
                  Gunatit Enterprise Team
                </span>
              </div>
            </div>
          </div>

          {/* ── Right: form ── */}
          <div data-aos="fade-left" data-aos-delay="150" className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-10 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8 text-white"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-xl">Message Sent!</h3>
                <p className="text-blue-200 text-sm">
                  Thank you for reaching out. We&apos;ll get back to you within
                  24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-blue-300 text-sm underline underline-offset-2 bg-transparent border-none cursor-pointer hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* First Name + Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-blue-200 text-xs font-semibold uppercase tracking-widest">
                      First Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                      placeholder="Jay"
                      className="bg-white/10 border border-white/20 rounded-xl px-4 py-3
                      text-white text-sm placeholder-blue-300/50
                      focus:outline-none focus:border-blue-400 focus:bg-white/15
                      transition-all duration-200"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-blue-200 text-xs font-semibold uppercase tracking-widest">
                      Last Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Parmar"
                      className="bg-white/10 border border-white/20 rounded-xl px-4 py-3
                      text-white text-sm placeholder-blue-300/50
                      focus:outline-none focus:border-blue-400 focus:bg-white/15
                      transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-blue-200 text-xs font-semibold uppercase tracking-widest">
                    Email <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="jay@example.com"
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3
                    text-white text-sm placeholder-blue-300/50
                    focus:outline-none focus:border-blue-400 focus:bg-white/15
                    transition-all duration-200"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-blue-200 text-xs font-semibold uppercase tracking-widest">
                    Message <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="bg-white/10 border border-white/20 rounded-xl px-4 py-3
                    text-white text-sm placeholder-blue-300/50
                    focus:outline-none focus:border-blue-400 focus:bg-white/15
                    transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-1 w-full bg-blue-600 hover:bg-blue-500 text-white
                  font-bold text-sm py-3.5 rounded-xl
                  transition-colors duration-200 cursor-pointer border-none
                  shadow-lg shadow-blue-900/40"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
