import { cn } from "@/lib/utils";

/**
 * Desktop: classic table. Mobile: stacked cards using first column as title
 * and remaining columns as label/value rows.
 */
export function ResponsiveTable({
  columns,
  rows,
  className,
}: {
  columns: string[];
  rows: React.ReactNode[][];
  className?: string;
}) {
  return (
    <>
      {/* Mobile cards */}
      <div className={cn("space-y-3 p-3 md:hidden", className)}>
        {rows.map((row, i) => (
          <article key={i} className="rounded-[12px] border border-border bg-white p-3 shadow-[var(--shadow-card)]">
            <div className="mb-2 text-sm font-semibold text-text">{row[0]}</div>
            <dl className="space-y-2">
              {columns.slice(1).map((col, j) => (
                <div key={col} className="flex items-start justify-between gap-3 text-sm">
                  <dt className="shrink-0 text-text-muted">{col}</dt>
                  <dd className="min-w-0 text-right text-text">{row[j + 1]}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>

      {/* Desktop table */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="bg-surface text-text-secondary">
            <tr>
              {columns.map((c) => (
                <th key={c} className="px-4 py-3 font-medium">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-t border-border">
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-3 align-middle">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
