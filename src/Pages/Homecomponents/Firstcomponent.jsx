import React from "react";
import doctor from "../../assets/doctor.png";

import { IoIosPeople } from "react-icons/io";
import { BsCrosshair2 } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";


const Firstcomponent = () => {
  return (
    <>
    <div className="w-[100%] h-auto " data-aos="fade-up" onDurationChange={300}>
    <div className=" w-[90%] h-[250px] box px-10  bg-white mx-auto flex justify-center items-center gap-20 shadow-md shadow-black -translate-y-[40%] rounded-lg">
        <div className=" w-[100%] h-[200px] grid grid-cols-3  bg-gradient-to-r from-[#fdb0ca] to-pink-200 rounded-lg">
          <div className="box1  flex flex-col justify-center items-center font-sen text-bold gap-2 border-r-2 border-white">
            <IoIosPeople className="text-red-500  font-bold text-8xl" />
            <h2 className="text-gray-900 font-bold text-2xl">100+</h2>
            <p className="text-red-500 font-semibold text-xl tracking-wider ">
              Customers
            </p>
          </div>

          <div className="box2 flex flex-col justify-center items-center font-sen text-bold gap-2 border-r-2 border-white">
            <BsCrosshair2 className="text-green-500  font-bold text-7xl mb-3" />
            <h2 className="text-gray-900  font-bold text-2xl">100+</h2>
            <p className="text-green-500  font-semibold text-xl tracking-wider ">
              Treatments
            </p>
          </div>

          <div className="box3 flex flex-col justify-center items-center font-sen text-bold gap-2">
            <FaUserDoctor className="text-blue-500 font-bold text-7xl mb-3" />
            <h2 className="text-gray-900 font-bold text-2xl">50+</h2>
            <p className=" text-blue-500  font-semibold text-xl tracking-wider ">
              Experienced doctors
            </p>
          </div>
        </div>
      </div>
    <div className="w-[100%] h-screen ">
    <h2
          className="text-center text-4xl font-bold  uppercase mb-20 "
          data-aos="fade-up"
        >
          Feeling <span className="text-pink-600">utterly hopeless</span> about
          your hair?
        </h2>

        <div className="w-[100%] h-[500px] mx-auto flex justify-center items-center md:flex-row text-pink-400 py-20">
          <div
            className="w-[50%] h-[500px] md:w-[50%] flex  justify-center items-center "
            data-aos="fade-right"
          >
            <div className="w-[70%]  lg:min-h-[500px] flex flex-col justify-center items-center text-gray-900 ">
              <h2 className="text-[29px] font-medium mb-5 tracking-wider">
                Hair regrowth Solutions?
              </h2>
              <h3 className="lg:text-[57px] font-bold uppercase mb-5 ">
                We got it All
              </h3>
              <h2 className='text-2xl md:text-2xl font-md mb-5 leading-normal tracking-wider'>
                Hello, Don't worry. Let me take you through your <span className='text-pink-600'>Hair Regrowth Journey!</span>
              </h2>
              <h2 className='text-2xl md:text-lg font-md mb-5 leading-normal tracking-wider'>
              We believe that every patient is unique, and so is their hair journey. Our approach is rooted in a commitment to individualized care, understand your specific needs and goals.
              </h2>
              
            </div>
          </div>
          <div
            className="w-[50%] h-auto flex  justify-center items-center lg:min-h-[500px] md:w-[50%] bg-top bg-cover "
            data-aos="fade-left"
          >
            <img
              className="w-[500px] h-[500px] "
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

// {/* <div className=' sqrmain flex w-[100%] h-screen  justify-center items-center  bg-[rgb(248,249,250)]'>
      
//       <div className='square w-[80%]  grid grid-cols-3 justify-center gap-10 pt-20'>
//       <div className='sqr1 w-[350px] h-[250px] text-base bg-[rgb(251,251,251)] flex flex-col justify-center items-center px-7 leading-relaxed'>
        
//         <h2 className='py-3 font-bold text-xl mb-3 text-[rgb(40,56,71)]'></h2>
//         <p className='font-san text-[rgb(133,133,133)] text-center'></p>
//       </div>
//       <div className='sqr2 w-[350px] h-[250px] bg-[rgb(251,251,251)]  flex flex-col justify-center items-center  px-7 leading-relaxed'>
     
//         <h2 className='py-3 font-bold text-xl mb-3 text-[rgb(40,56,71)]'></h2>
//         <p className='font-san text-[rgb(133,133,133)] text-center'></p>
//       </div>
//       <div className='sqr3 w-[350px] h-[250px] bg-[rgb(251,251,251)]  flex flex-col justify-center items-center px-7 leading-relaxed'>
       
//         <h2 className='py-3 font-bold text-xl mb-3 text-[rgb(40,56,71)]'></h2>
//         <p className='font-san text-[rgb(133,133,133)] text-center'></p>
//       </div>
//       </div>
  // </div>} */}