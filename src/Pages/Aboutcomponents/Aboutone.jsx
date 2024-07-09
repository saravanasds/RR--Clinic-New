import React from "react";
import wave from "../../assets/wave.jpg";
import doctors from "../../assets/doctors.png";

const Fifthcomponent = () => {
  return (
    <>
      <div className="relative ">
        <div
          className="absolute -z-10 w-[100%] h-screen p-5 flex justify-center items-center blur-[2px]"
          style={{
            backgroundImage: `url(${wave})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className=" w-auto bg-[rgb(0,0,0,0.1)]">
          <div className="[100%] h-auto flex flex-col md:flex-row justify-center items-center">
            <div className="w-[50%] h-[600px] flex flex-col justify-center items-center px-20 py-5 ml-20">
              <h2
                className="text-5xl font-bold mb-5 leading-tight text-blue-500"
               
              >
                <span className="text-red-700"> Rediscover</span> Your Best HairToday
              </h2>
              <p className="leading-normal text-md font-normal">
                We believe that every patient is unique, and so is their hair
                journey. Our approach is rooted in a commitment to
                individualized care,understand your specific needs and goals.{" "}
              </p>
            </div>
            <div className="relative w-[600px] h-[600px] rounded-full ">
              <img className="ml-3" src={doctors} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fifthcomponent;
