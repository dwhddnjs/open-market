import React from "react";
import Image from "next/image";
import Counter from "./Counter";
import cartItemStyles from "../styles/ComponentsStyle/CartItem.module.css";

const CartItem = () => {
  return (
    <>
      <div className={cartItemStyles.container}>
        <div className={cartItemStyles.content}>
          <div className={cartItemStyles.desc}>
            <small>백엔드글로벌</small>
            <h4>딥러닝 개발자 무릎 담요</h4>
            <strong>17,500원</strong>
            <ul>
              <li>택배배송</li>
              <li>무료배송</li>
            </ul>
          </div>
          <Counter />
          <div className={cartItemStyles.price}>
            <span>17,500원</span>
            <button>주문하기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
