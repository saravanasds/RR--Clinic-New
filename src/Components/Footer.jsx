import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
      <div className="bg-black bg-opacity-50 py-12">
        <div className="container mx-auto px-4">
          {/* 1st Row: 4 Columns */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8"
            data-aos="fade-up"
          >
            <div>
              <h1 className="text-5xl font-semibold font-nunito text-center mb-4 text-blue-500" data-aos="fade-right">
              RR Hair Clinic
              </h1>
              <p>Your clinic description goes here. It provides a brief overview of your clinic and services.</p>
            </div>

            {/* Quick Links */}
            <div data-aos="fade-right">
              <h2 className="text-lg font-semibold mb-4 text-blue-500">Quick Links</h2>
              <ul>
                <li className="mb-2">
                  <Link to="/" onClick={scrollToTop} className="hover:underline">
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/about" onClick={scrollToTop} className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/Transformation" onClick={scrollToTop} className="hover:underline">
                    Transformations
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/contact" onClick={scrollToTop} className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Treatment Sections */}
            <div data-aos="fade-right">
              <h2 className="text-lg font-semibold mb-4 text-blue-500">Treatment Sections</h2>
              <ul>
                <li className="mb-2">
                  <Link to="/services/hair-treatment/restoration-plan" onClick={scrollToTop} className="hover:underline">
                    Restoration Plan
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/services/hair-treatment/retention-plan" onClick={scrollToTop} className="hover:underline">
                    Retention Plan
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/services/hair-treatment/super-speciality" onClick={scrollToTop} className="hover:underline">
                    Super Speciality
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/services/hair-treatment/nonclinical" onClick={scrollToTop} className="hover:underline">
                    Non-Clinical Plan
                  </Link>
                </li>
              </ul>
            </div>

            {/* Address & Timing */}
            <div data-aos="fade-right">
              <h2 className="text-lg font-semibold mb-4 text-blue-500">Address & Timing</h2>
              <address className="not-italic mb-2">
                Near Palani GH<br />
                Palani<br />
                624601
              </address>
              <p><span className='text-blue-500'>Mon-Fri:</span> 9:00 AM - 6:00 PM</p>
              <p><span className='text-blue-500'>Sat:</span> 9:00 AM - 1:00 PM</p>
            </div>
          </div>

          {/* 2nd Row: Copyright Section */}
          <div className="text-center mt-8" data-aos="fade-up">
            <p><span className='text-blue-500'>&copy; {new Date().getFullYear()} </span> Your Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
