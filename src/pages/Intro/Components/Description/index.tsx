import React from "react";
import "./index.scss";
import { Button } from "antd-mobile";
import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();

  return (
    <div className="description">
      <p className="title">Own your next vacation home, simplified.</p>
      <p className="subtitle">Simplified? Easy? Too good to be true? Nah.</p>
      <div className="paragraph-wrapper">
        <div className="paragraph-inner">
          <p className="paragraph-01">
            Honestly it’s pretty simple. With Travi you will co-own the home
            with other like minded vacationers. Woah! Is this a timeshare? To
            put it simply it is not. Our members are owners of their home.
            Period. Where timeshare does not produce revenue of any kind, Travi
            guides our members on short-term rental and selling a home. Our
            members will partner with a local real estate expert who can help
            guide them through the real estate journey.
          </p>
          <p className="paragraph-02">
            With home-ownership does come responsibilities. However, since Travi
            will help our members manage the home, we will take charge of all
            the cleaning, maintenance, utilities, and property tax payment. All
            our members are in charge of is the membership fee. That’s it!
          </p>
        </div>
      </div>
      <p className="bottom-text">What does the membership entail? </p>
    </div>
  );
}

export default App;
