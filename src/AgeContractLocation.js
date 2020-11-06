import React from "react";

const AgeContractLocation = (props,) => {
    
    console.log(props.list,);
    return (
        <>
            {props.list.map((item,) => 
                item ? <p className="details">{item}</p> : null,
            )}
        </>
        
    );
};
export default AgeContractLocation;