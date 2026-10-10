import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { DataTablePage } from "@/components/ui/data-table-page";
import { stockOutRows } from "@/lib/data";

export default function StockOutPage() {
  return (
    <DataTablePage
      breadcrumbs={[{ label: "Transactions" }, { label: "Stock Out" }]}
      title="Stock Out"
      actions={
        <Link href="/transactions/stock-out/add">
          <Button>
            <Plus className="h-4 w-4" />
            Create Stock Out
          </Button>
        </Link>
      }
      columns={["ID", "Order", "Items", "Warehouse", "Status", "Date", "Action"]}
      rows={stockOutRows.map((r) => [
        <Link key="id" href={`/transactions/stock-out/${r.id}`} className="font-medium text-primary-700">
          {r.id}
        </Link>,
        r.order,
        String(r.items),
        r.warehouse,
        <StatusBadge key="s" status={r.status} />,
        <span key="d" className="text-text-secondary">{r.date}</span>,
        <Link key="a" href={`/transactions/stock-out/${r.id}`}>
          <Button size="sm" variant="outline">
            Open
          </Button>
        </Link>,
      ])}
    />
  );
}
