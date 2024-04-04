import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // CSS 임포트
import dayjs from "dayjs"; // dayjs 임포트
import "./CustomCalendar.css"; // 수정된 CSS 파일 임포트

function CustomCalendar({ onDateChange }) {
  const [value, onChange] = useState("");

  // Update the function to use the prop
  const handleChange = (newValue) => {
    onChange(newValue);
    onDateChange(newValue); // This updates the parent's state
  };

  const formatDay = (locale, date) => dayjs(date).format("D");

  return (
    <div className="customCalendar">
      <Calendar
        onChange={handleChange}
        value={value}
        formatDay={formatDay}
        next2Label={null} // 1년 후로 이동하는 버튼을 숨깁니다.
        prev2Label={null} // 1년 전으로 이동하는 버튼을 숨깁니다.
      />
      <div className="text-gray-500 mt-4 "></div>
    </div>
  );
}

export default CustomCalendar;
