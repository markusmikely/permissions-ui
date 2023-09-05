import React from "react";
import { useFormikContext } from "formik";

const TextField = ({ value, field, handleChange }) => {
    
    const { setFieldValue } = useFormikContext()

    return (
        <input 
            id={field.name}
            {...field}
            value={value}
            onChange={e => {console.log(handleChange); setFieldValue(field.name, e.target.value)}} />
    )
}

export default TextField