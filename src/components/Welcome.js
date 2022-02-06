import React, { useState, useEffect } from 'react'
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore'
import { db, storage } from '../firebase-config'
import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Welcome.css'
//  import FadeInSection from "./FadeInSection";
import Zoom from 'react-reveal/Zoom'
import { Image } from 'react-bootstrap'

const Welcome = () => {
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

  const updatePage = async () => {
    const data = await getDocs(postsCollectionRef)
    setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    return
  }

  const storage1 = getStorage()
  getDownloadURL(ref(storage, 'hairTemplate/imageHairWelcome')).then((url) => {
    setFiles1(url)
    return
  })

  const contentWelcome = postLists.map((text) => (
    <>
      <h2 className='welcome-text text-center'>{text.titlewelcom}</h2>
      <h4 className='welcome-second text-center align-top'>
        {text.textwelcome}
      </h4>
    </>
  ))

  return (
    <div className='second-container' id='second'>
      <div className='row d-flex justify-content-around second-box'>
        <Zoom delay={400}>
          <div
            className='col-sm-12 col-md-5 col-lg-4 foto '
            style={{ backgroundImage: `url(${files1})` }}
          >
            <Image className='foto-pic' alt='foto'></Image>
          </div>
        </Zoom>
        <Zoom delay={500}>
          <div className='col-sm-10 col-md-6 col-lg-7 foto-text'>
            {contentWelcome}
          </div>
        </Zoom>
      </div>
    </div>
  )
}

export default Welcome
