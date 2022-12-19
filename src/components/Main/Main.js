import "./css/Main.css";
import pancorner from "../../assets/pancorner.webp";
import React,{useEffect,useState} from "react";
import Carousal from "../../components/Main/Carousal";
import ChemistCarosal from "../../components/Main/ChemistCarosal";
import SnacksCarosal from "../../components/Main/Snacks";
import PersonalCarosal from "../../components/Main/Personal";
import Header from "./../Header";
import Footer from "./../Footer";
import { Link } from "react-router-dom";
import list from "./list"
const Main = () => {
  const [Chemist, SetChemist] = useState([]);
  const [Personal, SetPersonal] = useState([]);
  const [Snacks, SetSnacks] = useState([]);
  const Cart=[]
  
  useEffect(() => {
    fetch("http://localhost:3005/ChemistStore")
      .then((res) => res.json())
      .then((res) => {
        SetChemist(res);
      });
    fetch("http://localhost:3005/Personal_Care")
      .then((res) => res.json())
      .then((res) => {
        SetPersonal(res);
      });  
    fetch("http://localhost:3005/Biscuits_Snacks_Chocolates")
      .then((res) => res.json())
      .then((res) => {
        SetSnacks(res);
      });  
  }, []);

  async function AddToCart(item) {
    item = { ...item, count: 1 };
    var newcarts1=[]
    const cartsbefore = JSON.parse(localStorage.getItem("Cart"));
    if(cartsbefore==null){
      newcarts1=JSON.stringify([item])
    }else{
      cartsbefore.map((i)=>{
       if(i.title===item.title){
        i.count+=1;
       }
      }) 
       newcarts1 = JSON.stringify([...cartsbefore, item])
    }
    Cart.push(item);
    console.log(item)   
      
      console.log('hsdf')
    localStorage.setItem("Cart", newcarts1);
    
    // console.log(item);
  }
  return (
    <>
     <Header />
      <div className="main">
        <div className="item1 pancorner ">
          <img
            src={pancorner}
            alt="./../../public/pancorner.webp"
            className="panimg"
          />
        </div>
        <div className="item2 ">
          <Carousal />
        </div>
        <div id="productMap">
          {list.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/${item.product}`}>
                  <div key={item.id} className="card">
                    <img src={item.src} alt="" />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="chemist">
          <ChemistCarosal chemist={Chemist} AddToCart={AddToCart}/>
        </div>
        <div className="chemist">
          <SnacksCarosal snacks={Snacks} AddToCart={AddToCart}/>
        </div>
        <div className="chemist">
          <PersonalCarosal personal={Personal} AddToCart={AddToCart}/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
