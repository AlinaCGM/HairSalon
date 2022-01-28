import React  from "react";
import "./HeroAbout.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Zoom from 'react-reveal/Zoom';


function  HeroAbout () {
  
   
    return (
      <div className="heroabout-container" id="hero">
      <Zoom delay={500}>
     
        
          <div className="mainabout-img w-100">
               <h1 className=' text-center heroabout-title'>MAKE YOUR OWN MOMENTUM</h1>
          </div>
          
     
             
      </Zoom>
         
      </div>
    );
  }

  export default HeroAbout;