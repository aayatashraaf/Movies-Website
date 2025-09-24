import { useState } from "react";
import FilterMovies from "../components/FilterMovies";
import Movies from "./Movies";

function MoviesPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLabel, setSelectedLabel] = useState("");

  return (
    <section className="moviesPage">
      <div className="container moviesPageContainer">
        <h2 className="SectionTitle my-5">Movies</h2>
        <FilterMovies
          setSelectedCategory={setSelectedCategory}
          setSelectedLabel={setSelectedLabel}
        />
        <Movies
          selectedCategory={selectedCategory}
          selectedLabel={selectedLabel}
        />
      </div>
    </section>
  );
}
export default MoviesPage;

