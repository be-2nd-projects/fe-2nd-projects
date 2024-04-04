import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    const payload = {
      email: email,
      password: password,
      nickname: "",
      name: username,
      phone: phoneNumber,
      birthdate: birthdate,
    };

    try {
      const response = await fetch("요청지 주소", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.status === 201) {
        console.log("성공! 이메일주소: " + data.email);
        navigate("/login");
      } else if (response.status === 400) {
        alert(`회원가입 실패: ${data.email}`);
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  return (
    <div className="bg-blue-500 h-screen flex justify-center items-center">
      <div className="absolute top-0 left-0 right-0 text-center text-gray-800 font-yg-jalnan text-3xl font-bold mt-10">
        회원 등록하기
      </div>
      <div
        className="bg-white p-8 rounded-lg shadow-md mt-4"
        style={{ width: "400px" }}
      >
        <form>
          <div className="flex flex-col mb-4">
            <label
              className="text-sm font-semibold text-gray-700"
              htmlFor="email"
            >
              로그인 이메일
            </label>
            <input
              className="input-field mt-2 bg-blue-200  rounded-lg"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label
              className="text-sm font-semibold text-gray-700"
              htmlFor="username"
            >
              이름
            </label>
            <input
              className="input-field mt-2 bg-blue-200  rounded-lg"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label
              className="text-sm font-semibold text-gray-700"
              htmlFor="phoneNumber"
            >
              휴대폰 번호
            </label>
            <input
              className="input-field mt-2 bg-blue-200  rounded-lg"
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label
              className="text-sm font-semibold text-gray-700"
              htmlFor="password"
            >
              비밀번호
            </label>
            <input
              className="input-field mt-2 bg-blue-200  rounded-lg"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label
              className="text-sm font-semibold text-gray-700"
              htmlFor="confirmPassword"
            >
              비밀번호 확인
            </label>
            <input
              className="input-field mt-2 bg-blue-200  rounded-lg"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label
              className="text-sm font-semibold text-gray-700"
              htmlFor="birthdate"
            >
              생년월일
            </label>
            <input
              className="input-field mt-2 bg-blue-200  rounded-lg"
              type="date"
              id="birthdate"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </div>

          <button
            className="button bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg"
            onClick={handleSignup}
          >
            확인
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
