import React from "react";
import AgeContractLocation from "./AgeContractLocation.js";


const ListingBox = (props,) => {
    const logoPath = "./images";
    const logo = props.data.logo;
    let topTag;
    if(props.data.new && props.data.featured) {
        topTag = 
        <>
            <span className="new">New!</span>
            <span className="features">Featured</span>
        </>;
    }
    else if(props.data.new && !props.data.featured ) {
        topTag = 
        <>
            <span className="new">New!</span>
        </>;
    }
    else if(!props.data.new && props.data.featured ) {
        topTag = 
        <>
            <span className="featured">Featured</span>
        </>;
    }
    return (
        <div className="listing-box">
            
            <div className="top">
                <div className="logo-container">
                    <img src={require(`${logoPath}/${logo}`,)} className="company-logo" alt={props.data.company + " Logo"}/>
                </div>
                <div className="job-header">
                    <h2 className="company-name">{props.companyName}</h2>
                    {topTag}
                </div>
                   
                    
            </div>
            <div className="job-middle"><p className="role-title">{props.data.position}</p>
                <div className="age-contract-location"><AgeContractLocation list={[props.data.postedAt, props.data.contract, props.data.location,]}/></div>
                <hr />
                <div className="bottom-tags">
                    <AgeContractLocation list={[props.data.role, props.data.level,]}/>
                    {props.data.languages.map((tag,) =>
                        <p className="details">{tag}</p>,
                    )}
                    {props.data.tools.map((tag,) =>
                        <p className="details">{tag}</p>,
                    )}
                </div>
            </div>
        </div>

    
    );
};

export default ListingBox;