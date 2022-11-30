import "./../css/Main.css";
import pancorner from "./../../src/assets/pancorner.webp";
import React from "react";
const Main = () => {
  const x = "./../../src/assets/imageList";
  const a = ".jpg";
  const list = [
    { id: 1, src: require("./images/Fruits & Vegitables.jpg") },
    { id: 88, src: require('./images/Dairy, Bread & Eggs.jpg') },
    { id: 2, src: require('./images/Snacks & Munchies.jpg') },
    { id: 66, src: require('./images/Bakery & Biscuits.jpg') },
    { id: 3, src: require('./images/Breakfast & Instant Food.jpg') },
    { id: 4, src: require('./images/Tea, Coffee & Health Drink.jpg') },
    { id: 5, src: require('./images/Cold Drinks & Juice.jpg') },
    { id: 6, src: require('./images/Sweet Tooth.jpg') },
    { id: 7, src: require('./images/Atta, Rice & Dal.jpg') },
    { id: 8, src: require('./images/Masala, Oil & More.jpg') },
    { id: 9, src: require('./images/Sauces & Spreads.jpg') },
    { id: 10, src: require('./images/Chicken, Meat & Fish.jpg') },
    { id: 11, src: require('./images/Organic & Healthy Living.jpg') },
    { id: 12, src: require('./images/Paan Corner.jpg') },
    { id: 13, src: require('./images/Baby Care.jpg') },
    { id: 14, src: require('./images/Pharma & Wellness.jpg') },
    { id: 15, src: require('./images/Cleaning Essentials.jpg') },
    { id: 16, src: require('./images/Home & Office.jpg') },
    { id: 17, src: require('./images/Personal Care.jpg') },
    { id: 18, src: require('./images/Pet Care.jpg') },
  ];
  return (
    <div className="Main ">
      <div className="pancorner ">
        <img src={pancorner}  alt="./../../public/pancorner.webp" className="panimg"/>
      </div>
     <div className="container-fluid">
     <div className="row ">
        <div className="col-md-1"></div>
        <div className="col-md-11">
        <div className="row">
        {list.map((item) => {
          return (
            <>
              <div key={item.id} className="col-md-1  card">
                <img src={item.src} alt="vgrvr" />
              </div>
            </>
          );
        })}
        </div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Main;
