import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import { StyledMovieList } from "./MovieList.style";

const MovieList = ({ movies }) => {
  return (
    <StyledMovieList>
      {movies.map((movie) => (
        <MovieCard movieBrief={movie} key={movie.id} />
      ))}
    </StyledMovieList>
  );
};

export default MovieList;