import React, { useState, useEffect } from 'react'
import { db, storage } from '../../../firebase-config'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage'
import { Image } from 'react-bootstrap'
import '../../Welcome.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Zoom from 'react-reveal/Zoom'
import Navbar from '../../Navbar'

function WelcomeSectionEdit() {
  const [postLists, setPostList] = useState([])
  const [newText1, setNewText1] = useState('')
  const [newTitle1, setNewTitle1] = useState('')
  const [files1, setFiles1] = useState([])
  const [image, setImage] = useState(null)
  const postsCollectionRef = collection(db, 'frizerie')

  const update1 = async () => {
    const servicesDoc = doc(db, 'frizerie', 'QvZBBN0DYsrC2iRVlWt7')
    await updateDoc(servicesDoc, {
      textwelcome: newText1,
      titlewelcom: newTitle1,
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    console.log('title', form.title, form.elements.title)
    console.log('text', form.text, form.elements.text)
  }

  const handleSubmit1 = () => {
    const imageRef = ref(storage, 'hairTemplate/imageHairWelcome')
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
            className='col-sm-12 col-md-5 col-lg-4 foto  '
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
      <div  className='input-edit mt-3 input-welcome'>
        <input
        className='w-100 mb-1  rounded text-input'
          placeholder='Title Welcome'
          onChange={(event) => {
            setNewTitle1(event.target.value)
          }}
        />
     

      <textarea
       className='w-100 mb-1 rounded text-input'
        id='text'
        name='text'
        placeholder='Text Welcome'
        type='text'
        required
        onChange={(event) => {
          setNewText1(event.target.value)
        }}
      />
      <button
       className='w-100 mb-1 rounded text-input'
        onClick={() => {
          update1()
          updatePage()
        }}
      >
        Publish to database
      </button>
      <div>
        <input 
         className='w-100 mb-1 rounded text-input'
        type='file' 
        onChange={handleImageChange} />
        <button 
         className='w-100 mb-1  rounded text-input'
        onClick={handleSubmit1}>Submit</button>
      </div>
      </div>
    </div>
  )
}

export default WelcomeSectionEdit
