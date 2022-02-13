import { axiosMovies } from "../../config/axiosClient";

import { storage } from "../../firebase";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
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
  DELETE_MOVIE_OKEY,
  DELETE_MOVIE_ERROR,
  UPLOAD_PIC,
} from "../types";

export const getMoviesAction = () => {
  return async (dispatch) => {
    dispatch({ type: GET_MOVIE });
    try {
      const moviesResponse = await axiosMovies.get("/");
      dispatch({
        type: GET_MOVIE_OKEY,
        payload: moviesResponse.data.data,
      });
      moviesResponse.data.data.forEach((movieResponse) => {
        let title = movieResponse.attributes.name;
        const fileRef = ref(storage, `documents/${title}`);
        getDownloadURL(fileRef).then((urlImg) =>
          dispatch({
            type: UPLOAD_PIC,
            payload: {
              urlImg,
              title,
            },
          })
        );
      });
    } catch (e) {
      dispatch({
        type: GET_MOVIE_ERROR,
        payload: e.response.data.error.message,
      });
    }
  };
};

export const createMovieAction = (title, year, file) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_MOVIE });
    const bodyFormData = new FormData();
    const movieData = `{"name": "${title}", "publicationYear": ${year}}`;
    bodyFormData.append("data", movieData);

    let urlPic;
    if (file) {
      const fileRef = ref(storage, `documents/${title}`);
      await uploadBytes(fileRef, file);
      urlPic = await getDownloadURL(fileRef);
    }

    await axiosMovies
      .post("/", bodyFormData)
      .then((rta) => {
        const movie = {
          id: rta.data.data.id,
          attributes: rta.data.data.attributes,
          poster: urlPic,
        };
        dispatch({
          type: CREATE_MOVIE_OKEY,
          payload: movie,
        });
      })
      .catch((e) => {
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
        let title = rta.data.data.attributes.name;

        const fileRef = ref(storage, `documents/${title}`);
        getDownloadURL(fileRef).then((url) => {
          const movie = {
            id: rta.data.data.id,
            attributes: rta.data.data.attributes,
            poster: url,
          };
          dispatch({
            type: GET_MOVIE_BY_ID_OKEY,
            payload: movie,
          });
        });
      })
      .catch((e) => {
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

export const editMovieAction = (title, year, id, file) => {
  return async (dispatch) => {
    dispatch({ type: EDIT_MOVIE });
    const bodyFormData = new FormData();
    const movieData = `{"name": "${title}", "publicationYear": ${year}}`;
    bodyFormData.append("data", movieData);
    let urlPic;
    if (file) {
      const fileRef = ref(storage, `documents/${title}`);
      await uploadBytes(fileRef, file);
      urlPic = await getDownloadURL(fileRef);
    }

    await axiosMovies
      .put(`/${id}`, bodyFormData)
      .then((rta) => {
        const movie = {
          id: rta.data.data.id,
          attributes: rta.data.data.attributes,
          poster: urlPic,
        };
        dispatch({
          type: EDIT_MOVIE_OKEY,
          payload: movie,
        });
      })
      .catch((e) => {
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
        let title = rta.data.data.attributes.name;
        const fileRef = ref(storage, `documents/${title}`);
        deleteObject(fileRef).then(() =>
          dispatch({
            type: DELETE_MOVIE_OKEY,
            payload: id,
          })
        );
      })
      .catch((e) => {
        dispatch({
          type: DELETE_MOVIE_ERROR,
          payload: e.response.data.error.message,
        });
      });
  };
};
