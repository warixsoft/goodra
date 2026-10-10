import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { DataTablePage } from "@/components/ui/data-table-page";
import { zones } from "@/lib/data";

export default function ZonesPage() {
  return (
    <DataTablePage
      breadcrumbs={[{ label: "Warehouse", href: "/warehouses" }, { label: "Zone Management" }]}
      title="Zone Management"
      actions={
        <Link href="/zones/add">
          <Button>
            <Plus className="h-4 w-4" />
            Add Zone
          </Button>
        </Link>
      }
      columns={["Code", "Name", "Warehouse", "Racks", "Bins", "Status", "Action"]}
      rows={zones.map((z) => [
        <Link key="c" href={`/zones/${z.code}`} className="font-medium text-primary-700">
          {z.code}
        </Link>,
        z.name,
        z.warehouse,
        String(z.racks),
        String(z.bins),
        <StatusBadge key="s" status={z.status} />,
        <span key="a" className="text-text-secondary">⋯</span>,
      ])}
    />
  );
}
