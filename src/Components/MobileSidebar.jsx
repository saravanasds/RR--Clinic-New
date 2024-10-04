import React, { useRef, useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';


import Logo from "../assets/Logo/Logo RR Aesthetics.png"
import Logo2 from "../assets/Logo/Logo Aesthetice .png"

import Modal from "../Components/Modal";
import Book from "../Pages/Book";

const MobileSidebar = ({ isOpen, toggleSidebar }) => {
  const [isHairTreatmentOpen, setIsHairTreatmentOpen] = useState(false);
  const [isSkinTreatmentOpen, setIsSkinTreatmentOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Close sidebar when clicked outside the sidebar's width
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleSidebar(); // Close sidebar on outside click
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggleSidebar]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavLinkClick = () => {
    setIsHairTreatmentOpen(false);
    setIsSkinTreatmentOpen(false);
    toggleSidebar();
    scrollToTop(); // Scroll to top on all NavLink clicks
  };

  // Open the modal and scroll to the top
  const handleOpenModal = () => {
    setIsModalOpen(true);
    scrollToTop();
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <>
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full bg-black/50 backdrop-blur-xl shadow-lg overflow-scroll transition-transform transform z-[1000] max-h-screen ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          width: '70%',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div className="flex flex-col justify-evenly items-center  h-full max-h-screen">
        <Link to="/"  onClick={scrollToTop}>
    <img
    src={Logo} // Replace with the actual path to your logo
    alt="RR Hair Clinic Logo"
    className="h-24 hover:scale-110 transition duration-300 cursor-pointer" // Adjust the height based on the size of the logo
  />
  {/* <img
    src={Logo2} // Replace with the actual path to your logo
    alt="RR Hair Clinic Logo"
    className="h-2 hidden md:block" // Adjust the height based on the size of the logo
  /> */}
  </Link>

          <ul className="space-y-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'block p-2 text-yellow-600 rounded-md font-bold text-xl text-center'
                    : 'block p-2 hover:text-yellow-200 font-semibold text-center'
                }
                onClick={handleNavLinkClick}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'block p-2 text-yellow-600 rounded-md font-bold text-xl text-center'
                    : 'block p-2 hover:text-yellow-200 font-semibold text-center'
                }
                onClick={handleNavLinkClick}
              >
                About
              </NavLink>
            </li>

            {/* Services Dropdown */}
            <li>
              <button
                onClick={() => setIsHairTreatmentOpen((prevState) => !prevState)}
                className={`p-2 w-full text-center flex justify-center gap-2 items-center font-semibold ${
                  isHairTreatmentOpen || window.location.pathname.includes('/services')
                    ? 'bg-blue-500 text-white rounded-xl font-bold text-xl'
                    : 'hover:text-yellow-200'
                }`}
              >
                Services
                {isHairTreatmentOpen ? (
                  <FaChevronUp className="inline font-bold text-xl text-yellow-500" />
                ) : (
                  <FaChevronDown className="inline" />
                )}
              </button>
              <ul className={`bg-blue-300 rounded-lg mt-1 ${isHairTreatmentOpen ? 'block' : 'hidden'}`}>
                {/* Hair Treatment Section */}
                <li>
                  <button
                    onClick={() => setIsSkinTreatmentOpen((prevState) => !prevState)}
                    className="block p-2 w-full text-left font-semibold hover:bg-blue-500 rounded-t-lg"
                  >
                    Hair Treatment
                    {isSkinTreatmentOpen ? (
                      <FaChevronUp className="inline ml-2 text-yellow-600 font-bold" />
                    ) : (
                      <FaChevronDown className="inline ml-2" />
                    )}
                  </button>
                  <ul className={`bg-slate-300 flex flex-col items-center ${isSkinTreatmentOpen ? 'block' : 'hidden'}`}>
                    <li>
                      <NavLink
                        to="/services/hair-treatment/retention-plan"
                        className={({ isActive }) =>
                          isActive
                            ? 'block p-2 text-yellow-600 rounded-md font-bold text-xl text-center'
                            : 'block p-2'
                        }
                        onClick={handleNavLinkClick}
                      >
                        Retention Plan
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services/hair-treatment/restoration-plan"
                        className={({ isActive }) =>
                          isActive
                            ? 'block p-2 text-yellow-600 rounded-md font-bold text-xl text-center'
                            : 'block p-2'
                        }
                        onClick={handleNavLinkClick}
                      >
                        Restoration Plan
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/services/hair-treatment/other-treatments"
                        className={({ isActive }) =>
                          isActive
                            ? 'block p-2 text-yellow-600 rounded-md font-bold text-xl text-center'
                            : 'block p-2'
                        }
                        onClick={handleNavLinkClick}
                      >
                        Other Treatments
                      </NavLink>
                    </li>
                  </ul>
                </li>

                {/* Skin Treatment */}
                <li>
                  <NavLink
                    to="/Skintreatment"
                    className={({ isActive }) =>
                      isActive
                        ? 'block p-2 text-yellow-600 rounded-md font-bold text-xl text-center'
                        : 'block p-2 font-semibold hover:bg-blue-300 text-center'
                    }
                    onClick={handleNavLinkClick}
                  >
                    Skin Treatment
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <NavLink
                to="/Transformation"
                className={({ isActive }) =>
                  isActive
                    ? 'block p-2 text-yellow-600 rounded-md font-bold text-xl text-center'
                    : 'block p-2 hover:text-yellow-200 font-semibold text-center'
                }
                onClick={handleNavLinkClick}
              >
                Transformation
              </NavLink>
            </li>
          </ul>

          <button
            className="bg-yellow-600 rounded-full p-2 mt-4 px-4 text-white font-medium hover:bg-yellow-500 transition-all"
            onClick={handleOpenModal} // Corrected modal open handler
          >
            Book Appointment
          </button>
        </div>
        {/*  */}

        <div className=' text-center'>
        <p className="mb-4 md:mb-0 mx-auto font-bold ">
            Developed by
        <span className="text-blue-800 px-1 font-poppins "><a href="https://sdstechzone.in" target="_blank" rel="noopener noreferrer">SDS Techzone</a></span> 
        </p>
        </div>
      </div>

      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <Book />
      </Modal>
    </>
  );
};

export default MobileSidebar;
