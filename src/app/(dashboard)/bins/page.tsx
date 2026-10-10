import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { DataTablePage } from "@/components/ui/data-table-page";
import { bins } from "@/lib/data";

export default function BinsPage() {
  return (
    <DataTablePage
      breadcrumbs={[{ label: "Warehouse", href: "/warehouses" }, { label: "Bin Location" }]}
      title="Bin Location"
      actions={
        <>
          <Link href="/bins/layout-map">
            <Button variant="outline">Layout map</Button>
          </Link>
          <Link href="/bins/move">
            <Button variant="outline">Move item</Button>
          </Link>
          <Link href="/racks/add">
            <Button>
              <Plus className="h-4 w-4" />
              Add via Rack
            </Button>
          </Link>
        </>
      }
      columns={["Bin Code", "Rack", "SKU", "Qty", "Capacity", "Status", "Action"]}
      rows={bins.map((b) => [
        <Link key="c" href={`/bins/${b.code}`} className="font-medium text-primary-700">
          {b.code}
        </Link>,
        b.rack,
        b.sku,
        String(b.qty),
        String(b.capacity),
        <StatusBadge key="s" status={b.status} />,
        <span key="a" className="text-text-secondary">⋯</span>,
      ])}
    />
  );
}
