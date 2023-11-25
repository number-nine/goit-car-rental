import { ThreeCircles } from 'react-loader-spinner';
import { createPortal } from 'react-dom';

import css from './SplashScreen.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function SplashScreen () {
  return createPortal(
    <div className={css.Overlay}>
      <ThreeCircles
        height="160"
        width="160"
        color="#ffffff"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>,
    modalRoot
  );
};

