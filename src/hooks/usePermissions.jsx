import React from "react"
import useAPI from "./useAPI"

const usePermissions = () => {

    const [permissions, setPermissions] = React.useState([])

    const {
        response,
        loading,
        error,
        fetchRequest
    } = useAPI()

    const formData = {
        type: "create",
        entity: "permission",
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

    React.useEffect(() => {
        fetchRequest('/permissions/permissions')
    }, [])

    React.useEffect(() => {
        if(response) {
            setPermissions(response.permissions)
        }
    }, [response])

    React.useEffect(() => {
        console.log(permissions)
    }, [permissions])

    return {
        permissions
    }
}

export default usePermissions