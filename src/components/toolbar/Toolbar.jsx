import styles from './toolbar.module.scss';
import { EDITABLE_SELECTOR, TOOLBAR_OFFSET_LEFT } from '../../utils/constants';
import {
  hasTextSelection,
  getSelectionRange,
  isSelectionInsideLink,
  wrapRangeInLink,
  unwrapLink,
  toggleRangeTag,
} from '../../utils/selectionFormat';
import { useRef } from 'react';

const uuid = () =>
  crypto.randomUUID?.() ??
  `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;


const getEditableElementFromRange = (range) => {
  if (!range) return null;
  const node = range.startContainer;
  const element = node?.nodeType === Node.TEXT_NODE ? node.parentElement : node;
  return element?.closest?.(EDITABLE_SELECTOR) || null;
};




export const Toolbar = ({
  toolbarActions,
  toolbarRect,
  activeTemplate,
  templates,
  setTemplates,
  openPrompt,
  setToast,
}) => {
  const savedRangeRef = useRef(null);
  const style = {
    top: toolbarRect.top,
    left: toolbarRect.left + TOOLBAR_OFFSET_LEFT,
  };

  const syncEditableRangeToState = (range) => {
    const editableEl =
      getEditableElementFromRange(range) ||
      document.activeElement?.closest?.(EDITABLE_SELECTOR);
    if (!editableEl) return;

    const key = editableEl.getAttribute('data-editable');
    if (!key) return;

    const value = editableEl.innerHTML;
    setTemplates((prev) =>
      prev.map((t) =>
        t.id === activeTemplate.id
          ? { ...t, settings: { ...t.settings, [key]: value } }
          : t
      )
    );
  };

  const withFormatting = (tag) => {
    if (!hasTextSelection()) {
      setToast({ type: 'error', message: 'Выделите текст' });
      return;
    }
    const range = getSelectionRange();
    try {
      toggleRangeTag(range, tag);
      syncEditableRangeToState(getSelectionRange() ?? range);
    } catch {
      setToast({ type: 'error', message: 'Не удалось применить форматирование' });
    }
  };

  const withLinkSelection = (callback) => {
    if (!hasTextSelection()) {
      setToast({ type: 'error', message: 'Выделите текст' });
      return;
    }
    const range = getSelectionRange();
    callback(range);
  };

  const actions = {
    copy: () => {
      const index = templates.findIndex((t) => t.id === activeTemplate.id);
      if (index === -1) return;
      const newTemplate = { ...activeTemplate, id: uuid() };
      setTemplates((prev) => [...prev.slice(0, index + 1), newTemplate, ...prev.slice(index + 1)]);
     setToast({ type: 'success', message: 'Шаблон скопирован' });
    },
    delete: () => {
      openPrompt({
        mode: 'confirm',
        title: 'Хотите удалить шаблон?',
        onConfirm: () => {
          setTemplates((prev) => prev.filter((t) => t.id !== activeTemplate.id));
          setToast({ type: 'success', message: 'Шаблон удален' });
        },
      });
    },
    link: () => {
      withLinkSelection((range) => {
        if (isSelectionInsideLink(range)) {
          setToast({ type: 'error', message: 'В выделенном тексте есть ссылка' });
          return;
        }

        savedRangeRef.current = range.cloneRange();
        openPrompt({
          title: 'Введите ссылку',
          content: 'Введите ссылку для выделенного текста',
          onCancel: () => {
            savedRangeRef.current = null;
          },
          onConfirm: (href) => {
            if (!href) {
              setToast({ type: 'error', message: 'Ссылка не может быть пустой' });
              return;
            }
            const savedRange = savedRangeRef.current;
            if (!savedRange) return;
            try {
              wrapRangeInLink(savedRange, href);
              syncEditableRangeToState(savedRange);
              setToast({ type: 'success', message: 'Ссылка добавлена' });
            } catch {
             setToast({ type: 'error', message: 'Не удалось обернуть выделение в ссылку' });
            } finally {
              savedRangeRef.current = null;
            }
          },
        });
      });
    },
    unlink: () => {
      withLinkSelection((range) => {
        if (!unwrapLink(range)) {
          setToast({ type: 'error', message: 'Выделение не содержит ссылку' });
          return;
        }
        syncEditableRangeToState(range);
        setToast({ type: 'success', message: 'Ссылка удалена' });
      });
    },
    bold: () => withFormatting('b'),
    italic: () => withFormatting('i'),
  };

  return (
    <div className={styles.toolbar} style={style}>
      {activeTemplate && toolbarActions.map(({ action, icon, title }) => (
        <button
          key={action}
          className={styles.toolbar__btn}
          type="button"
          data-action={action}
          title={title}
          aria-label={title}
          onClick={() => actions[action]?.()}
        >
          <span className={`${styles['toolbar__btn-icon']} material-symbols-outlined`}>{icon}</span>
        </button>
      ))}
    </div>
  );
};
