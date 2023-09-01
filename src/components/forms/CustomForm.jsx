import React from "react";
import FormGroup from "./FormGroup";
import TextField from "./fields/TextField";
import TextAreaField from "./fields/TextAreaField";
import ToggleField from "./fields/ToggleField";
import SelectField from "./fields/SelectField";

const CustomForm = ({ formData }) => {

    let initialState = {}
    formData.fields.forEach(field => {
        initialState[field.name] = field.value
    })
    
    const [form, setForm] = React.useState(initialState)

    const handleChange = (e, field) => {
        setForm(prevForm => ({...prevForm, [field]: e.target.value}))
    }

    const handleSubmit = () => {
        console.log('submitting form...', form)
    }

    const getField = field => {
        switch(field.type) {
            case "textarea":
                return <TextAreaField field={field} handleChange={handleChange} />
            case "toggle":
                return <ToggleField  field={field} handleChange={handleChange} />
            case "select":
                return <SelectField  field={field} handleChange={handleChange} />
            default:
                return <TextField field={field} handleChange={handleChange} />
        }
    }

    const getFormTitle = (type, entity) => {
        const title = type === "create" ? `Create a new ${entity}` : `Edit ${entity}` 
        return <h4>{title}</h4>
    }

    return (
        <div className="form">
            {getFormTitle(formData.type, formData.entity)}
            <form>
                {formData.fields.map((field, fieldIndex) => {
                    return <FormGroup key={fieldIndex} label={field.label}>
                        {getField(field)}
                    </FormGroup>
                })}
                <button type="submit" onClick={() => handleSubmit()}>{`${formData.type} ${formData.entity}`}</button>
            </form>
        </div>
    )
}

export default CustomForm
