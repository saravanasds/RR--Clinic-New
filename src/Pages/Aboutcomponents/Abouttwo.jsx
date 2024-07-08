import React from 'react'

const Secondcomponent = () => {
  return (
    <>
    <div className='w-[100%] py-20 '>
        <h2 className=' text-4xl text-center font-semibold mb-20'>Why Customers Choose Us</h2>
        <div className='flex justify-center items-center '>
        <div className='grid grid-cols-6 gap-3 px-10'>
            <div className='w-[200px] h-[200px] bg-blue-500 hover:bg-blue-400 transform hover:-translate-y-10 transition-all flex justify-center items-center text-white font-medium text-lg'>
                <h2>Qualified Doctors</h2>
            </div>
            <div className='w-[200px] h-[200px]  bg-blue-500  hover:bg-blue-400 transform hover:-translate-y-10 transition-all flex justify-center items-center  text-white font-medium text-lg'>
                <h2>Success Rate</h2>
            </div>
            <div className='w-[200px] h-[200px]  bg-blue-500  hover:bg-blue-400 transform hover:-translate-y-10 transition-all flex justify-center items-center  text-white font-medium text-lg'>
                <h2>Advanced Tech</h2>
            </div>
            <div className='w-[200px] h-[200px]  bg-blue-500  hover:bg-blue-400 transform hover:-translate-y-10 transition-all flex justify-center items-center  text-white font-medium text-lg'>
                <h2>Infrastructure</h2>
            </div>
            <div className='w-[200px] h-[200px]  bg-blue-500  hover:bg-blue-400 transform hover:-translate-y-10 transition-all flex justify-center items-center  text-white font-medium text-lg'>
                <h2>Affordable</h2>
            </div>
            <div className='w-[200px] h-[200px] bg-blue-500 hover:bg-blue-400 transform hover:-translate-y-10 transition-all flex justify-center items-center  text-white font-medium text-lg'>
                <h2>Happy Clients</h2>
            </div>
        </div>
        </div>
     
    </div>

    </>
  )
}

export default Secondcomponent
