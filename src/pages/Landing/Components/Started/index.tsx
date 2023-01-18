import React, { useState } from "react";

import "./index.scss";



const started_img = "https://tuassets.com/wp-content/reactpress/imgs/landing/started-img.png"
function App() {
  return (
    <div className="landing-started">
        <div className="started-describe">
            <p>Vacation at a home</p>
            <p>Invest with a home</p>
            <p>Retire with homes</p>
        </div>
        <button className="started-button">
            <p>Get started</p>
        </button>
        <div>
            <img className="started-img" src={started_img}/>
        </div>
    </div>
  );
}

export default App;
