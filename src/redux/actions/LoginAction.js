import { axiosLogin } from "../../config/axiosClient";
import { LOGIN, LOGIN_OKEY, LOGIN_ERROR, GET_LOGIN, LOG_OUT } from "../types";

export const loginUserAction = (email, pass) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN });
    await axiosLogin
      .post("/", {
        identifier: email,
        password: pass,
      })
      .then((rta) => {
        dispatch({
          type: LOGIN_OKEY,
          payload: rta.data.user,
        });
        localStorage.setItem("jwt", rta.data.jwt);
      })
      .catch((e) => {
        dispatch({
          type: LOGIN_ERROR,
          payload: e.response.data.error.message,
        });
      });
  };
};
export const getUserAction = () => ({
  type: GET_LOGIN,
});
export const logOutUserAction = () => {
  return async (dispatch) => {
    localStorage.removeItem("jwt");
    dispatch({
      type: LOG_OUT,
    });
  };
};
