import React from "react";
import { HeartOutline } from "antd-mobile-icons";
import "./index.scss";

const imgUrl =
  "https://tuassets.com/wp-content/uploads/2022/07/TinyHouseOnWheel-300x200.jpg";
const dataList = [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13];

function App() {
  return (
    <div className="listing-card">
      {dataList.map((item) => (
        <div className="item" key={item}>
          <img src={imgUrl} alt="" className="img" />
          <div className="detail-wrapper">
            <div className="share-wrapper">
              <div className="money-wrapper">
                <span className="dollar">$20,000</span>
                <span className="unit">/share</span>
              </div>
              <div className="collect">
                <HeartOutline color="red" />
              </div>
            </div>
            <div className="address">
              <div className="main">Malibu, CA</div>
              <div className="detai">3BD·3BA</div>
            </div>
            <div className="house-type">House type_Input</div>
            <div className="car-about">Car Rental Available</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
