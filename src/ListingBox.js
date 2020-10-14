import React from "react";

const ListingBox = (props,) => {
    return (
        <div className="listing-box">
            <div className="listing-info">
                <p className="company-name top-tags">{props.companyName}</p>
                <p className="role-title"></p>
                <ul className="age-contract-location"></ul>
                <hr />
                <ul className="bottom-tags"></ul>
            </div>
        </div>
    );
};

export default ListingBox;