import React, {useEffect, useState} from "react";
import "./index.scss";


const App: React.FC<{ actualDetail: any }> = ({ actualDetail }) => {

    const [attractions, setAttractions] = useState([{
        url:"https://tuassets.com/wp-content/reactpress/imgs/actual/attraction1.png?_t=1675244545",
        alt:""
    },{
        url:"https://tuassets.com/wp-content/reactpress/imgs/actual/attraction2.png?_t=1675244545",
        alt:""
    },{
        url:"https://tuassets.com/wp-content/reactpress/imgs/actual/attraction2.png?_t=1675244545",
        alt:""
    }])

    useEffect(()=>{
        if (actualDetail.attraction_img_1!=undefined){

            setAttractions([{
                url:actualDetail.attraction_img_1.url,
                alt:""
            },{
                url:actualDetail.attraction_img_2.url,
                alt:""
            },{
                url:actualDetail.attraction_img_3.url,
                alt:""
            }])
        }

    },[actualDetail]);

  return (
    <div className="AttractionsNearby">
        <p className="title">
        Attractions nearby
      </p>
        <div className="attractions">
            {attractions.map((item, key)=>{
                return(
                    <img src={item.url} alt={item.alt}/>
                )
            })}
        </div>

    </div>
  );
}

export default App;
