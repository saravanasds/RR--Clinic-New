import React, { useState, useEffect } from 'react';

function SuperSpeciality() {
  const treatments = [
    {
      id: "scalp-micropigmentation",
      title: "Scalp Micropigmentation",
      description: `
        Scalp Micropigmentation is a non-invasive treatment that uses detailed micro-needles to deposit pigment into the scalp. The result creates the appearance of tiny hair follicles that help thicken and restore the look of fuller hair. It is an excellent option for individuals dealing with hair loss who are not candidates for hair transplants or prefer a non-surgical solution.
      `,
      advantages: ["Non-surgical", "Immediate results", "Low maintenance"],
    },
    {
      id: "partial-alopecia",
      title: "Partial Alopecia",
      description: `
        Partial Alopecia refers to hair loss that affects only certain areas of the scalp or body. Treatment options vary based on the underlying cause and extent of hair loss. These treatments can range from topical medications and corticosteroid injections to more advanced therapies like PRP (Platelet-Rich Plasma) and low-level laser therapy.
      `,
      advantages: ["Multiple treatment options", "Can improve hair density", "Targeted approach"],
    },
    {
      id: "total-alopecia",
      title: "Total Alopecia",
      description: `
        Total Alopecia, also known as Alopecia Universalis, is a more severe form of hair loss that results in complete baldness across the entire scalp and body. Treatments include immunotherapy, corticosteroids, and other therapies aimed at managing symptoms and stimulating hair growth.
      `,
      advantages: ["Comprehensive treatment approach", "Focuses on hair regrowth", "Improves appearance"],
    },
    {
      id: "microblading",
      title: "Microblading",
      description: `
        Microblading is a semi-permanent cosmetic procedure that enhances the appearance of eyebrows. Using a hand-held tool, pigment is manually deposited into the skin to create the look of fuller, natural eyebrows. This treatment is ideal for those with sparse or thin eyebrows who want to achieve a more defined shape.
      `,
      advantages: ["Natural-looking results", "Long-lasting", "Customizable"],
    },
    {
      id: "eyelash-lift-extensions",
      title: "Eyelash Lift and Extensions",
      description: `
        Eyelash Lift and Extensions are cosmetic treatments designed to enhance the length, curl, and fullness of natural eyelashes. The lift treatment curls your lashes from base to tip, making them look longer and more open. Extensions involve attaching synthetic or natural fibers to your natural lashes for a more dramatic effect.
      `,
      advantages: ["Enhances natural beauty", "No need for daily mascara", "Customizable look"],
    },
    {
      id: "lip-micropigmentation",
      title: "Lip Micropigmentation",
      description: `
        Lip Micropigmentation is a cosmetic tattooing procedure that enhances the color and shape of the lips. This treatment can provide the appearance of fuller lips and correct asymmetry or discoloration. It's a great option for those looking to minimize the need for daily lip makeup.
      `,
      advantages: ["Long-lasting color", "Enhances lip shape", "Reduces the need for makeup"],
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
    <div className="container mx-auto px-4">
       <div className="relative h-[200px] bg-blue-500 text-white flex items-center justify-center mb-8 md:rounded-2xl rounded-b-2xl">
        <h1 className="text-3xl font-bold font-nunito text-center">SuperSpeciality Plan</h1>
      </div>

      {/* Navbar for Treatment Navigation */}
      <nav className="sticky top-16 md:top-[120px] z-10 bg-gray-400/70 shadow-md py-4 mb-8 mt-4 rounded-2xl">
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
          className="mb-8 min-h-screen flex flex-col justify-evenly px-4 sm:px-8"
        >
          <h2 className="text-2xl text-center font-semibold mb-2 border-2 border-black p-2 rounded-lg bg-gray-100">{treatment.title}</h2>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-full">
              <p className="mb-4">{treatment.description}</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Advantages</h3>
            <ul className="list-disc pl-5">
              {treatment.advantages.map((advantage, i) => (
                <li key={i}>{advantage}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SuperSpeciality;

/*


Scalp Micropigmentation
Partial Alopecia
Total alopecia
Microblading
Eyelash Lif and Extensions
Lip Micropigmentation


*/ 