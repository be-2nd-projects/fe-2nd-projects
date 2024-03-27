import React, { useState } from 'react';
import {
  DropdownButton,
  DropdownList,
  DropdownListWrap,
  DropdownWrap
} from './DropdownStyle';
import { TbTriangleFilled, TbTriangleInvertedFilled } from "react-icons/tb";

function Dropdown() {
  const [isShow, setIsShow] = useState(false);
  const [listItem, setListItem] = useState('좋아요순')

  const dropDownListData = ['좋아요순', '가격높은순', '가격낮은순', '평점높은순', '평점낮은순'];

  const dropDownClickHandler = () => {
    setIsShow(!isShow);
  }
  const dropDownListClickHandler = (list) => {
    setListItem(list);
    setIsShow(false);
  }

  return (
    <>
      <DropdownWrap>
        <DropdownButton onClick={dropDownClickHandler}>
          <span className='mr-1'>
            {listItem}
          </span>
          {isShow ? <TbTriangleFilled /> : <TbTriangleInvertedFilled />}
        </DropdownButton>

        {isShow &&
          <DropdownListWrap>
            {dropDownListData.map((list, index) =>
              <DropdownList
                key={index}
                onClick={() => dropDownListClickHandler(list)}
              >
                {list}
              </DropdownList>
            )}
          </DropdownListWrap>
        }
      </DropdownWrap>
    </>
  );
}

export default Dropdown