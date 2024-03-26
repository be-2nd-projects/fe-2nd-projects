import React from 'react';
import { DropDownWrap, Title, TitleWrap } from './ListPageStyle';

function ListPage() {
  return (
    <div className='wrap max-w-6xl mx-auto my-0'>
      <TitleWrap>
        <Title>
          당신에게 딱 맞는 <br />
          공간을 제시할게요!
        </Title>
      </TitleWrap>
      <div>
        <DropDownWrap>
          <button className='flex'>
            좋아요 순
            <div>▼</div>
          </button>

          <ul>
            <li>가격높은순</li>
            <li>가격낮은순</li>
            <li>별점높은순</li>
            <li>별점낮은순</li>
          </ul>
        </DropDownWrap>
      </div>
    </div>
  );
}

export default ListPage;