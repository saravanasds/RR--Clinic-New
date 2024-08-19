
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
      h1:" Effective Hair Removal:",
      p1:" Ndlasers are highly effective for hair removal, especially for individuals with darker skin tones. They target the melanin in hair follicles, reducing hair growth over time.",
      h2:"Reduced Fine Lines and Wrinkles: ",
      p2:"This laser can penetrate deeper into the skin compared to other lasers, which is particularly beneficial for treating deeper vascular lesions and tattoos.",
      h3:"Versatility:",
      p3:"  The Nd laser can be used for a wide range of skin types and conditions, making it a versatile option for many patients.",
      // h4:"  Skin Rejuvenation:",
      // p4:" Nd lasers can promote collagen production and improve skin texture, reducing the appearance of fine lines, wrinkles, and overall skin laxity.",
      // h5:" Tattoo Removal:",
      // p5:" They are commonly used for tattoo removal, particularly for darker ink colors, as they can penetrate deeper into the skin to break down ink particles.",
    },
    {
      id: 2,
      button: "Diode Laser",
      img: p6,
      p: "A diode laser is a type of laser technology commonly used for hair removal and various other dermatological applications. It is known for its efficiency and safety, particularly for individuals with different skin types.",
      h1:"  Reduced Pain:",
      p1:" Many diode lasers are equipped with cooling systems that help minimize discomfort during the procedure, making the treatment more comfortable for patients.",
      h2:"Long-Lasting Results: ",
      p2:" Diode laser hair removal can provide long-lasting results, often with a significant reduction in hair growth after a series of treatments..",
      h3:"  Precise Treatment:",
      p3:" Diode lasers offer precision in targeting specific areas, making them effective for treating small areas as well as larger body regions.",
      // h4:" Minimal Downtime:",
      // p4:"Most diode laser treatments involve minimal downtime, allowing patients to resume normal activities shortly after the procedure.",
      // h5:"Deep Penetration: ",
      // p5:"The wavelength of diode lasers allows for deeper penetration into the skin, which is beneficial for targeting hair follicles and treating certain skin conditions.",
    },
    
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
      <div className="w-[100%] min-h-[450px] flex justify-center items-center gap-4 py-5 px-5 tracking-wider leading-relaxed">
        <div className="w-[40%] min-h-[100%]  ">
          <img
            className="block w-[100%] min-h-[100%] rounded-xl"
            src={activeData.img}
            alt={activeData.button}
          />
        </div>
        <div className="w-[60%] flex flex-col p-5 text-gray-700 gap-2">
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

export default Skin2;