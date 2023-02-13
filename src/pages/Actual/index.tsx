import React, {useEffect, useState} from "react";
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
import csvToJson from "csvtojson";

const App: React.FC<{ offerMap: any }> = ({ offerMap }) => {
  let navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { ID = "" } = state;


  const [jsonInfo, setJsonInfo] = useState();

  console.log("current data",  offerMap[ID]);

    useEffect(() => {
        console.log("current data");
        fetch(
            "https://tuassets.com/wp-json/wp/v2/Product/"+ID,
            {
                method: "get",
                headers: {
                    "content-type": "text/csv;charset=UTF-8",
                },
            }
        )
            .then(async (res) => {
                if (res.status === 200) {
                    const json = await res.json();
                    setJsonInfo(json.acf);
                } else {
                    console.log(`Error code ${res.status}`);
                }
            })
            .catch((e) => {
                console.error(e);
            });
    }, [ID]);

  return (
    <div className="actual">
      <SwiperTop />
      <DetailBuy actualDetail={jsonInfo}/>
      <About />
      <Amenities actualDetail={jsonInfo}/>
      <Map actualDetail={jsonInfo}/>
      <CarRentalService actualDetail={jsonInfo}/>
      <InvestmentValueInformation actualDetail={jsonInfo}/>
      <AttractionsNearby actualDetail={jsonInfo}/>
      <ActivitiesNearby actualDetail={jsonInfo}/>
      <ListingAgent actualDetail={jsonInfo}/>
      <Recommended />

      <Bottom />
    </div>
  );
};

export default App;
