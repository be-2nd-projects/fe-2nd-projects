import React, { useState } from 'react';
import {
  Category,
  InfoOptionValue,
  InfoSubTitle,
  InfoWrap,
  SummaryContainer,
  TitleWrap
} from './SummaryInfoStyle';
import { FaBanSmoking, FaDog, FaHeart, FaLocationDot, FaRegHeart, FaShower, FaSquareParking, FaStar, FaWifi } from 'react-icons/fa6';
import { Tb24Hours } from "react-icons/tb";
import { FaWineBottle } from "react-icons/fa";
import { GrElevator } from "react-icons/gr";
import { MdChildCare } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";

function SummaryInfo() {
  const [cartClick, setCartClick] = useState(false);

  const spaceOptions = [
    { title: '와이파이', icon: <FaWifi /> },
    { title: '주차가능', icon: <FaSquareParking /> },
    { title: '반려동물', icon: <FaDog /> },
    { title: '엘레베이터', icon: <GrElevator /> },
    { title: '유아동반', icon: <MdChildCare /> },
    { title: '금연가능', icon: <FaBanSmoking /> },
    { title: '음식반입', icon: <IoFastFoodOutline /> },
    { title: '샤워실', icon: <FaShower /> },
    { title: '주류반입', icon: <FaWineBottle /> },
    { title: '24시운영', icon: <Tb24Hours /> }
  ]

  const cartClickHandler = () => {
    setCartClick(!cartClick);
  }
  return (
    <SummaryContainer>
      <div className='my-2'>
        <Category>파티룸</Category>
      </div>

      <TitleWrap>
        <p>스페이스 주다 을지로 1호점</p>
        <button className='ml-2' onClick={cartClickHandler}>
          {!cartClick ?
            <FaRegHeart /> : <FaHeart />
          }
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
        {spaceOptions.map((opt, index) => (
          <InfoOptionValue key={index}>
            <span className='text-lg mr-1'>
              {opt.icon}
            </span>
            <span className='text-xs mt-1'>
              {opt.title}
            </span>
          </InfoOptionValue>
        ))}

      </InfoWrap>
    </SummaryContainer>
  );
}

export default SummaryInfo;