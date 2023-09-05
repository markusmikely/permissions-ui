import React from "react";
import { MultiSelect } from "react-multi-select-component";

const MulitselectField = ({ value, field, handleChange }) => {

    if(!field.options) return null 

    return (
        <MultiSelect
            id={field.name}
            options={field.options}
            value={value.map(v => {
                return field.options.filter(o => o.value === v)[0]
            })}
            onChange={values => handleChange(values, field.name)}
            labelledBy={field.label}
        />
    )
}

export default MulitselectField