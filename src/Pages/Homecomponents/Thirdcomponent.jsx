import React from 'react';
import doctor from '../../assets/doctor.png';

const Thirdcomponent = () => {
  return (
    <>
      <div className='w-[100%] py-10'>
        <div className='flex flex-col md:flex-row mx-auto w-[100%] justify-center items-center'>
          <div
            className='w-[100%] md:w-[50%] flex flex-col justify-center items-center p-10'
            data-aos="fade-right"
          >
            <div className='w-full border-l-[10px] border-blue-500 bg-gradient-to-r from-pink-300 to-white p-10 rounded-xl md:rounded-[20%]'>
              <h2 className='text-2xl md:text-4xl font-bold mb-5 leading-normal'>
                Hello, Don't worry. Let me take you through your <span className='text-blue-500'>Hair Regrowth Journey!</span>
              </h2>
              <button className='text-lg font-semibold bg-blue-500 shadow-md shadow-gray-700 px-8 py-3 rounded-xl text-white transform hover:-translate-y-2 transition-all'>
                Book Now
              </button>
            </div>
          </div>
          <div
            className='w-[100%] md:w-[40%] flex justify-center items-center'
            data-aos="fade-left"
          >
             <img className='w-[300px] h-[300px] md:w-[500px] md:h-[500px] object-cover animate-shake' src={doctor} alt="Doctor" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Thirdcomponent;
