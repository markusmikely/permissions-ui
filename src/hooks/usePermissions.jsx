import React from "react"
import useAPI from "./useAPI"

const usePermissions = ({setData}) => {

    const {
        response,
        loading,
        error,
        fetchRequest
    } = useAPI()

    const permissionsFormData = {
        type: "create",
        entity: "permission",
        endpoint: 'permissions/permission/create',
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
                "label": "Permission Name",
                "placeholder": "Name of the permission"
            },
            {
                "name": "description",
                "type": "textarea",
                "value": "",
                "label": "Description",
                "placeholder": "What is this permission for?"
            },
            {
                "name": "active",
                "type": "toggle",
                "value": true,
                "label": "Is Active"
            }
        ]
    }

    const getPermissionsFormData = (values, type) => {

        return type === "edit" ? getEditFormData(values) : getDeleteFormData(values)
    }

    const getEditFormData = values => {
        let editFormData = {...permissionsFormData}   
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
            type: permissionsFormData.entity
        }
        return deleteFormData
    }
        
    React.useEffect(() => {
        fetchRequest('/permissions/permissions')
    }, [])

    React.useEffect(() => {
        if(response) {
            setData(prevData => ({...prevData, permissions: response.permissions}))
        }
    }, [response])

    return {
        permissionsFormData,
        getPermissionsFormData
    }
}

export default usePermissions