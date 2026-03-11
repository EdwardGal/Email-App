import { useState, useMemo } from 'react';
import { getResult } from '../../result/result';
import styles from './preview.module.scss';
import { getButtonAction, callSafe } from '../../utils/utils';

const VIEWPORT = { DESKTOP: 'desktop', MOBILE: 'mobile' };

const PREVIEW_ACTIONS = [
  { action: 'desktop', icon: 'desktop_windows', title: 'Десктоп' },
  { action: 'mobile', icon: 'phone_iphone', title: 'Мобильное устройство' },
  { action: 'close', icon: 'close', title: 'Закрыть' },
];

export const Preview = ({ preview, templates, isDark, onClose }) => {
  const [viewport, setViewport] = useState(VIEWPORT.DESKTOP);

  const iframeHtml = useMemo(() => {
    if (!preview || !templates?.length) return '';
    return getResult('', templates, { forPreview: true, isDark });
  }, [preview, templates, isDark]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) callSafe(onClose);
  };

  const handleActionClick = (e) => {
    const action = getButtonAction(e);
    if (action === 'close') callSafe(onClose);
    else if (action === VIEWPORT.DESKTOP) setViewport(VIEWPORT.DESKTOP);
    else if (action === VIEWPORT.MOBILE) setViewport(VIEWPORT.MOBILE);
  };

  const isActive = (action) => viewport === action;

  return (
    <div
      className={`${styles['preview-overlay']} ${preview ? styles['is-open'] : ''}`}
      onClick={handleOverlayClick}
    >
      <div className={styles.preview} onClick={(e) => e.stopPropagation()}>
        <header className={styles.preview__appbar}>
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
          <div className={styles.preview__actions} onClick={handleActionClick}>
            {PREVIEW_ACTIONS.map(({ action, icon, title }) => (
              <button
                key={action}
                className={`${styles['preview__icon-button']} ${
                  isActive(action) ? styles['is-active'] : ''
                }`}
                type="button"
                data-action={action}
                title={title}
              >
                <span className="material-symbols-outlined">{icon}</span>
              </button>
            ))}
          </div>
        </header>
        <main className={styles.preview__content}>
          <iframe
            className={`${styles.preview__frame} ${
              viewport === VIEWPORT.MOBILE ? styles['preview__frame_mobile'] : ''
            }`}
            title="Предпросмотр письма"
            srcDoc={iframeHtml}
          />
        </main>
      </div>
    </div>
  );
};
