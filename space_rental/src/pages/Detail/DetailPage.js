import React from 'react';
import ImgGroup from './DetailImage/ImgGroup';
import SummaryInfo from './SummaryInfo/SummaryInfo';

function DetailPage() {
  return (
    <div className='wrap max-w-6xl mx-auto my-0 border-orange-700 border-solid border-2'>
      <ImgGroup />
      <SummaryInfo />
    </div>
  );
}

export default DetailPage;