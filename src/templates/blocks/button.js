import { imagePlaceholder } from "../../utils/constants";

export const button = () => {
  return {
    toolbarPreset: 'image',
    settings: {
      imageWidth:  285,
      padding: 0,
      imageLink: '#',
      imageUrl: imagePlaceholder,
    },
    settingsConfig: [
      { name: 'imageWidth', type: 'text', label: 'Максимальная ширина (px)' },
      { name: 'imageLink', type: 'textarea', label: 'URL ссылки' },
      { name: 'imageUrl', type: 'text', label: 'URL изображения' },
      { name: 'padding', type: 'text', label: 'Внутренние отступы (px)' },
    ],
    render: (settings) =>
      ` <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="card-wrapper-outlook" style="width:560px;" width="560" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
    <div class="card-wrapper" style="Margin:0px auto;max-width:560px;">
      <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
          <tr>
            <td style="direction:ltr;font-size:0px;padding:${settings.padding};text-align:center;vertical-align:top;">
              <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:560px;" ><![endif]-->
              <div class="mj-column-per-100 outlook-group-fix"
                style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td style="vertical-align:top;padding:0;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
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
    </div><!--[if mso | IE]></td></tr></table><![endif]-->`,
  };
};
