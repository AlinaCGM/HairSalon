import React, { useState, useEffect } from 'react'
import { db, storage } from '../../../firebase-config'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL, getStorage } from 'firebase/storage'
import { Image } from 'react-bootstrap'
import '../Edits/Edit.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Zoom from 'react-reveal/Zoom'
// import Navbar from '../../Navbar'

function ServicesSectionEdit() {
  const [postLists, setPostList] = useState([])
  const [newMainTitle1, setNewMainTitle1] = useState('')
  const [newMainTitle2, setNewMainTitle2] = useState('')
  const [newTitle1, setNewTitle1] = useState('')
  const [newTitle2, setNewTitle2] = useState('')
  const [newTitle3, setNewTitle3] = useState('')
  const [newTitle4, setNewTitle4] = useState('')
  const [files1, setFiles1] = useState([])
  const [files2, setFiles2] = useState([])
  const [files3, setFiles3] = useState([])
  const [files4, setFiles4] = useState([])

  const [image, setImage] = useState(null)
  const postsCollectionRef = collection(db, 'frizerie')

  const mainTitleupdate = async () => {
    const servicesDoc = doc(db, 'frizerie', '9NQj8gu4CZT3jeuxOuFN')
    await updateDoc(servicesDoc, {
      maintitleservices: newMainTitle1,
    })
  }

  const update1 = async () => {
    const servicesDoc = doc(db, 'frizerie', '9NQj8gu4CZT3jeuxOuFN')
    await updateDoc(servicesDoc, {
      titleservices1: newTitle1,
    })
  }
  const update2 = async () => {
    const servicesDoc = doc(db, 'frizerie', '9NQj8gu4CZT3jeuxOuFN')
    await updateDoc(servicesDoc, {
      titleservices2: newTitle2,
    })
  }

  const update3 = async () => {
    const servicesDoc = doc(db, 'frizerie', '9NQj8gu4CZT3jeuxOuFN')
    await updateDoc(servicesDoc, {
      titleservices3: newTitle3,
    })
  }

  const update4 = async () => {
    const servicesDoc = doc(db, 'frizerie', '9NQj8gu4CZT3jeuxOuFN')
    await updateDoc(servicesDoc, {
      titleservices4: newTitle4,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    console.log('title', form.title, form.elements.title)
  }

  const handleSubmit1 = () => {
    const imageRef = ref(storage, 'hairTemplate/imageHairServices1')
    uploadBytes(imageRef, image)
      .then(() => {
        setImage(null)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  const handleSubmit2 = () => {
    const imageRef = ref(storage, 'hairTemplate/imageHairServices2')
    uploadBytes(imageRef, image)
      .then(() => {
        setImage(null)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  const handleSubmit3 = () => {
    const imageRef = ref(storage, 'hairTemplate/imageHairServices3')
    uploadBytes(imageRef, image)
      .then(() => {
        setImage(null)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  const handleSubmit4 = () => {
    const imageRef = ref(storage, 'hairTemplate/imageHairServices4')
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
  getDownloadURL(ref(storage, 'hairTemplate/imageHairServices1')).then(
    (url) => {
      setFiles1(url)
      return
    }
  )

  const storage2 = getStorage()
  getDownloadURL(ref(storage, 'hairTemplate/imageHairServices2')).then(
    (url) => {
      setFiles2(url)
      return
    }
  )

  const storage3 = getStorage()
  getDownloadURL(ref(storage, 'hairTemplate/imageHairServices3')).then(
    (url) => {
      setFiles3(url)
      return
    }
  )

  const storage4 = getStorage()
  getDownloadURL(ref(storage, 'hairTemplate/imageHairServices4')).then(
    (url) => {
      setFiles4(url)
      return
    }
  )

  const contentHeaderServices1 = postLists.map((text) => (
    <>{text.headertitleservices}</>
  ))
  const contentHeaderServices2 = postLists.map((text) => (
    <>{text.headertitleservices2}</>
  ))
  const contentCardServices1 = postLists.map((text) => (
    <>{text.titleservices1}</>
  ))
  const contentCardServices2 = postLists.map((text) => (
    <>{text.titleservices2}</>
  ))
  const contentCardServices3 = postLists.map((text) => (
    <>{text.titleservices3}</>
  ))
  const contentCardServices4 = postLists.map((text) => (
    <>{text.titleservices4}</>
  ))

  return (
    <div className='cardPics-container  w-100 mx-auto' id='servicesSection'>
    
        <h4 className='title text-center'>
          <h2 className='boldy fs-4'>{contentHeaderServices1}</h2>{' '}
          {contentHeaderServices2}
        </h4>
     
      <div className='row d-flex justify-content-around '>
      
      
      
      
      
       
        <div className='col-6 col-md-6 col-lg-3 servicesCol '>
            <div className='all-pics card-1'>
              <Image
                className='foto-card card-1'
                path='/about'
                alt='image'
                src={files1}
              />
              <h3 className='name-pics text-center'>{contentCardServices1}</h3>
            </div>
         
    

        <div className='input-edits mt-3  input-servicesIcons'>
          <input
            className='w-100 mb-1  rounded text-input'
            placeholder='Text Services'
            onChange={(event) => {
              setNewTitle1(event.target.value)
            }}
          />
          <button
            className='w-100 rounded text-input'
            onClick={() => {
              update1()
              updatePage()
            }}
          >
            Publish to database
          </button>
          </div>
          <div className='input-edits mt-3  input-servicesIcons'>
            <input
              className='w-100 mb-1 rounded text-input'
              type='file'
              onChange={handleImageChange}
            />
            <button
              className='w-100 mb-1  rounded text-input'
              onClick={handleSubmit1}
            >
              Submit
            </button>
          </div>
          </div>





       
        <div className='col-6 col-md-6 col-lg-3 servicesCol'>
            <div className='all-pics card-1'>
              <Image
                className='foto-card card-1'
                path='/about'
                alt='image'
                src={files2}
              />
              <h3 className='name-pics text-center'>{contentCardServices2}</h3>
            </div>
          
    
    
        <div className='input-edits mt-3  input-servicesIcons'>
          <input
            className='w-100 mb-1  rounded text-input'
            placeholder='Text Services'
            onChange={(event) => {
              setNewTitle2(event.target.value)
            }}
          />
          <button
            className='w-100  rounded text-input'
            onClick={() => {
              update2()
              updatePage()
            }}
          >
            Publish to database
          </button>
          </div>
          <div className='input-edits mt-3  input-servicesIcons'>
            <input
              className='w-100 mb-1 rounded text-input'
              type='file'
              onChange={handleImageChange}
            />
            <button
              className='w-100 mb-1  rounded text-input'
              onClick={handleSubmit2}
            >
              Submit
            </button>
          </div>
          </div>






     
        <div className='col-6 col-md-6 col-lg-3 servicesCol'>
            <div className='all-pics card-1'>
              <Image
                className='foto-card card-1'
                path='/about'
                alt='image'
                src={files3}
              />
              <h3 className='name-pics text-center'>{contentCardServices1}</h3>
            </div>
        
    
    
        <div className='input-edits mt-3  input-servicesIcons'>
          <input
            className='w-100 mb-1  rounded text-input'
            placeholder='Text Services'
            onChange={(event) => {
              setNewTitle3(event.target.value)
            }}
          />
          <button
            className='w-100  rounded text-input'
            onClick={() => {
              update3()
              updatePage()
            }}
          >
            Publish to database
          </button>
          </div>
          <div className='input-edits mt-3  input-servicesIcons'>
            <input
              className='w-100 mb-1 rounded text-input'
              type='file'
              onChange={handleImageChange}
            />
            <button
              className='w-100 mb-1  rounded text-input'
              onClick={handleSubmit3}
            >
              Submit
            </button>
          </div>
          </div>






        
        <div className='col-6 col-md-6 col-lg-3 servicesCol'>
            <div className='all-pics card-1'>
              <Image
                className='foto-card card-1'
                path='/about'
                alt='image'
                src={files4}
              />
              <h3 className='name-pics text-center'>{contentCardServices1}</h3>
            </div>
          
    
    
        <div className='input-edits mt-3  input-servicesIcons'>
          <input
            className='w-100 mb-1  rounded text-input'
            placeholder='Text Services'
            onChange={(event) => {
              setNewTitle4(event.target.value)
            }}
          />
          <button
            className='w-100  rounded text-input'
            onClick={() => {
              update4()
              updatePage()
            }}
          >
            Publish to database
          </button>
          </div>
          <div className='input-edits mt-3  input-servicesIcons'>
            <input
              className='w-100 mb-1 rounded text-input'
              type='file'
              onChange={handleImageChange}
            />
            <button
              className='w-100 mb-1  rounded text-input'
              onClick={handleSubmit4}
            >
              Submit
            </button>
          </div>
          </div>
    

    
      </div>
    </div>
  )
}

export default ServicesSectionEdit
