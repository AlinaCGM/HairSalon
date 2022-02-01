import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './ImageContact.css';
 import Fade from 'react-reveal/Fade';


 
const ImageContact = () => {
  return ( 
   <Fade>
    <div className="ImageContact-container flex" >
  
    <div className=" title img-contText ">
     <p className='boldy-first '>WANNA GET A BRAND NEW LOOK OR REFRESH YOUR CURRENT HAIRDO? </p>
    <p className='small-second '> We offer a high range of hairdressing and hair care services. </p>
  
    </div>
   <div> 
  <table className='table-contact' id="imageContact">

  <div><p className='small-third contact-title text-center'>Just contact us!</p></div>
  <tr>
    <td><input placeholder="Name" className='name-input'></input></td>
  
  </tr>
  <tr>
    <td><input placeholder="Email" className='name-input'></input></td>
   
  </tr>
  <tr>
    <td><input placeholder="Pnone" className='name-input'></input></td>
    
   
  </tr>
</table>
  </div>   
     

   
</div>
   </Fade>
  );
};

export default ImageContact;