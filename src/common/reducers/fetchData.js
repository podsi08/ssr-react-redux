import {FETCH_DATA, SHOW_COMPLETED_TASKS} from '../actions/action';

const fetchData = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.data;
    case SHOW_COMPLETED_TASKS:
      return state.filter(task => task.completed);
    default:
      return state;
  }
};

export default fetchData;
