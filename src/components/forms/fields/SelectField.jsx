import React from "react";

const SelectField = ({ value, field, handleChange }) => {

    if(!field.options) return null 

    return (
        <select 
            id={field.name}
            name={field.name}
            value={value}
            onChange={e => handleChange(e, field.name)}>
                {field.options.map((option, optionIndex) => {
                    return <option key={optionIndex} value={parseInt(option._id)}>{option.name}</option>
                })}
        </select>
    )
}

export default SelectField