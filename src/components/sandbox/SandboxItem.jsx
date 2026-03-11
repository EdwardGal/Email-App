import { memo, useMemo, useRef, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import styles from './sandbox.module.scss';
import { NO_SYNC_FOCUS_SELECTOR, EDITABLE_SELECTOR } from '../../utils/constants';

const DRAG_TYPE = 'SANDBOX_ITEM';

const SandboxItemContent = memo(({ template }) => {
  const { settings, render } = template;
  const html = useMemo(() => render(settings), [settings, render]);
  return (
    <div
      className={styles.sandbox__html}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
});

export const SandboxItem = memo(({ template, index, isSelected, onSyncBlock }) => {
  const { id, type } = template;
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !onSyncBlock) return;
    const handleBlur = (e) => {
      const editable = e.target.closest?.(EDITABLE_SELECTOR);
      if (!editable) return;
      const key = editable.getAttribute('data-editable');
      if (!key) return;
      if (e.relatedTarget?.closest?.(NO_SYNC_FOCUS_SELECTOR)) return;
      onSyncBlock(id, key, editable.innerHTML);
    };
    root.addEventListener('blur', handleBlur, true);
    return () => root.removeEventListener('blur', handleBlur, true);
  }, [id, onSyncBlock]);

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: DRAG_TYPE,
      item: () => ({ id, index }),
      collect: (monitor) => ({ isDragging: monitor.isDragging() }),
    }),
    [id, index]
  );

  return (
    <div
      ref={rootRef}
      className={`${styles.sandbox__item} ${
        isSelected ? styles['is-active'] : ''
      } ${isDragging ? styles.dragging : ''}`}
      id={id}
      data-type={type}
      data-sandbox-item
      role="button"
      tabIndex={0}
    >
      <button
        ref={drag}
        className={styles.sandbox__handle}
        type="button"
        data-action="handle"
        aria-label="Перетащить"
      >
        <span className="material-symbols-outlined">drag_indicator</span>
      </button>
      <SandboxItemContent template={template} />
    </div>
  );
});
