import React from "react";
import "./index.css";
import { Button } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import Bottom from "./Components/Bottom";
import Started from "./Components/Started";
import InvestmentType from "./Components/InvestmentType";
import HotDestination from "./Components/HotDestination";
import TopProperties from "./Components/TopProperties";
import ToList from "./Components/ToList";
import CreateAccount from "./Components/CreateAccount";
import SubscribeEmail from "./Components/SubscribeEmail";



function App() {
  let navigate = useNavigate();

  return (
    <div className="landing">
        <Started/>
        <InvestmentType/>
        <HotDestination/>
        <TopProperties/>
        <ToList/>
        <CreateAccount/>
        <SubscribeEmail/>

        <Bottom/>
    </div>
  );
}

export default App;
