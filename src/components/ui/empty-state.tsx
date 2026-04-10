export function EmptyState({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="surface-card rounded-[28px] border border-dashed border-line/80 p-8 text-center">
      <p className="text-meta">Nothing public here yet</p>
      <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em]">{title}</h3>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-muted">{body}</p>
    </div>
  );
}
