import { memo } from 'react';
import styles from './header.module.scss';
import { HEADER_ACTIONS } from '../../utils/constants';
import { hasDarkTemplates } from '../../utils/dndSandbox';
import { getSandboxStorageState, STORAGE_STATE, clearSandboxStorage } from '../../utils/sandboxStorage';
import { getResult, getDoc } from '../../result/result';




export const Header = memo(({ templates, setToast, setPreview, setTemplates, openPrompt, hasSavedSandbox, setHasSavedSandbox }) => {

  const isSandboxEmpty = templates.length === 0;

  const actionHandlers = {
    result: () => {
      if (isSandboxEmpty) {
        setToast({ type: 'error', message: 'Песочница пуста' });
        return
      }
      openPrompt({
        mode: 'prompt',
        title: 'Введите preheader',
        content: 'preheader',
        onConfirm: (preheader) => {
          const result = getResult(preheader.trim(), templates, { darkMode: hasDarkTemplates(templates) });
          getDoc(result);
        },
      });
    },
    preview: () => {
      if (isSandboxEmpty) {
        setToast({ type: 'error', message: 'Песочница пуста' });
        return
      }
      setPreview(true);
    },
    restore: () => {
      const storageState = getSandboxStorageState();

      if (storageState.status === STORAGE_STATE.EMPTY) {
        setToast({ type: 'error', message: 'Нет сохраненных данных' });
        return
      }

      if (storageState.status === STORAGE_STATE.CORRUPTED) {
        setToast({ type: 'error', message: 'Сохраненные данные повреждены' });
        return;
      }

      setTemplates(storageState.data);
      setHasSavedSandbox(true);
      setToast({ type: 'success', message: 'Песочница восстановлена' });
    },

    reset: () => {
      if (isSandboxEmpty) {
        setToast({ type: 'error', message: 'Песочница пуста' });
        return
      }
      setTemplates([]);
      const isCleared = clearSandboxStorage();
      if (isCleared) setHasSavedSandbox(false);
      setToast({ type: 'success', message: 'Песочница очищена' });
    },

  };

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__title}>
          <span className={`${styles['header__title-icon']} material-symbols-outlined`}>mail</span>
          Email Builder
        </div>
        <div className={styles.header__actions}>
          {HEADER_ACTIONS.map(({ action, icon, label, title }) => (
            <button
              key={action}
              className={styles.header__btn}
              type="button"
              data-action={action}
              title={title}
              aria-label={title}
              disabled={action === 'restore' ? !hasSavedSandbox : isSandboxEmpty}
              onClick={() => actionHandlers[action]()}
            >
              <span className="material-symbols-outlined">{icon}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
});
