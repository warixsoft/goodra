"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LogOut, X } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { FigmaIcon } from "@/components/icons/figma-icon";
import { NavIcon } from "@/components/icons/nav-icon";
import { mainNav, managementNav, settingsNav, type NavItem } from "@/lib/nav";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href?: string, children?: { href: string }[]) {
  if (href === "/") return pathname === "/";
  if (href && pathname.startsWith(href)) return true;
  return !!children?.some((c) => pathname.startsWith(c.href));
}

function NavGroup({
  title,
  items,
  collapsed,
  mobile,
}: {
  title: string;
  items: NavItem[];
  collapsed: boolean;
  mobile?: boolean;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState<Record<string, boolean>>({});

  return (
    <div className="mb-1">
      {!collapsed && (
        <p className="mb-1 pl-5 text-xs font-medium leading-[19px] text-[#717184]">
          {title}
        </p>
      )}
      <ul className="flex flex-col gap-1">
        {items.map((item) => {
          const active = isActive(pathname, item.href, item.children);
          const expanded = open[item.label] ?? active;
          const hasChildren = !!item.children?.length;

          if (!hasChildren && item.href) {
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  title={item.label}
                  className={cn(
                    "relative flex h-12 w-full items-center gap-4 overflow-hidden rounded-lg px-5 text-sm font-medium leading-[22px] transition-colors",
                    collapsed && "h-12 justify-center px-0",
                    active
                      ? "text-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1)]"
                      : "text-[#42424d] hover:bg-white/70",
                  )}
                >
                  {active && (
                    <span
                      aria-hidden
                      className="absolute inset-0 rounded-lg"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, rgba(4, 91, 101, 0.6) 0%, #045b65 50%)",
                      }}
                    />
                  )}
                  <span className="relative z-[1] flex items-center gap-4">
                    <NavIcon name={item.icon} className={cn(active && "brightness-0 invert")} />
                    {!collapsed && <span>{item.label}</span>}
                  </span>
                </Link>
              </li>
            );
          }

          // Teal selected style only when the parent itself is the selected row
          // (collapsed sidebar, or accordion closed). When expanded, keep dark
          // text — the child row carries the selection highlight.
          const selectedParent = active && (collapsed || !expanded);

          return (
            <li key={item.label}>
              <button
                type="button"
                title={item.label}
                onClick={() => setOpen((s) => ({ ...s, [item.label]: !expanded }))}
                className={cn(
                  "relative flex h-[50px] w-full items-center gap-4 overflow-hidden rounded-lg px-5 text-sm font-medium leading-[22px] transition-colors",
                  collapsed && "justify-center px-0",
                  selectedParent
                    ? "text-white shadow-[0px_4px_8px_0px_rgba(0,0,0,0.1)]"
                    : "text-[#42424d] hover:bg-white/70",
                )}
              >
                {selectedParent && (
                  <span
                    aria-hidden
                    className="absolute inset-0 rounded-lg"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, rgba(4, 91, 101, 0.6) 0%, #045b65 50%)",
                    }}
                  />
                )}
                <span className="relative z-[1] flex w-full items-center gap-4">
                  <NavIcon name={item.icon} className={cn(selectedParent && "brightness-0 invert")} />
                  {!collapsed && (
                    <>
                      <span className="flex-1 text-left">{item.label}</span>
                      <FigmaIcon
                        name="angleDown"
                        size={24}
                        className={cn(
                          "transition-transform",
                          expanded && "rotate-180",
                          selectedParent && "brightness-0 invert",
                        )}
                      />
                    </>
                  )}
                </span>
              </button>
              {!collapsed && expanded && item.children && (
                <ul className={cn("mt-1 space-y-0.5", mobile ? "pl-2" : "ml-5 border-l border-[#e3e3e8] pl-3")}>
                  {item.children.map((child) => {
                    const childActive = pathname.startsWith(child.href);
                    return (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={cn(
                            "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
                            childActive
                              ? "bg-[#e6eff0] font-medium text-primary-600"
                              : "text-[#717184] hover:bg-white/70 hover:text-[#42424d]",
                          )}
                        >
                          {mobile && <FigmaIcon name="arrowTurn" size={14} />}
                          {child.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Sidebar({
  collapsed,
  onToggle,
  mobile = false,
}: {
  collapsed: boolean;
  onToggle: () => void;
  mobile?: boolean;
}) {
  return (
    <aside
      className={cn(
        "flex h-screen shrink-0 flex-col bg-[#f4f4f6] transition-[width] duration-200",
        mobile ? "w-full" : "sticky top-0",
        !mobile && (collapsed ? "w-24" : "w-80"),
      )}
    >
      <div
        className={cn(
          "flex items-center px-6 py-8",
          collapsed && !mobile && "justify-center px-2 py-6",
          mobile && "justify-between border-b border-[#e3e3e8] py-4",
        )}
      >
        <Logo compact={collapsed && !mobile} href="/" />
        {mobile ? (
          <button
            type="button"
            onClick={onToggle}
            className="rounded-lg p-2 text-[#717184] hover:bg-white"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        ) : (
          <button
            type="button"
            onClick={onToggle}
            className={cn(
              "relative size-6 shrink-0",
              collapsed && "mt-2",
            )}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <span className="absolute left-0.5 top-0.5 size-5 rounded-[2.5px] bg-[#e3e3e8]" />
            <span
              className={cn(
                "absolute top-1 h-4 rounded-[2px] bg-[#717184] transition-all",
                collapsed ? "left-2.5 w-2" : "left-1 w-2",
              )}
            />
          </button>
        )}
      </div>
      <nav className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="flex flex-col gap-1">
          <NavGroup title="Main Feature" items={mainNav} collapsed={collapsed && !mobile} mobile={mobile} />
          <NavGroup title="Management" items={managementNav} collapsed={collapsed && !mobile} mobile={mobile} />
          <NavGroup title="System" items={settingsNav} collapsed={collapsed && !mobile} mobile={mobile} />
        </div>
      </nav>
      <div className="border-t border-[#e3e3e8] p-4">
        <Link
          href="/sign-in"
          title="Log out"
          className={cn(
            "flex h-12 items-center gap-4 rounded-lg px-5 text-sm font-medium text-[#42424d] transition-colors hover:bg-white",
            collapsed && !mobile && "justify-center px-0",
          )}
        >
          <LogOut className="h-5 w-5 shrink-0 text-[#717184]" strokeWidth={1.75} />
          {(!collapsed || mobile) && <span>Log out</span>}
        </Link>
      </div>
    </aside>
  );
}
