import React from "react";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  const onClickConfirmButton = () => {
    alert("로그인 되었습니다.");
    navigate("/home");
  };

  const navigateToSignup = () => {
    navigate("/signup");
  };

  const isInputValid = () => {
    return email.trim() !== "" && pw.trim() !== "";
  };

  return (
    <div className="flex justify-center items-center bg-blue-500 p-0">
      <div className="page w-full max-w-2xl px-4 py-10 flex justify-center items-center flex-col">
        <div className="titleWrap font-yg-jalnan text-3xl text-white font-bold text-gray-800 mt-10">
          로그인하기
        </div>
        <div className="flex flex-col justify-center items-center bg-white rounded-lg p-8 mt-6">
          <div className="contentWrap">
            <div className="inputTitle text-sm font-semibold text-gray-800">
              로그인 이메일
            </div>
            <div className="inputWrap mt-2 rounded-lg bg-gray-200">
              <input
                className="input outline-none bg-transparent placeholder-gray-500 px-4 py-2 w-full text-white"
                type="text"
                placeholder="place@place.kr"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="inputTitle mt-6 text-sm font-semibold text-gray-800">
              패스워드
            </div>
            <div className="inputWrap mt-2 rounded-lg bg-gray-200">
              <input
                className="input outline-none bg-transparent placeholder-gray-500 px-4 py-2 w-full"
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={onClickConfirmButton}
            className="bottomButton px-8 py-2 rounded-lg bg-white text-black font-semibold text-sm mt-2"
          >
            LOGIN
          </button>
          <button
            onClick={navigateToSignup}
            className="bottomButton flex-1 px-8 py-2 rounded-lg bg-yellow-100 text-black font-semibold text-sm ml-14 mt-2"
          >
            JOIN
          </button>
        </div>
      </div>
    </div>
  );
}
