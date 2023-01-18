import React, { useState } from "react";

import "./index.scss";



function App() {
  return (
    <div className="landing-InvestmentType">
        <div className="landing-InvestmentType-title">
            <p>Turn</p>
            <p>your vacations </p>
            <p>into investments</p>
        </div>
        <div className="landing-JourneyStart">
            <div className="landing-JourneyStart-left">
                <p>
                    Start your journey today
                </p>
                <div className="colorfulLine"></div>
            </div>
            <div className="landing-JourneyStart-right">
                <svg width="26" height="50" viewBox="0 0 26 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.2" d="M1 49L25 25L1 1" stroke="black"/>
                </svg>

            </div>
        </div>
        <div className="landing-JourneyStart-buttons">

        </div>

        <div className="landing-JourneyStart-details">
            <p>Turning your vacation expenses into assets.<strong>It's easier than you think. </strong> </p>
            As members, you will gain access to hundreds (have to check) of homes in the most sought-after destinations in the US as well as other travel perks. Travi allows you to not only take your dream vacation but also can provide you an alternative source of income. You will meet like minded vacationers like yourself who are also interested in building their investment portfolio.
        </div>
    </div>
  );
}

export default App;
