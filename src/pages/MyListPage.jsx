import { useState, useEffect } from "react";
import "../Styles/MyList.css";
import MovieCard from "../components/MovieCard";
import PlayButton from "../components/PlayButton"; 

function MyListPage() {
  const [myList, setMyList] = useState([]);
  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("myList")) || [];
    setMyList(savedMovies);
    // عشان احدث الصفحة تلقائيًا لو حصل حفظ/حذف من مكان آخر
    const handleStorageChange = () => {
      setMyList(JSON.parse(localStorage.getItem("myList")) || []);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);
  //مسح فيلم
  const handleRemove = (id) => {
    const updatedList = myList.filter((movie) => movie.id !== id);
    setMyList(updatedList);
    localStorage.setItem("myList", JSON.stringify(updatedList));
  };
  //حاله ال list لما تكون فاضيه
  if (myList.length === 0) {
    return (
      <div className="myListPage">
        <h2 className="SectionTitle">My List</h2>
        <p className="emptyText">Your list is empty
          <br></br>Save some movies to see them here!</p>
      </div>
    );
  }
  return (
    <div className="myListPage">
      <h2 className="SectionTitle">My List</h2>
      <div className="moviesGrid">
        {myList.map((movie) => {
          const title = movie.title || movie.original_title || "Untitled";
          const year = (movie.release_date || "").slice(0, 4);
          const rating =
            typeof movie.vote_average === "number" ? movie.vote_average.toFixed(1) : "—";
          return (
            <div key={movie.id} className="movieCardWrapper">
              <MovieCard movie={movie} variant="tile" />
              <div className="details">
                <div className="titleRow">
                  <h3 className="title">{title}</h3>
                  <p className="year">Year - {year}</p>
                  <span className="ratingValue">
                    <i className="fa-solid fa-star"></i> {rating}
                  </span>
                </div>
        <div className="movieActions">
  <PlayButton movieId={movie.id} className="playBtn" /> 
  <button className="removeBtn" onClick={() => handleRemove(movie.id)}>
    Remove
  </button>
</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default MyListPage;

