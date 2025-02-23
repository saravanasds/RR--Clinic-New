import React from "react";
import Hero from "./Hero";
import Firstcomponent from "./Homecomponents/Firstcomponent";
import Consult from "./Homecomponents/Consult";
import Thirdcomponent from "./Homecomponents/Thirdcomponent";
import Fourthcomponent from "./Homecomponents/Fourthcomponent";
import Testimonial from "./Homecomponents/Testimonial";


const Home = () => {
  return (
    <>
      <div className="overflow-x-hidden">
      <Hero />
      <Firstcomponent />
      <Thirdcomponent />
      <Fourthcomponent />
      <Consult />
      </div>
      

      {/* <div className="h-[50vh] bg-slate-300 flex justify-center items-center">
        <div className="max-w-3xl text-center text-black">
          <blockquote className="italic text-lg md:text-2xl">
            "Your journey to beautiful hair and healthy skin begins here."
          </blockquote>
        </div>
      </div> */}
    </>
  );
};

export default Home;
