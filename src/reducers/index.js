

const postNotesReducer = (state = { postNotes: [] }, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return { postNotes : state.postNotes.concat(action.payload) }
        case 'DELETE_NOTE':
            return {postNotes :state.postNotes.filter(note=>note.id!==action.id)}  
        default:
            return state;    
    }
};

export default postNotesReducer;