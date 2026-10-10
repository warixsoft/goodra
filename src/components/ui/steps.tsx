import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export function Steps({
  steps,
  current,
}: {
  steps: string[];
  current: number;
}) {
  return (
    <ol className="mb-6 flex flex-wrap items-center gap-2">
      {steps.map((label, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <li key={label} className="flex items-center gap-2">
            {i > 0 && <span className="mx-1 hidden h-px w-8 bg-border sm:block" />}
            <span
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium",
                done && "bg-primary-50 text-primary-700",
                active && "bg-primary-600 text-white",
                !done && !active && "bg-surface text-text-muted",
              )}
            >
              <span
                className={cn(
                  "flex h-5 w-5 items-center justify-center rounded-full text-[10px]",
                  done && "bg-primary-600 text-white",
                  active && "bg-white/20 text-white",
                  !done && !active && "bg-border text-text-secondary",
                )}
              >
                {done ? <Check className="h-3 w-3" /> : i + 1}
              </span>
              {label}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
