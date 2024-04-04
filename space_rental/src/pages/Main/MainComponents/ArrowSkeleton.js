import React from "react";
import "./ArrowSkeleton.css"; // 스타일 파일 불러오기

const ArrowSkeleton = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="arrow-skeleton pb-2">
        <div className="arrow-icon"></div>
      </div>
      <div className="arrow-skeleton">
        <div className="arrow-icon"></div>
      </div>
    </div>
  );
};

export default ArrowSkeleton;
