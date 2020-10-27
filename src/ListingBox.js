import React from "react";
import AgeContractLocation from "./AgeContractLocation.js";


const ListingBox = (props,) => {
    const logoPath = "./images"
    const logo = props.data.logo;
    let topTag;
    if(props.data.new && props.data.featured) {
        topTag = <ul className="top-tags" >
            <li className="new">New</li>
            <li className="features">Featured</li>
        </ul>;
    }
    else if(props.data.new && !props.data.featured ) {
        topTag = <ul className="top-tags" >
            <li className="new">New</li>
        </ul>;
    }
    else if(!props.data.new && props.data.featured ) {
        topTag = <ul className="top-tags" >
            <li className="featured">Featured</li>
        </ul>;
    }
    return (
        <div className="listing-box">
            <div className="listing-info">
                <div className="top">
                    <img src={require(`${logoPath}/${logo}`,)} className="company-logo" alt={props.data.company + " Logo"}/>
                    <p className="company-name">{props.companyName}</p>
                    {topTag}
                    
                </div>
                
                <p className="role-title">{props.data.position}</p>
                <AgeContractLocation list={[props.data.postedAt, props.data.contract, props.data.location,]}/>
                <hr />
                <ul className="bottom-tags">
                    <AgeContractLocation list={[props.data.role, props.data.level,]}/>
                    {props.data.languages.map((tag,) =>
                        <li>{tag}</li>,
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ListingBox;