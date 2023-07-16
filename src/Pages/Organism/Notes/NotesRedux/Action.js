import { ADD_NOTE,DELETE_NOTE } from "./ActionTypeNotes";
export const addNote = (note) => {
    return {
      type: ADD_NOTE,
      payload: note,
    };
  };
  export const deleteNote = (index) => {
    return {
      type: DELETE_NOTE,
      payload: index,
    };
  };