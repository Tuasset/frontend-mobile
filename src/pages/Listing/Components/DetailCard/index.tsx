import React from "react";
import { HeartOutline } from "antd-mobile-icons";
import "./index.scss";

const imgUrl =
  "https://tuassets.com/wp-content/uploads/2022/07/TinyHouseOnWheel-300x200.jpg";
const dataList = [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13];

const App: React.FC<{ list: any }> = ({ list }) => {
  return (
    <div className="listing-card">
      {list.map((item:any, idx:number) => {
        const { Images } = item;
        return <div className="item" key={String(idx)}>
        <img src={Images} alt="" className="img" />
        <div className="detail-wrapper">
          <div className="share-wrapper">
            <div className="money-wrapper">
              <span className="dollar">${`${item['Regular price']}`}</span>
              <span className="unit">/share</span>
            </div>
            <div className="collect">
              <HeartOutline color="red" />
            </div>
          </div>
          <div className="address">
            <div className="main">{`${item['Meta: city']},${item['Meta: state']}`}</div>
            <div className="detai">{`${item['Meta: bathroom_numbers']}BD·${item['Meta: bedroom_numbers']}BA`}</div>
          </div>
          <div className="house-type">{item['Tags']}</div>
          <div className="car-about">Car Rental Available</div>
        </div>
      </div>
      })}
    </div>
  );
}

export default App;
