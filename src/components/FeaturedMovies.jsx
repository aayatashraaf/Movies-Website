import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "../Styles/FeaturedMovies.css";
import MovieCard from "./MovieCard";

function FeaturedMovies() {
  const [movies, setMovies] = useState([]);
  const rowRef = useRef(null);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=2dc4f3b7280c70e5009487448e8c74f4"
      )
      .then((res) => {
        setMovies((res.data?.results || []).slice(0, 10));
      })
      .catch((err) => console.error("Error fetching movies:", err));
  }, []);

  const scroll = (dir) => {
    const el = rowRef.current;
    if (!el) return;
    const cardWidth =
      el.firstElementChild?.getBoundingClientRect().width || 250;
    const gap = 16;
    el.scrollBy({
      left: (cardWidth + gap) * (dir === "left" ? -4 : 4),
      behavior: "smooth",
    });
  };

  return (
    <section className="featuredMovies">
      <div className="container moviesContainer">
        <h2 className="sectionTitle mb-4 text-center">Trending Now</h2>
        <div className="carouselWrapper">
          <button className="scrollBtn left" onClick={() => scroll("left")}>
            ‹
          </button>

          <div className="moviesRow" ref={rowRef}>
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>

          <button className="scrollBtn right" onClick={() => scroll("right")}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedMovies;


