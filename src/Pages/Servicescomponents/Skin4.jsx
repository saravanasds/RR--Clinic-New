import React, { useState } from "react";
import hydra1 from "../../assets/hydra1.png";

const Skin4 = () => {
  const [isActive, setActiveTab] = useState(1);

  const changePara = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const data = [
    {
      id: 1,
      button: "Hydra Facial",
      img: hydra1,
      p: "A HydraFacial is a popular non-invasive facial treatment that combines cleansing, exfoliation, extraction, hydration, and antioxidant protection. It is designed to improve skin health and appearance with minimal discomfort and downtime. ",
    },
    // {
    //   id: 2,
    //   button: "Microdermabrasion",
    //   img: doctor1,
    //   p: "Microdermabrasion is a popular non-invasive cosmetic procedure that aims to improve the appearance of the skin by exfoliating the outermost layer.",
    // },
    // {
    //   id: 3,
    //   button: "Q-Switched Laser",
    //   img: docs,
    //   p: "The Q-Switched laser is a type of laser technology used primarily in dermatology and cosmetology for various skin treatments. It operates by emitting a very high-intensity pulse of laser energy in extremely short durations (nanoseconds), making it effective for specific skin issues.",
    // },
  ];

  const activeData = data.find(d => d.id === isActive);

  return (
  
    <div className="w-[90%] m-auto min-h-[500px] mt-5 mb-20 bg-gradient-to-r from-yellow-300 to-yellow-100 border-2 border-yellow-300 rounded-lg shadow-lg shadow-yellow-100">
      <h2 className="text-center font-semibold text-4xl py-10 tracking-wider text-pink-600">
        Dry & Dull Skin
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


export default Skin4;