import { IMAGE_PLACEHOLDER } from "../../utils/constants";
import { TOOLBAR_TYPE_IMAGE } from '../../utils/constants';

export const cardv2 = {

  toolbarActions: [...TOOLBAR_TYPE_IMAGE],
  settings: {
    cardBackground: '#EDECEB',
    cardBorderRadius: 30,
    imagePadding: '25px 15px 25px 15px',

    imageWidth: 560,
    imageLink: '#',
    imageUrl:
      IMAGE_PLACEHOLDER,

    buttonWidth: 480,
    buttonLink: '#',
    buttonUrl:
      IMAGE_PLACEHOLDER,
  },
  fields: [
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
      name: 'imageWidth',
      type: 'text',
      label: 'Ширина картинки(px)',
    },
    {
      name: 'imageLink',
      type: 'textarea',
      label: 'Ссылка  картинки',
    },
    {
      name: 'imageUrl',
      type: 'textarea',
      label: 'URL картинки',
    },
    {
      name: 'imagePadding',
      type: 'text',
      label: 'Отступ между картинками(px)',
    },
    {
      name: 'buttonWidth',
      type: 'text',
      label: 'Ширина кнопки(px)',
    },
    {
      name: 'buttonLink',
      type: 'textarea',
      label: 'Ссылка кнопки',
    },
    {
      name: 'buttonUrl',
      type: 'textarea',
      label: 'URL кнопки',
    },
  ],
  render: (settings) =>
    `<!--[if mso | IE]>
</td>
</tr>
</table>
<![endif]-->

<!--[if mso | IE]>
<table align="center"
       border="0"
       cellpadding="0"
       cellspacing="0"
       class="card-wrapper-outlook"
       style="width:560px;"
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
      padding:0;
      text-align:center;
      vertical-align:top;
   ">

<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0">
<tr>
<td style="vertical-align:top;width:${settings.imageWidth}px;">
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

<!-- MAIN IMAGE -->
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
     width="${settings.buttonWidth}"
     style="display:block;width:100%;height:auto;border:0;outline:none;text-decoration:none;">
</a>
</td>
</tr>

</table>
</td>
</tr>

<!-- BUTTON -->
<tr>
<td align="center"
    style="font-size:0;padding:${settings.imagePadding};">

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
