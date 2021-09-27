import React from "react";
import { StyledItemDetailsPage } from "./ItemDetails.style";
import { BiPlay, BiPlus } from "react-icons/bi";
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";
import { formatRuntime } from "../../utils/formatRuntime";

const ItemDetails = ({ itemType, completeItemDetails }) => {
  const { itemDetails, castDetails } = completeItemDetails;
  const {
    vote_average,
    original_language,
    backdrop_path,
    poster_path,
    overview,
    genres,
    homepage,
  } = itemDetails;

  const original_title = itemDetails?.original_title || itemDetails?.name;
  const release_date = itemDetails?.release_date || itemDetails?.first_air_date;
  let runtime = itemDetails?.runtime || itemDetails?.episode_run_time[0];

  const releaseYear = release_date.split("-")[0];
  const genreNames = genres.map((genre) => genre.name).join(", ");
  const cast = castDetails
    .map((cast) => cast.original_name)
    .splice(0, 4)
    .join(", ");

  let formattedRuntime = formatRuntime(runtime);

  return (
    <StyledItemDetailsPage>
      <div className="wrapper">
        <div className="backdrop-image">
          <img
            src={`https://image.tmdb.org/t/p/original${
              backdrop_path || poster_path
            }`}
            alt={original_title}
          />
        </div>
        <div className="info">
          <h2 className="title">{original_title}</h2>
          <div className="extra">
            <p className="release-year">{releaseYear}</p>
            <p className="avg-rating">⭐{vote_average}/10</p>
            <p className="language">{original_language}</p>
            <p className="runtime">{formattedRuntime}</p>
          </div>

          <p className="overview">{overview}</p>
          <div className="controls">
            <a
              className="play"
              href={homepage ? homepage : ""}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiPlay />
              Play
            </a>
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

          {itemType === "tv" && (
            <div className="tv-show-info">
              <p className="season_count">
                <span>No. of seasons: </span> {itemDetails?.number_of_seasons}
              </p>
              <p className="episode_count">
                <span>No. of episodes: </span> {itemDetails?.number_of_episodes}
              </p>
              <p className="last-air-date">
                <span>Last air date: </span> {itemDetails?.last_air_date}
              </p>
            </div>
          )}
        </div>
      </div>
    </StyledItemDetailsPage>
  );
};

export default ItemDetails;
