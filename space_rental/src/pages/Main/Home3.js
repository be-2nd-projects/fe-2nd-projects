import React from "react";
import "./ScrollTransition.css"; // 스타일 파일
import { BiSolidLeftArrow } from "react-icons/bi";

export default function Home3({
  toggleSearch,
  isExpanded,
  searchBarFold,
  searchBarUnfold,
  optionSelect,
  setShowQuestionPage, // 함수를 props로 받음
  setShowNextPage, // 함수를 props로 받음
}) {
  // 함수 내에서 사용할 goToFirstQuestionPage 정의
  const goToPrevQuestionPage = () => {
    setShowQuestionPage(1); // 첫번째 질문으로 이동
    setShowNextPage(true); // 다음 페이지 보이도록 설정
  };
  return (
    <>
      <div className="pt-[150px] text-7xl font-bold text-white">
        <div onClick={goToPrevQuestionPage} className="icon-back">
          <BiSolidLeftArrow
            className="w-8 h-8 mb-12 "
            style={{ color: "#DFDBDB" }}
          />
        </div>
        <div className="text-6xl mb-2">어떤 용도로 사용하실 건가요?</div>

        <button onClick={toggleSearch}>
          <img
            className="w-screen"
            src={isExpanded ? searchBarUnfold : searchBarFold}
            alt="Search"
          />
        </button>
      </div>
      {isExpanded && (
        <div className="px-44 flex justify-center text-5xl text-black ">
          <div className="w-screen mx-4 bg-white rounded-xl shadow-xl">
            <div onClick={optionSelect} className="border-b-2 pt-4 pl-4 pb-1.5">
              미팅룸
            </div>
            <div onClick={optionSelect} className="border-b-2 pt-4 pl-4 pb-1.5">
              스터디룸
            </div>
            <div onClick={optionSelect} className="border-b-2 pt-4 pl-4 pb-1.5">
              파티룸
            </div>
            <div onClick={optionSelect} className="border-b-2 pt-4 pl-4 pb-1.5">
              스튜디오
            </div>
            <div onClick={optionSelect} className="border-b-2 pt-4 pl-4 pb-1.5">
              연습실
            </div>
            <div onClick={optionSelect} className="pt-4 pl-4 pb-1.5">
              갤러리
            </div>
          </div>
        </div>
      )}{" "}
    </>
  );
}
