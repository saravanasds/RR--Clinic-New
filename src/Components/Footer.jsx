import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaXTwitter } from "react-icons/fa6";
import { FaHome, FaInfoCircle, FaPhone, FaHeart, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'; // Import icons
import { LuDiamond } from "react-icons/lu";
import ImageBG from '../assets/docs.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="bg-gray-600 text-white md:py-12 relative"
      style={{
        backgroundImage: `url(${ImageBG})`,
        backgroundSize: 'cover',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black overlay with 50% opacity
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-black bg-opacity-60 py-8 md:py-12 border-t-4 border-blue-500">
        <div className="container mx-auto px-4">
          {/* Grid for 4 Columns */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12"
            data-aos="fade-up"
          >
            {/* Clinic Overview */}
            <div className="flex flex-col items-center" data-aos="fade-right">
              <h1 className="text-2xl md:text-4xl font-semibold font-nunito mb-4 text-blue-500">
                RR Hair Clinic
              </h1>
              <p className="text-center">
                Your clinic description goes here. It provides a brief overview of your clinic and services.
              </p>
            </div>

            {/* Quick Links with Icons */}
            <div className="flex flex-col items-center" data-aos="fade-right">
              <h2 className="text-lg font-semibold mb-4 text- text-blue-500">Quick Links</h2>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <FaHome className="text-blue-400" />
                  <Link to="/" onClick={scrollToTop} className="hover:underline hover:text-blue-300">
                    Home
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <FaInfoCircle className="text-blue-400" />
                  <Link to="/about" onClick={scrollToTop} className="hover:underline hover:text-blue-300">
                    About Us
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <FaHeart className="text-blue-400" />
                  <Link to="/Transformation" onClick={scrollToTop} className="hover:underline hover:text-blue-300">
                    Transformations
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <FaPhone className="text-blue-400" />
                  <Link to="/contact" onClick={scrollToTop} className="hover:underline hover:text-blue-300">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Treatment Sections */}
            <div className="flex flex-col items-center" data-aos="fade-right">
              <h2 className="text-lg font-semibold float-left mb-4 text-blue-500">Treatment Sections</h2>
              <ul className="space-y-2">

              <li className="flex items-center space-x-2">
              <LuDiamond className="text-blue-400" />
                  <Link
                    to="/services/hair-treatment/restoration-plan"
                    onClick={scrollToTop}
                    className="hover:underline hover:text-blue-300"
                  >
                    Restoration Plan
                  </Link>
                </li>

                <li className="flex items-center space-x-2">
                  <LuDiamond className="text-blue-400" />
                  <Link
                    to="/services/hair-treatment/retention-plan"
                    onClick={scrollToTop}
                    className="hover:underline hover:text-blue-300"
                  >
                    Retention Plan
                  </Link>
                </li>

                <li className="flex items-center space-x-2">
                  <LuDiamond className="text-blue-400" />
                  <Link 
                    to="/services/hair-treatment/other-treatments"
                    onClick={scrollToTop}
                    className="hover:underline hover:text-blue-300"
                  >
                    Other Treatments
                  </Link>
                </li>

                <li className="flex items-center space-x-2">
                  <LuDiamond className="text-blue-400" />
                  <Link
                    to="/Skintreatment"
                    onClick={scrollToTop}
                    className="hover:underline hover:text-blue-300"
                  >
                    Skin Treatments
                  </Link>
                </li>
              </ul>
            </div>

            {/* Address and Timing */}
            <div className="flex flex-col items-center" data-aos="fade-right">
              <h2 className="text-lg font-semibold float-left mb-4 text-blue-500">Address & Timing</h2>
              <address className="not-italic mb-4 text-center">
                Near Palani GH<br />
                Palani<br />
                624601
              </address>
              <p>
                <span className="text-blue-400">Mon-Fri:</span> 9:00 AM - 6:00 PM
              </p>
              <p>
                <span className="text-blue-400">Sat:</span> 9:00 AM - 1:00 PM
              </p>
            </div>
          </div>
      <hr className='my-8 w-[85%] mx-auto' />
          {/* Copyright Section */}
          <div className="flex flex-col items-center md:flex-row justify-center md:justify-evenly text-center mt-8" data-aos="fade-up">
            <p className="mb-4 md:mb-0">
              <span className="text-yellow-400">&copy; {new Date().getFullYear()} </span> 
              RR Hair Clinic. All rights reserved.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-6 text-2xl text-yellow-400">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
