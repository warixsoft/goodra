import { AppShell } from "@/components/layout/app-shell";
import { EmptyState } from "@/components/ui/empty-state";
import { PageHeader } from "@/components/ui/page-header";

export default function RacksEmptyPage() {
  return (
    <AppShell breadcrumbs={[{ label: "Rack Management" }, { label: "First Timer" }]}>
      <PageHeader title="Rack Management" />
      <EmptyState
        title="No racks configured"
        description="Select a warehouse and zone, then add racks to create bin locations."
        actionLabel="Add Rack"
      />
    </AppShell>
  );
}
