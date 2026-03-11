import { useEffect } from 'react';
import styles from './toast.module.scss';
import { TOAST_DURATION_MS } from '../../utils/constants';

export const Toast = ({ message, visible, onClose, duration = TOAST_DURATION_MS }) => {
  useEffect(() => {
    if (!visible || !onClose || !duration) return;
    const id = setTimeout(onClose, duration);
    return () => clearTimeout(id);
  }, [visible, onClose, duration]);

  if (!visible || !message) return null;

  return (
    <div className={styles.toast} role="status" aria-live="polite">
      {message}
    </div>
  );
};
