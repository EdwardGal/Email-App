import { imagePlaceholder } from "../../utils/constants";
export const imagebg = () => {
  return {
    toolbarPreset: 'image',
    settings: {
      imageWidth: 500,
      backgroundColor: '#EDECEB',
      borderRadius: 30,
      padding: 15,
      imageLink: '#',
      imageUrl: imagePlaceholder,
    },
    settingsConfig: [
      { name: 'imageWidth', type: 'text', label: 'Ширина картинки(px)' },
      { name: 'backgroundColor', type: 'color', label: 'Цвет фона' },
      { name: 'borderRadius', type: 'number', label: 'Радиус закругления(px)' },
      { name: 'padding', type: 'text', label: 'Внутренние отступы(px)' },
      { name: 'imageLink', type: 'textarea', label: 'URL ссылки' },
      { name: 'imageUrl', type: 'textarea', label: 'URL изображения' },
    ],
    render: (settings) => `
      <!--[if mso | IE]>
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="card-wrapper-outlook" style="width:560px;" width="560">
        <tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
      <![endif]-->
      <div class="card-wrapper" style="background:${settings.backgroundColor};Margin: 0px auto;border-radius:${settings.borderRadius}px;max-width:560px;margin: 0 auto;width:560px;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:${settings.backgroundColor};width:100%;border-radius:${settings.borderRadius}px;">
          <tbody>
            <tr>
              <td style="direction:ltr;font-size:0px;padding:${settings.padding}px;text-align:center;vertical-align:top;">
                <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                  <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                    <tbody>
                      <tr>
                        <td style="vertical-align:top;padding:0;">
                          <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                            <tr>
                              <td align="center" style="font-size:0px;padding:0;word-break:break-word;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                  <tbody>
                                    <tr>
                                      <td style="width:${settings.imageWidth}px;">
                                        <a href="${settings.imageLink}" target="_blank">
                                          <img height="auto" src="${settings.imageUrl}" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;" width="${settings.imageWidth}">
                                        </a>
                                      </td>
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
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--[if mso | IE]></td></tr></table><![endif]-->
    `,
  };
};
