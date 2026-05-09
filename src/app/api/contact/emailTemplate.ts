export function buildContactEmail(
    name: string,
    email: string,
    phone: string,
    message: string,
): string {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Enquiry – Quantum Homes</title>
</head>
<body style="margin:0;padding:0;background-color:#e8e6df;font-family:Montserrat,Arial,sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#e8e6df;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.10);">

          <!-- Header -->
          <tr>
            <td style="background-color:#b91c1c;padding:36px 40px 28px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:0.5px;">
                      QUANTUM <span style="color:#fbbf24;">HOMES</span>
                    </p>
                    <p style="margin:6px 0 0;font-size:12px;color:rgba(255,255,255,0.65);letter-spacing:2px;text-transform:uppercase;">
                      &amp; Property
                    </p>
                  </td>
                  <td align="right" valign="middle">
                    <span style="display:inline-block;background-color:rgba(255,255,255,0.12);border-radius:20px;padding:6px 14px;font-size:11px;color:#fbbf24;letter-spacing:1.5px;text-transform:uppercase;font-weight:600;">
                      New Enquiry
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Amber accent bar -->
          <tr>
            <td style="height:4px;background:linear-gradient(to right,#b91c1c,#fbbf24,#b91c1c);"></td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#F4F2EC;padding:40px 40px 32px;">

              <p style="margin:0 0 28px;font-size:15px;color:#52525b;line-height:1.6;">
                A new message was submitted through the contact form on your website. Details are below.
              </p>

              <!-- Details card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="border-radius:12px;overflow:hidden;border:1px solid rgba(0,0,0,0.07);">

                <tr>
                  <td style="background-color:#ffffff;padding:18px 24px;border-bottom:1px solid #f0ede6;">
                    <p style="margin:0 0 3px;font-size:10px;color:#fbbf24;letter-spacing:2px;text-transform:uppercase;font-weight:700;">Full Name</p>
                    <p style="margin:0;font-size:15px;color:#27272a;font-weight:600;">${name}</p>
                  </td>
                </tr>

                <tr>
                  <td style="background-color:#fafaf9;padding:18px 24px;border-bottom:1px solid #f0ede6;">
                    <p style="margin:0 0 3px;font-size:10px;color:#fbbf24;letter-spacing:2px;text-transform:uppercase;font-weight:700;">Email</p>
                    <p style="margin:0;font-size:15px;color:#27272a;">
                      <a href="mailto:${email}" style="color:#b91c1c;text-decoration:none;">${email}</a>
                    </p>
                  </td>
                </tr>

                <tr>
                  <td style="background-color:#ffffff;padding:18px 24px;">
                    <p style="margin:0 0 3px;font-size:10px;color:#fbbf24;letter-spacing:2px;text-transform:uppercase;font-weight:700;">Phone</p>
                    <p style="margin:0;font-size:15px;color:#27272a;">${phone || '—'}</p>
                  </td>
                </tr>

              </table>

              <!-- Message block -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
                <tr>
                  <td style="padding:0 0 10px;">
                    <p style="margin:0;font-size:10px;color:#fbbf24;letter-spacing:2px;text-transform:uppercase;font-weight:700;">Message</p>
                  </td>
                </tr>
                <tr>
                  <td style="background-color:#ffffff;border-radius:12px;border:1px solid rgba(0,0,0,0.07);padding:24px;">
                    <p style="margin:0;font-size:15px;color:#3f3f46;line-height:1.75;">
                      ${message.replace(/\n/g, '<br />')}
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Reply CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
                <tr>
                  <td>
                    <a href="mailto:${email}"
                       style="display:inline-block;background-color:#b91c1c;color:#ffffff;text-decoration:none;padding:13px 28px;border-radius:8px;font-size:14px;font-weight:600;letter-spacing:0.3px;">
                      Reply to ${name}
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#27272a;padding:24px 40px;text-align:center;">
              <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.4);line-height:1.6;">
                This email was generated automatically from the Quantum Homes &amp; Property website contact form.<br/>
                Please do not reply directly to this email — use the button above instead.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}
