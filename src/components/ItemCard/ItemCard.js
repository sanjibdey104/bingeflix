import React from "react";
import { Link } from "react-router-dom";
import { StyledItemCard } from "./ItemCard.style";

const ItemCard = ({ itemBrief }) => {
  const { id, backdrop_path, poster_path, overview } = itemBrief;
  const original_title = itemBrief?.title || itemBrief?.name;
  const release_date = itemBrief?.release_date || itemBrief?.first_air_date;

  let itemType;
  itemBrief?.title ? (itemType = "movies") : (itemType = "tvshows");

  return (
    <Link to={`/${itemType}/${id}`}>
      <StyledItemCard>
        <img
          src={`https://image.tmdb.org/t/p/w500${backdrop_path || poster_path}`}
          alt={original_title}
        />
        <p className="overview">{overview}</p>
        <div>
          <p className="release-date">{release_date.split("-")[0]}</p>
        </div>
      </StyledItemCard>
    </Link>
  );
};

export default ItemCard;
