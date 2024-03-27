import React from 'react';
import space_img1 from '../../../assets/images/space_img1.png'

function Cards() {
  return (
    <div className='cardsWrap border-rose-600 border-solid border-2 flex'>
      <div className='card border-fuchsia-200 border-solid border-2'>
        <div className='imageWrap h-[220px] rounded-xl flex justify-center align-center'>
          <img className='max-w-full max-h-full rounded-xl' src={space_img1} alt='공간대여사진' />
        </div>

        <div>텍스트공간</div>
      </div>

      <div className='card border-fuchsia-200 border-solid border-2'>
        <div className='imageWrap h-[220px] rounded-xl flex'>
          <img className='max-w-full max-h-full rounded-xl' src={space_img1} alt='공간대여사진' />
        </div>

        <div>텍스트공간</div>
      </div>
    </div>
  );
}

export default Cards;