import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Pagination({
  page = 1,
  total = 3,
  showing = "Showing 1-9 of 240 entries",
}: {
  page?: number;
  total?: number;
  showing?: string;
}) {
  return (
    <div className="flex flex-col gap-3 border-t border-border px-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-4">
      <p className="text-xs text-text-secondary sm:text-sm">{showing}</p>
      <div className="flex items-center justify-between gap-3 sm:justify-end">
        <label className="hidden items-center gap-2 text-sm text-text-secondary md:flex">
          Show per page
          <select className="h-8 rounded-[8px] border border-border bg-white px-2 text-sm focus-ring">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
        </label>
        <div className="flex items-center gap-1">
          <button className="flex h-8 w-8 items-center justify-center rounded-[8px] border border-border bg-white text-text-secondary hover:bg-surface">
            <ChevronLeft className="h-4 w-4" />
          </button>
          {Array.from({ length: total }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-[8px] text-sm font-medium",
                n === page
                  ? "bg-primary-600 text-white"
                  : "border border-border bg-white text-text-secondary hover:bg-surface",
              )}
            >
              {n}
            </button>
          ))}
          <button className="flex h-8 w-8 items-center justify-center rounded-[8px] border border-border bg-white text-text-secondary hover:bg-surface">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
