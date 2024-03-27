import React, { useState } from "react";

function FateInfo() {
  const [inputs, setInputs] = useState([""]);

  const addInput = () => {
    setInputs([...inputs, ""]);
  };

  return (
    <div className="flex flex-col justify-center items-center text-5xl">
      <div className="mt-32 mb-16  text-7xl text-white font-bold">
        요금 정보 입력하기
      </div>
      <div className="pb-24 w-full ">
        <div className="mx-44 ">공간 대여 단위를 설정해 주세요</div>
        <div className="flex justify-center gap-8 mx-44">
          <div className="w-40 h-40 p-6 text-4xl bg-white rounded-[20px]">
            시간단위 등록
          </div>
          <div className="w-40 h-40 p-6 text-4xl bg-white rounded-[20px]">
            시간대별 등록
          </div>
        </div>
      </div>
      <div className="pb-24 w-full ">
        <div className="mx-44 ">시간별 요금을 작성해 주세요</div>
        <div className="mx-44">
          {inputs.map((input, index) => (
            <div className="flex">
              <input
                type="text"
                className="rounded-[28px] w-1/2 h-20"
                placeholder="낮타임"
              />
              <input
                type="text"
                className="rounded-[28px] w-1/2 h-20 "
                placeholder="12시 ~ 17시"
              />
              <input
                type="number"
                className="rounded-[28px] w-1/2 h-20"
                placeholder="87,000원"
              />
            </div>
          ))}
          <button onClick={addInput}>+</button>{" "}
        </div>
      </div>
      <div className="pb-24 w-full ">
        <div className="mx-44 ">패키지를 작성해 주세요</div>
        <div className="mx-44">
          {inputs.map((input, index) => (
            <div className="flex">
              <input
                type="text"
                className="rounded-[28px] w-1/2 h-20"
                placeholder="낮타임"
              />
              <input
                type="text"
                className="rounded-[28px] w-1/2 h-20 "
                placeholder="12시 ~ 17시"
              />
              <input
                type="number"
                className="rounded-[28px] w-1/2 h-20"
                placeholder="87,000원"
              />
            </div>
          ))}
          <button onClick={addInput}>+</button>
        </div>
      </div>
    </div>
  );
}

export default FateInfo;