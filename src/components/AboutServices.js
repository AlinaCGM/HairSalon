import React from "react";
// import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutServices.css';
 import { Link } from "react-router-dom";
// import './Button.css';
// import Button from 'react-bootstrap/Button';


 

const AboutServices = () => {
  return ( 
   
    <div className="about-services d-flex justify-content-evenly iconbout-box pb-5 " >

     <div className="carts-circle ">
  {/* <h3 className=" title text-center">SMTH</h3> */}

  <div className="container-aboutservices row mx-auto   ">
    <div className="cart-container mx-auto  col ">
      <Link className="cart" to="/services#Veckostadning" >
        <div className=" image-one img-all"></div>
        <div className="title-services text-center"> EXPERT BEAUTICIANS   </div>
      </Link>
    </div>

    <div className="cart-container  mx-auto col">
      <Link className="cart" to="/services#Stadning" >
        <div className="image-two img-all"> </div>
        <div className="title-services text-center"> QUATILY SERVICES </div>
      </Link>
    </div>

    <div className="cart-container mx-auto col">
      <Link className="cart" to="/services#Flyttstadning" >
        <div className="image-three img-all" > </div>
        <div className="title-services text-center">BEAUTY PRODUCTS</div>
      </Link>
    </div>

    
    
  </div>
</div> 


  
       </div>

     
  );
};

export default AboutServices;
 