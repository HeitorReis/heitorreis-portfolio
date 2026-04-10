export function AdminNote({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-[24px] border border-dashed border-line bg-surface-muted p-5">
      <p className="text-sm font-medium text-fg">{title}</p>
      <p className="mt-2 text-sm leading-7 text-muted">{body}</p>
    </div>
  );
}

