import React from "react";

const ToggleField = ({ form, field, handleChange }) => {
    return (
        <label className="switch">
            <input 
                type="checkbox" 
                name={field.name} 
                checked={form[field.name] === true}
                onChange={e => handleChange(e, field.name)} />
            <span className="slider round"></span>
        </label>
    );
}

export default ToggleField