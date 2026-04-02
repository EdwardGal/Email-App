import styles from './preview.module.scss';
import { PREVIEW_ACTIONS } from '../../utils/constants';
import { getResult } from '../../result/result';
import { useEffect, useMemo, useRef, useState } from 'react';
import { VIEWPORT } from '../../utils/constants';
import { hasDarkTemplates } from '../../utils/dndSandbox';

export const Preview = ({ setPreview, templates }) => {
  const [viewport, setViewport] = useState(VIEWPORT.DESKTOP);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const dialogRef = useRef(null);
  const isDarkMode = hasDarkTemplates(templates);


  console.log(hasDarkTemplates(templates));
  


  const iframeSrcDoc = useMemo(
    () => getResult('', templates, { forPreview: true, darkMode: isDarkMode }),
    [templates, isDarkMode]
  );

  useEffect(() => {
    const rafId = requestAnimationFrame(() => setIsOpen(true));
    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  const getFocusableElements = () => {
    const container = dialogRef.current;
    if (!container) return [];
    return [...container.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')]
      .filter((element) => !element.hasAttribute('disabled'));
  };

  useEffect(() => {
    const focusable = getFocusableElements();
    focusable[0]?.focus();
  }, []);

  const closePreview = () => {
    if (isClosing) return;

    setIsClosing(true);
  };

  const onOverlayTransitionEnd = (event) => {
    if (!isClosing || event.target !== event.currentTarget) return;
    if (event.propertyName === 'opacity') {
      setPreview(false);
    }
  };

  const onClickHandler = (action) => {
    if (action === 'close') {
      closePreview();
      return;
    }
    setViewport(action);
  };

  const isActive = (action) => viewport === action;

  const onKeyDownHandler = (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closePreview();
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

  return (
    <div
      className={`${styles['preview-overlay']} ${isOpen ? styles['is-open'] : ''} ${isClosing ? styles['is-closing'] : ''}`}
      onClick={closePreview}
      onTransitionEnd={onOverlayTransitionEnd}
      onKeyDown={onKeyDownHandler}
    >
      <div
        ref={dialogRef}
        className={styles.preview}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Предпросмотр письма"
      >
        <div className={styles.preview__header}>
          <div className={styles['preview__title-group']}>
            <span
              className={`${styles['preview__title-icon']} material-symbols-outlined`}
            >
              visibility
            </span>
            <div>
              <div className={styles.preview__title}>Предпросмотр письма</div>
              <div className={styles.preview__subtitle}>
                Проверьте, как письмо выглядит на разных устройствах
              </div>
            </div>
          </div>
          <div className={styles.preview__actions}>
            {PREVIEW_ACTIONS.map(({ action, icon, title }) => (
              <button
                key={action}
                className={`${styles['preview__icon-button']} ${isActive(action) ? styles['is-active'] : ''}`}
                type="button"
                data-action={action}
                title={title}
                aria-label={title}
                onClick={() => onClickHandler(action)}
              >
                <span className="material-symbols-outlined">{icon}</span>
              </button>
            ))}
          </div>
        </div>
        <div className={`${styles.preview__content} ${isDarkMode ? styles.preview__content_dark : ''}`}>
          <iframe
            className={`${styles.preview__frame} ${viewport === VIEWPORT.MOBILE ? styles['preview__frame_mobile'] : ''}`}
            title="Предпросмотр письма"
            srcDoc={iframeSrcDoc}
          />
        </div>
      </div>
    </div>
  );
};
