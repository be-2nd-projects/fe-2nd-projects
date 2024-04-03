import React, { useState, useEffect } from "react";
import SearchBar from "../../assets/images/searchbar.png";
import searchBarFold from "../../assets/images/searchbar2.png";
import searchBarUnfold from "../../assets/images/searchbar3.png";
import "./ScrollTransition.css"; // 스타일 파일
import CustomCalendar from "./MainComponents/CustomCalendar";
import Home1 from "./Home1";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";
import Home5 from "./Home5";
import Reservation from "../Reservation/Reservation";

const Home = () => {
  const [showNextPage, setShowNextPage] = useState(false);
  const [showQuestionPage, setShowQuestionPage] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [firstSearchText, setFirstSearchText] = useState("");
  const [secondSearchText, setSecondSearchText] = useState("");
  const [isExpanded, setIsExpanded] = useState(false); // 검색창이 펼쳐진 상태인지 여부를 저장하는 상태
  const [dateSelected, setDateSelected] = useState(false);
  const [currentNumberOfPeople, setCurrentNumberOfPeople] = useState(1);

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

  const plusNumberOfPeople = () => {
    setCurrentNumberOfPeople((prev) => prev + 1);
  };

  const minusNumberOfPeople = () => {
    setCurrentNumberOfPeople((prev) => prev - 1);
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
    setDateSelected(true); // 날짜가 선택되었다는 상태를 업데이트
    setShowQuestionPage(4); // 다음 페이지로 이동하기 위해 상태 업데이트, 여기서 5는 예시이며 실제 다음 페이지의 인덱스나 ID에 맞게 조정해야 합니다.
    setShowNextPage(true); // 다음 페이지를 보여주도록 설정
  };

  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div
      className={`page ${showNextPage ? "show-next-page" : ""}
      wrap max-w-6xl mx-auto my-0  `}
    >
      {/* 현재 페이지 컨텐츠 (1P) */}
      <div
        className={`current-page ${
          showQuestionPage !== 0 ? "hidden" : ""
        } wrap max-w-6xl w-full my-0 `}
      >
        <Home1 />
      </div>

      {/* 2P (첫번째 질문) */}
      <div
        className={`next-page h-screen ${
          showQuestionPage === 1
            ? "animate__animated animate__fadeInRight visible-on-scroll"
            : "hidden-initially"
        } wrap max-w-6xl mx-auto my-0`}
      >
        <Home2
          firstSearchText={firstSearchText}
          onSearchTextChange={handleFirstSearchInputChange}
          onSearchKeyDown={handleFirstSearchInputKeyDown}
        />
      </div>

      {/* 3P (두번째 질문) */}

      {showQuestionPage === 2 && (
        <div
          className={`next-page h-screen ${
            showNextPage ? "animate__animated animate__fadeInRight" : ""
          } wrap max-w-6xl mx-auto my-0`}
        >
          <Home3
            toggleSearch={toggleSearch}
            isExpanded={isExpanded}
            searchBarFold={searchBarFold}
            searchBarUnfold={searchBarUnfold}
            optionSelect={optionSelect}
            setShowQuestionPage={setShowQuestionPage} // 함수를 props로 추가
            setShowNextPage={setShowNextPage} // 함수를 props로 추가
          />
        </div>
      )}

      {/* 4P (세번째 질문) */}

      {showQuestionPage === 3 && (
        <div
          className={`next-page h-screen ${
            showQuestionPage ? "animate__animated animate__fadeInRight" : ""
          }  wrap max-w-6xl mx-auto my-0`}
        >
          <Home4
            CustomCalendar={CustomCalendar}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            handleDateOption={handleDateOption}
            SearchBar={SearchBar}
            setShowQuestionPage={setShowQuestionPage} // 함수를 props로 추가
            setShowNextPage={setShowNextPage} // 함수를 props로 추가
            handleDateSelection={() => setDateSelected(true)}
          />
        </div>
      )}

      {/* 5P (네번째 질문) */}

      {showQuestionPage === 4 && (
        <div
          className={`next-page h-screen ${
            showQuestionPage ? "animate__animated animate__fadeInRight" : ""
          }  wrap max-w-6xl mx-auto my-0`}
        >
          <Home5
            SearchBar={SearchBar}
            plusNumberOfPeople={plusNumberOfPeople}
            minusNumberOfPeople={minusNumberOfPeople}
            currentNumberOfPeople={currentNumberOfPeople}
            setShowQuestionPage={setShowQuestionPage} // 함수를 props로 추가
            setShowNextPage={setShowNextPage} // 함수를 props로 추가
          />
        </div>
      )}
    </div>
  );
};

export default Home;
