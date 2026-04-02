import { headerv3 } from '../blocks/headerv3.js';
import { footerv2 } from '../blocks/footerv2.js';
import { spacer } from '../blocks/spacer.js';
import { text } from '../blocks/text.js';
import { imagelink } from '../blocks/imagelink.js';
import { title } from '../blocks/title.js';
import { cardTitle } from '../blocks/cardTitle.js';


export const kinov1 = {
  mode: 'dark',
  blocks: [
    { ...headerv3, type: 'headerv3' },
    { ...title, type: 'title' },
    { ...text, type: 'text' },
    { ...spacer, type: 'spacer' },
    { ...cardTitle, type: 'cardTitle' },
    { ...imagelink, type: 'imagelink' },
    { ...spacer, type: 'spacer' },
    { ...imagelink, type: 'imagelink' },
    { ...spacer, type: 'spacer' },
    { ...cardTitle, type: 'cardTitle' },
    { ...imagelink, type: 'imagelink' },
    { ...spacer, type: 'spacer' },
    { ...imagelink, type: 'imagelink' },
    { ...spacer, type: 'spacer' },
    { ...footerv2, type: 'footerv2' },
  ]
};
