import React from "react";
import "./index.css";
import { useNavigate, useLocation } from "react-router-dom";
import Bottom from "./Components/Bottom";
import SwiperTop from "./Components/SwiperTop";
import DetailBuy from "./Components/DetailBuy";
import About from "./Components/About";
import Amenities from "./Components/Amenities";
import Map from "./Components/Map";
import CarRentalService from "./Components/CarRentalService";
import InvestmentValueInformation from "./Components/InvestmentValueInformation";
import AttractionsNearby from "./Components/AttractionsNearby";
import ActivitiesNearby from "./Components/ActivitiesNearby";
import ListingAgent from "./Components/ListingAgent";
import Recommended from "./Components/Recommended";
import { stat } from "fs";

const App: React.FC<{ offerMap: any }> = ({ offerMap }) => {
  let navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { ID = "" } = state;

  console.log("current data",  offerMap[ID]);

  return (
    <div className="actual">
      <SwiperTop />
      <DetailBuy />
      <About />
      <Amenities />
      <Map />
      <CarRentalService />
      <InvestmentValueInformation />
      <AttractionsNearby />
      <ActivitiesNearby />
      <ListingAgent />
      <Recommended />

      <Bottom />
    </div>
  );
};

export default App;
