import useUsers from "../../hooks/useUsers"

const UserPage = () => {
    const {
        response,
        loading,
        error,
        functions
    } = useUsers()

    return <Page title="Users">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {response && <Table data={response} functions={functions} />}
    </Page>
}

export default UserPage