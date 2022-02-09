import { useEffect, useState } from "react";
import Movies from "../movies/Movies";
import {
  PageNumber,
  PaginationButton,
  PaginationContainer,
} from "./paginationStyle";


const Pagination = ({ movies }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentMovies, setCurrentMovies] = useState([]);
  const [pageNumbers, setPageNumbers] = useState([]);
  const moviesPerPage = 8;

  useEffect(() => {
    let pageNumber = [];
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
    setCurrentMovies(currentMovies);
    for (let i = 1; i <= Math.ceil(movies.length / moviesPerPage); i++) {
      pageNumber.push(i);
    }
    setPageNumbers(pageNumber);
  }, [currentPage, movies]);

  return (
    <>
      <Movies movies={currentMovies} />
      <PaginationContainer>
        <PaginationButton
          onClick={() =>
            setCurrentPage((current) => (current === 1 ? 1 : current - 1))
          }
          className="body-text-regular"
        >
          Prev
        </PaginationButton>

        {pageNumbers.map((num) => (
          <PageNumber
            onClick={() => setCurrentPage(num)}
            key={num}
            className="body-text-regular"
            btnColor={currentPage === num ? "--primary" : "--card-color"}
          >
            {num}
          </PageNumber>
        ))}
        <PaginationButton
          onClick={() =>
            setCurrentPage((current) =>
              current === pageNumbers.length ? pageNumbers.length : current + 1
            )
          }
          className="body-text-regular"
        >
          Next
        </PaginationButton>
      </PaginationContainer>
    </>
  );
};

export default Pagination;
