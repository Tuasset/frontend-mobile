import React from "react";
import "./index.scss";
import {useNavigate} from "react-router-dom";

function App() {
    let navigate = useNavigate();
  return (
    <div className="intro-explore">
        <div className="content">
            <img className="img" src="https://tuassets.com/wp-content/reactpress/imgs/intro/content-img.png?_t=1674030913" alt="image" />
            <p className="desc">Browse our listing of the properties located in popular travel destinations. </p>
            <img src="https://tuassets.com/wp-content/reactpress/imgs/intro/explore-btn.png?_t=1674031586"
                 alt="button"
                 className="btn"
                 onClick={() => {
                navigate("/listing");
            }}/>
        </div>
    </div>
  );
}

export default App;
