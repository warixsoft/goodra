import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/ui/page-header";
import { SuccessState } from "@/components/ui/success-state";

export default function AddWarehouseSuccessPage() {
  return (
    <AppShell breadcrumbs={[{ label: "Warehouse", href: "/warehouses" }, { label: "Success" }]}>
      <PageHeader title="Add Warehouse" />
      <SuccessState
        title="Warehouse created"
        description="WH-006 Bali Regional Hub is ready. Add zones and racks to start receiving stock."
        primaryHref="/warehouses"
        primaryLabel="Back to overview"
        secondaryHref="/zones/add"
        secondaryLabel="Add zone"
      />
    </AppShell>
  );
}
