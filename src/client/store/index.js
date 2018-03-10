import { createStore } from 'redux';
import appReducers from '../reducers';

const store = createStore(appReducers, window.STORE);

export default store;
