import React, { useState } from "react";
import { Collapse } from "antd-mobile";
import "./index.scss";

const bottomList = [
  {
    title: "About",
    list: [
      "Learn",
      "Buy assets",
      "Book your trip",
      "Get the inside story",
      "Press",
      "Careers",
    ],
  },
  {
    title: "Guide",
    list: [
      "Listing agency",
      "Communities",
      "Safety information",
      "Privacy policy",
      "Terms of use",
      "Cancellation options",
    ],
  },
  {
    title: "Support",
    list: ["Help center", "Contact us", "Listing your asset"],
  },
];

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
    <div className="landing-bottom">
      <p className="title">Tuassets</p>
      <p className="des">
        allows you to co-own homes with others in the most sought-after travel
        destinations but also can provide you an alternative source of income.
      </p>
      <div className="search">
        <input type="text" placeholder="Enter your email" onChange={handleChange}/>
        <div className="btn" onClick={submitMail}>Subscribe</div>
      </div>
      <Collapse defaultActiveKey={["About"]}>
        {bottomList.map((item, idx) => {
          const { title, list } = item;
          return (
            <Collapse.Panel key={title} title={title}>
              {list.map((text, idx) => (
                <p className="item" key={String(idx)}>
                  {text}
                </p>
              ))}
            </Collapse.Panel>
          );
        })}
      </Collapse>
    </div>
  );
}

export default App;
