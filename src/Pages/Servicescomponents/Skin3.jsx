import React, { useState } from "react";
import facial from "../../assets/facial.png";
import dermal from "../../assets/dermal.png";
import botox from "../../assets/botox.png";
import hydra from "../../assets/hydra.png";

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
      h1:" Skin Tightening:",
      p1:" RF facials stimulate collagen and elastin production, which helps to tighten and firm the skin. This can reduce sagging and improve overall skin elasticity.",
      h2:"Enhanced Skin Tone: ",
      p2:" RF facials can help even out skin tone and reduce the appearance of age spots, sun spots, and other forms of hyperpigmentation.",
      h3:"Improved Circulation:",
      p3:" The heat generated by the RF energy can improve blood circulation in the treated area, which can contribute to a healthier and more radiant complexion.",
      // h4:"Lifting Effect:",
      // p4:"  RF facials can provide a mild lifting effect, which is beneficial for targeting areas with early signs of sagging, such as the cheeks and jawline.",
      // h5:"Improved Circulation:",
      // p5:" The heat generated by the RF energy can improve blood circulation in the treated area, which can contribute to a healthier and more radiant complexion.",
    },
    {
      id: 2,
      button: "Botox",
      img: botox,
      p: "Botox is a popular cosmetic treatment derived from Botulinum toxin type A. It is widely used for reducing the appearance of facial wrinkles and fine lines, and for treating certain medical conditions. ",
      h1:"Prevention of New Wrinkles:",
      p1:"Some people use Botox proactively to prevent the formation of new wrinkles. Regular treatments can help keep the skin smooth and delay the appearance of aging.",
      h2:"Wrinkle Reduction:",
      p2:"Botox is most commonly known for its ability to reduce the appearance of facial wrinkles, particularly frown lines, crow's feet, and forehead lines. By temporarily paralyzing the muscles that cause these wrinkles, Botox smooths the skin and creates a more youthful appearance.",
      // h3:"Non-Surgical:",
      // p3:" Unlike facelift surgery or other invasive procedures, Botox injections are minimally invasive and require no downtime. Patients can typically return to their normal activities immediately after treatment.",
      // h4:" Improved Facial Symmetry: ",
      // p4:"For some individuals, Botox can be used to address facial asymmetry or uneven facial expressions, helping to create a more balanced appearance.",
     
    },
    {
      id: 3,
      button: "Dermal Fillers",
      img: dermal,
      p: "Dermal fillers are injectable treatments used to restore volume, smooth wrinkles, and enhance facial contours. They are commonly made of substances like hyaluronic acid, calcium hydroxylapatite, poly-L-lactic acid, and polymethylmethacrylate (PMMA).",
      h1:"Customizable Treatments: ",
      p1:"Fillers come in various formulations and consistencies, allowing for customized treatments tailored to specific needs and desired outcomes. This flexibility ensures that patients can achieve the results they are looking for.",
      h2:"Natural-Looking Results: ",
      p2:"Modern dermal fillers are designed to mimic the natural substances found in the skin, such as hyaluronic acid, which helps achieve a natural look and feel. When administered by a skilled practitioner, results can appear subtle and harmonious with one's natural features.",
      // h3:" Long-Lasting Effects:",
      // p3:"  Depending on the type of filler used and the area treated, results can last from several months to over a year. This makes them a relatively long-term solution compared to some other cosmetic treatments.",
      // h4:"Immediate Results: ",
      // p4:"Results from dermal fillers are often visible immediately after the procedure. This provides instant gratification and allows for immediate feedback on the treatment effectiveness.",
     
      
    },
    {
        id: 4,
        button: "Face PRP",
        img:hydra,
        p: "Platelet-Rich Plasma (PRP) therapy, often referred to as a vampire facial, is a cosmetic procedure that uses a concentration of the patient's own platelets to accelerate healing, rejuvenate the skin, and promote collagen production",
        h1:"Skin Rejuvenation:  ",
        p1:"PRP therapy stimulates collagen and elastin production, which can help improve skin texture, tone, and overall appearance. This can result in a more youthful, radiant complexion.",
        h2:"Reduction of Fine Lines and Wrinkles: ",
        p2:"By promoting collagen growth, PRP therapy can reduce the appearance of fine lines and wrinkles, particularly around the eyes, mouth, and forehead.",
        h3:" Improved Skin Texture: ",
        p3:"PRP can enhance skin texture by smoothing out rough patches, reducing pore size, and improving overall skin quality.",
        // h4:"Minimized Scarring: ",
        // p4:" PRP is sometimes used to treat acne scars or other types of scarring. The growth factors can help promote healing and reduce the appearance of scars.",
        // h4:" Enhanced Healing: ",
        // p4:" PRP therapy can accelerate the healing process for various skin issues, including minor injuries, post-surgical recovery, and skin damage.",
       
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


export default Skin3;