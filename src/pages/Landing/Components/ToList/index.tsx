import React, { useState } from "react";


import "./index.scss";

function App() {

  return (
    <div className="landing-ToList">
      <p className="landing-ToList-title">
        Browse our listing of the properties located in popular travel destinations.
      </p>
      <div className="landing-ToList-view">
        <div className="landing-ToList-view-left">
          <p>View Listing</p>
          <div className="colorful-Line"></div>
        </div>
        <svg width="24" height="50" viewBox="0 0 24 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" d="M1 49L22.6 25L1 1" stroke="black" stroke-width="2"/>
        </svg>

      </div>
    </div>
  );
}

export default App;
