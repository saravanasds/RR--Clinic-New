import React, { useRef, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const MobileSidebar = ({ isOpen, toggleSidebar, openModal }) => {
  const [isHairTreatmentOpen, setIsHairTreatmentOpen] = useState(false);
  const [isSkinTreatmentOpen, setIsSkinTreatmentOpen] = useState(false);
  const sidebarRef = useRef(null);

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

  const handleNavLinkClick = () => {
    setIsHairTreatmentOpen(false);
    setIsSkinTreatmentOpen(false);
    toggleSidebar();
  };

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 left-0 h-full bg-white/30 backdrop-blur-xl shadow-lg  overflow-scroll transition-transform transform z-[1000] ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
      style={{ width: '70%' }}
    >
      <div className="flex flex-col justify-evenly items-center p-6 h-full">
        <h2
          className="font-bold text-2xl py-3 text-center text-white underline underline-offset-4"
          style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.7)" }}
        >
          RR Hair Clinic
        </h2>

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

          {/* Services Menu */}
<li className="">
  <button
    onClick={() => setIsHairTreatmentOpen((prevState) => !prevState)}
    className={`p-2 w-full text-center flex justify-center gap-2 items-center font-semibold ${
      isHairTreatmentOpen || window.location.pathname.includes('/services')
        ? 'bg-slate-500 text-white rounded-xl font-bold text-xl'
        : 'hover:text-yellow-200'
    }`}
  >
    Services
    {isHairTreatmentOpen ? (
      <FaChevronUp className="inline font-bold text-xl text-yellow-500" />
    ) : (
      <FaChevronDown className="inline " />
    )}
  </button>
  <ul className={`bg-slate-300 rounded-lg ${isHairTreatmentOpen ? 'block' : 'hidden'}`}>
    <li>
      <button
        onClick={() => setIsSkinTreatmentOpen((prevState) => !prevState)}
        className={`block p-2 w-full text-left font-semibold hover:bg-blue-300 ${
          window.location.pathname.includes('/services/hair-treatment')
            ? ''
            : ''
        }`}
      >
        Hair Treatment
        {isSkinTreatmentOpen ? (
          <FaChevronUp className="inline ml-2 text-yellow-600 font-bold"/>
        ) : (
          <FaChevronDown className="inline ml-2" />
        )}
      </button>
      <ul className={`bg-slate-100 flex flex-col items-center ${isSkinTreatmentOpen ? 'block' : 'hidden'}`}>
        <li>
          <NavLink
            to="/services/hair-treatment/retention-plan"
            className={({ isActive }) =>
              isActive
                ? 'block p-2 text-yellow-600 rounded-md font-bold text-xl text-center'
                : 'block p-2 hover:bg-blue-300'
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
                : 'block p-2 hover:bg-blue-300'
            }
            onClick={handleNavLinkClick}
          >
            Restoration Plan
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services/hair-treatment/super-speciality"
            className={({ isActive }) =>
              isActive
                ? 'block p-2 text-yellow-600 rounded-md font-bold text-xl text-center'
                : 'block p-2 hover:bg-blue-300'
            }
            onClick={handleNavLinkClick}
          >
            Super Speciality
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services/hair-treatment/nonclinical"
            className={({ isActive }) =>
              isActive
                ? 'block p-2 text-yellow-600 rounded-md font-bold text-xl text-center'
                : 'block p-2 hover:bg-blue-300'
            }
            onClick={handleNavLinkClick}
          >
            Non-Clinical
          </NavLink>
        </li>
      </ul>
    </li>
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
          onClick={() => {
            toggleSidebar();
            openModal();
          }}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default MobileSidebar;
