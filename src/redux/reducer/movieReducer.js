import {
  CREATE_MOVIE,
  CREATE_MOVIE_ERROR,
  CREATE_MOVIE_OKEY,
  DELETE_MOVIE_OKEY,
  EDIT_MOVIE,
  EDIT_MOVIE_ERROR,
  EDIT_MOVIE_OKEY,
  GET_MOVIE,
  GET_MOVIE_BY_ID_ERROR,
  GET_MOVIE_BY_ID_OKEY,
  GET_MOVIE_ERROR,
  GET_MOVIE_OKEY,
  SET_MOVIE_BY_ID,
} from "../types";

const inicialState = {
  movieLoading: false,
  movieError: null,
  movies: [],
  createLoading: false,
  movie: {},
  editLoading: null,
};

const loginReducer = (state = inicialState, action) => {
  switch (action.type) {
    case GET_MOVIE:
      return { ...state, movieLoading: true };
    case GET_MOVIE_OKEY:
      return { ...state, movieLoading: false, movies: action.payload };
    case GET_MOVIE_ERROR:
      return { ...state, movieLoading: false, movieError: action.payload };

    case CREATE_MOVIE:
      return { ...state, createLoading: true };
    case CREATE_MOVIE_OKEY:
      return {
        ...state,
        createLoading: false,
        movies: [...state.movies, action.payload],
      };
    case CREATE_MOVIE_ERROR:
      return { ...state, createLoading: false, movieError: action.payload };

    case SET_MOVIE_BY_ID:
      return {
        ...state,
        movie: state.movies.find(
          (movie) => movie.id === Number(action.payload)
        ),
      };

    case GET_MOVIE_BY_ID_OKEY:
      return { ...state, movie: action.payload };
    case GET_MOVIE_BY_ID_ERROR:
      return { ...state, movieError: action.payload };

    case EDIT_MOVIE:
      return { ...state, editLoading: true };
    case EDIT_MOVIE_OKEY:
      return {
        ...state,
        editLoading: false,
        movies: [
          ...state.movies.map((movie) => {
            if (movie.id === action.payload.id) {
              movie.attributes.name = action.payload.attributes.name;
              movie.attributes.publicationYear =
                action.payload.attributes.publicationYear;
            }
            return movie;
          }),
        ],
      };
    case EDIT_MOVIE_ERROR:
      return { ...state, editLoading: false, movieError: action.payload };

    case DELETE_MOVIE_OKEY:
      return {
        ...state,
        movies: [
          ...state.movies.filter(
            (movie) => movie.id !== action.payload
          ),
        ],
      };
    default:
      return state;
  }
};

export default loginReducer;
