import { CREATE_MOVIE, EDIT_MOVIE, DELETE_MOVIE, FETCH_MOVIES } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return action.payload;
    case CREATE_MOVIE:
      return [...state, action.payload];
    case EDIT_MOVIE:
      return [...state, action.payload];
    case DELETE_MOVIE:
      return [...state, action.payload];
    default:
      return state;
  }
};