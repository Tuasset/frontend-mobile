import React, { useState } from "react";


import "./index.scss";

function App() {

    const dataList = [{
        cityName: "Miami",
        houses: [{
            image:"https://tuassets.com/wp-content/reactpress/imgs/landing/house1.png?_t=1674482428",
            price:"20,000",
            city:"Malibu",
            state:"CA",
            bedroom:3,
            bathroom:3
        },{
            image:"https://tuassets.com/wp-content/reactpress/imgs/landing/house2.png?_t=1674482428",
            price:"8,000",
            city:"Malibu",
            state:"CA",
            bedroom:3,
            bathroom:3
        },{
            image:"https://tuassets.com/wp-content/reactpress/imgs/landing/house2.png?_t=1674482428",
            price:"8,000",
            city:"Malibu",
            state:"CA",
            bedroom:3,
            bathroom:3
        }]
    },{
        cityName: "Boston",
        houses: [{
            image:"https://tuassets.com/wp-content/reactpress/imgs/landing/house1.png?_t=1674482428",
            price:"30,000",
            city:"Malibu",
            state:"CA",
            bedroom:3,
            bathroom:3
        },{
            image:"https://tuassets.com/wp-content/reactpress/imgs/landing/house2.png?_t=1674482428",
            price:"9,000",
            city:"Malibu",
            state:"CA",
            bedroom:3,
            bathroom:3
        },{
            image:"https://tuassets.com/wp-content/reactpress/imgs/landing/house2.png?_t=1674482428",
            price:"9,000",
            city:"Malibu",
            state:"CA",
            bedroom:3,
            bathroom:3
        }]
    },{
        cityName: "Seattle",
        houses: [{
            image:"https://tuassets.com/wp-content/reactpress/imgs/landing/house1.png?_t=1674482428",
            price:"40,000",
            city:"Malibu",
            state:"CA",
            bedroom:3,
            bathroom:3
        },{
            image:"https://tuassets.com/wp-content/reactpress/imgs/landing/house2.png?_t=1674482428",
            price:"7,000",
            city:"Malibu",
            state:"CA",
            bedroom:3,
            bathroom:3
        },{
            image:"https://tuassets.com/wp-content/reactpress/imgs/landing/house2.png?_t=1674482428",
            price:"7,000",
            city:"Malibu",
            state:"CA",
            bedroom:3,
            bathroom:3
        }]
    }]

    const [curHouse, setCurHouse] = useState(dataList[0]);

  return (
    <div className="landing-TopProperties">
        <div className="landing-TopProperties-title">
            Top travel destinations
            <p>Top properties</p>
        </div>
        <div className="landing-TopProperties-Cities">
            {dataList.map((item, key)=>{
                return(
                    <button id={"landing-TopProperties-Cities-button"+key} className="landing-TopProperties-Cities-button " onClick={()=>setCurHouse(item)}>
                        {item.cityName}
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.6">
                                <path d="M23.789 23.7882H14.738M23.789 23.7882V14.7373M23.789 23.7882L9.64683 9.64609" stroke="black"/>
                            </g>
                        </svg>
                    </button>
                )
            })}
        </div>
        <div className="landing-TopProperties-Houses">
            {
                curHouse.houses.map((item, key)=>{
                    return (
                        <div className="landing-TopProperties-Houses-house">
                            <img src={item.image}/>
                            <div className="houseInfoRow1">
                                <div>
                                    {"$"+item.price}
                                    <span>/share</span>
                                </div>
                                <img src="https://tuassets.com/wp-content/reactpress/imgs/landing/like.svg"/>

                            </div>
                            <div className="houseInfoRow2">
                                <p>{item.city+", "+item.state}</p>

                                <strong>{item.bedroom+"BD, "+item.bathroom+"BA"}</strong>
                            </div>

                        </div>
                    )
                })
            }
        </div>


    </div>
  );
}

export default App;
