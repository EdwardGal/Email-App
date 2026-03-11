import { imagePlaceholder } from "../../utils/constants";



export const headerv2 = () => {
  return {
    toolbarPreset: 'text',
    settings: {
      cardBackground: 'https://image.sendsay.ru/image/setpartnerstv/4788_19.02.png',
      cardBorderRadius: 30,

      logoWidth: 174,
      logoLink: '#',
      logoUrl: 'https://image.sendsay.ru/image/setpartnerstv/2026_gpb_top_logo.png',
      logoPadding: '20px 0 40px 0',

      title: 'Новый уровень вашей подписки',
      textAlign: 'center',
      titleFontSize: 40,
      titleFontWeight: 700,
      titleLineHeight: '100%',
      titleColor: '#fff',
      titleMaxWidth: 328,
      imageLink: '#',
      imageHeight: 470,

    },
    settingsConfig: [
      {
        name: 'cardBackground',
        type: 'textarea',
        label: 'URL фонового изображения',
      },
      {
        name: 'cardBorderRadius',
        type: 'text',
        label: 'Радиус закругления(px)',
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
        name: 'logoPadding',
        type: 'text',
        label: 'Отступы вокруг логотипа(px)',
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
        name: 'imageHeight',
        type: 'text',
        label: 'Высота баннера(px)',
      },
      {
        name: 'imageLink',
        type: 'textarea',
        label: 'URL ссылки баннера',
      },
    ],
    render: (settings) =>
      `<!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="card-wrapper-outlook" style="width:560px;" width="560" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><v:rect style="width:560px;" xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false"><v:fill origin="0.5, 0" position="0.5, 0" src="${settings.cardBackground}" type="tile" /><v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0"><![endif]-->
    <div class="card-wrapper"
      style="background: url(${settings.cardBackground}) top center / cover no-repeat; Margin: 0px auto; border-radius:${settings.cardBorderRadius}px;; max-width: 560px; margin: 0 auto;">
      <div style="line-height:0;font-size:0;">
        <table align="center" background="${settings.cardBackground}" border="0"
          cellpadding="0" cellspacing="0" role="presentation"
          style="background:url(${settings.cardBackground}) top center / cover no-repeat;width:100%;border-radius:${settings.cardBorderRadius}px;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;text-align:center;vertical-align:top;">
                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:600px;" ><![endif]-->
                <div class="mj-column-per-100 outlook-group-fix"
                  style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                    <tbody>
                      <tr>
                        <td style="vertical-align:top;padding:0;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                            <tr>
                              <td align="center" style="font-size:0px;padding: ${settings.logoPadding};word-break:break-word;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                  style="border-collapse:collapse;border-spacing:0px;">
                                  <tbody>
                                    <tr>
                                      <td style="width:${settings.logoWidth}px;"><a
                                          href="${settings.logoLink}"
                                          target="_blank"><img height="auto"
                                            src="${settings.logoUrl}"
                                            style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;"
                                            width="${settings.logoWidth}"></a></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td align="center" class="mail-title"
                                style="font-size:0px;padding:0 15px 10px 15px;word-break:break-word;">
                                <div contenteditable="true" data-editable="title"
                                  style="font-family: Arial, sans-serif; font-size: ${settings.titleFontSize}px; font-weight: ${settings.titleFontWeight}; line-height: ${settings.titleLineHeight}; text-align: ${settings.textAlign}; color: ${settings.titleColor}; max-width: ${settings.titleMaxWidth}px; margin: 0 auto;">
                                ${settings.title}
                                 </div>
                              </td>
                            </tr>
                            <tr>
                              <td align="left" style="font-size:0px;padding:0;word-break:break-word;">
                                <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="${settings.imageHeight}px" style="vertical-align:top;height:${settings.imageHeight}px;"><![endif]-->
                                <div
                                  style="font-family:Arial, sans-serif;;font-size:13px;line-height:1;text-align:left;color:#000000;height:${settings.imageHeight}px;">
                                  <a style="display: block; width: 100%; height: 100%" href="${settings.imageLink}" target="_blank"></a>
                                </div><!--[if mso | IE]></td></tr></table><![endif]-->
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div><!--[if mso | IE]></td></tr></table><![endif]-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>`,
  };
};
