import React from 'react'
import docvision from "../../assets/docvision.jpg";
import docmission from "../../assets/docmission.jpg";


const AboutFour = () => {
  return (
   <>
   <div className="w-[100%] h-auto p-10 mx-auto ">
    <div className="w-[100%] h-[300px]  mb-5 bg-gradient-to-r from-blue-100 to-blue-600 flex">
        <div className='w-[50%] '> <img className='w-[400px] h-[300px] rounded-full  border-l-4 border-blue-800' src={docvision}/></div>
         <div className='w-[60%] flex flex-col justify-center items-center text-center p-3'>
            <h2 className='text-6xl mb-3 text-white  font-medium'>Vision</h2>
            <p className='text-md text-white p-3'>Our vision is to develop a highly vibrant,sustainable, and healthy community of individuals by providing state-of-the-art health and wellness services of the highest quality, backed by excellent service and rigorous customer focus.</p>
         </div>
        
     </div>
    <div className="w-[100%] h-[300px] bg-gradient-to-l from-blue-100 to-blue-600  flex">
  
         <div className='w-[60%]  flex flex-col justify-center items-center text-center p-3'>
            <h2 className='text-6xl mb-3 text-white font-medium'>Mission</h2>
            <p className='text-md text-white p-3'>To dedicate ourselves to helping our customers achieve holistic wellness from the inside out with a scientific, research-based approach with individualized programs. Our mission is to ensure that health and fitness are made accessible to all strata of society.</p>
         </div>
         <div className='w-[50%] flex flex-row justify-end items-end '> <img className='w-[400px] h-[300px] rounded-full border-r-4 border-blue-800' src={docmission}/></div>
    </div>
 
   </div>
   </>
  )
}

export default AboutFour