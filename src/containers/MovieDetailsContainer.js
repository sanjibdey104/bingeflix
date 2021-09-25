import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { selectedMovie } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import { MovieDetails } from "../components";

const MovieDetailsContainer = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const movieDetails = useSelector((state) => state.movie);
  console.log(movieDetails);

  const [isLoading, setIsLoading] = useState(true);

  const fetchMovieDetails = async () => {
    const res = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=08c42c0181eca72fa61eda374754ce4d&language=en-US`
      )
      .catch((err) => console.log(err));
    dispatch(selectedMovie(res.data));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [movieId]);

  return (
    <>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <MovieDetails movieDetails={movieDetails} />
      )}
    </>
  );
};

export default MovieDetailsContainer;
