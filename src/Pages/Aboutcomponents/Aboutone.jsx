import React from "react";
import wave from "../../assets/wave.jpg";
import doctors from "../../assets/doctors.png";
import "aos/dist/aos.css";
import AOS from "aos";

const Fifthcomponent = () => {
  // Initialize AOS
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Animation only happens once on scroll
    });
  }, []);

  return (
    <>
      <div className="relative h-auto">
        <div
          className="absolute -z-10 w-full h-full p-5 flex justify-center items-center blur-[2px]"
          style={{
            backgroundImage: `url(${wave})`,
            backgroundPosition: "start",
            backgroundSize: "cover",
          }}
        ></div>

        <div className="w-full bg-opacity-50 bg-black py-10">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center">
            <div
              className="w-full md:w-[50%] flex flex-col justify-center items-center px-6 md:px-12 lg:px-20"
              data-aos="fade-right"
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight text-blue-500" style={{ textShadow: '2px 2px 0px rgba(0,0,0)' }}>
                <span className="text-pink-600">Rediscover</span> Your Best Hair Today
              </h2>
              <p className="text-lg md:text-xl leading-relaxed font-semibold text-center md:text-left">
                We believe that every patient is unique, and so is their hair journey. Our approach is rooted in a commitment to individualized care, understand your specific needs and goals.
              </p>
            </div>
            <div
              className="relative w-full md:w-[50%] h-auto md:h-[600px] rounded-lg overflow-hidden"
              data-aos="fade-left"
            >
              <img className="w-full h-full object-cover object-center" src={doctors} alt="Doctors" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fifthcomponent;
