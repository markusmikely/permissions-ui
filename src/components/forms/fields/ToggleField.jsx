import React from "react";

const ToggleField = ({ field, handleChange }) => {
    return (
        <label className="switch">
            <input 
                type="checkbox" 
                name={field.name} 
                value={field.value}
                onChange={e => handleChange(e, field.name)} />
            <span className="slider round"></span>
        </label>
    );
}

export default ToggleField