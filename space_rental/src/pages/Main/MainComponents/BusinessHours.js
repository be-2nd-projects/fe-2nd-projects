import { useState } from "react";

function BusinessHours() {
  const [operatingHours, setOperatingHours] = useState({
    MON: { start: "", end: "" },
    TUE: { start: "", end: "" },
    WED: { start: "", end: "" },
    THU: { start: "", end: "" },
    FRI: { start: "", end: "" },
    SAT: { start: "", end: "" },
    SUN: { start: "", end: "" },
  });

  const daysOfWeek = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const timeOptions = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];

  const handleTimeChange = (day, type, value) => {
    setOperatingHours((prevState) => ({
      ...prevState,
      [day]: {
        ...prevState[day],
        [type]: value,
      },
    }));
  };

  // 종료 시간 옵션을 가져오는 함수
  const getEndOptions = (start) => {
    const startIndex = timeOptions.indexOf(start);
    const endOptions = [];
    if (startIndex !== -1) {
      for (let i = 1; i <= 23; i++) {
        const index = (startIndex + i) % 24;
        const time = timeOptions[index];
        // 모든 00:00 이후 시간에 "익일"을 추가하는 조건 수정
        const formattedTime = index <= startIndex ? "익일 " + time : time;
        endOptions.push(formattedTime);
      }
    }
    return endOptions;
  };

  return (
    <div className="wrap max-w-6xl mx-auto my-0 flex flex-col text-5xl">
      <div className="pb-24 w-full">
        <div className="font-light">운영시간을 선택해 주세요</div>
        {daysOfWeek.map((day) => (
          <div key={day} className="flex items-center mb-3">
            <div className="r w-40 mr-2">{day}</div>
            <select
              value={operatingHours[day].start}
              onChange={(e) => handleTimeChange(day, "start", e.target.value)}
              className="rounded-[28px]  w-72 pt-2 h-16 mr-2"
            >
              <option value="">시작 시간</option>
              {timeOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
            <select
              value={operatingHours[day].end}
              onChange={(e) => handleTimeChange(day, "end", e.target.value)}
              className="rounded-[28px] pt-2 h-16 w-72 "
            >
              <option value="">종료 시간</option>
              {operatingHours[day].start &&
                getEndOptions(operatingHours[day].start).map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BusinessHours;
