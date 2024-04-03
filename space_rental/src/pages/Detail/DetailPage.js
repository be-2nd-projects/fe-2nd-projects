import React from 'react';
import ImgGroup from './DetailImage/ImgGroup';
import SummaryInfo from './SummaryInfo/SummaryInfo';
import DetailNavigation from './DetailNavigation/DetailNavigation';
import Detaillnfo from './DetailInfo/Detaillnfo';
import DetailCaution from './DetailCaution/DetailCaution.js';
import DetailLocation from './DetailLocation/DetailLocation';
import DetailReview from './DetailReview/DetailReview';
import DetailQnA from './DetailQnA/DetailQnA';

function DetailPage() {
  return (
    <div className='wrap max-w-6xl mx-auto my-0'>
      <ImgGroup />
      <SummaryInfo />
      <DetailNavigation />
      <Detaillnfo />
      <DetailCaution />
      <DetailLocation />
      <DetailReview />
      <DetailQnA />
    </div>
  );
}

export default DetailPage;