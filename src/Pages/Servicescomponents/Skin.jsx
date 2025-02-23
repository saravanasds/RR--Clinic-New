
import React, { useState } from "react";

import p1 from "../../assets/p1.png";
import p2 from "../../assets/d2.png";
import p4 from "../../assets/d3.png";


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
      h1:"Improved Skin Texture:",
      p1:" Peels can help smooth out rough skin by removing dead cells and encouraging the growth of new, healthy skin.",
      h2:"Reduced Fine Lines and Wrinkles:",
      p2:" By stimulating collagen production and removing the top layer of damaged skin, peels can help reduce the appearance of fine lines and wrinkles.",
      h3:"Even Skin Tone:",
      p3:" Peels can address hyperpigmentation, sunspots, and melasma, leading to a more even skin tone.",
    //   h4:"Enhanced Radiance:",
    //   p4:" By removing dead skin cells, peels can give the skin a brighter and more radiant appearance",
    //   h5:" Unclogged Pores:",
    //   p5:" They can help to clear out clogged pores, which can reduce the incidence of acne and blackheads.",
    // //  " ."
    },

    {
      id: 2,
      button: "Laser Hair Reduction",
      img: p2,
      p: "Laser Hair Reduction (LHR) is a non-invasive procedure that uses concentrated light to target and reduce unwanted hair growth. The laser selectively targets dark, coarse hair while leaving the surrounding skin undamaged.",
      h1: "Long-Term Hair Reduction:",
      p1: "LHR significantly reduces hair growth over time, providing long-lasting results with minimal maintenance.",
      h2: "Precision Targeting:",
      p2: "The laser targets hair follicles with precision, making it ideal for small and large areas, including sensitive skin.",
      h3: "Faster Treatment:",
      p3: "Each pulse of the laser takes a fraction of a second and can treat many hairs at once, allowing for quick treatment of large areas such as legs or back.",
     },
    
    {
      id: 3,
      button: "Q-Switched Laser",
      img: p4,
      p: "The Q-Switched laser is a type of laser technology used primarily in dermatology and cosmetology for various skin treatments. It operates by emitting a very high-intensity pulse of laser energy in extremely short durations (nanoseconds), making it effective for specific skin issues.",
      h1:"Effective Pigmentation Removal: ",
      p1:"Q-Switched lasers are highly effective for treating hyperpigmentation issues such as age spots, sun spots, and melasma by targeting melanin in the skin.",
      h2:"Tattoo Removal: ",
      p2:"They are often used for tattoo removal because they can break down the ink particles in the skin into smaller pieces, which are then gradually eliminated by the our natural processes.",
      h3:"Reduced Skin Discoloration: ",
      p3:"Reduced Skin Discoloration: The laser can help even out skin tone and reduce the appearance of skin discoloration by targeting and breaking up excess pigment.",
      // h4:"Improved Skin Texture:",
      // p4:" By stimulating collagen production, Q-Switched lasers can help improve skin texture and tone, leading to smoother, more youthful-looking skin.",
      // h5:"Safe for Various Skin Types: ",
      // p5:" Many Q-Switched lasers are suitable for a range of skin types and tones, making them versatile for different patients needs.",
      
    },
  ];

  const activeData = data.find(d => d.id === isActive);
    
  return (
  
    <div className="relative w-[95%] lg:w-[90%] m-auto min-h-[500px] mt-5 mb-20 bg-gradient-to-r from-green-300 to-green-100 border-2 border-green-300 rounded-lg shadow-lg shadow-green-100">
  <h2 className="text-center font-semibold text-2xl lg:text-4xl py-5 lg:py-10 tracking-wider text-pink-600">
    Skin brightening & Pigmentation
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


export default Skin;
