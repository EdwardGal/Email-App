import { imagePlaceholder } from "../../utils/constants";


export const cardv3 = () => {
  return {
    toolbarPreset: 'text',
    settings: {
      cardBackground: '#F4FAFF',
      cardPadding: '10px 15px 0 15px',
      cardBorderRadius: 30,

      logoWidth:292,
      logoPaddingBottom: 10,
      logoLink: '#',
      logoUrl: imagePlaceholder ,

      textMaxWidth: 458,
      text: 'Блок с текстом',
      textFontSize: 16,
      textFontWeight: 400,
      textLineHeight: '130%',
      textLetterSpacing: '-0.2px',
      textAlign: 'center',
      textColor: '#000',
      textMaxWidth: 280,
      textPaddingBottom: 20,

      buttonWidth:  258,
      buttonLink: '#',
      buttonUrl: imagePlaceholder,
      buttonPaddingBottom: 15,

      imageWidth:  432,
      imageLink: '#',
      imageUrl: imagePlaceholder ,
    },
    settingsConfig: [
      {
        name: 'cardBackground',
        type: 'color',
        label: 'Цвет фона',
      },
      {
        name: 'cardPadding',
        type: 'text',
        label: 'Отступы внутри карточки(px)',
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
        label: 'URL ссылки логотипа(px)',
      },
      {
        name: 'logoUrl',
        type: 'textarea',
        label: 'URL логотипа',
      },
      {
        name: 'logoPaddingBottom',
        type: 'text',
        label: 'Отступ от логотипа(px)',
      },
      {
        name: 'textMaxWidth',
        type: 'text',
        label: 'Макс. ширина текста(px)',
      },
      {
        name: 'textAlign',
        type: 'select',
        label: 'Выравнивание текста',
        options: ['left', 'center', 'right'],
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
        name: 'textLineHeight',
        type: 'text',
        label: 'Межстрочный интервал заголовка(px,%)',
      },
      {
        name: 'textLetterSpacing',
        type: 'text',
        label: 'Межбуквенный интервал',
      },
      {
        name: 'textColor',
        type: 'color',
        label: 'Цвет текста',
      },
      {
        name: 'textPaddingBottom',
        type: 'text',
        label: 'Отступ под текстом(px)',
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
        label: 'Ширина картинки(px)',
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
      ` <!--[if mso | IE]></td></tr></table><table align="center" border="0" cellpadding="0" cellspacing="0" class="card-wrapper-outlook" style="width:560px;" width="560" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div class="card-wrapper"
      style="background:${settings.cardBackground}; background-color: ${settings.cardBackground}; Margin: 0px auto; border-radius: ${settings.cardBorderRadius}px; max-width: 560px; margin: 0 auto;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation"
        style="background:${settings.cardBackground};background-color:${settings.cardBackground};width:100%;border-radius:${settings.cardBorderRadius}px;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:${settings.cardPadding};text-align:center;vertical-align:top;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:560px;" ><![endif]-->
              <div class="mj-column-per-100 outlook-group-fix"
                style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                          <tr>
                            <td align="center" style="font-size:0px;padding-bottom:${settings.logoPaddingBottom}px;word-break:break-word;">
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
                            <td align="center" class="card-text"
                              style="font-size:0px;padding-bottom:${settings.textPaddingBottom}px;word-break:break-word;">
                              <div contenteditable="true"
                              data-editable="text"
                                style="font-family: Arial, sans-serif; font-size: ${settings.textFontSize}px; font-weight: ${settings.textFontWeight}; letter-spacing: ${settings.textLetterSpacing}; line-height: ${settings.textLineHeight}; text-align: ${settings.textAlign}; color: ${settings.textColor}; max-width: ${settings.textMaxWidth}px; margin: 0 auto;">
                                ${settings.text}
                                </div>
                            </td>
                          </tr>
                          <tr>
                            <td align="center" style="font-size:0px;padding-bottom:${settings.buttonPaddingBottom}px;word-break:break-word;">
                              <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                style="border-collapse:collapse;border-spacing:0px;">
                                <tbody>
                                  <tr>
                                    <td style="width:${settings.buttonWidth}px;"><a
                                        href="${settings.buttonLink}"
                                        target="_blank"><img height="auto"
                                          src="${settings.buttonUrl}"
                                          style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;"
                                          width="${settings.buttonWidth}"></a></td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td align="center" style="font-size:0px;padding:0;word-break:break-word;">
                              <table border="0" cellpadding="0" cellspacing="0" role="presentation"
                                style="border-collapse:collapse;border-spacing:0px;">
                                <tbody>
                                  <tr>
                                    <td style="width:${settings.imageWidth}px;"><a
                                        href="${settings.imageLink}"
                                        target="_blank"><img height="auto"
                                          src="${settings.imageUrl}"
                                          style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;"
                                          width="${settings.imageWidth}"></a></td>
                                  </tr>
                                </tbody>
                              </table>
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
    </div>`,
  };
};
