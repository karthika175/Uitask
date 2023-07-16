import { ADD_NOTE, DELETE_NOTE } from "./ActionTypeNotes";
const initialState = {
  notesList: [],
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notesList: [...state.notesList, action.payload],
      };
    case DELETE_NOTE:
      return {
        ...state,
        notesList: state.notesList.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};


export default notesReducer;