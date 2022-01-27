import React, { Component } from "react";
import Slider from "react-slick";
import "./Review.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Zoom from 'react-reveal/Zoom';


export default class Review extends Component {
  render() {
    const settings = {
      dots: false,
      fade: true,
      infinite: true,  
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000
    };
    return (
     
      <Zoom delay={2800} right>
      <div className="slider-container ">
  
      <div className="image-slider ">
      <h4 className="title text-center"><h2 className='boldy fs-4'>WHAT OUR HAPPY </h2> CUSTOMERS SAY</h4>
         
        <Slider {...settings}>
          <div>
          <span><img className=" img-review" src="/images/salong.png"  path="/about" alt=""/> 
          <img className=" img-review" src="/images/salong2.png"  path="/about" alt=""/></span>
          </div>
          <div>
          <span><img className=" img-review" src="/images/salong3.png"  path="/about" alt=""/>
          <img className=" img-review" src="/images/salong4.png"  path="/about" alt=""/></span>
          </div>
          <div>
          <span><img className=" img-review" src="/images/salong.png"  path="/about" alt=""/>
          <img className=" img-review" src="/images/salong2.png"  path="/about" alt=""/></span>
          </div>
          <div>
          <span><img className=" img-review" src="../images/salong3.png"  path="/about" alt=""/>
          <img className=" img-review" src="../images/salong4.png"  path="/about" alt=""/></span>
          </div>
          <div>
          <span><img className=" img-review" src="../images/salong.png"  path="/about" alt=""/>
          <img className=" img-review" src="/images/salong2.png"  path="/about" alt=""/></span>
          </div>
          <div>
          <span> <img className=" img-review" src="../images/salong3.png"  path="/about" alt=""/>
          <img className=" img-review" src="../images/salong4.png"  path="/about" alt=""/></span>
          </div>
          <div>
          <span> <img className=" img-review" src="../images/salong.png"  path="/about" alt=""/>
          <img className=" img-review" src="/images/salong2.png"  path="/about" alt=""/></span>
          </div>
          <div>
          <span> 
          <img className=" img-review" src="../images/salong3.png"  path="/about" alt=""/>
          <img className=" img-review" src="../images/salong4.png"  path="/about" alt=""/></span>
          </div>
        
        </Slider>
      </div>
      </div>
      </Zoom>
    
    );
  }
}