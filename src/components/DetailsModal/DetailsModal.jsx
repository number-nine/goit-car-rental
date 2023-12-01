import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import FullCard from 'components/FullCard';

import css from './DetailsModal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function DetailsModal(props) {
  useEffect(() => {
    function closeModalOnEsc(e) {
      if (e.key === 'Escape') {
        props.visibilityHandler(false);
      }
    }
    window.addEventListener('keydown', closeModalOnEsc);
    return () => window.removeEventListener('keydown', closeModalOnEsc);
  }, [props]);

  const handleBackdropClick = e => {
    if (e.target !== e.currentTarget) return;
    props.visibilityHandler(false);
  };

  return createPortal(
    <div className={css.Overlay} onClick={handleBackdropClick}>
      <FullCard {...props} />
    </div>,
    modalRoot
  );
}
