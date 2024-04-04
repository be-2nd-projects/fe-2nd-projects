import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();

  const onClickConfirmButton = async () => {
    if (!isInputValid()) {
      alert("이메일과 비밀번호를 입력하세요.");
      return;
    }

    try {
      const response = await fetch("백엔드 API 주소", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: pw }),
      });

      if (response.status === 200) {
        alert("로그인 되었습니다.");
        navigate("/home");
      } else {
        alert("로그인에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("오류 발생:", error);
      alert("서버와의 통신 중 오류가 발생했습니다.");
    }
  };

  const navigateToSignup = () => {
    navigate("/signup");
  };

  const isInputValid = () => {
    return email.trim() !== "" && pw.trim() !== "";
  };

  return (
    <div className="bg-indigo-600 h-screen flex justify-center items-center">
      <div className="page w-full p-0 flex justify-center items-center flex-col">
        <div className="titleWrap font-yg-jalnan text-4xl text-white font-bold text-gray-800 mt-10">
          로그인하기
        </div>
        <div className="flex flex-col justify-center items-center bg-white rounded-lg p-8 mt-6">
          <div className="contentWrap">
            <div className="inputTitle text-sm font-semibold text-gray-800">
              로그인 이메일
            </div>
            <div className="inputWrap mt-2 rounded-lg bg-gray-200 ">
              <input
                className="input outline-none bg-transparent placeholder-gray-500 px-4 py-2 w-full text-black rounded-lg"
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
                className="input outline-none bg-transparent placeholder-gray-500 px-4 py-2 w-full rounded-lg"
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
            className="bottomButton px-10 py-2 rounded-lg bg-yellow-100 text-black font-semibold text-sm ml-14 mt-2"
          >
            JOIN
          </button>
        </div>

        <div className="flex">
          <button className="naverButton px-10 py-2 rounded-lg bg-green-500 text-white font-semibold text-sm mr-2 mt-2">
            네이버 로그인
          </button>
          <button className="googleButton px-10 py-2 rounded-lg bg-blue-500 text-white font-semibold text-sm ml-2 mt-2">
            구글 로그인
          </button>
        </div>
      </div>
    </div>
  );
}
