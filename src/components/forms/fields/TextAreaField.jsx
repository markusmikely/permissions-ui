import React from "react";

const TextAreaField = ({ field, handleChange }) => {
    return <textarea 
        {...field}
        onChange={e => handleChange(e, field.name)} />
}

export default TextAreaField