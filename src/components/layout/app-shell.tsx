"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Sidebar } from "./sidebar";
import { MobileHeader } from "./mobile-header";
import { DesktopHeader } from "./desktop-header";
import { cn } from "@/lib/utils";

export function AppShell({
  children,
  breadcrumbs,
}: {
  children: React.ReactNode;
  breadcrumbs: { label: string; href?: string }[];
}) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <div className="flex min-h-screen bg-surface">
      <div className="hidden lg:block">
        <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((v) => !v)} />
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/45 backdrop-blur-[2px]"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative z-50 h-full w-[min(288px,78vw)] animate-in slide-in-from-left shadow-xl">
            <Sidebar
              collapsed={false}
              onToggle={() => setMobileOpen(false)}
              mobile
            />
          </div>
        </div>
      )}

      <div className={cn("flex min-w-0 flex-1 flex-col")}>
        <div className="sticky top-0 z-30 bg-surface/95 px-3 pt-3 backdrop-blur-md sm:px-4 lg:bg-white lg:px-0 lg:pt-0">
          <MobileHeader onMenuClick={() => setMobileOpen(true)} />
          <DesktopHeader breadcrumbs={breadcrumbs} />
        </div>
        <main className="mx-auto w-full max-w-[1440px] flex-1 px-3 py-4 sm:px-4 sm:py-5 lg:px-6 lg:py-6">
          {children}
        </main>
      </div>
    </div>
  );
}
