import { Link } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import { CardStyle, DataMovie, DeleteBtn, MovieContainer } from "./moviesStyles";
import pic1 from "../../assets/pic1.png";
import { useDispatch } from "react-redux";
import { deleteMovieAction } from "../../redux/actions/MovieAction";

const Movies = ({ movies }) => {
  const dispatch = useDispatch();

  return (
    <>
      <NavBar title="My movies" />
      <MovieContainer>
        {movies.map((movie) => (
          <CardStyle key={movie.id}>
            <DeleteBtn
              className="body-text-large"
              onClick={() => dispatch(deleteMovieAction(movie.id))}
            >
              x
            </DeleteBtn>
            <Link to={`/edit-movie/${movie.id}`}>
              <img src={pic1} alt="pic1" />
              <DataMovie>
                <span className="body-text-large">{movie.attributes.name}</span>
                <span className="body-text-small">
                  {movie.attributes.publicationYear}
                </span>
              </DataMovie>
            </Link>
          </CardStyle>
        ))}
      </MovieContainer>
    </>
  );
};

export default Movies;
