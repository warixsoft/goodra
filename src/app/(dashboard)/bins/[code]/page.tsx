import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";
import { Tabs } from "@/components/ui/tabs";
import { bins } from "@/lib/data";

export default async function BinDetailPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const bin = bins.find((b) => b.code === code) ?? bins[0];
  const base = `/bins/${bin.code}`;

  return (
    <AppShell breadcrumbs={[{ label: "Bin Location", href: "/bins" }, { label: bin.code }]}>
      <PageHeader
        title={bin.code}
        subtitle={`Rack ${bin.rack}`}
        actions={
          <>
            <StatusBadge status={bin.status} />
            <Link href="/bins/move">
              <Button variant="outline">Move item</Button>
            </Link>
            <Button>Print label</Button>
          </>
        }
      />
      <Tabs
        active={base}
        items={[
          { label: "Overview", href: base },
          { label: "Product Item", href: `${base}?tab=product` },
        ]}
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["SKU", bin.sku],
          ["Quantity", String(bin.qty)],
          ["Capacity", String(bin.capacity)],
          ["Fill", `${Math.round((bin.qty / bin.capacity) * 100) || 0}%`],
        ].map(([k, v]) => (
          <Card key={k} className="p-4">
            <p className="text-xs text-text-secondary">{k}</p>
            <p className="mt-1 text-lg font-semibold">{v}</p>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
