import { BLOCKS } from '../templates/blocksRegistry';
import { STORAGE_KEY } from './constants';

function hydrate(saved) {
  if (!Array.isArray(saved)) return [];
  return saved
    .map((item) => {
      const factory = BLOCKS[item.type];
      if (!factory) return null;
      const base = typeof factory === 'function' ? factory() : factory;
      return {
        ...base,
        id: item.id,
        type: item.type,
        settings: { ...base.settings, ...item.settings },
      };
    })
    .filter(Boolean);
}

function serialize(templates, isDark) {
  const data = templates.map(({ id, type, settings }) => ({ id, type, settings }));
  return JSON.stringify({
    templates: data,
    isDark: Boolean(isDark),
  });
}

/**
 * Загружает состояние из localStorage. Возвращает { templates, isDark }.
 * Поддерживает старый формат (массив шаблонов или только { templates }).
 */
export function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { templates: [], isDark: false };
    }

    const parsed = JSON.parse(raw);

    if (Array.isArray(parsed)) {
      return { templates: hydrate(parsed), isDark: false };
    }

    if (parsed && Array.isArray(parsed.templates)) {
      return {
        templates: hydrate(parsed.templates),
        isDark: Boolean(parsed.isDark),
      };
    }

    return { templates: [], isDark: false };
  } catch {
    return { templates: [], isDark: false };
  }
}

/**
 * Сохраняет шаблоны и флаг темы isDark в localStorage.
 */
export function save(templates, isDark) {
  try {
    localStorage.setItem(STORAGE_KEY, serialize(templates, isDark));
  } catch {
    // игнорируем ошибки доступа к localStorage
  }
}

export function clear() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // игнорируем ошибки доступа к localStorage
  }
}
