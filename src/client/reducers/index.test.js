import { exampleNumber, homeVisits } from './index';
import * as actions from '../actions';

describe('reducers', () => {
  it('should return the initial state for exampleNumber', () => {
    expect(exampleNumber(undefined, {})).toEqual(0);
  });
  it('should return the state for exampleNumber after changing', () => {
    expect(exampleNumber(333, { type: actions.CHANGE_EXAMPLE_NUMBER, number: 555 })).toEqual(555);
  });
  it('should return the state for exampleNumber after increasing', () => {
    expect(exampleNumber(2, { type: actions.INCREASE_EXAMPLE_NUMBER })).toEqual(3);
  });
  it('should return the state for exampleNumber after decreasing', () => {
    expect(exampleNumber(2, { type: actions.DECREASE_EXAMPLE_NUMBER })).toEqual(1);
  });
  it('should return the initial state for homeVisits', () => {
    expect(homeVisits(undefined, {})).toEqual(0);
  });
  it('should return the state for homeVisits after increasing', () => {
    expect(homeVisits(10, { type: actions.INCREASE_HOME_VISITS })).toEqual(11);
  });
  it('should return the state for homeVisits after resetting', () => {
    expect(homeVisits(10, { type: actions.RESET_HOME_VISITS })).toEqual(0);
  });
});
