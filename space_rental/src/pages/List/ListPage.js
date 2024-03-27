import React from 'react';
import {
  Title,
  TitleWrap
} from './ListPageStyle';
import Dropdown from './Dropdown/Dropdown';
import Cards from './Cards/Cards';

function ListPage() {
  return (
    <div className='wrap max-w-6xl mx-auto my-0'>
      <TitleWrap>
        <Title>
          당신에게 딱 맞는 <br />
          공간을 제시할게요!
        </Title>
      </TitleWrap>
      <Dropdown />
      <Cards />
    </div >
  );
}

export default ListPage;