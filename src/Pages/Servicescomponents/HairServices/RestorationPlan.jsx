import React, { useState, useEffect } from 'react';
import BasicHairTransplantImg from "../../../assets/Hair-Treatment/Restoration Plan/laser1.jpg";
import EyebrowTransplantImg from "../../../assets/Hair-Treatment/Restoration Plan/laser2.jpg";
import BeardTransplantImg from "../../../assets/Hair-Treatment/Restoration Plan/laser3.jpg";
import MoustacheTransplantImg from "../../../assets/Hair-Treatment/Restoration Plan/laser4.jpg";
import PercutaneousFUEImg from "../../../assets/Hair-Treatment/Restoration Plan/laser5.jpeg";


import BannerImage from '../../../assets/fue.jpg';


function RestorationPlan() {
  const treatments = [
    {
      id: "basic-hair-transplant",
      title: "Basic Hair Transplant",
      image: BasicHairTransplantImg,
      description: `
        Basic Hair Transplant is a surgical technique that moves hair follicles from a part of the body called the donor site to a bald or balding part of the body known as the recipient site. It is primarily used to treat male pattern baldness. This minimally invasive procedure typically involves removing a strip of skin from the donor site and then separating the hair follicles to transplant into the balding areas.
      `,
      pros: ["Permanent solution", "Natural-looking results", "Minimal maintenance required"],
      cons: ["Expensive", "Requires surgery", "Recovery time needed"],
    },
    {
      id: "eyebrow-transplant",
      title: "Eyebrow Transplant",
      image: EyebrowTransplantImg,
      description: `
        Eyebrow Transplant is a cosmetic procedure where hair grafts, usually taken from the back of the head, are transplanted to the brow area to create fuller, natural-looking eyebrows. This treatment is ideal for individuals who have thin or sparse eyebrows due to genetics, over-plucking, or injury.
      `,
      pros: ["Enhances appearance", "Permanent results", "Natural growth"],
      cons: ["High cost", "Requires precision", "Healing time required"],
    },
    {
      id: "beard-transplant",
      title: "Beard Transplant",
      image: BeardTransplantImg,
      description: `
        Beard Transplant is a cosmetic surgery procedure that involves taking hair from one part of the body and transplanting it to the beard area to fill in patches and create a fuller beard. This procedure is popular among men who have trouble growing facial hair or want to enhance their beard's density.
      `,
      pros: ["Improves beard fullness", "Permanent results", "Boosts confidence"],
      cons: ["High cost", "Surgical risks", "Scarring possible"],
    },
    {
      id: "moustache-transplant",
      title: "Moustache Transplant",
      image: MoustacheTransplantImg,
      description: `
        Moustache Transplant is a cosmetic procedure designed to help men who have thin or sparse moustache hair achieve a fuller, thicker look. Hair follicles are usually taken from the back of the head and transplanted to the moustache area.
      `,
      pros: ["Enhanced facial aesthetics", "Permanent solution", "Minimal maintenance"],
      cons: ["Surgery required", "Possible scarring", "Costly procedure"],
    },
    {
      id: "percutaneous-fue",
      title: "Percutaneous FUE",
      image: PercutaneousFUEImg,
      description: `
        Percutaneous FUE (Follicular Unit Extraction) is an advanced hair transplant technique where individual hair follicles are extracted using a special instrument and implanted into the recipient area. This method allows for more precise placement and natural-looking results.
      `,
      pros: ["Minimal scarring", "High precision", "Natural results"],
      cons: ["Longer procedure time", "High cost", "Requires expert surgeon"],
    },
  ];

  const [activeId, setActiveId] = useState(treatments[0].id);

  const handleScroll = () => {
    const sections = treatments.map((treatment) => document.getElementById(treatment.id));
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (let section of sections) {
      if (section.offsetTop < scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
        setActiveId(section.id);
        break;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 120; // Adjust this value based on the height of the navbar and banner
      const topPosition = section.offsetTop - offset;
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
      setActiveId(id);
    }
  };

  return (
    <div className="container mx-auto md:p-4 md:pt-24">

<div
      className="relative h-[200px] bg-blue-500 text-white flex items-center justify-center mb-8 md:rounded-2xl rounded-b-2xl bg-cover bg-center"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <h1 className="text-5xl font-bold font-nunito text-center">Restoration Plan</h1>
      </div>

      {/* Navbar for Treatment Navigation */}
      <nav className=" md:top-[120px] z-10 bg-gray-400/70 shadow-md py-4 mb-8 mt-4 rounded-2xl">
        <ul className="flex flex-wrap justify-around">
          {treatments.map((treatment) => (
            <li key={treatment.id} className="mb-2 md:mb-0">
              <button
                onClick={() => scrollToSection(treatment.id)}
                className={`text-sm md:text-lg font-semibold ${
                  activeId === treatment.id
                    ? "text-blue-800 border-b-2 border-blue-800"
                    : "text-blue-600 hover:text-blue-800"
                }`}
              >
                {treatment.title}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Treatment Sections */}
      {treatments.map((treatment, index) => (
  <div
    id={treatment.id}
    key={index}
    className={`mb-8 min-h-[100vh] flex flex-col justify-evenly px-4 py-2 sm:px-8 rounded-xl
      ${{
        1: "bg-gradient-to-r from-purple-200 via-pink-300 to-purple-500",
        2: "bg-gradient-to-r from-lime-200 via-white to-lime-300",
        3: "bg-gradient-to-r from-yellow-200 via-white to-yellow-300",
        4: "bg-gradient-to-r from-blue-200 via-white to-blue-300"
      }[index] || "bg-gradient-to-r from-slate-200 via-white to-slate-400"}
    `}
    
  >
    <h2 className="text-2xl text-center font-semibold mb-2 border-2 border-black p-2 rounded-lg bg-gray-100">
      {treatment.title}
    </h2>

    <div className="flex flex-col md:flex-row justify-between items-center">
      {/* Image Section */}
      <div className="md:w-1/2 p-4">
        <img
          src={treatment.image}
          alt={treatment.title}
          className="w-full h-[80%] object-contain rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 md:pl-8">
        <p className="mb-4">{treatment.description}</p>

        {/* Pros and Cons Section */}
        <div className="flex flex-col md:flex-row">
          {/* Pros */}
          <div className="mb-4 md:mr-8">
            <h3 className="text-xl font-semibold mb-2">Pros</h3>
            <ul className="list-disc pl-5">
              {treatment.pros.map((pro, i) => (
                <li key={i}>{pro}</li>
              ))}
            </ul>
          </div>

          {/* Cons */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Cons</h3>
            <ul className="list-disc pl-5">
              {treatment.cons.map((con, i) => (
                <li key={i}>{con}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
))}
    </div>
  );
}

export default RestorationPlan;
