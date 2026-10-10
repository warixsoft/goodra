"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { FigmaIcon } from "@/components/icons/figma-icon";
import { UserMenu } from "@/components/layout/user-menu";

export function MobileHeader({ onMenuClick }: { onMenuClick?: () => void }) {
  return (
    <header className="flex h-14 items-center justify-between gap-2 rounded-[12px] border border-[#e3e3e8] bg-white px-3 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] lg:hidden">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] text-[#717184] hover:bg-[#f4f4f6]"
        onClick={onMenuClick}
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" strokeWidth={1.75} />
      </button>
      <div className="flex items-center gap-1">
        <Link
          href="/ai"
          className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-[10px] border border-primary-600"
          aria-label="AI Assistant"
        >
          <FigmaIcon name="sparkleAi" size={16} />
        </Link>
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-[10px] text-[#717184] hover:bg-[#f4f4f6]"
          aria-label="Search"
        >
          <FigmaIcon name="search" size={20} />
        </button>
        <Link
          href="/notifications"
          className="relative inline-flex h-9 w-9 items-center justify-center"
          aria-label="Notifications"
        >
          <FigmaIcon name="bellNotif" size={36} />
        </Link>
        <UserMenu compact className="ml-0.5" />
      </div>
    </header>
  );
}
