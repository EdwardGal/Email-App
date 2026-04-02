import Typograf from 'typograf';
import { BLOCKS_REGISTRY } from '../patterns/blocksRegistry';
import { TYPOGRAPH_LOCALE, TYPOGRAPH_RULES, ATTRIBUTES_TO_STRIP } from '../utils/constants';

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
    .map(({ type, settings, mode }) => {
      const def = BLOCKS_REGISTRY[type?.trim()];
      return def ? def.render(settings, mode) : '';
    })
    .map((html) => stripAttributes(html, ATTRIBUTES_TO_STRIP))
    .join('');
  return tp.execute(rawContent, { html: true });
};
