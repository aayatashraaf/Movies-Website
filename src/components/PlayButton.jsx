import { useNavigate } from "react-router-dom";
import "../Styles/MovieCard.css";

function PlayButton({ movieId }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/movies/${movieId}`); 
  };
  return (
    <button className="playBtn" onClick={handleClick}>
      <i className="fa-solid fa-play"></i> Play
    </button>
  );
}
export default PlayButton;


