import { headerv2 } from '../blocks/headerv2.js';
import { footer } from '../blocks/footer.js';
import { spacer } from '../blocks/spacer.js';
import { text } from '../blocks/text.js';
import { imagelink } from '../blocks/imagelink.js';
import { image } from '../blocks/image.js';



export const templatev2 = {

  blocks: [
    { ...headerv2, type: 'headerv2' },
    { ...text, type: 'text' },
    { ...imagelink, type: 'imagelink' },
    { ...spacer, type: 'spacer' },
    { ...image, type: 'image' },
    { ...spacer, type: 'spacer' },
    { ...image, type: 'image' },
    { ...spacer, type: 'spacer' },
    { ...image, type: 'image' },
    { ...spacer, type: 'spacer' },
    { ...image, type: 'image' },
    { ...spacer, type: 'spacer' },
    { ...imagelink, type: 'imagelink' },
    { ...spacer, type: 'spacer' },
    { ...footer, type: 'footer' },
  ],

};
