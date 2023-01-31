import React, { useState } from "react";
import "./index.scss";

function App() {

  const [iconShow, setIconShow] = useState([true,true,true,true,true,true,true])

  const iconList = [{
    url:"https://tuassets.com/wp-content/reactpress/imgs/actual/house.svg",
    name:"House Repair",
    ifShow:iconShow[0]
  },{
    url:"https://tuassets.com/wp-content/reactpress/imgs/actual/checkin.svg",
    name:"Self check-in",
    ifShow:iconShow[1]
  },{
    url:"https://tuassets.com/wp-content/reactpress/imgs/actual/checkin.svg",
    name:"Air Conditioner",
    ifShow:iconShow[2]
  },{
    url:"https://tuassets.com/wp-content/reactpress/imgs/actual/wifi.svg",
    name:"Wifi",
    ifShow:iconShow[3]
  },{
    url:"https://tuassets.com/wp-content/reactpress/imgs/actual/kitchen.svg",
    name:"Kitchen",
    ifShow:iconShow[4]
  },{
    url:"https://tuassets.com/wp-content/reactpress/imgs/actual/microwave.svg",
    name:"Microwave",
    ifShow:iconShow[5]
  },{
    url:"https://tuassets.com/wp-content/reactpress/imgs/actual/hotTub.svg",
    name:"Private hot tub",
    ifShow:iconShow[6]
  },]


  return (
    <div className="Amenities">
      <p>
        Amenities
      </p>
      <div className="Amenities-contain">
        {
          iconList.map((item, key)=>{

            return item.ifShow ?(
                <div className="amenity">
                  <img src={item.url}/>
                  <span>
                    {item.name}
                  </span>
                </div>
            ) : ""
          })
        }

        <div className="showMore">
          <p>
            Show more
          </p>
        </div>

      </div>


    </div>
  );
}

export default App;
