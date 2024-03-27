import React from "react";
import "./ScrollTransition.css"; // 스타일 파일
import dayjs from "dayjs"; // dayjs 임포트

export default function Home4({
  SearchBar,
  handleDateOption,
  CustomCalendar,
  selectedDate,
  setSelectedDate,
}) {
  return (
    <>
      <div className="pt-[200px] text-7xl font-bold text-white">
        <div className="text-6xl mb-2">언제 가실 건가요?</div>
      </div>
      <div className="relative flex justify-center items-center mt-4">
        <img src={SearchBar} alt="Calendar" className="w-screen" />
        <div className="flex absolute pb-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-5xl font-bold pb-3">
          <div className="pt-3">
            {dayjs(selectedDate).format("YYYY년 MM월 DD일")}
          </div>
        </div>
        <div className="absolute right-0 mr-44 pr-14 mb-4 pt-1 flex items-center">
          <div
            onClick={handleDateOption}
            className="rounded-lg px-2 text-white my-4 pt-1 bg-blue-400 text-2xl"
          >
            OK
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <CustomCalendar onDateChange={setSelectedDate} />
      </div>
    </>
  );
}
