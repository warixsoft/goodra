import { AppShell } from "@/components/layout/app-shell";
import { EmptyState } from "@/components/ui/empty-state";
import { PageHeader } from "@/components/ui/page-header";

export default function BinsEmptyPage() {
  return (
    <AppShell breadcrumbs={[{ label: "Bin Location" }, { label: "First Timer" }]}>
      <PageHeader title="Bin Location" />
      <EmptyState
        title="No bin locations yet"
        description="Bins are generated when you create racks. Add a rack to start assigning storage."
        actionLabel="Add Rack"
      />
    </AppShell>
  );
}
