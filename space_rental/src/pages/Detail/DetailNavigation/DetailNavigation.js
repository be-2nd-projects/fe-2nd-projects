import React, { useState } from 'react';
import { Button, ButtonWrap, NavContainer, NavList, NavWrap } from './DetailNavigationStyle';

function DetailNavigation() {
  const [selectedNav, setSelectedNav] = useState(false);
  const navMenus = [
    {
      id: 1,
      title: '공간소개',
    },
    {
      id: 2,
      title: '주의사항',
    },
    {
      id: 3,
      title: '오시는길',
    },
    {
      id: 4,
      title: '이용후기',
    },
    {
      id: 5,
      title: '문의내역',
    }
  ]

  const navClickHandler = (id) => {
    setSelectedNav(id)
  }

  return (
    <NavContainer>
      <NavWrap>
        {
          navMenus.map((item) => (
            <NavList
              key={item.id}
              selected={selectedNav === item.id}
              onClick={() => navClickHandler(item.id)}
            >
              {item.title}
            </NavList>
          ))
        }
      </NavWrap>

      <ButtonWrap>
        <Button>
          예약하기
        </Button>
      </ButtonWrap>
    </NavContainer>
  );
}

export default DetailNavigation;