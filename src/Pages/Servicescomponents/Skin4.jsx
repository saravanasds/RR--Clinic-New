import React, { useState } from "react";
import hydra3 from "../../assets/hydra3.png";

const Skin4 = () => {
  const [isActive, setActiveTab] = useState(1);

  const changePara = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const data = [
    {
      id: 1,
      button: "Hydra Facial",
      img: hydra3,
      p: "A HydraFacial is a popular non-invasive facial treatment that combines cleansing, exfoliation, extraction, hydration, and antioxidant protection. It is designed to improve skin health and appearance with minimal discomfort and downtime. ",
      h1:"Deep Hydration:",
      p1:"HydraFacial uses a unique vortex-fusion technology that combines cleansing, exfoliation, extraction, and hydration. This process infuses the skin with hydrating serums containing ingredients like hyaluronic acid, which helps to replenish moisture and improve skin hydration.",
      h2:"Removal of Dead Skin Cells: ",
      p2:"The treatment exfoliates the outer layer of dead skin cells, which can contribute to dryness and flakiness. By removing these cells, HydraFacial helps to reveal smoother, more hydrated skin underneath.",
      h3:" Brightening Effects:",
      p3:" HydraFacial treatments often include brightening serums that contain antioxidants and skin-brightening agents such as Vitamin C. These help to even out skin tone and enhance radiance, giving the skin a more vibrant and luminous appearance.",
      // h4:"Improved Barrier Function:",
      // p4:" Regular HydraFacial treatments can help strengthen the skin natural barrier, which is crucial for preventing moisture loss and protecting against environmental factors that can exacerbate dryness.",
      // h5:"Increased Skin Clarity:",
      // p5:" By removing dead skin cells and impurities, HydraFacial can improve skin clarity and reduce dullness caused by buildup and congestion..",
    },
   
  ];

  const activeData = data.find(d => d.id === isActive);

  return (
  
    <div className="relative w-[95%] lg:w-[90%] m-auto min-h-[500px] mt-5 mb-20 bg-gradient-to-r from-yellow-300 to-yellow-100 border-2 border-yellow-300 rounded-lg shadow-lg shadow-yellow-100">
  <h2 className="text-center font-semibold text-2xl lg:text-4xl py-5 lg:py-10 tracking-wider text-pink-600">
    Dry and Dull
  </h2>
  <div className="flex flex-wrap gap-5 lg:gap-20 text-lg lg:text-xl justify-center lg:justify-end items-center lg:items-end px-5 lg:px-16 py-3 bg-white shadow-lg tracking-wider">
    {data.map((buttonData) => (
      <h2
        key={buttonData.id}
        className={isActive === buttonData.id ? "cursor-pointer text-blue-500 border-b-2 border-blue-500 font-md" : "cursor-pointer"}
        onClick={() => changePara(buttonData.id)}
      >
        {buttonData.button}
      </h2>
    ))}
  </div>
  <div className="w-[100%] min-h-[450px] flex flex-col lg:flex-row justify-center items-center gap-4 py-5 px-5 tracking-wider leading-relaxed">
    <div className="w-[100%] lg:w-[40%] lg:min-h-[400px] mb-5 lg:mb-0">
      <img
        className="block w-full h-auto rounded-xl"
        src={activeData.img}
        alt={activeData.button}
      />
    </div>
    <div className="w-[100%] lg:w-[60%] flex flex-col p-2 lg:p-5 text-gray-700 gap-2">
      <p>{activeData.p}</p>
      <h1 className="font-semibold">{activeData.h1}</h1>
      <p>{activeData.p1}</p>
      <h1 className="font-semibold">{activeData.h2}</h1>
      <p>{activeData.p2}</p>
      <h1 className="font-semibold">{activeData.h3}</h1>
      <p>{activeData.p3}</p>
      <h1 className="font-semibold">{activeData.h4}</h1>
      <p>{activeData.p4}</p>
      <h1 className="font-semibold">{activeData.h5}</h1>
      <p>{activeData.p5}</p>
    </div>
  </div>
</div>
  );
};


export default Skin4;