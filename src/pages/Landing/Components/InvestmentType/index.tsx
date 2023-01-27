import React, { useState } from "react";

import "./index.scss";



function App() {

    const detailsList = [{
        btnClassName:"landing-JourneyStart-buttons-buy",
        detailClassname: "landing-JourneyStart-details-buy",
        title:"Buy",
        content:"Explore the numerous listings located in sought after destinations all over the US. Take a virtual tour of the home along with a local real estate expert to experience the home for yourself."
    },{
        btnClassName:"landing-JourneyStart-buttons-vacation",
        detailClassname: "landing-JourneyStart-details-Vacation",
        title:"Vacation",
        content:"Visit the hottest travel destinations in the U.S. at your leisure. From the beaches of Miami to the dense forests of the Pacific Northwest, you set your next adventure. Work hard, play harder is our motto here at Travi."

    },{
        btnClassName:"landing-JourneyStart-buttons-rent",
        detailClassname: "landing-JourneyStart-details-Rent",
        title:"Rent",
        content:"When you and your family are not utilizing the home for vacation, why not use it for short term rental? Let Travi help you turn your expenses into investments."

    },{
        btnClassName:"landing-JourneyStart-buttons-Invest",
        detailClassname: "landing-JourneyStart-details-Invest",
        title:"Invest",
        content:"Turning your vacation expenses into assets. It’s easier than you think. Travi allows you to not only take your dream vacation but also can provide you an alternative source of income. You will also meet like minded vacationers like yourself who are also interested in building their investment portfolio."

    }]

    const [showJourneyButton, setShowJourneyButton] = React.useState(detailsList[0]);

    const [buyButtonHover, setBuyButtonHover]= useState("buyButtonHover");


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
            {
                detailsList.map((item, key)=>{
                    return(
                        <a className={item.btnClassName + " " + (key==0?buyButtonHover:"")} onClick={()=>{setShowJourneyButton(item); setBuyButtonHover("")}}>
                            {item.title}
                        </a>
                    )
                })
            }
        </div>

        <div className="landing-JourneyStart-details">
            <div className="landing-JourneyStart-details-origin">
                <p>Turning your vacation expenses into assets.<strong>It's easier than you think. </strong> </p>
                As members, you will gain access to hundreds (have to check) of homes in the most sought-after destinations in the US as well as other travel perks. Travi allows you to not only take your dream vacation but also can provide you an alternative source of income. You will meet like minded vacationers like yourself who are also interested in building their investment portfolio.
            </div>

            <div className={showJourneyButton.detailClassname}>
                <span>{showJourneyButton.title + ": "}</span>
                {showJourneyButton.content}
            </div>
        </div>
    </div>
  );
}

export default App;
