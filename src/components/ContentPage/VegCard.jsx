import React from "react";
import './Vegitable.css'
const vegCard = ({ image, name, price, weight }) => {
  return (
    <div style={{}}>
      <img src={image} alt={name} style={{ width: "80%" }} />
      <h3>{name}</h3>
      <p style={{ float: "left", marginLeft: "1rem" }}>&#8377;{price}</p>
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
          <p style={{}}>W : {weight}</p>
        </div>
        <div >
          <button className="productBtn"
          >
           <h3 style={{padding:'0.5rem 1rem'}}>Add</h3> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default vegCard;
