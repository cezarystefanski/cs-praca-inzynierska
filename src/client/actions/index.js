import {
  CHANGE_EXAMPLE_NUMBER,
  DECREASE_EXAMPLE_NUMBER,
  INCREASE_EXAMPLE_NUMBER,
  INCREASE_HOME_VISITS,
  RESET_HOME_VISITS,
} from './actionTypes';

const changeExampleNumber = number => ({
  type: CHANGE_EXAMPLE_NUMBER,
  number,
});

const increaseExampleNumber = () => ({
  type: INCREASE_EXAMPLE_NUMBER,
});

const decreaseExampleNumber = () => ({
  type: DECREASE_EXAMPLE_NUMBER,
});

const increaseHomeVisits = () => ({
  type: INCREASE_HOME_VISITS,
});

const resetHomeVisits = () => ({
  type: RESET_HOME_VISITS,
});

export {
  changeExampleNumber,
  increaseExampleNumber,
  decreaseExampleNumber,
  increaseHomeVisits,
  resetHomeVisits,
  CHANGE_EXAMPLE_NUMBER,
  DECREASE_EXAMPLE_NUMBER,
  INCREASE_EXAMPLE_NUMBER,
  INCREASE_HOME_VISITS,
  RESET_HOME_VISITS,
};
