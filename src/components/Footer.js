import React, { Component }  from 'react';
import "./../css/Footer.css";
import mobile from './images/mobile.jpg'
import bike from './images/bike.jpg';
import greentick from'./../assets/tick.jpg';
import qr from '../assets/qr.jpg'
import bes from '../assets/bes.webp'
import sup from '../assets/sup.webp'
import wid from '../assets/wid.webp'
import eas from '../assets/eas.webp'
function Footer() {
  return (
    <div className="Footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 greenBackground">
            <div className="row">
              <div className="col-md-6">
                <img src={mobile} alt="" className="mobile" srcset="" />
                <img src={bike} alt="" className="bike" srcset="" />

              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-9">
                    <h1 style={{fontSize:'80px',marginTop:'8%',color:'#000',textAlign:'left',textDecoration:'bold'}}> Get the blinkit app</h1>
                    <br /><h2 style={{textAlign:'left'}}><img src={greentick} alt="" className="tick" srcset=""  />&nbsp; &nbsp;Get live order tracking</h2>
                    <br /><h2 style={{textAlign:'left'}}><img src={greentick} alt="" className="tick" srcset=""  />&nbsp; &nbsp;Get letest feature updates</h2>
                    <div className="container qrcodecon" >
                      <div className="row">
                        <div className="col-md-5">
                          <img src={qr} className="qrcode" alt="" />
                        </div>
                        <div className="col-md-7 px-2"><h2 style={{textAlign:'left'}} >Simple way to download the Blinkit app</h2>
                        <p style={{fontSize:'25px',textAlign:'left'}}>Scan QR code and download now</p></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="row cards">
              <div className="col-md-3 cardd">
                <img src={sup} alt="" className="cardimg"/>
                <div class="card-body">
                  <h3 style={{paddingTop:'10px'}}>Superfast Delivery</h3>
                <p style={{fontSize:'23px', margin:'10px'}} class="card-text">Get your order delivered to your doorstep at the earliest from dark stores near you.</p>
               </div>
              </div>
              <div className="col-md-3 cardd">
                <img src={bes} alt="" className="cardimg"/>
                <div class="card-body">
                  <h3 style={{paddingTop:'10px'}}>Best Prices & Offers</h3>
                <p style={{fontSize:'23px', margin:'10px'}} class="card-text">Cheaper prices than your local supermarket, great cashback offers to top it off.</p>
               </div>
              </div>
              <div className="col-md-3 cardd">
                <img src={wid} alt="" className="cardimg"/>
                <div class="card-body">
                  <h3 style={{paddingTop:'10px'}}>Wide Assortment</h3>
                <p style={{fontSize:'23px', margin:'10px'}} class="card-text">Choose from 5000+ products across food, personal care, household & other categories</p>
               </div>
              </div>
              <div className="col-md-3 cardd">
                <img src={eas} alt="" className="cardimg"/>
                <div class="card-body">
                  <h3 style={{paddingTop:'10px'}}>Easy Returns/Refund</h3>
                <p style={{fontSize:'23px', margin:'10px'}} class="card-text">Not satisfied with a product? Return it at the doorstep & get a refund within hours.</p>
               </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
