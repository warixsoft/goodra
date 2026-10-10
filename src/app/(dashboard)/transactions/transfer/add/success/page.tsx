import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/ui/page-header";
import { SuccessState } from "@/components/ui/success-state";

export default function TransferSuccessPage() {
  return (
    <AppShell breadcrumbs={[{ label: "Transfer", href: "/transactions/transfer" }, { label: "Success" }]}>
      <PageHeader title="Create Transfer" />
      <SuccessState
        title="Transfer created"
        description="TR-3302 is ready. Track receiving and putaway on the detail page."
        primaryHref="/transactions/transfer/TR-3301"
        primaryLabel="Open transfer"
        secondaryHref="/transactions/transfer"
        secondaryLabel="Back to list"
      />
    </AppShell>
  );
}
