import React from "react";
import useSanitize from "../../hooks/useSanitize";

const TableData = ({data, functions, doAction}) => {
    const { sanitize } = useSanitize()
    return <tbody>
        {data.map((tableRow, tableRowIndex) => {
            return <tr key={tableRowIndex}>
                 {Object.values(tableRow).map((rowItem, rowItemIndex) => {
                    return <td key={rowItemIndex}>
                      {sanitize(rowItem)}
                    </td>
                })}
                {functions.map((fn, fnIndex) => {
                    return <td key={fnIndex}>
                        <a onClick={() => doAction(
                            tableRow,
                            fn
                        )}>{fn}</a>
                    </td>
                })}
            </tr>
        })}
    </tbody>
}

export default TableData