import React, { useState } from "react";


import "./index.scss";

function App() {

    const submitMail = async () => {

        const rawResponse = await fetch('https://tuassets.com/wp-json/mobile/sendEmail?to='+subscribeEmail, {
            method: 'GET',
            // body: data,
        })
            .catch((err) => {console.log(err)})
            .then(function () {
            console.log("sent email to email address")
        });

        const content = await rawResponse;
//returns promise, status fullfiled
    }


    const [subscribeEmail, setSubscribeEmail] = useState('');
    const handleChange = (event:any) => {
        setSubscribeEmail(event.target.value);
    };


    return (
    <div className="landing-SubscribeEmail">
        <p className="landing-SubscribeEmail-title">Get exclusive access, plus be the first to know about upcoming offerings.</p>
        <div className="landing-SubscribeEmail-Main">
            <div className="search">
                <input type="text" placeholder="Enter your email address" onChange={handleChange}/>
                <div className="btn" onClick={submitMail}>Subscribe</div>
            </div>
        </div>
    </div>
  );
}

export default App;
