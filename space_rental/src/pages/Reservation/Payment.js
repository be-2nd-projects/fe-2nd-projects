import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Modal from 'react-modal';
import ErrorModal from './ErrorModal';

const Payment = () => {

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

    const dispatch=useDispatch();

    const payment = useSelector((state)=>state.payment);
    const selectTime = useSelector((state)=>state.selectTime);
    const totalPrice = useSelector((state)=>state.totalPrice);
    const person = useSelector((state)=>state.person);
    const date = useSelector((state)=>state.reserveDate);

    const timearray = selectTime.map(item => parseInt(item)).sort(function(a, b){ return a-b; });

    const startTime = timearray.length>0 ? timearray[0]+':00': ''
    const endTime = (parseInt(timearray[timearray.length-1])+1).toString() + ':00'

    const reservemonth = new Date(date).getMonth()+1;
    const reservedate = new Date(date).getDate();
    const reserveyear= new Date(date).getFullYear();


    const [isagree, setIsagree] =useState(false);
    const [ischeck, setIscheck] =useState(false);

    const Selectpaymenthandler=(event)=>{
        const paymethod=event.target.value
        dispatch({type:'selectpayment',payload: {paymethod}})
     }

    const isagreehandler=()=>{
      setIsagree(!isagree)
    }

    const ischeckhandler=()=>{
        setIscheck(!ischeck)
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
  
    const openModal = () => {
      setModalIsOpen(true);
    }
  
    const closeModal = () => {
      setModalIsOpen(false);
    }

    const reservationInfo = {
      selectTime,
      totalPrice,
      payment,
      person,
      startTime,
      endTime,
      date
    }

    console.log(reservationInfo)
    
    const clickpaymenthandler=()=>{

      if (isagree===false || ischeck === false){
        setErrorMessage("필수 동의항목을 체크해주세요");
        openModal();
      }
    }

    return (
        <>
        <h1 className='text-left text-4xl'>결제방법</h1>
        <div className='text-left text-xl'>
        <input 
          type='radio'     
          onChange={Selectpaymenthandler}     
          value='kakaopay'
          checked={payment === 'kakaopay'}
        />
        카카오페이</div>
        <div className='text-left text-xl'>
        <input
          type='radio'
          onChange={Selectpaymenthandler}  
          value='creditcard'
          checked={payment === 'creditcard'}
        />
        신용카드</div>
        <h2 className='text-left text-4xl'>동의 체크</h2>
        <div className='text-left text-xl'>
        <input
          type='checkbox'
          onChange={isagreehandler}
        />
        개인정보동의 확인</div>
        <div className='text-left text-xl'>
        <input
          type='checkbox'
          onChange={ischeckhandler}
        />
        예약조건 확인</div>
       { modalIsOpen && <ErrorModal errorMessage={errorMessage} modalIsOpen={modalIsOpen}
        closeModal={closeModal} ></ErrorModal>}
        <button className="border border-gray-800 px-4 py-2 rounded-lg "
        onClick={clickpaymenthandler}>결제하기</button>
        </>
    );
};

export default Payment;