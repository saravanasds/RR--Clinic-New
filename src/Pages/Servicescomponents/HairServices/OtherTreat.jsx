import React, { useState } from 'react';

import BannerImage from '../../../assets/hairtrans.jpg';

// Data for SuperSpeciality
const superSpecialityTreatments = [
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
  // Add other SuperSpeciality treatments here
];

// Data for NonClinical
const nonClinicalTreatments = [
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
  // Add other NonClinical treatments here
];

function OtherTreat() {
  const [activeSection, setActiveSection] = useState('superSpeciality');

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 120; // Adjust this value based on the height of the navbar
      const topPosition = section.offsetTop - offset;
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto md:px-4 md:pt-24">

<div
      className="relative h-[200px] bg-blue-500 text-white flex items-center justify-center mb-8 md:rounded-2xl rounded-b-2xl bg-cover bg-center"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <h1 className="text-5xl font-bold font-nunito text-center">Other Treatments</h1>
      </div>


      {/* Navigation for toggling sections */}
      <div className="flex justify-center my-4">
        <button
          onClick={() => setActiveSection('superSpeciality')}
          className={`px-4 py-2 mx-2 rounded-lg font-semibold ${
            activeSection === 'superSpeciality' ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
        >
          SuperSpeciality
        </button>
        <button
          onClick={() => setActiveSection('nonClinical')}
          className={`px-4 py-2 mx-2 rounded-lg font-semibold ${
            activeSection === 'nonClinical' ? 'bg-blue-500 text-white' : 'bg-gray-300'
          }`}
        >
          NonClinical
        </button>
      </div>

      {/* SuperSpeciality Section */}
      {activeSection === 'superSpeciality' && (
        <div id="superSpeciality" className="mb-8">
          <h1 className="text-3xl font-bold text-center my-8">SuperSpeciality Plan</h1>
          {superSpecialityTreatments.map((treatment, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl text-center font-semibold mb-2 border-2 border-black p-2 rounded-lg bg-gray-100">
                {treatment.title}
              </h2>
              <p className="mb-4">{treatment.description}</p>
              <ul className="list-disc pl-5">
                {treatment.advantages.map((advantage, i) => (
                  <li key={i}>{advantage}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* NonClinical Section */}
      {activeSection === 'nonClinical' && (
        <div id="nonClinical" className="mb-8">
          <h1 className="text-3xl font-bold text-center my-8">NonClinical Plan</h1>
          {nonClinicalTreatments.map((treatment, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl text-center font-semibold mb-2 border-2 border-black p-2 rounded-lg bg-gray-100">
                {treatment.title}
              </h2>
              <p className="mb-4">{treatment.description}</p>
              <ul className="list-disc pl-5">
                {treatment.advantages.map((advantage, i) => (
                  <li key={i}>{advantage}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default OtherTreat;
