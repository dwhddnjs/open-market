import React from "react";
import Image from "next/image";
import itemStyles from "../styles/ComponentsStyle/Item.module.css";
import Link from "next/link";
const Item = ({ name, img, price, store, id }) => {
  return (
    <li className={itemStyles.itemContainer}>
      <Link href={`/products/${id}`} id={id} name={name}>
        <a>
          <img src={img} alt="" width={380} height={380} />
          <div className={itemStyles.desc}>
            <small>{store}</small>
            <strong>{name}</strong>
            <span>{price}</span>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default Item;
