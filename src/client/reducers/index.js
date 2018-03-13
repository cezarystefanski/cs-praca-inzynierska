import { combineReducers } from 'redux';
import {
  CHANGE_EXAMPLE_NUMBER,
  DECREASE_EXAMPLE_NUMBER,
  INCREASE_EXAMPLE_NUMBER,
  INCREASE_HOME_VISITS,
  RESET_HOME_VISITS,
} from '../actions';

export const exampleNumber = (state = 0, action) => {
  switch (action.type) {
    case CHANGE_EXAMPLE_NUMBER:
      return action.number;
    case DECREASE_EXAMPLE_NUMBER:
      return state - 1;
    case INCREASE_EXAMPLE_NUMBER:
      return state + 1;
    default:
      return state;
  }
};

export const homeVisits = (state = 0, action) => {
  switch (action.type) {
    case INCREASE_HOME_VISITS:
      return state + 1;
    case RESET_HOME_VISITS:
      return 0;
    default:
      return state;
  }
};

const appReducers = combineReducers({
  exampleNumber,
  homeVisits,
});

export default appReducers;
