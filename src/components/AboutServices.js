import React from "react";
// import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutServices.css';
 import { Link } from "react-router-dom";
// import './Button.css';
// import Button from 'react-bootstrap/Button';


 

const AboutServices = () => {
  return ( 
   
    <div className="about-services  iconbout-box pb-5 " >

     <div className="carts-circle ">
  {/* <h3 className=" title text-center">SMTH</h3> */}

  <div className="container-aboutservices row mx-auto d-flex justify-content-around  ">
    <div className="cart-container mx-auto  col ">
      <Link className="cart" to="/services#Veckostadning" >
        <div className=" image-one img-all"></div>
        <div className="titleabout-services text-center "> EXPERT BEAUTICIANS  </div>
        <p className='text-center smalltext'>Highly skilled and experienced & certified
         Beautician and Hair Technician with around 8 years of work experience. </p>
      </Link>
    </div>

    <div className="cart-container  mx-auto col">
      <Link className="cart" to="/services#Stadning" >
        <div className="image-two img-all"> </div>
        <div className="titleabout-services text-center"> QUALITY SERVICES </div>
        <p className='text-center smalltext'>Our customers leave happily satisfied 
        with our quality services. You will enter into a friendly and relaxed environment. </p>
      </Link>
    </div>

    <div className="cart-container mx-auto col">
      <Link className="cart" to="/services#Flyttstadning" >
        <div className="image-three img-all" > </div>
        <div className="titleabout-services text-center">BEAUTY PRODUCTS</div>
        <p className='text-center smalltext'>Get hair care 100% custom made for your hair 
        type, goals & lifestyle.Products that celebrate the beauty in every woman. </p>
      </Link>
    </div>

    
    
  </div>
</div> 


  
       </div>

     
  );
};

export default AboutServices;
 