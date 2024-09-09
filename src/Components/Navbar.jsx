import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp, FaChevronRight } from "react-icons/fa";
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

  return (
    <>
      {/* Mobile Navbar */}
      <div className="flex justify-between items-center lg:hidden p-4 px-8 md:px-[100px] md:py-8 bg-[#4f4fcf] shadow-lg z-[990] sticky top-0">
        <h2
          className="font-bold text-xl  text-white"
          style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.7)" }}
        >
          RR Hair Clinic
        </h2>

        <button onClick={toggleMobileSidebar} className="text-white">
          {isMobileSidebarOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Desktop Navbar */}
<nav
  className={`hidden lg:flex w-full items-center justify-between p-6 bg-[#4f4fcf] shadow-lg fixed top-0 z-[990] transition-transform duration-300 ${
    showNavbar ? "translate-y-0" : "-translate-y-full"
  }`}
>
  <h2
    className="font-bold text-xl text-white ml-5"
    style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.7)" }}
  >
    RR Hair Clinic
  </h2>

  <ul className="text-white md:flex md:items-center md:gap-10 p-2 text-base w-full md:w-auto">
    <li className="">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "block p-2 px-4 text-yellow-600 font-bold text-base border-b-2 border-yellow-400 transition-all duration-300"
            : "block p-2 px-4 hover:text-yellow-300 text-base transition-all duration-300"
        }
      >
        Home
      </NavLink>
    </li>
    <li className="">
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "block p-2 px-4 text-yellow-600 font-bold text-base border-b-2 border-yellow-400 transition-all duration-300"
            : "block p-2 px-4 hover:text-yellow-300 text-base transition-all duration-300"
        }
      >
        About
      </NavLink>
    </li>

    <li className="relative " ref={dropdownRef}>
  <button
    onClick={toggleDropdown}
    className="flex items-center p-2 px-4 hover:text-yellow-300 text-base transition-all duration-300"
  >
    <span>Services</span>
    {isDropdownOpen ? (
      <FaChevronUp className="ml-2" />
    ) : (
      <FaChevronDown className="ml-2" />
    )}
  </button>

  <ul
    className={`absolute left-0 mt-1 bg-blue-200 text-[#0d0dbb] text-xl rounded-md p-2 z-20 shadow-lg transition-all duration-300 ${
      isDropdownOpen ? "block" : "hidden"
    } w-auto `}
  >
    <li className="relative mx-auto">
      <button
        onClick={toggleSubDropdown}
        className="flex items-center p-2 hover:bg-blue-300 w-full text-left text-sm transition-all duration-300 whitespace-nowrap"
      >
        <span>Hair Treatment</span>
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
            className="block p-2 hover:bg-blue-400 text-sm transition-all duration-300 whitespace-nowrap"
            onClick={() => {
              setIsSubDropdownOpen(false);
              setIsDropdownOpen(false);
            }}
          >
            Retention Plan
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services/hair-treatment/restoration-plan"
            className="block p-2 hover:bg-blue-400 text-sm transition-all duration-300 whitespace-nowrap"
            onClick={() => {
              setIsSubDropdownOpen(false);
              setIsDropdownOpen(false);
            }}
          >
            Restoration Plan
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services/hair-treatment/other-treatments"
            className="block p-2 hover:bg-blue-400 text-sm transition-all duration-300 whitespace-nowrap"
            onClick={() => {
              setIsSubDropdownOpen(false);
              setIsDropdownOpen(false);
            }}
          >
            Other Treatments
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/services/hair-treatment/nonclinical"
            className="block p-2 hover:bg-blue-400 text-sm transition-all duration-300 whitespace-nowrap"
            onClick={() => {
              setIsSubDropdownOpen(false);
              setIsDropdownOpen(false);
            }}
          >
            Non-Clinical
          </NavLink>
        </li> */}
      </ul>
    </li>

    {/*  */}
    <li className="mx-auto">
      <NavLink
        to="/Skintreatment"
        className="block p-2 hover:bg-blue-300 text-sm transition-all duration-300 whitespace-nowrap"
        onClick={() => setIsDropdownOpen(false)}
      >
        Skin Treatment
      </NavLink>
    </li>
  </ul>
</li>


    <li className="">
      <NavLink
        to="/Transformation"
        className={({ isActive }) =>
          isActive
            ? "block p-2 px-4 text-yellow-600 font-bold text-base border-b-2 border-yellow-200 transition-all duration-300"
            : "block p-2 px-4 hover:text-yellow-300 text-base transition-all duration-300"
        }
      >
        Transformation
      </NavLink>
    </li>
  </ul>

  <button
    className="bg-yellow-600 text-white hover:bg-yellow-400 p-3  text-base rounded-xl font-semibold transition-all duration-300"
    onClick={() => setIsModalOpen(true)}
  >
    Book Appointment
  </button>
</nav>


      {/* Modal */}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
          content={<Book />}
        />
      )}

      {/* Mobile Sidebar */}
      <MobileSidebar
        isOpen={isMobileSidebarOpen}
        onClose={toggleMobileSidebar}
      />
    </>
  );
};

export default Navbar;
