import { createStore, combineReducers } from 'redux';
import { todos } from './todos/reducers';

//reducers
const reducers = {
  todos,
};

//the combined reducer
const rootReducer = combineReducers(reducers);

export const configureStore = createStore(rootReducer);
