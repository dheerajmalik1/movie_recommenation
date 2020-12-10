import React, { useState } from "react";
import "./styles.css";

const moviesDB = {
  scienceFiction: [{ name: "Interstellar" }, { name: "Inception" }],

  thriller: [
    {
      name: "Edge of tomorrow"
    }
  ],

  funny: [{ name: "Hangover" }],

  motivational: [
    { name: "Shawshank Redemption" },
    { name: "Persuit of Heppyness" }
  ]
};
export default function App() {
  const [genreSelected, setGenre] = useState(["scienceFiction"]);

  function handleButtonClick(genre) {
    // setGenre(genreObject);
    setGenre(genre);
  }

  // var movieArray = Object.keys(genre);
  // console.log(movieArray);

  return (
    <div className="App">
      <h2>Recommended movies</h2>
      <h4>These movies, I think are nice, check these out</h4>
      {Object.keys(moviesDB).map((genre) => (
        <button
          key={genre}
          onClick={() => handleButtonClick(genre)}
          style={{
            background: "#ebe3b2",
            color: "#877f4e",
            padding: ".5rem 1rem",
            borderRadius: ".5rem",
            margin: ".3rem"
          }}
        >
          {genre}
        </button>
      ))}

      {/* <button
        onClick={() => handleButtonClick(thrillerMovies)}
        style={{ padding: ".5rem 1rem" }}
      >
        Thriller
      </button>
      <button
        onClick={() => handleButtonClick(funnyMovies)}
        style={{ padding: ".5rem 1rem" }}
      >
        Funny
      </button>
      <button
        onClick={() => handleButtonClick(motivationalMovies)}
        style={{ padding: ".5rem 1rem" }}
      >
        Motivational
      </button> */}
      <hr />

      <>
        {/* {moviesDB[genreSelected].map((movies) => {
          <li>{movies}</li>
        })} */}
        {moviesDB[genreSelected].map((movie) => (
          <li
            style={{
              listStyle: "none",
              padding: ".5rem 1rem",
              margin: "1rem",
              width: "20rem",
              border: "1px solid #241f04",
              borderRadius:".5rem"
            }}
          >
            {movie.name}
          </li>
        ))}
      </>
    </div>
  );
}
