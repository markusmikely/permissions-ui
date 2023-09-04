import React from "react";
import useSanitize from "../../hooks/useSanitize";

const TableData = ({sanitize, data, functions, doAction, getFormData}) => {
    
    return <tbody>
        {data.map((tableRow, tableRowIndex) => {
            return <tr key={tableRowIndex}>
                 {Object.values(tableRow).map((rowItem, rowItemIndex) => {
                    return <td key={rowItemIndex}>
                      {sanitize(rowItem, Object.keys(tableRow)[rowItemIndex])}
                    </td>
                })}
                {functions.map((fn, fnIndex) => {
                    return <td key={fnIndex}>
                        <a onClick={() => doAction(
                            fn,
                            getFormData(tableRow, fn),
                            tableRow
                        )}>{fn}</a>
                    </td>
                })}
            </tr>
        })}
    </tbody>
}

export default TableData