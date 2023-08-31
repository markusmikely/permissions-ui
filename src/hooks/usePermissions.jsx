import useAPI from "./useAPI"

const usePermissions = () => {

    const {
        response,
        loading,
        error,
        fetchRequest
    } = useAPI()

    React.useEffect(() => {
        fetchRequest('/permissions', 'GET')
    }, [])

    return {
        response,
        loading,
        error
    }
}

export default usePermissions