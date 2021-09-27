import { ActionTypes } from "../constants/action-types";

export const setItems = (items) => {
  return {
    type: ActionTypes.SET_ITEMS,
    payload: items,
  };
};

export const selectedItem = (item) => {
  return {
    type: ActionTypes.SELECTED_ITEM,
    payload: item,
  };
};

export const removeSelectedItem = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_ITEM,
  };
};

export const setFeaturedItem = (item) => {
  return {
    type: ActionTypes.SET_FEATURED_ITEM,
    payload: item,
  };
};

export const removeFeaturedItem = () => {
  return {
    type: ActionTypes.REMOVE_FEATURED_ITEM,
  };
};
