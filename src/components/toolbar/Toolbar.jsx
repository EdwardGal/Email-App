import { useState, useRef, useEffect } from 'react';
import styles from './toolbar.module.scss';
import { ToolbarItem } from './ToolbarItem';
import { ConfirmAlert } from '../alerts/Confirm';
import { createActionHandler } from '../../utils/utils';
import { TOOLBAR_PRESETS } from '../../data/toolbar';
import {
  updateBlockSettings,
  insertBlocksAt,
  removeBlockById,
  findBlockIndex,
} from '../../utils/templates';
import {
  getBlockElement,
  getEditableInBlock,
  getEditableContainingNode as getEditableContainingNodeInBlock,
  isNodeInBlock,
  isAnchorInBlockEditables,
  isRangeInDocument,
} from '../../utils/blockDom';

const TOOLBAR_OFFSET_LEFT = 8;
const DEFAULT_TOOLBAR_PRESET = 'image';

const DIALOG_CONFIG = {
  link: {
    title: 'Добавить ссылку',
    placeholder: 'https://',
    defaultValue: 'https://',
  },
  noLink: {
    mode: 'alert',
    title: 'Нет выделения',
    message: 'Выделите текст, у которого нужно удалить ссылку.',
    confirmLabel: 'ОК',
  },
  noSelection: {
    mode: 'alert',
    title: 'Нет выделения',
    message: 'Выделите текст, к которому нужно добавить ссылку.',
    confirmLabel: 'ОК',
  },
  deleteBlock: {
    mode: 'confirm',
    title: 'Удалить блок?',
    message: 'Блок будет удалён. Это действие нельзя отменить.',
    confirmLabel: 'Удалить',
    cancelLabel: 'Отмена',
  },
};

export const Toolbar = ({
  templates,
  setTemplates,
  selectedBlock,
  selectedBlockPosition,
}) => {
  const [dialog, setDialog] = useState(null);
  const savedSelectionRef = useRef(null);
  const blockId = selectedBlock?.id ?? null;

  useEffect(() => {
    if (!blockId) return;
    const blockEl = getBlockElement(blockId);
    if (!blockEl) return;
    const onSelectionChange = () => {
      const sel = document.getSelection();
      if (!sel || sel.rangeCount === 0) return;
      const range = sel.getRangeAt(0);
      const anchorNode = sel.anchorNode;
      if (!isNodeInBlock(anchorNode, blockEl)) return;
      if (!isAnchorInBlockEditables(blockEl, anchorNode)) return;
      savedSelectionRef.current = {
        range: range.cloneRange(),
        collapsed: range.collapsed,
      };
    };
    document.addEventListener('selectionchange', onSelectionChange);
    return () => document.removeEventListener('selectionchange', onSelectionChange);
  }, [blockId]);

  const closeDialog = () => setDialog(null);

  const hasSavedSelection = () => {
    const saved = savedSelectionRef.current;
    return !!saved && !saved.collapsed;
  };

  const restoreSavedRange = () => {
    const saved = savedSelectionRef.current;
    if (!saved?.range || !isRangeInDocument(saved.range)) {
      savedSelectionRef.current = null;
      return false;
    }
    const sel = document.getSelection();
    if (sel) {
      sel.removeAllRanges();
      sel.addRange(saved.range);
    }
    savedSelectionRef.current = null;
    return true;
  };

  const getBlockEl = () => getBlockElement(blockId);
  const getEditable = () => getEditableInBlock(getBlockEl());
  const getEditableContainingNode = (node) =>
    getEditableContainingNodeInBlock(getBlockEl(), node);

  const focusEditableAndRestoreRange = () => {
    const saved = savedSelectionRef.current;
    const editable = saved?.range
      ? getEditableContainingNode(saved.range.startContainer) || getEditable()
      : getEditable();
    if (!editable) return;
    editable.focus();
    restoreSavedRange();
  };

  const getEditableForSync = () => {
    const sel = document.getSelection();
    return (
      (sel?.anchorNode && getEditableContainingNode(sel.anchorNode)) ||
      getEditable()
    );
  };

  const syncEditableToBlock = () => {
    const editable = getEditableForSync();
    if (!editable || !selectedBlock?.id) return;
    const key = editable.getAttribute('data-editable');
    if (!key) return;
    setTemplates((prev) =>
      updateBlockSettings(prev, selectedBlock.id, key, editable.innerHTML)
    );
  };

  const applyFormatCommand = (command) => {
    document.execCommand(command);
    syncEditableToBlock();
  };

  const handleConfirmLink = (url) => {
    if (!url?.trim()) {
      closeDialog();
      return;
    }
    const linkUrl = url.trim();
    closeDialog();
    setTimeout(() => {
      focusEditableAndRestoreRange();
      const sel = document.getSelection();
      if (sel?.rangeCount > 0 && !sel.getRangeAt(0).collapsed) {
        document.execCommand('createLink', false, linkUrl);
        syncEditableToBlock();
      }
    }, 0);
  };

  const copyBlock = () => {
    const index = findBlockIndex(templates, selectedBlock.id);
    const insertAt = index < 0 ? templates.length : index + 1;
    const copy = { ...selectedBlock, id: crypto.randomUUID() };
    setTemplates((prev) => insertBlocksAt(prev, copy, insertAt));
  };

  const removeBlock = () => {
    setTemplates((prev) => removeBlockById(prev, selectedBlock.id));
    closeDialog();
  };

  const onClickEvent = createActionHandler({
    delete: () => setDialog('deleteBlock'),
    copy: copyBlock,
    bold: () => applyFormatCommand('bold'),
    italic: () => applyFormatCommand('italic'),
    link: () => {
      if (!hasSavedSelection()) {
        setDialog('noSelection');
        return;
      }
      setDialog('link');
    },
    unlink: () => {
      if (!hasSavedSelection()) {
        setDialog('noLink');
        return;
      }
      restoreSavedRange();
      document.execCommand('unlink');
      syncEditableToBlock();
    },
  });

  const preset = selectedBlock?.toolbarPreset ?? DEFAULT_TOOLBAR_PRESET;
  const buttons = TOOLBAR_PRESETS[preset] ?? TOOLBAR_PRESETS[DEFAULT_TOOLBAR_PRESET];

  const position = {
    top: selectedBlockPosition?.top,
    left: selectedBlockPosition?.left != null ? `${selectedBlockPosition.left + TOOLBAR_OFFSET_LEFT}px` : undefined,
  };

  return (
    <>
      <div
        style={position}
        className={`${styles.toolbar} ${selectedBlock ? styles['is-visible'] : ''}`}
        data-no-sync-focus
      >
        {buttons.map((button) => (
          <ToolbarItem key={button.action} {...button} onClick={onClickEvent} />
        ))}
      </div>

      {dialog === 'link' && (
        <ConfirmAlert
          {...DIALOG_CONFIG.link}
          onConfirm={handleConfirmLink}
          onCancel={closeDialog}
        />
      )}

      {dialog === 'noLink' && (
        <ConfirmAlert
          {...DIALOG_CONFIG.noLink}
          onConfirm={closeDialog}
        />
      )}

      {dialog === 'noSelection' && (
        <ConfirmAlert
          {...DIALOG_CONFIG.noSelection}
          onConfirm={closeDialog}
        />
      )}

      {dialog === 'deleteBlock' && (
        <ConfirmAlert
          {...DIALOG_CONFIG.deleteBlock}
          onConfirm={removeBlock}
          onCancel={closeDialog}
        />
      )}
    </>
  );
};
