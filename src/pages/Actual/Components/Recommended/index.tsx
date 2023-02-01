import React, { useState } from "react";
import "./index.scss";

function App() {

    const [recomendedHouse, setRecommondedHouse] = useState([{
            image:"https://tuassets.com/wp-content/reactpress/imgs/landing/house1.png?_t=1674482428",
            price:"40,000",
            city:"Malibu",
            state:"CA",
            bedroom:3,
            bathroom:3,
            like:false
        },{
            image:"https://tuassets.com/wp-content/reactpress/imgs/landing/house2.png?_t=1674482428",
            price:"7,000",
            city:"Malibu",
            state:"CA",
            bedroom:3,
            bathroom:3,
            like:false
        },{
            image:"https://tuassets.com/wp-content/reactpress/imgs/landing/house2.png?_t=1674482428",
            price:"7,000",
            city:"Malibu",
            state:"CA",
            bedroom:3,
            bathroom:3,
            like:false
        }])

    const likeChange = (ifLike:any,key:number)=>{

        const arrCopy = recomendedHouse.slice();
        recomendedHouse[key].like = !ifLike

        setRecommondedHouse(arrCopy);

    }

  return (
    <div className="Recommended">
      <p className="title">
        Recommended for you
      </p>

        <div className="recommended-Houses">
            {
                recomendedHouse.map((item, key)=>{
                    return (
                        <div className="recommended-Houses-house">
                            <img src={item.image}/>
                            <div className="houseInfoRow1">
                                <div>
                                    {"$"+item.price}
                                    <span>/share</span>
                                </div>
                                <img onClick={()=>likeChange(item.like, key)} src={item.like?"https://tuassets.com/wp-content/reactpress/imgs/landing/heart.png?_t=1674825136":"https://tuassets.com/wp-content/reactpress/imgs/landing/love.png?_t=1674825136"}/>

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
