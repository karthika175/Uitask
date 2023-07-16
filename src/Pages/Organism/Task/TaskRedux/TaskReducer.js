// reducer.js
import { FETCH_TASKS_SUCCESS } from './ActionTypeTask';

const initialStateTask = {
  tasks: []
};

const taskReducer = (state = initialStateTask, action) => {
  switch (action.type) {
    case FETCH_TASKS_SUCCESS:
      return {
        ...state,
        tasks: action.payload
      };
    default:
      return state;
  }
};

export default taskReducer;
