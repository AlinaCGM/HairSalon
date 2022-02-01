
  
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './PriceList.css';
// import Zoom from 'react-reveal/Zoom';

 
const  PriceList = () => {
  return ( 
    
    <div className='price-container'>
    
    <div className='img-price text-center'> <img className="logo-price " src="/images/logo.png"  path="/about" alt=""/>
    <h3 className='text-center slogan'>Where you can be yourself.</h3> </div>
    <div className='img-price2 text-center w-100'> 
    {/* <img className="price-img " src="/images/price.jpeg"  path="/about" alt=""/> */}
    </div>

   <div className='table-container'>
   <table className='table-price'>
  <tr>
  <th colspan="2" className='services-name text-center'>Services</th>
  </tr>
  <tr> 
    <td className='description'>Description</td>
    <td className='sek-price'>100 sek</td>
  </tr>
  <tr>
    <td className='description'>Description</td>
    <td className='sek-price'>200 sek</td>
  </tr>
  <tr>
    <td className='description'>Description</td>
    <td className='sek-price'>300 sek</td>
  </tr>
  <tr>
    <td className='description'>Description</td>
    <td className='sek-price'>400 sek</td>
  </tr>
  <tr>
  <th colspan="2" className='services-name text-center'>Services</th>
  </tr>
  <tr>
    <td className='description'>Description</td>
    <td className='sek-price'>100 sek</td>
  </tr>
  <tr>
    <td className='description'>Description</td>
    <td className='sek-price'>200 sek</td>
  </tr>
  <tr>
    <td className='description'>Description</td>
    <td className='sek-price'>300 sek</td>
  </tr>
  <tr>
    <td className='description'>Description</td>
    <td className='sek-price'>400 sek</td>
  </tr>
  <tr>
  <th colspan="2" className='services-name text-center'>Services</th>
  </tr>
  <tr>
    <td className='description'>Description</td>
    <td className='sek-price'>100 sek</td>
  </tr>
  <tr>
    <td className='description'>Description</td>
    <td className='sek-price'>200 sek</td>
  </tr>
  <tr>
    <td className='description'>Description</td>
    <td className='sek-price'>300 sek</td>
  </tr>
  <tr>
    <td className='description'>Description</td>
    <td className='sek-price'>400 sek</td>
  </tr>
</table>

   </div>


   </div>
    
  );
};

export default PriceList;