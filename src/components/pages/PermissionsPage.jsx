import React from "react";
import Page from "../shared/Page"
import Table from "../shared/Table";

const PermissionsPage = ({permissions, functions, getFormData, formData, doAction}) => {
    return <Page title="Permissions">
    {permissions && 
        <>
            <button type='button' onClick={() => doAction('create', formData)}>Create new Permission</button>
            <Table getFormData={getFormData} data={permissions} functions={functions} doAction={doAction} formData={formData} />
        </>        
    }
</Page>
}

export default PermissionsPage