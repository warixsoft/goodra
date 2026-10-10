import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { DataTablePage } from "@/components/ui/data-table-page";
import { transferRows } from "@/lib/data";

export default function TransferPage() {
  return (
    <DataTablePage
      breadcrumbs={[{ label: "Transactions" }, { label: "Transfer" }]}
      title="Transfer"
      actions={
        <Link href="/transactions/transfer/add">
          <Button>
            <Plus className="h-4 w-4" />
            Create Transfer
          </Button>
        </Link>
      }
      columns={["ID", "From", "To", "Items", "Status", "Date", "Action"]}
      rows={transferRows.map((r) => [
        <Link key="id" href={`/transactions/transfer/${r.id}`} className="font-medium text-primary-700">
          {r.id}
        </Link>,
        r.from,
        r.to,
        String(r.items),
        <StatusBadge key="s" status={r.status} />,
        <span key="d" className="text-text-secondary">{r.date}</span>,
        <Link key="a" href={`/transactions/transfer/${r.id}`}>
          <Button size="sm" variant="outline">
            Open
          </Button>
        </Link>,
      ])}
    />
  );
}
