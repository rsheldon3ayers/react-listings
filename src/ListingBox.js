import React from "react";

const ListingBox = (props,) => {
    return (
        <div className="listing-box">
            <p>{props.companyName}</p>
            {/* //  company
            //  tags
            //  job title
            //  age position type location
            //  <hr />
            //  skill tags */}
        </div>
    );
};

export default ListingBox;