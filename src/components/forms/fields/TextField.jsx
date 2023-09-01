import React from "react";

const TextField = ({ field, handleChange }) => {
    return (
        <input 
            {...field}
            onChange={e => handleChange(e, field.name)} />
    )
}

export default TextField