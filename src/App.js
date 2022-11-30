import './App.css';
import Header  from './components/Header'
import Main  from './components/Main'
import Footer  from './components/Footer'
import React, { Component }  from 'react';
// import Carousal  from './components/Carousal';
function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="header"><Header/></div>
          <div className="main"><Main/></div>
          <div className="footer"><Footer/></div>
        </div>
      </div>
   
    </div>
  );
}

export default App;
