import React, { useState } from "react";

import "./index.scss";



function App() {

    const [showJourneyButton, setShowJourneyButton] = React.useState(0)
    const journeyBuyClick = (event:any)=>{
        setShowJourneyButton(0)
    }
    const journeyVacationClick = (event:any)=>{
        setShowJourneyButton(1)
    }
    const journeyRentClick = (event:any)=>{
        setShowJourneyButton(2)
    }
    const journeyInvestClick = (event:any)=>{
        setShowJourneyButton(3)
    }

    const showDetails = (number: number)=>{

        return (
            <div className={detailsList[number].classname}>
                <span>{detailsList[number].title}</span>
                {detailsList[number].content}
            </div>
        )
    }

    const detailsList = [{
        classname: "landing-JourneyStart-details-buy",
        title:"Buy: ",
        content:"Explore the numerous listings located in sought after destinations all over the US. Take a virtual tour of the home along with a local real estate expert to experience the home for yourself."
    },{
        classname: "landing-JourneyStart-details-Vacation",
        title:"Vacation: ",
        content:"Visit the hottest travel destinations in the U.S. at your leisure. From the beaches of Miami to the dense forests of the Pacific Northwest, you set your next adventure. Work hard, play harder is our motto here at Travi."

    },{
        classname: "landing-JourneyStart-details-Rent",
        title:"Rent: ",
        content:"When you and your family are not utilizing the home for vacation, why not use it for short term rental? Let Travi help you turn your expenses into investments."

    },{
        classname: "landing-JourneyStart-details-Invest",
        title:"Invest: ",
        content:"Turning your vacation expenses into assets. It’s easier than you think. Travi allows you to not only take your dream vacation but also can provide you an alternative source of income. You will also meet like minded vacationers like yourself who are also interested in building their investment portfolio."

    }]


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
            <a className="landing-JourneyStart-buttons-buy" onClick={journeyBuyClick}>BUY</a>
            <a className="landing-JourneyStart-buttons-vacation" onClick={journeyVacationClick}>vacation</a>
            <a className="landing-JourneyStart-buttons-rent" onClick={journeyRentClick}>Rent</a>
            <a className="landing-JourneyStart-buttons-Invest" onClick={journeyInvestClick}>Invest</a>
        </div>

        <div className="landing-JourneyStart-details">
            <div className="landing-JourneyStart-details-origin">
                <p>Turning your vacation expenses into assets.<strong>It's easier than you think. </strong> </p>
                As members, you will gain access to hundreds (have to check) of homes in the most sought-after destinations in the US as well as other travel perks. Travi allows you to not only take your dream vacation but also can provide you an alternative source of income. You will meet like minded vacationers like yourself who are also interested in building their investment portfolio.
            </div>

            {showDetails(showJourneyButton)}
        </div>
    </div>
  );
}

export default App;
