import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Navbar from './Navbar';
import ContactWh from './ContactWh';
import Popup from '../Components/Popup'; // Import the Popup component

const Layout = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Trigger popup on page load
  useEffect(() => {
    setShowPopup(true);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col min-h-screen ">
      {/* Navbar */}
      <Navbar />
      
      <main className="flex-grow bg-slate-200 min-h-[50vh]">
        <Outlet />
        <ContactWh/>
      </main>

      {/* Popup */}
      {/* {showPopup && <Popup onClose={closePopup} />} */}

      <Footer />
    </div>
  );
};

export default Layout;
