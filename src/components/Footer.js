import React, {  } from "react";
import "./../css/Footer.css";
import mobile from "./images/mobile.jpg";
import bike from "./images/bike.jpg";
import greentick from "./../assets/tick.jpg";
import qr from "../assets/qr.jpg";
import bes from "../assets/bes.webp";
import sup from "../assets/sup.webp";
import wid from "../assets/wid.webp";
function Footer() {
  return (
    <div id="Footer">
      <div className="greenBack">
        <div className="left">
          <img src={mobile} alt="" className="mobile"  />
          <img src={bike} alt="" className="bike"  />
        </div>
        <div className="right">
            <div className="">
              <h1>Get the blinkit app</h1>
              <br />
              <h2>
                <img src={greentick} alt="" className="tick"  />
                &nbsp; &nbsp;Get live order tracking
              </h2>
              <br />
              <h2>
                <img src={greentick} alt="" className="tick"  />
                &nbsp; &nbsp;Get letest feature updates
              </h2>
              <div className="container qrcodecon">
                <div className="row">
                  <div className="">
                    <img src={qr} className="qrcode" alt="" />
                  </div>
                  <div className="">
                    <h2>Simple way to download the Blinkit app</h2>
                    <p>Scan QR code and download now</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className="feature">
        <div className="fcard">
          <img src={sup} alt="" className="cardimg" />
          <div className="card-body">
            <h3 >Superfast Delivery</h3>
            <p  className="card-text">
              Get your order delivered to your doorstep at the earliest from
              dark stores near you.
            </p>
          </div>
        </div>
        <div className="fcard">
        <img src={bes} alt="" className="cardimg"/>
        <div className="card-body">
          <h3 >Best Prices & Offers</h3>
        <p style={{fontSize:'1rem'}} className="card-text">Cheaper prices than your local supermarket, great cashback offers to top it off.</p>
       </div>
      </div>
      <div className="fcard">
        <img src={wid} alt="" className="cardimg"/>
        <div className="card-body">
          <h3 >Wide Assortment</h3>
        <p style={{fontSize:'1rem'}} className="card-text">Choose from 5000+ products across food, personal care, household & other categories</p>
       </div>
      </div>
      <div className="fcard">
        <img src={wid} alt="" className="cardimg"/>
        <div className="card-body">
          <h3 >Wide Assortment</h3>
        <p  className="card-text">Choose from 5000+ products across food, personal care, household & other categories</p>
       </div>
      </div>
      </div>
    </div>
  );
}

export default Footer;
