import React from "react";
import "../Main/css/Chemist.css";
import Slider from "react-slick";
const Snacks = (props) => {

 let list=props.snacks;
  function AddToCart(item){
    item = {...item, count:1};
    console.log(item);
  }
  const settings = {
    className: "center",
    centerMode: false,
    infinite: false,
    centerPadding: "1px",
    slidesToShow: 8.5,
    speed: 10,
  };
  return (
    <div className="cor">
      <div className="chemhead">
        <h2 style={{ float: "left", paddingLeft: "1rem" }}>Biscuits, snacks & chocolates</h2>
        <h2 style={{ float: "right", paddingRight: "1rem" }}>
          <a href="/">See All</a>
        </h2>
      </div>
      <Slider {...settings}>
        {list.map((item) => {
          return(
            <div key={item.id}>
            <div className="chemcard" >
            <img src={item.image} alt="" className="card-img-top" />
            <div className="card-body">
              <h4 className="card-text" style={{fontWeight:'normal'}}>
                {item.title.length > 12
                      ? `${item.title.substring(0, 12)}...`
                      : item.title}</h4>
            </div>
            <div className="priceBtn">
            <p >&#8377; {item.price}</p>
            <button onClick={()=>props.AddToCart(item)}>Add</button>
            </div>
          </div>
          </div>
          )
        })}
      </Slider>
    </div>
  );
};

export default Snacks;
