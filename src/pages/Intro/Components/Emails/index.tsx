import React from "react";
import {
  Form,
  Input,
  Button,
  Dialog,
  TextArea,
  DatePicker,
  Selector,
  Slider,
  Stepper,
  Switch,
} from "antd-mobile";
import "./index.scss";

function App() {
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
        <input placeholder="Please enter your name" />
        <input placeholder="Please enter your email " />
        <input placeholder="Phone number (optional)" />

        <div className="text-wrapper">
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Please type your questions here "
          ></textarea>
          <div className="btn">Submit</div>
        </div>
        <div className="agree-wrapper">
            
        </div>
      </div>
    </div>
  );
}

export default App;
