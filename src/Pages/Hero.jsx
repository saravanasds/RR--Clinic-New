import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hairbg from "../assets/hairbg.jpg";
import image2 from "../assets/hairtrans2.jpg";
import image3 from "../assets/hairtrans3.jpg";
import image4 from "../assets/hairtrans1.jpg";

const HeroCarousel = () => {
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true, // Enable fade transition
    cssEase: "ease-in-out", // Smoother easing function
  };

  const slides = [
    { image: hairbg, text: "Revive Your Confidence with Healthy Hair" },
    { image: image2, text: "Expert Care for Your Hair Restoration Journey" },
    { image: image3, text: "Transforming Hair, Transforming Lives" },
    { image: image4, text: "Your Hair, Our Priority" },
  ];

  return (
    <div className="w-[100%] h-auto overflow-hidden text-white">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative m-auto w-[80%] my-2 h-screen flex justify-center items-center"
          >
            <img
              src={slide.image}
              alt={slide.text}
              className="absolute object-cover h-full w-full rounded-lg"
            />
            <h2
              className="absolute z-10 h-[100vh] text-white text-center w-full flex justify-center items-center md:text-7xl text-3xl bg-transparent font-bold font-nunito "
              style={{
                WebkitTextStroke: "0.5px black", // Adds a white stroke to the text
                // color: "transparent", // Makes the inside of the text transparent to highlight the stroke
                textShadow: "4px 4px 4px black",
              }}
              data-aos="fade-left"
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
