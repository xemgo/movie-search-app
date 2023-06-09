import React from "react";
import image from "./img/pfilm758-venom_cf5f6ce2-movie-posteri-film-500x500h.webp";
import "./Movies.css";

const Movies = ({movies, setMovies}) => {

  return (


    <div className="container">
        {movies.map((movie) => (
          <div className="card">
          <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={movie.title} />
          <h3 className="film-name">{movie.title}</h3>
          <div className="imdb">
            <h3 className="puan">{movie.vote_average}</h3>
          </div>
        </div>  
        ))}
      
    </div>

  );
};

export default Movies;
