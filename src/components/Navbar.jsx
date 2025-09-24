import { Link, NavLink } from "react-router";
import "../Styles/Navbar.css";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

function Navbar() {
  const { logout, user } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext); 
  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link to={"/"} className="navbar-brand logo">
            Filmora
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/movies">
                  Watch
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/my-list" className="nav-link">
                  My List
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/contact"} className="nav-link">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <button onClick={toggleTheme} className="btn nav-link border-0">
                  {theme === "light" ? (
                    <i className="fa-solid fa-moon"></i>
                  ) : (
                    <i className="fa-solid fa-sun"></i>
                  )}
                </button>
              </li>
              {user ? (
                <li onClick={handleLogout} className="nav-item">
                  <NavLink to="/" className="nav-link logoutBtn">
                    Logout
                  </NavLink>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink to="/login" className="nav-link loginBtn">
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
