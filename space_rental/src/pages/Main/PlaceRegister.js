import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PopupPostCode from "./MainComponents/PopupPostCode";
import BusinessHours from "./MainComponents/BusinessHours";

function PlaceRegister() {
  const navigate = useNavigate();

  const goToTimeOption = () => navigate("/addfare");

  const [selectedAddress, setSelectedAddress] = useState({
    address: "",
    zonecode: "",
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

  const optionSelect = (optionName) => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      [optionName]: !prevOptions[optionName],
    }));
  };

  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    if (event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
  };

  const handleCancelImage = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const hiddenFileInputStyle = {
    display: "none",
  };

  const optionButtons = [
    { label: "와이파이", name: "wifi" },
    { label: "주차가능", name: "parking" },
    { label: "반려동물 동반가능", name: "petsAllowed" },
    { label: "유아 출입 불가", name: "noChildren" },
    { label: "흡연가능", name: "Smoking" },
    { label: "음식물 반입 가능", name: "foodAllowed" },
    { label: "주류 반입 가능", name: "alcoholAllowed" },
    { label: "24시 운영", name: "operational24h" },
  ];

  return (
    <div>
      <div className="wrap max-w-6xl mx-auto my-0 flex flex-col text-5xl">
        <div className="mt-32 mb-16 text-7xl text-white font-bold">
          공간 등록하기
        </div>
        <div className="pb-24 w-full">
          <div className="font-light pb-4">공간의 이름을 입력해 주세요</div>
          <div>
            <input type="text" className="rounded-[28px] w-full h-20" />
          </div>
        </div>
        <div className="pb-24 w-full">
          <div className="font-light pb-4">공간의 위치를 알려 주세요</div>
          <div>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="우편번호"
                value={selectedAddress.zonecode}
                className="rounded-[28px] text-5xl pt-2 pr-2 text-center w-64 h-20 mb-3 mr-2"
              />
              <PopupPostCode onAddressSelect={handleAddressSelect} />
            </div>
            <div className="flex">
              <input
                type="text"
                placeholder="주소"
                value={selectedAddress.address}
                className="rounded-[28px] w-1/2 mb-3 mr-3 h-20 text-3xl"
              />

              <input
                type="text"
                placeholder="상세주소"
                className="rounded-[28px] text-3xl w-1/2 h-20 mr-2"
              />
            </div>
          </div>
        </div>
        <div className="pb-24 w-full">
          <div className="font-light pb-4">공간의 특징을 알려 주세요</div>
          <div>
            <input type="text" className="rounded-[28px] w-full h-60" />
          </div>
        </div>
        <div className="pb-24 w-full">
          <div className="font-light pb-4">공간의 주의사항을 써 주세요</div>
          <div>
            <input type="text" className="rounded-[28px] w-full h-60" />
          </div>
        </div>
        <div className="pb-24 w-full">
          <div className="font-light pb-4">
            공간의 특별한 점을 선택해 주세요
          </div>
          <div>
            <div>
              {optionButtons.map((button, index) => (
                <button
                  key={index}
                  onClick={() => optionSelect(button.name)}
                  className={`text-xl rounded-lg pt-2 pb-1 px-1.5 leading-none mr-3 ${
                    options[button.name] ? "bg-[#FFFD82] " : "bg-white"
                  }`}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="pb-24 w-full">
          <div className="font-light pb-4">
            공간의 대표 이미지를 올려 주세요
          </div>
          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              style={hiddenFileInputStyle}
              disabled={!!image}
              id="fileInput"
            />
            <label
              htmlFor="fileInput"
              className="cursor-pointer inline-block bg-[#23EAAE] text-black font-bold rounded-lg px-4 pt-4 pb-2"
            >
              파일 선택
            </label>
            {image && (
              <button onClick={handleCancelImage} className="ml-4 font-bold">
                x
              </button>
            )}
          </div>
        </div>
        <div>
          <BusinessHours />
        </div>
        <div className="pb-24 w-full">
          <div className="font-light pb-4">수용가능 인원을 알려 주세요</div>
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
          className="flex justify-center rounded-xl bg-[#FFFD82] mb-60 text-4xl pt-4 px-3 pb-2 w-52 cursor-pointer"
          onClick={goToTimeOption}
        >
          다음 단계로
        </div>
      </div>
    </div>
  );
}

export default PlaceRegister;
