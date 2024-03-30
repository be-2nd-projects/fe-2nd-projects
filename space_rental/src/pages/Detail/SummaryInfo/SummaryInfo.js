import React from 'react';
import { Category, InfoOptionValue, InfoSubTitle, InfoWrap, SummaryContainer, TitleWrap } from './SummaryInfoStyle';
import { FaDog, FaHeart, FaLocationDot, FaRegHeart, FaSquareParking, FaStar, FaWifi } from 'react-icons/fa6';

function SummaryInfo() {
  return (
    <SummaryContainer>
      <div className='my-2'>
        <Category>파티룸</Category>
      </div>

      <TitleWrap>
        <p>스페이스 주다 을지로 1호점</p>
        <button className='ml-2'>
          <FaRegHeart />
        </button>
      </TitleWrap>

      <div className='flex justify-between text-lg'>
        <div className='flex text-white'>
          <FaLocationDot />
          <span className='ml-1'>
            서울특별시 광진구
          </span>
        </div>
        <div className='flex mb-6 text-lg'>
          <div className='flex text-red-400'>
            <FaHeart />
            <span className='ml-1 font-bold'>128</span>
          </div>
          <div className='flex ml-2'>
            <FaStar />
            <span className='ml-1 font-bold'>3.0</span>
          </div>
        </div>
      </div>

      <InfoWrap>
        <InfoSubTitle>최대 수용 인원</InfoSubTitle>
        <li>8명</li>
      </InfoWrap>

      <InfoWrap>
        <InfoSubTitle>예약 가능 시간</InfoSubTitle>
        <li>07시 ~ 23시</li>
      </InfoWrap>

      <InfoWrap className='items-center'>
        <InfoSubTitle>옵션</InfoSubTitle>
        <InfoOptionValue>
          <span className='text-xl mr-1'>
            <FaWifi />
          </span>
          <span className='text-sm mt-1'>와이파이</span>
        </InfoOptionValue>
        <InfoOptionValue>
          <span className='text-xl mr-1'>
            <FaSquareParking />
          </span>
          <span className='text-sm mt-1'>주차가능</span>
        </InfoOptionValue>
        <InfoOptionValue>
          <span className='text-xl mr-1'>
            <FaDog />
          </span>
          <span className='text-sm mt-1'>애견동반</span>
        </InfoOptionValue>
      </InfoWrap>
    </SummaryContainer>
  );
}

export default SummaryInfo;