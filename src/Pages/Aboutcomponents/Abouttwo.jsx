import React from 'react'
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineCorporateFare } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { PiTreeStructure } from "react-icons/pi";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaPeopleRobbery } from "react-icons/fa6";

const Secondcomponent = () => {
  return (
    <>
    <div className='w-[100%] h-auto mx-auto py-20'>
        <h2 className=' text-4xl text-center font-bold text-gray-700 mb-20 tracking-wider'>Why Customers Choose Us ?</h2>
        {/* <div className='flex justify-center items-center '> */}
        <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 lg:p-16 bg-gradient-to-r from-[rgb(234,250,243)] to-white '>
            <div className='w-[400px] h-[300px] bg-white  transform  transition-all flex flex-col  justify-center items-center text-blue-500  rounded border-[1px] p-5' >
            <FaUserDoctor className="text-8xl mb-5 animate-bounce" />
                <h2 className='mb-5 font-bold text-xl'>Qualified Doctors</h2>
                <p className='text-[16px] text-gray-500 text-center font-medium'>(Highly and experienced trichologists and dermatologists)</p>
            </div>
            <div className='w-[400px] h-[300px]   bg-[rgb(144,252,246)] transform  transition-all flex flex-col justify-center items-center  text-red-500  rounded border-[1px] p-5' >
                <MdOutlineCorporateFare className='text-8xl mb-5 animate-bounce'/>
                <h2 className='mb-5 font-bold text-xl'>Success Rate</h2>
                <p className='text-[16px] text-gray-500 text-center font-medium'>(Proven results with numerous satisfied customers)</p>
            </div>
            <div className='w-[400px] h-[300px] transform transition-all flex flex-col justify-center items-center  text-yellow-500 rounded border-[1px]  p-5' >
                <GrTechnology className='text-8xl mb-5 animate-bounce'/>
                <h2 className='mb-5 font-bold text-xl'>Advanced Tech</h2>
                <p className='text-[16px] text-gray-500 text-center font-medium'>(Use of the latest equipment and advanced techniques in hair restoration)</p>
            </div>
            <div className='w-[400px] h-[300px] bg-[rgb(244,245,224)] transform  transition-all flex flex-col  justify-center items-center  text-teal-500 rounded border-[1px]  p-5' >
                < PiTreeStructure className='text-8xl mb-5 animate-bounce'/>
                <h2 className='mb-5 font-bold text-xl'>Infrastructure</h2>
                <p className='text-[16px] text-gray-500 text-center font-medium'>(Recognition and certification from reputable industry bodies)</p>
            </div>
            <div className='w-[400px] h-[300px] transform  transition-all flex flex-col  justify-center items-center text-green-500 rounded border-[1px]  p-5'  >
                <GiTakeMyMoney className='text-8xl mb-5 animate-bounce'/>
                <h2 className='mb-5 font-bold text-xl'>Affordable</h2> 
                <p className='text-[16px] text-gray-500 text-center font-medium'>(Clear, upfront pricing with no hidden costs)</p>
            </div>
            <div className='w-[400px] h-[300px] bg-[rgb(230,246,228)]  transform  transition-all flex flex-col justify-center items-center  text-pink-500  rounded border-[1px]  p-5' >
                <FaPeopleRobbery className='text-8xl mb-5 animate-bounce'/>
                <h2 className='mb-5 font-bold text-xl'>Happy Clients</h2>
                <p className='text-[16px] text-gray-500 text-center font-medium'>(High number of referrals from satisfied customers)</p>
            </div>
        </div>
        </div>
     
    {/* </div> */}

    </>
  )
}

export default Secondcomponent

// style={{ boxShadow: "inset 2px 2px 2px rgba(0, 0, 0, 0.2), inset -2px -2px 2px rgba(0, 0, 0, 0.2), inset 2px -2px 2px rgba(0, 0, 0, 0.2), inset -2px 2px 2px rgba(0, 0, 0, 0.2)"}}