import React from "react";
import Hero from "../sections/Hero";
import AboutSection from "../sections/AboutSection";
import LogoStrip from "../sections/LogoStrip";
import OurServices from "../sections/OurServices";
import WhyChooseUs from "../sections/WhyChooseUs";
import HowWeWork from "../sections/HowWeWork";
import ProblemSolutionSection from "../sections/ProblemSolutionSection";
import TrendingAndAreas from "../sections/TrendingAndAreas";
import ClientTestimonials from "../sections/ClientTestimonials";
import Faq from "../sections/Faq";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import ContactUs from "../sections/ContactUs";
import  "../../App.css";

const Home = () => {
  return (
    <div>
            <Navbar />

      <Hero />
      <LogoStrip />
      <AboutSection />
      <OurServices />
      <WhyChooseUs />
      <HowWeWork />
      <ProblemSolutionSection />
      <TrendingAndAreas/>
      <ClientTestimonials/>
      <Faq/>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
