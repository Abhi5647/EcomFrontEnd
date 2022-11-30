import React, { Component }  from 'react';
import "./../css/Header.css";
function Header() {
  return (
    <div className="container-fluid">
      <div className="column Header">
        <div className=" logo">
          <h1
            style={{
              color: "#E5DB3C   ",
              float: "left",
              fontWeight: "bold",
              fontSize: "42px",
            }}
          >
            blink
          </h1>
          <h1
            style={{
              color: "green  ",
              float: "left",
              fontWeight: "bold",
              fontSize: "42px",
              borderRight: "1px solid black",
              height: "70px",
            }}
          >
            it &nbsp; &nbsp;
          </h1>
        </div>
        <div className=" delivaryLocation" style={{ float: "left" }}>
          <h4>&nbsp; &nbsp;Delivary in 10 minutes</h4>
          <br />
          <p style={{ justifySelf: "start" }}>Kolkata, West Bengal India </p>
        </div>
        <div className=" searchbar">
          <div className="input">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="26"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <input
              type="text"
              className="inputArea"
              placeholder="Search for products"
            />
          </div>
        </div>
        <div className="login">
          <h2><a style={{textDecoration:'none',color:'black'}} href="">Login</a></h2>
        </div>
        <div className="cart row">
          
          <h4 style={{color:'white',marginTop:'12px'}}><span><i className="bi bi-cart"></i></span>My Cart</h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
