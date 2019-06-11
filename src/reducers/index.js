

export const postNotesReducer = (state = { postNotes: [] }, action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return { postNotes : state.postNotes.concat(action.payload) }
        case 'DELETE_NOTE':
            return {postNotes :state.postNotes.filter(note=>note.id!==action.id)}  
        default:
            return state;    
    }
};


export const userOptReducer = (state = {users:[]},action)=>{
    switch(action.type){
        case "NEW_USER":
            return {users:state.users.concat(action.payload)}
        case "REMOVE_ROW":
            return {users:state.users.filter(row=>row.id !== action.rowId)} 
        default:
            return state;   
    }
}