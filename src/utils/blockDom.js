import { EDITABLE_SELECTOR } from './constants';

export function getBlockElement(blockId) {
  return blockId ? document.getElementById(blockId) : null;
}

export function getEditableInBlock(blockEl) {
  return blockEl?.querySelector(EDITABLE_SELECTOR) ?? null;
}

export function getEditableContainingNode(blockEl, node) {
  if (!blockEl || !node) return null;
  const editables = blockEl.querySelectorAll(EDITABLE_SELECTOR);
  for (const el of editables) {
    if (el.contains(node)) return el;
  }
  return null;
}

export function isNodeInBlock(node, blockEl) {
  return !!(node && blockEl && blockEl.contains(node));
}

export function isAnchorInBlockEditables(blockEl, anchorNode) {
  if (!blockEl || !anchorNode) return false;
  const editables = blockEl.querySelectorAll(EDITABLE_SELECTOR);
  return Array.from(editables).some((el) => el.contains(anchorNode));
}

export function isRangeInDocument(range) {
  if (!range) return false;
  try {
    return (
      document.contains(range.startContainer) && document.contains(range.endContainer)
    );
  } catch {
    return false;
  }
}
