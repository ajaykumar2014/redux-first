import React from 'react';


 const ViewNote = ({note:{notesText,id},onDelete}) => {
    const style = {
        borderBottom: '2px solid #eee',
        background: '#fafafa',
        margin: '.75rem auto',
        padding: '.6rem 1rem',
        maxWidth: '500px',
        borderRadius: '7px'
    };
    return (
        <div style={style}>
            <p>{notesText}</p>
            <button className="btn btn-danger" type="button" onClick={(e)=>onDelete(id)}>Remove</button>
        </div>
    )
}

export default ViewNote;