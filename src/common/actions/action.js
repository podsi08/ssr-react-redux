export const INCREMENT = 'INCREMENT';
export const DECREMENT ='DECREMENT';
export const FETCH_DATA = 'FETCH DATA';
export const SHOW_COMPLETED_TASKS = 'SHOW_COMPLETED_TASKS';

export const addOneAction = () => {
  return {
    type: INCREMENT,
  }
};

export const substractOneAction = () => {
  return {
    type: DECREMENT,
  }
};

export const fetchDataAction = (data) => {
  return {
    type: FETCH_DATA,
    data
  }
};

export const showCompletedTasksAction = () => {
  return {
    type: SHOW_COMPLETED_TASKS,
  }
};
