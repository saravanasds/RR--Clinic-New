import React, { useState, useEffect } from "react";

// images
import HairTrans from "../../assets/comp/2S1YfvpYTuq1KKYrilnN1g.jpg"
import SkinTrans from "../../assets/comp/botox.png"
import FullTrans from "../../assets/comp/p2.png"
import Banner from "../../assets/comp/scalpig.jpeg"
// transformations
import Trans1 from "../../assets/comp/before-after-hair-1.jpg"
import Trans2 from "../../assets/comp/before-after-hair-2.jpg"

import Ab1 from "../../assets/comp/ab-before.jpg"
import Ab2 from "../../assets/comp/ab-after.jpg"

import John1 from "../../assets/comp/john-jack-b-min-1.jpg"
import John2 from "../../assets/comp/john-jack-a-min-1.jpg"

import Moha1 from "../../assets/comp/mohamed-before-3.jpg"
import Moha2 from "../../assets/comp/mohamed-after-5.jpg"

import Rick1 from "../../assets/comp/ricky-a-1.jpg"
import Rick2 from "../../assets/comp/ricky-b-1.jpg"



const ImageComparison = ({ beforeImage, afterImage, label }) => {
  const [sliderValue, setSliderValue] = useState(50);

  const moveDivisor = (e) => {
    setSliderValue(e.target.value);
  };

  useEffect(() => {
    moveDivisor({ target: { value: sliderValue } });
  }, []);

  return (
    <div className="relative w-full ">
      <div className="relative w-full pt-[100%] overflow-hidden">
        <figure className="absolute inset-0 w-full h-full bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${beforeImage})` }}>
          <div
            id="divisor"
            className="absolute h-full bg-cover bg-no-repeat bg-center"
            style={{
              width: `${sliderValue}%`,
              backgroundImage: `url(${afterImage})`,
            }}
          >
            <div className="absolute right-[-2px] top-0 w-[4px] h-[calc(50%-25px)] bg-white shadow-lg z-10"></div>
            <div className="absolute right-[-2px] bottom-0 w-[4px] h-[calc(50%-25px)] bg-white shadow-lg z-10"></div>
          </div>
          <div
            id="handle"
            className="absolute w-[50px] h-[50px] bg-transparent border-4 border-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            style={{ left: `${sliderValue}%` }}
          >
            <div className="absolute left-[-17px] top-1/2 border-r-[6px] border-r-white border-transparent transform -translate-y-1/2"></div>
            <div className="absolute right-[-17px] top-1/2 border-l-[6px] border-l-white border-transparent transform -translate-y-1/2"></div>
          </div>
        </figure>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={moveDivisor}
          className="absolute top-1/2 left-[-25px] w-[calc(100%+50px)] z-30 transform -translate-y-1/2 appearance-none bg-transparent focus:outline-none"
        />
      </div>
      <p className="mt-4 text-center">{label}</p>
    </div>
  );
};

const Transformation = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12 lg:pt-32">
      {/* Hero Section */}
      <section
  className="text-center bg-cover bg-top bg-no-repeat py-16 rounded-lg relative"
  style={{ backgroundImage: `url(${Banner})`  }}
>
  <h1
    className="text-2xl md:text-6xl font-bold text-white"
    style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.5)' }}
  >
    Transformation Treatments
  </h1>
  <p className="text-lg md:text-2xl text-blue-600 mt-4" style={{ textShadow: '4px 4px 6px rgba(0,0,0,0.9)' }}>
    Achieve your dream transformation with our cutting-edge treatments for hair and skin!
  </p>
</section>


      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Our Transformation Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Hair Transformation */}
          <div className="bg-white shadow-lg p-4 rounded-lg hover:shadow-2xl transition-all">
            <img src={HairTrans} alt="Hair Transformation" className="rounded-lg w-full h-48 object-cover object-top" />
            <h3 className="text-xl font-semibold mt-4">Hair Transformation</h3>
            <p className="mt-2 text-gray-600">
              Rejuvenate your hair with treatments like keratin, hair coloring, and extensions. Experience voluminous, healthy hair that shines with life.
            </p>
          </div>

          {/* Skin Transformation */}
          <div className="bg-white shadow-lg p-4 rounded-lg hover:shadow-2xl transition-all">
            <img src={SkinTrans} alt="Skin Transformation" className="rounded-lg w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold mt-4">Skin Transformation</h3>
            <p className="mt-2 text-gray-600">
              Get glowing skin with our personalized treatments, including anti-aging therapies, acne treatment, and rejuvenating facials.
            </p>
          </div>

          {/* Full Body Transformation */}
          <div className="bg-white shadow-lg p-4 rounded-lg hover:shadow-2xl transition-all">
            <img src={FullTrans} alt="Full Body Transformation" className="rounded-lg w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold mt-4">Full Transformation</h3>
            <p className="mt-2 text-gray-600">
              Achieve your complete transformation goals with a combination of our best treatments for both hair and skin, tailored just for you.
            </p>
          </div>
        </div>
      </section>

      {/* Before and After Section */}
      <section className="bg-gray-100 py-12 rounded-lg">
        <h2 className="text-3xl font-bold text-center">Before & After</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg p-4 rounded-lg hover:shadow-2xl transition-all">
            <ImageComparison 
              beforeImage={Trans1}
              afterImage={Trans2}
              label="Result 1"
            />
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg hover:shadow-2xl transition-all">
            <ImageComparison 
              beforeImage={Ab1}
              afterImage={Ab2}
              label="Result 2"
            />
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg hover:shadow-2xl transition-all">
            <ImageComparison 
              beforeImage={John1}
              afterImage={John2}
              label="Result 3"
            />
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg hover:shadow-2xl transition-all">
            <ImageComparison 
              beforeImage={Moha1}
              afterImage={Moha2}
              label="Result 4"
            />
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg hover:shadow-2xl transition-all">
            <ImageComparison 
              beforeImage={Rick1}
              afterImage={Rick2}
              label="Result 5"
            />
          </div>
          <div className="bg-white shadow-lg p-4 rounded-lg hover:shadow-2xl transition-all">
            <ImageComparison 
              beforeImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/photoshop-face-before.jpg"
              afterImage="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/photoshop-face-before.jpg"
              label="Transformations 6"
            />
          </div>
        </div>
      </section>



            {/* Benefits Section */}
            <section className="bg-gray-100 py-12 rounded-lg">
        <h2 className="text-3xl font-bold text-center">Why Choose Our Transformation Services?</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <h3 className="text-xl font-semibold">Advanced Technology</h3>
            <p className="mt-2 text-gray-600">
              We use state-of-the-art equipment and technology to ensure the best results.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <h3 className="text-xl font-semibold">Personalized Treatments</h3>
            <p className="mt-2 text-gray-600">
              Each treatment is customized according to your unique hair and skin type.
            </p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all">
            <h3 className="text-xl font-semibold">Visible Results</h3>
            <p className="mt-2 text-gray-600">
              Experience visible transformation after just a few sessions!
            </p>
          </div>
        </div>
      </section>



      {/* Call to Action */}
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold">Ready for Your Transformation?</h2>
        <p className="text-lg text-gray-600 mt-2">
          Book your appointment today and start your journey toward the new you!
        </p>
        <button className="mt-6 bg-yellow-600 text-white px-6 py-3 rounded-full font-medium hover:bg-yellow-500 transition-all">
          Book Now
        </button>
      </section>
    </div>
  );
};

export default Transformation;
