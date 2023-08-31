import React from 'react'
import useAPI from "./useAPI"

const useRoles = () => {

    const functions = [
        "edit",
        "remove"
    ]
    const {
        response,
        loading,
        error,
        fetchRequest
    } = useAPI()

    React.useEffect(() => {
        fetchRequest('/roles', 'GET')
    }, [])

    return {
        response,
        loading,
        error, 
        functions
    }
}

export default useRoles