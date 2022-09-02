import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./logo.png";

function App () {
    return (
        <div>
            <nav className="navigation">
                <img className="logo" alt="logo" src={logo} />
                <span className="logo">React Facts</span>
                <h3 className="title">React Project</h3>
            </nav>
            <div className="bcontainer">
                <h1>Fun facts about React</h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
        </div>
    )
}

ReactDOM.render (<App />, document.getElementById("root"))