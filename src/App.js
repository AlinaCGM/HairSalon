import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
// import {Switch} from "react-router"
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

// import Shop from "./pages/Shop";
import Price from "./components/pages/Price";
import Services from "./components/pages/Services.js";


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path="/price" element={<Price/>}/>
          <Route path="/contact" element={<Contact/>}/>
          </Routes>

      </Router>
    </>
  );
}

export default App;
