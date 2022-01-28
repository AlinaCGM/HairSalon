import React from 'react';
import '../../App.css';
import AboutServices from '../AboutServices.js';
import HeroAbout from '../HeroAbout.js';
import AboutStuff from '../AboutStuff.js';
import MyGallery from '../MyGallery.js';
import Footer from '../Footer.js';


export default function About() {
  return (
  <div>
 <HeroAbout/>
 <AboutServices/>
 <AboutStuff/>
<MyGallery/>
<Footer/>
  </div> 
  );
}
// export default About; 