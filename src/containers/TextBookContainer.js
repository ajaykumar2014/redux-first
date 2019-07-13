import React from 'react'
import TextNoteBook from './../components/TextNoteBook'
import NoteList from './../components/NoteList'


export default ()=>{
    return (
        <div className="row">
          <div className="col">
            <TextNoteBook />
          </div>
          <div className="col">
            <NoteList />
          </div>
        </div>
    )
}