import React, { useState, useEffect } from "react";
import SearchBar from "../assets/searchbar.png";
import searchBarFold from "../assets/searchbar2.png";
import searchBarUnfold from "../assets/searchbar3.png";
import "./ScrollTransition.css"; // 스타일 파일
import CustomCalendar from "../components/CustomCalendar";
import dayjs from "dayjs"; // dayjs 임포트

const Home = () => {
  const [showNextPage, setShowNextPage] = useState(false);
  const [showQuestionPage, setShowQuestionPage] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [firstSearchText, setFirstSearchText] = useState("");
  const [secondSearchText, setSecondSearchText] = useState("");
  const [isExpanded, setIsExpanded] = useState(false); // 검색창이 펼쳐진 상태인지 여부를 저장하는 상태
  const [dateSelected, setDateSelected] = useState(false);
  const [currentPerson, setCurrentPerson] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 100; // 스크롤을 내린 정도를 나타내는 임계값입니다.

      if (scrollY > lastScrollY && scrollY > scrollThreshold) {
        if (showQuestionPage === 0) {
          setShowQuestionPage(1);
          setShowNextPage(true);
        }
      }
      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    setSelectedDate(new Date()); //
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (dateSelected) {
      setShowQuestionPage(4);
    }
  }, [dateSelected]);

  const plusPeopleNumber = () => {
    setCurrentPerson((prev) => prev + 1);
  };

  const minusPeopleNumber = () => {
    setCurrentPerson((prev) => prev - 1);
  };
  const handleFirstSearchInputChange = (event) => {
    console.log("Input changed:", event.target.value);
    setFirstSearchText(event.target.value);
  };

  const handleFirstSearchInputKeyDown = (event) => {
    if (event.key === "Enter" && firstSearchText.trim() !== "") {
      setShowQuestionPage(2);
      setShowNextPage(true); // 첫 번째 질문에서 엔터를 누르면 다음 페이지로 이동하도록 설정
    }
  };

  const handleSecondSearchInputChange = (event) => {
    setSecondSearchText(event.target.value);
  };

  const toggleSearch = () => {
    setIsExpanded(!isExpanded); // 검색창 상태를 토글합니다.
  };

  const optionSelect = () => {
    setShowQuestionPage(3);
  };

  const handleDateOption = () => {
    setDateSelected(true);
  };

  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div className={`page ${showNextPage ? "show-next-page" : ""}`}>
      {/* 현재 페이지 컨텐츠 */}
      <div
        className={`current-page h-screen ${
          showQuestionPage !== 0 ? "hidden" : ""
        }`}
      >
        <div className="bg-white h-20" />
        <div className="pt-20 pb-12 pl-44 text-7xl font-bold text-white animate__animated animate__fadeInUp">
          <div>원하는 공간을</div>
          <div>원하는 시간만큼</div>
          <div>손쉽게 예약하자</div>
        </div>
      </div>

      <div
        className={`next-page h-screen ${
          showQuestionPage === 1
            ? "animate__animated animate__fadeInRight visible-on-scroll"
            : "hidden-initially"
        }`}
      >
        <div className="pt-20 pb-12 px-44 text-7xl font-bold text-white">
          <div>어디로 가실 건가요?</div>
          <div className="flex items-center">
            <input
              type="text"
              value={firstSearchText}
              onChange={handleFirstSearchInputChange}
              onKeyDown={handleFirstSearchInputKeyDown}
              className="searchBarBackground"
              placeholder="강남구"
            />
          </div>
        </div>{" "}
      </div>

      {showQuestionPage === 2 && (
        <div
          className={`next-page h-screen ${
            showNextPage ? "animate__animated animate__fadeInRight" : ""
          }`}
        >
          <div className="pt-20 px-44 text-7xl font-bold text-white">
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
                <div
                  onClick={optionSelect}
                  className="border-b-2 pt-4 pl-4 pb-1.5"
                >
                  미팅룸
                </div>
                <div
                  onClick={optionSelect}
                  className="border-b-2 pt-4 pl-4 pb-1.5"
                >
                  스터디룸
                </div>
                <div
                  onClick={optionSelect}
                  className="border-b-2 pt-4 pl-4 pb-1.5"
                >
                  파티룸
                </div>
                <div
                  onClick={optionSelect}
                  className="border-b-2 pt-4 pl-4 pb-1.5"
                >
                  스튜디오
                </div>
                <div
                  onClick={optionSelect}
                  className="border-b-2 pt-4 pl-4 pb-1.5"
                >
                  연습실
                </div>
                <div onClick={optionSelect} className="pt-4 pl-4 pb-1.5">
                  갤러리
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {showQuestionPage === 3 && (
        <div
          className={`next-page h-screen ${
            showQuestionPage ? "animate__animated animate__fadeInRight" : ""
          }`}
        >
          <div className="pt-20 px-44 text-7xl font-bold text-white">
            <div className="text-6xl mb-2">언제 가실 건가요?</div>
          </div>
          <div className="relative flex justify-center items-center mt-4">
            <img src={SearchBar} alt="Calendar" className="w-screen px-44" />
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
        </div>
      )}

      {showQuestionPage === 4 && (
        <div
          className={`next-page h-screen ${
            showQuestionPage ? "animate__animated animate__fadeInRight" : ""
          }`}
        >
          <div className="pt-20 px-44 text-7xl font-bold text-white">
            <div className="text-6xl mb-2">몇명이서 이용하나요?</div>
          </div>
          <div className="relative flex justify-center items-center mt-4">
            <img src={SearchBar} alt="Calendar" className="w-screen px-44" />
            <div className="absolute top-0 pb-3 flex items-center justify-center w-full h-full">
              <div
                className="text-white text-4xl mb-2 mr-4 bg-blue-400 w-10 h-10 pt-1.5 flex justify-center items-center rounded-full cursor-pointer"
                onClick={minusPeopleNumber}
              >
                -
              </div>
              <div className="mx-4 w-36 text-center text-5xl text-black">
                {currentPerson}명
              </div>
              <div
                className="text-white text-4xl mb-2 ml-4 bg-blue-400 w-10 h-10 pt-1.5 flex justify-center items-center rounded-full cursor-pointer"
                onClick={plusPeopleNumber}
              >
                +
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
