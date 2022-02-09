import { axiosMovies } from "./axiosClient";

// const bodyFormData = new FormData();
// bodyFormData.append("data", { name: "cars", publicationYear: 1238 });

const tokenAuth = (token) => {
  if (axiosMovies.defaults.headers["Authorization"]) return;
  axiosMovies.defaults.headers["Authorization"] = `Bearer ${token}`;
  // axiosMovies.defaults.headers.common.Accept = `*/*`;
  axiosMovies.defaults.headers['Content-Type'] = `multipart/form-data`;

  console.log(axiosMovies.defaults.headers);
};

export default tokenAuth;

//   headers: { "Content-Type": "multipart/form-data" }
