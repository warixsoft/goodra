import { Button } from "./button";
import { Inbox } from "lucide-react";

export function EmptyState({
  title,
  description,
  actionLabel,
}: {
  title: string;
  description: string;
  actionLabel?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-[12px] border border-dashed border-border bg-white px-6 py-16 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-50 text-primary-600">
        <Inbox className="h-7 w-7" />
      </div>
      <h3 className="text-lg font-semibold text-text">{title}</h3>
      <p className="mt-2 max-w-md text-sm text-text-secondary">{description}</p>
      {actionLabel && (
        <Button className="mt-5" size="md">
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
