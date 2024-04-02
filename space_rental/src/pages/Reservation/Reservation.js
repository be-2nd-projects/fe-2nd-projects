import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PriceButtonSlider from './Buttonslider'
import Payment from './Payment';
import Person from './Person';
import Modal from 'react-modal';
import Calender from './Calendar';
import {useNavigate} from 'react-router-dom'
import ErrorModal from './ErrorModal';

const Reservation = () => {

  const navigate=useNavigate();

 
    const pricepertime = {'1:00':8000,'2:00':8000,'3:00':10000,'4:00':10000,'5:00':10000,'6:00':20000
    ,'7:00':20000,'8:00':20000,'9:00':20000,'10:00':20000}

    const reserveYsno =['n','n','n','y','y','y','n','n','n','n']

    const dispatch=useDispatch();

    const selectTime = useSelector((state)=>state.selectTime);
    const selectIndex = useSelector((state)=>state.selectIndex);
    const totalPrice = useSelector((state)=>state.totalPrice);

     const Selectpricehandler=({price,time,index,pricepertime,reserveYsno})=>{
        dispatch({type:'selectTime',payload: {price,time,index,pricepertime,reserveYsno}})
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
  
    const openModal = () => {
      setModalIsOpen(true);
    }
  
    const closeModal = () => {
      setModalIsOpen(false);
    }

    useEffect(()=>{
      const isreserved = selectIndex.map((item)=>reserveYsno[item]==='y')
      if (isreserved.includes(true)){
        setErrorMessage("이미 예약된 시간이 포함되어있습니다");
        openModal();
        dispatch({type:'initializeselect'})
      }     

    },[totalPrice])

    const timearray = selectTime.map(item => parseInt(item)).sort(function(a, b){ return a-b; });

    const startTime = timearray.length>0 ? timearray[0]+':00': ''
    const endTime = (parseInt(timearray[timearray.length-1])+1).toString() + ':00'

    const startTime2 = timearray[0]
    const endTime2 = timearray[timearray.length-1]
    const totalTime = endTime2 - startTime2 +1

    return (
        <>
        <div className="wrap max-w-6xl mx-auto my-0 flex text-5xl">
        <div className="w-2/3 bg-white-200">
        <div>
            <h1 className='text-left text-4xl'>선택한장소</h1>
            </div>
            <h1 className='text-left text-4xl'>날짜</h1>
            <div className="flex flex-col items-center">  <Calender ></Calender></div>
            <div style={{borderBottom: '2px solid white' }}>
            <h1 className='text-left text-4xl mt-5'>인원</h1>
            </div>
            <div className='mt-4'>
            <Person></Person>
            </div>
            <div>
            <div style={{borderBottom: '2px solid white' }}>
              <h1 className='text-left text-4xl mt-5'>시간 선택</h1>
            </div>
            <div className='mt-4'>
            <PriceButtonSlider reserveYsno={reserveYsno} pricepertime={pricepertime} Selectpricehandler={Selectpricehandler} />
            </div>
        </div>
        <div style={{borderBottom: '2px solid white' }}>
        <h1 className='text-left text-4xl mt-7' >예약정보</h1>
        </div>
        {/* <div className= " bg-white-400 border-t-zinc-800"> */}
          <div>
            <div className='flex items-center'>
        <h2 className='text-left text-3xl mt-5' >예약시간 :  </h2>
        <div className='text-3xl' >{timearray.length > 1 ? <div>{startTime} - {endTime} </div>: <div>{startTime}</div>}</div>
        <div className='text-3xl'>{!totalTime  ? <div></div>: <div> ( {totalTime}시간 )</div>}</div>
        </div>
        <div className='flex items-center'>
            <h2 className='text-left text-3xl'>총가격 :  </h2>
            <div className='text-3xl' > {totalPrice}</div>
            </div>
            </div>
        <div  >
        { modalIsOpen && <ErrorModal errorMessage={errorMessage} modalIsOpen={modalIsOpen}
        closeModal={closeModal} ></ErrorModal>}
      </div>
      </div>
      <div>
        <Payment></Payment>
        </div>
        </div>
        </>
    );
};

export default Reservation;