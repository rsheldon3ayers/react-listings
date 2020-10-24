import React from "react";

const AgeContractLocation = (props,) => {
    
    return (
        <ul className="age-contract-location">
            {props.list.map((item,) =>
                <li>{item}</li>,
            )}
        </ul>
        
    );
};
export default AgeContractLocation;