import React from "react";

const ToggleField = ({ field, handleChange }) => {

    return (
        <label className="switch" htmlFor={field.name}>
            <input 
                id={field.name}
                type="checkbox" 
                onChange={e => handleChange(e, field.name)}
                name={field.name} />
            <span className="slider round"></span>
        </label>
    );
}

export default ToggleField