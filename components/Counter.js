import CounterStyles from "../styles/ComponentsStyle/Counter.module.css";
import Image from "next/image";
import React, { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  const addController = () => {
    setCount((count = count + 1));
  };

  const minController = () => {
    count > 0 && setCount((count = count - 1));
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
