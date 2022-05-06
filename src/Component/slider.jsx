import React, { Component } from "react";
import Slider from "react-slick";
import '../css/slider.css'


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
            <div className="slidertext">
              <h4 className="SliderText">Save Lives !</h4>
              <h6>Blood Donation Is A Small Act Of Kindness That Does Great And Big Wonders.</h6>
              </div>
          </div>
          <div className="SLiderContainer">
            <div className="slidertext">
              <h4 className="SliderText">Help To Someone !</h4>
              <h6>Blood Donation Costs You Nothing, But It Can Mean The World To Someone In Need.</h6>
              </div>
          </div>
          <div className="SLiderContainer">
            <div className="slidertext">
              <h4 className="SliderText">Make Other Happy !</h4>
              <h6>Donate Blood Today So That No One Ever Has To Suffer From A Lack Of Blood.</h6>
              </div>
          </div>
        </Slider>
      </div>
    );
  }
}