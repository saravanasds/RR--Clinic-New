import React from 'react';
import consult from "../../assets/pink.png";

const Consult = () => {
  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-center bg-blue-200 md:justify-end items-start md:pt-[150px] w-full h-[70vh] bg-cover bg-left md:bg-center"
        style={{
          backgroundImage: `url(${consult})`,
        }}
      >
        <div className="w-full md:w-[40%] px-10 flex flex-col justify-center md:justify-end items-center md:items-end gap-5 mr-5">
          <h2
            className="text-[40px] font-bold text-gray-700 leading-tight"
            style={{ textShadow: "2px 2px 0px rgba(255,255,255,0.9)" }}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <span className="text-yellow-600 font-cursive">"Book </span>Your Free Consultation Now
          </h2>
          <p
            className='text-gray-700 text-2xl font-bold w-[70%]'
            style={{ textShadow: "2px 2px 0px rgba(255,255,255,0.9)" }}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            &  
          </p>
          <h2
            className="text-[40px] font-bold text-gray-700 leading-tight"
            style={{ textShadow: "2px 2px 0px rgba(255,255,255,0.9)" }}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
          >
            Get Ready to <span className="text-yellow-600 font-cursive">Rediscover </span>Your Confidence!"
          </h2>
        </div>
        
      </div>

      {/*  */}

      <div className="h-[30vh] bg-blue-200 flex justify-center items-center">
        <div className="max-w-3xl text-center text-black">
          <blockquote className="italic text-lg md:text-2xl">
            "Your journey to beautiful hair and healthy skin begins here."
          </blockquote>
        </div>
      </div>
    </>
  );
}

export default Consult;
