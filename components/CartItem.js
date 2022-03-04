import React, { useState } from "react";
import Image from "next/image";
import Counter from "./Counter";
import cartItemStyles from "../styles/ComponentsStyle/CartItem.module.css";

const CartItem = ({ img, price, store, name, id }) => {
  const deleteItem = (id) => {
    let arr = JSON.parse(localStorage.getItem("item"));
    let result = arr.filter((el) => el.product_id === id);
    JSON.stringify(localStorage.setItem("item", result));
    localStorage.removeItem(`product${id}`);
  };

  return (
    <div className={cartItemStyles.container}>
      <input type="checkbox" />
      <img src={img} alt="" width={160} height={160} />
      <div className={cartItemStyles.content}>
        <div className={cartItemStyles.desc}>
          <div className={cartItemStyles.detail}>
            <small>{store}</small>
            <h4>{name}</h4>
            <strong>{price}원</strong>
          </div>
          <ul>
            <li>택배배송</li>
            <li>무료배송</li>
          </ul>
        </div>
        <div className={cartItemStyles.counter}>
          <Counter id={id} />
        </div>
        <div className={cartItemStyles.price}>
          <span>{price}원</span>
          <button>주문하기</button>
        </div>
      </div>
      <div className={cartItemStyles.delete} onClick={deleteItem(id)}>
        <Image src="/Delete.png" width={22} height={22} />
      </div>
    </div>
  );
};

export default CartItem;
