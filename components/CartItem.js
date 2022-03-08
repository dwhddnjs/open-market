import React, { useState } from "react";
import Image from "next/image";
import Counter from "./Counter";
import cartItemStyles from "../styles/ComponentsStyle/CartItem.module.css";

const CartItem = ({ img, price, store, name, id, deleteItem }) => {
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
      <div className={cartItemStyles.delete}>
        <Image
          src="/Delete.png"
          width={22}
          height={22}
          onClick={() => deleteItem(id)}
        />
      </div>
    </div>
  );
};

export default CartItem;
