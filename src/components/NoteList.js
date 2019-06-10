
import {  deleteNotes } from '../actions/index'
import { connect } from 'react-redux'
import React from 'react'
import ViewNote from './ViewNote'

function NoteList({ posts, onDelete }) {
    return (<div className="col">
        {posts.postNotes.map((note) => (
            <ViewNote note={note} onDelete={ onDelete } key={note.id}></ViewNote>
        ))}
</div>)
}
const mapStateToProps = state => {
    return {
      posts: state.posts
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onDelete: id => {
        dispatch(deleteNotes(id));
      }
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(NoteList);