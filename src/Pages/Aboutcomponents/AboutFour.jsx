import React, { useEffect } from 'react';
import docvision from '../../assets/docvision.jpg';
import docmission from '../../assets/docmission.jpg';
import 'aos/dist/aos.css';
import AOS from 'aos';

const AboutFour = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Animation only happens once on scroll
    });
  }, []);

  return (
    <>
      <div className="w-[100%] h-auto p-10 mx-auto flex flex-col justify-center items-center bg-[rgba(249,248,249)] py-20">
        {/* Vision Section */}
        <div
          className="w-full md:w-[90%]   h-[350px] flex flex-col md:flex-row mb-10"
          data-aos="fade-up duration-300"
        >
          <div className="w-full md:w-[50%] flex justify-center items-center">
            <img
              className="w-[400px] h-[350px] md:w-[400px] md:h-[300px] rounded-full border-l-4 border-pink-300"
              src={docvision}
              alt="Vision"
            />
          </div>
          <div className="w-full md:w-[50%] flex flex-col justify-center items-center text-center p-3">
            <h2 className="text-6xl mb-3 text-gray-900 font-medium tracking-wider">Vision</h2>
            <p className="text-md text-black p-3 tracking-wider leading-relaxed">
              Our vision is to develop a highly vibrant, sustainable, and healthy community of individuals by providing
              state-of-the-art health and wellness services of the highest quality, backed by excellent service and
              rigorous customer focus.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div
          className="w-full md:w-[90%] md:h-[350px] h-auto  flex flex-col md:flex-row"
          data-aos="fade-up duration-300"
        >
          <div className="w-full md:w-[50%] flex flex-col justify-center items-center text-center p-3">
            <h2 className="text-6xl mb-3 text-gray-900 font-medium tracking-wider">Mission</h2>
            <p className="text-md text-black p-3 tracking-wider leading-relaxed">
              To dedicate ourselves to helping our customers achieve holistic wellness from the inside out with a
              scientific, research-based approach with individualized programs. Our mission is to ensure that health
              and fitness are made accessible to all strata of society.
            </p>
          </div>
          <div className="w-full md:w-[50%] flex justify-center items-center">
            <img
              className="w-[400px] h-[300px] md:w-[400px] md:h-[300px] rounded-full border-r-4 border-pink-300 "
              src={docmission}
              alt="Mission"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutFour;
