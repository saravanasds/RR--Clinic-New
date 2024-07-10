import React from "react";
import consult from "../../assets/consult.jpg";
import eyebrow from "../../assets/eyebrow.jpg";
import cosmic from "../../assets/cosmic.jpg";
import eyelash from "../../assets/eyelash.jpg";
import laser from "../../assets/laser.jpg";
import scalp from "../../assets/scalp.jpg";
import fue from "../../assets/fue.jpg";

const treatments = [
  { src: eyebrow, alt: "Eyebrow Transplant", label: "Eyebrow Transplant" },
  { src: cosmic, alt: "Cosmic Hair Transplantation", label: "Cosmic Hair Transplantation" },
  { src: eyelash, alt: "Eyelash Lift and Extension", label: "Eyelash Lift and Extension" },
  { src: scalp, alt: "Scalp Micropigmentation", label: "Scalp Micropigmentation" },
  { src: laser, alt: "Oxygen Laser Therapy", label: "Oxygen Laser Therapy" },
  { src: fue, alt: "Percutaneous FUE", label: "Percutaneous FUE" },
];

const Fourthcomponent = () => {
  return (
    <div className="pt-[70px]">
      <div
        className="flex flex-col md:flex-row justify-end items-start pt-[150px] w-[100%] h-screen"
        style={{
          backgroundImage: `url(${consult})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-[80%] md:w-[40%] mx-auto py-5 flex flex-col justify-end items-end gap-5 md:mr-5">
          <h2
            className="text-3xl md:text-5xl font-bold text-gray-700 leading-tight"
            style={{ textShadow: "2px 2px 0px rgba(255,255,255,0.9)" }}
          >
            <span className="text-pink-700">"Book </span>Your Free Consultation Now and
          </h2>
          <h2
            className="text-3xl md:text-5xl font-bold text-gray-700 leading-tight"
            style={{ textShadow: "2px 2px 0px rgba(255,255,255,0.9)" }}
          >
            Get Ready to <span className="text-pink-700">Rediscover </span>Confidence!"
          </h2>
        </div>
      </div>

      <div className="w-[100%] pt-[100px]">
        <h2 className="text-3xl md:text-5xl text-center font-bold uppercase">Treatments</h2>
        {/* <div className="flex justify-center bg-black items-center py-10">
          
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className="relative w-full md:w-[400px] h-[300px] shadow-sm shadow-black flex justify-center items-center bg-blue-300 font-medium text-lg overflow-hidden rounded-lg"
                data-aos="fade-up"
              >
                <img
                  className="absolute w-full h-full object-cover object-center"
                  src={treatment.src}
                  alt={treatment.alt}
                />
                <div className="absolute w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.6)] opacity-100 md:opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="text-white text-xl z-10">{treatment.label}</h2>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Fourthcomponent;
