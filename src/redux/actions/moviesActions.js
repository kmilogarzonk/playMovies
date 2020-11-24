export const ADD_FAVORITES_MOVIES = 'ADD_FAVORITES_MOVIES';
export const DELETE_FAVORITES_MOVIES = 'DELETE_FAVORITES_MOVIES';

export const addFavoriteMovie = (movie) => {
  return {
    type: ADD_FAVORITES_MOVIES,
    payload: movie
  }
};

export const deleteFavoriteMovie = (movie) => {
  return {
    type: DELETE_FAVORITES_MOVIES,
    payload: movie
  }
};