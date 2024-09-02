import React, { useState } from "react";

import eyebrow from "../../assets/eyebro.jpg";
import cosmic from "../../assets/hair.jpg";
import eyelash from "../../assets/eyelashh.jpg";
import laser from "../../assets/laser1.jpeg";
import scalp from "../../assets/scalpig.jpeg";
import fue from "../../assets/fue1.jpeg";

const treatments = [
  { id: 1, src: eyebrow, alt: "eyebrow", title: "Eyebrow Transplant", description: "A specialized procedure to enhance and reshape eyebrows." },
  { id: 2, src: cosmic, alt: "cosmic", title: "Cosmic Hair Transplantation", description: "Advanced hair restoration techniques for natural-looking results." },
  { id: 3, src: eyelash, alt: "eyelash", title: "Eyelash Lift and Extension", description: "Enhance and lengthen your lashes with our expert treatments." },
  { id: 4, src: scalp, alt: "scalp", title: "Scalp Micropigmentation", description: "Non-surgical solution for a fuller-looking scalp." },
  { id: 5, src: laser, alt: "laser", title: "Oxygen Laser Therapy", description: "Rejuvenate your skin with our advanced laser therapy." },
  { id: 6, src: fue, alt: "fue", title: "Percutaneous FUE", description: "Advanced Follicular Unit Extraction for hair restoration." }
];

const Fourthcomponent = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="w-full h-auto bg-blue-500">
      {/* Header Section */}
      <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-gradient-to-b from-pink-300 to-blue-500 mb-4 flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left p-4 md:p-8 space-y-4 md:space-y-0 md:space-x-8">
          {/* Title */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-nunito uppercase text-gray-900">
              Treatments
            </h2>
          </div>
          
          {/* Description */}
          <div className="flex flex-col items-center md:items-start">
            <p className="text-sm sm:text-base md:text-lg text-gray-700">
              Discover our wide range of treatments designed to cater to your unique needs. From advanced hair transplants to rejuvenating facial therapies, we offer cutting-edge solutions to help you achieve your desired results.
            </p>
          </div>
        </div>
      </div>

      {/* Treatments Grid Section */}
      <div className="w-full pt-0 pb-8">
  <div className="container mx-auto">
    <div
      className="grid place-items-center grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-4 p-2 sm:p-4 md:p-6 lg:p-10"
      data-aos="fade-up"
    >
      {treatments.map((treatment, index) => (
        <div
        key={treatment.id}
        className="group relative w-full h-[140px] sm:h-[180px]  md:h-[250px] lg:w-full lg:h-[300px] shadow-sm shadow-black flex justify-center items-center font-medium text-sm sm:text-lg overflow-hidden rounded-xl sm:rounded-2xl transition-all transform hover:scale-150 hover:shadow-xl "
        onMouseOver={() => setOpenIndex(index)}
        onMouseOut={() => setOpenIndex(null)}
        data-aos="fade-right"
        data-aos-duration={200 + index * 100} // Stagger animation duration
      >
          <div className="relative w-full h-full">
            <img
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={treatment.src}
              alt={treatment.alt}
            />
            <div className="absolute inset-0 flex items-center justify-center text-center p-4 bg-gradient-to-t from-black via-transparent to-transparent group-hover:hidden">
              <h2 className="text-lg sm:text-xl font-bold text-white transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0"> {/* Added opacity transition */}
                {treatment.title}
              </h2>
            </div>
          </div>
          {openIndex === index && (
            <h2 className="absolute inset-0 text-white text-xs sm:text-sm md:text-xl bg-[rgba(0,0,0,0.6)] flex justify-center items-center z-10 pointer-events-none animate-slideUp">
              {treatment.description}
            </h2>
          )}
        </div>
      ))}
    </div>
  </div>
</div>




    </div>
  );
};

export default Fourthcomponent;
