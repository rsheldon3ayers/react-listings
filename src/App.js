import React from "react";
import logo from "./images/bg-header-mobile.svg";
import data from "./data.json";
import "./App.css";
import ListingsContainer from "./ListingsContainer";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <ListingsContainer data={data}/>
        </div>
    );
}

export default App;
