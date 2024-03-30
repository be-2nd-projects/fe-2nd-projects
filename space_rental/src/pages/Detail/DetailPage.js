import React from 'react';
import ImgGroup from './DetailImage/ImgGroup';
import SummaryInfo from './SummaryInfo/SummaryInfo';
import DetailNavigation from './DetailNavigation/DetailNavigation';
import Detaillnfo from './DetailInfo/Detaillnfo';
import DetailCaution from './DetailCaution/DetailCaution.js';

function DetailPage() {
  return (
    <div className='wrap max-w-6xl mx-auto my-0 border-orange-700 border-solid border-2'>
      <ImgGroup />
      <SummaryInfo />
      <DetailNavigation />
      <Detaillnfo />
      <DetailCaution />
    </div>
  );
}

export default DetailPage;