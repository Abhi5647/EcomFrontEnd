import React from "react";
import image1 from '../../assets/carousal1.webp'
import image2 from '../../assets/carousal2.avif'
import image3 from '../../assets/carousal3.avif'
import image4 from '../../assets/carousal4.avif'
import image5 from '../../assets/carousal5.avif'
import image6 from '../../assets/carousal6.avif'
import Slider from "react-slick";
import '../Main/css/carousal.css'
function Carousal() {
  const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    centerPadding: "0px",
    slidesToShow: 3.5,
    speed: 10,
  };
  return (
    <div className="cor">
      <Slider {...settings}>
        <div className="car"  >
          <img src={image1} alt=""  />
        </div>
        <div className="car"  >
          <img src={image2} alt=""  />
        </div>
        <div className="car"  >
          <img src={image3} alt=""  />
        </div>
        <div className="car"  >
          <img src={image4} alt=""  />
        </div>
        <div className="car"  >
          <img src={image5} alt=""  />
        </div>
        <div className="car"  >
          <img src={image6} alt=""  />
        </div>
      </Slider>
    </div>
  );
}
export default Carousal;
