"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import { TextareaField } from "@/components/ui/textarea-field";

const initialFormState = {
  fullName: "",
  email: "",
  linkedin: "",
  company: "",
  role: "",
  message: "",
  consentGiven: false,
};

export function ContactForm() {
  const [formState, setFormState] = useState(initialFormState);
  const [status, setStatus] = useState<{
    kind: "idle" | "pending" | "success" | "error";
    message?: string;
  }>({
    kind: "idle",
  });

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ kind: "pending" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message ?? "Unable to submit the form right now.");
      }

      setStatus({
        kind: "success",
        message: "Thanks. I received your message.",
      });
      setFormState(initialFormState);
    } catch (error) {
      setStatus({
        kind: "error",
        message: error instanceof Error ? error.message : "Unable to submit the form right now.",
      });
    }
  }

  return (
    <form className="space-y-5" onSubmit={onSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <InputField
          label="Full name"
          name="fullName"
          value={formState.fullName}
          required
          onChange={(event) =>
            setFormState((current) => ({ ...current, fullName: event.target.value }))
          }
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          value={formState.email}
          hint="Optional. Share this if email is the best way to reply."
          onChange={(event) =>
            setFormState((current) => ({ ...current, email: event.target.value }))
          }
        />
        <InputField
          label="LinkedIn"
          name="linkedin"
          type="url"
          value={formState.linkedin}
          hint="Optional. Useful if LinkedIn is the easiest way to reach you."
          onChange={(event) =>
            setFormState((current) => ({ ...current, linkedin: event.target.value }))
          }
        />
        <InputField
          label="Company"
          name="company"
          value={formState.company}
          onChange={(event) =>
            setFormState((current) => ({ ...current, company: event.target.value }))
          }
        />
        <InputField
          label="Role"
          name="role"
          value={formState.role}
          onChange={(event) =>
            setFormState((current) => ({ ...current, role: event.target.value }))
          }
        />
      </div>

      <TextareaField
        label="Message"
        name="message"
        value={formState.message}
        hint="Optional. A short note is enough."
        onChange={(event) =>
          setFormState((current) => ({ ...current, message: event.target.value }))
        }
      />

      <label className="flex items-start gap-3 rounded-[24px] border border-line/70 bg-surface p-4 text-sm leading-6 text-muted">
        <input
          type="checkbox"
          checked={formState.consentGiven}
          required
          onChange={(event) =>
            setFormState((current) => ({ ...current, consentGiven: event.target.checked }))
          }
        />
        <span>
          By submitting this form, you agree that I may use the information you share here to
          respond. I keep data collection minimal.
        </span>
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={status.kind === "pending"}>
          {status.kind === "pending" ? "Sending..." : "Send message"}
        </Button>
        {status.message ? (
          <p className={status.kind === "error" ? "text-sm text-danger" : "text-sm text-muted"}>
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
