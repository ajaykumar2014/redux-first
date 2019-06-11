
import React from 'react'
const style = {
    padding: '7px'

};
const Row = ({ row,onDelete }) => {
    let rowId = row ===undefined ? null :Object.values(row).map(r => ( <div className="col-sm">{r}</div> ));
    console.log(row)
    let removeButton = <div className="col-sm"><button className="btn btn-danger" type="button" onClick={(e)=>onDelete(row.id)}>Remove</button></div>
    return (<div class="w-100"><div class="row" key={row.id} style={style}>{rowId}{removeButton}</div></div>)
}
export default Row;