import { Attachment } from '@aranghat/components-react';

export default function States() {
  return (
    <>
      <Attachment state="idle" name="report.docx" description="Not uploaded" />
      <Attachment state="uploading" progress="42" name="report.docx" />
      <Attachment state="processing" name="report.docx" />
      <Attachment state="error" name="report.docx" description="Too large (max 10 MB)" />
      <Attachment state="done" name="report.docx" description="DOCX · 340 KB" />
    </>
  );
}
