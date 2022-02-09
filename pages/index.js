import Header from "../components/Header";
import Item from "../components/Item";
import homeStyles from "../styles/LayoutStyle/Home.module.css";
import Axios from "axios";

export default function Home({ items }) {
  return (
    <>
      <Header />
      <div className={homeStyles.banner}></div>
      <div className={homeStyles.itemContainer}>
        <ul className={homeStyles.itemList}>
          {items &&
            items.map((item) => (
              <Item
                key={item.product_id}
                id={item.product_id}
                name={item.product_name}
                img={item.image}
                store={item.seller_store}
                price={item.price}
              />
            ))}
        </ul>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const API = process.env.URL;
  const res = await Axios.get(`${API}/products`);
  const items = await res.data.results;
  return {
    props: {
      items,
    },
  };
};
