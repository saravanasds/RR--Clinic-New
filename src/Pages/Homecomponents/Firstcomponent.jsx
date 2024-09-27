import React from "react";
import doctor from "../../assets/doctor.png";

import { IoIosPeople } from "react-icons/io";
import { BsCrosshair2 } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";

const Firstcomponent = () => {
  return (
    <>
      <div className="w-full h-auto " data-aos="fade-up">
      
      <div className="w-[90%] h-auto bg-white bg-opacity-30 backdrop-blur-md border border-slate-300 mx-auto flex flex-col justify-center items-center gap-4 shadow-lg my-4 rounded-lg md:rounded-xl lg:rounded-2xl md:flex-row -translate-y-[20%] bounce-animation">
        <div className="w-full h-auto p-4 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12 max-w-max rounded-md md:rounded-lg">      
    
    <div className="flex flex-col justify-center items-center font-sen text-bold gap-2 p-4 rounded-2xl bg-gradient-to-r from-[#d764e2bd] to-[hsl(302,33%,95%)] shadow-clay-card">
      <IoIosPeople className="text-red-500 text-6xl md:text-8xl" />
      <h2 className="text-[hsl(302,20%,30%)] font-bold text-2xl">100+</h2>
      <p className="text-red-500 font-semibold text-xl tracking-wider">
        Customers
      </p>
    </div>

    <div className="flex flex-col justify-center items-center font-sen text-bold gap-2 p-4 rounded-2xl bg-gradient-to-r from-[#d764e2bd] to-[hsl(302,33%,95%)] shadow-clay-card">
      <BsCrosshair2 className="text-green-500 text-6xl md:text-8xl mb-2" />
      <h2 className="text-gray-900 font-bold text-2xl">100+</h2>
      <p className="text-green-500 font-semibold text-xl tracking-wider">
        Treatments
      </p>
    </div>

    <div className="flex flex-col justify-center items-center font-sen text-bold gap-2 p-4 rounded-2xl bg-gradient-to-r from-[#d764e2bd] to-[hsl(302,33%,95%)] shadow-clay-card hover:clay-btn">
      <FaUserDoctor className="text-blue-500 text-6xl md:text-8xl mb-2" />
      {/* <h2 className="text-gray-900 font-bold text-2xl">50+</h2> */}
      <p className="text-blue-500 font-semibold text-xl tracking-wider">
        Experienced Doctors
      </p>
    </div>

        </div>
      </div>
      
      {/*  */} 
      
      <div className="w-full h-auto py-16 font-poppins bg-white  overflow-x-hidden">
        <h2 className="text-center text-3xl md:text-4xl font-bold uppercase mb-4" data-aos="fade-up">
          Feeling <span className="text-yellow-600 font-cursive">utterly hopeless</span> about
          your hair?
        </h2>
        <h2 className="text-center text-3xl md:text-4xl font-bold uppercase mb-8 font-nunito" data-aos="fade-up">
          Renew your <span className="text-yellow-600 font-cursive">Confidence</span> with us
        </h2>

        <div className="flex flex-col-reverse md:flex-row justify-center items-center text-yellow-400 gap-8 ">
          <div
              className="w-full md:w-1/2 flex justify-center items-center "
              data-aos="fade-right"
          >
            <div className="w-11/12 lg:w-3/4 text-gray-900 space-y-4 font-nunito">
              <h2 className="text-2xl md:text-3xl font-medium tracking-wider">
                  Hair Regrowth Solutions?
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold uppercase">
                  We've Got It All
                </h3>
                <p className="text-lg md:text-xl leading-relaxed">
                  Hello, Don't worry. Let me take you through your <span className="text-yellow-600">Hair Regrowth Journey!</span>
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  We believe that every patient is unique, and so is their hair journey. Our approach is rooted in a commitment to individualized care, understanding your specific needs and goals.
                </p>
              </div>
          </div>
           
          <div
              className="w-full md:w-1/2  flex justify-center items-center "
              data-aos="fade-left"
          >
            <img
                className="w-3/4 md:w-full h-auto object-cover object-top md:h-[500px] bounce-animation"
                src={doctor}
                alt="Hair treatment"
              />
            </div>
        </div>
        </div>

      </div>
    </>
  );
};

export default Firstcomponent;
