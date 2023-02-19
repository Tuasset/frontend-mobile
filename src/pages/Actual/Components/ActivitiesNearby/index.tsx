import React, {useEffect, useState} from "react";
import "./index.scss";


const App: React.FC<{ actualDetail: any }> = ({ actualDetail }) => {
    const [activityInfo, setActivityInfo] = useState([{
        name:"Perfect for Skiing",
        description: "Perfect for Skiing.Brief Introduction of this place."
    },{
        name:"Perfect for Skiing",
        description: "Perfect for Skiing.Brief Introduction of this place."
    }])

    useEffect(()=>{
        if (actualDetail.activity_title_1!=undefined){

            setActivityInfo([{
                name:actualDetail.activity_title_1,
                description: actualDetail.activity_content_1
            },{
                name:actualDetail.activity_title_1,
                description: actualDetail.activity_content_2
            }])
        }

    },[actualDetail]);

  return (
    <div className="ActivitiesNearby">
        <p className="title">
        Activities nearby
      </p>
        <div className="activites">
            {activityInfo.map((item, key)=>{
                return(
                    <div className="activity">
                        <p className="activity-name">
                            {item.name}
                        </p>
                        <div className="activity-description-outer">
                            <p className="activity-description">
                                {item.description}
                            </p>
                        </div>


                    </div>
                )
            })}

        </div>
    </div>
  );
}

export default App;
