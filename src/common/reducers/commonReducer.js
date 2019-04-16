import { combineReducers } from 'redux';
import counter from './counter';
import fetchData from './fetchData';

export default combineReducers({
  counter,
  fetchData,
})
