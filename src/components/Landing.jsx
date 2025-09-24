import { Link } from "react-router-dom";
import hero from "../assets/Landing.jpg";
import "../Styles/Landing.css";

function Landing() {
  return (
    <main>
      <div className="landingWrapper" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.2)), url(${hero})` }}>
        <div className="landingContent">
          <h1 >Welcome to Filmora</h1>
          <p>
            Discover a world of movies and shows tailored for you lassics to the latest blockbusters
            <br></br><strong style={{ color: "rgba(181, 3, 3, 0.96)" }}>anytime and anywhere.</strong>
          </p>
          <Link to="/movies" className="watchBtn">Watch Now</Link>
        </div>
      </div>
    </main>
  );
}
export default Landing;
