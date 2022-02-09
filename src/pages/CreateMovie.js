import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import tokenAuth from "../config/token";

import NavBar from "../components/navbar/NavBar";

import { HomeContainer } from "../components/home/homeStyle";

import { getUserAction } from "../redux/actions/LoginAction";
import CreateEditMovie from "../components/createEditMovie/CreateEditMovie";
import { getMoviesAction } from "../redux/actions/MovieAction";

const CreateMovie = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((store) => store.login);
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (!jwt) {
      return navigate("/signin");
    } else if (!user) {
      dispatch(getUserAction());
    }
    tokenAuth(jwt);
    dispatch(getMoviesAction());
  }, [jwt, user]);

  return (
    <HomeContainer noHome={true}>
      <NavBar title="Create a new movie" createButton={false} />
      <CreateEditMovie create={true} />
    </HomeContainer>
  );
};

export default CreateMovie;
