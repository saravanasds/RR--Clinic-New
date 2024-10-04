import React from 'react';
import Slider from 'react-slick';
import { FaQuoteLeft } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "John Doe",
    treatment: "Hair Treatment",
    quote: "The hair treatment was fantastic! I can already see a huge improvement in my hair health and texture.",
  },
  {
    name: "Jane Smith",
    treatment: "Skin Treatment",
    quote: "My skin has never felt better. The clinic’s skin treatment really brought a new glow to my complexion!",
  },
  {
    name: "Mary Johnson",
    treatment: "Transformation",
    quote: "I had an incredible experience with the transformation treatment. I feel more confident and beautiful!",
  },
];

function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <div className="w-full py-16 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mt-4">Our clients love our treatments and services</p>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:shadow-black transition-shadow duration-300 transform hover:scale-115 hover:text-shadow-lg"
            >
              <div className="text-center">
                <FaQuoteLeft className="text-3xl text-purple-500 mx-auto mb-4" />
                <p className="mt-4 text-gray-600 italic">
                  "{testimonial.quote}"
                </p>
                <h3 className="text-xl font-semibold text-gray-800 mt-6">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-600">{testimonial.treatment}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonial;
