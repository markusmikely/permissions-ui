import React from "react";

const FormGroup = ({label, children, name}) => {

    return (
        <div className="form-group">
            {label && <label htmlFor={name}>{label}</label>}
            {children}
        </div>
    )
}

export default FormGroup