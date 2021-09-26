import React from "react";
import { StyledMovieDetailsPage } from "./MovieDetails.style";
import { BiPlay, BiPlus } from "react-icons/bi";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";

const MovieDetails = ({ completeMovieDetails }) => {
  const { movieDetails, castDetails } = completeMovieDetails;
  const {
    original_title,
    release_date,
    runtime,
    vote_average,
    backdrop_path,
    overview,
    genres,
  } = movieDetails;

  const releaseYear = release_date.split("-")[0];
  const genreNames = genres.map((genre) => genre.name).join(", ");
  const cast = castDetails
    .map((cast) => cast.original_name)
    .splice(0, 4)
    .join(", ");

  const formatRuntime = (runtime) => {
    let result;
    if (runtime / 60 > 1) {
      let hours = runtime / 60;
      let roundedHours = Math.round(hours);
      let minutes = Math.round((hours - roundedHours) * 60);
      result = `${roundedHours}h ${minutes}min`;
    } else result = `${runtime} min`;
    return result;
  };
  let formattedRuntime = formatRuntime(runtime);

  return (
    <StyledMovieDetailsPage>
      <div className="wrapper">
        <h2 className="title">{original_title}</h2>
        <div className="extra">
          <p className="release-year">{releaseYear}</p>
          <p className="runtime">{formattedRuntime}</p>
          <p className="avg-rating">⭐{vote_average}</p>
        </div>
        <div className="backdrop-image">
          <img
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            alt={original_title}
          />
        </div>
        <p className="overview">{overview}</p>
        <div className="controls">
          <button className="play">
            <BiPlay />
            Play
          </button>
          <button className="add-to-list">
            <BiPlus />
            My List
          </button>
          <div className="like-dislike">
            <button>
              <FiThumbsUp />
            </button>
            <button>
              <FiThumbsDown />
            </button>
          </div>
        </div>
        <div className="genre-cast">
          <p className="genre-names">
            <span>Genres:</span> {genreNames}
          </p>
          <p className="cast-names">
            <span>Cast:</span> {cast}
          </p>
        </div>
      </div>
    </StyledMovieDetailsPage>
  );
};

export default MovieDetails;
