import React, { useState } from "react";
import { BiSolidLeftArrow } from "react-icons/bi";
import triangleRight from "../../assets/images/triangleright.png";
import triangleBottom from "../../assets/images/trianglebottom.png";

export default function Home3({
  toggleSearch,
  isExpanded,
  setShowQuestionPage,
  setShowNextPage,
  optionSelect,
}) {
  const goToPrevQuestionPage = () => {
    setShowQuestionPage(1);
    setShowNextPage(true);
  };

  const options = [
    "미팅룸",
    "스터디룸",
    "파티룸",
    "스튜디오",
    "연습실",
    "갤러리",
  ];
  const [selectedOption, setSelectedOption] = useState(null); // 선택된 옵션 상태

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextPage = () => {
    setShowNextPage(true);
  };

  return (
    <div className="pt-28 w-full  h-full text-7xl font-bold text-white">
      <div className="w-full ">
        <div onClick={goToPrevQuestionPage} className="icon-back">
          <BiSolidLeftArrow
            className="w-6 h-6 mb-12"
            style={{ color: "#DFDBDB" }}
          />
        </div>
        <div className="w-full text-6xl mb-2">어떤 용도로 사용하실 건가요?</div>

        <div
          onClick={toggleSearch}
          className="whereshadow h-32 w-[1150px] rounded-[30px] bg-white flex justify-between align-center items-center pt-4"
        >
          <div />
          {selectedOption && (
            <span className="text-black">{selectedOption}</span>
          )}
          {isExpanded ? (
            <button
              className="rounded-lg px-2 text-white pt-1 mb-1 mr-8 bg-blue-400 text-2xl"
              onClick={optionSelect}
            >
              OK
            </button>
          ) : (
            <img
              src={triangleRight}
              className="w-auto h-10 mb-3 mr-8"
              alt="Search Icon"
            />
          )}
        </div>
      </div>
      {isExpanded && (
        <div className="flex justify-center text-5xl text-black  ">
          <div className="w-screen mt-8 shadow-black-500/50 bg-white rounded-xl  mb-60">
            {options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleOptionSelect(option)}
                className={`border-b-2 pt-4 pl-4 pb-1.5 cursor-pointer ${
                  selectedOption === option ? "bg-[#FFFD82]" : ""
                } ${
                  index === 0 ? "rounded-tl-xl rounded-tr-xl" : "" // 좌상단, 우상단 둥근 테두리
                } ${
                  index === options.length - 1
                    ? "rounded-bl-xl rounded-br-xl"
                    : "" // 좌하단, 우하단 둥근 테두리
                }`}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
