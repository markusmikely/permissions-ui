import React from "react";
import useAPI from "./useAPI"

const useUsers = ({data, setData}) => {
    const functions = [
        "edit",
        "remove"
    ]

    const usersFormData = {
        type: "create",
        entity: "user",
        fields: [
            {
                "name": "_id",
                "type": "hidden",
                "value": "",
                "placeholder": ""
            },
            {
                "name": "name",
                "type": "text",
                "value": "",
                "label": "User Name",
                "placeholder": "Name of the user"
            },
            {
                "name": "email",
                "type": "email",
                "value": "",
                "label": "User Email",
                "placeholder": "Email of the user"
            },
            {
                "name": "password",
                "type": "password",
                "value": "",
                "label": "User Password",
                "placeholder": "Password of the user"
            },
            {
                "name": "role",
                "type": "select",
                "value": -1,
                "label": "Role",
                "placeholder": "Select Role",
                "options": data.roles
            },
            {
                "name": "active",
                "type": "toggle",
                "value": true,
                "label": "Is Active"
            }
        ]
    }

    const getUsersFormData = (values, type) => {

        return type === "edit" ? getEditFormData(values) : getDeleteFormData(values)
    }

    const getEditFormData = values => {
        let editFormData = {...usersFormData}   
        editFormData.type = "edit"
        editFormData.fields.forEach(field => {
            field.value = values[field.name]
        })
        return editFormData
    }

    const getDeleteFormData = values => {
        console.log('vs', values)
        let deleteFormData = {
            _id: values["_id"],
            type: usersFormData.entity
        }
        return deleteFormData   
    }
    const {
        response,
        loading,
        error,
        fetchRequest
    } = useAPI()

    React.useEffect(() => {
        fetchRequest('/users/users')
    }, [])

    React.useEffect(() => {
        if(response) {
            setData(prevData => ({...prevData, users: response.users}))
        }
    }, [response])

    return {
        functions,
        usersFormData,
        getUsersFormData
    }
}

export default useUsers