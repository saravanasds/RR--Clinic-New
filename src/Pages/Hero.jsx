import React, {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Modal from "../Components/Modal";
import Book from "./Book";

import { FaArrowRight } from "react-icons/fa"; 

import hairbg from "../assets/hairbg.jpg";
import image2 from "../assets/hairtrans2.jpg";
import image3 from "../assets/hairtrans3.jpg";
import image4 from "../assets/hairtrans1.jpg";
import image5 from "../assets/hairtrans4.jpg";
import image6 from "../assets/hairtrans5.jpg";

const HeroCarousel = () => {
  const settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true,
    cssEase: "ease-in-out",
  };

  const slides = [
    { image: image5, text: "Revive Your Confidence with Healthy Hair" },
    { image: image2, text: "Expert Care for Your Hair Restoration Journey" },
    { image: image6, text: "Transforming Hair, Transforming Lives" },
    { image: image4, text: "Your Hair, Our Priority" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-[100%] h-auto overflow-hidden text-white lg:mt-14">
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
            <div className="absolute z-10 flex flex-col items-center justify-center w-full h-[100vh] text-center">
              <h2
                className="text-white md:text-7xl text-3xl font-bold font-nunito bg-transparent"
                style={{
                  WebkitTextStroke: "0.5px black",
                  textShadow: "4px 4px 4px black",
                }}
                data-aos="fade-left"
              >
                {slide.text}
              </h2>
              {/* Call-to-Action Button */}
              <button
                className="mt-8 px-8 py-3 text-lg font-semibold text-white 
                bg-gradient-to-r from-purple-500  to-blue-500 shadow-lg 
               rounded-full transition duration-300 ease-in-out flex items-center gap-4"
               onClick={openModal} // Replace with actual action
              >
                 <span>Book Your Consultation</span>
                 <FaArrowRight className="animate-bounce"/> {/* Arrow icon */}
              </button>
            </div>
          </div>
        ))}
      </Slider>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <Book />
      </Modal>
    </div>
  );
};

export default HeroCarousel;
