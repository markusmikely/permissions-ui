import React from "react";

const TextAreaField = ({ value, field, handleChange }) => {
    return <textarea 
        id={field.name}
        {...field}
        value={value}
        onChange={e => handleChange(e, field.name)} />
}

export default TextAreaField