import React from 'react';
import hairtrans1 from '../../assets/hairtrans1.jpg';

const Firstcomponent = () => {
  return (
    <>
      <div className='w-[100%] h-auto py-10'>
        <h2 className='text-center text-4xl font-bold p-8 uppercase' data-aos="fade-up">
          Feeling <span className='text-pink-600'>utterly hopeless</span> about your hair?
        </h2>
        <div className='bg-slate-100'>
          <div className='flex flex-col-reverse md:flex-row mx-auto w-[100%]'>
            <div
              className='w-[100%] md:w-[50%] flex flex-col justify-center items-center p-10 mb-3'
              data-aos="fade-right"
            >
              <h2 className='text-[28px] font-semibold mb-2 tracking-wider'>Hair regrowth Solutions?</h2>
              <h3 className='text-7xl font-bold text-[#0876EA] uppercase'>We got it All..</h3>
            </div>
            <div
              className='w-[100%] md:w-[50%]'
              data-aos="fade-left"
            >
              <img className='w-[100%] h-[500px] object-cover' src={hairtrans1} alt="Hair treatment"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Firstcomponent;
