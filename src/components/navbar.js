import React from "react";
import ReactLogo from "../images/React-icon.png"

export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo-side">
                <img src={ReactLogo} alt="React-icon"/>
                <h1 className="logo-txt">ReactFacts</h1>
            </div>
            <div className="annotation-side">
                <h4 className="annotation-txt">React Course-Project 1</h4>
            </div>
        </nav>
    )
}