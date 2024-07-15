import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hairtrans from "../assets/hairtrans.jpg";
import image2 from "../assets/hairtrans2.jpg";
import image3 from "../assets/hairtrans3.jpg";
import image4 from "../assets/hairtrans1.jpg";

const HeroCarousel = () => {
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    { image: hairtrans, text: "Hair and Skin Clinic" },
    { image: image2, text: "Second Slide Text" },
    { image: image3, text: "Third Slide Text" },
    { image: image4, text: "Fourth Slide Text" },
  ];

  return (
    <div className="w-[100%] h-screen">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative m-auto w-[80%] h-screen flex justify-center items-center mt-1"
          >
            <img src={slide.image} alt="" className="absolute object-cover h-full w-full"/>
            <h2
              className="absolute z-10 h-[40vh] align-middle md:text-7xl text-5xl bg-transparent font-bold text-black"
              data-aos="fade-up"
            >
              {slide.text}
            </h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroCarousel;
