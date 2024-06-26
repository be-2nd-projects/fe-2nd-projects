import React from "react";
import "./ScrollTransition.css"; // 스타일 파일
import dayjs from "dayjs"; // dayjs 임포트

import { BiSolidLeftArrow } from "react-icons/bi";

export default function Home4({
  SearchBar,
  handleDateOption,
  CustomCalendar,
  selectedDate,
  setSelectedDate,
  setShowQuestionPage, // 함수를 props로 받음
  setShowNextPage, // 함수를 props로 받음
  handleDateSelection,
}) {
  const goToPrevQuestionPage = () => {
    setShowQuestionPage(2); // 두번째 질문으로 이동
    setShowNextPage(true); // 다음 페이지 보이도록 설정
  };

  return (
    <>
      <div className="w-full pt-28 text-7xl font-bold text-white">
        <div onClick={goToPrevQuestionPage} className="icon-back">
          <BiSolidLeftArrow
            className="w-6 h-6 mb-12 "
            style={{ color: "#DFDBDB" }}
          />
        </div>
        <div className="text-6xl mb-2">언제 가실 건가요?</div>
      </div>
      <div className="relative flex justify-center items-center mt-4 ">
        <img src={SearchBar} alt="Calendar" className="w-screen" />
        <div className="flex absolute pb-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-5xl font-bold pb-3 ">
          <div className="pt-2">
            {dayjs(selectedDate).format("YYYY년 MM월 DD일")}
          </div>
        </div>
        <div className="absolute right-0 mr-4 pr-14 mb-5  flex items-center">
          <button
            onClick={handleDateOption}
            className="rounded-lg px-2 text-white  pt-1 bg-blue-400 text-2xl"
          >
            OK
          </button>
        </div>
      </div>
      <div className="flex justify-center mb-60 ">
        <CustomCalendar onDateChange={setSelectedDate} />
      </div>
    </>
  );
}
