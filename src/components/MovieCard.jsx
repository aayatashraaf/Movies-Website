import "../Styles/MovieCard.css";
import PlayButton from "./PlayButton";
import SaveButton from "./SaveButton";

const IMG = "https://image.tmdb.org/t/p/w500";

function MovieCard({ movie, variant = "card", onClick, indexLabel }) {
  const title = movie.title || movie.original_title || movie.name || "Untitled";
  const year =
    (movie.release_date && movie.release_date.slice(0, 4)) ||
    (movie.first_air_date && movie.first_air_date.slice(0, 4)) ||
    "—";
  const rating =
    typeof movie.vote_average === "number" ? movie.vote_average.toFixed(1) : "—";
  const posterSrc = movie.poster_path ? `${IMG}${movie.poster_path}` : "";

  if (variant === "tile") {
    return (
      <button className="tileCard" onClick={onClick} aria-label={title}>
        <div className="tileImgWrap">
          <img src={posterSrc} alt={title} loading="lazy" />
        </div>
        {indexLabel != null && <span className="tileIndex">{indexLabel}</span>}
      </button>
    );
  }

  return (
    <div className="movie">
      <div className="image">
        <img src={posterSrc} alt={title} loading="lazy" />
      </div>

      <div className="details">
        <h3 className="title">{title}</h3>
        <p className="year">Year - {year}</p>
        <span className="ratingValue">
          <i className="fa-solid fa-star"></i> {rating}
        </span>
        <PlayButton movieId={movie.id} />
        <SaveButton movie={movie} />
      </div>
    </div>
  );
}

export default MovieCard;
