import React from "react";
import AddHourly from "../../assets/images/addhourly.png";
import AddTimeZone from "../../assets/images/addtimezone.png";
import { useNavigate } from "react-router-dom";

function FareInfo() {
  const navigate = useNavigate();
  const navigateHourly = () => {
    navigate("/addhourly");
  };
  const navigateTimeZone = () => {
    navigate("/addtimezone");
  };

  return (
    <div className=" wrap max-w-6xl mx-auto my-0 flex flex-col font-light text-5xl">
      <div className="mt-32 mb-16  text-7xl text-white font-bold">
        요금 정보 입력하기
      </div>
      <div className="pb-24 w-full mb-48 ">
        <div className="flex justify-center gap-8 ">
          <div className="w-64">
            <img src={AddHourly} onClick={navigateHourly} alt="시간별" />
          </div>
          <div className="w-64">
            <img src={AddTimeZone} onClick={navigateTimeZone} alt="시간대별" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FareInfo;
