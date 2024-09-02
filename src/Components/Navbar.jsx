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

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      {/* Mobile Navbar */}
      <div className="flex justify-between items-center lg:hidden p-4 px-8 md:px-[100px] md:py-8 bg-[#2323c4] shadow-lg z-[990] sticky top-0">
        <h2
          className="font-bold text-2xl  text-white"
          style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.7)" }}
        >
          RR Hair Clinic
        </h2>
        <button onClick={toggleMobileSidebar} className="text-white">
          {isMobileSidebarOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden lg:flex w-full items-center justify-between p-6 bg-[#2323c4] shadow-lg sticky top-0 z-[990]">
        <h2
          className="font-bold text-2xl text-white ml-5"
          style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.7)" }}
        >
          RR Hair Clinic
        </h2>

        <ul className="text-white md:flex md:items-center md:gap-10 p-2 text-lg w-full md:w-auto">
          <li className="md:mr-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block p-2 px-4 text-yellow-600 rounded-md font-bold text-xl"
                  : "block p-2 hover:text-yellow-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="md:mr-6">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "block p-2 px-4 text-yellow-600 rounded-md font-bold text-xl"
                  : "block p-2 hover:text-yellow-400"
              }
            >
              About
            </NavLink>
          </li>

          <li className="relative md:mr-6" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center p-2 px-4 hover:text-yellow-400"
            >
              <span>Services</span>{isDropdownOpen ? (
                <FaChevronUp className="ml-2" />
              ) : (
                <FaChevronDown className="ml-2" />
              )}
            </button>

            <ul
              className={`absolute left-0 mt-1 bg-blue-400 text-gray-700 font-bold rounded-md p-2 z-20 ${
                isDropdownOpen ? "block" : "hidden"
              } w-full md:w-48`}
            >
              <li className="block relative">
                <button
                  onClick={toggleSubDropdown}
                  className="flex items-center p-2 hover:bg-blue-300 w-full text-left"
                >
                  <span>Hair Treatment</span>{isSubDropdownOpen ? (
                <FaChevronRight className="ml-2" />
              ) : (
                <FaChevronDown className="ml-2" />
              )}
                </button>
                <ul
                  className={`absolute left-full top-0 mt-0 w-full text-white bg-blue-500 rounded-md p-2 z-30 ${
                    isSubDropdownOpen ? "block" : "hidden"
                  }`}
                >
                  <li>
                    <NavLink
                      to="/services/hair-treatment/retention-plan"
                      className="block p-2 hover:bg-blue-400 w-auto"
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
                      className="block p-2 hover:bg-blue-400 w-auto"
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
                      to="/services/hair-treatment/super-speciality"
                      className="block p-2 hover:bg-blue-400 w-auto"
                      onClick={() => {
                        setIsSubDropdownOpen(false);
                        setIsDropdownOpen(false);
                      }}
                    >
                      Super Speciality
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/hair-treatment/nonclinical"
                      className="block p-2 hover:bg-blue-400 w-auto"
                      onClick={() => {
                        setIsSubDropdownOpen(false);
                        setIsDropdownOpen(false);
                      }}
                    >
                      Non-Clinical
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="block">
                <NavLink
                  to="/Skintreatment"
                  className="block p-2 hover:bg-blue-300"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Skin Treatment
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="md:mr-6">
            <NavLink
              to="/Transformation"
              className={({ isActive }) =>
                isActive
                  ? "block p-2 px-4 text-yellow-600 rounded-md font-bold text-xl"
                  : "block p-2 hover:text-yellow-400"
              }
            >
              Transformation
            </NavLink>
          </li>
          <li>
            <button
              className="bg-pink-600 rounded-full p-2 px-5 text-white font-medium hover:bg-pink-500 transition-all"
              onClick={() => setIsModalOpen(true)}
            >
              Book Appointment
            </button>
          </li>
        </ul>
      </nav>

      <MobileSidebar
        isOpen={isMobileSidebarOpen}
        toggleSidebar={toggleMobileSidebar}
        openModal={() => setIsModalOpen(true)}
      />

      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}>
        <Book />
      </Modal>
    </>
  );
};

export default Navbar;
