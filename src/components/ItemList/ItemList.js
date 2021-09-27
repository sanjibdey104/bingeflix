import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import { StyledItemList } from "./ItemList.style";

const ItemList = ({ category, items }) => {
  return (
    <StyledItemList>
      <h2 className="category">{category}</h2>
      <div className="list-wrapper">
        <div className="list">
          {items.map((item) => (
            <ItemCard itemBrief={item} key={item.id} />
          ))}
        </div>
      </div>
    </StyledItemList>
  );
};

export default ItemList;
