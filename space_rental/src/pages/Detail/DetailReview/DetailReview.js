import React from 'react';
import { SectionContainer, SectionTitle } from './DetailReviewStyle';
import ReviewCard from './ReviewCard';


function DetailReview() {
  const starScoreArray = [0, 1, 2, 3, 4]

  return (
    <SectionContainer>
      <SectionTitle>이용후기</SectionTitle>
      <ReviewCard starScoreArray={starScoreArray} />
    </SectionContainer>
  );
}

export default DetailReview;