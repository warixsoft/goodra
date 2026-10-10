import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/ui/page-header";
import { SuccessState } from "@/components/ui/success-state";

export default function AddZoneSuccessPage() {
  return (
    <AppShell breadcrumbs={[{ label: "Zone Management", href: "/zones" }, { label: "Success" }]}>
      <PageHeader title="Add Zone" />
      <SuccessState
        title="Zone created"
        description="Zone A-03 Cold Storage was added. You can now create racks inside this zone."
        primaryHref="/zones"
        primaryLabel="Back to zones"
        secondaryHref="/racks/add"
        secondaryLabel="Add rack"
      />
    </AppShell>
  );
}
