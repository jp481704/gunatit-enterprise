import React from 'react';


import consultation from "../../assets/consultation.jpg";
import siteInspection from "../../assets/site-inspection.jpg";
import costestimation from "../../assets/cost-estimation.jpg";
import execution from "../../assets/execution.jpg";
import qualitycheck from "../../assets/qualitycheck.jpg";

// For the best result, place these generated images (e.g., via Midjourney or DALL-E)
// in your project's `/public/images/process/` folder.
// I have defined the descriptive image filenames below.
const processSteps = [
  {
    number: "1",
    title: "Consultation & Requirement Analysis",
    image: consultation, // A formal meeting: Architect and client review blueprints over coffee. Professional, corporate setting.
  },
  {
    number: "2",
    title: "Site Inspection & Planning",
    image: siteInspection, // An engineer with a hard hat using specialized equipment (e.g., total station) on a dusty construction site overlooking Mumbai skyline.
  },
  {
    number: "3",
    title: "Cost Estimation & Approval",
    image: costestimation, // Close-up of a hand signing a document next to a laptop displaying a construction budget spreadsheet and a calculator. Transparent and organized.
  },
  {
    number: "4",
    title: "Execution with Skilled Team",
    image: execution, // Dynamic action shot: multiple construction workers in safety gear operating heavy machinery (e.g., concrete mixer, steel welding) efficiently.
  },
  {
    number: "5",
    title: "Quality Check & Final Handover",
    image: qualitycheck, // High-end interior shot of a finished space (e.g., luxury office lobby). A site supervisor (navy shirt) shakes hands with a smiling client. Everything is pristine.
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-[#fff7ed] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a2332]">
            Our Process
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4 text-orange-600 font-medium text-lg border-b-2 border-orange-200 pb-4 max-w-md mx-auto">
            <span>Simple</span>
            <span className="text-gray-300">|</span>
            <span>Transparent</span>
            <span className="text-gray-300">|</span>
            <span>Efficient</span>
          </div>
          <p className="text-gray-600 mt-6 leading-relaxed">
            Our streamlined approach makes us a preferred civil contractor in
            Mumbai for hassle-free construction. Here’s how we bring your project
            to life, step-by-step.
          </p>
        </div>

        {/* Process Steps: Modern Timeline Layout */}
        <div className="space-y-12 relative">
          
          {/* Vertical connection line (for large screens) */}
          <div className="absolute left-[33px] top-10 bottom-10 w-0.5 bg-orange-100 hidden md:block"></div>

          {processSteps.map((step, index) => (
            <div
              key={index}
              className="grid md:grid-cols-[66px_1fr_300px] gap-6 items-start md:items-center relative z-10 group"
            >
              {/* Number Circle (The Anchor) */}
              <div className="relative">
                <div className="w-[66px] h-[66px] flex items-center justify-center bg-orange-500 text-white font-black text-2xl rounded-full shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
              </div>

              {/* Content Card (Text) */}
              <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-[#1a2332] leading-snug">
                  {step.title}
                </h3>
              </div>

              {/* Image Card: Visual match for the content */}
              <div className="md:h-[180px] w-full rounded-3xl overflow-hidden shadow-xl border-4 border-white group-hover:border-orange-100 transition-colors">
                <img
                  src={step.image}
                  alt={`Visualization for step ${step.number}: ${step.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  // I suggest requesting images with an aspect ratio of 3:2 for this layout.
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}