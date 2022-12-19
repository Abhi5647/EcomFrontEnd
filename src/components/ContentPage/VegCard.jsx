import React from "react";
import './Vegitable.css'
const vegCard = ({ image, title, price, quantity,AddToCart }) => {
  return (
    <div style={{}}>
      <img src={image} alt={title} style={{ width: "80%" }} />
      <h3>{title}</h3>
      <p style={{ float: "left", marginLeft: "1rem" }}>&#8377; {price}</p>
      <br />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "50% 50%",
          justifyContent: "space-evenly",
          alignItems: "space-between",
          padding:'0px 2px 2px 0px'
        }}
      >
        <div>
          <p style={{}}>W : {quantity}</p>
        </div>
        <div >
          <button className="productBtn"
          >
           <h3 style={{padding:'0.5rem 1rem'}} onClick={()=>AddToCart({image,title,price,quantity})}>Add</h3> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default vegCard;
