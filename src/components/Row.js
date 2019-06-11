
import React from 'react'
const Row = ({ row }) => {
    let rowId = row ===undefined ? null :Object.values(row).filter(d=>d !== "id").map(r => ( <div className="col-sm">{r}</div> ));
    console.log(row)
    return (<div class="w-100"><div class="row">{rowId}</div></div>)
}
export default Row;