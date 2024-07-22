import React, { useState } from "react";

import eyebrow from "../../assets/eyebro.jpg";
import cosmic from "../../assets/hair.jpg";
import eyelash from "../../assets/eyelashh.jpg";
import laser from "../../assets/laser1.jpeg";
import scalp from "../../assets/scalpig.jpeg";
import fue from "../../assets/fue1.jpeg";

const Fourthcomponent = () => {
  const [open, setOpen] = useState(false);
  // const [close, setClose] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);


  return (
    <>

     <div className="relative w-[100%] h-auto " >

       <div className='absolute w-[100%] h-[300px]  bg-gradient-to-r from-pink-300 to-pink-300 mb-0'> <h2 className="text-5xl text-center font-bold uppercase p-8  text-gray-900 text">Treatments</h2></div> 

      <div className="w-[100%] py-20 ">
       

        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 p-10 "data-aos="fade-up" onDurationChange={300}>


            <div className="relative w-[400px] h-[300px] shadow-sm shadow-black flex justify-center items-center  font-medium text-lg overflow-hidden rounded-2xl transition-all hover:scale-[1.1]"data-aos="fade-right" onDurationChange={200}>
              {open && (
                <h2
                  className={`absolute text-white text-xl bg-[rgba(0,0,0,0.6)] w-full h-full flex justify-center items-center z-10 pointer-events-none ${
                    open ? "animate-slideUp" : "animate-slideDown"
                    
                  
                    }`}
                >
                  Eyebrow Transplant
                </h2>
              )}
              <img
                className="absolute w-[400px] h-[300px] object-cover object-center"
                onMouseOver={() => setOpen(true)}
                onMouseOut={() => setOpen(false)}
                src={eyebrow}
                alt="eyebrow"
              />
            </div>

            <div className="relative w-[400px] h-[300px] shadow-sm shadow-black flex justify-center items-center   font-medium text-lg overflow-hidden rounded-2xl transition-all hover:scale-[1.1]"data-aos="fade-right" onDurationChange={300}>
              {open1 && (
                <h2
                  className={`absolute text-white text-xl bg-[rgba(0,0,0,0.6)] w-full h-full flex justify-center items-center z-10 pointer-events-none ${open1 ? "animate-slideUp" : "animate-slideDown"
                    }`}
                >
                  Cosmic Hair Transplantation
                </h2>
              )}
              <img
                className="absolute w-[400px] h-[300px] object-cover object-center"
                onMouseOver={() => setOpen1(true)}
                onMouseOut={() => setOpen1(false)}
                src={cosmic}
                alt="cosmic"
              />
            </div>

            <div className="relative w-[400px] h-[300px] shadow-sm shadow-black flex justify-center items-center font-medium text-lg overflow-hidden rounded-2xl transition-all hover:scale-[1.1]"
            data-aos="fade-right" onDurationChange={400}>
              {open2 && (
                <h2
                  className={`absolute text-white text-xl bg-[rgba(0,0,0,0.6)] w-full h-full flex justify-center items-center z-10 pointer-events-none ${open2 ? "animate-slideUp" : "animate-slideDown"
                    }`}
                >
                  Eyelash Lift and Extension
                </h2>
              )}
              <img
                className="absolute w-[400px] h-[300px] object-cover object-center"
                onMouseOver={() => setOpen2(true)}
                onMouseOut={() => setOpen2(false)}
                src={eyelash}
                alt="eyelash"
              />
            </div>

            <div className="relative w-[400px] h-[300px] shadow-sm shadow-black flex justify-center items-center  font-medium text-lg overflow-hidden rounded-2xl transition-all hover:scale-[1.1]"data-aos="fade-left" onDurationChange={400}>
              {open3 && (
                <h2
                  className={`absolute text-white text-xl bg-[rgba(0,0,0,0.6)] w-full h-full flex justify-center items-center z-10 pointer-events-none ${open3 ? "animate-slideUp" : "animate-slideDown"
                    }`}
                >
                  Scalp Micropigmentation
                </h2>
              )}
              <img
                className="absolute w-[400px] h-[300px] object-cover object-center"
                onMouseOver={() => setOpen3(true)}
                onMouseOut={() => setOpen3(false)}
                src={scalp}
                alt="scalp"
              />
            </div>

            <div className="relative w-[400px] h-[300px] shadow-sm shadow-black flex justify-center items-center  font-medium text-lg overflow-hidden rounded-2xl transition-all hover:scale-[1.1]"data-aos="fade-left" onDurationChange={300}>
              {open4 && (
                <h2
                  className={`absolute text-white text-xl bg-[rgba(0,0,0,0.6)] w-full h-full flex justify-center items-center z-10 pointer-events-none ${open4 ? "animate-slideUp" : "animate-slideDown"
                    }`}
                >
                  Oxygen Laser Therapy
                </h2>
              )}
              <img
                className="absolute w-[400px] h-[300px] object-cover object-center"
                onMouseOver={() => setOpen4(true)}
                onMouseOut={() => setOpen4(false)}
                src={laser}
                alt="laser "
              />
            </div>

            <div className="relative w-[400px] h-[300px] shadow-sm shadow-black flex justify-center items-center  font-medium text-lg overflow-hidden rounded-2xl transition-all hover:scale-[1.1]"data-aos="fade-left" onDurationChange={200}>
              {open5 && (
                <h2
                  className={`absolute text-white text-xl bg-[rgba(0,0,0,0.6)] w-full h-full flex justify-center items-center z-10 pointer-events-none ${open5 ? "animate-slideUp" : "animate-slideDown"
                    }`}
                >
                  Percutaneous FUE
                </h2>
              )}
              <img
                className="absolute w-[400px] h-[300px] object-cover object-center"
                onMouseOver={() => setOpen5(true)}
                onMouseOut={() => setOpen5(false)}
                src={fue}
                alt=" fue"
              />
            </div>
          
          </div>
        </div>
      </div>
      </div>
   

    </>
  );
};

export default Fourthcomponent;

