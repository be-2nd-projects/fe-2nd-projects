import React from "react";

function PlaceResister() {
  return (
    <div className="flex flex-col justify-center items-center text-5xl">
      <div className="mt-32 mb-16  text-7xl text-white font-bold">
        공간 등록하기
      </div>
      <div className="pb-24 w-full ">
        <div className="mx-44 ">공간의 이름을 입력해 주세요</div>
        <div className="mx-44">
          <input type="text" className="rounded-[28px] w-full h-20" />
        </div>
      </div>
      <div className="pb-24 w-full ">
        <div className="mx-44 ">공간의 위치를 알려 주세요</div>
        <div className="mx-44">
          <input type="text" className="rounded-[28px] w-full h-20 mb-3" />
          <input type="text" className="rounded-[28px] w-full h-20" />
        </div>
      </div>
      <div className="pb-24 w-full ">
        <div className="mx-44 ">공간의 특징을 알려 주세요</div>
        <div className="mx-44">
          <input type="text" className="rounded-[28px] w-full h-60" />
        </div>
      </div>
      <div className="pb-24 w-full ">
        <div className="mx-44 ">공간의 주의사항을 써 주세요</div>
        <div className="mx-44">
          <input type="text" className="rounded-[28px] w-full h-60" />
        </div>
      </div>
      <div className="pb-24 w-full ">
        <div className="mx-44 ">공간의 특별한 점을 선택해 주세요</div>
        <div className="mx-44">
          <div>
            <button className="text-xl bg-white rounded-lg pt-2 pb-1 px-1.5 leading-none mr-3 ">
              와이파이
            </button>

            <button className="text-xl bg-white rounded-lg pt-2 pb-1 px-1.5 leading-none mr-3 ">
              주차가능
            </button>
            <button className="text-xl bg-white rounded-lg pt-2 pb-1 px-1.5 leading-none mr-3 ">
              반려동물 동반가능
            </button>
            <button className="text-xl bg-white rounded-lg pt-2 pb-1 px-1.5 leading-none mr-3 ">
              유아 출입 불가
            </button>
            <button className="text-xl bg-white rounded-lg pt-2 pb-1 px-1.5 leading-none mr-3 ">
              금연
            </button>
          </div>
          <div>
            <button className="text-xl bg-white rounded-lg pt-2 pb-1 px-1.5 leading-none mr-3 ">
              음식물 반입 가능
            </button>
            <button className="text-xl bg-white rounded-lg pt-2 pb-1 px-1.5 leading-none mr-3 ">
              주류 반입 가능
            </button>
            <button className="text-xl bg-white rounded-lg pt-2 pb-1 px-1.5 leading-none mr-3 ">
              샤워실 완비
            </button>
            <button className="text-xl bg-white rounded-lg pt-2 pb-1 px-1.5 leading-none mr-3 ">
              24시 운영
            </button>
            <button className="text-xl bg-white rounded-lg pt-2 pb-1 px-1.5 leading-none mr-3 ">
              대형 스크린
            </button>
          </div>
        </div>
      </div>
      <div className="pb-24">
        <div>공간의 대표 이미지를 올려 주세요</div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div className="pb-24">
        <div>운영시간을 알려 주세요</div>
        <div>
          <input type="text" />
        </div>
      </div>{" "}
      <div className="pb-24">
        <div>시간대별 요금을 설정해 주세요</div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div className="pb-24">
        <div>수용가능 인원을 알려 주세요</div>
        <div>
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

export default PlaceResister;
