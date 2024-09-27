import React, { useEffect } from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
// import Services from "./Pages/Services"
import Transformation from "./Pages/Transformation/Transformation"
import Layout from "./Components/Layout"

import Book from './Pages/Book';
import Skintreatment from './Pages/Servicescomponents/Skintreatment';
import RetentionPlan from './Pages/Servicescomponents/HairServices/RetentionPlan';
import RestorationPlan from './Pages/Servicescomponents/HairServices/RestorationPlan';
import SuperSpeciality from './Pages/Servicescomponents/HairServices/SuperSpeciality';
import NonClinical from './Pages/Servicescomponents/HairServices/NonClinical';
import OtherTreatments from "./Pages/Servicescomponents/HairServices/OtherTreat"

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
        <Route path="/Skintreatment" element={<Skintreatment/>}/>
        <Route path="/Transformation" element={<Transformation/>}/>
        <Route path="/book" element={<Book/>}/>

         {/* Nested Routes for Hair Treatment Categories */}
         <Route path="/services/hair-treatment">
            <Route path="retention-plan" element={<RetentionPlan />} />
            <Route path="restoration-plan" element={<RestorationPlan />} />
            <Route path="super-speciality" element={<SuperSpeciality />} />
            <Route path="nonclinical" element={<NonClinical />} />
            <Route path="other-treatments" element={<OtherTreatments />} />
          </Route>

    </Route>
  </Routes>
  </BrowserRouter>  
</>
  )
}

export default App
