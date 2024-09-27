import React from 'react';
import clinicbg from '../../assets/clinicbg.jpg';

const Thirdcomponent = () => {
  return (
    <div className='w-full lg:h-[80vh] h-screen relative'>
      <div
        className='w-full h-full bg-cover bg-center bg-fixed'
        style={{ backgroundImage: `url(${clinicbg})`, backgroundAttachment: 'fixed' }}
      >
        <div className='flex flex-col gap-3 items-center justify-center w-full h-full absolute top-0 left-0'>
          <div className='flex flex-col justify-evenly text-center text-white p-4 bg-black bg-opacity-40 rounded-lg lg:w-[50%] lg:h-[35%] ' data-aos="fade-right">
            <h1 className='text-2xl sm:text-4xl font-bold font-nunito text-yellow-500 mb-4'>Welcome to Our Clinic</h1>
            <p className='text-xl'>Providing the best care for your health and well-being.</p>
          </div>
          {/*  */}
          <div className='flex flex-col justify-evenly text-center text-white p-4 bg-gray-500 bg-opacity-60 rounded-tl-3xl rounded-br-3xl lg:w-[40%] lg:h-[25%] ' data-aos="fade-left">
            <h1 className='text-2xl sm:text-4xl font-bold font-nunito text-yellow-500 m-3'>Confidence Renewed</h1>
            {/* <p className='text-xl'>Providing the best care for your health and well-being.</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thirdcomponent;
