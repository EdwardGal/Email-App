const BASE_BUTTONS = [
  { action: 'copy', icon: 'content_copy', title: 'Дублировать блок' },
  { action: 'delete', icon: 'delete', title: 'Удалить блок' },
];

export const TEXT_BUTTONS = [
  { action: 'bold', icon: 'format_bold', title: 'Полужирный' },
  { action: 'italic', icon: 'format_italic', title: 'Курсив' },
  { action: 'unlink', icon: 'link_off', title: 'Удалить ссылку' },
  { action: 'link', icon: 'link', title: 'Добавить ссылку' },
  ...BASE_BUTTONS,
];

export const IMAGE_BUTTONS = [...BASE_BUTTONS];

/** Маппинг toolbarPreset блока → массив кнопок тулбара */
export const TOOLBAR_PRESETS = {
  text: TEXT_BUTTONS,
  image: IMAGE_BUTTONS,
};
