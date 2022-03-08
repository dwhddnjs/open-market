import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import Header from "../components/Header";
import cartStyles from "../styles/LayoutStyle/Cart.module.css";
import Image from "next/image";

function cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const getItem = JSON.parse(localStorage.getItem("item"));
    console.log(getItem);
    setCartItems(getItem);
  }, [cartItems]);

  const deleteItem = (id) => {
    let arr = JSON.parse(localStorage.getItem("item"));
    console.log("배열", arr);
    let result = arr.filter((el) => el.product_id !== id);
    console.log("필터", result);
    JSON.stringify(localStorage.setItem("item", JSON.stringify(result)));
    console.log("결과", localStorage.item);
    localStorage.removeItem(`product${id}`);
  };

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
        {!cartItems ? (
          <div className={cartStyles.empty}>
            <strong>장바구니에 담긴 상품이 없습니다.</strong>
            <small>원하는 상품을 장바구니에 담에 보세요!</small>
          </div>
        ) : (
          <>
            <div className={cartStyles.desc}>
              {cartItems &&
                cartItems.map((el) => (
                  <CartItem
                    key={el.product_id}
                    img={el.image}
                    price={el.price}
                    info={el.product_info}
                    seller={el.seller}
                    store={el.seller_store}
                    name={el.product_name}
                    id={el.product_id}
                    deleteItem={deleteItem}
                  />
                ))}
            </div>
            <div className={cartStyles.total}>
              <div className={cartStyles.specific}>
                <ul>
                  <li>총 상품 금액</li>
                  <li>46,500</li>
                </ul>
                <div className={cartStyles.cal}>
                  <Image src="/minus.png" width={34} height={34} />
                </div>
                <ul>
                  <li>상품 할인</li>
                  <li>0</li>
                </ul>
                <div className={cartStyles.cal}>
                  <Image src="/plus.png" width={34} height={34} />
                </div>
                <ul>
                  <li>배송비</li>
                  <li>0</li>
                </ul>
                <div className={cartStyles.price}>
                  <small>결제 예정 금액</small>
                  <strong>46,500</strong>
                </div>
              </div>
            </div>
            <button className={cartStyles.order}>주문하기</button>
          </>
        )}
      </div>
    </>
  );
}

export default cart;
