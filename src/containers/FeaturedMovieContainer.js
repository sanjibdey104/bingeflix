import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FeaturedMovie from "../components/FeaturedMovie/FeaturedMovie";
import {
  removeFeaturedMovie,
  setFeaturedMovie,
} from "../redux/actions/movieAction";

const FeaturedMovieContainer = () => {
  const dispatch = useDispatch();
  const featuredMovieDetails = useSelector((state) => state.featuredMovie);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const api_key = process.env.REACT_APP_TMDB_API_KEY;
    const movieIds = [566525, 438631, 791373, 399566, 597891];
    let randomMovieId = movieIds[Math.floor(Math.random() * movieIds.length)];

    const fetchMovieDetails = async () => {
      const movieDetails = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${randomMovieId}?api_key=${api_key}&language=en-US`
        )
        .catch((err) => console.log(err));
      dispatch(setFeaturedMovie(movieDetails.data));
    };

    fetchMovieDetails();
    setIsLoading(false);
    return () => dispatch(removeFeaturedMovie());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <p
          style={{
            height: "100vh",
            width: "100%",
            display: "grid",
            placeContent: "center",
          }}
        >
          loading...
        </p>
      ) : (
        <FeaturedMovie movieDetails={featuredMovieDetails} />
      )}
    </>
  );
};

export default FeaturedMovieContainer;
