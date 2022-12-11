import React, { useEffect, useState } from "react";
import "./Vegitable.css";
import Header from "../Header";
import VegCard from "./VegCard";
import { useParams } from "react-router-dom";
const Vegetable = () => {
  const [Data, setData] = useState([]);
  const [perdata, setPerdata] = useState([]);
  const [navData, SetNavData] = useState([]);
 const  {name}=useParams();
 
  useEffect(() => {
    fetch(`http://localhost:3005/${name}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setPerdata(res);
      });
    fetch(`http://localhost:3005/${name}Type`)
      .then((res) => res.json())
      .then((res) => {
        SetNavData(res);
      });
  }, []);

  const onChange = (data) => {
    let newdata = perdata.filter(
      (e) => e.subcat == data
    ); 
    setData(newdata);
    console.log(Data);
  };

  return (
    <>
      <Header />
      <h1 style={{}}>Buy {name} Online</h1>

      <div className="outerClass">
        
        <div className="SubCat">
          {navData.map((item,i) => {
            return (
              <div key={{i}}>
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
              <div className="Product" key={i}>
                <VegCard
                  key={i}
                  image={e.image}
                  name={e.name}
                  price={e.price}
                  weight={e.weight}
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
