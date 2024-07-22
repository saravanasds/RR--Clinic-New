import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import hairbg from "../assets/hairbg.jpg";
import image2 from "../assets/hairtrans2.jpg";
// import image3 from "../assets/hairtrans3.jpg";
// import image4 from "../assets/hairtrans1.jpg";

const HeroCarousel = () => {
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const slides = [
    { image: hairbg, text: "Hair and Skin Clinic" },
    { image: image2, text: "Second Slide Text" },
    // { image: image3, text: "Third Slide Text" },
    // { image: image4, text: "Fourth Slide Text" },
  ];

  return (
    <div className="w-[100%] h-[700px]   text-white -mt-[10%]">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative m-auto w-[80%] h-screen flex justify-center items-center "
          >
            <img src={slide.image} alt="" className="absolute object-cover h-full w-full"/>
            <h2
              className="absolute z-10 h-[100vh] text-center w-[100%] flex justify-center items-center  md:text-7xl text-5xl bg-transparent font-bold "
              data-aos="fade-zoom"
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
