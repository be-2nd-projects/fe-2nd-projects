import React from "react";
import { useInputFields } from "../../hooks/useInputFields"; // 커스텀 훅 임포트
import DropdownTimezone from "../../hooks/useDropdownTimezone";

function FareInfoTimeZone() {
  // 커스텀 훅 사용
  const [inputs, addInput] = useInputFields();

  return (
    <div>
      <div className="wrap max-w-6xl mx-auto my-0 font-light  text-[36px]">
        <div className="mt-32 mb-16 text-7xl text-white font-bold">
          시간대별 요금을 작성해 주세요
        </div>
        <div className="">
          {inputs.map((input, index) => (
            <div key={index} className="flex content-center items-center ">
              <input
                type="text"
                className="rounded-[28px] w-72 h-20 mr-8"
                placeholder="낮타임"
                value={input.dayTime}
                onChange={(e) => {
                  /* 필요한 경우 상태 업데이트 로직 */
                }}
              />

              <DropdownTimezone />
              <div className="pr-4"> 에서</div>

              <DropdownTimezone />
              <div
                className="
                pr-8"
              >
                까지
              </div>

              <input
                type="number"
                className="rounded-[28px] w-72 h-20"
                placeholder="금액 입력"
                value={input.price}
                onChange={(e) => {
                  /* 필요한 경우 상태 업데이트 로직 */
                }}
              />
              <button className="text-[34px] font-bold"></button>
            </div>
          ))}
          <button
            className="flex justify-center mt-6  mx-auto pt-3 px-4 rounded-xl bg-[#23EAAE] font-medium"
            onClick={addInput}
          >
            +
          </button>
        </div>
      </div>{" "}
    </div>
  );
}

export default FareInfoTimeZone;
