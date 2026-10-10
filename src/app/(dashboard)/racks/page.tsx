import Link from "next/link";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { DataTablePage } from "@/components/ui/data-table-page";
import { racks } from "@/lib/data";

export default function RacksPage() {
  return (
    <DataTablePage
      breadcrumbs={[{ label: "Warehouse", href: "/warehouses" }, { label: "Rack Management" }]}
      title="Rack Management"
      actions={
        <>
          <Link href="/racks/layout-map">
            <Button variant="outline">Layout map</Button>
          </Link>
          <Link href="/racks/add">
            <Button>
              <Plus className="h-4 w-4" />
              Add Rack
            </Button>
          </Link>
        </>
      }
      columns={["Code", "Zone", "Levels", "Bins", "Occupancy", "Status", "Action"]}
      rows={racks.map((r) => [
        <Link key="c" href={`/racks/${r.code}`} className="font-medium text-primary-700">
          {r.code}
        </Link>,
        r.zone,
        String(r.levels),
        String(r.bins),
        <div key="o" className="w-28">
          <div className="mb-1 text-xs">{r.occupancy}%</div>
          <div className="h-1.5 overflow-hidden rounded-full bg-border">
            <div className="h-full rounded-full bg-primary-600" style={{ width: `${r.occupancy}%` }} />
          </div>
        </div>,
        <StatusBadge key="s" status={r.status} />,
        <span key="a" className="text-text-secondary">⋯</span>,
      ])}
    />
  );
}
