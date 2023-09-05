import React from "react";
import { MultiSelect } from "react-multi-select-component";

const MulitselectField = ({ form, field, handleChange }) => {

    if(!field.options) return null 

    return (
        <MultiSelect
            options={field.options}
            value={form[field.name].map(v => {
                return field.options.filter(o => o.value === v)[0]
            })}
            onChange={values => handleChange(values, field.name)}
            labelledBy={field.label}
        />
    )
}

export default MulitselectField