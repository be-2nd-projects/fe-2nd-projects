import React from "react";
import "./ScrollTransition.css"; // 스타일 파일

export default function Home2({
  firstSearchText,
  onSearchTextChange,
  onSearchKeyDown,
}) {
  return (
    <div className="pt-[200px] pb-12 text-7xl font-bold text-white">
      <div>어디로 가실 건가요?</div>
      <div className="w-full ">
        <input
          type="text"
          value={firstSearchText}
          onChange={onSearchTextChange} // Use the prop name here
          onKeyDown={onSearchKeyDown} // And here
          className=" searchBarBackground"
          placeholder="강남구"
        />
      </div>
    </div>
  );
}
