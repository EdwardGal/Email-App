/** Возвращает диапазон текущего выделения или null. */
const getSelectionRange = () => {
  const selection = document.getSelection();
  return selection?.rangeCount ? selection.getRangeAt(0) : null;
};

/** Есть ли непустое текстовое выделение. */
const hasTextSelection = () => {
  const selection = document.getSelection();
  if (!selection || selection.rangeCount === 0) return false;
  return selection.toString().trim().length > 0;
};

/** Находится ли выделение (или текущее, если range не передан) внутри ссылки. */
const isSelectionInsideLink = (range = getSelectionRange()) => {
  if (!range) return false;
  const node = getContextNodeFromRange(range);
  return Boolean(findAncestorByTagName(node, 'A'));
};

/** Возвращает контекстный узел диапазона (элемент, не текстовый узел). */
const getContextNodeFromRange = (range) => {
  const node = range.commonAncestorContainer;
  return node.nodeType === Node.TEXT_NODE ? node.parentNode : node;
};

/** Ищет ближайшего предка с заданным тегом. */
const findAncestorByTagName = (node, tagName) => {
  let current = node;
  const upper = (tagName || '').toUpperCase();
  while (current && current !== document.body) {
    if (current.nodeName === upper) return current;
    current = current.parentNode;
  }
  return null;
};

/** Разворачивает элемент, сохраняя его дочерние узлы на том же уровне. */
const unwrapElement = (element) => {
  if (!element?.parentNode) return false;
  const parent = element.parentNode;
  while (element.firstChild) {
    parent.insertBefore(element.firstChild, element);
  }
  element.remove();
  return true;
};

/** Оборачивает диапазон в ссылку. Может выбросить при некорректном выделении. */
const wrapRangeInLink = (range, href) => {
  const a = document.createElement('a');
  a.style.cssText = 'text-decoration: underline; color: inherit;';
  a.href = href;
  range.surroundContents(a);
};

/** Удаляет ссылку, содержащую выделение: разворачивает <a>, оставляя содержимое. */
const unwrapLink = (range) => {
  const node = getContextNodeFromRange(range);
  const anchor = findAncestorByTagName(node, 'A');
  if (!anchor) return false;
  return unwrapElement(anchor);
};

/** Оборачивает диапазон в тег (b, i и т.д.). */
const wrapRangeInTag = (range, tagName) => {
  range.surroundContents(document.createElement(tagName));
};

/** Переключает формат: если тег уже применён, снимает его; иначе — применяет. */
const toggleRangeTag = (range, tagName) => {
  if (!range) return false;
  const node = getContextNodeFromRange(range);
  const currentTag = findAncestorByTagName(node, tagName);

  if (currentTag) return unwrapElement(currentTag);
  wrapRangeInTag(range, tagName);
  return true;
};


export {
  getSelectionRange,
  hasTextSelection,
  isSelectionInsideLink,
  getContextNodeFromRange,
  findAncestorByTagName,
  wrapRangeInLink,
  unwrapLink,
  wrapRangeInTag,
  toggleRangeTag,
};
