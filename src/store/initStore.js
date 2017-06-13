import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers/index';

const initStore = (initState) => {
  return createStore(reducers, initState, applyMiddleware(thunkMiddleware));
};

export default initStore;
