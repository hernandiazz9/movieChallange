import { Link } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import {
  CardStyle,
  DataMovie,
  DeleteBtn,
  ImgMovie,
  MovieContainer,
} from "./moviesStyles";
import { useDispatch } from "react-redux";
import { deleteMovieAction } from "../../redux/actions/MovieAction";
import Spinner from "../Spinner";

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
              <ImgMovie>
                {!movie.poster && <Spinner />}
                <img src={movie.poster} alt={movie.attributes.name} />
              </ImgMovie>

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
