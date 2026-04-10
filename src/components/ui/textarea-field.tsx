import { cn } from "@/lib/utils";

interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  hint?: string;
  error?: string;
}

export function TextareaField({
  label,
  hint,
  error,
  className,
  id,
  ...props
}: TextareaFieldProps) {
  const textareaId = id ?? props.name;

  return (
    <label className="flex flex-col gap-2 text-sm text-fg" htmlFor={textareaId}>
      <span className="font-medium">{label}</span>
      <textarea
        id={textareaId}
        className={cn(
          "min-h-28 rounded-[24px] border border-line bg-surface px-4 py-3 text-sm outline-none",
          "placeholder:text-muted focus:border-accent focus:ring-4 focus:ring-accent/10",
          className,
        )}
        {...props}
      />
      {error ? <span className="text-sm text-danger">{error}</span> : null}
      {!error && hint ? <span className="text-sm text-muted">{hint}</span> : null}
    </label>
  );
}

