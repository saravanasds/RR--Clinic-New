import React, { useEffect } from "react";
import bgline from "../../assets/bgline.jpg";
import clinic from "../../assets/docs.jpeg";

import { FiArrowRightCircle } from "react-icons/fi";
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
    <div className="w-[100%] h-auto pb-20">
  
      {/* <div
        className="absolute inset-0 z-0 blur-[2px]"
        style={{
          // backgroundImage: `url(${bgline})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
      ></div> */}

      
      {/* <div className="w-[100%] relative z-10 flex flex-col lg:flex-col md:flex-row items-center justify-center h-full"> */}
      
        <div
          className="w-[100%]  h-[400px] md:h-[600px]  overflow-hidden "
        
        >
          <img className="w-[100%] h-full object-cover"
              style={{ backgroundImage: `url(${clinic})`,backgroundSize:"top",backgroundPosition:"center" }} src={clinic} alt="clinic" />
        </div>

      

        <div
          className="w-[90%]  h-[500px]  grid grid-col-1 items-center pt-10 gap-3 pl-10"
          data-aos="fade-top"
        >
           <h3 className="text-4xl  p-5 font-semibold mb-5 text-gray-700 bg-gradient-to-r from-[rgb(234,250,243)] to-white ">What we do</h3> 

           <div className="w-[100%] flex justify-center items-center text-2xl text-gray-900 border-[1px] hover:translate-x-10 hover:bg-[#f56ca7] hover:text-white  transition-all duration-300 mb-5">
            < FiArrowRightCircle className=" w-[10%] text-3xl text-pink-500"/>
           <p className="w-[90%] text-lg leading-relaxed  p-3 tracking-wider"> With FDA approved treatments, Advanced Grohair Clinic provides advanced therapies to patients which include LASER therapy for hair restoration</p>
           </div>

           <div className="flex justify-center items-center text-2xl text-gray-900 border-[1px] hover:translate-x-10 hover:bg-[#f56ca7] hover:text-white transition-all duration-300 mb-5">
           < FiArrowRightCircle className=" w-[10%] text-3xl text-pink-500"/>
          <p className="w-[90%]  text-lg leading-relaxed p-3 tracking-wider">  Microblading for eyebrows, Eyelash extensions, Scalp micro pigmentation, Lip permanent pigmentation, Eyebrow tint and lash lamination, & much more. </p>
          </div>

          <div className="flex justify-center items-center text-2xl text-gray-900   border-[1px] hover:translate-x-10 hover:bg-[#f56ca7] hover:text-white transition-all duration-300 ">
          < FiArrowRightCircle className=" w-[10%] text-3xl text-pink-500"/>
           <p className="w-[90%] text-lg leading-relaxed  p-3 tracking-wider">  Our experienced professionals and experts recommend you the best treatment that matches your needs and assist you in achieving the desired results that you have always longed for.</p>
           </div>
           
        
          </div>
        </div>
      // </div>
  
  );
};

export default Aboutthree;
