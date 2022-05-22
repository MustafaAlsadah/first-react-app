import React from "react";
import reactMark from "../images/reactjs-icon 2.svg"; 

export default function MainContent() {
    return (
        <div className="main-content-container">
            <h1>Fun Facts About React</h1>
            <ul className="main--facts-list">
                <div>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </div>
                <img className="main--react-mark" src={reactMark} alt="react-mark"/>
            </ul>
        </div>
    );
}