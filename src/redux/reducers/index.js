import { combineReducers } from "redux";
import {
  featuredItemReducer,
  itemReducer,
  selectedItemReducer,
} from "./itemReducer";

const reducers = combineReducers({
  allItems: itemReducer,
  item: selectedItemReducer,
  featuredItem: featuredItemReducer,
});

export default reducers;
