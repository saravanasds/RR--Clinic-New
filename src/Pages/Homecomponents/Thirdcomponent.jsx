import React from 'react'
import doctor from "../../assets/doctor.png"

const Thirdcomponent = () => {
  return (
    <>
      <div className='w-[100%] py-10'>
        <div className='flex mx-auto w-[100%] justify-center items-center'>
            <div className='w-[50%]  flex flex-col justify-center items-center p-10  '>
                <div className='w-full border-l-[10px] border-blue-500 bg-gradient-to-r from-pink-300 to-white p-20  rounded-[20%] '>
                <h2 className='w-[400px] text-4xl font-bold mb-5 leading-normal'>Hello,Don't worry Let me take you  through your <span className='text-blue-500'>Hair Regrowth Journey!</span> </h2>
                <button className='w-[50%] text-lg font-semibold bg-blue-500 shadow-md shadow-gray-700 px-8 py-3  rounded-xl text-white transform hover:-translate-y-2 transition-all'>Book Now</button>
                </div>
            </div>
            <div  className='w-[40%] flex justify-center items-center'>
                <img className='w-[500px] h-[500px] ' src={doctor}/>
            </div>
            </div>
      </div>
    </>
  )
}

export default Thirdcomponent