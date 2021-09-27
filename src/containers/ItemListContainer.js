import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemList } from "../components";
import { setItems } from "../redux/actions/itemAction";
import FeaturedItemContainer from "./FeaturedItemContainer";

const ItemListContainer = ({ itemType }) => {
  const itemLists = useSelector((state) => state.allItems.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const api_key = process.env.REACT_APP_TMDB_API_KEY;
    const weeklyTrendingListReq = axios.get(
      `https://api.themoviedb.org/3/trending/${itemType}/week?api_key=${api_key}`
    );
    const latestListReq = axios.get(
      `https://api.themoviedb.org/3/discover/${itemType}?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    );

    const fetchItems = async () => {
      const [trendingList, latestList] = await axios
        .all([weeklyTrendingListReq, latestListReq])
        .catch((err) => console.log(err));

      const trendingListObj = {
        category: "Trending This Week",
        list: trendingList.data.results,
      };
      const latestListObj = {
        category: "Latest Releases",
        list: latestList.data.results.sort((a, b) => {
          let dateA = new Date(a.release_date || a.first_air_date);
          let dateB = new Date(b.release_date || b.first_air_date);
          return dateB - dateA;
        }),
      };
      dispatch(setItems([trendingListObj, latestListObj]));
    };
    fetchItems();
  }, [dispatch, itemType]);

  return (
    <>
      <FeaturedItemContainer itemType={itemType} />
      {itemLists.map((itemList) => (
        <ItemList
          key={itemList.category.split(" ").join()}
          category={itemList.category}
          items={itemList.list}
        />
      ))}
    </>
  );
};

export default ItemListContainer;
