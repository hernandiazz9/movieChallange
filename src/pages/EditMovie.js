import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import { HomeContainer } from "../components/home/homeStyle";
import { getUserAction } from "../redux/actions/LoginAction";
import CreateEditMovie from "../components/createEditMovie/CreateEditMovie";
import {
  getMovieById,
  getMoviesAction,
  setMovieById,
} from "../redux/actions/MovieAction";
import tokenAuth from "../config/token";

const EditMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const { user } = useSelector((store) => store.login);
  const { movie } = useSelector((store) => store.movie);

  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (!jwt) {
      return navigate("/signin");
    } else if (!user) {
      tokenAuth(jwt);
      dispatch(getUserAction());
      dispatch(getMoviesAction());

      dispatch(getMovieById(params.id));
    } else {
      dispatch(setMovieById(params.id));
    }
  }, [jwt, user]);

  return (
    <HomeContainer noHome={true}>
      <NavBar title="Edit" createButton={false} />
      <CreateEditMovie movie={movie} create={false} />
    </HomeContainer>
  );
};

export default EditMovie;
