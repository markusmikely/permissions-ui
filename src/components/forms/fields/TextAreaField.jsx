import React from "react";

const TextAreaField = ({ form, field, handleChange }) => {
    return <textarea 
        {...field}
        value={form[field.name]}
        onChange={e => handleChange(e, field.name)} />
}

export default TextAreaField