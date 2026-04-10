export function Stat({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="surface-card rounded-[24px] border border-line/70 p-5">
      <p className="text-meta">{label}</p>
      <p className="mt-3 text-3xl font-semibold tracking-[-0.03em]">{value}</p>
    </div>
  );
}

