// htmlTemplates.ts
export const htmlTemplate = {
  Header: "<header>Header</header>",
  "Header H1": "<h1>Header H1</h1>",
  "Header H2": "<h2>Header H2</h2>",
  Footer: "<footer>Footer</footer>",
  Sidebar: "<aside>Aside</aside>",
  "Main Content": "<main>Main</main>",
  "Default": `<table style="border-collapse: collapse; width: 100%; border-width: 0px;" border="1"><colgroup><col style="width: 13.0751%;"><col style="width: 4.35835%;"><col style="width: 48.749%;"><col style="width: 33.8176%;"></colgroup>
<tbody style="page-break-inside: avoid; page-break-after: auto;">
<tr style="height: 23.3906px;">
<td style="height: 57.1718px; border-width: 0px;" rowspan="3"><span style="font-family: 'times new roman', times, serif;">{{{InstitutionLogo}}}</span></td>
<td style="height: 23.3906px; border-width: 0px;">&nbsp;</td>
<td style="height: 23.3906px; border-width: 0px;"><span style="font-family: 'times new roman', times, serif;">Cơ sở y tế: {{{InstitutionName}}}</span></td>
<td style="border-width: 0px; height: 23.3906px;"><span style="font-family: 'times new roman', times, serif;">M&atilde; người bệnh: {{{PatientID}}}</span></td>
</tr>
<tr style="height: 23.3906px;">
<td style="height: 23.3906px; border-width: 0px;">&nbsp;</td>
<td style="height: 23.3906px; border-width: 0px;"><span style="font-family: 'times new roman', times, serif;">Địa chỉ: {{{InstitutionAddress}}}</span></td>
<td style="border-width: 0px; height: 23.3906px;">&nbsp;</td>
</tr>
<tr style="height: 10.3906px;">
<td style="height: 10.3906px; border-width: 0px;">&nbsp;</td>
<td style="height: 10.3906px; border-width: 0px;"><span style="font-family: 'times new roman', times, serif;">Số điện thoại: {{{InstitutionPhone}}}</span></td>
<td style="border-width: 0px; height: 10.3906px;">&nbsp;</td>
</tr>
</tbody>
</table>
<h2 style="text-align: center; line-height: 2;"><span style="font-family: 'times new roman', times, serif;"><strong>TH&Ocirc;NG TIN CA CHỤP</strong></span></h2>
<table style="border-collapse: collapse; width: 100%; border-width: 0px;" border="1"><colgroup><col style="width: 58.8378%;"><col style="width: 23.9709%;"><col style="width: 17.1913%;"></colgroup>
<tbody>
<tr style="height: 23.3906px;">
<td style="height: 23.3906px; border-width: 0px;"><span style="font-family: 'times new roman', times, serif;">Họ t&ecirc;n: <strong>{{{PatientName}}}</strong></span></td>
<td style="height: 23.3906px; border-width: 0px;"><span style="font-family: 'times new roman', times, serif;">Ngày sinh: <strong>{{{PatientBirthday}}}</strong></span></td>
<td style="border-width: 0px; height: 23.3906px;"><span style="font-family: 'times new roman', times, serif;">Giới t&iacute;nh:&nbsp; <strong>{{{PatientSex}}}</strong></span></td>
</tr>
<tr style="height: 23.3906px;">
<td style="height: 23.3906px; border-width: 0px;"><span style="font-family: 'times new roman', times, serif;">Địa chỉ: {{{PatientAddress}}}</span></td>
<td style="height: 23.3906px; border-width: 0px;" colspan="2"><span style="font-family: 'times new roman', times, serif;">Điện thoại: {{{PatientPhone}}}</span></td>
</tr>
<tr style="height: 23.3906px;">
<td style="border-width: 0px; height: 23.3906px;"><span style="font-family: 'times new roman', times, serif;">Chẩn đo&aacute;n l&acirc;m s&agrave;ng: {{{Diagnosis}}}</span></td>
<td style="border-width: 0px; height: 23.3906px;" colspan="2"><span style="font-family: 'times new roman', times, serif;">Thời gian thực hiện: {{{StudyDateTime}}}</span></td>
</tr>
<tr style="height: 23.3906px;">
<td style="height: 23.3906px; border-width: 0px;"><span style="font-family: 'times new roman', times, serif;">Chỉ định: {{{ProcedureName}}}</span></td>
<td style="height: 23.3906px; border-width: 0px;" colspan="2"><span style="font-family: 'times new roman', times, serif;">BS Chỉ định: {{{OrderDoctorName}}}</span></td>
</tr>
</tbody>
</table>
<h2 style="text-align: center;"><span style="font-family: 'times new roman', times, serif;"><strong>KẾT QUẢ</strong></span></h2>
<table style="border-collapse: collapse; width: 100%; border-width: 0px;" border="1"><colgroup><col style="width: 99.9193%;"></colgroup>
<tbody>
<tr>
<td style="text-align: justify; border-width: 0px;"><strong>M&Ocirc; TẢ</strong></td>
</tr>
<tr>
<td style="text-align: justify; border-width: 0px;">{{{ReportContent}}}</td>
</tr>
<tr>
<td style="text-align: justify; border-width: 0px;"><strong>KẾT LUẬN</strong></td>
</tr>
<tr>
<td style="text-align: justify; border-width: 0px;"><strong>{{{ReportConclusion}}}</strong></td>
</tr>
</tbody>
</table>
<table class="MsoNormalTable" style="border-collapse: collapse; width: 100%; height: 186px; border-width: 0px; border-spacing: 0px;" border="1" width="100%" cellspacing="0" cellpadding="0">
<tbody style="page-break-inside: avoid; page-break-after: auto;">
<tr style="height: 49px;">
<td style="padding: 0.75pt; width: 42.811%; height: 49px; vertical-align: bottom; text-align: justify; border-width: 0px;" colspan="2">
<p class="MsoNormal" style="margin-bottom: 0.0001pt; line-height: 1.2;"><span style="font-family: 'times new roman', times, serif;"><span style="font-size: 10pt; font-family: 'times new roman', times, serif;">Vui l&ograve;ng truy cập địa chỉ <a href="http://portal.vindr.ai"><span style="color: blue;">http://portal.vindr.ai </span></a>hoặc qu&eacute;t m&atilde; QR để xem h&igrave;nh ảnh v&agrave; kết quả</span></span></p>
<p class="MsoNormal" style="margin-bottom: 0.0001pt; line-height: 1.2;"><span style="font-family: 'times new roman', times, serif;"><span style="font-size: 10pt; font-family: 'times new roman', times, serif;"><em>(xem tr&ecirc;n tr&igrave;nh duyệt chrome)</em></span></span></p>
</td>
<td style="padding: 0.75pt; width: 14.7123%; height: 186px; border-width: 0px;" rowspan="2">
<p class="MsoNormal" style="mso-margin-top-alt: auto; mso-margin-bottom-alt: auto; text-align: center; line-height: normal;" align="center"><span style="font-size: 12pt; font-family: 'times new roman', times, serif;">&nbsp;</span></p>
</td>
<td style="padding: 0.75pt; height: 186px; width: 42.4767%; border-width: 0px;" rowspan="2">
<p class="MsoNormal" style="mso-margin-top-alt: auto; mso-margin-bottom-alt: auto; text-align: center; line-height: normal;" align="center"><span style="font-size: 12pt; font-family: 'times new roman', times, serif;">H&agrave; Nội, ng&agrave;y {{{ReportDateTime}}}</span></p>
<p class="MsoNormal" style="mso-margin-top-alt: auto; mso-margin-bottom-alt: auto; text-align: center; line-height: normal;" align="center"><span style="font-family: 'times new roman', times, serif;"><strong><span style="font-size: 12pt;">B&Aacute;C SỸ CHUY&Ecirc;N KHOA</span></strong></span></p>
<p class="MsoNormal" style="mso-margin-top-alt: auto; mso-margin-bottom-alt: auto; text-align: center; line-height: normal;" align="center"><span style="font-family: 'times new roman', times, serif;"><strong><span style="font-size: 12pt;">{{{Signature}}}<br>{{{Approver}}}</span></strong></span></p>
</td>
</tr>
<tr style="height: 137px;">
<td style="width: 12.5202%; padding: 0.75pt; height: 137px; text-align: justify; border-width: 0px;" width="26%">
<p class="MsoNormal" style="margin-bottom: .0001pt; line-height: normal;"><span style="font-family: 'times new roman', times, serif;">{{{QRCode}}}<br></span></p>
</td>
<td style="width: 30.2908%; padding: 0.75pt; height: 137px; text-align: justify; border-width: 0px;" width="35%">
<p class="MsoNormal" style="mso-margin-top-alt: auto; mso-margin-bottom-alt: auto; line-height: normal;"><span style="font-size: 10pt; font-family: 'times new roman', times, serif;"><strong>T&agrave;i khoản: {{{PatientPhone}}}<br>Mật khẩu: <span style="color: #3598db;">{{{Password}}}</span></strong></span></p>
<p class="MsoNormal" style="mso-margin-top-alt: auto; mso-margin-bottom-alt: auto; line-height: normal;"><span style="font-size: 10pt; font-family: 'times new roman', times, serif;"><em>Vui l&ograve;ng thay đổi mật khẩu khi đăng nhập lần đầu th&agrave;nh c&ocirc;ng!</em></span></p>
</td>
</tr>
</tbody>
</table>
<p><span style="font-size: 10pt; font-family: 'times new roman', times, serif;"><em>Mọi chi tiết xin li&ecirc;n hệ để được hỗ trợ: Số điện thoại<strong> {{{InstitutionPhone}}}</strong> / Email: <strong>{{{InstitutionEmail}}}</strong> . Xin cảm ơn!</em></span></p>`,
};
