import React from "react";
import "./../css/Header.css";
import logo from "../assets/blinkitLogo.jpg";
import { Link } from "react-router-dom";
import "./pop.css";
import { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import axios from "axios";
function Header() {
  const [Cart, setCart] = useState([]);
  var totalPrice = 0;
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("Cart"));
    if (items) {
      console.log(items);
      setCart(items);
    }
  }, []);

 const [email, SetEmail] = useState();
 const [password, SetPass] = useState();

  const handleSubmit = event => {
  event.preventDefault();
  alert(email);
  console.log(password);
  axios.post('http://localhost:5000/login', { email,password })
    .then(res=>{
      console.log(res);
      console.log(res.data);
      localStorage.setItem('token',res.data.token)
      window.location = "/" 
    })
    
}
  return (
    <div className="header">
      <div className="grid-item item1">
        <Link to="/">
          <img id="logo" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="grid-item item2">
        <h3>Delivary in 10 minutes</h3>
        <p>Kolkata, West Bengal India </p>
      </div>
      <div className="grid-item item3">
        <input
          type="text"
          className="inputArea"
          placeholder="Search for products"
        />
        <button id="search">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.5rem"
            height="1.5rem"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>
      <div className="grid-item item4">
        <h2 id="login">
          <Popup
            trigger={<button className="btn cart">Login </button>}
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <button
                  className="close"
                  onClick={close}
                  style={{ margin: "1rem" }}
                >
                  &times;
                </button>
                <div className="header">
                  {" "}
                  <h1>Login Form</h1>{" "}
                </div>
                <div className="content" style={{ marginTop: "2.5rem" }}>
                  <label htmlFor="Mobile ">
                    <h2>Enter Mobile or Email : </h2>
                  </label>
                  <br />
                  <input 
                    onChange={(e)=>SetEmail(e.target.value)}
                    type="text"
                    id="name"
                    name="Mobile"
                    placeholder=" Enter your Mobile or Email"
                    style={{
                      height: "3rem",
                      width: "25rem",
                      borderRadius: ".5rem",
                      fontSize: "1rem",
                    }}
                  />{" "}
                  <br />
                  <br />
                  <form action="" onSubmit = { handleSubmit }>
                  <label htmlFor="Mobile ">
                    <h2>Password: </h2>
                  </label>
                  <br />
                  <input
                    onChange={(e)=>SetPass(e.target.value)}
                    type="text"
                    id="name"
                    name="Mobile"
                    placeholder=" Enter Your Password"
                    style={{
                      height: "3rem",
                      width: "25rem",
                      borderRadius: ".5rem",
                      fontSize: "1rem",
                    }}
                  />
                  <br />
                  <br />
                  <button
                    type="submit"
                    style={{
                      borderRadius: ".5rem",
                      marginRight: "1.5rem",
                      backgroundColor: "#28A745",
                      color: "white",
                      padding: ".5rem .5rem",
                    }}
                  >
                    <span style={{ padding: ".5rem", fontSize: "1rem" }}>
                      Login
                    </span>
                  </button>
                  </form>
                  <div className="signup" style={{ float: "right" }}>
                    <p>Not a Member ?</p>
                    <Link to="registration">
                      <button
                        type="submit"
                        style={{
                          borderRadius: ".5rem",
                          backgroundColor: "#007BFF",
                          color: "white",
                          padding: ".5rem .5rem",
                        }}
                      >
                        <span style={{ padding: ".5rem", fontSize: "1rem" }}>
                          Sign up
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="actions"></div>
              </div>
            )}
          </Popup>
        </h2>
      </div>
      {/*  */}
      <div className="grid-item item5">
        <div className="cartbox">
          <Popup
            trigger={
              <button id="cart">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-cart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </span>
                My Cart
              </button>
            }
            modal
            nested
          >
            {(close) => (
              <div className="CartModal">
                <div className="Mycart">
                  <h1>My Cart</h1>
                  <p>Free Delhivery in 15 Mins</p>
                  {Cart.map((item, i) => {
                    totalPrice += item.price;
                    return (
                      <div className="CartItem" key={i}>
                        <p className="CartText" style={{ textAlign: "left" }}>
                          &nbsp;&nbsp; {item.title}
                        </p>
                        <div className="citem">
                          <div className="CartImage">
                            <img
                              src={item.image}
                              alt=""
                              style={{ width: "4rem" }}
                            />
                          </div>
                          <div className="CartPrice">
                            <p className="CartText">Q/W: {item.quantity}</p>
                            <p className="CartText">Price : {item.price}</p>
                            <div className="counter">
                              <button
                                style={{
                                  width: "2rem",
                                  backgroundColor: "green",
                                }}
                              >
                                -
                              </button>
                              &nbsp;{item.count}&nbsp;
                              <button
                                style={{
                                  width: "2rem",
                                  backgroundColor: "green",
                                }}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="billDetail">
                    <h2>Bill details</h2>
                    <hr />
                    <hr />
                    <br />
                    <div id="mrp">
                      <p style={{ float: "left" }}>MRP</p>
                      <p style={{ float: "right" }}>100</p>
                    </div>
                    <br />
                    <div id="deliveryCharge">
                      <p style={{ float: "left" }}>Delivery Charge</p>
                      <p style={{ float: "right" }}>100</p>
                    </div>
                    <br />
                    <br />
                    <div id="grandTotal">
                      <h3 style={{ float: "left" }}>Grand total</h3>
                      <p style={{ float: "right" }}>{totalPrice / 4}</p>
                    </div>
                  </div>
                </div>
                <div className="actions"></div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    </div>
  );
}

export default Header;
