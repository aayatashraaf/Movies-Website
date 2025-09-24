import { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/FilterMovies.css";

const API_KEY = "2dc4f3b7280c70e5009487448e8c74f4";
const TMDB = "https://api.themoviedb.org/3";
function FilterMovies({ setSelectedCategory, setSelectedLabel }) {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    axios
      .get(`${TMDB}/genre/movie/list?api_key=${API_KEY}&language=en-US`)
      .then((res) => setGenres(res.data.genres || []))
      .catch((err) => console.error("Error fetching genres:", err));
  }, []);
  function handleChange(e) {
    const value = e.target.value;                        
    const label = e.target.selectedOptions[0].textContent; 
    setSelectedCategory(value);
    setSelectedLabel(label);
  }
  return (
    <div className="filter text-center">
      <select name="Genres" onChange={handleChange} defaultValue="">
        <option value="">Choose Your Movies</option>
        {genres.map((g) => (
          <option key={g.id} value={`/discover/movie?with_genres=${g.id}`}>
            {g.name}
          </option>
        ))}
      </select>
    </div>
  );
}
export default FilterMovies;


