import React from "react";
import { StyledGenreOptions } from "./GenreOptions.style";

const GenreOptions = ({ title, genres }) => {
  return (
    <StyledGenreOptions>
      <h3>{title}</h3>
      <select name="genres" id="genres">
        {genres.map((genre) => (
          <option value={genre.name}>{genre.name}</option>
        ))}
      </select>
    </StyledGenreOptions>
  );
};

export default GenreOptions;
