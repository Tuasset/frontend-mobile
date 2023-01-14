import React from "react";
import "./index.scss";

const dataList = [
  {
    img1: "https://tuassets.com/wp-content/reactpress/imgs/intro/1-1.png?_t=1673589168",
    img2: "https://tuassets.com/wp-content/reactpress/imgs/intro/1-2.png?_t=1673589168",
    title: "Travel and car rental",
  },
  {
    img1: "https://tuassets.com/wp-content/reactpress/imgs/intro/2-1.png?_t=1673589168",
    img2: "https://tuassets.com/wp-content/reactpress/imgs/intro/2-2.png?_t=1673589168",
    title: "Rental and investment",
  },
];

function App() {
  return (
    <div className="intro-card">
      {dataList.map((item) => {
        const { img1, img2, title } = item;
        return (
          <div className="cards-line">
            <div className="img-wrapper">
              <img className="img" src={img1} alt="img" />
              <img className="img" src={img2} alt="img" />
            </div>
            <p className="title">{title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
