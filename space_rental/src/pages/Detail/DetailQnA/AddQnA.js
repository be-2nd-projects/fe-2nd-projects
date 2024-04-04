import React from 'react';

function AddQnA() {
  return (
    <div className='modalContainer'>
      <div className='modalWrap'>
        <div>
          <label htmlFor='qnaTitle'>문의제목</label>
          <input type='text' id='qnaTitle' placeholder='문의 제목' />
        </div>

        <div>
          <textarea></textarea>
        </div>
      </div>
    </div>
  );
}

export default AddQnA;