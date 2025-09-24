import { Link } from "react-router-dom";
import "../Styles/Subscribe.css";

function Subscribe() {
  return (
    <section className="subscribe">
      <div className="container subscribeContainer text-center">
        <h1>Stay tuned for the hottest movie updates subscribe to our newsletter</h1>
        <Link to="/movies">Watch Now</Link>
      </div>
    </section>
  );
}

export default Subscribe;

