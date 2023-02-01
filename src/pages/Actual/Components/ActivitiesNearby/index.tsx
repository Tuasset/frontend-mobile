import React, { useState } from "react";
import "./index.scss";

function App() {
    const [activityInfo, setActivityInfo] = useState([{
        name:"Perfect for Skiing",
        description: "Perfect for Skiing.Brief Introduction of this place."
    },{
        name:"Perfect for Skiing",
        description: "Perfect for Skiing.Brief Introduction of this place."
    }])

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
                        <p className="activity-description">
                            {item.description}
                        </p>

                    </div>
                )
            })}

        </div>
    </div>
  );
}

export default App;
