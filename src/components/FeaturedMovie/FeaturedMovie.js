import React from "react";
import { BiPlay, BiPlus } from "react-icons/bi";
import { StyledFeaturedMovie } from "./FeaturedMovie.style";

const FeaturedMovie = ({ movieDetails }) => {
  const { original_title, backdrop_path, overview } = movieDetails;
  return (
    <StyledFeaturedMovie>
      <div className="wrapper">
        <div className="backdrop-image">
          <img
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            alt={original_title}
          />
        </div>
        <div className="info">
          <h2 className="title">{original_title}</h2>
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
          </div>
        </div>
      </div>
    </StyledFeaturedMovie>
  );
};

export default FeaturedMovie;
