import "./css/Main.css";
import pancorner from "../../assets/pancorner.webp";
import React from "react";
import Carousal from "../../components/Main/Carousal";
import ChemistCarosal from "../../components/Main/ChemistCarosal";
import SnacksCarosal from "../../components/Main/Snacks";
import PersonalCarosal from "../../components/Main/Personal";
import Header from "./../Header";
import Footer from "./../Footer";
import { Link } from "react-router-dom";
import list from "./list"
const Main = () => {
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
          <ChemistCarosal />
        </div>
        <div className="chemist">
          <SnacksCarosal />
        </div>
        <div className="chemist">
          <PersonalCarosal />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
