import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Description from "./Components/Description";
import Card from "./Components/Card";
import Financing from "./Components/Financing";
import Faqs from "./Components/Faqs";
import Emails from "./Components/Emails";
import Explore from "./Components/Explore";
import Bottom from "./Components/Bottom";

function App() {

  return (
    <div className="intro">
      <Description />
      <Card />
      <Financing />
      <Faqs />
      <Emails />
      <Explore />
      <Bottom />
    </div>
  );
}

export default App;
