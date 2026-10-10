import Link from "next/link";
import { Maximize2, Plus, ZoomIn, ZoomOut, AlertTriangle, Building2, Grid3x3, Search, PieChart } from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHeader } from "@/components/ui/page-header";
import { StatCard } from "@/components/ui/stat-card";
import { StatusBadge } from "@/components/ui/status-badge";
import { warehouses } from "@/lib/data";
import { cn } from "@/lib/utils";

const filters = [
  { label: "All", count: 7, active: true },
  { label: "Healthy", count: 4 },
  { label: "Warning", count: 1 },
  { label: "Critical", count: 1 },
  { label: "Inactive", count: 1 },
];

function barTone(status: string) {
  if (status === "Critical") return "bg-danger";
  if (status === "Warning") return "bg-warning";
  if (status === "Inactive") return "bg-border-strong";
  return "bg-success";
}

export default function WarehousesPage() {
  return (
    <AppShell breadcrumbs={[{ label: "Warehouse", href: "/warehouses" }, { label: "Overview" }]}>
      <PageHeader
        title="Warehouse Overview"
        actions={
          <Link href="/warehouses/add">
            <Button>
              <Plus className="h-4 w-4" />
              Add Warehouse
            </Button>
          </Link>
        }
      />

      <div className="mb-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          tone="success"
          icon={<Building2 className="h-5 w-5" />}
          label="Total Warehouses"
          value="12 Warehouses"
          meta="10 Active • 2 Inactive"
        />
        <StatCard
          tone="info"
          icon={<PieChart className="h-5 w-5" />}
          label="Overall Occupancy"
          value="78% Occupied"
          meta="18,976 / 24,320 bin"
        />
        <StatCard
          tone="primary"
          icon={<Grid3x3 className="h-5 w-5" />}
          label="Available Bin Locations"
          value="5,344 Bin Locations"
          meta={<span className="text-success">22% Available</span>}
        />
        <StatCard
          tone="danger"
          icon={<AlertTriangle className="h-5 w-5" />}
          label="Needs Attention"
          value="4 Warehouses"
          meta={
            <span>
              <span className="text-danger">3 Critical</span> • <span className="text-warning">1 Warning</span>
            </span>
          }
        />
      </div>

      <Card className="overflow-hidden">
        <div className="flex flex-col gap-3 border-b border-border p-3 sm:p-4">
          <div className="flex items-center gap-2">
            <Input className="min-w-0 flex-1" placeholder="Search" leftIcon={<Search className="h-4 w-4" />} />
            <Button variant="outline" className="shrink-0 px-3" aria-label="Filter">
              Filter
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex min-w-0 flex-1 gap-1.5 overflow-x-auto pb-1 hide-scrollbar">
              {filters.map((f) => (
                <button
                  key={f.label}
                  className={cn(
                    "shrink-0 rounded-full px-3 py-1.5 text-xs font-medium",
                    f.active
                      ? "bg-primary-600 text-white"
                      : "bg-surface text-text-secondary hover:bg-primary-50",
                  )}
                >
                  {f.label} ({f.count})
                </button>
              ))}
            </div>
            <Link href="/warehouses/add" className="shrink-0">
              <Button className="px-3 sm:px-4" aria-label="Add warehouse">
                <Plus className="h-4 w-4" />
                <span className="hidden sm:inline">Add Warehouse</span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative min-h-[320px] bg-[radial-gradient(circle_at_30%_40%,#dbeafe_0%,transparent_45%),radial-gradient(circle_at_70%_60%,#d1fae5_0%,transparent_40%),linear-gradient(180deg,#eef2ff_0%,#f8fafc_100%)] sm:min-h-[420px] lg:min-h-[560px]">
          <div className="absolute left-3 top-3 z-10 hidden w-[min(100%-2rem,340px)] flex-col gap-3 lg:flex lg:left-4 lg:top-4">
            {warehouses.slice(0, 3).map((wh) => (
              <Link
                key={wh.id}
                href={`/warehouses/${wh.id}`}
                className="rounded-[12px] border border-white/60 bg-white/75 p-3 shadow-[var(--shadow-card)] backdrop-blur-md"
              >
                <div className="mb-1 flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-text">{wh.id}</span>
                  <StatusBadge status={wh.status} />
                </div>
                <p className="text-sm font-medium text-text">{wh.name}</p>
                <p className="mt-0.5 text-xs text-text-secondary">{wh.address}</p>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-border">
                  <div
                    className={cn("h-full rounded-full", barTone(wh.status))}
                    style={{ width: `${wh.occupancy}%` }}
                  />
                </div>
                <p className="mt-1.5 text-xs text-text-secondary">
                  {wh.occupied.toLocaleString()} / {wh.capacity.toLocaleString()} Occupied Bin Locations
                </p>
              </Link>
            ))}
          </div>

          <div className="absolute right-3 top-3 z-10 flex flex-col gap-2 lg:right-4 lg:top-4">
            {[Maximize2, ZoomIn, ZoomOut].map((Icon, i) => (
              <button
                key={i}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-text-secondary shadow-sm"
              >
                <Icon className="h-4 w-4" />
              </button>
            ))}
          </div>

          {warehouses.map((wh, i) => (
            <div
              key={wh.id}
              className="absolute flex flex-col items-center"
              style={{
                left: `${12 + i * 16}%`,
                top: `${28 + (i % 3) * 14}%`,
              }}
            >
              <span
                className={cn(
                  "h-3.5 w-3.5 rounded-full border-2 border-white shadow",
                  wh.status === "Healthy" && "bg-success",
                  wh.status === "Warning" && "bg-warning",
                  wh.status === "Critical" && "bg-danger",
                  wh.status === "Inactive" && "bg-text-muted",
                )}
              />
              <Badge tone="neutral" className="mt-1 bg-white/90 text-[10px]">
                {wh.id}
              </Badge>
            </div>
          ))}
        </div>

        {/* Mobile warehouse list under map */}
        <div className="space-y-3 border-t border-border p-3 lg:hidden">
          {warehouses.map((wh) => (
            <Link
              key={wh.id}
              href={`/warehouses/${wh.id}`}
              className="block rounded-[12px] border border-border bg-white p-3"
            >
              <div className="mb-1 flex items-center justify-between gap-2">
                <span className="text-sm font-semibold">{wh.id}</span>
                <StatusBadge status={wh.status} />
              </div>
              <p className="text-sm font-medium">{wh.name}</p>
              <p className="text-xs text-text-secondary">{wh.address}</p>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-border">
                <div
                  className={cn("h-full rounded-full", barTone(wh.status))}
                  style={{ width: `${wh.occupancy}%` }}
                />
              </div>
            </Link>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}
