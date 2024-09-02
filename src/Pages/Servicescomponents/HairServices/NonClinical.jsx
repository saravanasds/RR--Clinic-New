import React, { useState, useEffect } from 'react';

function NonClical() {
  const treatments = [
    {
      id: "basic-thin-poly",
      title: "Basic Thin Poly",
      description: `
        Basic Thin Poly is a non-surgical hair replacement system that uses a thin, breathable polyurethane base. This system is designed for individuals who prefer a lightweight and natural-looking hairpiece. The thin poly material allows for a comfortable fit while maintaining the appearance of a natural scalp.
      `,
      advantages: ["Lightweight and breathable", "Natural-looking appearance", "Comfortable to wear"],
    },
    {
      id: "celebrity-choice",
      title: "Celebrity Choice",
      description: `
        Celebrity Choice is a premium non-surgical hair replacement system favored by high-profile individuals. This system is known for its superior quality, offering a realistic look and feel that is indistinguishable from natural hair. It is ideal for those seeking the best in hair replacement technology.
      `,
      advantages: ["Premium quality", "Realistic look and feel", "Highly customizable"],
    },
    {
      id: "celebrity-choice-mirage",
      title: "Celebrity Choice Mirage",
      description: `
        Celebrity Choice Mirage is an advanced version of the Celebrity Choice system, featuring a nearly invisible lace front that mimics the natural hairline. This option is perfect for individuals who want the most seamless and undetectable hair replacement solution available.
      `,
      advantages: ["Invisible lace front", "Seamless hairline", "Undetectable appearance"],
    },
    {
      id: "full-lace",
      title: "Full Lace",
      description: `
        Full Lace systems are designed with a lace base that covers the entire scalp, allowing for versatile styling options. This system is popular for its natural appearance and the ability to part the hair in any direction. It is ideal for those who want maximum flexibility in their hair styling.
      `,
      advantages: ["Versatile styling options", "Natural appearance", "Breathable and comfortable"],
    },
    {
      id: "hair-extension",
      title: "Hair Extension",
      description: `
        Hair Extensions are a non-invasive way to add length and volume to natural hair. These extensions can be made from synthetic or natural hair and are available in various styles and colors. They are an excellent option for those looking to enhance their hair without undergoing surgery.
      `,
      advantages: ["Adds length and volume", "Non-invasive", "Available in various styles and colors"],
    },
    {
      id: "men-full-cap",
      title: "Men Full Cap",
      description: `
        The Men Full Cap is a complete hair replacement system designed to cover the entire scalp. This system is perfect for men experiencing extensive hair loss or baldness. It provides a natural and full appearance and can be styled like natural hair.
      `,
      advantages: ["Full scalp coverage", "Natural appearance", "Can be styled like natural hair"],
    },
    {
      id: "women-full-cap",
      title: "Women Full Cap",
      description: `
        The Women Full Cap is designed specifically for women who require a full hair replacement system. This system offers complete coverage and can be styled to match the individual's preferences. It is ideal for women experiencing significant hair loss.
      `,
      advantages: ["Complete coverage", "Customizable styling", "Natural and full appearance"],
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
        <h1 className="text-3xl font-bold font-nunito text-center">Non-Clinical Plan</h1>
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

export default NonClical;
