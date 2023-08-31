import React from "react"

const useAPI = () => {

    const [response, setResponse] = React.useState(null)
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(false)

    const fetchRequest = (route, method, body = undefined) => {
        const base_url = "http://localhost:1337"
        const options = {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: body ? JSON.stringify(body) : undefined
        }
        setLoading(true);
        fetch(base_url+route, options)
            .then(data => data.json())
            .then(response => {
                setResponse(response)  
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return {
        response,
        loading,
        error,
        fetchRequest
    }
}

export default useAPI