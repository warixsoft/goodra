import { AppShell } from "@/components/layout/app-shell";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";
import { adjustmentRows } from "@/lib/data";

export default async function AdjustmentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const row = adjustmentRows.find((r) => r.id === id) ?? adjustmentRows[0];

  return (
    <AppShell breadcrumbs={[{ label: "Stock Adjustment", href: "/transactions/adjustment" }, { label: row.id }]}>
      <PageHeader
        title={row.id}
        subtitle={row.reason}
        actions={
          <>
            <StatusBadge status={row.status} />
            <Button variant="outline">Reject</Button>
            <Button>Approve</Button>
          </>
        }
      />
      <Card className="max-w-xl space-y-3 p-5 text-sm">
        <p>
          <span className="text-text-secondary">SKU</span>
          <br />
          <span className="font-medium">{row.sku}</span>
        </p>
        <p>
          <span className="text-text-secondary">Qty</span>
          <br />
          <span className="font-medium">{row.qty > 0 ? `+${row.qty}` : row.qty}</span>
        </p>
        <p>
          <span className="text-text-secondary">Warehouse</span>
          <br />
          <span className="font-medium">{row.warehouse}</span>
        </p>
      </Card>
    </AppShell>
  );
}
