import Image from "next/image";
import Link from "next/link";
import headerStyles from "../styles/ComponentsStyle/Header.module.css";

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.container}>
        <Link href="/">
          <Image src="/Logo.png" width={124} height={38} />
        </Link>
        <div className={headerStyles.input}>
          <input type="text" placeholder="상품을 검색해보세요!" />
          <Image src="/search.png" width={28} height={28} />
        </div>
      </div>
      <ul className={headerStyles.ul}>
        <Link href="/cart">
          <li>
            <Image src="/cart.png" width={32} height={32} />
            <span>장바구니</span>
          </li>
        </Link>
        <Link href="/myPage">
          <li>
            <Image src="/user.png" width={32} height={32} />
            <span>마이페이지</span>
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
