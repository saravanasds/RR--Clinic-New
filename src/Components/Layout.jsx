import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-slate-200 min-h-[50vh]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
