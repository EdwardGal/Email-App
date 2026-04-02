import { BLOCKS_REGISTRY } from '../patterns/blocksRegistry';
import { TEMPLATES_REGISTRY } from '../patterns/templatesRegistry';
import { DND_TYPES, MENU_DRAG_KIND, TEMPLATE_MODE_DARK } from './constants';

export { DND_TYPES, MENU_DRAG_KIND };

const uuid = () =>
  crypto.randomUUID?.() ??
  `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;

/**
 * Определяет, что перетащили из меню, и возвращает массив записей для вставки в песочницу.
 * Блок — из BLOCKS_REGISTRY; шаблон — массив блоков из TEMPLATES_REGISTRY[type].blocks.
 */
export const getMenuDragInsertItems = (sourceData) => {

  if (!sourceData?.type) return null;

  const { type, pattern } = sourceData;

  if (pattern === MENU_DRAG_KIND.TEMPLATE) {
    const tpl = TEMPLATES_REGISTRY[type];
    if (!tpl?.blocks?.length) return null;
    return tpl.blocks.map((block) => {
      const { render, ...rest } = block;
      const blockType = block.type ?? type;
      return { ...rest, id: uuid(), type: blockType, mode: tpl.mode };
    });
  }

  if (pattern === MENU_DRAG_KIND.BLOCK || pattern == null) {
    const def = BLOCKS_REGISTRY[type];
    if (!def) return null;
    const { render, ...rest } = def;
    return [{ ...rest, id: uuid(), type, mode: 'light' }];
  }

  return null;
};

export const reorderTemplates = (templates, fromId, toId) => {
  if (!fromId || !toId || fromId === toId) return templates;

  const fromIndex = templates.findIndex((t) => t.id === fromId);
  const toIndex = templates.findIndex((t) => t.id === toId);
  if (fromIndex === -1 || toIndex === -1) return templates;

  const next = [...templates];
  const [moved] = next.splice(fromIndex, 1);
  next.splice(toIndex, 0, moved);
  return next;
};

export const hasDarkTemplates = (templates) =>
  templates.some((t) => t.mode === TEMPLATE_MODE_DARK);

/**
 * Вставка из меню по данным source.data ({ type, template }).
 */
export const insertTemplateFromMenu = (templates, sourceData, insertIndex) => {
  const items = getMenuDragInsertItems(sourceData);
  if (!items?.length) return templates;

  const index = insertIndex ?? templates.length;
  const next = [...templates];
  next.splice(index, 0, ...items);
  return next;
};
