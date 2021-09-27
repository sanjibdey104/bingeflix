import React from "react";
import { BiPlay, BiPlus } from "react-icons/bi";
import { StyledFeaturedItem } from "./FeaturedItem.style";

const FeaturedItem = ({ itemDetails }) => {
  const { backdrop_path, overview, homepage } = itemDetails;
  const original_title = itemDetails?.original_title || itemDetails?.name;
  console.log(itemDetails);

  return (
    <StyledFeaturedItem>
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
          </div>
        </div>
      </div>
    </StyledFeaturedItem>
  );
};

export default FeaturedItem;
