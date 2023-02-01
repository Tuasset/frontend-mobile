import React, { useState } from "react";
import "./index.scss";

function App() {

    const [attractions, setAttractions] = useState([{
        url:"https://tuassets.com/wp-content/reactpress/imgs/actual/attraction1.png?_t=1675244545",
        alt:""
    },{
        url:"https://tuassets.com/wp-content/reactpress/imgs/actual/attraction2.png?_t=1675244545",
        alt:""
    },{
        url:"https://tuassets.com/wp-content/reactpress/imgs/actual/attraction3.png?_t=1675244545",
        alt:""
    }])

  return (
    <div className="AttractionsNearby">
        <p className="title">
        Attractions nearby
      </p>
        <div className="attractions">
            {attractions.map((item, key)=>{
                return(
                    <img src={item.url} alt={item.alt}/>
                )
            })}
        </div>

    </div>
  );
}

export default App;
