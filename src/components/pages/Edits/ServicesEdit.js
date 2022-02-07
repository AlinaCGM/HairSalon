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

function ServicesSectionEdit() {
  const [postLists, setPostList] = useState([])
  const [newMainTitle1, setNewMainTitle1] = useState('')
  const [newText1, setNewText1] = useState('')
  const [newTitle1, setNewTitle1] = useState('')
  const [newTitle2, setNewTitle2] = useState('')
  const [newTitle3, setNewTitle3] = useState('')
  const [newTitle4, setNewTitle4] = useState('')
  const [files1, setFiles1] = useState([])
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
      setFiles1(url)
      return
    }
  )

  const storage3 = getStorage()
  getDownloadURL(ref(storage, 'hairTemplate/imageHairServices3')).then(
    (url) => {
      setFiles1(url)
      return
    }
  )

  const storage4 = getStorage()
  getDownloadURL(ref(storage, 'hairTemplate/imageHairServices4')).then(
    (url) => {
      setFiles1(url)
      return
    }
  )

  const contentHeaderServices1 = postLists.map((text) => (
    <>
      <h4 className='title text-center'>
        <h2 className='boldy fs-4'>HAIRDRESSING</h2> SERVICES
      </h4>
    </>
  ))

  return (
    <div className='cardPics-container container' id='aboutstuff'>
      <Zoom delay={400}>
        <h4 className='title text-center'>
          <h2 className='boldy fs-4'>HAIRDRESSING</h2> SERVICES
        </h4>
      </Zoom>
      <div className='row d-flex justify-content-around '>
        <Zoom delay={430}>
          <div className='col-11 col-md-6 col-lg-3'>
            <div className='all-pics card-1'>
              <img
                className='foto-card card-1'
                src='/images/one.jpeg'
                path='/about'
                alt=''
              />
              <h3 className='name-pics text-center'>HAIRCUTS</h3>
            </div>
          </div>
        </Zoom>
        <br />

        <Zoom delay={440}>
          <div className='col-11 col-md-6 col-lg-3'>
            <div className=' all-pics card-2'>
              <img
                className='foto-card card-2'
                src='/images/two.jpeg'
                path='/about'
                alt=''
              />
              <h3 className=' name-pics text-center'>BLOW DRY&STYLE</h3>
            </div>
          </div>
        </Zoom>
        <br />

        <Zoom delay={450}>
          <div className='col-11 col-md-6 col-lg-3'>
            <div className=' all-pics card-3'>
              <img
                className='foto-card card-3'
                src='/images/three.jpeg'
                path='/about'
                alt=''
              />
              <h3 className=' name-pics text-center'>HAIR COLORING</h3>
            </div>
          </div>
        </Zoom>
        <br />

        <Zoom delay={460}>
          <div className='col-11 col-md-6 col-lg-3'>
            <div className=' all-pics card-4'>
              <img
                className='foto-card '
                src='/images/four.jpeg'
                path='/about'
                alt=''
              />
              <h3 className=' name-pics text-center'>HAIR EXTENSIONS</h3>
            </div>
          </div>
        </Zoom>
        <br />
      </div>
    </div>
  )
}

export default ServicesSectionEdit
