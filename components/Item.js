import React from "react";
import Image from "next/image";
import itemStyles from "../styles/ComponentsStyle/Item.module.css";
const ItemList = ({ name, img, price, store }) => {
  return (
    <li className={itemStyles.itemContainer}>
      <img src={img} alt="" width={380} height={380} />
      <div className={itemStyles.desc}>
        <small>{store}</small>
        <strong>{name}</strong>
        <span>{price}</span>
      </div>
    </li>
  );
};

export default ItemList;
