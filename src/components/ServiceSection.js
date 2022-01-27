import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ServiceSection.css';
//  import FadeInSection from "./FadeInSection";
import Zoom from 'react-reveal/Zoom';

 
const  ServiceSection = () => {
  return ( 
    //  <FadeInSection>
    <Zoom>
    <div className="cardPics-container container" id="second">
      <h4 className='title text-center'><h2 className='boldy fs-4'>HAIRDRESSING</h2> SERVICES</h4>
     
    <div className='row d-flex justify-content-around '>
   <div className="col-11 col-md-6 col-lg-3">
    <div className="all-pics card-1"> 
     <img className="foto-card card-1" src="/images/one.jpeg" path="/about"alt=""/>  
     <h3 className='name-pics text-center'>HAIRCUTS</h3>
    </div>
    </div>
    <br/>


    <div className="col-11 col-md-6 col-lg-3">
    <div className=" all-pics card-2">
     <img className="foto-card card-2" src="/images/two.jpeg" path="/about"alt=""/> 
     <h3 className=' name-pics text-center'>BLOW DRY&STYLE</h3> 
    </div>
    </div>
    <br/>

    <div className="col-11 col-md-6 col-lg-3">
    <div className=" all-pics card-3">
     <img className="foto-card card-3" src="/images/three.jpeg" path="/about"alt=""/>
     <h3 className=' name-pics text-center'>HAIR COLORING</h3> 
    </div>
    </div>
    <br/>
    <div className="col-11 col-md-6 col-lg-3">
    <div className=" all-pics card-4">
     <img className="foto-card " src="/images/four.jpeg" path="/about"alt=""/> 
     <h3 className=' name-pics text-center'>HAIR EXTENSIONS</h3>
    </div>
    </div>
    <br/>



      </div>   

   
</div>
</Zoom>
    //  </FadeInSection>  
  );
};

export default ServiceSection;
 