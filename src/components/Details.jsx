import { Link } from "react-router-dom";
import "../Styles/Details.css";

export default function Details({ data, images, title }) {
  if (!data) return null;

  const year = (data.release_date || "").slice(0, 4);
  const rating = typeof data.vote_average === "number" ? data.vote_average.toFixed(1) : "—";
  const poster = data.poster_path ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : null;
  const genres = (data.genres || []).map((g) => g.name).join(", ");
  const runtime = data.runtime ? `${data.runtime} min` : "—";
  const lang = data.original_language?.toUpperCase() || "—";

  return (
    <div className="detailsContent">
      <div className="images">
        <div className="columnImages">
          {images?.length > 0
            ? images.map((src, i) => (
                <div key={i}>
                  <img src={src} alt={title} />
                </div>
              ))
            : poster && (
                <div>
                  <img src={poster} alt={title} />
                </div>
              )}
        </div>
      </div>
      <div className="details">
        <h1 className="title">
          {title} {year ? `(${year})` : ""}
        </h1>

        <div className="rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span key={i}>
                {i < Math.round((Number(rating) || 0) / 2) ? (
                  <i className="fa-solid fa-star text-warning"></i>
                ) : (
                  <i className="fa-solid fa-star text-secondary text-opacity-25"></i>
                )}
              </span>
            ))}
          </div>
          <span className="value">({rating})</span>
        </div>

        <p className="description">
          <span>Description: </span>
          {data.overview || "No overview available."}
        </p>

        <p className="language">
          <span>Original Language: </span>
          {lang}
        </p>

        <p className="genres">
          <span>Genres: </span>
          {genres || "—"}
        </p>

        <p className="time">
          <span>Runtime: </span>
          {runtime}
        </p>

        <p className="status">
          <span>Status: </span>
          {data.status || "—"}
        </p>

        <p className="date">
          <span>Release Date: </span>
          {data.release_date || "—"}
        </p>

        <p className="imdb">
          <span>IMDB: </span>
          {data.imdb_id ? (
            <a
              href={`https://www.imdb.com/title/${data.imdb_id}/`}
              target="_blank"
              rel="noreferrer"
            >
              {data.imdb_id}
            </a>
          ) : (
            "—"
          )}
        </p>
        
        <Link
          className="backbtn"
          to="/movies"
          onClick={() => window.scrollTo(0, 0)}
        >
          Back to Movies
        </Link>
      </div>
    </div>
  );
}
