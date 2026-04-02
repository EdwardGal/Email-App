import { headerv1 } from '../blocks/headerv1.js';
import { cardv1 } from '../blocks/cardv1.js';
import { footer } from '../blocks/footer.js';
import { spacer } from '../blocks/spacer.js';
import { cardv2 } from '../blocks/cardv2.js';
import { text } from '../blocks/text.js';



export const templatev1 = {

  blocks: [
    { ...headerv1, type: 'headerv1' },
    { ...text, type: 'text' },
    { ...cardv2, type: 'cardv2' },
    { ...spacer, type: 'spacer' },
    { ...cardv2, type: 'cardv2' },
    { ...spacer, type: 'spacer' },
    { ...cardv2, type: 'cardv2' },
    { ...spacer, type: 'spacer' },
    { ...cardv2, type: 'cardv2' },
    { ...spacer, type: 'spacer' },
    { ...cardv1, type: 'cardv1' },
    { ...spacer, type: 'spacer' },
    { ...footer, type: 'footer' },
  ],

};
