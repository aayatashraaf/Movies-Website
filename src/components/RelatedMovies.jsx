import axios from "axios";
import { useEffect, useState } from "react";
import "../Styles/RelatedMovies.css";
import MovieCard from "./MovieCard";

const API_KEY = "2dc4f3b7280c70e5009487448e8c74f4";
const TMDB = "https://api.themoviedb.org/3";

function RelatedMovies({ movieId }) {
  const [related, setRelated] = useState([]);
  useEffect(() => {
    if (!movieId) return;
    axios
      .get(`${TMDB}/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => {
        // إزالة التكرار حسب id الفيلم
        const uniqueMovies = Array.from(
          new Map((res.data?.results || []).map((movie) => [movie.id, movie])).values()
        );
        setRelated(uniqueMovies.slice(0, 4)); // ناخد أول 4 فقط بعد إزالة التكرار
      })
      .catch((err) => console.error("Error fetching related movies:", err));
  }, [movieId]);
  
  if (!related || related.length === 0) {
    return <p className="text-center">No related movies found.</p>;
  }
  return (
    <section className="relatedMovies">
      <div className="relatedContainer">
        <h2 className="SectionTitle mb-5">Related Movies</h2>
        <div className="moviesGrid">
          {related.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default RelatedMovies;



