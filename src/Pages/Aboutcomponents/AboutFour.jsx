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
      <div className="w-full h-auto p-10 mx-auto">
        {/* Vision Section */}
        <div
          className="w-full md:w-[100%] h-[300px] mb-5 bg-gradient-to-r from-blue-100 to-blue-600 flex flex-col md:flex-row"
          data-aos="fade-up"
        >
          <div className="w-full md:w-[50%] flex justify-center items-center">
            <img
              className="w-[300px] h-[300px] md:w-[400px] md:h-[300px] rounded-full border-l-4 border-blue-800"
              src={docvision}
              alt="Vision"
            />
          </div>
          <div className="w-full md:w-[50%] flex flex-col justify-center items-center text-center p-3">
            <h2 className="text-6xl mb-3 text-white font-medium">Vision</h2>
            <p className="text-md text-white p-3">
              Our vision is to develop a highly vibrant, sustainable, and healthy community of individuals by providing
              state-of-the-art health and wellness services of the highest quality, backed by excellent service and
              rigorous customer focus.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div
          className="w-full md:w-[100%] md:h-[300px] h-auto bg-gradient-to-l from-blue-100 to-blue-600 flex flex-col md:flex-row"
          data-aos="fade-up"
        >
          <div className="w-full md:w-[50%] flex flex-col justify-center items-center text-center p-3">
            <h2 className="text-6xl mb-3 text-white font-medium">Mission</h2>
            <p className="text-md text-white p-3">
              To dedicate ourselves to helping our customers achieve holistic wellness from the inside out with a
              scientific, research-based approach with individualized programs. Our mission is to ensure that health
              and fitness are made accessible to all strata of society.
            </p>
          </div>
          <div className="w-full md:w-[50%] flex justify-center items-center">
            <img
              className="w-[300px] h-[300px] md:w-[400px] md:h-[300px] rounded-full border-r-4 border-blue-800"
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
