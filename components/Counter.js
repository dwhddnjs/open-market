import CounterStyles from "../styles/ComponentsStyle/Counter.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";

const Counter = ({ id }) => {
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem(`product${id}`)) || 0
  );
  const addController = () => {
    setCount((count = count + 1));
  };

  const minController = () => {
    count > 0 && setCount((count = count - 1));
  };

  useEffect(() => {
    JSON.stringify(localStorage.setItem(`product${id}`, count));
  }, [count]);

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
