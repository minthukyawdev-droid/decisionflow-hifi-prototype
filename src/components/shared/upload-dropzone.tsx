import { FileUp, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

export function UploadDropzone() {
  return (
    <div className="flex min-h-72 flex-col items-center justify-center rounded-lg border border-dashed border-blue-200 bg-blue-50/40 p-8 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary shadow-sm">
        <Upload className="h-6 w-6" />
      </div>
      <h2 className="mt-5 text-lg font-semibold text-foreground">Drag and drop transcript file</h2>
      <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
        Supported file types: TXT, DOCX, PDF. The prototype uses mock extraction and does not upload files.
      </p>
      <Button variant="secondary" className="mt-5">
        <FileUp className="h-4 w-4" />
        Browse File
      </Button>
    </div>
  );
}
