import React from 'react';
import tw from 'tailwind-styled-components';

const HeaderContainer = tw.header`
  w-full
  h-16
  bg-white
  shadow-md
  flex
  items-center
  text-primary
  font-GmarketSansMedium 
  font-bold
  `;

const HeaderWrap = tw.div`
  w-full
  max-w-7xl
  flex
  items-center
  justify-between
  px-4
  mx-auto
  my-0
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderWrap>
        <div>
          <div className='logo'>공간대여로고</div>
        </div>
        <div className='flex'>
          <div>고객센터</div>
          <div className='ml-2'>LOGIN</div>
        </div>
      </HeaderWrap>
    </HeaderContainer>
  );
}

export default Header; 