import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import Details from "../components/Details";
import RelatedMovies from "../components/RelatedMovies";

const API_KEY = "2dc4f3b7280c70e5009487448e8c74f4";
const TMDB = "https://api.themoviedb.org/3";

function MovieDetails() {
  const { movieId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    axios
      .get(`${TMDB}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
      .then((res) => setData(res.data))
      .catch((err) => console.error("Error fetching movie details:", err));
  }, [movieId]);

  return (
    <section className="movieDetails">
      <div className="container detailsContainer">
        <Details data={data} />
        <RelatedMovies movieId={movieId} />
      </div>
    </section>
  );
}
export default MovieDetails;

