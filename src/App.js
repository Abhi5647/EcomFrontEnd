import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import Vegetable from "./components/ContentPage/Vegetable";
import React, {  } from "react";
// import Carousal  from './components/Carousal';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/:name" element={<Vegetable />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
