import React from "react";
import Image from "next/image";

function login() {
  return (
    <div>
      <Image src="/Logo.png" />
      <div>
        <ul>
          <li>구매회원 로그인</li>
          <li>판매회원 로그인</li>
        </ul>
        <form>
          <input type="text" />
          <input type="password" />
          <button>로그인</button>
        </form>
      </div>
      <div>
        <span>회원가입</span>
        <span>비밀번호 찾기</span>
      </div>
    </div>
  );
}

export default login;
