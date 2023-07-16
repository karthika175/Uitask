import { createStore, combineReducers } from 'redux';
import notesReducer from '../Pages/Organism/Notes/NotesRedux/Reducer';
import { fetchTasksSuccess } from '../Pages/Organism/Task/TaskRedux/ActionCreatorTask';
import taskReducer from '../Pages/Organism/Task/TaskRedux/TaskReducer';
const rootReducer = combineReducers({
  notes: notesReducer,
  tasks:taskReducer
});

const store = createStore(rootReducer);

// Fetch the JSON data and store it in the Redux store
fetch('taskData.json', {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Error fetching data:', response.status);
    }
    return response.json();
  })
  .then((data) => {
    
    store.dispatch(fetchTasksSuccess(data));
    console.log(data);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

export default store;
