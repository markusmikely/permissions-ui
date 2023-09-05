import React from "react"
import TextAreaField from "../components/forms/fields/TextAreaField"
import ToggleField from "../components/forms/fields/ToggleField"
import SelectField from "../components/forms/fields/SelectField"
import MulitselectField from "../components/forms/fields/MulitselectField"
import TextField from "../components/forms/fields/TextField"

const useForm = ({formData, handleResponse, close}) => {
    let initialState = {}
    formData.fields.forEach(field => {
        initialState[field.name] = field.value
    })
    
    const [form, setForm] = React.useState(initialState)

    const handleChange = (e, field) => {
        console.log(e, field)
        let value = (!e.target) ? e.map(v => v.value) : e.target.value
        if(field === 'active') value = e.target.checked
        if(field === 'role' || field === 'parent') value = parseInt(value)
        setForm(prevForm => ({...prevForm, [field]: value}))
    }

    const handleSubmit = values => {
        console.log('values', values)
        const url = "http://localhost:1337/"+formData.endpoint
        const options = {
            'method': 'POST',
            'headers': {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }
        fetch(url, options)
            .then(data => data.json())
            .then(response => {
                const newUser = {...values, ...response}
                handleResponse(newUser, formData.entity)
                close()
            })
            .catch(error => console.log('err', error))
    }

    const getField = (field, value, setFieldValue) => {
        switch(field.type) {
            case "textarea":
                return <TextAreaField value={value} field={field} handleChange={handleChange} />
            case "toggle":
                return <ToggleField value={value} field={field} handleChange={handleChange} />
            case "select":
                return <SelectField value={value} field={field} handleChange={handleChange} />
            case "multiselect":
                return <MulitselectField value={value}  field={field} handleChange={handleChange} />
            default:
                return <TextField  value={value} field={field} handleChange={setFieldValue} />
        }
    }

    const getFormTitle = (type, entity) => {
        const title = type === "create" ? `Create a new ${entity}` : `Edit ${entity}` 
        return <h4>{title}</h4>
    }

    return {
        handleSubmit,
        getField,
        getFormTitle,
        form
    }
}

export default useForm