import Typograf from 'typograf';

const TYPOGRAPH_LOCALE = ['ru', 'en-US'];
const TYPOGRAPH_RULES = [
  'common/punctuation/quote',
  'common/punctuation/dash',
  'common/nbsp/afterShortWord',
];

const ATTRIBUTES_TO_STRIP = ['contenteditable', 'data-editable'];

const tp = new Typograf({ locale: TYPOGRAPH_LOCALE });
TYPOGRAPH_RULES.forEach((rule) => tp.enableRule(rule));

function stripAttributes(html, attributes) {
  let result = html;
  attributes.forEach((attr) => {
    result = result.replace(new RegExp(`\\s${attr}="[^"]*"`, 'gi'), '');
    result = result.replace(new RegExp(`\\s${attr}(?=\\s|>)`, 'gi'), '');
  });
  return result;
}

export const getContent = (templates) => {
  const rawContent = templates
    .map((block) => block.render(block.settings))
    .map((html) => stripAttributes(html, ATTRIBUTES_TO_STRIP))
    .join('');
  return tp.execute(rawContent, { html: true });
};
