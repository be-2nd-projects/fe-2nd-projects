
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import moment from 'moment';

const Calender = () => {

    const [selectdate,setSelectdate] = useState(new Date())

    console.log(selectdate)
    return (
        <>
        <Calendar 
        onChange={setSelectdate}
        value = {selectdate}
        showNeighboringMonth={false}
        calendarType="gregory"></Calendar>
        <div>{moment(selectdate).format('YYYY년 MM월 DD일')}</div>
        </>
    );
};

export default Calender;