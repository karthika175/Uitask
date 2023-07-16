import { FETCH_TASKS_SUCCESS } from './ActionTypeTask';

export const fetchTasksSuccess = (tasks) => {
  return {
    type: FETCH_TASKS_SUCCESS,
    payload: tasks
  };
};