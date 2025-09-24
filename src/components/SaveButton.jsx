import { useState, useEffect } from "react";
import "../Styles/MovieCard.css";

function SaveButton({ movie }) {
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    const myList = JSON.parse(localStorage.getItem("myList")) || [];
    setSaved(myList.some((el) => el.id === movie.id));
  }, [movie.id]);

  const handleSave = () => {
    const myList = JSON.parse(localStorage.getItem("myList")) || [];
    let updatedList;

    if (saved) {
      updatedList = myList.filter((el) => el.id !== movie.id);
      setSaved(false);
    } else {
      updatedList = [...myList, movie];
      setSaved(true);
    }
    //بتتخزن حتي لو عملت ريفريش
    localStorage.setItem("myList", JSON.stringify(updatedList));
    window.dispatchEvent(new Event("storage"));
  };
  return (
    <button
      className={`saveBtn ${saved ? "saved" : ""}`}
      onClick={handleSave}
      title={saved ? "Remove from My List" : "Save to My List"}
    >
      {saved ? (
        <i className="fa-solid fa-bookmark"></i>
      ) : (
        <i className="fa-regular fa-bookmark"></i> 
      )}
    </button>
  );
}
export default SaveButton;

