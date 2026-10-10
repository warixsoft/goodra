"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export function Tabs({
  items,
  active,
}: {
  items: { label: string; href: string }[];
  active: string;
}) {
  return (
    <div className="mb-5 flex flex-wrap gap-1 border-b border-border">
      {items.map((item) => {
        const isActive = active === item.href || active === item.label;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "-mb-px border-b-2 px-4 py-2.5 text-sm font-medium transition-colors",
              isActive
                ? "border-primary-600 text-primary-700"
                : "border-transparent text-text-secondary hover:text-text",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

export function PillTabs({
  items,
  active,
  onChange,
}: {
  items: string[];
  active: string;
  onChange?: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => onChange?.(item)}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-medium",
            active === item
              ? "bg-primary-600 text-white"
              : "bg-surface text-text-secondary hover:bg-primary-50",
          )}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
