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

const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
