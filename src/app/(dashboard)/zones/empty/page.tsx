import { AppShell } from "@/components/layout/app-shell";
import { EmptyState } from "@/components/ui/empty-state";
import { PageHeader } from "@/components/ui/page-header";

export default function ZonesEmptyPage() {
  return (
    <AppShell breadcrumbs={[{ label: "Zone Management" }, { label: "First Timer" }]}>
      <PageHeader title="Zone Management" />
      <EmptyState
        title="No zones yet"
        description="Select a warehouse and create zones to organize racks and bin locations."
        actionLabel="Add Zone"
      />
    </AppShell>
  );
}
