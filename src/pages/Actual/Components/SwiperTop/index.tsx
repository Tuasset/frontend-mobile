import React, { useState } from "react";
import {Collapse, Swiper, Toast} from "antd-mobile";
import "./index.scss";

function App() {
  const [images, setImages] = useState([{
    url:"https://tuassets.com/wp-content/reactpress/imgs/actual/swipper1.png?_t=1675159147",
    link:""
  },{
    url:"https://tuassets.com/wp-content/reactpress/imgs/actual/swipper2.jpeg?_t=1675159147",
    link:""
  },{
    url:"https://tuassets.com/wp-content/reactpress/imgs/actual/swipper1.png?_t=1675159147",
    link:""
  }])

  const items = images.map((image, index) => (
      <Swiper.Item key={index}>
        <img src={image.url}></img>
      </Swiper.Item>
  ))

  return (
    <div className="SwiperTop">
      <Swiper className="SwiperTop-swiper" autoplay loop>{items}</Swiper>

    </div>
  );
}

export default App;
