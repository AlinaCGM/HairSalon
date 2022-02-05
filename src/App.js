import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import {Switch} from "react-router"
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'

// import Shop from "./pages/Shop";
import Price from './components/pages/Price'
import Services from './components/pages/Services.js'
import Login from '../src/components/pages/Login'
import HeroSectionEdit from '../src/components/pages/Edits/HeroEdit'

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'))

  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/price' element={<Price />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
          <Route path='/heroedit' element={<HeroSectionEdit />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
