import React from 'react'
import Page from '../shared/Page'
import Table from '../shared/Table'
import useRoles from '../../hooks/useRoles'

const RolesPage = ({roles, functions, formData, doAction}) => {

    return <Page title="Roles">
        {roles.length > 0 && 
            <>
                <button type='button' onClick={() => doAction('create', formData)}>Create new Role</button>
                <Table data={roles} functions={functions} doAction={doAction} formData={formData} />
            </>        
        }
    </Page>
}

export default RolesPage