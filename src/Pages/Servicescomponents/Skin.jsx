
import React, { useState } from "react";

import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p4 from "../../assets/p4.png";


const Skin = () => {
  const [isActive, setActiveTab] = useState(1);

  const changePara = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const data = [
    {
      id: 1,
      button: "Skin Peels",
      img: p1,
      p: "A glycolic peel treatment is a type of chemical peel that uses glycolic acid, an alpha-hydroxy acid (AHA), derived from sugar cane. It's commonly used in dermatology and cosmetology to improve the appearance of the skin by exfoliating the outer layer and promoting cell turnover.",
    },
    {
      id: 2,
      button: "Microdermabrasion",
      img: p2,
      p: "Microdermabrasion is a popular non-invasive cosmetic procedure that aims to improve the appearance of the skin by exfoliating the outermost layer.This treatment uses a minimally abrasive instrument to gently sand the skin, removing the thicker, uneven outer layer. It is less aggressive than chemical peels and can be used for mild skin imperfections..",
    },
    {
      id: 3,
      button: "Q-Switched Laser",
      img: p4,
      p: "The Q-Switched laser is a type of laser technology used primarily in dermatology and cosmetology for various skin treatments. It operates by emitting a very high-intensity pulse of laser energy in extremely short durations (nanoseconds), making it effective for specific skin issues.",
    },
  ];

  const activeData = data.find(d => d.id === isActive);
    
  return (
  
    <div className="w-[90%] m-auto min-h-[500px] mt-5 mb-20 bg-gradient-to-r from-green-300 to-green-100 border-2 border-green-300 rounded-lg shadow-lg shadow-green-100">
      <h2 className="text-center font-semibold text-4xl py-10 tracking-wider text-pink-600">
        Skin brightening & Pigmentation
      </h2>
      <div className="flex gap-20 text-xl justify-end items-end px-16 py-3 bg-white shadow-lg  tracking-wider">
        {data.map((buttonData) => (
          <h2
            key={buttonData.id}
            className={isActive === buttonData.id ? "cursor-pointer text-blue-500 border-b-2 border-blue-500  font-md" : "cursor-pointer"}
            onClick={() => changePara(buttonData.id)}
          >
            {buttonData.button}
          </h2>
        ))}
      </div>
      <div className="w-[100%] min-h-[450px] flex gap-4 py-5 px-5 tracking-wider leading-relaxed">
        <div className="w-[40%] min-h-[100%]  ">
          <img
            className="block w-[100%] min-h-[100%] rounded-xl"
            src={activeData.img}
            alt={activeData.button}
          />
        </div>
        <div className="w-[60%] flex flex-col p-5 text-gray-700 ">
          <p>{activeData.p}</p>
        </div>
      </div>
    </div>
  );
};


export default Skin;
