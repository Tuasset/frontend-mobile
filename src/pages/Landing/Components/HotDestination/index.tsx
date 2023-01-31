import React, { useState } from "react";

import "./index.scss";



function App() {

    const cityList = [{
        img: "https://tuassets.com/wp-content/reactpress/imgs/landing/SEATTLE.png?_t=1674213332",
        name: "Seattle"
    },{
        img: "https://tuassets.com/wp-content/reactpress/imgs/landing/BOSTON.png?_t=1674213332",
        name: "Boston"
    },{
        img: "https://tuassets.com/wp-content/reactpress/imgs/landing/MIAMI.png?_t=1674213332",
        name: "Miami"
    },{
        img: "https://tuassets.com/wp-content/reactpress/imgs/landing/nullCity.svg",
        name: "Tell  us \n" +
            "your wish"
    }]

  return (
    <div className="landing-HotDestination">
        <div className="landing-HotDestination-title">
            With us, enjoy your vacation at hot travel destinations at
            <p>your own homes</p>
        </div>
        <div className="landing-HotDestination-city">
            {cityList.map((item,key)=> {

                    return (
                        <div className="landing-HotDestination-city-each">
                            <img src={item.img}/>

                            <p>{item.name}</p>
                        </div>
                    )
                }
            )}
        </div>
    </div>
  );
}

export default App;
