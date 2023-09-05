import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import FormGroup from "./FormGroup";
import useForm from "../../hooks/useForm";
import * as Yup from 'yup';

const CustomForm = ({ formData, handleResponse, close }) => {

    const {
        getFormTitle,
        getField,
        handleSubmit,
        form
    } = useForm({formData, handleResponse, close})

    Yup.addMethod(Yup.string, 'checkIfExists', function(message) {
        return this.test('checkIfExists', message, value => {
            return new Promise( async (resolve) => {
                console.log('Sent request for: ' + value);
                let response = await fetch('http://localhost:1337/users/user/email/' + value )
                
                if(response) {
                    const data = await response.json()
                    
                    resolve(data.user === false);
                }
                resolve(true);
                });
            });
        }
    );

    const validations = {
        name: Yup.string().required('Name is a required field'),
        permissions: Yup.array().min(1, "At least 1 permission is required").required("Permission cannot be empty"), 
        password: Yup.string()
            .min(8, 'Your password should at least be 8 characters.')
            .max(30, 'Your password can be at most 30 characters.'),
        password_confirm: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
        description: Yup.string().required('Description is required'), 
        email: Yup.string()
            .required('E-mail is required.')
            .email('This is not an e-mail address.')
            .checkIfExists('This e-mail address is already in use.')
            
    }

    const formValidations = {}
    formData.fields.forEach(field => formValidations[field.name] = validations[field.name])
    const formSchema = Yup.object(formValidations)

    
    return (
        <div className="form">
            {getFormTitle(formData.type, formData.entity)}
            <Formik
                validationSchema={formSchema}
                initialValues={form}
                onSubmit={handleSubmit}>
                {(values) => (
                    <Form>
                        {formData.fields.map((f, fieldIndex) => {
                            return <FormGroup key={fieldIndex} label={f.label} name={f.name}>
                                <Field name={f.name} {...f}>
                                    {({
                                        field
                                    }) => (
                                        getField({...field, ...f}, values[field.name])
                                    )}
                                </Field>
                                <ErrorMessage name={f.name} component="div" className="error" />
                            </FormGroup>
                        })}
                        <button type="submit">{`${formData.type} ${formData.entity}`}</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default CustomForm
