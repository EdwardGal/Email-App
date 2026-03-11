import { imagePlaceholder } from "../../utils/constants";



export const cardv1 = () => {
  return {
    toolbarPreset: 'text',
    settings: {
      cardBackground: '#FFECDE',
      cardBorderRadius: 30,
      cardPadding: '20px 15px 0 15px',

      title: 'Блок с Заголовком',
      titleFontSize: 44,
      titleFontWeight: 700,
      titleLineHeight: '100%',
      titleColor: '#000',
      titleMaxWidth: 280,
      titlePaddingBottom: 10,

      text: 'Блок с Текстом',
      textAlign: 'center',
      textColor: '#000',
      textFontSize: 16,
      textMaxWidth: 458,
      textPaddingBottom: 15,
      textLetterSpacing: -0.2,
      textLineHeight: '140%',

      buttonWidth:  248,
      buttonLink: '#',
      buttonUrl:
        imagePlaceholder,
      buttonPaddingBottom: 15,

      imageWidth:  408,
      imageLink: '#',
      imageUrl:
        imagePlaceholder,
    },
    settingsConfig: [
      {
        name: 'cardBackground',
        type: 'color',
        label: 'Цвет фона',
      },
      {
        name: 'cardBorderRadius',
        type: 'text',
        label: 'Радиус закругления(px)',
      },
      {
        name: 'cardPadding',
        type: 'text',
        label: 'Отступы внутри карточки',
      },
      {
        name: 'titleFontSize',
        type: 'text',
        label: 'Размер шрифта заголовка(px)',
      },
      {
        name: 'titleFontWeight',
        type: 'select',
        label: 'Насыщенность заголовка',
        options: ['400', '700'],
      },
      {
        name: 'titleColor',
        type: 'color',
        label: 'Цвет заголовка',
      },
      {
        name: 'titleMaxWidth',
        type: 'text',
        label: 'Макс. ширина заголовка(px)',
      },
      {
        name: 'titlePaddingBottom',
        type: 'text',
        label: 'Отступ под заголовком(px)',
      },
      {
        name: 'titleLineHeight',
        type: 'text',
        label: 'Межстрочный интервал заголовка(px,%)',
      },
      {
        name: 'textFontSize',
        type: 'text',
        label: 'Размер шрифта текста(px)',
      },
      {
        name: 'textFontWeight',
        type: 'select',
        label: 'Насыщенность текста',
        options: ['400', '700'],
      },
      {
        name: 'textColor',
        type: 'color',
        label: 'Цвет текста',
      },
      {
        name: 'textMaxWidth',
        type: 'text',
        label: 'Макс. ширина текста (px)',
      },
      {
        name: 'textPaddingBottom',
        type: 'text',
        label: 'Отступ под текстом (px)',
      },
      {
        name: 'textLetterSpacing',
        type: 'text',
        label: 'Межбуквенный интервал',
      },
      {
        name: 'textLineHeight',
        type: 'text',
        label: 'Межстрочный интервал(px,%)',
      },
      {
        name: 'buttonWidth',
        type: 'text',
        label: 'Ширина кнопки(px)',
      },
      {
        name: 'buttonLink',
        type: 'textarea',
        label: 'URL ссылки кнопки',
      },
      {
        name: 'buttonUrl',
        type: 'textarea',
        label: 'URL кнопки',
      },

      {
        name: 'buttonPaddingBottom',
        type: 'text',
        label: 'Отступ под кнопкой(px)',
      },
      {
        name: 'imageWidth',
        type: 'text',
        label: 'Ширина баннера(px)',
      },
      {
        name: 'imageLink',
        type: 'textarea',
        label: 'URL ссылки баннера',
      },
      {
        name: 'imageUrl',
        type: 'textarea',
        label: 'URL баннера',
      },
    ],
    render: (settings) =>
      `<!--[if mso | IE]>
</td>
</tr>
</table>

<table align="center"
       border="0"
       cellpadding="0"
       cellspacing="0"
       class="card-wrapper-outlook"
       style="width:560;"
       width="560">
<tr>
<td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
<![endif]-->

<div class="card-wrapper"
     style="
        background:${settings.cardBackground};
        background-color:${settings.cardBackground};
        margin:0 auto;
        border-radius:${settings.cardBorderRadius}px;
        max-width:560px;
     ">

<table align="center"
       border="0"
       cellpadding="0"
       cellspacing="0"
       role="presentation"
       width="100%"
       style="
          background:${settings.cardBackground};
          background-color:${settings.cardBackground};
          border-radius:${settings.cardBorderRadius}px;
       ">

<tbody>
<tr>
<td style="
      direction:ltr;
      font-size:0;
      padding:${settings.cardPadding};
      text-align:center;
      vertical-align:top;
   ">

<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0">
<tr>
<td style="vertical-align:top;width:560px;">
<![endif]-->

<div class="mj-column-per-100 outlook-group-fix"
     style="
        font-size:13px;
        text-align:left;
        direction:ltr;
        display:inline-block;
        vertical-align:top;
        width:100%;
     ">

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
<tbody>
<tr>
<td style="vertical-align:top;padding:0;">

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">

<!-- TITLE -->
<tr>
<td align="center"
    class="card-title"
    style="font-size:0;padding-bottom: ${settings.titlePaddingBottom}px;">

<div contenteditable="true"
     data-editable="title"
     style="
        font-family:Arial, sans-serif;
        font-size:${settings.titleFontSize}px;
        font-weight:${settings.titleFontWeight};
        line-height:${settings.titleLineHeight};
        text-align:center;
        color:${settings.titleColor};
        max-width:${settings.titleMaxWidth}px;
        margin:0 auto;
     ">
  ${settings.title}
</div>

</td>
</tr>

<!-- TEXT -->
<tr>
<td align="center"
    class="card-text"
    style="font-size:0;padding-bottom:${settings.textPaddingBottom}px;">

<div contenteditable="true"
     data-editable="text"
     style="
        font-family: Arial, sans-serif;
        font-size:${settings.textFontSize}px;
        font-weight:${settings.textFontWeight};
        letter-spacing:${settings.textLetterSpacing}px;
        line-height:${settings.textLineHeight};
        text-align:center;
        color:${settings.textColor};
        max-width:${settings.textMaxWidth}px;
        margin:0 auto;
     ">
  ${settings.text}
</div>

</td>
</tr>

<!-- BUTTON IMAGE -->
<tr>
<td align="center"
    style="font-size:0;padding-bottom:${settings.buttonPaddingBottom}px;">

<table role="presentation"
       cellpadding="0"
       cellspacing="0"
       border="0"
       style="border-collapse:collapse;border-spacing:0;">

<tr>
<td style="width:${settings.buttonWidth}px;">
<a href="${settings.buttonLink}" target="_blank">
<img src="${settings.buttonUrl}"
     width="${settings.buttonWidth}"
     style="display:block;width:100%;height:auto;border:0;outline:none;text-decoration:none;">
</a>
</td>
</tr>

</table>
</td>
</tr>

<!-- IMAGE -->
<tr>
<td align="center" style="font-size:0;padding:0;">

<table role="presentation"
       cellpadding="0"
       cellspacing="0"
       border="0"
       style="border-collapse:collapse;border-spacing:0;">

<tr>
<td style="width:${settings.imageWidth}px;">
<a href="${settings.imageLink}" target="_blank">
<img src="${settings.imageUrl}"
     width="${settings.imageWidth}"
     style="display:block;width:100%;height:auto;border:0;outline:none;text-decoration:none;">
</a>
</td>
</tr>

</table>
</td>
</tr>

</table>
</td>
</tr>
</tbody>
</table>

</div>

<!--[if mso | IE]>
</td>
</tr>
</table>
<![endif]-->

</td>
</tr>
</tbody>
</table>
</div>`,
  };
};
