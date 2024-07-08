import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Services from "./Pages/Services"
import Contact from "./Pages/Contact"
import Layout from "./Components/Layout"


function App() {
 
  return (
    <>
    

  <BrowserRouter>
  <Routes>
    <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
    </Route>
  </Routes>
  </BrowserRouter>

  
    </>
  )
}

export default App
