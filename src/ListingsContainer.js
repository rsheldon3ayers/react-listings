import React from "react";
import ListingBox from "./ListingBox.js";
import data from "./data";
console.log(data.length,);
const newData = data;
const ListingsContainer = (data,) => {
    const company = newData.map((data, i,) =>                
        <ListingBox key={data.id.toString()} companyName={data.company}/>,
    );
    return(
        <div className="listings-container">
            {company}
        </div>
    );
};

export default ListingsContainer;