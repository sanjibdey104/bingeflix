import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FeaturedItem from "../components/FeaturedItem/FeaturedItem";
import {
  removeFeaturedItem,
  setFeaturedItem,
} from "../redux/actions/itemAction";

const FeaturedItemContainer = ({ itemType }) => {
  const dispatch = useDispatch();
  const featuredItemDetails = useSelector((state) => state.featuredItem);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const api_key = process.env.REACT_APP_TMDB_API_KEY;
    let randomId = Math.floor(Math.random() * 19);

    const fetchItemDetails = async () => {
      const featuredItemReq = await axios
        .get(
          `https://api.themoviedb.org/3/trending/${itemType}/week?api_key=${api_key}`
        )
        .then((res) => {
          let itemId = res.data.results[randomId].id;
          return axios.get(
            `https://api.themoviedb.org/3/${itemType}/${itemId}?api_key=${api_key}&language=en-US`
          );
        })
        .catch((err) => console.log(err));

      dispatch(setFeaturedItem(featuredItemReq.data));
    };

    fetchItemDetails();
    setIsLoading(false);
    return () => dispatch(removeFeaturedItem());
  }, [dispatch, itemType]);

  return (
    <>
      {isLoading ? (
        <p
          style={{
            height: "100vh",
            width: "100%",
            display: "grid",
            placeContent: "center",
          }}
        >
          loading...
        </p>
      ) : (
        <FeaturedItem itemDetails={featuredItemDetails} />
      )}
    </>
  );
};

export default FeaturedItemContainer;
