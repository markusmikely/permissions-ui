import React from 'react'
import TableHeader from './TableHeader'
import TableData from './TableData'

const Table = ({sanitize, data, functions, doAction, getFormData}) => {

    if(!data) return null

    return (
        <table>
            <TableHeader headers={Object.keys(data[data.length - 1])} functions={functions} />
            <TableData sanitize={sanitize} getFormData={getFormData} data={data} functions={functions} doAction={doAction} />        
        </table>
    )
}

export default Table