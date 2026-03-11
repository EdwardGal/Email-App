import { useState } from 'react';
import { getDoc, getResult } from '../../result/result';
import styles from './header.module.scss';
import { HeaderItem } from './HeaderItem';
import { ConfirmAlert } from '../alerts/Confirm';
import { Preview } from '../preview/Preview';
import { createActionHandler, callSafe } from '../../utils/utils';
import { STORAGE_KEY } from '../../utils/constants';

const PREHEADER_DIALOG = {
  mode: 'prompt',
  title: 'Укажите preheader',
  confirmLabel: 'Добавить',
  cancelLabel: 'Отмена',
  placeholder: 'Ваш прехеадер тут',
};

const MESSAGES = {
  emptySandbox: 'Песочница пуста',
  noSavedData: 'Нет сохраненных шаблонов',
  inputCancelled: 'Ввод отменён',
};

export const Header = ({ data, templates, isDark, onShowToast, onRestore, onReset }) => {
  const [dialog, setDialog] = useState(null);
  const [preview, setPreview] = useState(false);

  const closeDialog = () => setDialog(null);

  const handlePreview = () => {
    if (templates.length === 0) {
      callSafe(onShowToast, MESSAGES.emptySandbox);
      return;
    }
    setPreview(true);
  };

  const handleConfirmPreheader = (preheader) => {
    if (preheader?.trim()) {
      const result = getResult(preheader.trim(), templates, { isDark });
      getDoc(result);
    }
    closeDialog();
  };

  const handleCancelPreheader = () => {
    closeDialog();
    callSafe(onShowToast, MESSAGES.inputCancelled);
  };

  const onClickEvent = createActionHandler({
    result: () => {
      if (templates.length === 0) {
        callSafe(onShowToast, MESSAGES.emptySandbox);
        return;
      }
      setDialog('preheader');
    },
    restore: () => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        callSafe(onShowToast, MESSAGES.noSavedData);
        return;
      }
      callSafe(onRestore);
    },
    reset: () => callSafe(onReset),
    preview: handlePreview,
  });

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.header__title}>
          <span className={`material-symbols-outlined ${styles['header__title-icon']}`}>
            mail
          </span>
          Email Builder
        </h1>
        <div className={styles.header__actions}>
          {data.map((button) => (
            <HeaderItem key={button.action} {...button} onClick={onClickEvent} />
          ))}
        </div>
      </header>

      {dialog === 'preheader' && (
        <ConfirmAlert
          {...PREHEADER_DIALOG}
          onConfirm={handleConfirmPreheader}
          onCancel={handleCancelPreheader}
        />
      )}
      <Preview
        preview={preview}
        templates={templates}
        isDark={isDark}
        onClose={() => setPreview(false)}
      />
    </>
  );
};
