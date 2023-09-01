import React from 'react'
import useAPI from "./useAPI"

const useRoles = ({permissions}) => {

    const [roles, setRoles] = React.useState([])
    const [roleOptions, setRoleOptions] = React.useState(null)
    const [permissionOptions, setPermissionOptions] = React.useState(null)

    const functions = [
        "edit",
        "remove"
    ]

    const formData = {
        type: "create",
        entity: "role",
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
                "type": "select",
                "value": "",
                "label": "Permissions",
                "placeholder": "Select Permissions",
                "options": permissionOptions
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
                "options": roleOptions
            }
        ]
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
            setRoleOptions(response.roles)
        }
    }, [response])

    React.useEffect(() => {
        if(permissions) {
            setPermissionOptions(permissions)
        }
    }, [permissions])


    return {
        roles,
        loading,
        error, 
        functions,
        formData
    }
}

export default useRoles