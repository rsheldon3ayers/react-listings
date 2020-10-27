import React from "react";

const AgeContractLocation = (props,) => {
    
    console.log(props.list,);
    return (
        <ul className="age-contract-location">
            {props.list.map((item,) => 
                item ? <li>{item}</li> : null,
            )}
        </ul>
        
    );
};
export default AgeContractLocation;