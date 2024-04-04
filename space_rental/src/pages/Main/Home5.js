import React from "react";
import "./ScrollTransition.css"; // 스타일 파일
import { BiSolidLeftArrow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Home5({
  SearchBar,
  minusNumberOfPeople,
  plusNumberOfPeople,
  currentNumberOfPeople,
  setShowQuestionPage, // 함수를 props로 받음
  setShowNextPage, // 함수를 props로 받음
}) {
  const navigate = useNavigate();

  const goToListPage = () => navigate("/list");

  const goToPrevQuestionPage = () => {
    setShowQuestionPage(3); // 두번째 질문으로 이동
    setShowNextPage(true); // 다음 페이지 보이도록 설정
  };
  return (
    <>
      <div className="pt-28 text-7xl font-bold text-white">
        <div onClick={goToPrevQuestionPage} className="icon-back">
          <BiSolidLeftArrow
            className="w-6 h-6 mb-12 "
            style={{ color: "#DFDBDB" }}
          />
        </div>
        <div className="text-6xl mb-2">몇명이서 이용하나요?</div>
      </div>
      <div className="relative flex justify-center items-center mt-4">
        <img src={SearchBar} alt="Calendar" className="w-screen" />
        <div className="absolute top-0 pb-3 px-14 flex items-center justify-between w-full h-full">
          <div className="w-16"></div>
          <div className="flex justify-center items-center">
            <div
              className="text-white text-4xl mb-2 mr-4 bg-blue-400 w-10 h-10 pt-1.5 flex justify-center items-center rounded-full cursor-pointer"
              onClick={minusNumberOfPeople}
            >
              -
            </div>
            <div className="mx-4 w-36 text-center text-5xl text-black">
              {currentNumberOfPeople}명
            </div>
            <div
              className="text-white text-4xl mb-2 ml-4 bg-blue-400 w-10 h-10 pt-1.5 flex justify-center items-center rounded-full cursor-pointer"
              onClick={plusNumberOfPeople}
            >
              +
            </div>
          </div>
          <button
            onClick={goToListPage}
            className="rounded-xl bg-[#23EAAE] text-lg shadow-xl  px-4 pt-2 pb-1"
          >
            검색하기
          </button>
        </div>
      </div>
    </>
  );
}
