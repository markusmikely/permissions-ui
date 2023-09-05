import React from "react";

const SelectField = ({ form, field, handleChange }) => {

    if(!field.options) return null 

    return (
        <select 
            name={field.name}
            value={form[field.name]}
            onChange={e => handleChange(e, field.name)}>
                {field.options.map((option, optionIndex) => {
                    return <option key={optionIndex} value={option._id}>{option.name}</option>
                })}
        </select>
    )
}

export default SelectField