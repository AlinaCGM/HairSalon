import React from 'react';
import '../App.css';
import './MyGallery.css'
import Card from 'react-bootstrap/Card';
// import FadeInSection from "./FadeInSection";
import 'bootstrap/dist/css/bootstrap.css';
import Zoom from 'react-reveal/Zoom';


export default function MyGallery() {
  return (
        // <FadeInSection>
    <div className="mygallery" id="mygallery">
    <div className="text-center fs-1 ">
    <Zoom delay={900}>
      <h4 className='title text-center color-goldy'><h2 className='boldy fs-4'>OUR</h2> LOOKBOOK</h4>
    </Zoom>

    </div>
       <div className="row px-5"> 
      
            <div className="col-12 card_p  col-md-6 col-lg-3 justify-content-center ">
            <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex " src="../images/g1.jpg" alt="image1" />
              </Card>
               </div>
              
               <div className="col-12 card_p col-md-6 col-lg-3 justify-content-center">
               <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex" src="../images/g2.jpg" alt="image1" />
              </Card>
               </div>

               <div className="col-12 card_p col-md-6 col-lg-3 justify-content-center">
               <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex" src="../images/g3.jpg" alt="image1" />
              </Card>
            </div>
         
            <div className="col-12 card_p col-md-6 col-lg-3 justify-content-center">
            <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex" src="../images/g4.jpg" alt="image1" />
              </Card>
               </div>
              
               <div className="col-12 card_p col-md-6 col-lg-3 justify-content-center">
               <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex" src="../images/g5.jpg" alt="image1" />
            </Card>
               </div>


               <div className="col-12 card_p col-md-6 col-lg-3 justify-content-center">
               <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex" src="../images/g6.jpg" alt="image1" />
              </Card>
            </div>
            

            <div className="col-12 card_p  col-md-6 col-lg-3 justify-content-center ">
            <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex " src="../images/g7.jpg" alt="image1" />
              </Card>
               </div>
              
               <div className="col-12 card_p col-md-6 col-lg-3 justify-content-center">
               <Card className="card_inside">
              <Card.Img variant="top" className="img_portfolio  d-flex" src="../images/g8.jpg" alt="image1" />
              </Card>
               </div>

               
            
            </div>
        </div> 
        // {/* </FadeInSection> */}
        
  
    );
  }

