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

const App: React.FC<{}> = ({ }) => {
  let navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { ID = "" } = state;


  const [jsonInfo, setJsonInfo] = useState({});
  const [houseInfo, setHouseInfo] = useState({});

  // console.log("current data",  offerMap[ID]);

    useEffect(() => {
        // console.log("current data");
        fetch(
            "https://tuassets.com/wp-json/wp/v2/Product/"+ID
        )
            .then(async (res) => {
                if (res.status === 200) {
                    const json = await res.json();

                    // console.log("json.acf: " + json.acf);
                    // console.log(json.acf);
                    const acf = json.acf;
                    // console.log(acf);
                    setJsonInfo(acf);
                } else {
                    console.log(`Error code ${res.status}`);
                }
            })
            .catch((e) => {
                console.error(e);
            });

    }, []);

    useEffect(()=>{
        // console.log("-----------json.product.useeffect:------------------- ");
        fetch(
            "https://tuassets.com/wc-api/v3/products/" + ID + "?filter[limit] =-1&consumer_key=ck_92f10c5ed7c48311480cc70a9daa50e8c5d47c58&consumer_secret=cs_230b4defef0228cc5363af773dee5de337ac4a71",
            {
                method: "get"
            }
        )
            .then(async (res) => {
                // console.log("-----------json.product.then:------------------- ");
                if (res.status === 200) {
                    const json = await res.json();

                    // console.log("-----------json.product:------------------- ");
                    // console.log("json.product: " + json.product);
                    // console.log(json.acf);
                    setHouseInfo(json.product);
                } else {
                    console.log(`Error code ${res.status}`);
                }
            })
            .catch((e) => {
                console.error(e);
            });
    }, [])

  return (
    <div className="actual">
      <SwiperTop />
      <DetailBuy actualDetail={jsonInfo} houseDetail={houseInfo}/>
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
