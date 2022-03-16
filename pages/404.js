import React from "react";
import Image from "next/image";
import errorStyles from "../styles/LayoutStyle/404.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

function Custom404() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <div className={errorStyles.container}>
      <Image src="/404.png" width={276} height={236} />
      <div className={errorStyles.desc}>
        <h2>페이지를 찾을 수 없습니다.</h2>
        <p>
          페이지가 존재하지 않고나 사용할 수 없는 페이지 입니다.
          <br /> 웹 주소가 올바른지 확인해 주세요.
        </p>
        <div className={errorStyles.btnContainer}>
          <Link href="/">
            <button>
              <a>메인으로</a>
            </button>
          </Link>
          <button onClick={goBack}>이전 페이지</button>
        </div>
      </div>
    </div>
  );
}

export default Custom404;
