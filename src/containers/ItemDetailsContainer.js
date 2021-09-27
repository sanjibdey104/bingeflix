import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { removeSelectedItem, selectedItem } from "../redux/actions/itemAction";
import { useDispatch, useSelector } from "react-redux";
import { ItemDetails } from "../components";

const ItemDetailsContainer = ({ itemType }) => {
  const { itemId } = useParams();
  const dispatch = useDispatch();
  const completeItemDetails = useSelector((state) => state.item);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const api_key = process.env.REACT_APP_TMDB_API_KEY;
    const itemDetailsReq = axios.get(
      `https://api.themoviedb.org/3/${itemType}/${itemId}?api_key=${api_key}&language=en-US`
    );

    const creditDetailsReq = axios.get(
      `https://api.themoviedb.org/3/${itemType}/${itemId}/credits?api_key=${api_key}&language=en-US`
    );
    const fetchItemDetails = async () => {
      const [itemDetails, creditDetails] = await axios
        .all([itemDetailsReq, creditDetailsReq])
        .catch((err) => console.log(err));
      const fullDetails = {
        itemDetails: itemDetails.data,
        castDetails: creditDetails.data.cast,
      };
      dispatch(selectedItem(fullDetails));
      setIsLoading(false);
    };
    fetchItemDetails();
    return () => dispatch(removeSelectedItem());
  }, [itemId, dispatch, itemType]);

  return (
    <>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <ItemDetails
          itemType={itemType}
          completeItemDetails={completeItemDetails}
        />
      )}
    </>
  );
};

export default ItemDetailsContainer;
