/**
 * Возвращает обработчик, вызывающий функцию по ключу type из handlersMap.
 * @param {Record<string, () => void>} handlersMap
 * @returns {(type: string) => void}
 */
export function createActionHandler(handlersMap) {
  return (type) => {
    handlersMap[type]?.();
  };
}

/**
 * Из события клика по кнопке или её потомку возвращает data-action кнопки.
 * @param {Event} evt
 * @returns {string | undefined}
 */
export function getButtonAction(evt) {
  const button = evt.target?.closest?.('button');
  return button?.dataset?.action;
}

/**
 * Перемещает элемент в массиве с fromIndex на toIndex.
 * @param {Array} list
 * @param {number} fromIndex
 * @param {number} toIndex
 * @returns {Array}
 */
export function moveItem(list, fromIndex, toIndex) {
  if (fromIndex === toIndex) return list;
  const copy = [...list];
  const [removed] = copy.splice(fromIndex, 1);
  copy.splice(toIndex, 0, removed);
  return copy;
}

/**
 * Безопасный вызов колбэка.
 * @param {Function | undefined} fn
 * @param {...*} args
 */
export function callSafe(fn, ...args) {
  if (typeof fn === 'function') fn(...args);
}
