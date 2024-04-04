import React from "react";
import "./ScrollTransition.css"; // 스타일 파일
import searchIcon from "../../assets/images/searchicon.png";

export default function Home2({
  firstSearchText,
  onSearchTextChange,
  onSearchKeyDown,
  handleImageClick,
}) {
  return (
    <div className="pt-36 text-7xl font-bold text-white">
      <div className="w-full pb-4">어디로 가실 건가요?</div>
      <div className="whereshadow h-32 w-full mr-44 rounded-[30px]  bg-white text-black flex  items-center">
        <input
          type="text"
          style={{
            backgroundColor: "transparent",
            outline: "none",
            paddingTop: "16px",
            paddingLeft: "24px",
          }}
          value={firstSearchText}
          onChange={onSearchTextChange}
          onKeyDown={onSearchKeyDown}
          placeholder="강남구"
        />

        <div onClick={handleImageClick}>
          <img src={searchIcon} className="w-12 h-12 mr-12" alt="Search Icon" />
        </div>
      </div>{" "}
    </div>
  );
}
