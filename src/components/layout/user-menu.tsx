"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LogOut, Settings, User } from "lucide-react";
import { assets } from "@/lib/assets";
import { cn } from "@/lib/utils";

export function UserMenu({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex items-center rounded-full text-left transition-colors hover:bg-[#f4f4f6]",
          compact ? "p-0" : "w-[150px] gap-4 rounded-lg p-0",
        )}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <span className={cn("relative shrink-0 overflow-hidden rounded-full", compact ? "size-9" : "size-10")}>
          <Image
            src={assets.avatarHeader}
            alt="Jamal Ray Raxi"
            width={compact ? 36 : 40}
            height={compact ? 36 : 40}
            className="size-full object-cover"
          />
        </span>
        {!compact && (
          <span className="min-w-0">
            <span className="block truncate text-sm font-medium leading-[22px] text-[#42424d]">
              Jamal Ray Raxi
            </span>
            <span className="block text-xs leading-[19px] text-[#717184]">Administrator</span>
          </span>
        )}
      </button>

      {open && (
        <div
          role="menu"
          className={cn(
            "absolute z-50 mt-2 w-52 overflow-hidden rounded-[12px] border border-[#e3e3e8] bg-white py-1 shadow-[0_8px_24px_rgba(16,24,40,0.12)]",
            compact ? "right-0" : "right-0",
          )}
        >
          <div className="border-b border-[#e3e3e8] px-3 py-2.5">
            <p className="truncate text-sm font-medium text-[#42424d]">Jamal Ray Raxi</p>
            <p className="truncate text-xs text-[#717184]">jamal@goodra.app</p>
          </div>
          <Link
            href="/settings"
            role="menuitem"
            className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-[#42424d] hover:bg-[#f4f4f6]"
            onClick={() => setOpen(false)}
          >
            <User className="h-4 w-4 text-[#717184]" strokeWidth={1.75} />
            Profile
          </Link>
          <Link
            href="/settings"
            role="menuitem"
            className="flex items-center gap-2.5 px-3 py-2.5 text-sm text-[#42424d] hover:bg-[#f4f4f6]"
            onClick={() => setOpen(false)}
          >
            <Settings className="h-4 w-4 text-[#717184]" strokeWidth={1.75} />
            Settings
          </Link>
          <div className="my-1 border-t border-[#e3e3e8]" />
          <Link
            href="/sign-in"
            role="menuitem"
            className="flex items-center gap-2.5 px-3 py-2.5 text-sm font-medium text-danger hover:bg-danger-bg"
            onClick={() => setOpen(false)}
          >
            <LogOut className="h-4 w-4" strokeWidth={1.75} />
            Log out
          </Link>
        </div>
      )}
    </div>
  );
}
