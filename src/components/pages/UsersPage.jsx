import React from "react";
import Page from "./../shared/Page"
import useUsers from "../../hooks/useUsers"

const UserPage = () => {
    const {
        response,
        loading,
        error,
        functions
    } = useUsers()

    return <Page title="Users">
       
    </Page>
}

export default UserPage