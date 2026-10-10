import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/ui/page-header";
import { SuccessState } from "@/components/ui/success-state";

export default function MoveSuccessPage() {
  return (
    <AppShell breadcrumbs={[{ label: "Bin Location", href: "/bins" }, { label: "Move Success" }]}>
      <PageHeader title="Move Item" />
      <SuccessState
        title="Item moved successfully"
        description="12 pcs were transferred to the target bin location."
        primaryHref="/bins"
        primaryLabel="Back to bins"
      />
    </AppShell>
  );
}
