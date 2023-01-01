import React, { useEffect, useState } from "react";
import "./Vegitable.css";
import Header from "../Header";
import VegCard from "./VegCard";
import axios from "axios";
import { useParams } from "react-router-dom";
const Vegetable = () => {
  const [Data, setData] = useState([]);
  const [perdata, setPerdata] = useState([]);
  const [navData, SetNavData] = useState([]);
 const  {name}=useParams();
 
  useEffect(() => {
    axios.get(`http://localhost:5000/${name}`)
      
      .then((res) => {
        setData(res.data);
        setPerdata(res.data);
      });
    fetch(`http://localhost:3005/${name}Type`)
      .then((res) => res.json())
      .then((res) => {
        SetNavData(res);
      });
  }, []);
  const AddToCart=(item)=>{
    item = {...item, count:1};
    console.log(item);
  }
  const onChange = (data) => {
    let newdata = perdata.filter(
      (e) => e.subcat == data
    ); 
    setData(newdata);
  };

  return (
    <>
      <Header />
      <h1 style={{}}>Buy {name} Online</h1>

      <div className="outerClass">
        
        <div className="SubCat">
          {navData.map((item,i) => {
            return (
              <div key={i+"d"}>
                <button
                  key={item.tname}
                  className="NavCard"
                  onClick={() => onChange(item.tname)}
                >
                  <img src={item.image} alt="" className="NavImg" />
                  <h1 className="NavText">{item.tname}</h1>
                </button>
              </div>
            );
          })}
        </div>

        <div className="Products">
          {Data.map((e, i) => {
            return (
              <div className="Product" key={i+"s"}>
                <VegCard
                  key={i}
                  image={e.image}
                  title={e.title}
                  price={e.price}
                  quantity={e.quantity}
                  AddToCart={AddToCart({})}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Vegetable;