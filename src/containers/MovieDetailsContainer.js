import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  removeSelectedMovie,
  selectedMovie,
} from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import { MovieDetails } from "../components";

const MovieDetailsContainer = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const completeMovieDetails = useSelector((state) => state.movie);
  const [isLoading, setIsLoading] = useState(true);
  console.log(completeMovieDetails);

  useEffect(() => {
    const movieDetailsReq = axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=08c42c0181eca72fa61eda374754ce4d&language=en-US`
    );

    const creditDetailsReq = axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=08c42c0181eca72fa61eda374754ce4d&language=en-US`
    );
    const fetchMovieDetails = async () => {
      const [movieDetails, creditDetails] = await axios
        .all([movieDetailsReq, creditDetailsReq])
        .catch((err) => console.log(err));
      const fullDetails = {
        movieDetails: movieDetails.data,
        castDetails: creditDetails.data.cast,
      };
      dispatch(selectedMovie(fullDetails));
      setIsLoading(false);
    };
    fetchMovieDetails();
    return () => dispatch(removeSelectedMovie());
  }, [movieId, dispatch]);

  return (
    <>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <MovieDetails completeMovieDetails={completeMovieDetails} />
      )}
    </>
  );
};

export default MovieDetailsContainer;
