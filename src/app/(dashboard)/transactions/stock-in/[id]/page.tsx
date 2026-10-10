import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";
import { Tabs } from "@/components/ui/tabs";
import { stockInRows } from "@/lib/data";

export default async function StockInDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const row = stockInRows.find((r) => r.id === id) ?? stockInRows[0];
  const base = `/transactions/stock-in/${row.id}`;

  return (
    <AppShell breadcrumbs={[{ label: "Stock In", href: "/transactions/stock-in" }, { label: row.id }]}>
      <PageHeader
        title={row.id}
        subtitle={`${row.supplier} · ${row.date}`}
        actions={
          <>
            <StatusBadge status={row.status} />
            <Link href={`${base}/qc`}>
              <Button>Start QC</Button>
            </Link>
          </>
        }
      />
      <Tabs
        active={base}
        items={[
          { label: "Detail", href: base },
          { label: "QC", href: `${base}/qc` },
        ]}
      />
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="space-y-3 p-5 text-sm">
          <h3 className="font-semibold">Header</h3>
          <p>
            <span className="text-text-secondary">Warehouse</span>
            <br />
            {row.warehouse}
          </p>
          <p>
            <span className="text-text-secondary">Items</span>
            <br />
            {row.items}
          </p>
        </Card>
        <Card className="lg:col-span-2 p-5">
          <h3 className="mb-3 font-semibold">Item list</h3>
          <div className="space-y-2 text-sm">
            {Array.from({ length: Math.min(row.items, 5) }, (_, i) => (
              <div key={i} className="flex justify-between rounded-[8px] border border-border px-3 py-2">
                <span>Line item {i + 1}</span>
                <span className="text-text-secondary">Qty {8 + i}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppShell>
  );
}
