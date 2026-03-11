import { useState, useRef, useEffect } from 'react';
import styles from './confirm.module.scss';
import { getButtonAction, callSafe } from '../../utils/utils';

const MODES = { alert: 'alert', prompt: 'prompt', confirm: 'confirm' };
const DEFAULT_CANCEL_LABEL = 'Отмена';

export const ConfirmAlert = ({
  mode = MODES.prompt,
  title,
  message,
  placeholder,
  defaultValue,
  confirmLabel = 'Да',
  cancelLabel = 'Нет',
  onConfirm,
  onCancel,
}) => {
  const [value, setValue] = useState(defaultValue ?? '');
  const inputRef = useRef(null);
  const isAlert = mode === MODES.alert;
  const isPrompt = mode === MODES.prompt;
  const isConfirm = mode === MODES.confirm;
  const showInput = isPrompt;
  const showCancelButton = isPrompt || isConfirm;
  const effectiveCancelLabel = isConfirm ? (cancelLabel || DEFAULT_CANCEL_LABEL) : cancelLabel;

  useEffect(() => {
    if (showInput) inputRef.current?.focus();
  }, [showInput]);

  const handleClick = (e) => {
    const action = getButtonAction(e);
    if (!action) return;
    if (action === 'confirm') {
      callSafe(onConfirm, isAlert || isConfirm ? undefined : value.trim());
    } else {
      callSafe(onCancel);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      isAlert ? callSafe(onConfirm) : callSafe(onCancel);
    }
  };

  return (
    <div
      className={styles['confirm-overlay']}
      onClick={handleOverlayClick}
      data-no-sync-focus
    >
      <div className={styles.confirm} onClick={(e) => e.stopPropagation()}>
        <div className={styles.confirm__title}>{title}</div>
        {message && <p className={styles.confirm__message}>{message}</p>}
        {showInput && (
          <input
            ref={inputRef}
            className={styles.confirm__input}
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        )}
        <div className={styles.confirm__buttons} onClick={handleClick}>
          <button className={styles.confirm__btn} type="button" data-action="confirm">
            {confirmLabel}
          </button>
          {showCancelButton && (
            <button className={styles.confirm__btn} type="button" data-action="cancel">
              {effectiveCancelLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
