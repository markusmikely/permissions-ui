import React from "react";

const TableHeader = ({headers, functions}) => {
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

export default TableHeader