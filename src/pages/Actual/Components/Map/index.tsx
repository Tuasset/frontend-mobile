import React, {useEffect, useState} from "react";
import "./index.scss";
import GoogleMapReact from 'google-map-react';




const App: React.FC<{ actualDetail: any }> = ({ actualDetail }) => {
    // console.log("map actualDetail");
    // console.log(actualDetail);

    const [mapData, setMapData] = useState({
        lat:42.361145,
        lng:-71.057083,
        zoom:15,
        constString:"<h2>This is the position of the poduct</h2>"
    })

    const googleMap = window.google && window.google.maps;
    useEffect(()=>{
        if (typeof(googleMap) == "undefined"){
            return;
        }

        if (actualDetail.product_position!=undefined){

            setMapData({
                ...actualDetail,
                lat: actualDetail.product_position.lat,
                lng: actualDetail.product_position.lng,
                zoom: actualDetail.product_position.zoom
            })
        }


        let myCenter = new googleMap.LatLng(mapData.lat, mapData.lng);
        let mapProp = {
            center:myCenter,
            zoom:mapData.zoom,
        };
        let myMap = document.getElementById("googleMap")!;

        let map = new googleMap.Map(myMap,mapProp);
        let marker = new googleMap.Marker({
            position: myCenter,
            map:map,
        });
        let infoWindow = new googleMap.InfoWindow({
            content: mapData.constString
        });

        googleMap.event.addListener(marker, 'click', function() {
            infoWindow.open(map, marker);
        });
    },[]);

  return (
    <div className="Map">
        <p className="title">
            Map
        </p>
      <div className="map-contain">
          <div id="googleMap" ></div>
      </div>

    </div>
  );
}

export default App;
