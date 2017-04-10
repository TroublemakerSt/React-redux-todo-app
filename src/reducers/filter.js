import { SET_FILTER } from '../actions';

function reducer(state = 'ALL', action) {
  console.log('filterReducer.state', state);
  switch (action.type) {
    case SET_FILTER:
      return action.filter;

    default:
      return state;
  }
}

export default reducer;
