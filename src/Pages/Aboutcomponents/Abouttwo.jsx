import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineCorporateFare } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { PiTreeStructure } from "react-icons/pi";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaPeopleRobbery } from "react-icons/fa6";

const Secondcomponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <div className='w-full h-auto mx-auto py-10 md:py-20'>
        <h2 className='text-3xl md:text-4xl text-center font-bold text-gray-200 mb-10 md:mb-20 tracking-wider' data-aos="fade-up">
          Why Customers Choose Us?
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8 px-4 md:px-10 lg:px-16 py-5 bg-gradient-to-r from-[rgb(234,250,243)] to-white'>
          <div className='w-full h-auto bg-white transform transition-all flex flex-col justify-center items-center text-blue-500 rounded-lg border p-5 hover:shadow-2xl hover:scale-105' data-aos="fade-up">
            <FaUserDoctor className="text-6xl md:text-8xl mb-5 animate-bounce" />
            <h2 className='mb-3 md:mb-5 font-bold text-lg md:text-xl'>Qualified Doctors</h2>
            <p className='text-sm md:text-[16px] text-gray-500 text-center font-medium'>
              (Highly experienced trichologists and dermatologists)
            </p>
          </div>

          <div className='w-full h-auto bg-[rgb(144,252,246)] transform transition-all flex flex-col justify-center items-center text-red-500 rounded-lg border p-5 hover:shadow-2xl hover:scale-105' data-aos="fade-up" data-aos-delay="100">
            <MdOutlineCorporateFare className='text-6xl md:text-8xl mb-5 animate-bounce' />
            <h2 className='mb-3 md:mb-5 font-bold text-lg md:text-xl'>Success Rate</h2>
            <p className='text-sm md:text-[16px] text-gray-500 text-center font-medium'>
              (Proven results with numerous satisfied customers)
            </p>
          </div>

          <div className='w-full h-auto bg-white transform transition-all flex flex-col justify-center items-center text-yellow-500 rounded-lg border p-5 hover:shadow-2xl hover:scale-105' data-aos="fade-up" data-aos-delay="200">
            <GrTechnology className='text-6xl md:text-8xl mb-5 animate-bounce' />
            <h2 className='mb-3 md:mb-5 font-bold text-lg md:text-xl'>Advanced Tech</h2>
            <p className='text-sm md:text-[16px] text-gray-500 text-center font-medium'>
              (Use of the latest equipment and advanced techniques in hair restoration)
            </p>
          </div>

          <div className='w-full h-auto bg-[rgb(244,245,224)] transform transition-all flex flex-col justify-center items-center text-teal-500 rounded-lg border p-5 hover:shadow-2xl hover:scale-105' data-aos="fade-up" data-aos-delay="300">
            <PiTreeStructure className='text-6xl md:text-8xl mb-5 animate-bounce' />
            <h2 className='mb-3 md:mb-5 font-bold text-lg md:text-xl'>Infrastructure</h2>
            <p className='text-sm md:text-[16px] text-gray-500 text-center font-medium'>
              (Recognition and certification from reputable industry bodies)
            </p>
          </div>

          <div className='w-full h-auto bg-white transform transition-all flex flex-col justify-center items-center text-green-500 rounded-lg border p-5 hover:shadow-2xl hover:scale-105' data-aos="fade-up" data-aos-delay="400">
            <GiTakeMyMoney className='text-6xl md:text-8xl mb-5 animate-bounce' />
            <h2 className='mb-3 md:mb-5 font-bold text-lg md:text-xl'>Affordable</h2> 
            <p className='text-sm md:text-[16px] text-gray-500 text-center font-medium'>
              (Clear, upfront pricing with no hidden costs)
            </p>
          </div>

          <div className='w-full h-auto bg-[rgb(230,246,228)] transform transition-all flex flex-col justify-center items-center text-pink-500 rounded-lg border p-5 hover:shadow-2xl hover:scale-105' data-aos="fade-up" data-aos-delay="500">
            <FaPeopleRobbery className='text-6xl md:text-8xl mb-5 animate-bounce' />
            <h2 className='mb-3 md:mb-5 font-bold text-lg md:text-xl'>Happy Clients</h2>
            <p className='text-sm md:text-[16px] text-gray-500 text-center font-medium'>
              (High number of referrals from satisfied customers)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Secondcomponent;
