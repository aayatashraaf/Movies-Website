import { Link } from "react-router-dom";
import "../Styles/Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer>
      <div className="container footerContainer">
        <div className="pages">
            <button
            type="button"
            className="backToTop"
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top">
            <i className="fa-solid fa-arrow-up" aria-hidden="true"></i>
          </button>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/movies">Watch</Link>
            <Link to="/my-list">My List</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy</Link>
          </div>
        </div>
        <hr />
        <div className="copyright">
          <p className="copyText">
            &copy; By <strong>Ayat Ashraf</strong> — All Rights Reserved
          </p>
          <Link className="logo" to="/">Filmora</Link>
          <div className="social">
            <a
              href="https://github.com/aayatashraaf"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub">
              <i className="fa-brands fa-github github" />
            </a>
            <a
              href="https://www.linkedin.com/in/ayat-ashraf-106162345/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn">
              <i className="fa-brands fa-linkedin linkedin" />
            </a>
            <a
              href="mailto:aayataashraaf@gmail.com"
              title="Send Email">
              <i className="fa-regular fa-envelope email" />
            </a>
            <a
              href="https://www.facebook.com/ayat.ashraf.587/"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook">
              <i className="fa-brands fa-facebook facebook" />
            </a>
            <a
              href="https://www.instagram.com/aayaataashraaf/"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram">
              <i className="fa-brands fa-instagram instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;


