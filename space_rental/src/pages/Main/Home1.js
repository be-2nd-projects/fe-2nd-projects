import React from "react";
import "./ScrollTransition.css"; // 스타일 파일
import ArrowSkeleton from "./MainComponents/ArrowSkeleton";

export default function Home1() {
  return (
    <div className="pt-36 pb-12  text-7xl font-bold text-white animate__animated animate__fadeInUp">
      <div className="mb-52">
        <div>원하는 공간을</div>
        <div>원하는 시간만큼</div>
        <div>손쉽게 예약하자</div>
      </div>
      <div className="">
        <ArrowSkeleton />
      </div>
    </div>
  );
}
