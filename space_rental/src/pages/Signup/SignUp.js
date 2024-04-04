import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);
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
      const response = await fetch("백엔드 API 주소", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.status === 201) {
        console.log("성공! 이메일주소: " + data.email);
        setSignupSuccess(true); // 회원가입 성공 상태로 변경
        setTimeout(() => navigate("/home"), 2000); // 2초 후 홈 화면으로 이동
      } else if (response.status === 400) {
        alert(`회원가입 실패: ${data.email}`);
      }
    } catch (error) {
      console.error("오류 발생:", error);
    }
  };

  return (
    <div className="bg-indigo-600 h-screen flex justify-center items-center flex-col">
      <div className="text-center text-white font-yg-jalnan text-3xl font-bold mt-10">
        회원 등록하기
      </div>

      <div
        className="bg-white p-8 rounded-lg shadow-md mt-4"
        style={{ width: "400px" }}
      >
        <form>
          <div className="flex flex-row items-center mb-4">
            <label
              className="text-sm font-semibold text-gray-700 mr-2"
              htmlFor="email"
            >
              로그인 이메일
            </label>
            <input
              className="input-field bg-blue-200 rounded-lg h-8 w-50 ml-auto" //
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-row items-center mb-4">
            <label
              className="text-sm font-semibold text-gray-700 mr-10"
              htmlFor="username"
            >
              이름
            </label>
            <input
              className="input-field bg-blue-200 rounded-lg h-8 w-50 ml-auto"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex flex-row items-center mb-4">
            <label
              className="text-sm font-semibold text-gray-700 mr-10"
              htmlFor="phoneNumber"
            >
              휴대폰 번호
            </label>
            <input
              className="input-field bg-blue-200 rounded-lg h-8 w-50 ml-auto"
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div className="flex flex-row items-center mb-4">
            <label
              className="text-sm font-semibold text-gray-700 mr-10"
              htmlFor="password"
            >
              비밀번호
            </label>
            <input
              className="input-field bg-blue-200 rounded-lg h-8 w-50 ml-auto"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-row items-center mb-4">
            <label
              className="text-sm font-semibold text-gray-700 mr-10"
              htmlFor="confirmPassword"
            >
              비밀번호 확인
            </label>
            <input
              className="input-field bg-blue-200 rounded-lg h-8 w-50 ml-auto"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <div className="flex flex-row items-center mb-4">
            <label
              className="text-sm font-semibold text-gray-700 mr-10"
              htmlFor="birthdate"
            >
              생년월일
            </label>
            <input
              className="input-field bg-blue-200 rounded-lg h-8 w-50 ml-auto"
              type="date"
              id="birthdate"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="button bg-indigo-600 text-white font-semibold py-2 px-20 rounded-lg"
              onClick={handleSignup}
            >
              확인
            </button>
          </div>

          {signupSuccess && (
            <div className="text-center mt-4 text-green-600">
              회원가입이 성공적으로 완료되었습니다.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
