import React from "react";
import { Link } from "react-router-dom";
import { StyledMovieCard } from "./MovieCard.style";

const MovieCard = ({ movieBrief }) => {
  const { id, backdrop_path, title, overview, release_date } = movieBrief;
  return (
    <Link to={`/movies/${id}`}>
      <StyledMovieCard>
        <img
          src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          alt={title}
        />
        <p className="overview">{overview}</p>
        <div>
          <p className="release-date">{release_date.split("-")[0]}</p>
        </div>
      </StyledMovieCard>
    </Link>
  );
};

export default MovieCard;
