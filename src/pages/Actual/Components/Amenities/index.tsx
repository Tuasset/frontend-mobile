import React, {useEffect, useState} from "react";
import "./index.scss";


const App: React.FC<{ actualDetail: any }> = ({ actualDetail }) => {

  // const [iconShow, setIconShow] = useState([true,true,true,true,true,true,true])

  const [iconList, setIconList] = useState([{
      url:"https://tuassets.com/wp-content/reactpress/imgs/actual/house.svg",
      name:"House Repair",
      ifShow: false
    }])
  // const iconList = [{
  //   url:"https://tuassets.com/wp-content/reactpress/imgs/actual/house.svg",
  //   name:"House Repair",
  //   ifShow:iconShow[0]
  // },{
  //   url:"https://tuassets.com/wp-content/reactpress/imgs/actual/checkin.svg",
  //   name:"Self check-in",
  //   ifShow:iconShow[1]
  // },{
  //   url:"https://tuassets.com/wp-content/reactpress/imgs/actual/airCondition.svg",
  //   name:"Air Conditioner",
  //   ifShow:iconShow[2]
  // },{
  //   url:"https://tuassets.com/wp-content/reactpress/imgs/actual/wifi.svg",
  //   name:"Wifi",
  //   ifShow:iconShow[3]
  // },{
  //   url:"https://tuassets.com/wp-content/reactpress/imgs/actual/kitchen.svg",
  //   name:"Kitchen",
  //   ifShow:iconShow[4]
  // },{
  //   url:"https://tuassets.com/wp-content/reactpress/imgs/actual/microwave.svg",
  //   name:"Microwave",
  //   ifShow:iconShow[5]
  // },{
  //   url:"https://tuassets.com/wp-content/reactpress/imgs/actual/hotTub.svg",
  //   name:"Private hot tub",
  //   ifShow:iconShow[6]
  // }]

  // const iconList: { url: string; name: string; ifShow: boolean; }[] = [];
  //
  useEffect(()=>{
    console.log("-------actualDetail.amenities------");
    console.log(actualDetail.amenities);
    if (actualDetail.amenities!=undefined){
      let amenities = actualDetail.amenities;
        let newList: { url: string; name: string; ifShow: boolean; }[] = []
      amenities.map((item:any)=>{
          newList.push({
          url:"https://tuassets.com/wp-content/reactpress/imgs/actual/" + item.value + ".svg",
          name:item.label,
          ifShow:true
        })
      });

        setIconList(newList);

    }

    console.log(iconList);

  },[actualDetail]);


  return (
    <div className="Amenities">
      <p className="title">
        Amenities
      </p>
      <div className="Amenities-contain">
        {
          iconList.map((item, key)=>{

            return item.ifShow ?(
                <div className="amenity">
                  <img src={item.url}/>
                  <span>
                    {item.name}
                  </span>
                </div>
            ) : ""
          })
        }

        <div className="showMore">
          <p>
            Show more
          </p>
        </div>

      </div>


    </div>
  );
}

export default App;
