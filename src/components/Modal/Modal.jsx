import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onCloseModal, imageUrl }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onCloseModal();
    }
  };

  const handleBackDropClick = e => {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  };

  return createPortal(
    <div className={s.Overlay} onClick={e => handleBackDropClick(e)}>
      <div className={Modal}>
        <div className={s.ModalButtonWrapper} onClick={() => onCloseModal()}>
          <AiOutlineCloseCircle color="white" size="25px" />
        </div>
        <img src={imageUrl} alt="" />
      </div>
    </div>,
    modalRoot,
  );
}
