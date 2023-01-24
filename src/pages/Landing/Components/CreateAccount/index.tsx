import React, { useState } from "react";


import "./index.scss";

function App() {

  return (
    <div className="landing-CreateAccount">
        <p className="landing-CreateAccount-title">Start Your Real Estate Investment Journey Today</p>
        <div className="landing-CreateAccount-Main">
            <button>
                Create an account now
            </button>
            <p>
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
