import React from 'react'
import scalpig from "../../assets/scalpig.jpeg"
import doctor1 from "../../assets/doctor1.jpeg"
import docs from "../../assets/docs.jpeg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Transformation = () => {
  const settings = {
   
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    

  };
  return (
    <>
    <div className='w-3/4 m-auto mb-20 '>
      <div className='mt-20'>
      <Slider {...settings}>
        {data.map((m) =>(

        <div className='w-[100%] h-[500px] '>
          <div className='bg-indigo-500  flex justify-center items-center rounded-t-2xl'>
          <img src={m.img} alt="" className='w-[400px] h-[300px] rounded-full p-5' />
          </div>
         <div className='text-center bg-indigo-400 text-white p-5'>
         <h2 className='font-semibold text-lg '>{m.h}</h2>
         <p className='py-4'>{m.p}</p>
         <button className='bg-indigo-800 px-6 py-1 font-medium text-lg rounded-2xl'>View Me</button>
         </div>
        
        </div>

        ))}
      </Slider>
 
      
      </div>
    </div>
  

    </>
  )
}

export default Transformation

const data = [
  {
    img : scalpig,
    h : "Scalp",
    p : "If you want to run the app in development mode, you can run npm start to build the file in"
  } , 
  {
    img : doctor1,
    h : "Doctor",
    p : "If you want to run the app in development mode, you can run npm start to build the file in"
  } , 
  {
    img : docs,
    h : "Doctorss",
    p : "If you want to run the app in development mode, you can run npm start to build the file in"
  }  
 

]