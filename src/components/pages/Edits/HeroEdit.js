import React from 'react'
import '../../Herosection.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Zoom from 'react-reveal/Zoom'

function HeroSectionEdit() {
  return (
    <div>
      <div className='hero-container' id='hero'>
        <div className='row d-flex justify-content-center w-100'>
          <div className='col-7 col-lg-8 main-img '></div>

          <Zoom delay={500}>
            <div className='col-5  col-lg-4 hero-title'>
              <h1 className='header-text text-center'>
                BEST <br />
                HAIRDRESSING <br />
                IN TOWN
              </h1>
              <h3 className='second-text text-center'>
                {' '}
                The masters of our salon are certified and have significant
                experience which ensures high quality of our services
              </h3>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  )
}

export default HeroSectionEdit
