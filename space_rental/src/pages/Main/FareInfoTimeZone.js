import React from "react";
import { useInputFields } from "../../hooks/useInputFields"; // 커스텀 훅 임포트
import DropdownTimezone from "../../hooks/useDropdownTimezone";

function FareInfoTimeZone() {
  // 커스텀 훅 사용
  const [inputs, setInputs, addInput, updateInput] = useInputFields(); // setInputs 함수를 받아옴

  const handleInputChange = (index, field, value) => {
    updateInput(index, field, value); // 특정 인덱스의 input을 업데이트하는 함수
  };

  const deleteInput = (indexToDelete) => {
    if (indexToDelete === 0) {
      // 첫 번째 줄인 경우
      const updatedInputs = inputs.map((input, index) => {
        if (index === 0) {
          return { dayTime: "", range: "", price: "" }; // 첫 번째 줄의 input 필드만 비움
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
    <div>
      <div className="wrap max-w-6xl mx-auto my-0 font-light text-[36px]">
        <div className="mt-32 mb-16 text-7xl text-white font-bold">
          시간대별 요금을 작성해 주세요
        </div>
        <div>
          {inputs.map((input, index) => (
            <div key={index} className="flex content-center items-center">
              <input
                type="text"
                className="rounded-[28px] my-2 w-72 h-[100px] mr-4"
                placeholder="낮타임"
                value={input.dayTime}
                onChange={(e) =>
                  handleInputChange(index, "dayTime", e.target.value)
                }
              />

              <DropdownTimezone />
              <div className="pr-4">에서</div>

              <DropdownTimezone />
              <div className="pr-4">까지</div>

              <input
                type="number"
                className="rounded-[28px] w-72 h-[100px]"
                placeholder="금액 입력"
                value={input.price}
                onChange={(e) =>
                  handleInputChange(index, "price", e.target.value)
                }
              />
              <button
                className="text-[34px] ml-4 font-bold"
                onClick={() => deleteInput(index)}
              >
                x
              </button>
            </div>
          ))}
          <button
            className="flex justify-center mt-6 shadow-lg  mx-auto pt-2 font-medium px-4 rounded-xl bg-[#23EAAE] text-4xl "
            onClick={addInput}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="my-12 flex justify-center rounded-xl mb-64 bg-[#FFFD82] font-bold text-4xl pt-4 px-3 pb-2 w-52">
          작성완료
        </button>
      </div>
    </div>
  );
}

export default FareInfoTimeZone;
