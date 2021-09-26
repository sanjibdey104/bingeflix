import { combineReducers } from "redux";
import {
  featuredMovieReducer,
  movieReducer,
  selectedMovieReducer,
} from "./movieReducer";

const reducers = combineReducers({
  allMovies: movieReducer,
  movie: selectedMovieReducer,
  featuredMovie: featuredMovieReducer,
});

export default reducers;
