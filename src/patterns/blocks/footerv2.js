
import { TOOLBAR_TYPE_IMAGE } from '../../utils/constants';

export const footerv2 = {

  toolbarActions: [...TOOLBAR_TYPE_IMAGE],
  settings: {
    padding: '0 5px 30px 5px',
    logoWidth: 128,
    logoLink: '#',
    logoUrl: 'https://image.sendsay.ru/image/setpartnerstv/2026_kino_gpb_bottom_logo.png',
    logoPaddingBottom: 10,
    greetingFontSize: 14,
    greetingFontWeight: 400,
    greetingLineHeight: '145%',
    greetingColor: '#909499',

    socialPadding: '20px 10px',
    socialIconSize: 33,

    vkLink: 'https://vk.com/public212048946',
    vkIcon: 'https://image.sendsay.ru/image/setpartnerstv/2026_kino_vk_tg.png',
    telegramLink: 'https://t.me/gazprombonus_podpiska',
    telegramIcon: 'https://image.sendsay.ru/image/setpartnerstv/2026_kino_odn_tg.png',

    greeting: 'C уважением,<br>команда подписки Газпром Бонус',

    legalFontSize: 9,
    legalLineHeight: '140%',
    legalColor: '#A9A9A9',
    legalPaddingBottom: 15,

    contactFontSize: 14,
    contactLineHeight: '140%',
    contactColor: '#a9a9a9',

    contactPaddingTop: 15,

    websiteLink: 'https://gazprombonus.ru',
    websiteText: 'gazprombonus.ru',
    linkColor: '#a9a9a9',
    email: 'help@gazprombonus.ru',
    phone: '+7&nbsp;495&nbsp;137-74-24',

    copyrightText: '© 2026, ООО «Сеть партнерств», подписка Газпром&nbsp;Бонус, 18+',
    copyrightColor: '#a9a9a9',
    copyrightLetterSpacing: 0.1,
    copyrightLineHeight: '140%',
    copyrightPaddingTop: 10,

    legal: 'Подробнее на gazprombonus.ru',

    addressText:
      '117342, г. Москва, вн.тер.г. муниципальный округ Коньково, ул. Бутлерова, д. 17, помещ&nbsp;11/7. ОГРН: 1207700311060',
    addressColor: '#a9a9a9',
    addressLetterSpacing: 0.1,
    addressLineHeight: '140%',
  },
  fields: [
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
      name: 'legalLineHeight',
      type: 'text',
      label: 'Межстрочный интервал сноски (px,%)',
    },
    {
      name: 'legalPaddingBottom',
      type: 'text',
      label: 'Отступ под сносками (px)',
    },
    {
      name: 'websiteLink',
      type: 'textarea',
      label: 'URL сайта',
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
       class="footer-outlook"
       style="width:560px;"
       width="560">
<tr>
<td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
<![endif]-->

<div class="footer"
     style="margin:0 auto;max-width:560px;">

<table align="center"
       border="0"
       cellpadding="0"
       cellspacing="0"
       role="presentation"
       width="100%">

<tbody>
<tr>
<td style="
      direction:ltr;
      font-size:0;
      padding:${settings.padding};
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

<table role="presentation"
       style="border-collapse:collapse;border-spacing:0;">
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

<!-- GREETING -->
<tr>
<td align="center" style="font-size:0;padding:0;">
<div contenteditable="true"
     data-editable="greeting"
     style="
        font-family:Arial, sans-serif;
        font-size:${settings.greetingFontSize}px;
        font-weight:${settings.greetingFontWeight};
        line-height:${settings.greetingLineHeight};
        text-align:center;
        color:${settings.greetingColor};
     ">
  ${settings.greeting}
</div>
</td>
</tr>

<!-- SOCIAL -->
<tr>
<td align="center" style="font-size:0;padding:0;">

<!--[if mso | IE]>
<table align="center" role="presentation"><tr><td>
<![endif]-->

<!-- VK -->
<table align="center" role="presentation"
       style="float:none;display:inline-table;">
<tr>
<td style="padding:${settings.socialPadding};">
<table role="presentation"
       style="border-radius:3px;width:${settings.socialIconSize}px;">
<tr>
<td style="
      font-size:0;
      height:${settings.socialIconSize}px;
      width:${settings.socialIconSize}px;
      vertical-align:middle;
   ">
<a href="${settings.vkLink}" target="_blank">
<img src="${settings.vkIcon}"
     width="${settings.socialIconSize}"
     height="${settings.socialIconSize}"
     style="border-radius:3px;">
</a>
</td>
</tr>
</table>
</td>
</tr>
</table>

<!--[if mso | IE]></td><td><![endif]-->

<!-- TELEGRAM -->
<table align="center" role="presentation"
       style="float:none;display:inline-table;">
<tr>
<td style="padding:${settings.socialPadding};">
<table role="presentation"
       style="border-radius:3px;width:${settings.socialIconSize}px;">
<tr>
<td style="
      font-size:0;
      height:${settings.socialIconSize}px;
      width:${settings.socialIconSize}px;
      vertical-align:middle;
   ">
<a href="${settings.telegramLink}" target="_blank">
<img src="${settings.telegramIcon}"
     width="${settings.socialIconSize}"
     height="${settings.socialIconSize}"
     style="border-radius:3px;">
</a>
</td>
</tr>
</table>
</td>
</tr>
</table>

<!--[if mso | IE]>
</td></tr></table>
<![endif]-->

</td>
</tr>

<!-- LEGAL -->
<tr>
<td align="center"
    style="font-size:0;padding:0 0 ${settings.legalPaddingBottom || '10'}px 0;">

<div contenteditable="true"
     data-editable="legal"
     style="
        font-family:Arial, sans-serif;
        font-size:${settings.legalFontSize}px;
        line-height:${settings.legalLineHeight};
        text-align:center;
        color:${settings.legalColor};
     ">
<div style="padding-bottom:5px;">${settings.legal}</div>
</div>

</td>
</tr>

<!-- CONTACTS -->
<tr>
<td align="left" style="font-size:0;padding:0;">

<table width="100%" border="0" cellpadding="0" cellspacing="0"
       style="
          table-layout:auto;
          width:100%;
          font-family:Arial, sans-serif;
          font-size:${settings.contactFontSize}px;
          line-height:${settings.contactLineHeight};
       ">

<tr style="
      color:${settings.contactColor};
      text-align:center;
      letter-spacing:0.1px;
   ">
<td style="
      padding-top:${settings.contactPaddingTop}px;
      border-top:0.5px solid #909499;
   ">

<a href="${settings.websiteLink}" target="_blank"
   style="color:${settings.linkColor};">
  ${settings.websiteText}
</a>

&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;

<a href="mailto:${settings.email}"
   style="color:${settings.linkColor};">
  ${settings.email}
</a>

&nbsp;&nbsp;|&nbsp;&nbsp;

<a href="tel:${settings.phone}"
   style="color:${settings.linkColor};text-decoration:none;">
  ${settings.phone}
</a>

</td>
</tr>

<tr style="
      color:${settings.copyrightColor};
      text-align:center;
      letter-spacing:${settings.copyrightLetterSpacing}px;
      line-height:${settings.copyrightLineHeight};
   ">
<td style="padding-top:${settings.copyrightPaddingTop}px;">
  ${settings.copyrightText}
</td>
</tr>

<tr style="
      color:${settings.addressColor};
      text-align:center;
      letter-spacing:${settings.addressLetterSpacing}px;
      line-height:${settings.addressLineHeight};
   ">
<td>
  ${settings.addressText}
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

<!--[if mso | IE]>
</td>
</tr>
</table>
<![endif]-->`,

};
