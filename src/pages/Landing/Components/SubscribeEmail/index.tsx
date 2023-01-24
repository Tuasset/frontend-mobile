import React, { useState } from "react";


import "./index.scss";

function App() {

  return (
    <div className="landing-SubscribeEmail">
        <p className="landing-SubscribeEmail-title">Get exclusive access, plus be the first to know about upcoming offerings.</p>
        <div className="landing-SubscribeEmail-Main">
            <div className="search">
                <input type="text" placeholder="Enter your email address" />
                <div className="btn">Subscribe</div>
            </div>
        </div>
    </div>
  );
}

export default App;
