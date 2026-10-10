import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";
import { stockOutRows } from "@/lib/data";

export default async function StockOutDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const row = stockOutRows.find((r) => r.id === id) ?? stockOutRows[0];
  const base = `/transactions/stock-out/${row.id}`;

  return (
    <AppShell breadcrumbs={[{ label: "Stock Out", href: "/transactions/stock-out" }, { label: row.id }]}>
      <PageHeader
        title={row.id}
        subtitle={`${row.order} · ${row.warehouse}`}
        actions={
          <>
            <StatusBadge status={row.status} />
            <Link href={`${base}/picking`}>
              <Button variant="outline">Start picking</Button>
            </Link>
            <Link href={`${base}/packing`}>
              <Button>Start packing</Button>
            </Link>
          </>
        }
      />
      <Card className="p-5 text-sm">
        <dl className="grid gap-4 sm:grid-cols-3">
          <div>
            <dt className="text-text-secondary">Items</dt>
            <dd className="font-medium">{row.items}</dd>
          </div>
          <div>
            <dt className="text-text-secondary">Date</dt>
            <dd className="font-medium">{row.date}</dd>
          </div>
          <div>
            <dt className="text-text-secondary">Status</dt>
            <dd>
              <StatusBadge status={row.status} />
            </dd>
          </div>
        </dl>
      </Card>
    </AppShell>
  );
}
