import React from "react";
import Page from "./../shared/Page"
import Table from "../shared/Table";

const UserPage = ({sanitize, users, functions, formData, getFormData, doAction}) => {

    return <Page title="Users">
    {users && 
        <>
            <button type='button' onClick={() => doAction('create', formData)}>Create new User</button>
            <Table sanitize={sanitize} getFormData={getFormData} data={users} functions={functions} doAction={doAction} formData={formData} />
        </>        
    }
</Page>
}

export default UserPage