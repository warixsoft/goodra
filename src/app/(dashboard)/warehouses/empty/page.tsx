import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { EmptyState } from "@/components/ui/empty-state";
import { PageHeader } from "@/components/ui/page-header";

export default function WarehouseEmptyPage() {
  return (
    <AppShell breadcrumbs={[{ label: "Warehouse" }, { label: "First Timer" }]}>
      <PageHeader title="Warehouse Overview" />
      <EmptyState
        title="Set up your first warehouse"
        description="Create a warehouse to manage zones, racks, and bin locations for inbound and outbound operations."
        actionLabel="Add Warehouse"
      />
      <div className="mt-3 text-center">
        <Link href="/warehouses/add" className="text-sm text-primary-600">
          Go to add warehouse form →
        </Link>
      </div>
    </AppShell>
  );
}
