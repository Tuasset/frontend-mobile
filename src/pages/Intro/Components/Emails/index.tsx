import React, { useState } from "react";
import { Checkbox } from "antd-mobile";
import "./index.scss";

function App() {
  const [check, setCheck] = useState<boolean>(true);

  const submitMail = async () => {

    const rawResponse = await fetch('https://tuassets.com/wp-json/mobile/sendContactEmail?to='+contactEmail+'&name='+contactName+'&phone='+contactPhone+'&content='+contactQuestion, {
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


  const [contactEmail, setContactEmail] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactQuestion, setContactQuestion] = useState('');

  const handleEmailChange = (event:any) => {
    setContactEmail(event.target.value);
  };
  const handleNameChange = (event:any) => {
    setContactName(event.target.value);
  };
  const handlePhoneChange = (event:any) => {
    setContactPhone(event.target.value);
  };
  const handleQuestionChange = (event:any) => {
    setContactQuestion(event.target.value);
  };



  return (
    <div className="intro-emails">
      <div className="email-form">
        <p className="title">
          <span>
            Still have questions?
            <br />
            Contact a specialist
          </span>
        </p>
        <input placeholder="Please enter your name" onChange={handleNameChange}/>
        <input placeholder="Please enter your email " onChange={handleEmailChange}/>
        <input placeholder="Phone number (optional)" onChange={handlePhoneChange}/>

        <div className="text-wrapper">
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Please type your questions here "
            onChange={handleQuestionChange}
          ></textarea>
          <div className="btn" onClick={submitMail}>Submit</div>
        </div>
        <div className="agree-wrapper">
          <Checkbox defaultChecked>
            Create an account with this email to receive exclusive updates &
            listings.
          </Checkbox>
        </div>
      </div>
    </div>
  );
}

export default App;
