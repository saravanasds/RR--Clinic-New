import React, { useState, useEffect } from 'react';
import Treatment1 from "../../../assets/Hair-Treatment/Retention Plan/Meso Theraphy.jpg";
import Treatment2 from "../../../assets/Hair-Treatment/Retention Plan/Oxygen Laser Theraphy.jpg";
import Treatment3 from "../../../assets/Hair-Treatment/Retention Plan/PRP-injection-high-angle.jpg";

function RetentionPlan() {
  const treatments = [
    {
      id: "meso-therapy",
      title: "Meso Therapy",
      image: Treatment1,
      description: `
        Meso Therapy is a non-invasive cosmetic treatment that targets hair loss and stimulates hair growth by delivering
        essential nutrients directly into the scalp. This treatment involves micro-injections of vitamins, minerals, amino acids,
        and other vital nutrients into the mesoderm, the layer of fat and tissue underneath the skin. The goal is to improve blood
        circulation, strengthen hair follicles, and promote the growth of new hair. Meso Therapy is ideal for those who are experiencing
        early stages of hair thinning or loss, as it can significantly slow down hair shedding and rejuvenate hair follicles. The treatment
        is generally safe with minimal side effects, making it a popular choice for individuals seeking a non-surgical solution to hair loss.
      `,
      pros: ["Improves hair density", "Non-invasive", "Minimal side effects"],
      cons: ["Multiple sessions required", "Mild discomfort during procedure"],
    },
    {
      id: "oxygen-laser-therapy",
      title: "Oxygen Laser Therapy",
      image: Treatment2,
      description: `
        Oxygen Laser Therapy is an advanced hair restoration technique that combines the benefits of oxygen therapy with low-level
        laser therapy (LLLT). This treatment works by using a combination of oxygen-rich air and laser light to stimulate blood flow and
        increase the delivery of essential nutrients to the scalp and hair follicles. The enhanced oxygenation helps to rejuvenate dormant
        hair follicles, encouraging the growth of thicker and healthier hair. Additionally, the laser component of the therapy emits light
        energy that is absorbed by the cells, promoting cellular repair and growth. Oxygen Laser Therapy is painless, safe, and suitable
        for individuals experiencing various degrees of hair thinning or loss. It’s a non-invasive alternative to more aggressive treatments,
        with no downtime and minimal risk of side effects.
      `,
      pros: ["Painless", "Promotes hair growth", "Safe and effective"],
      cons: ["Expensive", "Requires specialized equipment"],
    },
    {
      id: "prp-pro",
      title: "PRP Pro+",
      image: Treatment3,
      description: `
        PRP Pro+ is a cutting-edge version of the traditional Platelet-Rich Plasma (PRP) therapy, designed to offer enhanced results for
        hair restoration. PRP therapy involves extracting a small amount of the patient’s blood, processing it to concentrate the platelets,
        and then injecting the platelet-rich plasma back into the scalp. The platelets contain growth factors that help to stimulate hair follicles,
        promoting the growth of new hair and thickening existing strands. PRP Pro+ takes this a step further by incorporating advanced techniques
        and additional bioactive ingredients to amplify the effects of the treatment. This therapy is particularly effective for individuals with thinning
        hair or those experiencing early stages of hair loss. It’s a minimally invasive procedure with little to no downtime, making it a convenient
        option for many patients. The results can be long-lasting, especially when combined with other hair restoration treatments.
      `,
      pros: ["Uses patient's own blood", "Effective in reversing hair loss", "Minimal downtime"],
      cons: ["Can be expensive", "Mild pain during blood draw"],
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
    <div className="container mx-auto md:p-4">
      {/* Banner Section */}
      <div className="relative h-[200px] bg-blue-500 text-white flex items-center justify-center mb-8 md:rounded-2xl rounded-b-2xl">
        <h1 className="text-5xl font-bold font-nunito text-center">Retention Plan</h1>
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
          <h2 className="text-2xl text-center font-semibold mb-2 border-2 border-black p-2 rounded-lg bg-gray-100">
            {treatment.title}
          </h2>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <img
                src={treatment.image}
                alt={treatment.title}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="mb-4">{treatment.description}</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="mb-4 md:mr-8">
              <h3 className="text-xl font-semibold mb-2">Pros</h3>
              <ul className="list-disc pl-5">
                {treatment.pros.map((pro, i) => (
                  <li key={i}>{pro}</li>
                ))}
              </ul>
            </div>

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
      ))}
    </div>
  );
}

export default RetentionPlan;
