import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import movieReducer from './movieReducer';
import movieDetailsReducer from './movieDetailsReducer'


export default combineReducers({
  movies: movieReducer,
  movieDetails: movieDetailsReducer,
  form: formReducer
});