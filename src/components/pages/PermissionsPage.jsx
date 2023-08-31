import Page from "../shared/Page"

const PermissionsPage = () => {
    return <Page title="Permissions">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {response && <Table data={response} functions={functions} />}
    </Page>
}

export default PermissionsPage