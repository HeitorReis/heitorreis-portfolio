import { cn } from "@/lib/utils";

interface Column<T> {
  key: string;
  header: string;
  render: (item: T) => React.ReactNode;
  className?: string;
}

export function AdminTable<T>({
  items,
  columns,
  emptyState,
}: {
  items: T[];
  columns: Column<T>[];
  emptyState: string;
}) {
  if (items.length === 0) {
    return (
      <div className="rounded-[28px] border border-dashed border-line bg-surface p-8 text-sm text-muted">
        {emptyState}
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[28px] border border-line/70 bg-surface shadow-[var(--shadow-sm)]">
      <table className="min-w-full divide-y divide-line/70">
        <thead className="bg-surface-muted">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={cn(
                  "px-4 py-3 text-left text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-muted",
                  column.className,
                )}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-line/60">
          {items.map((item, index) => (
            <tr key={index} className="align-top">
              {columns.map((column) => (
                <td key={column.key} className="px-4 py-4 text-sm text-fg">
                  {column.render(item)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

