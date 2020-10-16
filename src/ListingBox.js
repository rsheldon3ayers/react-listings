import React from "react";

const ListingBox = (props,) => {
    return (
        <div className="listing-box">
            <div className="listing-info">
                <div className="top">
                    <p className="company-name">{props.companyName}</p>
                    <ul className="top-tags">
                        <li>New</li>
                        <li>Featured</li>
                    </ul>
                </div>
                
                <p className="role-title"></p>
                <ul className="age-contract-location"></ul>
                <hr />
                <ul className="bottom-tags"></ul>
            </div>
        </div>
    );
};

export default ListingBox;