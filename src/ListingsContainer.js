import React from "react";
import ListingBox from "./ListingBox.js";
import data from "./data.json";

const ListingsContainer = () => {
    return(
        <div className="listings-container">
            <ListingBox />
        </div>
    );
};

export default ListingsContainer;