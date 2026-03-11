import { headerv3 } from '../blocks/headerv3.js';
import { footerv2 } from '../blocks/footerv2.js';
import { spacer } from '../blocks/spacer.js';
import { text } from '../blocks/text.js';
import { imagelink } from '../blocks/imagelink.js';
import { title } from '../blocks/title.js';

let isDark = true;

export const kinov1 = () => {
  return {
    isDark: true,
    blocks: [
      { ...headerv3(), type: 'headerv3' },
      { ...title(isDark), type: 'title' },
      { ...text(isDark), type: 'text' },
      { ...spacer(), type: 'spacer' },
      { ...title(isDark), type: 'title' },
      { ...imagelink(), type: 'imagelink' },
      { ...spacer(), type: 'spacer' },
      { ...imagelink(), type: 'imagelink' },
      { ...spacer(), type: 'spacer' },
      { ...title(isDark), type: 'title' },
      { ...imagelink(), type: 'imagelink' },
      { ...spacer(), type: 'spacer' },
      { ...imagelink(), type: 'imagelink' },
      { ...spacer(), type: 'spacer' },
      { ...footerv2(), type: 'footerv2' },
    ]
  };
};
