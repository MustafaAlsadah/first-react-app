import React from "react";
import ReactLogo from "../images/React-icon.png"

export default function Navbar(){
    return(
        <nav>
            <div>
                <img src={ReactLogo} alt="React-icon" width="10%" />
                <h1>ReactFacts</h1>
            </div>
            <div>
                <h2>React Course-Project 1</h2>
            </div>
        </nav>
    )
}