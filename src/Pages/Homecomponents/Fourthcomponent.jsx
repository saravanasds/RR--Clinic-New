import React, { useState } from "react";
import consult from "../../assets/consult.jpg";
import eyebrow from "../../assets/eyebrow.jpg";
import cosmic from "../../assets/cosmic.jpg";
import eyelash from "../../assets/eyelash.jpg";
import laser from "../../assets/laser.jpg";
import scalp from "../../assets/scalp.jpg";
import fue from "../../assets/fue.jpg";

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

      <div className="pt-[70px]">
      <div
        className="flex flex-col md:flex-row justify-end  items-start pt-[150px] w-[100%] h-screen "
        style={{  
          backgroundImage: `url(${consult})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-[40%]   flex flex-col justify-end items-end gap-5 mr-5">
          <h2
            className="text-5xl font-bold text-gray-700 leading-tight"
            style={{ textShadow: "2px 2px 0px rgba(255,255,255,0.9)" }}
          >
            <span className="text-pink-700">"Book </span>Your Free Consultation Now and
          </h2>
          <h2
            className="text-5xl font-bold text-gray-700 leading-tight"
            style={{ textShadow: "2px 2px 0px rgba(255,255,255,0.9)"}}
          >
            {" "}
            Get Ready to  <span className="text-pink-700">Rediscover </span>Confidence!" 
          </h2>

        </div>
      </div>


      <div className="w-[100%] pt-[100px]">
        <h2 className="text-5xl text-center font-bold uppercase">Treatments</h2>
        <div className="flex justify-center items-center py-10">
          <div className="grid grid-cols-3 gap-10 px-10">


            <div className="relative w-[400px] h-[300px] shadow-sm shadow-black flex justify-center items-center bg-blue-300 font-medium text-lg overflow-hidden">
              {open && (
                <h2
                  className={`absolute text-white text-xl bg-[rgba(0,0,0,0.6)] w-full h-full flex justify-center items-center z-10 pointer-events-none ${open ? "animate-slideUp" : "animate-slideDown"
                    // (false) ? "animate-slidedown" : "animate-slideUp"
                    }`}
                >
                  Eyebrow Transplant
                </h2>
              )}
              <img
                className="absolute w-[400px] h-[300px] object-cover object-center"
                onMouseOver={() => setOpen(true)}
                onMouseOut={() => setOpen(false)}
                // onMouseOver={()=>setClose(true)}
                // onMouseOut={()=>setClose(false)}
                src={eyebrow}
                alt="eyebrow"
              />
            </div>

            <div className="relative w-[400px] h-[300px] shadow-sm shadow-black flex justify-center items-center bg-blue-300 font-medium text-lg overflow-hidden">
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

            <div className="relative w-[400px] h-[300px] shadow-sm shadow-black flex justify-center items-center bg-blue-300 font-medium text-lg overflow-hidden">
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

            <div className="relative w-[400px] h-[300px] shadow-sm shadow-black flex justify-center items-center bg-blue-300 font-medium text-lg overflow-hidden">
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

            <div className="relative w-[400px] h-[300px] shadow-sm shadow-black flex justify-center items-center bg-blue-300 font-medium text-lg overflow-hidden">
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

            <div className="relative w-[400px] h-[300px] shadow-sm shadow-black flex justify-center items-center bg-blue-300 font-medium text-lg overflow-hidden">
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
