import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getUserAction } from "../redux/actions/LoginAction";
import { getMoviesAction } from "../redux/actions/MovieAction";

import NoMovies from "../components/noMovies/NoMovies";
import tokenAuth from "../config/token";
import { HomeContainer } from "../components/home/homeStyle";
import Pagination from "../components/pagination/Pagination";
import Spinner from "../components/Spinner";

const Home = () => {
  const dispatch = useDispatch();
  const { user, movieLoading } = useSelector((store) => store.login);
  const { movies } = useSelector((store) => store.movie);
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();

  useEffect(() => {
    if (!jwt) {
      return navigate("/signin");
    } else if (!user) {
      dispatch(getUserAction());
    }
    if (movies.length === 0) {
      tokenAuth(jwt);
      dispatch(getMoviesAction());
    }
  }, [jwt, user]);
  // console.log(movies);
  return (
    <>
      {movieLoading ? (
        <Spinner />
      ) : (
        <HomeContainer>
          {movies && movies.length === 0 ? (
            <NoMovies />
          ) : (
            <Pagination movies={movies} />
          )}
        </HomeContainer>
      )}
    </>
  );
};

export default Home;
