import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import Header from "../components/Header";
import cartStyles from "../styles/LayoutStyle/Cart.module.css";

function cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getItem = JSON.parse(localStorage.getItem("item"));
    console.log(getItem);
    setCartItems(getItem);
  }, []);

  return (
    <>
      <Header />
      <div className={cartStyles.container}>
        <h2>장바구니</h2>
        <ul className={cartStyles.detail}>
          <li>
            <input type="checkbox" name="" id="" />
          </li>
          <li>상품정보</li>
          <li>수량</li>
          <li>상품금액</li>
        </ul>
        <div className={cartStyles.desc}>
          {cartItems ? (
            cartItems.map((el) => (
              <CartItem
                key={el.product_id}
                img={el.image}
                price={el.price}
                info={el.product_info}
                seller={el.seller}
                store={el.seller_store}
                name={el.product_name}
              />
            ))
          ) : (
            <>
              <strong>장바구니에 담긴 상품이 없습니다.</strong>
              <small>원하는 상품을 장바구니에 담에 보세요!</small>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default cart;
