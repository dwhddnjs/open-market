import Link from "next/link";
import Axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState(null);

  const fetchData = async () => {
    const res = await Axios.get(`http://3.38.108.122:8000/products/`);
    const items = await res.data.results;
    items.forEach((el) => {
      if (el.product_id.toString() === id) {
        setItem(el);
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(item);

  return (
    <div>
      {item && (
        <div>
          <img src={item.image} alt="" />
          <div>
            <small>{item.seller_store}</small>
            <strong>{item.product_name}</strong>
            <span>{item.price}</span>
            <div>{item.product_name}</div>
          </div>
        </div>
      )}
      <Link href="/">
        <a> goback</a>
      </Link>
    </div>
  );
};

// const Post = ({ id, name }) => {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h1>{id}</h1>

//       <Link href="/">
//         <a> goback</a>
//       </Link>
//     </div>
//   );
// };

// export const getStaticPaths = async () => {
//   const res = await Axios.get("http://3.38.108.122:8000/products");
//   const item = res.data.results;

//   const ids = item.map((item) => item.product_id);
//   const paths = ids.map((id) => {
//     return {
//       params: { id: id.toString() },
//     };
//   });
//   return {
//     paths: paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//   const id = context.params.id;
//   console.log(context);
//   const res = await Axios.get(`http://3.38.108.122:8000/products/`);
//   const item = res.data.results;
//   return {
//     props: {
//       item,
//     },
//   };
// };

export default Post;
