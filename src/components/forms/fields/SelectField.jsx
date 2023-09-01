import React from "react";

const SelectField = ({ field, handleChange }) => {

    console.log(field.options)
    if(!field.options) return null 

    return (
        <select 
            name={field.name}
            onChange={e => handleChange(e, field.name)}>
                <option value="all">All Roles</option>
                {field.options.map((option, optionIndex) => {
                    return <option key={optionIndex} value={option._id}>{option.name}</option>
                })}
        </select>
    )
}

export default SelectField