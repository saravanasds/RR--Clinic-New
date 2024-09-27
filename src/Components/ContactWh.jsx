import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const ContactButtons = () => {
  return (
    <div className="fixed bottom-10 right-10 z-[99] flex flex-col items-end space-y-4">
      {/* WhatsApp Button */}
      <a href="https://wa.me/919843070216?text=Hello%20Sir,%20I%20am%20interested%20in%20your%20service" target="_blank" rel="noopener noreferrer">
        <button className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-md transform transition-all duration-500 hover:scale-110 hover:rotate-12 animate-bounce hover:animate-spin">
          <FaWhatsapp className="text-white" size={24} />
        </button>
      </a>

      {/* Mobile Call Button / Desktop Phone Number */}
      <div className="flex items-center justify-center">
        {/* Mobile View (Phone Button) */}
        <a href="tel:+919597003413" className="block md:hidden">
          <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-md transform transition-all duration-500 hover:scale-110">
            <FaPhoneAlt className="text-white" size={24} />
          </button>
        </a>

        {/* Desktop View (Phone Number) */}
        <div className="hidden md:flex items-center space-x-2 group relative">
          {/* Phone number with sliding effect */}
          <span
            className="text-gray-200 bg-blue-600 px-3 py-1 rounded-full font-semibold transform translate-x-full opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
          >
            +91 9655334567
          </span>

          {/* Phone Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-md transform transition-all duration-500 hover:scale-110">
            <FaPhoneAlt className="text-white" size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactButtons;
