import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Modal from '../Components/Modal';
import Book from '../Pages/Book';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <nav className='w-full h-auto flex text-lg font-normal p-6 bg-blue-300 justify-between z-10 shadow-lg'>
        <h2 className='w-auto p-2 ml-5 font-bold text-xl'>RR Hair Clinic</h2>
        <div className='block md:hidden mr-5'>
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>

        <ul
          className={`md:flex md:items-center md:justify-around p-2 text-md w-full md:w-auto absolute md:static bg-blue-300 transition-all duration-1000 ease-in-out ${
            isOpen ? 'top-16 left-0 right-0' : 'top-[-490px] left-0 right-0'
          }`}
        >
          <li className='md:mr-6'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'block p-2 px-4 text-pink-600 rounded-md font-bold text-xl'
                  : 'block p-2 hover:text-pink-400'
              }
            >
              Home
            </NavLink>
          </li>
          <li className='md:mr-6'>
            <NavLink
              to='/about'
              className={({ isActive }) =>
                isActive ? 'block p-2 px-4 text-pink-600 rounded-md font-bold text-xl'
                  : 'block p-2 hover:text-pink-400'
              }
            >
              About
            </NavLink>
          </li>
          <li className='relative md:mr-6' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <NavLink
              to='/services'
              className={({ isActive }) =>
                isActive ? 'block p-2 px-4 text-pink-600 rounded-md font-bold text-xl'
                  : 'block p-2 hover:text-pink-400'
              }
            >
              Services
            </NavLink>
            <ul
              className={`absolute left-0 mt-1 bg-blue-400 rounded-md p-2 z-20 ${
                isDropdownOpen ? 'block' : 'hidden'
              } md:w-48`}
            >
              <li className='block'>
                <a href='#' className='block p-2'>
                  Hair Treatment
                </a>
              </li>
              <li className='block'>
                <a href='#' className='block p-2'>
                  Skin Treatment
                </a>
              </li>
              <li className='block'>
                <a href='#' className='block p-2'>
                  Transformation
                </a>
              </li>
            </ul>
          </li>
          <li className='md:mr-6'>
            <NavLink
              to='/contact'
              className={({ isActive }) =>
               isActive ? 'block p-2 px-4 text-pink-600 rounded-md font-bold text-xl'
                  : 'block p-2 hover:text-pink-400'
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <button
              className='bg-pink-600 rounded-full p-2 mt-4 md:mt-0 px-5 text-white font-medium'
              onClick={openModal}
            >
              Book Appointment
            </button>
          </li>
        </ul>
        
      </nav>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <Book />
      </Modal>
    </>
  );
};

export default Navbar;
