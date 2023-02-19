import React, {useEffect, useState} from "react";
import "./index.scss";


const App: React.FC<{ actualDetail: any }> = ({ actualDetail }) => {

    const [agentInfo, setAgentInfo] = useState({
        name:"Ivey Henning",
        title:"COURTESY OF PURDY REAL ESTATE",
        phone:"(407) 465-5160",
        email:"IveyH@gmail.com",
        contact:"558 Fox Hill Rd, Chatham, MA 02633"
    })

    useEffect(()=>{
        if (actualDetail.agent_name_1!=undefined){

            setAgentInfo({
                name:actualDetail.agent_name_1,
                title:actualDetail.agent_describe_1,
                phone:actualDetail.agent_phone_1,
                email:actualDetail.agent_email_1,
                contact: actualDetail.agent_address_1 ? actualDetail.agent_address_1.address : "unknown"
            })
        }

    },[actualDetail]);

  return (
    <div className="ListingAgent">
        <p className="title">
        Listing Agent
      </p>
        <div className="ListingAgent-contain">
            <p className="name">
                {agentInfo.name}
            </p>
            <div className="agent-title">
                Title
                <p>
                    {agentInfo.title}
                </p>
            </div>
            <div className="phone">
                <img src="https://tuassets.com/wp-content/reactpress/imgs/actual/phone.svg"/>
                {"Phone: " + agentInfo.phone}
            </div>
            <div className="email">
                <img src="https://tuassets.com/wp-content/reactpress/imgs/actual/envelope.svg"/>
                {"Email: " + agentInfo.email}
            </div>
            <div className="contact">
                <img src="https://tuassets.com/wp-content/reactpress/imgs/actual/contact.svg"/>
                {agentInfo.contact}
            </div>

        </div>

    </div>
  );
}

export default App;
