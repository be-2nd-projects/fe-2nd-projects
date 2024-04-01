import React, { useState } from "react";
import Dropdown from "../../hooks/useDropdown"; // 가정: Dropdown 컴포넌트의 정확한 경로

function FareInfoHourly() {
  const [inputs, setInputs] = useState([{ time: "", price: "" }]);

  // 숫자에 3자리마다 콤마를 추가하는 함수
  const formatNumber = (num) => {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // 입력 필드 추가 함수
  const addInput = () => {
    setInputs([...inputs, { time: "", price: "" }]);
  };

  // 금액 입력 처리 함수
  const handlePriceChange = (e, index) => {
    let value = e.target.value.replace(/[^0-9]/g, ""); // 숫자만 입력 받기
    value = formatNumber(value); // 콤마 추가
    const updatedInputs = inputs.map((input, i) =>
      i === index ? { ...input, price: value } : input
    );
    setInputs(updatedInputs);
  };

  // 시간 선택 처리 함수
  const handleTimeChange = (time, index) => {
    const updatedInputs = inputs.map((input, i) =>
      i === index ? { ...input, time } : input
    );
    setInputs(updatedInputs);
  };

  // 항목 삭제 함수
  const deleteInput = (indexToDelete) => {
    if (indexToDelete === 0) {
      // 첫 번째 줄인 경우
      const updatedInputs = inputs.map((input, index) => {
        if (index === 0) {
          return { time: "", price: "" }; // 첫 번째 줄의 input 필드만 비움
        }
        return input;
      });
      setInputs(updatedInputs);
    } else {
      // 첫 번째 줄이 아닌 경우
      const updatedInputs = inputs.filter(
        (input, index) => index !== indexToDelete
      );
      setInputs(updatedInputs);
    }
  };

  return (
    <div className="wrap max-w-6xl mx-auto my-0 font-light  text-5xl">
      <div className="mt-32 mb-16 text-7xl text-white font-bold">
        시간별 요금을 작성해 주세요
      </div>
      <div className="">
        {inputs.map((input, index) => (
          <div key={index} className="flex content-center items-center">
            <Dropdown />
            <input
              type="text"
              className="mx-4 pl-5 pt-2 rounded-[28px] w-[600px] h-20"
              placeholder="금액 입력"
              value={input.price}
              onChange={(e) => handlePriceChange(e, index)}
            />
            <button
              className="text-[34px] font-bold"
              onClick={() => deleteInput(index)}
            >
              x
            </button>
          </div>
        ))}
      </div>
      <button
        className="flex justify-center mt-6  mx-auto pt-3 px-4 rounded-xl bg-[#23EAAE] font-medium"
        onClick={addInput}
      >
        +
      </button>
    </div>
  );
}

export default FareInfoHourly;
