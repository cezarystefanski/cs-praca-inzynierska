import store from './index';

const initialState = { exampleNumber: 0, homeVisits: 0 };

describe('store', () => {
  it('should return the correct initial store', () => {
    expect(store.getState()).toEqual(initialState);
  });
  it('should not run redux devtools in node environment', () => {
    expect(typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()).toBeFalsy(); // eslint-disable-line no-underscore-dangle
  });
});
