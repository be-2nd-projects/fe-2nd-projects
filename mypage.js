import React from 'react';
import './index.css';

const mypage = () => {
    return (
        <div class="background">
          <div class="header">
            <h1>마이페이지</h1>
            <h3>개인정보 수정</h3>  
          </div>   
          <div class="body">
            <h3 style={{textAlign:'left'}}>예약한 공간</h3>
            <h3 style={{textAlign:'right'}}>예약취소</h3>
            <h3 style={{textAlign:'left'}}>Q&A</h3>
          </div>
          <h3>찜한 목록</h3>
          <div class="list"></div>
        </div>
    );
};

export default mypage;