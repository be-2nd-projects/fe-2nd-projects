import React from 'react';
import { CardContainer, ProfileWrap, ReviewContent, ReviewDate, ReviewImgWrap, ScoreWrap, StarWrap } from './DetailReviewStyle';
import { FaStar, FaUserLarge } from 'react-icons/fa6';
import space_img1 from '../../../assets/images/space_img1.png';

function ReviewCard({ starScoreArray }) {
  return (
    <CardContainer>
      <div className='flex items-center'>
        <ProfileWrap>
          <FaUserLarge className='text-stone-200 text-3xl' />
        </ProfileWrap>
        <div className='ml-4'>
          <div className='font-bold text-lg'>닉네임</div>
          <div className='flex'>
            <StarWrap>
              {starScoreArray.map((star, index) => (
                <FaStar
                  key={index}
                  className={'text-yellow-400' && 'text-stone-400'}>
                  {star}
                </FaStar>
              ))}
            </StarWrap>
            <ScoreWrap>
              <span>3.0</span>
            </ScoreWrap>
          </div>
        </div>
      </div>

      <ReviewContent>
        <div className='py-5'>
          <p>
            각기 다른 곳에서 같은 목적지를 향해 달려온 우리는 그 안에서 마음의 짐을 내려놓고 서로의 안부를 묻고 사소한 일에도 기쁨과 축하를 숨기지 않으며 파티의 주인공에게 더할 나위 없는 추억을 만들어 주었습니다. 미리 정갈하게 준비되어 있는 식기들에 맛있는 음식을 나누어 먹고, 달콤한 케이크를 자르고, 방 안에 미리 준비되어 있는 보드 게임을 하며 즐거운 시간을 함께 보냈습니다. 피로를 느끼는 사람은 공간 내부에 편안하게 마련된 침대 위에서 휴식을 할 수도 있습니다. '쉐어잇' 에서 이처럼 완벽한 공간을 찾을 수 있어 기뻤습니다. 모던하고 편안한 공간, 여유롭고 아름다운 재즈 음악, 탁 트인 테라스에서 불어오는 바람, 햇빛과 녹색 나뭇잎, 사랑하는 이들과의 즐거운 대화, 이보다 더 완벽한 공간이 있을까요?
          </p>
        </div>
        <ReviewDate>24.03.31</ReviewDate>
        <div className='imgGroup flex'>
          <ReviewImgWrap>
            <img className='rounded-lg' src={space_img1} alt='리뷰이미지' />
          </ReviewImgWrap>
        </div>
      </ReviewContent>
    </CardContainer>
  );
}

export default ReviewCard;