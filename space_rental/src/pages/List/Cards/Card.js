import React from 'react';
import space_img1 from '../../../assets/images/space_img1.png'
import { CardItem, Category, Img, ImgWrap, ListInfoLeft, ListInfoRight, Title } from './CardsStyle';
import { FaLocationDot } from "react-icons/fa6";
import { FaHeart, FaStar } from "react-icons/fa";

function Card() {
  return (
    <CardItem>
      <ImgWrap>
        <Img src={space_img1} alt='공간대여사진' />
      </ImgWrap>

      <div className='flex mt-2 justify-between px-2'>
        <ListInfoLeft>
          <Title>스페이스 주다 을지로 1호점</Title>
          <div className='my-2'>
            <Category>파티룸</Category>
          </div>
          <div className='flex mt-9'>
            <FaLocationDot />
            <span className='text-sm font-bold ml-1'>서울특별시 광진구</span>
          </div>
        </ListInfoLeft>

        <ListInfoRight>
          <div className='flex text-white text-sm'>
            <div className='flex text-red-400'>
              <FaHeart />
              <span className='ml-1 font-bold'>128</span>
            </div>
            <div className='flex ml-2'>
              <FaStar />
              <span className='ml-1 font-bold'>3.0</span>
            </div>
          </div>

          <div className='font-bold flex flex-col items-end'>
            <div className='text-2xl'>10,000</div>
            <div className='text-sm'>/ 1시간 당</div>
          </div>
        </ListInfoRight>
      </div>
    </CardItem>
  );
}

export default Card;