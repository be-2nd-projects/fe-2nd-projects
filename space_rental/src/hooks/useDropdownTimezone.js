import React from "react";
import Select from "react-select";

const options = Array.from({ length: 24 }, (_, i) => {
  const hour = i; // 0부터 시작
  return { value: `${hour}시`, label: `${hour}시` };
});

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderRadius: "20px",
    height: "100px",
    width: "200px",
    paddingLeft: "10px",
    paddingTop: "10px",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "20px",
    overflow: "hidden",
    paddingLeft: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // 여기에 그림자 스타일을 추가
  }),
  menuList: (provided) => ({
    ...provided,
    borderRadius: "20px",
    // 스크롤바 스타일 커스텀
    "::-webkit-scrollbar": {
      width: "0px",
    },
    "::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "::-webkit-scrollbar-thumb": {
      background: "transparent",
    },
  }),
};

const DropdownTimezone = () => (
  <Select styles={customStyles} options={options} placeholder="0시" />
);

export default DropdownTimezone;
