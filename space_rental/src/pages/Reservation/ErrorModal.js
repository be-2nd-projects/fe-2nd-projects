import React from 'react';
import Modal from 'react-modal';

const ErrorModal = ({modalIsOpen,closeModal,errorMessage}) => {

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      };

    return (
      <>
           <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="error"
      >
                    <p>{errorMessage}</p>
            <button onClick={closeModal}>닫기</button>
      </Modal>
            </>
    );
};

export default ErrorModal;