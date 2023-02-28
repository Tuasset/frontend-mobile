import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./index.scss";



const started_img = "https://tuassets.com/wp-content/reactpress/imgs/landing/started-img.png"
function App() {
    let navigate = useNavigate();
    const toList = () =>{
        let path = `/listing`;
        navigate(path);
    }

  return (
    <div className="landing-started">
        <div className="started-describe">
            <p>Vacation at a home</p>
            <p>Invest with a home</p>
            <p>Retire with homes</p>
        </div>
        <button onClick={toList} className="started-button">
            <p>Get started</p>
        </button>
        <div>
            <img className="started-img" src={started_img} alt="started-img"/>
        </div>
    </div>
  );
}

export default App;
