import React, { useState, useEffect } from 'react'
import './Herosection.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Zoom from 'react-reveal/Zoom'
import { NavLink } from 'react-router-dom'
import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage'
import { db, storage } from '../firebase-config'
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore'

function HeroSection() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'))
  const [files1, setFiles1] = useState([])
  const [postLists, setPostList] = useState([])
  const postsCollectionRef = collection(db, 'frizerie')

  useEffect(() => {
    const getInfo = async () => {
      const data = await getDocs(postsCollectionRef)
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

      console.log(getInfo)
    }

    getInfo()
    // eslint-disable-next-line
  }, [])

  const storage1 = getStorage()
  getDownloadURL(ref(storage, 'hairTemplate/imageHairHero')).then((url) => {
    setFiles1(url)
    return
  })

  const contentHero = postLists.map((text) => (
    <>
      <h1 className='header-text text-center '>{text.titlehero}</h1>
      <h3 className='second-text text-center'>{text.texthero}</h3>
    </>
  ))

  return (
    <>
      {!isAuth ? (
        <div className='hero-container' id='hero'>
          <div className='row d-flex justify-content-center w-100'>
            <div
              className='col-7 col-lg-8 main-img '
              style={{ backgroundImage: `url(${files1})` }}
            ></div>

            <Zoom delay={500}>
              <div className='col-5  col-lg-4 hero-title'>{contentHero}</div>
            </Zoom>
          </div>
        </div>
      ) : (
        <div className='hero-container' id='hero'>
          <div className='row d-flex justify-content-center w-100'>
            <div
              className='col-7 col-lg-8 main-img '
              style={{ backgroundImage: `url(${files1})` }}
            ></div>

            <Zoom delay={500}>
              <div className='col-5  col-lg-4 hero-title'>
                {contentHero}

                <NavLink
                  exact
                  to='/editpage'
                  activeClassName='active'
                  className='nav-links buton-edit text-center'
                  // onClick navigate='/login'
                >
                  EDIT 
                </NavLink>
              </div>
            </Zoom>
          </div>
        </div>
      )}
    </>
  )
}

export default HeroSection
