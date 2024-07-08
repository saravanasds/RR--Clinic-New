import React from 'react'
import doctor from "../../assets/doctor.png"

const Thirdcomponent = () => {
  return (
    <>
      <div className='w-[100%] py-10'>
        <div className='flex mx-auto w-[100%] '>
            <div className='w-[50%]  flex flex-col justify-center items-center p-10'>
                <div>
                <h2 className='w-[400px] text-4xl font-medium mb-5 leading-normal'>Hello,Don't worry Let me take you  through your <span className='text-blue-500'>Hair Regrowth Journey!</span> </h2>
                <button className='w-[30%] text-lg font-semibold bg-blue-500  px-3 py-2 rounded-xl text-white '>Book Now</button>
                </div>
            </div>
            <div  className='w-[50%] pl-10'>
                <img className='w-[500px] h-[500px] ' src={doctor}/>
            </div>
            </div>
      </div>
    </>
  )
}

export default Thirdcomponent