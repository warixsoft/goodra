import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { DataTablePage } from "@/components/ui/data-table-page";
import { stockInRows } from "@/lib/data";

export default function StockInPage() {
  return (
    <DataTablePage
      breadcrumbs={[{ label: "Transactions" }, { label: "Stock In" }]}
      title="Stock In"
      actions={
        <Link href="/transactions/stock-in/add">
          <Button>
            <Plus className="h-4 w-4" />
            Create Stock In
          </Button>
        </Link>
      }
      columns={["ID", "Supplier", "Items", "Warehouse", "Status", "Date", "Action"]}
      rows={stockInRows.map((r) => [
        <Link key="id" href={`/transactions/stock-in/${r.id}`} className="font-medium text-primary-700">
          {r.id}
        </Link>,
        r.supplier,
        String(r.items),
        r.warehouse,
        <StatusBadge key="s" status={r.status} />,
        <span key="d" className="text-text-secondary">{r.date}</span>,
        <Link key="a" href={`/transactions/stock-in/${r.id}`}>
          <Button size="sm" variant="outline">
            Open
          </Button>
        </Link>,
      ])}
    />
  );
}
