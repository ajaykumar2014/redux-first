import uuidv4 from 'uuid/v4';

export const addNotes = (notesText) =>{
    return {
        type:"ADD_NOTE",
        payload:{
            id:uuidv4(),
            notesText
        }

    }
}

export const deleteNotes = (id) =>{
    return {
        type:"DELETE_NOTE",
        id
    }
}
export const incrementCounter = (counter)=>{
    if(counter == null || counter === undefined ) {
        counter =0
    }
    return {
        type: "INCREMENT",
        counter:counter+1
    }
}

export const decrementCounter = (counter)=>{
    return {
        type: "DECREMENT",
        counter:counter-1
    }
}