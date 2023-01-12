import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Description from "./Components/Description";

function App() {
  let navigate = useNavigate();

  return (
    <div className="intro">
      <Description />
    </div>
  );
}

export default App;
