import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";
import { bins, racks } from "@/lib/data";

export default async function RackDetailPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const rack = racks.find((r) => r.code === code) ?? racks[0];
  const rackBins = bins.filter((b) => b.rack === rack.code);

  return (
    <AppShell breadcrumbs={[{ label: "Rack Management", href: "/racks" }, { label: rack.code }]}>
      <PageHeader
        title={rack.code}
        subtitle={`Zone ${rack.zone} · ${rack.occupancy}% occupied`}
        actions={
          <>
            <StatusBadge status={rack.status} />
            <Button variant="outline">Change status</Button>
            <Link href="/bins">
              <Button>View bins</Button>
            </Link>
          </>
        }
      />
      <div className="mb-4 grid gap-3 sm:grid-cols-3">
        <Card className="p-4">
          <p className="text-xs text-text-secondary">Levels</p>
          <p className="text-xl font-semibold">{rack.levels}</p>
        </Card>
        <Card className="p-4">
          <p className="text-xs text-text-secondary">Bins</p>
          <p className="text-xl font-semibold">{rack.bins}</p>
        </Card>
        <Card className="p-4">
          <p className="text-xs text-text-secondary">Occupancy</p>
          <p className="text-xl font-semibold">{rack.occupancy}%</p>
        </Card>
      </div>
      <Card>
        <div className="border-b border-border px-5 py-4 font-semibold">Bin locations</div>
        <div className="divide-y divide-border">
          {(rackBins.length ? rackBins : bins).map((b) => (
            <Link
              key={b.code}
              href={`/bins/${b.code}`}
              className="flex items-center justify-between px-5 py-3 text-sm hover:bg-surface"
            >
              <div>
                <p className="font-medium text-primary-700">{b.code}</p>
                <p className="text-text-secondary">
                  {b.sku} · {b.qty}/{b.capacity}
                </p>
              </div>
              <StatusBadge status={b.status} />
            </Link>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}
