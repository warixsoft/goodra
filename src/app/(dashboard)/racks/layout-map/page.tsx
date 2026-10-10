import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { racks } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function RackLayoutMapPage() {
  return (
    <AppShell breadcrumbs={[{ label: "Rack Management", href: "/racks" }, { label: "Layout Map" }]}>
      <PageHeader
        title="Rack Layout"
        actions={
          <Link href="/racks">
            <Button variant="outline">List view</Button>
          </Link>
        }
      />
      <Card className="p-5">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {racks.map((r) => (
            <Link
              key={r.code}
              href={`/racks/${r.code}`}
              className={cn(
                "rounded-[12px] border p-4 transition hover:shadow-[var(--shadow-card)]",
                r.status === "Healthy" && "border-success/30 bg-success-bg/40",
                r.status === "Warning" && "border-warning/30 bg-warning-bg/40",
                r.status === "Critical" && "border-danger/30 bg-danger-bg/40",
              )}
            >
              <p className="font-semibold text-text">{r.code}</p>
              <p className="mt-1 text-xs text-text-secondary">
                Zone {r.zone} · {r.occupancy}%
              </p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/80">
                <div className="h-full rounded-full bg-primary-600" style={{ width: `${r.occupancy}%` }} />
              </div>
            </Link>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}
