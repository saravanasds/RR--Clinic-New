import React, { useState, useEffect, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Modal from '../Components/Modal';
import Book from '../Pages/Book';

const Popup = ({ onClose }) => {
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Ref to track the card element
  const popupRef = useRef(null);

  // Open modal function
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close modal function
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Close popup if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose(); // Close popup if click is outside the card
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div
          ref={popupRef} // Attach ref to the card
          className="relative bg-white bg-opacity-60 backdrop-blur-sm p-4 sm:p-6 py-12 rounded-lg shadow-lg w-11/12 max-w-sm sm:max-w-md mx-auto border-[1px] border-white"
        >
          {/* Background PRP GFC animated text */}
          <div className=" inset-0 overflow-hidden">
            <div className="animate-marquee whitespace-nowrap text-6xl sm:text-8xl font-bold text-yellow-300 ">
              PRP GFC &nbsp; PRP GFC &nbsp; PRP GFC &nbsp; PRP GFC
            </div>
          </div>

          <h2 className="relative text-xl sm:text-2xl font-bold mb-4 z-10">Welcome to Our Website!</h2>
          <p className="relative mb-4 z-10 text-white">
            Thank you for visiting. We hope you have a great experience exploring our services.
          </p>

          {/* Close popup button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 font-bold bg-gray-300 text-black py-2 px-4 rounded-full hover:bg-gray-400 mb-4 z-10"
          >
            X
          </button>

          {/* CTA Button to open the modal */}
          <button
            onClick={openModal}
            className="relative mt-4 w-auto px-6 py-2 sm:px-8 sm:py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:bg-gradient-to-l hover:from-purple-500 hover:to-blue-500 shadow-lg rounded-full transition duration-300 ease-in-out flex items-center justify-center gap-2 z-10"
          >
            <span>Book Appointment</span>
            {/* <FaArrowRight className="animate-bounce" /> */}
          </button>
        </div>
      </div>

      {/* Modal for Booking Consultation */}
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        <Book />
      </Modal>
    </>
  );
};

export default Popup;
