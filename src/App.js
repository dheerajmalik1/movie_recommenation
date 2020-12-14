import React, { useState } from "react";
import "./styles.css";

const moviesDB = {
  scienceFiction: [
    {
      name: "Interstellar",
      imagSrc:
        "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    },
    {
      name: "Inception",
      imagSrc:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
    }
  ],

  thriller: [
    {
      name: "Edge of tomorrow",
      imagSrc:
        "https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_SX300.jpg"
    }
  ],

  funny: [
    {
      name: "Hangover",
      imagSrc:
        "https://m.media-amazon.com/images/M/MV5BZWYwYjE2NWQtZmMwMi00YWVhLTgwOGMtODQ4NDQ2NTA4Y2ZkXkEyXkFqcGdeQXVyNjA3OTI5MjA@._V1_SX300.jpg"
    }
  ],

  motivational: [
    {
      name: "Shawshank Redemption",
      imagSrc:
        "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    }
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
      <h2
        style={{
          color: "white"
        }}
      >
        Recommended movies
      </h2>
      <h4
        style={{
          color: "white"
        }}
      >
        These movies, I think are nice, check these out
      </h4>
      {Object.keys(moviesDB).map((genre) => (
        <button
          key={genre}
          onClick={() => handleButtonClick(genre)}
          style={{
            cursor: "pointer",
            background: "#3e3636",
            color: "white",
            padding: ".5rem 1rem",
            border: "1px solid goldenrod",
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

      <div>
        {/* {moviesDB[genreSelected].map((movies) => {
          <li>{movies}</li>
        })} */}
        <ul
          style={{
            textAlign: "center",
            margin: "auto"
          }}
        >
          {moviesDB[genreSelected].map((movie) => (
            <li
              style={{
                textAlign: "center",
                background: "#3e3636",
                listStyle: "none",
                padding: ".5rem 1rem",
                margin: "1rem",
                width: "20rem",
                border: "1px solid goldenrod",
                borderRadius: ".5rem",
                color: "white"
              }}
            >
              {movie.name}
              <img src={movie.imagSrc}></img>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
