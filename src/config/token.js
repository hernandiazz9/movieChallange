import { axiosMovies } from "./axiosClient";

const tokenAuth = (token) => {
  if (axiosMovies.defaults.headers["Authorization"]) return;
  axiosMovies.defaults.headers["Authorization"] = `Bearer ${token}`;
  axiosMovies.defaults.headers["Content-Type"] = `multipart/form-data`;
};

export default tokenAuth;
