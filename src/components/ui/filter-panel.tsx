"use client";

import { Button } from "./button";
import { SelectField, TextField } from "./form-field";

export function FilterPanel({
  open,
  onClose,
  fields = [
    { label: "Status", options: ["All", "Active", "Pending", "Completed"] },
    { label: "Warehouse", options: ["All", "WH-001", "WH-002", "WH-003"] },
    { label: "Date range", options: ["Today", "Last 7 days", "Last 30 days", "Custom"] },
  ],
}: {
  open: boolean;
  onClose: () => void;
  fields?: { label: string; options: string[] }[];
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-stretch sm:justify-end">
      <button type="button" className="absolute inset-0 bg-black/40" aria-label="Close" onClick={onClose} />
      <aside className="relative z-10 flex max-h-[90vh] w-full flex-col rounded-t-[16px] border border-border bg-white shadow-[var(--shadow-elevated)] sm:max-h-none sm:max-w-[380px] sm:rounded-none sm:rounded-l-[0]">
        <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-border sm:hidden" />
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <h2 className="text-lg font-semibold">Filter</h2>
          <button type="button" onClick={onClose} className="text-sm text-text-secondary hover:text-text">
            Close
          </button>
        </div>
        <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
          <TextField label="Keyword" placeholder="Search..." />
          {fields.map((f) => (
            <SelectField key={f.label} label={f.label} options={f.options} />
          ))}
        </div>
        <div className="flex gap-2 border-t border-border px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <Button variant="outline" className="flex-1" onClick={onClose}>
            Reset
          </Button>
          <Button className="flex-1" onClick={onClose}>
            Apply filter
          </Button>
        </div>
      </aside>
    </div>
  );
}
