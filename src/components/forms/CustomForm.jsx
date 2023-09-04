import React from "react";
import FormGroup from "./FormGroup";
import TextField from "./fields/TextField";
import TextAreaField from "./fields/TextAreaField";
import ToggleField from "./fields/ToggleField";
import SelectField from "./fields/SelectField";
import MulitselectField from "./fields/MulitselectField";

const CustomForm = ({ formData }) => {

    let initialState = {}
    formData.fields.forEach(field => {
        initialState[field.name] = field.value
    })
    
    const [form, setForm] = React.useState(initialState)

    const handleChange = (e, field) => {
        let value = (!e.target) ? e.map(v => v.value) : e.target.value
        if(field === 'active') value = !form.active
        setForm(prevForm => ({...prevForm, [field]: value}))
    }

    React.useEffect(() => {
        console.log(form)
    }, [form])

    const handleSubmit = () => {
        console.log('submitting form...', form)
    }

    const getField = field => {
        switch(field.type) {
            case "textarea":
                return <TextAreaField form={form} field={field} handleChange={handleChange} />
            case "toggle":
                return <ToggleField form={form}  field={field} handleChange={handleChange} />
            case "select":
                return <SelectField form={form}  field={field} handleChange={handleChange} />
            case "multiselect":
                return <MulitselectField form={form} field={field} handleChange={handleChange} />
            default:
                return <TextField form={form} field={field} handleChange={handleChange} />
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
