import * as actions from './index';

const exampleNumber = 333;
const expectedActions = {
  changeExampleNumber: {
    type: actions.CHANGE_EXAMPLE_NUMBER,
    number: exampleNumber,
  },
  increaseExampleNumber: { type: actions.INCREASE_EXAMPLE_NUMBER },
  decreaseExampleNumber: { type: actions.DECREASE_EXAMPLE_NUMBER },
  increaseHomeVisits: { type: actions.INCREASE_HOME_VISITS },
  resetHomeVisits: { type: actions.RESET_HOME_VISITS },
};

describe('actions', () => {
  it('should create an action to change the example number', () => {
    expect(actions.changeExampleNumber(exampleNumber)).toEqual(expectedActions.changeExampleNumber);
  });
  it('should create an action to increase the example number', () => {
    expect(actions.increaseExampleNumber()).toEqual(expectedActions.increaseExampleNumber);
  });
  it('should create an action to decrease the example number', () => {
    expect(actions.decreaseExampleNumber()).toEqual(expectedActions.decreaseExampleNumber);
  });
  it('should create an action to increase home visits', () => {
    expect(actions.increaseHomeVisits()).toEqual(expectedActions.increaseHomeVisits);
  });
  it('should create an action to reset home visits', () => {
    expect(actions.resetHomeVisits()).toEqual(expectedActions.resetHomeVisits);
  });
});
