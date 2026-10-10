"use client";

import Link from "next/link";
import { FigmaIcon } from "@/components/icons/figma-icon";
import { UserMenu } from "@/components/layout/user-menu";

export function DesktopHeader({
  breadcrumbs,
}: {
  breadcrumbs: { label: string; href?: string }[];
}) {
  return (
    <header className="hidden h-20 items-center gap-5 border-b border-[#e3e3e8] bg-white px-6 py-4 lg:flex">
      <nav className="flex min-w-0 flex-1 items-center gap-1 text-base text-[#717184]">
        {breadcrumbs.map((crumb, i) => {
          const last = i === breadcrumbs.length - 1;
          return (
            <span key={`${crumb.label}-${i}`} className="flex items-center gap-2 truncate">
              {crumb.href && !last ? (
                <Link href={crumb.href} className="hover:text-[#42424d]">
                  {crumb.label}
                </Link>
              ) : (
                <span className={last ? "font-medium text-primary-600" : undefined}>{crumb.label}</span>
              )}
              {!last && <FigmaIcon name="angleRight" size={16} />}
            </span>
          );
        })}
      </nav>

      <Link
        href="/ai"
        className="relative inline-flex h-[42px] items-center gap-2 overflow-hidden rounded-lg border border-primary-600 bg-white px-4 shadow-[0px_-4px_10px_0px_rgba(17,100,109,0.1)]"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-[-1px] rounded-lg"
          style={{
            backgroundImage:
              "linear-gradient(-8.63deg, rgba(255,255,255,0.55) 12.376%, rgba(255,255,255,0.08) 38.713%, rgba(255,255,255,0) 87.624%)",
          }}
        />
        <FigmaIcon name="sparkleAi" size={20} className="relative z-[1]" />
        <span
          className="relative z-[1] text-sm font-medium"
          style={{
            backgroundImage: "linear-gradient(90deg, rgba(4, 91, 101, 0.6) 0%, #045b65 50%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          AI Assistant
        </span>
      </Link>

      <div className="flex items-center">
        <button
          type="button"
          className="inline-flex size-12 items-center justify-center rounded-full bg-white text-[#717184] hover:bg-[#f4f4f6]"
          aria-label="Search"
        >
          <FigmaIcon name="search" size={24} />
        </button>
        <Link
          href="/notifications"
          className="relative inline-flex size-12 items-center justify-center"
          aria-label="Notifications"
        >
          <FigmaIcon name="bellNotif" size={48} />
        </Link>
      </div>

      <div className="h-10 w-px bg-[#e3e3e8]" />

      <UserMenu />
    </header>
  );
}
