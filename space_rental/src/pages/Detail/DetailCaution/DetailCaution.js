import React from 'react';
import { SectionContainer, SectionContent, SectionTitle } from './DetailCautionStyle';

function DetailCaution() {
  return (
    <SectionContainer>
      <SectionTitle>주의사항</SectionTitle>
      <SectionContent>
        - 대여 시간보다 적게 사용 하더라도 대관비는 환불되지 않습니다. <br />
        - 기물 파손 및 청소 등의 사유로 보증금을 호스트에게 입금하여야 합니다.<br />
        - 사용자 인원이나 사용 시간이 추가될 경우, 현장에서 추가 과금이 진행됩니다.<br />
        - 입실은 정시, 퇴실은 5분 전에 준비해서 예약 시간 안에 이용<br />
        - 시설 훼손 및 기물 파손 시 손해액을 호스트에게 배상하여야 합니다.<br />
        - 청소 보증금 10만원/ 퇴실 전 공간정리와 분리수거 완료시 전액 환급<br />
        - 미성년자 올나잇 타임 이용불가<br />
        - 공간 내부 및 건물 주변에서 흡연 절대 불가 (위반시 보증금 전액 차감)<br />
        - 샤워시설/침구류 없음 (숙박시설이 아니라 양해 부탁드립니다.)<br />
        - 애완동물 동반 입장은 불가능한 점 양해 부탁드립니다.
      </SectionContent>
    </SectionContainer>
  );
}

export default DetailCaution;