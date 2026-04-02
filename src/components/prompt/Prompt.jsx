import { useEffect, useRef, useState } from 'react';
import styles from './prompt.module.scss';


export const PromptModal = ({ mode = 'prompt', title, content, onCancel, onConfirm }) => {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const dialogRef = useRef(null);
  const closeTimerRef = useRef(null);
  const closeDurationMs = 220;

  useEffect(() => {
    const rafId = requestAnimationFrame(() => setIsOpen(true));
    return () => {
      cancelAnimationFrame(rafId);
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const closeWithAnimation = (callback) => {
    if (isClosing) return;
    setIsClosing(true);
    closeTimerRef.current = setTimeout(() => callback(), closeDurationMs);
  };

  const getFocusableElements = () => {
    const container = dialogRef.current;
    if (!container) return [];

    return [...container.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')]
      .filter((element) => !element.hasAttribute('disabled'));
  };

  const onKeyDownHandler = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeWithAnimation(handleCancel);
      return;
    }

    if (event.key !== 'Tab') return;

    const focusable = getFocusableElements();
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  };

  useEffect(() => {
    const focusable = getFocusableElements();
    focusable[0]?.focus();
  }, [mode]);

  const handleConfirm = () => {
    const nextValue = value;
    closeWithAnimation(() => {
      onConfirm(nextValue);
      setValue('');
    });
  };

  const handleCancel = () => {
    onCancel();
    setValue('');
  };

  return (
    <div
      className={`${styles.prompt} ${isOpen ? styles['is-open'] : ''} ${isClosing ? styles['is-closing'] : ''}`}
      onClick={() => closeWithAnimation(handleCancel)}
      onKeyDown={onKeyDownHandler}
    >
      <div
        ref={dialogRef}
        className={styles.prompt__content}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
      >
        <label htmlFor="prompt-input">{title}</label>
        {mode === 'prompt' && <input
          className={styles.prompt__input}
          id="prompt-input"
          onChange={({ target }) => setValue(target.value)}
          value={value}
          placeholder={content}
          autoFocus
        />}
        <div className={styles.prompt__actions}>
          <button onClick={() => closeWithAnimation(handleCancel)} type="button">Отмена</button>
          <button onClick={handleConfirm} type="button">OK</button>
        </div>
      </div>
    </div>
  );
};
