import { AppShell } from "@/components/layout/app-shell";
import { EmptyState } from "@/components/ui/empty-state";
import { PageHeader } from "@/components/ui/page-header";

export default function LowStockEmptyPage() {
  return (
    <AppShell breadcrumbs={[{ label: "Low Stock Alerts" }, { label: "Empty State" }]}>
      <PageHeader title="Low Stock Alerts" />
      <EmptyState
        title="No low stock alerts"
        description="All tracked SKUs are above their minimum thresholds. Goodra will notify you when inventory needs attention."
        actionLabel="View inventory"
      />
    </AppShell>
  );
}
