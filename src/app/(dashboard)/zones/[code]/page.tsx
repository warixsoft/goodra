import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";
import { Tabs } from "@/components/ui/tabs";
import { racks, zones } from "@/lib/data";

export default async function ZoneDetailPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const zone = zones.find((z) => z.code === code) ?? zones[0];
  const zoneRacks = racks.filter((r) => r.zone === zone.code);
  const base = `/zones/${zone.code}`;

  return (
    <AppShell breadcrumbs={[{ label: "Zone Management", href: "/zones" }, { label: zone.code }]}>
      <PageHeader
        title={zone.name}
        subtitle={`${zone.code} · ${zone.warehouse}`}
        actions={
          <>
            <StatusBadge status={zone.status} />
            <Link href="/racks/add">
              <Button>Add rack</Button>
            </Link>
          </>
        }
      />
      <Tabs
        active={base}
        items={[
          { label: "Overview", href: base },
          { label: "Racks", href: `${base}?tab=racks` },
          { label: "Activity", href: `${base}?tab=activity` },
        ]}
      />
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="space-y-3 p-5 text-sm">
          <h3 className="font-semibold">Zone information</h3>
          <p>
            <span className="text-text-secondary">Racks</span>
            <br />
            <span className="font-medium">{zone.racks}</span>
          </p>
          <p>
            <span className="text-text-secondary">Bins</span>
            <br />
            <span className="font-medium">{zone.bins}</span>
          </p>
        </Card>
        <Card className="lg:col-span-2">
          <div className="border-b border-border px-5 py-4 font-semibold">Racks in zone</div>
          <div className="divide-y divide-border">
            {(zoneRacks.length ? zoneRacks : racks).map((r) => (
              <Link
                key={r.code}
                href={`/racks/${r.code}`}
                className="flex items-center justify-between px-5 py-3 text-sm hover:bg-surface"
              >
                <div>
                  <p className="font-medium text-primary-700">{r.code}</p>
                  <p className="text-text-secondary">
                    {r.levels} levels · {r.bins} bins
                  </p>
                </div>
                <StatusBadge status={r.status} />
              </Link>
            ))}
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
