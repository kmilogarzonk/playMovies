import { ADD_FAVORITES_MOVIES, DELETE_FAVORITES_MOVIES } from '../actions/moviesActions';

const initialState = {
  favorites: []
};

function movies(state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITES_MOVIES:
      return {
        ...state,
        favorites: state.favorites.concat(action.payload)
      };

    case DELETE_FAVORITES_MOVIES:
      return {
        ...state,
        favorites: state.favorites.filter(item => item.id !== action.payload.id)
      };

    default:
      break;
  }
  return state;
}

export default movies;
