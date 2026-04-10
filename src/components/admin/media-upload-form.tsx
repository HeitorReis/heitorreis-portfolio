"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";

export function MediaUploadForm() {
  const [status, setStatus] = useState<string>("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("Uploading...");

    try {
      const response = await fetch("/api/media/upload", {
        method: "POST",
        body: formData,
      });

      const payload = (await response.json()) as { message?: string; filePath?: string };

      if (!response.ok) {
        throw new Error(payload.message ?? "Unable to upload file.");
      }

      setStatus(`Uploaded to ${payload.filePath}`);
      form.reset();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Unable to upload file.");
    }
  }

  return (
    <form className="space-y-5" onSubmit={onSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <InputField label="File" name="file" type="file" required />
        <InputField label="Alt text" name="altText" />
        <InputField label="Bucket ID" name="bucketId" defaultValue="portfolio-public" />
        <InputField label="Related entity type" name="relatedEntityType" />
        <InputField label="Related entity ID" name="relatedEntityId" />
      </div>
      <div className="flex items-center gap-4">
        <Button type="submit">Upload media</Button>
        {status ? <p className="text-sm text-muted">{status}</p> : null}
      </div>
    </form>
  );
}
