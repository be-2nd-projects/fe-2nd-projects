import React from "react";
import "./ScrollTransition.css"; // 스타일 파일

export default function Home5({
  SearchBar,
  minusNumberOfPeople,
  plusNumberOfPeople,
  currentNumberOfPeople,
}) {
  return (
    <>
      <div className="pt-[200px] text-7xl font-bold text-white">
        <div className="text-6xl mb-2">몇명이서 이용하나요?</div>
      </div>
      <div className="relative flex justify-center items-center mt-4">
        <img src={SearchBar} alt="Calendar" className="w-screen" />
        <div className="absolute top-0 pb-3 flex items-center justify-center w-full h-full">
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
      </div>
    </>
  );
}
