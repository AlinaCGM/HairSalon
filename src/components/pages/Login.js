import React from 'react'
import { auth, provider } from '../../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import './Edits/Edit.css'
import googleImage from "../../images/btn_google_signin_dark_normal_web@2x.png"
// import { ContentSection } from '../Content'

function Login({ setIsAuth }) {
  let navigate = useNavigate()

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem('isAuth', true)
      setIsAuth(true)
      navigate('/')
    })
  }

  return (
    <div className='loginPage mx-auto text-center w-100s '>
      <div><h1 className='first-textLogin'>Welcome to admin page</h1></div>  
      <button className='login-with-google-btn'  onClick={signInWithGoogle} >
     <img src={googleImage} className='login-img' alt="" />
      </button>
    </div>
  )
}

export default Login
