import React, { useState, useEffect } from 'react'
import { db, storage } from '../../../firebase-config'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage'
import { Image } from 'react-bootstrap'
import '../../Herosection.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Zoom from 'react-reveal/Zoom'
import Navbar from '../../Navbar'
import reactDom from 'react-dom'

function HeroSectionEdit() {
  const [postLists, setPostList] = useState([])
  const [newText1, setNewText1] = useState('')
  const [newTitle1, setNewTitle1] = useState('')
  const [files1, setFiles1] = useState([])
  const [image, setImage] = useState(null)
  const postsCollectionRef = collection(db, 'frizerie')

  const update1 = async () => {
    const servicesDoc = doc(db, 'frizerie', '5JGFd1ZzJeltmZAqoEeJ')
    await updateDoc(servicesDoc, {
      texthero: newText1,
      titlehero: newTitle1,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    console.log('title', form.title, form.elements.title)
    console.log('text', form.text, form.elements.text)
  }

  const handleSubmit1 = () => {
    const imageRef = ref(storage, 'hairTemplate/imageHairHero')
    uploadBytes(imageRef, image)
      .then(() => {
        setImage(null)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

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
  getDownloadURL(ref(storage, 'hairTemplate/imageHairHero')).then((url) => {
    setFiles1(url)
    return
  })

  const contentHero = postLists.map((text) => (
    <>
      <h1 className='header-text text-center'>{text.titlehero}</h1>
      <h3 className='second-text text-center'>{text.texthero}</h3>
    </>
  ))

  return (
    <div>
      <Navbar />
      <div className='hero-container' id='hero'>
        <div className='row d-flex justify-content-center w-100'>
          <div
            className='col-7 col-lg-8 main-img'
            style={{ backgroundImage: `url(${files1})` }}
          ></div>

          <Zoom delay={500}>
            <div className='col-5  col-lg-4 hero-title'>{contentHero}</div>
          </Zoom>
        </div>
      </div>
      <div className='input-edit mt-3'>
        <input
        className='w-100 mb-2 rounded text-input'
          placeholder='Title header'
          onChange={(event) => {
            setNewTitle1(event.target.value)
          }}
        />
     

      <textarea
      className='w-100  mb-2 rounded text-input'
        id='text'
        name='text'
        placeholder='Text header'
        type='text'
        required
        onChange={(event) => {
          setNewText1(event.target.value)
        }}
      />
      <button
       className='w-100  mb-2 rounded text-input bold'
        onClick={() => {
          update1()
          updatePage()
        }}
      >
        Publish to database
      </button>
     


      <div>
        <input 
         className='w-100  mb-2 rounded text-input bold'
        type='file' 
        onChange={handleImageChange} />
        <button 
        className='w-100  mb-1 rounded text-input bold'
        onClick={handleSubmit1}>Submit</button>
      </div>
    </div>
    </div>
  )
}

export default HeroSectionEdit
