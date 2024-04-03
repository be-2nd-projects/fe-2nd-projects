
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import moment from 'moment';
import "./Calendar.css"; // 수정된 CSS 파일 임포트
import { select } from '@material-tailwind/react';

const Calender = () => {

    // const [reservedate,setreservedate] = useState(new Date())

    const dispatch=useDispatch();

    const setReservetdate=(date)=>{
        dispatch({type:'selectdate',payload:date})
    }

    const date = useSelector((state)=>state.reserveDate);
    const localDate = new Date(date.getTime() + date.getTimezoneOffset()* 60 * 1000);



    return (
        <>
        <Calendar 
        onChange={setReservetdate}
        value = {date}
        showNeighboringMonth={false}
        calendarType="gregory"></Calendar>
        <div className='text-3xl text-center' >{moment(date).format('YYYY년 MM월 DD일')}</div>
        </>
    );
};

export default Calender;