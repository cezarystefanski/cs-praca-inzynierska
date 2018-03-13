import { createStore } from 'redux';
import appReducers from '../reducers';

const store = createStore(
  appReducers,
  /* istanbul ignore next */
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // eslint-disable-line no-underscore-dangle
);

export default store;
