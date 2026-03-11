export const headerv1 = (modes = {}) => {
  const { imagePlaceholder, imageWidth } = modes;
  return {
    toolbarPreset: 'text',
    settings: {
      backgroundImage: 'https://image.sendsay.ru/image/setpartnerstv/4745_main_bg.png',
      borderRadius: 30,
      cardPadding: '20px 0 0 0',

      logoWidth: 174,
      logoLink: '#',
      logoUrl: 'https://image.sendsay.ru/image/setpartnerstv/2026_gpb_top_logo.png',
      logoPaddingBottom: 30,

      title: 'Блок с Заголовком',
      textAlign: 'center',
      titleFontSize: 44,
      titleFontWeight: 700,
      titleLineHeight: '100%',
      titleColor: '#fff',
      titleMaxWidth: 320,
      titlePadding: '0 15px 10px 15px',

      imageWidth: imageWidth || 560,
      imageLink: '#',
      imageUrl: imagePlaceholder || 'assets/blocks/image_560.png',
    },
    settingsConfig: [
      {
        name: 'backgroundImage',
        type: 'textarea',
        label: 'URL фонового изображения',
      },
      {
        name: 'borderRadius',
        type: 'text',
        label: 'Радиус закругления карточки(px)',
      },
      {
        name: 'cardPadding',
        type: 'text',
        label: 'Отступы внутри карточки(px)',
      },
      {
        name: 'logoWidth',
        type: 'text',
        label: 'Ширина логотипа(px)',
      },
      {
        name: 'logoLink',
        type: 'textarea',
        label: 'URL ссылки логотипа',
      },
      {
        name: 'logoUrl',
        type: 'textarea',
        label: 'URL логотипа',
      },
      {
        name: 'logoPaddingBottom',
        type: 'text',
        label: 'Отступ под логотипом(px)',
      },
      {
        name: 'textAlign',
        type: 'select',
        label: 'Выравнивание текста',
        options: ['left', 'center', 'right'],
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
        name: 'titleLineHeight',
        type: 'text',
        label: 'Межстрочный интервал заголовка(px,%)',
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
        name: 'titlePadding',
        type: 'text',
        label: 'Отступ под заголовком(px)',
      },
      {
        name: 'imageWidth',
        type: 'text',
        label: 'Ширина баннера(px)',
      },
      {
        name: 'imageLink',
        type: 'textarea',
        label: 'URL ссылки картинки',
      },
      {
        name: 'imageUrl',
        type: 'textarea',
        label: 'URL картинки',
      },
    ],
    render: (settings) =>
      `<!--[if mso | IE]>
<table align="center" border="0" cellpadding="0" cellspacing="0"
       class="card-wrapper-outlook" style="width:560px;" width="560">
<tr>
<td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
<v:rect style="width:560px;" xmlns:v="urn:schemas-microsoft-com:vml"
        fill="true" stroke="false">
<v:fill origin="0.5, 0"
        position="0.5, 0"
        src="${settings.backgroundImage}"
        type="tile" />
<v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">
<![endif]-->

<div class="card-wrapper"
     style="
        background: url(${settings.backgroundImage})
        top center / cover no-repeat;
        margin:0 auto;
        border-radius:${settings.borderRadius}px;
        max-width:560px;
     ">

  <div style="line-height:0;font-size:0;">

    <table align="center"
           border="0"
           cellpadding="0"
           cellspacing="0"
           role="presentation"
           width="100%"
           background="${settings.backgroundImage}"
           style="
             background:url(${settings.backgroundImage})
             top center / cover no-repeat;
             border-radius:${settings.borderRadius}px;
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

<!-- LOGO -->
<tr>
<td align="center"
    style="font-size:0;padding-bottom:${settings.logoPaddingBottom}px;">

<table role="presentation" style="border-collapse:collapse;border-spacing:0;">
<tr>
<td style="width:${settings.logoWidth}px;">
<a href="${settings.logoLink}" target="_blank">
<img src="${settings.logoUrl}"
     width="${settings.logoWidth}"
     style="display:block;width:100%;height:auto;border:0;outline:none;text-decoration:none;">
</a>
</td>
</tr>
</table>

</td>
</tr>

<!-- TITLE -->
<tr>
<td align="${settings.textAlign}"
    class="mail-title"
    style="font-size:0;padding:${settings.titlePadding};">

<div contenteditable="true"
     data-editable="title"
     style="
        font-family:Arial, sans-serif;
        font-size:${settings.titleFontSize}px;
        font-weight:${settings.titleFontWeight};
        line-height:${settings.titleLineHeight};
        text-align:${settings.textAlign};
        color:${settings.titleColor};
        max-width:${settings.titleMaxWidth}px;
        margin:0 auto;
     ">
  ${settings.title}
</div>

</td>
</tr>

<!-- IMAGE -->
<tr>
<td align="${settings.textAlign}"
    style="font-size:0;padding:0;">

<table role="presentation"
       cellpadding="0"
       cellspacing="0"
       border="0"
       style="border-collapse:collapse;border-spacing:0;">

<tr>
<td align="center"
    style="width:${settings?.imageWidth}px;">

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

  </div>
</div>

<!--[if mso | IE]>
</v:textbox>
</v:rect>
</td>
</tr>
</table>
<![endif]-->`,
  };
};
