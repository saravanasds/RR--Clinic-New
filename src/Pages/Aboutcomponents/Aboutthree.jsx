import React, { useEffect } from "react";
import bgline from "../../assets/bgline.jpg";
import clinic from "../../assets/clinic.jpg";
import "aos/dist/aos.css";
import AOS from "aos";

const Aboutthree = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Animation only happens once on scroll
    });
  }, []);

  return (
    <div className="relative h-auto">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 blur-[2px]"
        style={{
          backgroundImage: `url(${bgline})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full">
        {/* Image Section */}
        <div
          className="w-full md:w-1/2 h-[400px] md:h-[600px] rounded-full overflow-hidden shadow-lg"
          data-aos="fade-right"
        >
          <img className="w-full h-full object-cover" src={clinic} alt="clinic" />
        </div>

        {/* Text Section */}
        <div
          className="w-full md:w-1/2 h-[600px] p-8 md:p-12 flex flex-col justify-center items-center bg-gradient-to-l from-blue-100 to-blue-500 text-white"
          data-aos="fade-left"
        >
          <h3 className="text-4xl font-semibold mb-5">What we do</h3>
          <p className="text-xl leading-relaxed text-gray-900 text-center">
            With FDA approved treatments, Advanced Grohair Clinic provides advanced therapies to patients which include LASER therapy for hair restoration, Microblading for eyebrows, Eyelash extensions, Scalp micro pigmentation, Lip permanent pigmentation, Eyebrow tint and lash lamination, & much more. Our experienced professionals and experts recommend you the best treatment that matches your needs and assist you in achieving the desired results that you have always longed for.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutthree;
