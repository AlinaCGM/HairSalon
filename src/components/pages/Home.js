 import React from "react";
 import '../../App.css';
 import HeroSection from '../Herosection.js';
 import ServiceSection from '../ServiceSection.js';
 import Welcome from '../Welcome.js';
 import Footer from '../Footer.js';
 import Review from '../Review.js';
 import ImageContact from '../ImageContact.js';


function Home() {
  return (
    <>

     <HeroSection/>
     <Welcome/>
     <ServiceSection/>
    <Review/>
    <ImageContact/>
    <Footer/>
    
    </>
  );
}

export default Home;