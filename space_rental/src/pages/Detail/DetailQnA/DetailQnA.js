import React, { useRef, useState } from 'react';
import {
  Button,
  ButtonWrap,
  QnaContainer,
  QnaContent,
  QnaContentBox,
  QnaContentIcon,
  QnaContentText,
  QnaHeader,
  QnaWrap,
  SectionContainer,
  SectionTitle
} from './DetailQnAStyle';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function DetailQnA() {
  const [isExpanse, setIsExpanse] = useState([]);
  const [openQnAModal, setOpenQnAModal] = useState(false);
  const openModalHandler = () => {
    setOpenQnAModal(!openQnAModal)
  }

  const handleButtonClick = (index) => {
    setIsExpanse(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const qnaData = [
    {
      title: "제목 - 숙소에 대한 질문입니다~",
      content: "내용 - 12월 9일 금요일 저녁 7시부터 사용하고싶은데 예약이 비어있나요? 그 시간에 걸맞는 패키지가 있을까요? 가격은 어찌될까요?"
    },
    {
      title: "제목 - 숙소에 대한 질문입니다~",
      content: "내용 - 12월 9일 금요일 저녁 7시부터 사용하고싶은데 예약이 비어있나요? 그 시간에 걸맞는 패키지가 있을까요? 가격은 어찌될까요?"
    },
    {
      title: "제목 - 숙소에 대한 질문입니다~",
      content: "내용 - 12월 9일 금요일 저녁 7시부터 사용하고싶은데 예약이 비어있나요? 그 시간에 걸맞는 패키지가 있을까요? 가격은 어찌될까요?"
    }
  ];

  return (
    <SectionContainer>
      <div className='flex justify-between'>
        <SectionTitle>
          <span>문의내역</span>
          <span className='ml-2'>45</span>
        </SectionTitle>

        <ButtonWrap>
          <Button onClick={openModalHandler}>
            문의하기
          </Button>
        </ButtonWrap>
      </div>

      <QnaContainer>
        {qnaData.map((qna, index) => (
          <QnaWrap>
            {/* Q&A 제목 */}
            <QnaHeader onClick={() => handleButtonClick(index)}>
              <span>{qna.title}</span>
              <button className='text-lg'>
                {!isExpanse[index] ? <IoIosArrowDown /> : <IoIosArrowUp />}
              </button>
            </QnaHeader>

            {/* Q&A 내용 */}
            <QnaContent
              expansed={isExpanse[index]}
            >
              {/* 게스트 문의 내용 */}
              <QnaContentBox>
                <QnaContentIcon className='bg-primary'>
                  <span>Q</span>
                </QnaContentIcon>
                <QnaContentText>{qna.content}</QnaContentText>
              </QnaContentBox>

              {/* 호스트 문의 답변 */}
              <QnaContentBox>
                <QnaContentIcon className='bg-red-500'>
                  <span>A</span>
                </QnaContentIcon>
                <QnaContentText>
                  안녕하세요 고객님 12월은 현재 다른 링크로 예약을 받고 있습니다.현재 문의주신 날 예약 가능합니다만 12월 예약문의가 폭발적으로 많아서 최대한 빨리 연락 주시면 감사하겠습니다:)
                </QnaContentText>
              </QnaContentBox>
            </QnaContent>
          </QnaWrap>
        ))}

      </QnaContainer>
    </SectionContainer>
  );
}

export default DetailQnA;