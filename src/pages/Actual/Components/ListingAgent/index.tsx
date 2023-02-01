import React, { useState } from "react";
import "./index.scss";

function App() {

    const [agentInfo, setAgentInfo] = useState({
        name:"Ivey Henning",
        title:"COURTESY OF PURDY REAL ESTATE",
        phone:"(407) 465-5160",
        email:"IveyH@gmail.com",
        contact:"558 Fox Hill Rd, Chatham, MA 02633"
    })

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
