import React from "react";
import FormGroup from "./FormGroup";
import TextField from "./fields/TextField";
import TextAreaField from "./fields/TextAreaField";
import ToggleField from "./fields/ToggleField";
import SelectField from "./fields/SelectField";
import MulitselectField from "./fields/MulitselectField";

const CustomForm = ({ formData, handleResponse, close }) => {

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

    const handleSubmit = () => {
        const url = "http://localhost:1337/"+formData.endpoint
        const options = {
            'method': 'POST',
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        }
        fetch(url, options)
            .then(data => data.json())
            .then(response => {
                const newUser = {...form, ...response}
                handleResponse(newUser, formData.entity)
                close()
            })
            .catch(error => console.log('err', error))
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
                <button type="button" onClick={e => handleSubmit()}>{`${formData.type} ${formData.entity}`}</button>
            </form>
        </div>
    )
}

export default CustomForm
