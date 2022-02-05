import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './Navbar.css'
import { auth } from '../firebase-config'
import { signOut } from 'firebase/auth'

function Navbar() {
  const [click, setClick] = useState(false)
  const [navbar, setNavbar] = useState(false)
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'))
  const handleClick = () => setClick(!click)

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  const signUserOut = async () => {
    await signOut(auth).then(() => {
      localStorage.clear()

      setIsAuth(false)
      console.log(isAuth)
    })
  }

  window.addEventListener('scroll', changeBackground)
  return (
    <>
      <nav className={navbar ? 'navbar active' : 'navbar'}>
        <div className='nav-container fixed-top'>
          <NavLink exact to='/' className='nav-logo align-middle'>
            <div>
              <img
                className='img_logo_nav '
                src='../images/logo.png'
                path='/about'
                alt=''
              />
            </div>
          </NavLink>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavLink
                exact
                to='/'
                activeClassName='active'
                className='nav-links'
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                to='/about'
                activeClassName='active'
                className='nav-links'
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                to='/price'
                activeClassName='active'
                className='nav-links'
                onClick={handleClick}
              >
                Price
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact
                to='/#imageContact'
                activeClassName='active'
                className='nav-links'
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li className='nav-item'>
              {isAuth ? (
                <NavLink
                  exact
                  to='/'
                  activeClassName='active'
                  className='nav-links'
                  onClick={signUserOut}
                  // navigate='/'
                >
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  exact
                  to='/login'
                  activeClassName='active'
                  className='nav-links'
                  // onClick navigate='/login'
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
          <div className='nav-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
