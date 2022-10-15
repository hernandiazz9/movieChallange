import axios from "axios";

export const axiosLogin = axios.create({
  baseURL: "https://zm-movies-assignment.herokuapp.com/api/auth/local",
});

export const axiosMovies = axios.create({
  baseURL: "https://zm-movies-assignment.herokuapp.com/api/movies",
  // headers:{
  //    "Content-Type": "multipart/form-data" 
  // }
  //   Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImlhdCI6MTY0NDE4MDY2MywiZXhwIjoxNjQ2NzcyNjYzfQ.7h8aw3VzO-yAfUpPRXZF2fMMlRY-E1eYkUs8CFEBSDE`

});
