import CounterStyles from "../styles/ComponentsStyle/Counter.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const Counter = ({ id, setItemPrice }) => {
  const addPrice = () => {
    const total = JSON.parse(localStorage.getItem("item"));
    console.log(total);
    let result = 0;
    total.forEach((el) => {
      let count = JSON.parse(localStorage.getItem(`product${el.product_id}`));
      console.log(count);
      result = result + el.price * count;
    });
    setItemPrice(result);
  };

  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem(`product${id}`)) || 1
  );
  const addController = () => {
    setCount((count = count + 1));
    JSON.stringify(localStorage.setItem(`product${id}`, count));
    addPrice();
  };

  const minController = () => {
    count > 0 && setCount((count = count - 1));
    JSON.stringify(localStorage.setItem(`product${id}`, count));
    addPrice();
  };

  return (
    <ul className={CounterStyles.counter}>
      <li className={CounterStyles.min} onClick={minController}>
        <Image src="/min.png" width={20} height={20} id="add" />
      </li>
      <li className={CounterStyles.Num}>{count}</li>
      <li className={CounterStyles.add} onClick={addController}>
        <Image src="/add.png" width={20} height={20} />
      </li>
    </ul>
  );
};

export default Counter;
