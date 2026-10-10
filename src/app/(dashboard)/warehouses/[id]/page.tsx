import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { StatCard } from "@/components/ui/stat-card";
import { StatusBadge } from "@/components/ui/status-badge";
import { warehouses, zones } from "@/lib/data";
import { Grid3x3, Layers, MapPinned } from "lucide-react";

export default async function WarehouseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const wh = warehouses.find((w) => w.id === id) ?? warehouses[0];
  const whZones = zones.filter((z) => z.warehouse === wh.id);

  return (
    <AppShell
      breadcrumbs={[
        { label: "Warehouse", href: "/warehouses" },
        { label: "Overview", href: "/warehouses" },
        { label: wh.id },
      ]}
    >
      <PageHeader
        title={wh.name}
        subtitle={wh.address}
        actions={
          <>
            <StatusBadge status={wh.status} />
            <Link href="/zones">
              <Button variant="outline">Manage Zones</Button>
            </Link>
            <Button>Edit Warehouse</Button>
          </>
        }
      />
      <div className="mb-5 grid gap-3 sm:grid-cols-3">
        <StatCard tone="primary" icon={<MapPinned className="h-5 w-5" />} label="Occupancy" value={`${wh.occupancy}%`} meta={`${wh.occupied} / ${wh.capacity} bins`} />
        <StatCard tone="info" icon={<Layers className="h-5 w-5" />} label="Zones" value={`${whZones.length || 2} Zones`} />
        <StatCard tone="success" icon={<Grid3x3 className="h-5 w-5" />} label="Available" value={`${wh.capacity - wh.occupied} Bins`} />
      </div>
      <Card>
        <div className="border-b border-border px-5 py-4">
          <h2 className="font-semibold">Zones in {wh.id}</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface text-text-secondary">
              <tr>
                {["Code", "Name", "Racks", "Bins", "Status"].map((h) => (
                  <th key={h} className="px-4 py-3 font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(whZones.length ? whZones : zones.slice(0, 2)).map((z) => (
                <tr key={z.code} className="border-t border-border">
                  <td className="px-4 py-3 font-medium text-primary-700">{z.code}</td>
                  <td className="px-4 py-3">{z.name}</td>
                  <td className="px-4 py-3">{z.racks}</td>
                  <td className="px-4 py-3">{z.bins}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={z.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </AppShell>
  );
}
