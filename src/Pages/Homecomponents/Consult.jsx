import React from 'react'
import consult from "../../assets/pink.jpeg";

const Consult = () => {
  return (
  <>
   <div
  className="flex flex-col md:flex-row justify-center md:justify-end  items-start md:pt-[150px] w-[100%] h-screen "
  style={{
    backgroundImage: `url(${consult})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  }}
>
  <div className="w-full md:w-[40%] px-10  flex flex-col justify-center md:justify-end items-center md:items-end gap-5 mr-5">
    <h2
      className="text-[40px] font-bold text-gray-700 leading-tight"
      style={{ textShadow: "2px 2px 0px rgba(255,255,255,0.9)" }}
    >
      <span className="text-pink-700">"Book </span>Your Free Consultation Now
    </h2>
    <p className='text-gray-700 text-2xl font-bold w-[70%]' style={{ textShadow: "2px 2px 0px rgba(255,255,255,0.9)" }}> &</p>
    <h2
      className="text-[40px] font-bold text-gray-700 leading-tight"
      style={{ textShadow: "2px 2px 0px rgba(255,255,255,0.9)"}}
    >
      {" "}
      Get Ready to <span className="text-pink-700">Rediscover </span>Your Confidence!" 
    </h2>

  </div>
</div>
  </>
  )
}

export default Consult