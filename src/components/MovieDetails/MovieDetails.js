import React from "react";
import { StyledMovieDetailsPage } from "./MovieDetails.style";
import { BiPlay, BiPlus } from "react-icons/bi";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { formatRuntime } from "../../utils/formatRuntime";

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

  let formattedRuntime = formatRuntime(runtime);

  return (
    <StyledMovieDetailsPage>
      <div className="wrapper">
        <div className="backdrop-image">
          <img
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            alt={original_title}
          />
        </div>
        <h2 className="title">{original_title}</h2>
        <div className="extra">
          <p className="release-year">{releaseYear}</p>
          <p className="runtime">{formattedRuntime}</p>
          <p className="avg-rating">⭐{vote_average}</p>
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
