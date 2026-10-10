import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { DataTablePage } from "@/components/ui/data-table-page";
import { adjustmentRows } from "@/lib/data";

export default function AdjustmentPage() {
  return (
    <DataTablePage
      breadcrumbs={[{ label: "Transactions" }, { label: "Stock Adjustment" }]}
      title="Stock Adjustment"
      actions={
        <Link href="/transactions/adjustment/add">
          <Button>
            <Plus className="h-4 w-4" />
            New Adjustment
          </Button>
        </Link>
      }
      columns={["ID", "Reason", "SKU", "Qty", "Warehouse", "Status", "Action"]}
      rows={adjustmentRows.map((r) => [
        <Link key="id" href={`/transactions/adjustment/${r.id}`} className="font-medium text-primary-700">
          {r.id}
        </Link>,
        r.reason,
        r.sku,
        <span key="q" className="font-semibold">
          {r.qty > 0 ? `+${r.qty}` : r.qty}
        </span>,
        r.warehouse,
        <StatusBadge key="s" status={r.status} />,
        <Link key="a" href={`/transactions/adjustment/${r.id}`}>
          <Button size="sm" variant="outline">
            Open
          </Button>
        </Link>,
      ])}
    />
  );
}
