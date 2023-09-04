import React from "react";

const TextField = ({ form, field, handleChange }) => {
    return (
        <input 
            {...field}
            value={form[field.name]}
            onChange={e => handleChange(e, field.name)} />
    )
}

export default TextField