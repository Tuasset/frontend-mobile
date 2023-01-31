import React, { useState } from "react";
import "./index.scss";

function App() {

    const [carsInformation, setCarsInformation] = useState([{
        name:"Car A",
        img:"https://tuassets.com/wp-content/reactpress/imgs/actual/CarA.png?_t=1675184089",
        description:"Detailed Information regarding the car. This exclusive community in the prime Nueva Andalucía. abcd Detailed Information"
    },{
        name:"Car B",
        img:"https://tuassets.com/wp-content/reactpress/imgs/actual/CarB.png?_t=1675184089",
        description:"Detailed Information regarding the car. "
    },{
        name:"Car C",
        img:"https://tuassets.com/wp-content/reactpress/imgs/actual/CarC.png?_t=1675184089",
        description:"Detailed Information about the car. "
    }])

  return (
    <div className="CarRentalService">
      <p>
        Car Rental Service
      </p>
      <div className="detail">
          Explanation of Car service.
      </div>

        <div className="Cars">
            {
                carsInformation.map((item, key)=>{
                    return(
                        <div className="singleCar">
                            <div className="singleCar-top">
                                <p>{item.name}</p>
                                <img src={item.img}/>
                            </div>
                            <div className="description">
                                <p>
                                    {item.description}
                                </p>
                                <span>
                                    Show more
                                </span>
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
