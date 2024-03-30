import React from 'react';
import space_img1 from '../../../assets/images/space_img1.png';
import { BigImgGroupWrap, Img, ImgGroupContainer, SmallImgGroupWrap } from './ImgGroupStyle';

function ImgGroup() {
  return (
    <ImgGroupContainer>
      <BigImgGroupWrap>
        <div>
          <Img className='Img1 rounded-l-xl' src={space_img1} alt='상품 이미지' />
        </div>
      </BigImgGroupWrap>
      <SmallImgGroupWrap>
        <div>
          <Img className='Img2' src={space_img1} alt='상품 이미지' />
        </div>
        <div>
          <Img className='Img3 rounded-tr-xl' src={space_img1} alt='상품 이미지' />
        </div>
        <div>
          <Img className='Img4' src={space_img1} alt='상품 이미지' />
        </div>
        <div className=''>
          <Img className='Img5 rounded-br-xl' src={space_img1} alt='상품 이미지' />
        </div>
      </SmallImgGroupWrap>
    </ImgGroupContainer>
  );
}

export default ImgGroup;