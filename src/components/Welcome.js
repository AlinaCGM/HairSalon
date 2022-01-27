import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Welcome.css';
//  import FadeInSection from "./FadeInSection";
import Zoom from 'react-reveal/Zoom';


const Welcome = () => {
  return ( 
   

    <div className="second-container" id="second">
      
     
    <div className='row d-flex justify-content-around second-box'>
    <Zoom delay={700}>
    <div className="col-sm-12 col-md-5 col-lg-4 foto ">
    <img className="foto-pic" src="/images/tools.jpg" path="/about"alt=""/> 
    </div>
    </Zoom>
    <Zoom delay={900}>
<div className="col-sm-10 col-md-6 col-lg-7 foto-text">
<h2 className='welcome-text text-center'>WELCOME TO THE BEST HAIRDRESSING SALON IN STOCKHOLM</h2>
<h4 className='welcome-second text-center align-top'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 Facilisi massa pretium eu tortor blandit dictum curabitur tellus in. Consectetur enim at consectetur 
aliquam. Purus ornare ultricies nunc, mi et leo. Commodo egestas bibendum pulvinar orci magna leo, blandit quis.</h4>
</div>
</Zoom>
      </div>   

     </div>


  );
};

export default Welcome;
 


