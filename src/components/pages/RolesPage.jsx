import React from 'react'
import Page from '../shared/Page'
import Table from '../shared/Table'
import useRoles from '../../hooks/useRoles'

const RolesPage = ({sanitize, roles, functions, getFormData, formData, doAction}) => {

    return <Page title="Roles">
        {roles && 
            <>
                <button type='button' onClick={() => doAction('create', formData)}>Create new Role</button>
                <Table sanitize={sanitize} getFormData={getFormData} data={roles} functions={functions} doAction={doAction} formData={formData} />
            </>        
        }
    </Page>
}

export default RolesPage