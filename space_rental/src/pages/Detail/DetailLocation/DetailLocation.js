import React from 'react';
import { SectionContainer, SectionTitle, SectionContent } from './DetailLocationStyle';

function DetailLocation() {
  return (
    <SectionContainer>
      <SectionTitle>오시는길</SectionTitle>
      <SectionContent className='h-[400px]'>
        지도 영역
      </SectionContent>
    </SectionContainer>
  );
}

export default DetailLocation;