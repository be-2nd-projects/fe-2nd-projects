import React from 'react';
import { SectionContainer, SectionTitle, SectionContent } from './DetailLocationStyle';
import Map from './Map';

function DetailLocation() {
  return (
    <SectionContainer>
      <SectionTitle>오시는길</SectionTitle>
      <SectionContent className='relative h-[400px]'>
        <Map />
      </SectionContent>
    </SectionContainer>
  );
}

export default DetailLocation;