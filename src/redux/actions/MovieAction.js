import { axiosMovies } from "../../config/axiosClient";
import axios from "axios";
import {
  GET_MOVIE,
  GET_MOVIE_OKEY,
  GET_MOVIE_ERROR,
  CREATE_MOVIE,
  CREATE_MOVIE_OKEY,
  CREATE_MOVIE_ERROR,
  SET_MOVIE_BY_ID,
  GET_MOVIE_BY_ID_OKEY,
  GET_MOVIE_BY_ID_ERROR,
  EDIT_MOVIE,
  EDIT_MOVIE_OKEY,
  EDIT_MOVIE_ERROR,
  DELETE_MOVIE,
  DELETE_MOVIE_OKEY,
  DELETE_MOVIE_ERROR,
} from "../types";

export const getMoviesAction = () => {
  return async (dispatch) => {
    dispatch({ type: GET_MOVIE });
    await axiosMovies
      .get("/")
      .then((rta) => {
        console.log(rta.data);
        dispatch({
          type: GET_MOVIE_OKEY,
          payload: rta.data.data,
        });
      })
      .catch((e) => {
        console.log(e.response);
        dispatch({
          type: GET_MOVIE_ERROR,
          payload: e.response.data.error.message,
        });
      });
  };
};
export const createMovieAction = (title, year) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_MOVIE });
    const bodyFormData = new FormData();
    const movieData = `{"name": "${title}", "publicationYear": ${year}}`;
    bodyFormData.append("data", movieData);

    await axiosMovies
      .post("/", bodyFormData)
      .then((rta) => {
        console.log(rta.data);
        dispatch({
          type: CREATE_MOVIE_OKEY,
          payload: rta.data.data,
        });
      })
      .catch((e) => {
        console.log(e.response);
        dispatch({
          type: CREATE_MOVIE_ERROR,
          payload: e.response.data.error.message,
        });
      });
  };
};

export const getMovieById = (id) => {
  return async (dispatch) => {
    await axiosMovies
      .get(`/${id}`)
      .then((rta) => {
        console.log(rta.data.data);
        dispatch({
          type: GET_MOVIE_BY_ID_OKEY,
          payload: rta.data.data,
        });
      })
      .catch((e) => {
        console.log(e.response);
        dispatch({
          type: GET_MOVIE_BY_ID_ERROR,
          payload: e.response.data.error.message,
        });
      });
  };
};

export const setMovieById = (id) => ({
  type: SET_MOVIE_BY_ID,
  payload: id,
});

export const editMovieAction = (title, year, id) => {
  return async (dispatch) => {
    dispatch({ type: EDIT_MOVIE });
    const bodyFormData = new FormData();
    const movieData = `{"name": "${title}", "publicationYear": ${year}}`;
    bodyFormData.append("data", movieData);

    await axiosMovies
      .put(`/${id}`, bodyFormData)
      .then((rta) => {
        console.log(rta.data.data);
        dispatch({
          type: EDIT_MOVIE_OKEY,
          payload: rta.data.data,
        });
      })
      .catch((e) => {
        console.log(e.response);
        dispatch({
          type: EDIT_MOVIE_ERROR,
          payload: e.response.data.error.message,
        });
      });
  };
};
export const deleteMovieAction = (id) => {
  return async (dispatch) => {
    await axiosMovies
      .delete(`/${id}`)
      .then((rta) => {
        console.log(rta.data.data);
        dispatch({
          type: DELETE_MOVIE_OKEY,
          payload: id,
        });
      })
      .catch((e) => {
        console.log(e.response);
        dispatch({
          type: DELETE_MOVIE_ERROR,
          payload: e.response.data.error.message,
        });
      });
  };
};
