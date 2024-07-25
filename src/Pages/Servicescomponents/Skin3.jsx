import React, { useState } from "react";
import facial from "../../assets/facial.png";
import dermal from "../../assets/dermal.png";
import botox from "../../assets/botox.png";
import Rf from "../../assets/Rf.png";

const Skin3 = () => {
  const [isActive, setActiveTab] = useState(1);

  const changePara = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  const data = [
    {
      id: 1,
      button: "RF Facials",
      img:facial,
      p: "Radiofrequency (RF) facials are non-invasive cosmetic treatments that use radiofrequency energy to heat the deeper layers of the skin, promoting collagen production and improving skin texture, tone, and firmness",
    },
    {
      id: 2,
      button: "Botox",
      img: botox,
      p: "Botox is a popular cosmetic treatment derived from Botulinum toxin type A. It is widely used for reducing the appearance of facial wrinkles and fine lines, and for treating certain medical conditions. ",
    },
    {
      id: 3,
      button: "Dermal Fillers",
      img: dermal,
      p: "Dermal fillers are injectable treatments used to restore volume, smooth wrinkles, and enhance facial contours. They are commonly made of substances like hyaluronic acid, calcium hydroxylapatite, poly-L-lactic acid, and polymethylmethacrylate (PMMA).",
    },
    {
        id: 4,
        button: "Face PRP",
        img:Rf,
        p: "Platelet-Rich Plasma (PRP) therapy, often referred to as a vampire facial, is a cosmetic procedure that uses a concentration of the patient's own platelets to accelerate healing, rejuvenate the skin, and promote collagen production",
      }
  ];

  const activeData = data.find(d => d.id === isActive);

  return (
  
    <div className="w-[90%] m-auto min-h-[500px] mt-5 mb-20 bg-gradient-to-r from-indigo-300 to-indigo-100 border-2 border-indigo-300 rounded-lg shadow-lg shadow-indigo-100">
      <h2 className="text-center font-semibold text-4xl py-10 tracking-wider text-pink-600">
      Ageless
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


export default Skin3;