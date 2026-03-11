/**
 * Обновляет одно поле настроек блока по id.
 */
export function updateBlockSettings(templates, blockId, key, value) {
  return templates.map((t) =>
    t.id === blockId ? { ...t, settings: { ...t.settings, [key]: value } } : t
  );
}

/**
 * Заменяет блок в списке по id (полная замена объекта блока).
 */
export function updateBlock(templates, updatedBlock) {
  return templates.map((block) =>
    block.id === updatedBlock.id ? updatedBlock : block
  );
}

/**
 * Вставляет один или несколько блоков в массив на указанный индекс.
 */
export function insertBlocksAt(templates, blocks, index) {
  const list = Array.isArray(blocks) ? blocks : [blocks];
  return [...templates.slice(0, index), ...list, ...templates.slice(index)];
}

/**
 * Удаляет блок по id.
 */
export function removeBlockById(templates, blockId) {
  return templates.filter((t) => t.id !== blockId);
}

/**
 * Возвращает индекс блока по id или -1.
 */
export function findBlockIndex(templates, blockId) {
  return templates.findIndex((t) => t.id === blockId);
}
