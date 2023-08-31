import React from 'react'

const Table = ({ data, functions}) => {

    const sanitize = value => {
        if(typeof value === "boolean") {
            return value ? "Yes" : "No"
        }
        if(Array.isArray(value)) {
            return value.length
        }
        return value
    }

    const doAction = (elem, val) => {
        switch(val) {
            case 'edit':
                console.log(elem, val)
                break;
            case 'delete':
                console.log(elem, val)
                break;
            case 'create':
                console.log(elem, val)
                break;
        }
    }

    if(!data) return null

    const TableHeader = ({headers}) => {
        console.log('headers', headers)
        if(!headers) return null
        return <thead>
            <tr>
                {headers.map((header, headerIndex) => {
                    return <th key={headerIndex}>{header.replace('_', '')}</th>
                })}
                {functions.map((fn, fnIndex) => {
                    return <th key={fnIndex}>{fn}</th>
                })}
            </tr>
        </thead>
    }

    const TableData = ({data}) => {

        return <tbody>
            {data.map((tableRow, tableRowIndex) => {
                console.log('row', Object.values(tableRow))
                return <tr key={tableRowIndex}>
                     {Object.values(tableRow).map((rowItem, rowItemIndex) => {
                        return <td key={rowItemIndex}>
                          {sanitize(rowItem)}
                        </td>
                    })}
                    {functions.map((fn, fnIndex) => {
                        return <td key={fnIndex}>
                            <a onClick={() => doAction(
                                Object.values(tableRow)[0],
                                fn
                            )}>{fn}</a>
                        </td>
                    })}
                </tr>
            })}
        </tbody>
    }
 
    return (
        <>
            <table>
                <TableHeader headers={Object.keys(data[data.length - 1])} />
                <TableData data={data} />        
            </table>
            <Modal 
                isOpen={open}
                setIsOpen={setOpen}>
                {modalContent}
            </Modal>
        </>
    )
}

export default Table