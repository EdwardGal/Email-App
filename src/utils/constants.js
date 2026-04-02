const TOAST_DURATION = 3000;
const TOOLBAR_OFFSET_LEFT = 8;
const IMAGE_PLACEHOLDER = 'placeholder.png';
const SANDBOX_STORAGE_KEY = 'email_builder:sandbox:v1';
const STORAGE_STATE = {
  EMPTY: 'empty',
  OK: 'ok',
  CORRUPTED: 'corrupted',
};

const DOWNLOAD_FILENAME = 'email.html';
const HTML_MIME_TYPE = 'text/html;charset=utf-8';

const PREVIEW_SCROLLBAR_HIDDEN = `
    html, body { scrollbar-width: none; -ms-overflow-style: none; }
    html::-webkit-scrollbar, body::-webkit-scrollbar { display: none; }
  `;

const PREVIEW_DARK_THEME_STYLE = `
    html, body {
      background: #131415 !important;
      color: #ffffff !important;
    }

    :where(p, span, div, a, h1, h2, h3, h4, h5, h6, td, th, li, strong, b, i, em) {
      color: #ffffff !important;
    }
  `;

const TYPOGRAPH_LOCALE = ['ru', 'en-US'];
const TYPOGRAPH_RULES = [
  'common/punctuation/quote',
  'common/punctuation/dash',
  'common/nbsp/afterShortWord',
];
const ATTRIBUTES_TO_STRIP = ['contenteditable', 'data-editable'];

const VIEWPORT = { DESKTOP: 'desktop', MOBILE: 'mobile' };
const PREVIEW_ACTIONS = [
  { action: 'desktop', icon: 'desktop_windows', title: 'Десктоп' },
  { action: 'mobile', icon: 'phone_iphone', title: 'Мобильное устройство' },
  { action: 'close', icon: 'close', title: 'Закрыть' },
];

const BASE_BUTTONS = [
  { action: 'copy', icon: 'content_copy', title: 'Дублировать блок' },
  { action: 'delete', icon: 'delete', title: 'Удалить блок' },
];

const TOOLBAR_TYPE_TEXT = [
  { action: 'bold', icon: 'format_bold', title: 'Полужирный' },
  { action: 'italic', icon: 'format_italic', title: 'Курсив' },
  { action: 'unlink', icon: 'link_off', title: 'Удалить ссылку' },
  { action: 'link', icon: 'link', title: 'Добавить ссылку' },
  ...BASE_BUTTONS,
];

const TOOLBAR_TYPE_IMAGE = [...BASE_BUTTONS];

const HEADER_ACTIONS = [
  { action: 'result', icon: 'code', label: 'Результат', title: 'Получить HTML' },
  { action: 'preview', icon: 'visibility', label: 'Предпросмотр', title: 'Предпросмотр письма' },
  {
    action: 'restore',
    icon: 'restore',
    label: 'Восстановить',
    title: 'Восстановить из сохранения',
  },
  { action: 'reset', icon: 'restart_alt', label: 'Сброс', title: 'Сброс настроек' },
];

const MENU_DATA = [
  {
    category: 'контент',
    icon: 'edit_note',
    elems: [
      { type: 'text', template: 'block', label: 'Текст', icon: 'text_fields' },
      { type: 'title', template: 'block', label: 'Заголовок', icon: 'title' },
      { type: 'cardTitle', template: 'block', label: 'Заголовок карточки', icon: 'title' },
      { type: 'spacer', template: 'block', label: 'Разделитель', icon: 'space_bar' },
      { type: 'image', template: 'block', label: 'Изображение', icon: 'image' },
      { type: 'imagelink', template: 'block', label: 'Изображение c ссылкой', icon: 'link' },
      { type: 'imagebg', template: 'block', label: 'Изображение c фоном', icon: 'wallpaper' },
      { type: 'button', template: 'block', label: 'кнопка', icon: 'smart_button' },
    ],
  },
  {
    category: 'блоки',
    icon: 'view_quilt',
    elems: [
      { type: 'headerv1', template: 'block', label: 'хеадер v.1', icon: 'view_agenda' },
      { type: 'headerv2', template: 'block', label: 'хеадер v.2', icon: 'view_agenda' },
      { type: 'headerv3', template: 'block', label: 'хеадер v.3', icon: 'view_agenda' },
      { type: 'cardv1', template: 'block', label: 'card v.1', icon: 'credit_card' },
      { type: 'cardv2', template: 'block', label: 'card v.2', icon: 'credit_card' },
      { type: 'cardv3', template: 'block', label: 'card v.3', icon: 'credit_card' },
      { type: 'footer', template: 'block', label: 'footer', icon: 'vertical_align_bottom' },
      { type: 'footerv2', template: 'block', label: 'footer v.2', icon: 'vertical_align_bottom' },
    ],
  },
  {
    category: 'шаблоны',
    icon: 'description',
    elems: [
      { type: 'templatev1', template: 'template', label: 'шаблон v.1', icon: 'description' },
      { type: 'templatev2', template: 'template', label: 'шаблон v.2', icon: 'description' },
      { type: 'temav1', template: 'template', label: 'тема v.1', icon: 'palette' },
      { type: 'kinov1', template: 'template', label: 'кино v.1', icon: 'movie' },
    ],
  },
];

const DND_TYPES = {
  SANDBOX_ITEM: 'sandbox-item',
};

const MENU_DRAG_KIND = {
  BLOCK: 'block',
  TEMPLATE: 'template',
};

const TEMPLATE_MODE_DARK = 'dark';

const EDITABLE_SELECTOR = '[data-editable]';
const TOOLBAR_ACTION_SELECTOR = '[data-action]';
const PROMPT_INPUT_ID = 'prompt-input';
const INPUT_SYNC_DELAY_MS = 120;

export {
  TOAST_DURATION,
  TOOLBAR_OFFSET_LEFT,
  IMAGE_PLACEHOLDER,
  SANDBOX_STORAGE_KEY,
  DOWNLOAD_FILENAME,
  HTML_MIME_TYPE,
  PREVIEW_SCROLLBAR_HIDDEN,
  PREVIEW_DARK_THEME_STYLE,
  TYPOGRAPH_LOCALE,
  TYPOGRAPH_RULES,
  ATTRIBUTES_TO_STRIP,
  VIEWPORT,
  PREVIEW_ACTIONS,
  BASE_BUTTONS,
  TOOLBAR_TYPE_TEXT,
  TOOLBAR_TYPE_IMAGE,
  HEADER_ACTIONS,
  MENU_DATA,
  DND_TYPES,
  MENU_DRAG_KIND,
  TEMPLATE_MODE_DARK,
  EDITABLE_SELECTOR,
  TOOLBAR_ACTION_SELECTOR,
  PROMPT_INPUT_ID,
  INPUT_SYNC_DELAY_MS,
  STORAGE_STATE,
};
