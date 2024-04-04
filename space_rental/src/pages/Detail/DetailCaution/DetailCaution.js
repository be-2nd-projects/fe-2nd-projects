import React from 'react';
import { SectionContainer, SectionContent, SectionTitle } from '../DetailInfo/DetailInfoStyle';

function DetailCaution() {
  return (
    <SectionContainer>
      <SectionTitle>주의사항</SectionTitle>
      <SectionContent>
        - 대여 시간보다 적게 사용 하더라도 대관비는 환불되지 않습니다.<br />

        - 기물 파손 및 청소 등의 사유로 보증금을 호스트에게 입금하여야 합니다.<br />

        - 무료 주차 가능하나, 주차 대수 제한이 있으니 미리 가능 여부 확인 필수<br />

        - 사용자 인원이나 사용 시간이 추가될 경우, 현장에서 추가 과금이 진행됩니다.<br />

        - 입실은 정시, 퇴실은 5분 전에 준비해서 예약 시간 안에 이용<br />

        - 시설 훼손 및 기물 파손 시 손해액을 호스트에게 배상하여야 합니다.<br />
        (CCTV는 방범/분실/기물파손/인원확인 등의 이유로 녹화됨)<br />

        - 소음민원 우려: 한적한 동네 특성 상, 시끄럽지 않고 조용한 느낌의 모임 공간<br />

        - 이용가능 인원: 최대 4인까지 이용하기에 적합한 크기의 공간 (약 10평 실내, 3평 테라스)<br />

        - 가벼운 취사 가능: 별도 환기 시스템 없어 라면같은 가벼운 종류의 음식 조리만 가능, 배달음식/포장/장보기 권장<br />

        - 출입 방법: 예약 확정 후, 입구 비밀번호 개별 문자/카톡으로 전달<br />

        - 기타 문의사항: 예약 확정 후 전달 받은 연락처로 개별 문의 가능 (문의 가능 시간: 09~23시)<br />

        - 기타 체크사항: 해당 공간은 숙박시설이 아니며, 숙박 어메니티 등이 제공되지 않음<br />
      </SectionContent>
    </SectionContainer>
  );
}

export default DetailCaution;