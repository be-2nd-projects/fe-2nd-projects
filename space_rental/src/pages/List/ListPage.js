import React, { useState } from 'react';
import { DropDownButton, DropDownListWrap, DropDownWrap, Title, TitleWrap } from './ListPageStyle';
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";

function ListPage() {
  const [isShow, setIsShow] = useState(false);
  const [listItem, setListItem] = useState('좋아요순')

  const dropDownClickHandler = () => {
    setIsShow(!isShow);
  }
  const dropDownListClickHandler = (list) => {
    setListItem(list);
    setIsShow(false);
  }

  const dropDownListData = ['좋아요순', '가격높은순', '가격낮은순', '평점높은순', '평점낮은순'];

  return (
    <div className='wrap max-w-6xl mx-auto my-0'>
      <TitleWrap>
        <Title>
          당신에게 딱 맞는 <br />
          공간을 제시할게요!
        </Title>
      </TitleWrap>

      {/* 드롭다운 */}
      <DropDownWrap>
        <DropDownButton onClick={dropDownClickHandler}>
          <span className='mr-1'>
            {listItem}
          </span>
          {isShow ? <TbTriangleFilled /> : <TbTriangleInvertedFilled />}
        </DropDownButton>

        {isShow &&
          <DropDownListWrap>
            {dropDownListData.map((list, index) =>
              <li
                className='p-2 text-sm'
                key={index}
                onClick={() => dropDownListClickHandler(list)}
              >
                {list}
              </li>
            )}
          </DropDownListWrap>
        }
      </DropDownWrap>
    </div >
  );
}

export default ListPage;