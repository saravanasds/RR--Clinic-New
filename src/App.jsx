import React, { useEffect } from 'react';

import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Services from "./Pages/Services"
import Contact from "./Pages/Contact"
import Layout from "./Components/Layout"
import Book from "./Pages/Book"

import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // Only animate once
    });
  }, []);
 
  return (
    <>
    

  <BrowserRouter>
  <Routes>
    <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/book" element={<Book/>}/>
    </Route>
  </Routes>
  </BrowserRouter>

  
    </>
  )
}

export default App
