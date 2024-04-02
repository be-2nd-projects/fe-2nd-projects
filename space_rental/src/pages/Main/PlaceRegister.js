import { useState, useRef } from "react";
import PopupPostCode from "./MainComponents/PopupPostCode";
import BusinessHours from "./MainComponents/BusinessHours";
import { useNavigate } from "react-router-dom";

function PlaceRegister() {
  const navigate = useNavigate();

  const goToTimeOption = () => navigate("/addfare");

  const [selectedAddress, setSelectedAddress] = useState({
    address: "",
    zonecode: "", // 초기 우편번호는 빈 문자열로 설정
  });

  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
  };

  const [options, setOptions] = useState({
    wifi: false,
    parking: false,
    petsAllowed: false,
    noChildren: false,
    nonSmoking: false,
    foodAllowed: false,
    alcoholAllowed: false,
    showerAvailable: false,
    operational24h: false,
    largeScreen: false,
  });

  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null); // 파일 입력 엘리먼트에 대한 ref 생성

  const optionSelect = (optionName) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [optionName]: !prevOptions[optionName],
    }));
  };

  // 이미지 선택 핸들러
  const handleImageChange = (event) => {
    if (event.target.files.length > 0) {
      // 첫 번째 파일을 이미지로 설정
      setImage(event.target.files[0]);
    }
  };
  const handleCancelImage = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // 파일 입력의 값을 초기화
    }
  };

  return (
    <div>
      <div className=" wrap max-w-6xl mx-auto my-0 flex flex-col  text-5xl">
        <div className="mt-32 mb-16  text-7xl text-white font-bold">
          공간 등록하기
        </div>
        <div className="pb-24 w-full ">
          <div className="font-light">공간의 이름을 입력해 주세요</div>
          <div className="">
            <input type="text" className="rounded-[28px] w-full h-20" />
          </div>
        </div>
        <div className="pb-24 w-full ">
          <div className="font-light onClick={optionSelect} ">
            공간의 위치를 알려 주세요
          </div>
          <div className="">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="우편번호"
                value={selectedAddress.zonecode} // 선택한 우편번호를 우편번호 input에 표시
                className="rounded-[28px] w-64 h-20 mb-3"
              />
              <PopupPostCode onAddressSelect={handleAddressSelect} />
            </div>
            <input
              type="text"
              placeholder="주소"
              value={selectedAddress.address} // 선택한 주소를 주소 input에 표시
              className="rounded-[28px] w-full h-20"
            />
            <div className="flex items-center">
              <input
                type="text"
                placeholder="상세주소"
                className="rounded-[28px] w-1/2 h-20"
              />
              <button className="rounded-[28px] w-36 h-20 bg-white">
                등록
              </button>
            </div>
          </div>
        </div>
        <div className="pb-24 w-full ">
          <div className="font-light">공간의 특징을 알려 주세요</div>
          <div className="">
            <input type="text" className="rounded-[28px] w-full h-60" />
          </div>
        </div>
        <div className="pb-24 w-full ">
          <div className="font-light">공간의 주의사항을 써 주세요</div>
          <div className="">
            <input type="text" className="rounded-[28px] w-full h-60" />
          </div>
        </div>
        <div className="pb-24 w-full ">
          <div className="font-light">공간의 특별한 점을 선택해 주세요</div>
          <div className="">
            <div>
              <button
                onClick={() => optionSelect("wifi")}
                className={`text-xl rounded-lg pt-2 pb-1 px-1.5 leading-none mr-3 ${
                  options.wifi ? "bg-[#9CA0A6]" : "bg-white"
                }`}
              >
                와이파이
              </button>
              <button
                onClick={() => optionSelect("parking")}
                className={`text-xl rounded-lg pt-2 pb-1 px-1.5 leading-none mr-3 ${
                  options.parking ? "bg-[#9CA0A6]" : "bg-white"
                }`}
              >
                주차가능
              </button>
              <button
                onClick={() => optionSelect("petsAllowed")}
                className={`text-xl rounded-lg pt-2 pb-1 px-1.5 leading-none mr-3 ${
                  options.petsAllowed ? "bg-[#9CA0A6]" : "bg-white"
                }`}
              >
                반려동물 동반가능
              </button>
              <button
                onClick={() => optionSelect("noChildren")}
                className={`text-xl rounded-lg pt-2 pb-1 px-1.5 leading-none mr-3 ${
                  options.noChildren ? "bg-[#9CA0A6]" : "bg-white"
                }`}
              >
                유아 출입 불가
              </button>
              <button
                onClick={() => optionSelect("nonSmoking")}
                className={`text-xl rounded-lg pt-2 pb-1 px-1.5 leading-none mr-3 ${
                  options.nonSmoking ? "bg-[#9CA0A6]" : "bg-white"
                }`}
              >
                금연
              </button>
              <button
                onClick={() => optionSelect("foodAllowed")}
                className={`text-xl rounded-lg pt-2 pb-1 px-1.5 leading-none mr-3 ${
                  options.foodAllowed ? "bg-[#9CA0A6]" : "bg-white"
                }`}
              >
                음식물 반입 가능
              </button>
              <button
                onClick={() => optionSelect("alcoholAllowed")}
                className={`text-xl rounded-lg pt-2 pb-1 px-1.5 leading-none mr-3 ${
                  options.alcoholAllowed ? "bg-[#9CA0A6]" : "bg-white"
                }`}
              >
                주류 반입 가능
              </button>
              <button
                onClick={() => optionSelect("showerAvailable")}
                className={`text-xl rounded-lg pt-2 pb-1 px-1.5 leading-none mr-3 ${
                  options.showerAvailable ? "bg-[#9CA0A6]" : "bg-white"
                }`}
              >
                샤워실 완비
              </button>
              <button
                onClick={() => optionSelect("operational24h")}
                className={`text-xl rounded-lg pt-2 pb-1 px-1.5 leading-none mr-3 ${
                  options.operational24h ? "bg-[#9CA0A6]" : "bg-white"
                }`}
              >
                24시 운영
              </button>
              <button
                onClick={() => optionSelect("largeScreen")}
                className={`text-xl rounded-lg pt-2 pb-1 px-1.5 leading-none mr-3 ${
                  options.largeScreen ? "bg-[#9CA0A6]" : "bg-white"
                }`}
              >
                대형 스크린
              </button>
            </div>
          </div>
        </div>
        <div className="pb-24 w-full ">
          <div className="font-light">공간의 대표 이미지를 올려 주세요</div>
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef} // 파일 입력에 ref 부착
              disabled={!!image}
            />
            {image && (
              <button onClick={handleCancelImage} className="ml-4">
                X
              </button>
            )}
          </div>
        </div>
        <div>
          <BusinessHours />
        </div>

        <div className="pb-24 w-full ">
          <div className="font-light">수용가능 인원을 알려 주세요</div>
          <div>
            <input
              className="rounded-[24px] w-40 pt-3 pl-2 text-center mr-2"
              type="number"
              placeholder="0"
            />
            명
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div
          className="flex justify-center rounded-xl bg-white text-4xl pt-4 px-3 pb-2 w-52"
          onClick={goToTimeOption}
        >
          다음 단계로
        </div>
      </div>
    </div>
  );
}

export default PlaceRegister;
