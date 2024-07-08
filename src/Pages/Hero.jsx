import React from 'react'
import hairtrans from "../assets/hairtrans.jpg"

const Hero = () => {
  return (
   <>
   <div className='w-[100%] h-screen flex justify-center items-center mt-1' style={{backgroundImage: `url(${hairtrans})`, backgroundPosition:'center', backgroundSize:'cover',textShadow:'4px 6px  rgba(0,0,0)'}}>
      <h2 className='h-[40vh] text-7xl font-bold text-white '>Hair and Skin Clinic</h2>
   </div>
   </>
  )
}

export default Hero