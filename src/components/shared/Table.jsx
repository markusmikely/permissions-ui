import React from 'react'
import TableHeader from './TableHeader'
import TableData from './TableData'

const Table = ({ data, functions, doAction}) => {

    if(!data) return null

    return (
        <table>
            <TableHeader headers={Object.keys(data[data.length - 1])} functions={functions} />
            <TableData data={data} functions={functions} doAction={doAction} />        
        </table>
    )
}

export default Table