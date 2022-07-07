import { combineReducers, legacy_createStore } from 'redux';
import reducer from './reducer';

let reducers = combineReducers({
  reducer,
});

let store = legacy_createStore(reducers);
export default store;
