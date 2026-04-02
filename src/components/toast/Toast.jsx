import { useEffect, useState } from 'react';
import styles from './toast.module.scss';
import { TOAST_DURATION } from '../../utils/constants';



export const Toast = ({ type, message, setToast }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(null);
    }, TOAST_DURATION);
    return () => clearTimeout(timer);
  }, [type, message]);

  return (
    <div
      className={`${styles.toast} ${type === 'error' ? styles.toast_error : styles.toast_success}`}
      role="alert"
      aria-live="polite"
    >
      {message}
    </div>
  );
};
