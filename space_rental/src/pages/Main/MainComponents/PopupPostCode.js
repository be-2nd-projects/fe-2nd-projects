import React, { useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";

const scriptUrl =
  "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";

const PopupPostCode = ({ onAddressSelect }) => {
  const open = useDaumPostcodePopup(scriptUrl);

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    onAddressSelect({
      address: fullAddress,
      zonecode: data.zonecode, // 우편번호 추가
    });
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <button
      type="button"
      className="bg-[#74F4CE] w-36 pt-2 px-2 h-20 rounded-3xl mb-3 text-4xl"
      onClick={handleClick}
    >
      찾기
    </button>
  );
};

export default PopupPostCode;
