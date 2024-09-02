import React from 'react';
import clinicbg from '../../assets/clinicbg.jpg';

const Thirdcomponent = () => {
  return (
    <div className='w-full h-screen relative'>
      <div
        className='w-full h-full bg-cover bg-center bg-fixed'
        style={{ backgroundImage: `url(${clinicbg})`, backgroundAttachment: 'fixed' }}
      >
        <div className='flex items-center justify-center w-full h-full absolute top-0 left-0'>
          <div className='text-center text-white p-4 bg-black bg-opacity-50 rounded-lg'>
            <h1 className='text-4xl font-bold font-nunito text-black mb-4'>Welcome to Our Clinic</h1>
            <p className='text-xl'>Providing the best care for your health and well-being.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thirdcomponent;
