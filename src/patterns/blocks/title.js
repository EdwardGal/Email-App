import { TOOLBAR_TYPE_TEXT } from '../../utils/constants';


export const title = {

  toolbarActions: [...TOOLBAR_TYPE_TEXT],
  settings: {
    title: 'Блок с заголовком',
    titleWidth: 530,
    padding: '20px 15px 25px 15px',
    fontSize: 40,
    fontWeight: 700,
    letterSpacing: -0.2,
    lineHeight: '100%',
    textAlign: 'center',
    color: '#000000',
  },
  fields: [
    { name: 'titleWidth', type: 'number', label: 'Ширина блока с заголовком (px)' },
    { name: 'padding', type: 'text', label: 'Внутренние отступы(px)' },
    { name: 'fontSize', type: 'number', label: 'Размер шрифта (px)' },
    { name: 'fontWeight', type: 'select', label: 'Насыщенность шрифта', options: ['400', '700'] },
    { name: 'lineHeight', type: 'text', label: 'Межстрочный интервал(px,%)' },
    { name: 'letterSpacing', type: 'number', label: 'Межбуквенный интервал (px)' },
    {
      name: 'textAlign',
      type: 'select',
      label: 'Выравнивание текста',
      options: ['left', 'center', 'right'],
    },
    { name: 'color', type: 'color', label: 'Цвет текста' },
  ],
  render: (settings) =>

    `<!--[if mso | IE]>
  <table align="center" border="0" cellpadding="0" cellspacing="0" class="card-wrapper-outlook" style="width:560px;" width="560">
    <tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
  <![endif]-->
  <div class="card-wrapper" style="margin: 0px auto; max-width: 560px;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
      <tbody>
        <tr>
          <td style="direction:ltr;font-size:0px;padding:${settings.padding};text-align:center;vertical-align:top;">
            <!--[if mso | IE]>
            <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr>
            <td style="vertical-align:top;width:${settings.titleWidth}px;">
            <![endif]-->
            <div class="mj-column-per-100 outlook-group-fix" style="font-size:13px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
              <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                <tbody>
                  <tr>
                    <td style="vertical-align:top;padding:0;">
                      <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                        <tr>
                          <td align="center" class="mail-title" style="font-size:0px;padding:0;word-break:break-word;">
                            <div contenteditable="true"
                            data-editable="title" style="
                              max-width:${settings.titleWidth}px;
                              font-family: Arial, sans-serif;
                              font-size:${settings.fontSize}px;
                              font-weight:${settings.fontWeight};
                              letter-spacing:${settings.letterSpacing}px;
                              line-height:${settings.lineHeight};
                              text-align:${settings.textAlign};
                              color:${settings.color};
                            ">
                             ${settings.title}
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <!--[if mso | IE]></td></tr></table><![endif]-->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!--[if mso | IE]></td></tr></table><![endif]-->`

};
