import Link from "next/link";
import Axios from "axios";
import { useRouter } from "next/router";

const Post = ({ id, name }) => {
  // console.log(item);
  return (
    <div>
      <h1>{name}</h1>
      <h1>{id}</h1>

      <Link href="/">
        <a> goback</a>
      </Link>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await Axios.get("http://3.38.108.122:8000/products/");
  const item = res.data.results;
  return {
    props: {
      item,
    },
  };
};
// export const getStaticProps = async () => {
//   // const { id } = context.params;
//   const res = await Axios.get("http://3.38.108.122:8000/products/");
//   const item = res.data.results;
//   return {
//     props: {
//       item,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await Axios.get("http://3.38.108.122:8000/products");
//   const item = res.data.results;
//   console.log(item);

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

export default Post;
