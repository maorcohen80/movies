import OMDb from '../apis/OMDb';
import movies from '../apis/movies';
import { CREATE_MOVIE, EDIT_MOVIE, DELETE_MOVIE, FETCH_MOVIES } from './types';

export const fetchMovies = () => async dispatch => {

  const response = await OMDb.get('/?apikey=6a10083c&s=day');
  dispatch({ type: FETCH_MOVIES, payload: response.data.Search })

};
export const fetchMoviesDetails = (id) => async dispatch => {

  const response = await OMDb.get(`/?apikey=6a10083c&i=${id}`);
  dispatch({ type: 'FETCH_MOVIE_DETAILS', payload: response.data });

};

export const createMovie = formValues => async dispatch => {
  const response = await movies.post('/movies', formValues);

  dispatch({ type: CREATE_MOVIE, payload: response.data });
};

export const editMovie = (id, formValues) => async dispatch => {
  const response = await movies.put(`/movies/${id}`, formValues);

  dispatch({ type: EDIT_MOVIE, payload: response.data });
};

export const deleteMovie = (id) => async dispatch => {
  await movies.delete(`/movies/${id}`);

  dispatch({ type: DELETE_MOVIE, payload: id });
};







