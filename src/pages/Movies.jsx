import { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import "../Styles/Movies.css";

const API_KEY = "2dc4f3b7280c70e5009487448e8c74f4";
const TMDB = "https://api.themoviedb.org/3";

function Movies({ selectedCategory, selectedLabel }) {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    function buildUrl(pathOrQuery = "") {
      const base =
        pathOrQuery && pathOrQuery.trim().length > 0
          ? pathOrQuery
          : "/trending/movie/day"; 
      const hasQuery = base.includes("?");
      const join = hasQuery ? "&" : "?";
      return `${TMDB}${base}${join}api_key=${API_KEY}&page=${currentPage}`;
    }
    const url = buildUrl(selectedCategory);
    axios
      .get(url)
      .then((res) => {
        setMovies(res.data.results || []);
        setTotalPages(res.data.total_pages || 1);
      })
      .catch((err) => console.error("Error fetching movies:", err));
  }, [selectedCategory, currentPage]);
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const heading =
    selectedLabel && selectedLabel.trim().length > 0
      ? selectedLabel
      : "Choose Your Movies";

  return (
    <>
      {movies && movies.length > 0 ? (
        <section className="moviesSection">
          <h3 className="categoryName">{heading.toUpperCase()}</h3>
          <div className="moviesGrid">
            {movies.slice(0, itemsPerPage).map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
          <div className="pagination">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <span>
              {currentPage} / {totalPages}
            </span>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
export default Movies;


