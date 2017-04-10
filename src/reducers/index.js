import { combineReducers } from 'redux';

import { default as todos } from './todo';
import { default as filter } from './filter';
import { default as error } from './error';

const reducer = combineReducers({
  todos: todos,
  filter: filter,
  error: error,
});

console.log(reducer);

export default reducer;
