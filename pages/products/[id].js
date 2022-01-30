import Axios from "axios";
import Header from "../../components/Header";
import Counter from "../../components/Counter";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";

const Post = ({ items }) => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState(null);
  const [count, setCount] = useState(0);
  const pickTab = useRef();
  const [currentTab, setCurrentTab] = useState(null);
  const [prevTab, setPrevTab] = useState(null);

  items.forEach((el) => {
    if (el.product_id.toString() === id) {
      useEffect(() => {
        setItem(el);
      }, []);
    }
  });

  const clickTab = (e) => {
    setCurrentTab(e.target.id);
    console.log(e.target.id);
  };

  useEffect(() => {
    if ((currentTab === null) & (prevTab === null)) {
      let btn = document.getElementById("btn");
      btn.style.borderBottom = "6px solid #21bf48";
      btn.style.fontWeight = "700";
      btn.style.color = "#21bf48";
    } else {
      let btn = document.getElementById("btn");
      btn.style.borderBottom = "6px solid #e0e0e0";
      btn.style.fontWeight = "500";
      btn.style.color = "#767676";
    }

    if (currentTab !== null) {
      let current = document.getElementById(currentTab);
      current.style.borderBottom = "6px solid #21bf48";
      current.style.fontWeight = "700";
      current.style.color = "#21bf48";
    }

    if (prevTab !== null) {
      let prev = document.getElementById(prevTab);
      prev.style.borderBottom = "6px solid #e0e0e0";
      prev.style.fontWeight = "500";
      prev.style.color = "#767676";
    }
    setPrevTab(currentTab);
  }, [currentTab]);

  return (
    <>
      <Header />
      {item && (
        <div className="productBody">
          <img src={item.image} alt="" width={600} height={600} />
          <div className="productDesc">
            <div className="productInfo">
              <small>{item.seller_store}</small>
              <strong>{item.product_name}</strong>
              <span>{item.price}</span>
            </div>
            <ul className="productDelivery">
              <li>택배배송</li>
              <li>무료배송</li>
            </ul>
            <div className="countContainer">
              <Counter count={count} setCount={setCount} />
            </div>
            <div className="productPrice">
              <span>총 상품 금액</span>
              <div className="productPay">
                <small>
                  총 수량 <b>{count}</b>개
                </small>
                <strong>{item.price}</strong>
              </div>
            </div>
            <div className="productBtn">
              <button className="btnBuy">바로 구매</button>
              <button className="btnCart">장바구니</button>
            </div>
          </div>
        </div>
      )}
      <ul ref={pickTab} className="productTab">
        <li onClick={clickTab} className="tabLi" id="btn">
          버튼
        </li>
        <li onClick={clickTab} className="tabLi" id="review">
          리뷰
        </li>
        <li onClick={clickTab} className="tabLi" id="QnA">
          Q&A
        </li>
        <li onClick={clickTab} className="tabLi" id="change">
          반품/교체
        </li>
      </ul>
    </>
  );
};

export const getServerSideProps = async () => {
  const res = await Axios.get(`http://3.38.108.122:8000/products/`);
  const items = await res.data.results;
  console.log(items);

  return {
    props: {
      items,
    },
  };
};

export default Post;
