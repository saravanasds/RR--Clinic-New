import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Navbar from './Navbar';
import ContactWh from './ContactWh';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Contact Info Section */}
      <div className="bg-blue-500 text-white p-2 md:p-4 lg:hidden">
        <p className="text-sm md:text-base flex justify-evenly">
          <div>
          <span className='font-bold text-md text-black pr-2'>Contact</span><a href="tel:+1234567890" className="underline">+1 234 567 890</a></div> |
          <div>
          <span className='font-bold text-md text-black pr-2'>Email: </span><a href="mailto:info@example.com" className="underline">info@example.com</a>
          </div>
        </p>
      </div>
      
      {/* Navbar */}
      <Navbar />
      
      <main className="flex-grow bg-slate-200 min-h-[50vh] ">
        <Outlet />
        <ContactWh/>
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;
