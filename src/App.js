import React from "react";
import logo from "./images/bg-header-mobile.svg";
import "./App.scss";
import data from "./data";
import ListingsContainer from "./ListingsContainer";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <ListingsContainer jobs={data}/>
        </div>
    );
}

export default App;
