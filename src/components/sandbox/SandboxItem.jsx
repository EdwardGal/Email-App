import styles from './sandbox.module.scss';
import { memo, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useDraggable, useDroppable } from '@dnd-kit/react';
import { BLOCKS_REGISTRY } from '../../patterns/blocksRegistry';
import { DND_TYPES } from '../../utils/dndSandbox';
import {
  EDITABLE_SELECTOR,
  TOOLBAR_ACTION_SELECTOR,
  PROMPT_INPUT_ID,
  INPUT_SYNC_DELAY_MS,
} from '../../utils/constants';
import {
  insertPlainTextAtSelection,
  shouldRetainSandboxEditingFocus,
} from '../../utils/contentEditableDom';

const getEditableTarget = (event) => event.target.closest(EDITABLE_SELECTOR);

export const SandboxItem = memo(({ id, type, settings, toolbarActions, selectedTemplate, setTemplates, setSelectedTemplate }) => {
  const blockDefinition = BLOCKS_REGISTRY[type.trim()];
  const mergedSettings = {
    ...blockDefinition?.settings,
    ...settings,
  };
  const html = blockDefinition?.render(mergedSettings);

  const contentRef = useRef(null);
  const debounceTimerRef = useRef(null);
  const pendingEditRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);

  useLayoutEffect(() => {
    if (!isEditing && contentRef.current) {
      contentRef.current.innerHTML = html ?? '';
    }
  }, [html, isEditing]);

  const clearDebounceTimer = () => {
    if (!debounceTimerRef.current) return;
    clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = null;
  };

  useEffect(() => () => clearDebounceTimer(), []);

  const { ref: dragRef, handleRef } = useDraggable({
    id,
    data: { type: DND_TYPES.SANDBOX_ITEM, templateId: id },
  });

  const { ref: dropRef } = useDroppable({
    id: `sandbox-item-${id}`,
    data: { type: DND_TYPES.SANDBOX_ITEM, templateId: id },
  });

  const setBlockRef = (node) => { dragRef(node); dropRef(node); };

  const updateTemplateSetting = (key, value) => {
    if (!key) return;
    setTemplates((prev) => prev.map((t) => (
      t.id === id
        ? { ...t, settings: { ...t.settings, [key]: value } }
        : t
    )));
  };

  const flushPendingEdit = () => {
    const pending = pendingEditRef.current;
    if (!pending) return;

    updateTemplateSetting(pending.key, pending.value);
    pendingEditRef.current = null;
  };

  const queueEditableSync = (editableEl) => {
    if (!editableEl) return;

    const key = editableEl.getAttribute('data-editable');
    if (!key) return;

    pendingEditRef.current = { key, value: editableEl.innerHTML };

    clearDebounceTimer();
    debounceTimerRef.current = setTimeout(() => {
      flushPendingEdit();
    }, INPUT_SYNC_DELAY_MS);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    setSelectedTemplate({
      id,
      toolbarActions,
      toolbarRect: {
        top: rect.top,
        left: rect.right,
      },
    });
  };

  const onInputHandler = (e) => {
    const el = getEditableTarget(e);
    if (!el) return;
    queueEditableSync(el);
  };

  const onPasteHandler = (e) => {
    const el = getEditableTarget(e);
    if (!el) return;

    e.preventDefault();

    const plainText = e.clipboardData?.getData('text/plain') ?? '';
    insertPlainTextAtSelection(plainText);
    queueEditableSync(el);
  };

  const handleFocusCapture = (e) => {
    if (getEditableTarget(e)) {
      setIsEditing(true);
    }
  };

  const handleBlurCapture = (e) => {
    if (
      shouldRetainSandboxEditingFocus(e.currentTarget, e.relatedTarget, {
        toolbarActionSelector: TOOLBAR_ACTION_SELECTOR,
        promptInputId: PROMPT_INPUT_ID,
      })
    ) {
      return;
    }

    setIsEditing(false);
    clearDebounceTimer();
    flushPendingEdit();
  };

  return (
    <div
      ref={setBlockRef}
      className={`${styles.sandbox__block} ${selectedTemplate?.id === id ? styles.sandbox__block_active : ''}`}
      onClick={handleClick}
      onFocusCapture={handleFocusCapture}
      onBlurCapture={handleBlurCapture}
    >
      <button
        ref={handleRef}
        className={styles.sandbox__handle}
        type="button"
        aria-label="Перетащить"
      >
        <span className="material-symbols-outlined">drag_indicator</span>
      </button>
      <div
        className={styles.sandbox__preview}
        onDragStart={(e) => e.preventDefault()}
        onInput={onInputHandler}
        onPaste={onPasteHandler}
        ref={contentRef}
      />
    </div>
  );
});
