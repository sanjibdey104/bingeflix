import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieList } from "../components";
import { setMovies } from "../redux/actions/movieAction";

const MovieListContainer = () => {
  const movieLists = useSelector((state) => state.allMovies.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    const api_key = process.env.REACT_APP_TMDB_API_KEY;
    const weeklyTrendingListReq = axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}`
    );
    const latestListReq = axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=14&with_watch_monetization_types=flatrate`
    );
    const fetchMovies = async () => {
      const [trendingList, latestList] = await axios
        .all([weeklyTrendingListReq, latestListReq])
        .catch((err) => console.log(err));
      const trendingListObj = {
        category: "Trending This Week",
        list: trendingList.data.results,
      };
      const latestListObj = {
        category: "Latest Releases",
        list: latestList.data.results.sort((a, b) => {
          let dateA = new Date(a.release_date);
          let dateB = new Date(b.release_date);
          return dateB - dateA;
        }),
      };
      dispatch(setMovies([trendingListObj, latestListObj]));
    };
    fetchMovies();
  }, [dispatch]);

  return (
    <>
      {movieLists.map((movieList) => (
        <MovieList
          key={movieList.category.split(" ").join()}
          category={movieList.category}
          movies={movieList.list}
        />
      ))}
    </>
  );
};

export default MovieListContainer;
