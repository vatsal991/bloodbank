import React, { Component } from "react";
import Slider from "react-slick";
import '../css/slider.css'
import image from '../images/1.jpg'
import image2 from '../images/2.png'

export default class SliderComp extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000,
    };
    return (
      <div style={{height:'50vh',width:'90%',margin:'auto',marginTop:'20px',zIndex:'10'}}>
        <Slider {...settings}>
          <div className="SLiderContainer">
              <img className="SliderImage" src={image} />
              <h4 className="SliderText">This Is Test</h4>
          </div>
          <div className="SLiderContainer">
              <img className="SliderImage" src={image2} />
              <h4 className="SliderText">This Is Test</h4>
          </div>
          <div className="SLiderContainer">
              <img className="SliderImage" src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=" />
              <h4 className="SliderText">This Is Test</h4>
          </div>
          <div className="SLiderContainer">
              <img className="SliderImage" src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=" />
              <h4 className="SliderText">This Is Test</h4>
          </div>
          <div className="SLiderContainer">
              <img className="SliderImage" src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=" />
              <h4 className="SliderText">This Is Test</h4>
          </div>
          <div className="SLiderContainer">
              <img className="SliderImage" src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=" />
              <h4 className="SliderText">This Is Test</h4>
          </div>
        </Slider>
      </div>
    );
  }
}