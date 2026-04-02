/**
 * Вставка plain text в текущую selection в contenteditable (без HTML из буфера).
 * Переносы строк превращаются в <br>.
 */
export const insertPlainTextAtSelection = (text) => {
  const selection = window.getSelection?.();
  if (!selection || selection.rangeCount === 0) return;

  const range = selection.getRangeAt(0);
  range.deleteContents();

  const normalized = text.replace(/\r\n?/g, '\n');
  const lines = normalized.split('\n');
  const fragment = document.createDocumentFragment();

  lines.forEach((line, index) => {
    fragment.appendChild(document.createTextNode(line));
    if (index < lines.length - 1) {
      fragment.appendChild(document.createElement('br'));
    }
  });

  const lastInsertedNode = fragment.lastChild;
  range.insertNode(fragment);

  if (!lastInsertedNode) return;

  const caretRange = document.createRange();
  caretRange.setStartAfter(lastInsertedNode);
  caretRange.collapse(true);
  selection.removeAllRanges();
  selection.addRange(caretRange);
};

/**
 * Не сбрасывать режим редактирования блока, если фокус ушёл внутрь блока, в тулбар или в prompt.
 */
export const shouldRetainSandboxEditingFocus = (blockRoot, relatedTarget, options) => {
  const { toolbarActionSelector, promptInputId } = options;
  if (relatedTarget && blockRoot.contains(relatedTarget)) return true;
  if (relatedTarget?.closest?.(toolbarActionSelector)) return true;
  if (relatedTarget?.id === promptInputId) return true;
  return false;
};
