import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { StyledMovieList } from "./MovieList.style";

const MovieList = ({ category, movies }) => {
  return (
    <StyledMovieList>
      <h2 className="category">{category}</h2>
      <div className="list-wrapper">
        <div className="list">
          {movies.map((movie) => (
            <MovieCard movieBrief={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </StyledMovieList>
  );
};

export default MovieList;
