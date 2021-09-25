import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieList } from "../components";
import { setMovies } from "../redux/actions/movieAction";

const MovieListContainer = () => {
  const movies = useSelector((state) => state.allMovies.movies);
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    const res = await axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=08c42c0181eca72fa61eda374754ce4d&language=en-US&include_adult=false&include_video=false&page=1&with_genres=53&with_watch_monetization_types=flatrate"
      )
      .catch((err) => console.log(err));
    dispatch(setMovies(res.data.results));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Movie List</h2>
      <MovieList movies={movies && movies} />
    </div>
  );
};

export default MovieListContainer;
