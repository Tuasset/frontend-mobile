import React, { useState } from "react";


import "./index.scss";
import {useNavigate} from "react-router-dom";

function App() {

    let navigate = useNavigate();
    const toExperience = () =>{
        let path = `/experience`;
        navigate(path);
    }
    const toIntro = () =>{
        let path = `/mobile`;
        navigate(path);
    }
  return (
    <div className="landing-CreateAccount">
        <p className="landing-CreateAccount-title">Start Your Real Estate Investment Journey Today</p>
        <div className="landing-CreateAccount-Main">
            <button onClick={toIntro}>
                Create an account now
            </button>
            <p onClick={toIntro}>
                Learn more
                <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 17L9 9L1 1" stroke="#FED133" stroke-width="2"/>
                </svg>
            </p>

        </div>
    </div>
  );
}

export default App;
