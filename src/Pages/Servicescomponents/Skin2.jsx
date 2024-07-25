
import React, { useState } from "react";
import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.png";

const Skin2 = () => {
  const [isActive, setActiveTab] = useState(1);

  const changePara = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const data = [
    {
      id: 1,
      button: "Nd-YAG Laser",
      img: p5,
      p: "The Nd laser is a versatile and powerful laser used in various medical and cosmetic procedures Nd for Neodymium-doped Yttrium Aluminum Garnet, and this laser operates at a wavelength of 1064 nm, which allows it to penetrate deeper into the skin compared to other types of lasers.",
    },
    {
      id: 2,
      button: "Diode Laser",
      img: p6,
      p: "A diode laser is a type of laser technology commonly used for hair removal and various other dermatological applications. It is known for its efficiency and safety, particularly for individuals with different skin types.",
    },
    // {
    //   id: 3,
    //   button: "Q-Switched Laser",
    //   img: docs,z
    //   p: "The Q-Switched laser is a type of laser technology used primarily in dermatology and cosmetology for various skin treatments. It operates by emitting a very high-intensity pulse of laser energy in extremely short durations (nanoseconds), making it effective for specific skin issues.",
    // },
  ];

  const activeData = data.find(d => d.id === isActive);

  return (
  
    <div className="w-[90%] m-auto min-h-[500px] mt-5 mb-20 bg-gradient-to-r from-red-300 to-red-100 border-2 border-red-300 rounded-lg shadow-lg shadow-red-100">
      <h2 className="text-center font-semibold text-4xl py-10 tracking-wider text-pink-600">
        Permanent Hair Reduction
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

export default Skin2;