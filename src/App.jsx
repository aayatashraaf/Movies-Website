import { Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import MovieDetails from "./pages/MovieDetails";
import MoviesPage from "./pages/MoviesPage";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import MyList from "./pages/MyListPage";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { ThemeProvider } from "./contexts/ThemeContext";
import Privacy from "./pages/Privacy";

function App() {
  const location = useLocation();
  const componentsHiddenIn = ["/login", "/register"];
  const show = !componentsHiddenIn.includes(location.pathname);

  return (
    <ThemeProvider>
      <AuthProvider>
        {show && <Navbar />}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route
            path="/movies/:movieId"
            element={
              <ProtectedRoutes>
                <MovieDetails />
              </ProtectedRoutes>
            }
          />

          <Route
            path="/my-list"
            element={
              <ProtectedRoutes>
                <MyList />
              </ProtectedRoutes>
            }
          />

          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        {show && <Footer />}
      </AuthProvider>
    </ThemeProvider>
  );
}
export default App;

