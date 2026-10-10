import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { DataTablePage } from "@/components/ui/data-table-page";
import { opnameRows } from "@/lib/data";

export default function OpnamePage() {
  return (
    <DataTablePage
      breadcrumbs={[{ label: "Transactions" }, { label: "Stock Opname" }]}
      title="Stock Opname"
      actions={
        <Link href="/transactions/opname/start">
          <Button>
            <Plus className="h-4 w-4" />
            Start Opname
          </Button>
        </Link>
      }
      columns={["ID", "Warehouse", "Zone", "Progress", "Status", "Date", "Action"]}
      rows={opnameRows.map((r) => [
        <Link key="id" href={`/transactions/opname/${r.id}`} className="font-medium text-primary-700">
          {r.id}
        </Link>,
        r.warehouse,
        r.zone,
        <div key="p" className="w-32">
          <div className="mb-1 text-xs">{r.progress}%</div>
          <div className="h-1.5 overflow-hidden rounded-full bg-border">
            <div className="h-full rounded-full bg-primary-600" style={{ width: `${r.progress}%` }} />
          </div>
        </div>,
        <StatusBadge key="s" status={r.status} />,
        <span key="d" className="text-text-secondary">{r.date}</span>,
        <Link key="a" href={`/transactions/opname/${r.id}`}>
          <Button size="sm" variant="outline">
            Continue
          </Button>
        </Link>,
      ])}
    />
  );
}
