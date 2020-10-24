import React from "react";
import AgeContractLocation from "./AgeContractLocation.js";

const ListingBox = (props,) => {
    let topTag;
    if(props.data.new && props.data.featured) {
        topTag = <ul className="top-tags" >
            <li>New</li>
            <li>Featured</li>
        </ul>;
    }
    else if(props.data.new && !props.data.featured ) {
        topTag = <ul className="top-tags" >
            <li>New</li>
        </ul>;
    }
    else if(!props.data.new && props.data.featured ) {
        topTag = <ul className="top-tags" >
            <li>Featured</li>
        </ul>;
    }
    return (
        <div className="listing-box">
            <div className="listing-info">
                <div className="top">
                    <p className="company-name">{props.companyName}</p>
                    {topTag}
                    
                </div>
                
                <p className="role-title">{props.data.position}</p>
                <AgeContractLocation list={[props.data.postedAt, props.data.contract, props.data.location,]}/>
                <hr />
                <ul className="bottom-tags">
                    {props.data.languages.map((tag,) =>
                        <li>{tag}</li>,
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ListingBox;