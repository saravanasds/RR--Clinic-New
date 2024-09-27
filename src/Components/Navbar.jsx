import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import MobileSidebar from "./MobileSidebar";
import Modal from "../Components/Modal";
import Book from "../Pages/Book";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true); // Track whether navbar should be visible
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
    setIsSubDropdownOpen(false); // Close sub-dropdown when main dropdown is toggled
  };

  const toggleSubDropdown = () => {
    setIsSubDropdownOpen((prevState) => !prevState);
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen((prevState) => !prevState);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
      setIsSubDropdownOpen(false);
    }
  };

  // Add scroll detection for showing/hiding navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down - hide navbar
        setShowNavbar(false);
      } else {
        // Scrolling up - show navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY); // Update the last scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 
  return (
    <>
    
      {/* Mobile Navbar */}
      <div className="flex justify-between items-center lg:hidden p-4 px-8 md:px-[100px] md:py-8 bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg z-[990] sticky top-0 backdrop-blur-lg rounded-b-lg">
        <h2
          className="font-bold text-xl text-white"
          style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.7)" }}
        >
          RR Hair Clinic
        </h2>

        <button onClick={toggleMobileSidebar} className="text-white">
          {isMobileSidebarOpen ? <FaBarsStaggered size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      <nav
        className={`hidden lg:flex w-full items-center justify-between p-4 bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg fixed top-0 z-[990] rounded-b-2xl  transition-transform duration-300 backdrop-blur-lg ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        
        {/* Logo on the left */}
        <h2
          className="font-bold text-2xl text-white ml-5 flex-none tracking-wide"
          style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.7)" }}
        >
          RR Hair Clinic
        </h2>

        {/* Centered links */}
        <ul className="text-white flex items-center gap-6 p-2 text-lg mx-auto">
          <li>
            <NavLink
              to="/" onClick={scrollToTop}
              className={({ isActive }) =>
                isActive
                  ? "block p-2 px-4 text-yellow-600 font-bold text-lg border-b-2 border-yellow-400 transition-all duration-300"
                  : "block p-2 px-4 hover:text-yellow-300 text-lg transition-all duration-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about" onClick={scrollToTop}
              className={({ isActive }) =>
                isActive
                  ? "block p-2 px-4 text-yellow-600 font-bold text-lg border-b-2 border-yellow-400 transition-all duration-300"
                  : "block p-2 px-4 hover:text-yellow-300 text-lg transition-all duration-300"
              }
            >
              About
            </NavLink>
          </li>

          <li className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center p-2 px-4 hover:text-yellow-300 text-lg transition-all duration-300"
            >
              <span className="font-semibold">Services</span>
              {isDropdownOpen ? (
                <FaChevronUp className="ml-2" />
              ) : (
                <FaChevronDown className="ml-2" />
              )}
            </button>

            {/* Dropdown */}
            <ul
              className={`absolute left-0 mt-1 bg-[#aaaae7] text-[#0d0dbb] text-lg rounded-md p-2 z-20 shadow-lg transition-all duration-300 ${
                isDropdownOpen ? "block" : "hidden"
              } w-auto`}
            >
              {/* Submenu */}
              <li className="relative mx-auto">
                <button
                  onClick={toggleSubDropdown}
                  className="flex items-center p-2 hover:bg-blue-300 rounded-md w-full text-left text-base transition-all duration-300 whitespace-nowrap"
                >
                  <span className="font-semibold">Hair Treatment</span>
                  {isSubDropdownOpen ? (
                    <FaChevronRight className="ml-2" />
                  ) : (
                    <FaChevronDown className="ml-2" />
                  )}
                </button>
                <ul
                  className={`absolute left-full top-0 mt-0 w-auto text-white bg-blue-500 rounded-md p-2 z-30 shadow-lg transition-all duration-300 ${
                    isSubDropdownOpen ? "block" : "hidden"
                  }`}
                >
                  <li>
                    <NavLink
                      to="/services/hair-treatment/retention-plan"
                      className="block p-2 hover:bg-blue-400 text-base transition-all rounded-md duration-300 whitespace-nowrap"
                      onClick={() => {
                        setIsSubDropdownOpen(false);
                        setIsDropdownOpen(false);
                        scrollToTop()
                      }}
                      // onClick={scrollToTop}
                    >
                      Retention Plan
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/hair-treatment/restoration-plan"
                      className="block p-2 hover:bg-blue-400 text-base transition-all rounded-md duration-300 whitespace-nowrap"
                      onClick={() => {
                        setIsSubDropdownOpen(false);
                        setIsDropdownOpen(false);
                        scrollToTop()
                      }}
                    >
                      Restoration Plan
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/hair-treatment/other-treatments"
                      className="block p-2 hover:bg-blue-400 text-base transition-all rounded-md duration-300 whitespace-nowrap"
                      onClick={() => {
                        setIsSubDropdownOpen(false);
                        setIsDropdownOpen(false);
                        scrollToTop()
                      }}
                    >
                      Other Treatments
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="mx-auto">
                <NavLink
                  to="/Skintreatment"
                  className="block p-2 hover:bg-blue-300 rounded-md text-base transition-all duration-300 whitespace-nowrap"
                  onClick={() => {setIsDropdownOpen(false);
                    scrollToTop()
                  }}
                >
                  <span className="font-semibold">Skin Treatment</span> {/* Ensure consistent styling */}
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink
              to="/Transformation" onClick={scrollToTop}
              className={({ isActive }) =>
                isActive
                  ? "block p-2 px-4 text-yellow-600 font-bold text-lg border-b-2 border-yellow-200 transition-all duration-300"
                  : "block p-2 px-4 hover:text-yellow-300 text-lg transition-all duration-300"
              }
            >
              Transformation
            </NavLink>
          </li>
        </ul>

         {/* Book button on the right */}
  <button
    className="bg-white text-yellow-600 hover:text-white border border-yellow-600 hover:bg-yellow-400 py-3 px-4 text-lg rounded-full font-semibold transition-all duration-300 mr-5"
    // onClick={() => setIsModalOpen(true)}
    onClick={openModal}
  >
    Book Appointment
  </button>
      </nav>

      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <Book />
      </Modal>

      {/* Modal for booking */}
      {/* {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <Book />
        </Modal>
      )} */}

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={isMobileSidebarOpen} toggleSidebar={toggleMobileSidebar} />
    </>
  );
};

export default Navbar;
