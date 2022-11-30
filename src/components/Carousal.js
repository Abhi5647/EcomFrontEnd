import React from "react";
import image from '../assets/carousal1.webp'
import Slider from "react-slick";
import '../css/carousal.css'
function Carousal() {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    centerPadding: "1px",
    slidesToShow: 4,
    speed: 50,
  };
  return (
    <div className="container-fluid cor">
      <Slider {...settings}>
        <div class="car" style="width: 3rem;">
          <img src={image} alt="" srcset="" />
        </div>
        <div class="car" style="width: 3rem;">
          <img src={image} alt="" srcset="" />
        </div>
        <div class="car" style="width: 3rem;">
          <img src={image} alt="" srcset="" />
        </div>
        <div class="car" style="width: 3rem;">
          <img src={image} alt="" srcset="" />
        </div>
        <div class="card" style="width: 10rem;">
          <img src={image} alt="" srcset="" />
        </div>
        
        
        
      </Slider>
    </div>
  );
}
export default Carousal;
