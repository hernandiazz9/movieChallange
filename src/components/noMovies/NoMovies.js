import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import { Container } from "../singIn/singInStyle";
import { Button } from "./noMoviesStyle";

const NoMovies = () => {
  return (
    <>
      <NavBar />
      <Container height={62}>
        <h2>Your movie list is empty</h2>
        <Link to={"/create-movie"}>
          <Button className="body-text-regular" type="button">
            Add a new movie
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default NoMovies;
