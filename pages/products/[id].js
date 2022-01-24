import Link from "next/link";
import Axios from "axios";
import Header from "../../components/Header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Post = ({ items }) => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState(null);

  items.forEach((el) => {
    if (el.product_id.toString() === id) {
      useEffect(() => {
        setItem(el);
      });
    }
  }, []);

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
              <div>{item.product_name}</div>
            </div>
          </div>
        </div>
      )}
      <Link href="/">
        <a> goback</a>
      </Link>
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
