import React from "react";
import { MultiSelect } from "react-multi-select-component";

const MulitselectField = ({ form, field, handleChange }) => {

    console.log('formm', form)
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
        // <select 
        //     name={field.name}
        //     onChange={e => handleChange(e, field.name)}>
        //         {field.options.map((option, optionIndex) => {
        //             return <option key={optionIndex} value={option._id}>{option.name}</option>
        //         })}
        // </select>
    )
}

export default MulitselectField