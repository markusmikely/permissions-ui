import React from 'react'
import Page from '../shared/Page'
import Table from '../shared/Table'
import useRoles from '../../hooks/useRoles'

const RolesPage = () => {

    const {
        response,
        loading,
        error,
        functions
    } = useRoles()

    return <Page title="Roles">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {response && <Table data={response.roles} functions={functions} />}
    </Page>
}

export default RolesPage