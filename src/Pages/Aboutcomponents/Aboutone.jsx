import React from "react";
import doctor1 from "../../assets/doctor1.jpeg";
import doctors from "../../assets/doctors.png";
import "aos/dist/aos.css";
import AOS from "aos";

const Fifthcomponent = () => {
  // Initialize AOS
  React.useEffect(() => {
    AOS.init({
      duration: 1200, // Slightly increased duration for a smoother animation
      easing: "ease-in-out", // Easing function for smoother transitions
      once: true, // Animation only happens once on scroll
    });
  }, []);

  return (
    <>
      <div className="relative h-auto pt-10 md:pt-20 lg:pt-28 lg:mt-14">
        <div
          className="absolute -z-10 w-full h-full p-5 flex justify-center items-center blur-[2px]"
          style={{
            backgroundImage: `url(${doctor1})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>

        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
            <div
              className="relative w-full md:w-[50%] h-auto md:h-[400px] rounded-lg overflow-hidden"
              data-aos="fade-left"
              data-aos-delay="300" // Delay before the animation starts
            >
              <img
                className="w-full h-full object-cover object-center"
                src={doctors}
                alt="Doctors"
              />
            </div>
            <div
              className="w-full md:w-[50%] h-auto md:h-[400px] flex flex-col justify-center items-center md:items-start px-6 md:px-12 space-y-5"
              data-aos="fade-right"
              data-aos-delay="500" // Delay before the animation starts
            >
              <h2
                className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-blue-500 tracking-wider text-center md:text-left"
                style={{ textShadow: "2px 2px 0px rgba(0,0,0)" }}
              >
                <span className="text-pink-600">Rediscover</span> Your Best Hair
                Today
              </h2>
              <p className="text-base md:text-lg leading-relaxed font-semibold text-center md:text-left text-gray-700">
                Our approach is rooted in a commitment to individualized care,
                understanding your specific needs and goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fifthcomponent;
