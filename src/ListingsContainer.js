import React from "react";
import ListingBox from "./ListingBox.js";
import data from "./data";

const newData = data;

const ListingsContainer = () => {
    const company = newData.map((data, i,) =>                
        <ListingBox key={data.id.toString()} companyName={data.company} />,
    );
    return(
        <div className="listings-container">
            {company}
        </div>
    );
};

export default ListingsContainer;