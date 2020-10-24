import React from "react";
import ListingBox from "./ListingBox.js";
import data from "./data";

const ListingsContainer = () => {
    const company = data.map((data, i,) =>                
        <ListingBox key={data.id.toString()} companyName={data.company} languages={data.languages} data={data}/>,
    );
    return(
        <div className="listings-container">
            {company}
        </div>
    );
};

export default ListingsContainer;