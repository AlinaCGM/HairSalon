import React  from "react";
import "./HeroAbout.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Zoom from 'react-reveal/Zoom';


function  HeroAbout () {
  
   
    return (
      <div className="heroabout-container" id="hero">
      <Zoom delay={500}>
     
          <div className='row d-flex justify-content-center w-100'>
          <div className="col-12 mainabout-img ">
               <h1 className=' text-center heroabout-title'>MAKE YOUR OWN MOMENTUM</h1>
          </div>
          
     
            </div>   
            </Zoom>
         
      </div>
    );
  }

  export default HeroAbout;