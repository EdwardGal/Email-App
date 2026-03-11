import { headerv1 } from '../blocks/headerv1.js';
import { footer } from '../blocks/footer.js';
import { spacer } from '../blocks/spacer.js';
import { text } from '../blocks/text.js';
import { imagelink } from '../blocks/imagelink.js';
import { title } from '../blocks/title.js';
import { cardv3 } from '../blocks/cardv3.js';




export const temav1 = () => {
  return {
    blocks: [
      { ...headerv1(), type: 'headerv1' },
      { ...text(), type: 'text' },
      { ...imagelink(), type: 'imagelink' },
      { ...spacer(), type: 'spacer' },
      { ...title(), type: 'title' },
      { ...cardv3(), type: 'cardv3 ' },
      { ...spacer(), type: 'spacer' },
      { ...title(), type: 'title' },
      { ...cardv3(), type: 'cardv3 ' },
      { ...spacer(), type: 'spacer' },
      { ...title(), type: 'title' },
      { ...cardv3(), type: 'cardv3 ' },
      { ...spacer(), type: 'spacer' },
      { ...title(), type: 'title' },
      { ...cardv3(), type: 'cardv3 ' },
      { ...spacer(), type: 'spacer' },
      { ...footer(), type: 'footer' },
    ],
  };
};
