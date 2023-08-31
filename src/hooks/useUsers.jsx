import useAPI from "./useAPI"

const useUsers = () => {
    const {
        response,
        loading,
        error,
        fetchRequest
    } = useAPI()

    React.useEffect(() => {
        fetchRequest('/users', 'GET')
    }, [])

    return {
        response,
        loading,
        error
    }
}

export default useUsers