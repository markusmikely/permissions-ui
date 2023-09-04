import React from 'react'
import useAPI from "./useAPI"

const useRoles = ({data, setData}) => {
  
    const functions = [
        "edit",
        "remove"
    ]

    const rolesFormData = {
        type: "create",
        entity: "role",
        endpoint: 'roles/role/create',
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
                "label": "Role Name",
                "placeholder": "Name of the role"
            },
            {
                "name": "permissions",
                "type": "multiselect",
                "value": [],
                "label": "Permissions",
                "placeholder": "Select Permissions",
                "options": (data.permissions) ? data.permissions.map(item => ({label:item.name, value: item._id})) : []
            },
            {
                "name": "active",
                "type": "toggle",
                "value": true,
                "label": "Is Active"
            },
            {
                "name": "parent",
                "type": "select",
                "value": "",
                "label": "Parent Role",
                "placeholder": "Select parent role",
                "options": data.roles
            }
        ]
    }

    const getRolesFormData = (values, type) => {

        return type === "edit" ? getEditFormData(values) : getDeleteFormData(values)
    }

    const getEditFormData = values => {
        let editFormData = {...rolesFormData}   
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
            type: rolesFormData.entity
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
        fetchRequest('/roles/roles')
    }, [])

    React.useEffect(() => {
        if(response) {
            setData(prevData => ({...prevData, roles: response.roles}))
        }
    }, [response])

    return {
        loading,
        error, 
        functions,
        rolesFormData,
        getRolesFormData
    }
}

export default useRoles