import React from "react";
import { StyledMovieCard } from "./MovieCard.style";

const MovieCard = ({ movieBrief }) => {
  const { id, backdrop_path, title, overview, release_date } = movieBrief;
  return (
    <StyledMovieCard key={id}>
      <img
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        alt={title}
      />
      {/* <p className="title">{title}</p> */}
      <p className="overview">{overview}</p>
      <div>
        <p className="release-date">{release_date.split("-")[0]}</p>
      </div>
    </StyledMovieCard>
  );
};

export default MovieCard;
